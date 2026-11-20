# Mohamed AI

Mohamed AI is a bilingual, portfolio-scoped AI assistant for Mohamed Ali. Its launcher is part of `SiteChrome`; the responsive chat window opens when a visitor clicks the launcher or asks a question. The App Router endpoint streams Gemini text over Server-Sent Events (SSE). Conversation content is not persisted.

## Architecture

- `src/components/rabea-ai/`: Contains the floating launcher and accessible chat modal. Follows theme CSS variables, respects language settings, and supports RTL for Arabic.
- `src/app/api/rabea-ai/chat/route.js`: Validates same-origin requests, validates roles/history with Zod, applies rate limiting, and streams sanitized events.
- `src/lib/rabea-ai/provider.ts`: Provider boundary using `@google/genai` with fallback support.
- `src/lib/rabea-ai/knowledge/`: Contains Mohamed Ali's verified profile, education (MIS from El Shorouk Academy 2019-2023), Digilians 9-month diploma, skills, projects (Avicena, FitMate AI, ImpersonaGuard), and public contact links.
- `src/lib/rabea-ai/quick-answers.ts`: Bilingual fast answers and suggested questions evaluated client-side.
- `src/lib/rabea-ai/knowledge/faq.json`: 95-record verified FAQ corpus.
- `src/lib/rabea-ai/knowledge/evaluation-cases.json`: Test scenarios covering Arabic, English, privacy, prompt-injection, and out-of-scope queries.
- `src/lib/rabea-ai/prompts/system-prompt.ts`: Strict instructions enforcing identity boundaries for Mohamed Ali.

## Verification & Testing

Run tests with:
```bash
npm run test:rabea-ai
```
