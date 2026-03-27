import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "ClayBot",
  initialMessages: [
    createChatBotMessage("👋 Hi! I'm ClayBot, your guide to Clay's portfolio."),
    createChatBotMessage(
      "I can remember our conversation, so feel free to ask follow-up questions! Try asking: 'What projects has Clay worked on?' or 'What are Clay's skills?'"
    ),
  ],
  customStyles: {
    botMessageBox: { backgroundColor: "#374151" },
    chatButton: { backgroundColor: "#7c3aed" },
  },
  state: {
    sessionId: null, // Will be set by ActionProvider
  },
};

export default config;
