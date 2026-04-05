# Jason Peng Portfolio

Personal portfolio website built with TanStack Start + React.

## Development

```bash
npm install
npm run dev
```

### Chatbot Widget Integration

This portfolio loads the chatbot widget from the separate `portfolio-chatbot` project.

1. Copy `.env.example` to `.env`.
2. For local integration, keep:
   - `VITE_CHATBOT_WIDGET_URL=http://127.0.0.1:4173/dist/widget.js`
   - `VITE_CHATBOT_API_BASE_URL=http://127.0.0.1:8787`
3. Run all three processes:
   - Portfolio: `npm run dev` (this repo)
   - Chatbot Worker: `npm run dev:worker` (in `portfolio-chatbot`)
   - Chatbot widget static preview: `npm run preview:demo` (in `portfolio-chatbot`)

For production, set the env values to your deployed widget script URL and Worker base URL.

## Build

```bash
npm run build
```

## Notes

- Single-page portfolio at `/`
- Content is tailored from Jason Peng's resume
- Styling follows the Binary Slate-inspired visual system
