import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const BACKEND_URL =
  import.meta.env.DEV
    ? "http://127.0.0.1:8000"
    : "https://claybot-backend.onrender.com";

/**
 * Custom React hook for managing ClayBot sessions
 * Provides session management, message sending, and history clearing
 */
export const useChatBot = () => {
  const [sessionId, setSessionId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Generate session ID on mount
  useEffect(() => {
    setSessionId(generateSessionId());
  }, []);

  const generateSessionId = () => {
    return `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  /**
   * Send a message to the chatbot
   */
  const sendMessage = useCallback(async (message) => {
    if (!message.trim()) return null;

    setIsLoading(true);

    try {
      const response = await axios.post(`${BACKEND_URL}/chat`, {
        message: message,
        session_id: sessionId
      });

      setIsLoading(false);
      return response.data.response;
    } catch (error) {
      console.error('Error sending message:', error);
      setIsLoading(false);
      throw error;
    }
  }, [sessionId]);

  /**
   * Clear conversation history
   */
  const clearHistory = useCallback(async () => {
    try {
      await axios.post(`${BACKEND_URL}/clear-history?session_id=${sessionId}`);
      return true;
    } catch (error) {
      console.error('Error clearing history:', error);
      return false;
    }
  }, [sessionId]);

  /**
   * Start a new session
   */
  const startNewSession = useCallback(() => {
    setSessionId(generateSessionId());
  }, []);

  return {
    sessionId,
    sendMessage,
    clearHistory,
    startNewSession,
    isLoading
  };
};

export default useChatBot;
