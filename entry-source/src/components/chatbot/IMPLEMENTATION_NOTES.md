# ClayBot Multi-Turn Conversation Implementation

## Overview
This implementation adds multi-turn conversation capabilities to ClayBot, enabling context-aware conversations where the bot remembers previous messages within a session.

## Features Implemented

### 1. **Session Management**
- Each chat session gets a unique session ID
- Session IDs persist throughout the conversation
- **Session persistence across widget close/open** - Sessions are stored in `localStorage`
- Backend maintains conversation history per session
- Closing the chat widget (X button) **clears backend conversation history**
- Session only resets when explicitly clicking "Clear" or "New"

### 2. **Multi-Turn Conversation**
- Users can ask follow-up questions within a session
- Bot maintains context from previous messages
- Natural conversation flow with references like "it", "that project", etc.
- Conversation history is managed on the backend only

### 3. **History Management**
- **Session Persistence**: Session ID saved to `localStorage` 
  - Session persists across widget close/open
  - Works across page refreshes
  - Backend maintains conversation history per session during active use
- **Backend Cleanup**: When widget is closed (X button), frontend calls `/clear-history` endpoint
  - Prevents backend memory accumulation
  - Keeps frontend simple (no message serialization issues)
- **Clear History**: Clears conversation history on backend and generates a new session ID
- **New Session**: Starts a completely fresh session with a new session ID
- **No Message Persistence**: Messages are NOT saved to localStorage
  - Avoids React element serialization issues
  - Simpler architecture
  - Users get fresh chat UI on each widget open

## File Changes

### `ActionProvider.jsx` ✅
**Features:**
- `generateSessionId()` - Creates unique session IDs
- `sessionId` property - Stores current session identifier
- **Session Persistence** - Uses `localStorage` to persist session IDs ONLY
- **Session Recovery** - Reuses persisted session ID on mount
- Updated `handleUserMessage()` - Sends session_id with each request
- `clearHistory()` - Calls backend `/clear-history` endpoint and creates new session
- `startNewSession()` - Generates new session ID and resets UI

**Storage Management:**
```javascript
const STORAGE_KEY = "claybot_session_id";
// No MESSAGES_STORAGE_KEY - messages are NOT persisted

// On mount: Load persisted session or create new
const persistedSessionId = localStorage.getItem(STORAGE_KEY);
if (persistedSessionId) {
  this.sessionId = persistedSessionId;
} else {
  this.sessionId = this.generateSessionId();
  localStorage.setItem(STORAGE_KEY, this.sessionId);
}

// On clear/new: Remove old session
localStorage.removeItem(STORAGE_KEY);
this.sessionId = this.generateSessionId();
localStorage.setItem(STORAGE_KEY, this.sessionId);
```

**API Changes:**
```javascript
// Chat endpoint
axios.post(`${BACKEND_URL}/chat`, {
  message,
  session_id: this.sessionId
})

// Clear history endpoint
axios.post(`${BACKEND_URL}/clear-history?session_id=${this.sessionId}`)
```

### `ChatWidget.jsx` ✅
**Features:**
- **Session Persistence** - Loads session ID from `localStorage` on mount
- **Backend Cleanup** - Calls `/clear-history` when widget closes (X button)
- Header bar with ClayBot branding
- "Clear" button - Clears history and creates new session
- "New" button - Starts completely new session
- **X button** - Closes widget AND clears backend history
- Force re-render capability using `key` prop
- Passes persisted session ID to ActionProvider via config

**Cleanup Flow:**
```javascript
// When X button is clicked
const handleClose = async () => {
  try {
    const sessionId = localStorage.getItem(SESSION_STORAGE_KEY);
    if (sessionId) {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/clear-history?session_id=${sessionId}`
      );
    }
  } catch (error) {
    console.error("Error clearing backend history:", error);
  }


### `config.js` ✅
**Updates:**
- Simplified to static configuration object
- No message loading from localStorage
- Clean initial messages on every widget open
- Widget configuration for HTML message rendering

**Configuration:**
```javascript
const config = {
  botName: "ClayBot",
  initialMessages: [
    createChatBotMessage("👋 Hi! I'm ClayBot..."),
    createChatBotMessage("I can remember our conversation...")
  ],
  widgets: [
    { widgetName: "htmlMessage", widgetFunc: (props) => <HTMLMessage {...props} /> }
  ],
  state: {
    sessionId: null // Set by ActionProvider
  }
};
```

