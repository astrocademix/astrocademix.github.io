import axios from "axios";
import { createChatBotMessage } from "react-chatbot-kit";
import { parseMarkdown } from "./parseMarkdown";

const BACKEND_URL =
  import.meta.env.DEV
    ? "http://127.0.0.1:8000" // ✅ local FastAPI server
    : "https://claybot-backend.onrender.com"; // ✅ production Render server

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    // Generate unique session ID for multi-turn conversation
    this.sessionId = this.generateSessionId();
    
    // Register this instance globally so ChatWidget can access it
    if (typeof window !== 'undefined') {
      window.currentActionProvider = this;
    }
  }

  /**
   * Generate a unique session ID
   */
  generateSessionId() {
    return `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  async handleUserMessage(message) {
    console.log("📤 Sending message to backend:", message);
    console.log("🔗 Backend URL:", BACKEND_URL);
    console.log("🆔 Session ID:", this.sessionId);
    
    // Show simulated "typing..." message
    const loadingMsg = this.createChatBotMessage(
      "ClayBot is typing..."
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, loadingMsg],
    }));

    try {
      console.log("⏳ Making API request...");
      const res = await axios.post(`${BACKEND_URL}/chat`, {
        message,
        session_id: this.sessionId,
      }, {
        timeout: 60000, // 60 second timeout for LLM processing
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log("✅ Response received:", res.data);
      
      // Parse markdown to HTML
      const htmlContent = parseMarkdown(res.data.response);
      
      // Create message with HTML content
      const botMessage = this.createChatBotMessage(
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      );

      // Replace typing msg with response
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages.slice(0, -1), botMessage],
      }));
      
    } catch (error) {
      console.error("❌ Error communicating with ClayBot:", error);
      console.error("Error details:", error.response?.data || error.message);
      console.error("Request config:", error.config);
      
      let errorMessage = "⚠️ Backend server is not responding. Please make sure:\n\n1. FastAPI server is running on port 8000\n2. Run: `uvicorn main:app --reload` in your backend directory\n3. Check the terminal for any errors";
      
      if (error.code === 'ECONNABORTED') {
        errorMessage = "⏱️ Request timed out after 60 seconds.\n\nThe backend server might be:\n• Taking too long to process the request\n• Having issues with the LLM API\n• Experiencing high load\n\nPlease check your FastAPI server logs for details.";
      } else if (error.response) {
        errorMessage = `❌ Server error (${error.response.status}).\n\n${error.response.data?.detail || 'Please check the server logs.'}`;
      } else if (error.request) {
        errorMessage = "🔌 Cannot connect to backend.\n\nMake sure:\n• FastAPI is running on http://127.0.0.1:8000\n• No firewall blocking the connection\n• CORS is properly configured";
      }
      
      const botMessage = this.createChatBotMessage(errorMessage);
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages.slice(0, -1), botMessage],
      }));
    }
  }

  /**
   * Start a new session (generates new session ID)
   */
  startNewSession() {
    this.sessionId = this.generateSessionId();
    
    // Reset messages to initial state
    const initialMessages = [
      createChatBotMessage("👋 Hi! I'm ClayBot, your guide to Clay's portfolio."),
      createChatBotMessage(
        "I can remember our conversation, so feel free to ask follow-up questions! Try asking: 'What projects has Clay worked on?' or 'What are Clay's skills?'"
      ),
    ];

    this.setState((prev) => ({
      ...prev,
      messages: initialMessages,
    }));
  }
}

export default ActionProvider;
