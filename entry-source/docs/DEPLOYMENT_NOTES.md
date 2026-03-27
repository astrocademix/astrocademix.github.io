# Clay Portfolio Website — Deployment Notes

This document captures the full-stack deployment process, architecture decisions, and troubleshooting insights for this portfolio project and integrated chatbot system (ClayBot).

---

## Structure Overview

This project has two main parts:

1. **Frontend** (`/`)
   - React + Vite + Tailwind CSS
   - Hosted on **Netlify**
2. **Backend (ChatBot)** (`/chatbot-backend`)
   - FastAPI + Supabase + OpenAI
   - Hosted on **Render**

---

## Phase 1: Frontend (Portfolio Site)

### Tech Stack

- React + Vite
- Tailwind CSS
- React Router v6
- Framer Motion
- Hosted on: [Netlify](https://clay-portfolio.netlify.app)

### 🌐 Live URL

> [https://clay-portfolio.netlify.app](https://clay-portfolio.netlify.app)

### Key Features

- `/` - Main homepage with hero, skills, featured projects
- `/projects` - Categorized project gallery with AI/ML, CV, NLP tags
- Global floating ChatBot widget (`ClayBot`)
- Responsive & animated cosmic UI

### Deployment Steps

1. Connect GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add `vite.config.js` base if deploying under custom domain
5. Confirm chatbot backend origin is allowed via CORS regex on Render

---

## Phase 2: Backend (ClayBot)

### Tech Stack

- FastAPI (Python)
- OpenAI GPT-3.5 Turbo
- Embedding model: `text-embedding-3-small`
- Vector database: Supabase `pgvector`
- Hosted on: Render (Docker-based)

### API Endpoints

| Method | Endpoint     | Description                          |
|--------|--------------|--------------------------------------|
| POST   | `/chat`      | Handles questions, retrieves context |
| POST   | `/embed`     | Adds embedded document chunks        |
| GET    | `/healthz`   | Health check                         |

### File Highlights

- `app/main.py` – Entrypoint + CORS + health check
- `app/routes.py` – Routes: `/chat`, `/embed`
- `app/vectorstore.py` – Supabase insert/query logic
- `app/openai_utils.py` – Embedding + GPT functions
- `app/data_loader.py` – (Optional) auto-embed all markdown docs

### 🌐 Render Deployment

1. Create new **Web Service** (Docker)
2. Add `OPENAI_API_KEY`, `SUPABASE_URL`, `SUPABASE_KEY` to environment
3. Add CORS:  
```python
   allow_origin_regex="https://.*\.netlify\.app"
```

4. Expose port in Dockerfile via:

```dockerfile
   CMD ["sh", "-c", "uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-8000}"]
```

---

## Lessons Learned

| Issue                                        | Fix / Lesson                                              |
| -------------------------------------------- | --------------------------------------------------------- |
| WebGL Context Lost                           | Persist `<StarsCanvas />` globally in `main.jsx`          |
| `initialMessages` not rendering              | Use `createChatBotMessage()` in `config.js`               |
| Supabase insert fails silently               | Use `data, count = supabase.table(...).execute()` pattern |
| OpenAI SDK migration                         | New client: `client.embeddings.create()`                  |
| `ModuleNotFoundError: No module named 'app'` | Use: `python -m app.data_loader`                          |
| Netlify CORS issues                          | Must match exact domain with regex, not wildcard (`*`)    |
| Render quota for services                    | Use card or temporarily suspend inactive services         |

---

## Future Improvements

* [ ] Add markdown README embedding via `data_loader.py`
* [ ] Add filter/search to project gallery
* [ ] Set up uptime monitoring for `/healthz`
* [ ] Add chatbot logging & analytics (optional)

---

## Project Links

* Portfolio Live: [https://clay-portfolio.netlify.app](https://clay-portfolio.netlify.app)
* Chatbot API: `https://claybot-backend.onrender.com/chat`
* GitHub Repo: [https://github.com/McKlay/portfolio-website](https://github.com/McKlay/portfolio-website)

---

*Document created by Clay Mark Sarte — July 2025*

---