### `MessageParser.js` ✅
**Updates:**
- Added documentation about multi-turn conversation
- Explains session-based context management

### `ChatBubble.css` ✅
**Styling:**
- Rounded corners for chat container
- Custom scrollbar styling
- Better visual integration with header
- Smooth scrolling behavior
- HTML content rendering styles

### `HTMLMessage.jsx` ✅
**Purpose:** Widget for rendering bot responses with HTML content
**Features:**
- Uses `dangerouslySetInnerHTML` to render HTML
- Receives parsed markdown as HTML via props.payload
- Styled for consistent appearance with chatbot UI

## Backend API Endpoints

### POST `/chat`
**Request:**
```json
{
  "message": "What projects has Clay worked on?",
  "session_id": "session-1234567890-abc123"
}
```

**Response:**
```json
{
  "response": "Clay has worked on several projects including..."
}
```

### POST `/clear-history?session_id={sessionId}`
**Response:**
```json
{
  "message": "Conversation history cleared for session {sessionId}"
}
```

## Usage Examples

### Session Persistence Flow
```
1. User opens chat → Check localStorage for session ID
2. If found → Load session ID (backend has history)
3. If not found → Create new session, show default messages
4. User: "What is the HandDigitRecognizer project?"
5. Bot responds → Backend stores in session history
6. User clicks X to close → Frontend calls /clear-history, backend cleans up
7. User reopens chat → Same session ID loaded, but fresh UI (no saved messages)
8. User: "What technologies does it use?" → New conversation (backend history was cleared)
```

### Basic Conversation Flow (Within Single Session)
```
User: "What is the HandDigitRecognizer project?"
Bot: "HandDigitRecognizer is a machine learning project..."

User: "What technologies does it use?"
Bot: "The HandDigitRecognizer project uses TensorFlow, Python..."
      ↑ Bot remembers context from previous question (same session)
```

### Clear History
```javascript
// User clicks "Clear" button
await actionProvider.clearHistory();
// Backend session cleared via /clear-history
// Old session removed from localStorage
// New session created and saved
// Default messages shown in UI
// Fresh conversation starts
```

### New Session
```javascript
// User clicks "New" button
actionProvider.startNewSession();
// Old session removed from localStorage
// New session created and saved
// Default messages shown in UI
// Completely fresh start
```

### Close Widget (X Button)
```javascript
// User clicks "X" button
await handleClose();
// Backend history cleared via /clear-history
// Session ID remains in localStorage
// Widget closes
// Next time widget opens: same session ID, but fresh UI and backend
```

## Environment Variables

No changes needed - uses existing configuration:
```javascript
const BACKEND_URL = import.meta.env.DEV
  ? "http://127.0.0.1:8000"
  : "https://claybot-backend.onrender.com";
```

## UI Components

### Header Controls
- **ClayBot** branding on left
- **Clear** button - Tooltipped with "Clear conversation history"
- **New** button - Tooltipped with "Start new session"
- **X** button - Closes widget and clears backend history

### Visual Hierarchy
```
┌─────────────────────────────┐
│ ClayBot     [Clear] [New] [X]│ ← Header
├─────────────────────────────┤
│ Bot: Hi! I'm ClayBot...    │
│ Bot: I can remember...     │
│                             │
│ User: What projects?       │
│ Bot: Clay has worked...    │
│                             │ ← Messages (scrollable)
│ User: Tell me more         │
│ Bot: The first project...  │
│                             │
├─────────────────────────────┤
│ [Type your message...]  [→]│ ← Input
└─────────────────────────────┘
```

## Testing

### Test Session Persistence
1. Open chat
2. Note the session ID in console
3. **Close chat (X button)**
4. **Reopen chat**
5. Session ID should be the same (but messages start fresh)

### Test Multi-Turn Conversation (Same Session)
1. Open chat
2. Ask: "What is the HandDigitRecognizer project?"
3. Follow up: "What technologies does it use?"
4. Bot should understand "it" refers to HandDigitRecognizer
5. **Close and reopen** - context is lost (backend cleared)

