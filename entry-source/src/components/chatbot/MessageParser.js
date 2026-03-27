/**
 * MessageParser - Handles parsing of user messages
 * 
 * With multi-turn conversation enabled, the backend maintains
 * conversation context using session IDs. This allows for:
 * - Follow-up questions (e.g., "Tell me more about that")
 * - Contextual understanding across messages
 * - Natural conversation flow
 */
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    // All messages are handled through the action provider
    // which manages session state and backend communication
    this.actionProvider.handleUserMessage(message);
  }
}

export default MessageParser;
