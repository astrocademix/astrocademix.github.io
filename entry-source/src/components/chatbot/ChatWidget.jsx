import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./ChatBubble.css";

import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState(0); // Force re-render of chatbot

  const handleClearHistory = async () => {
    console.log("🧹 Clear button clicked");
    
    try {
      // Get the current action provider before remounting
      const currentProvider = window.currentActionProvider;
      if (currentProvider?.sessionId) {
        const sessionId = currentProvider.sessionId;
        console.log("🆔 Current session ID:", sessionId);
        
        // Call backend to clear history
        const BACKEND_URL = import.meta.env.DEV
          ? "http://127.0.0.1:8000"
          : "https://claybot-backend.onrender.com";
        
        console.log(`📡 Calling backend: ${BACKEND_URL}/clear-history?session_id=${sessionId}`);
        await fetch(`${BACKEND_URL}/clear-history?session_id=${sessionId}`, {
          method: 'POST'
        });
        console.log("✅ Backend history cleared");
      }
    } catch (error) {
      console.error("❌ Error clearing backend history:", error);
    }
    
    // Force chatbot to remount with fresh initial messages
    // This triggers a new ActionProvider instance with fresh state
    setKey(prevKey => prevKey + 1);
    console.log("🔄 Chat reset and remounted");
  };

  const handleCloseChat = async () => {
    console.log("❌ Chat widget closed");
    // Clear history when closing chat
    await handleClearHistory();
    // Close the chat widget
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Chatbot container */}
      {isOpen ? (
        <div className="w-[340px] bg-white rounded-xl shadow-2xl overflow-hidden animate-slideIn">
          {/* Header with controls */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-3 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-lg">🤖</span>
              </div>
              <div>
                <span className="font-semibold text-sm">ClayBot</span>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-xs text-purple-100">Online</span>
                </div>
              </div>
            </div>
            <div className="flex gap-1.5 items-center">
              <button
                onClick={handleClearHistory}
                className="text-xs bg-white/10 hover:bg-white/20 backdrop-blur-sm px-2.5 py-1.5 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 font-medium"
                title="Clear conversation history"
                aria-label="Clear history"
              >
                Clear
              </button>
              <button
                onClick={handleCloseChat}
                className="w-6 h-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center ml-1"
                title="Close chat"
                aria-label="Close chat"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Chatbot */}
          <Chatbot
            key={key}
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            placeholderText="Type your message here..."
            runInitialMessagesWithHistory={false}
            validator={(input) => {
              if (!input.trim()) return false;
              return true;
            }}
          />
        </div>
      ) : (
        /* Toggle Button */
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-5 py-2.5 rounded-full shadow-lg text-sm font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2"
          aria-label="Open chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          <span>Chat</span>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