### Test Clear History
1. Have a conversation
2. Click "Clear" button
3. **Check localStorage** - Old session removed, new session created
4. **Check backend** - History cleared
5. Messages reset to defaults
6. Ask same question - bot treats as new topic

### Test New Session
1. Have a conversation
2. Click "New" button
3. **Check localStorage** - Old session removed, new session created
4. Completely fresh session
5. New session ID generated

### Test Backend Cleanup on Close
1. Have a conversation with context
2. **Close widget (X button)**
3. **Check network tab** - Should see POST to /clear-history
4. Reopen widget
5. Ask follow-up question - bot won't remember (history was cleared)

## Architecture Decisions

### Why Not Persist Messages?
**Problem:** React elements with `dangerouslySetInnerHTML` cannot be serialized to JSON
- Contains `$$typeof` and other non-serializable properties
- Causes "Objects are not valid as a React child" errors
- Complex to extract and reconstruct HTML content

**Solution:** Only persist session ID
- Simple and reliable
- No serialization issues
- Backend manages conversation history during active session
- Clean slate on widget reopen (good UX for portfolio site)

### Why Clear Backend on Widget Close?
**Problem:** Backend accumulates conversation history indefinitely
- Memory bloat on server
- Orphaned sessions when users leave site
- No user benefit (they see fresh UI anyway)

**Solution:** Clear backend history when widget closes
- Prevents memory leaks
- Keeps backend lightweight
- Session ID still persists (can track user across visits)
- Simple frontend implementation (one API call)

## Best Practices

1. **Session Persistence**: Session ID stored in `localStorage` - persists across page reloads
2. **No Message Persistence**: Messages NOT saved (avoids serialization issues)
3. **Backend Cleanup**: Backend history cleared on widget close
4. **Force Clear**: Users can click "Clear" or "New" to start fresh session
5. **Error Handling**: All API calls wrapped in try-catch with user-friendly errors
6. **Loading States**: Typing indicator shows while waiting for response
7. **Timeout**: 10s timeout for API requests
8. **Storage Keys**: 
   - `"claybot_session_id"` - Stores session identifier
   - No message storage key

## Future Enhancements

- [x] Persistent sessions (localStorage) ✅
- [x] Backend cleanup on close ✅
- [ ] Session history list (view past sessions)
- [ ] Export conversation (download as text/JSON)
- [ ] Voice input/output
- [ ] Suggested follow-up questions
- [ ] Session analytics
- [ ] Session expiration (e.g., 7 days auto-clear)

## Troubleshooting

### Session Persistence Flow
```
┌─────────────────┐
│  User Opens     │
│  Chat Widget    │
└────────┬────────┘
         │
         ▼
┌─────────────────────┐     Yes    ┌──────────────────────┐
│ Check localStorage  ├────────────►│ Load Session ID      │
│ - session_id        │            │ Show Default Msgs    │
└────────┬────────────┘            └──────────────────────┘
         │ No
         ▼
┌─────────────────────┐            ┌──────────────────────┐
│ Generate New        ├───────────►│ Save to localStorage │
│ - Session ID        │            │ - session_id         │
│ - Default Messages  │            └──────────────────────┘
└─────────────────────┘

User has conversation → Backend maintains history
User closes chat (X)  → Backend /clear-history called, session ID stays
User reopens chat     → Same session ID, fresh UI, clean backend
User clicks "Clear"   → New session ID, backend cleared
User clicks "New"     → New session ID, backend cleared
```

### Session Not Persisting
- Check browser's localStorage (DevTools → Application → Local Storage)
- Look for key: `claybot_session_id`
- Check backend logs for session management
- Verify session_id is sent in requests
- Check BACKEND_URL configuration
- Ensure localStorage is not disabled in browser

### Context Not Maintained Across Widget Close/Open
- **This is expected behavior!** Backend is cleared when widget closes
- Context only maintained within a single widget session
- Use "Clear" or "New" for explicit fresh start

### Backend History Not Clearing
- Check network tab for /clear-history request when X is clicked
- Verify backend endpoint is working
- Check for CORS issues
- Check console for error messages

## Dependencies

- `axios` - HTTP client
- `react-chatbot-kit` - Chatbot UI framework
- `marked` - Markdown to HTML parser
- `react` - UI library

No new dependencies required! ✅
