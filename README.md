# Jason Peng Portfolio

My personal portfolio site, built to showcase my past and ongoing projects, technical experience, and the kind of work I enjoy building.

The site uses TanStack Start and React, with a custom visual style inspired by sharp terminal interfaces. I wanted it to feel polished, personal, and more intentional than a standard portfolio template.

## What This Project Shows

This portfolio brings together my projects, experience, technical skills, and resume content in one place. It also includes a chatbot widget that can answer questions about my background using information from my resume and portfolio.

## Development

```bash
npm install
npm run dev
```

### Chatbot Widget Integration

This portfolio loads the chatbot widget from the separate `portfolio-chatbot` project.

1. Copy `.env.example` to `.env`.
2. For local integration, keep these values:

```bash
VITE_CHATBOT_WIDGET_URL=http://127.0.0.1:4173/dist/widget.js
VITE_CHATBOT_API_BASE_URL=http://127.0.0.1:8787
VITE_TURNSTILE_SITE_KEY=
```

The Turnstile site key is optional unless the Worker has `TURNSTILE_REQUIRED=true`.

3. Run the portfolio from this repo:

```bash
npm run dev
```

Then run the Worker and widget preview from the `portfolio-chatbot` project:

```bash
npm run dev:worker
npm run preview:demo
```

For production, set the env values to your deployed widget script URL and Worker base URL.

## Build

```bash
npm run build
```
