const STYLE_TEXT = "@import url(\"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600&family=Archivo:wght@400;600;700;900&display=swap\");\n\n:host {\n  all: initial;\n}\n\n.pcw-root,\n.pcw-root * {\n  box-sizing: border-box;\n  font-family: \"Space Grotesk\", \"Segoe UI\", sans-serif;\n}\n\n.pcw-root {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  z-index: 2147483000;\n  color: var(--pcw-text);\n  --pcw-accent: #60a5fa;\n  --pcw-accent-strong: #3b82f6;\n  --pcw-accent-support: #2dd4bf;\n  --pcw-accent-contrast: #09090b;\n  --pcw-text: #f4f4f5;\n  --pcw-text-soft: #d4d4d8;\n  --pcw-text-muted: #52525b;\n  --pcw-surface: #18181b;\n  --pcw-surface-alt: #111113;\n  --pcw-surface-soft: #1c1c1f;\n  --pcw-border: #27272a;\n  --pcw-border-strong: #3f3f46;\n  --pcw-header: #0c1829;\n  --pcw-user-bubble: #0c1829;\n  --pcw-user-border: #1e3a5f;\n  --pcw-user-text: #e0f2fe;\n  --pcw-header-grad:\n    linear-gradient(118deg, var(--pcw-accent) 0%, var(--pcw-accent-strong) 52%, var(--pcw-accent-support) 100%);\n  --pcw-surface-tint:\n    radial-gradient(circle at 86% -8%, color-mix(in srgb, var(--pcw-accent-support) 18%, transparent) 0%, transparent 52%),\n    radial-gradient(circle at -14% 116%, color-mix(in srgb, var(--pcw-accent) 16%, transparent) 0%, transparent 50%);\n  --pcw-launcher-grad:\n    linear-gradient(136deg, var(--pcw-accent) 0%, var(--pcw-accent-strong) 60%, var(--pcw-accent-support) 100%);\n  --pcw-launcher-ring: color-mix(in srgb, var(--pcw-accent-support) 24%, transparent);\n  --pcw-launcher-shadow:\n    0 18px 40px rgba(0, 0, 0, 0.45),\n    0 6px 14px rgba(45, 212, 191, 0.22);\n  --pcw-launcher-shadow-hover:\n    0 22px 50px rgba(0, 0, 0, 0.5),\n    0 8px 18px rgba(45, 212, 191, 0.3);\n  --pcw-panel-shadow:\n    0 30px 80px rgba(0, 0, 0, 0.6),\n    0 8px 20px rgba(0, 0, 0, 0.35);\n  --pcw-focus: #60a5fa;\n}\n\n.pcw-root[data-theme=\"light\"] {\n  --pcw-accent: #1d4ed8;\n  --pcw-accent-strong: #1e40af;\n  --pcw-accent-support: #0f766e;\n  --pcw-accent-contrast: #eff6ff;\n  --pcw-text: #0f172a;\n  --pcw-text-soft: #334155;\n  --pcw-text-muted: #64748b;\n  --pcw-surface: #ffffff;\n  --pcw-surface-alt: #f8fafc;\n  --pcw-surface-soft: #eef4fb;\n  --pcw-border: #cbd5e1;\n  --pcw-border-strong: #94a3b8;\n  --pcw-header: #dbeafe;\n  --pcw-user-bubble: #dbeafe;\n  --pcw-user-border: #93c5fd;\n  --pcw-user-text: #1e3a8a;\n  --pcw-header-grad:\n    linear-gradient(116deg, var(--pcw-accent) 0%, var(--pcw-accent-strong) 62%, var(--pcw-accent-support) 100%);\n  --pcw-surface-tint:\n    radial-gradient(circle at 86% -8%, color-mix(in srgb, var(--pcw-accent-support) 10%, white 90%) 0%, transparent 52%),\n    radial-gradient(circle at -14% 116%, color-mix(in srgb, var(--pcw-accent) 10%, white 90%) 0%, transparent 50%);\n  --pcw-launcher-grad:\n    linear-gradient(136deg, var(--pcw-accent) 0%, var(--pcw-accent-strong) 62%, var(--pcw-accent-support) 100%);\n  --pcw-launcher-ring: color-mix(in srgb, var(--pcw-accent-support) 20%, transparent);\n  --pcw-launcher-shadow:\n    0 18px 36px rgba(15, 23, 42, 0.12),\n    0 6px 14px rgba(15, 118, 110, 0.14);\n  --pcw-launcher-shadow-hover:\n    0 22px 44px rgba(15, 23, 42, 0.16),\n    0 8px 18px rgba(15, 118, 110, 0.18);\n  --pcw-panel-shadow:\n    0 28px 70px rgba(15, 23, 42, 0.16),\n    0 8px 20px rgba(15, 23, 42, 0.1);\n  --pcw-focus: #1d4ed8;\n}\n\n.pcw-launcher {\n  width: 60px;\n  height: 60px;\n  border: 0;\n  border-radius: 999px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  background: var(--pcw-launcher-grad);\n  color: var(--pcw-accent-contrast);\n  box-shadow: var(--pcw-launcher-shadow);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease, color 160ms ease;\n}\n\n.pcw-launcher::before {\n  content: \"\";\n  position: absolute;\n  inset: -10px;\n  border-radius: inherit;\n  pointer-events: none;\n  border: 1px solid var(--pcw-launcher-ring);\n  opacity: 0.5;\n  transform: scale(1);\n  animation: pcw-launcher-ring 2.2s ease-out infinite;\n}\n\n.pcw-launcher::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(120deg, transparent 18%, rgba(255, 255, 255, 0.25) 50%, transparent 82%);\n  transform: translateX(-130%);\n  transition: transform 320ms ease;\n}\n\n.pcw-launcher:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--pcw-launcher-shadow-hover);\n}\n\n.pcw-launcher:hover::after {\n  transform: translateX(130%);\n}\n\n.pcw-launcher[aria-expanded=\"true\"] {\n  background: linear-gradient(136deg, var(--pcw-accent-strong) 0%, var(--pcw-accent-support) 100%);\n  transform: rotate(90deg);\n}\n\n.pcw-launcher[aria-expanded=\"true\"]:hover {\n  transform: rotate(90deg) translateY(-2px);\n}\n\n.pcw-launcher:focus-visible,\n.pcw-close:focus-visible,\n.pcw-clear:focus-visible,\n.pcw-retry:focus-visible,\n.pcw-send:focus-visible,\n.pcw-input:focus-visible {\n  outline: 2px solid var(--pcw-focus);\n  outline-offset: 2px;\n}\n\n.pcw-panel {\n  position: absolute;\n  bottom: calc(100% + 10px);\n  right: 0;\n  width: min(380px, calc(100vw - 24px));\n  height: min(620px, calc(100vh - 96px));\n  border-radius: 24px;\n  overflow: hidden;\n  background: var(--pcw-surface);\n  background-image: var(--pcw-surface-tint);\n  border: 1px solid var(--pcw-border);\n  box-shadow: var(--pcw-panel-shadow);\n  display: flex;\n  flex-direction: column;\n  backdrop-filter: blur(16px);\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n  transform-origin: bottom right;\n}\n\n.pcw-panel.is-open {\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n  animation: pcw-panel-in 220ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;\n}\n\n.pcw-panel.is-closing {\n  visibility: visible;\n  pointer-events: none;\n  animation: pcw-panel-out 180ms cubic-bezier(0.4, 0, 1, 1) forwards;\n}\n\n.pcw-header {\n  padding: 12px 14px 10px;\n  background: var(--pcw-header-grad);\n  color: var(--pcw-accent-contrast);\n  border-bottom: 1px solid var(--pcw-border);\n}\n\n.pcw-header-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.pcw-header-actions {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.pcw-eyebrow {\n  margin: 0 0 3px;\n  font-size: 10px;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  opacity: 0.6;\n}\n\n.pcw-title {\n  margin: 0;\n  font-size: 19px;\n  font-weight: 700;\n  font-family: \"Archivo\", sans-serif;\n}\n\n.pcw-subtitle {\n  margin: 3px 0 0;\n  font-size: 12px;\n  line-height: 1.35;\n  color: var(--pcw-text-soft);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 220px;\n}\n\n.pcw-header-action {\n  appearance: none;\n  -webkit-appearance: none;\n  border: 0;\n  outline: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 44px;\n  border-radius: 999px;\n  cursor: pointer;\n  transition:\n    background 160ms ease,\n    color 160ms ease,\n    border-color 160ms ease,\n    box-shadow 160ms ease,\n    transform 160ms ease;\n}\n\n.pcw-close {\n  background: color-mix(in srgb, var(--pcw-accent-contrast) 22%, transparent);\n  color: color-mix(in srgb, var(--pcw-accent-contrast) 94%, transparent);\n  width: 44px;\n  height: 44px;\n  padding: 0;\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1;\n  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--pcw-accent-contrast) 28%, transparent);\n}\n\n.pcw-close:hover {\n  background: color-mix(in srgb, var(--pcw-accent-contrast) 32%, transparent);\n  color: var(--pcw-accent-contrast);\n  transform: translateY(-1px);\n}\n\n.pcw-clear {\n  border: 1px solid color-mix(in srgb, var(--pcw-accent-contrast) 44%, transparent);\n  background: color-mix(in srgb, var(--pcw-accent-contrast) 14%, transparent);\n  color: color-mix(in srgb, var(--pcw-accent-contrast) 95%, transparent);\n  padding: 0 10px;\n  font-size: 12px;\n  font-weight: 600;\n  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--pcw-accent-contrast) 8%, transparent);\n}\n\n.pcw-clear:hover {\n  border-color: color-mix(in srgb, var(--pcw-accent-contrast) 68%, transparent);\n  background: color-mix(in srgb, var(--pcw-accent-contrast) 24%, transparent);\n  color: var(--pcw-accent-contrast);\n  transform: translateY(-1px);\n}\n\n.pcw-clear:active,\n.pcw-close:active {\n  transform: translateY(0);\n}\n\n.pcw-header-action:focus-visible {\n  outline: 2px solid color-mix(in srgb, var(--pcw-accent-contrast) 88%, transparent);\n  outline-offset: 2px;\n}\n\n.pcw-body {\n  padding: 10px 12px 12px;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  gap: 8px;\n  flex: 1;\n}\n\n.pcw-turnstile {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n}\n\n.pcw-messages {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  padding-right: 4px;\n}\n\n.pcw-messages::-webkit-scrollbar {\n  width: 4px;\n}\n\n.pcw-messages::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.pcw-messages::-webkit-scrollbar-thumb {\n  background: var(--pcw-border-strong);\n  border-radius: 2px;\n}\n\n.pcw-message {\n  max-width: 72%;\n  padding: 4px 9px;\n  border-radius: 10px;\n  font-size: 13px;\n  line-height: 1.35;\n}\n\n.pcw-message-text {\n  white-space: pre-wrap;\n}\n\n.pcw-message.assistant {\n  align-self: flex-start;\n  background: var(--pcw-surface-soft);\n  color: var(--pcw-text);\n  border: 1px solid var(--pcw-border);\n  border-bottom-left-radius: 8px;\n}\n\n.pcw-message.assistant.fallback {\n  background: #1c1410;\n  color: #fbbf24;\n  border: 1px solid #3d2e14;\n}\n\n.pcw-message.assistant.error {\n  background: #1c1010;\n  color: #f87171;\n  border: 1px solid #3d1414;\n}\n\n.pcw-message.user {\n  align-self: flex-end;\n  background:\n    linear-gradient(165deg, color-mix(in srgb, var(--pcw-accent) 14%, var(--pcw-user-bubble)) 0%, var(--pcw-user-bubble) 58%, color-mix(in srgb, var(--pcw-accent-support) 22%, var(--pcw-user-bubble)) 100%);\n  color: var(--pcw-user-text);\n  border: 1px solid color-mix(in srgb, var(--pcw-user-border) 70%, var(--pcw-accent-support));\n  border-bottom-right-radius: 8px;\n}\n\n.pcw-message-note {\n  margin-top: 8px;\n  font-size: 11px;\n  line-height: 1.35;\n  opacity: 0.72;\n}\n\n.pcw-message.typing {\n  min-width: 64px;\n  text-align: center;\n}\n\n.pcw-dots {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.pcw-dots span {\n  width: 6px;\n  height: 6px;\n  border-radius: 999px;\n  background: currentColor;\n  opacity: 0.45;\n  animation: pcw-pulse 0.9s infinite ease-in-out;\n}\n\n.pcw-dots span:nth-child(2) {\n  animation-delay: 0.15s;\n}\n\n.pcw-dots span:nth-child(3) {\n  animation-delay: 0.3s;\n}\n\n.pcw-starters-inline {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  padding: 4px 0 2px;\n  align-self: flex-start;\n  transition: opacity 200ms ease, transform 200ms ease;\n}\n\n.pcw-starters-inline.is-hiding {\n  opacity: 0;\n  transform: translateY(4px);\n  pointer-events: none;\n}\n\n.pcw-starter {\n  border: 1px solid var(--pcw-border-strong);\n  background: var(--pcw-surface-soft);\n  color: var(--pcw-text-soft);\n  border-radius: 999px;\n  font-size: 12px;\n  padding: 5px 11px;\n  cursor: pointer;\n  transition: background 140ms ease, border-color 140ms ease, color 140ms ease;\n  white-space: nowrap;\n}\n\n.pcw-starter:hover {\n  background: color-mix(in srgb, var(--pcw-surface-soft) 72%, var(--pcw-accent-support) 28%);\n  border-color: color-mix(in srgb, var(--pcw-accent-support) 64%, var(--pcw-accent));\n  color: var(--pcw-text);\n}\n\n.pcw-form {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 10px;\n  align-items: end;\n}\n\n.pcw-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.pcw-input {\n  border: 1px solid var(--pcw-border);\n  background: var(--pcw-surface-alt);\n  border-radius: 14px;\n  padding: 10px 12px;\n  color: var(--pcw-text);\n  resize: none;\n  min-height: 44px;\n  max-height: 120px;\n  font-size: 13px;\n  line-height: 1.45;\n  transition: border-color 160ms ease;\n}\n\n.pcw-input::placeholder {\n  color: var(--pcw-text-muted);\n}\n\n.pcw-input:focus {\n  border-color: var(--pcw-accent);\n  outline: none;\n}\n\n.pcw-send {\n  border: 0;\n  background: var(--pcw-launcher-grad);\n  color: var(--pcw-accent-contrast);\n  min-width: 72px;\n  height: 44px;\n  border-radius: 14px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: \"Space Grotesk\", sans-serif;\n  transition: background 160ms ease, opacity 160ms ease;\n}\n\n.pcw-send:hover:not(:disabled) {\n  background: linear-gradient(136deg, color-mix(in srgb, var(--pcw-accent) 84%, white 16%) 0%, color-mix(in srgb, var(--pcw-accent-support) 82%, white 18%) 100%);\n}\n\n.pcw-send:disabled,\n.pcw-input:disabled,\n.pcw-clear:disabled {\n  cursor: not-allowed;\n  opacity: 0.62;\n}\n\n@keyframes pcw-pulse {\n  0%,\n  80%,\n  100% {\n    opacity: 0.35;\n    transform: translateY(0);\n  }\n  40% {\n    opacity: 0.9;\n    transform: translateY(-1px);\n  }\n}\n\n@keyframes pcw-launcher-ring {\n  0% {\n    opacity: 0.48;\n    transform: scale(1);\n  }\n  70% {\n    opacity: 0;\n    transform: scale(1.22);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.22);\n  }\n}\n\n@keyframes pcw-panel-in {\n  from {\n    opacity: 0;\n    transform: translateY(14px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n@keyframes pcw-panel-out {\n  from {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(10px) scale(0.97);\n  }\n}\n\n@media (max-width: 640px) {\n  .pcw-root {\n    right: 12px;\n    bottom: 12px;\n    left: 12px;\n  }\n\n  .pcw-panel {\n    width: 100%;\n    height: min(82vh, 680px);\n    border-radius: 20px;\n  }\n\n  .pcw-launcher {\n    margin-left: auto;\n    display: flex;\n  }\n\n  .pcw-header {\n    padding: 10px 12px 8px;\n  }\n\n  .pcw-body {\n    padding: 8px 10px 10px;\n  }\n\n  .pcw-form {\n    grid-template-columns: 1fr;\n  }\n\n  .pcw-send {\n    width: 100%;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .pcw-launcher::before {\n    animation: none;\n    opacity: 0.28;\n    transform: none;\n  }\n\n  .pcw-launcher::after {\n    transition: none;\n  }\n}\n";
const EMBED_CONTRACT_VERSION = "1.0.0";
const WIDGET_GLOBAL_NAME = "PortfolioChatbotWidget";
const CONFIG_GLOBAL_NAME = "PortfolioChatbotConfig";
const WIDGET_HOST_ID = "portfolio-chatbot-widget";
const TURNSTILE_SCRIPT_ID = "pcw-turnstile-script";
const TURNSTILE_SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
const TURNSTILE_CONTAINER_ID = "pcw-turnstile-container";

const DEFAULT_CONFIG = {
  title: "Ask Jason",
  subtitle: "Recruiter-focused answers grounded in public portfolio and resume details.",
  apiBaseUrl: "",
  analyticsEnabled: true,
  source: "portfolio-widget",
  turnstileToken: "",
  turnstileSiteKey: "",
  theme: "dark",
  starterQuestions: [
    "What kind of engineer is Jason?",
    "Which project best demonstrates full-stack ownership?",
    "What shows his security and production readiness?",
  ],
};

const EMBED_SCRIPT_CONFIG = (() => {
  const script = document.currentScript;
  return script?.dataset ? { ...script.dataset } : {};
})();

const state = {
  mounted: false,
  open: false,
  pending: false,
  hasConnectionIssue: false,
  reconnectNotified: false,
  lastUserMessage: "",
  previousFocusedElement: null,
  startersVisible: true,
  animateNextAssistant: false,
  activeTyping: null,
  turnstileWidgetId: null,
  elements: {},
  config: { ...DEFAULT_CONFIG },
  conversation: [],
};
let turnstileLoadPromise = null;

function getSessionId() {
  const key = "portfolio-chatbot-session-id";
  const existingValue = window.sessionStorage.getItem(key);

  if (existingValue) {
    return existingValue;
  }

  const nextValue =
    window.crypto?.randomUUID?.() || `pcw-${Date.now()}-${Math.random()}`;
  window.sessionStorage.setItem(key, nextValue);
  return nextValue;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeStarterQuestions(value) {
  if (Array.isArray(value)) {
    return value
      .map((item) => String(item || "").trim())
      .filter(Boolean)
      .slice(0, 6);
  }

  if (typeof value === "string") {
    return value
      .split("|")
      .map((item) => item.trim())
      .filter(Boolean)
      .slice(0, 6);
  }

  return DEFAULT_CONFIG.starterQuestions;
}

function normalizeString(value, fallback = "") {
  const normalized = String(value || "").trim();
  return normalized || fallback;
}

function normalizeBoolean(value, fallback = true) {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    if (["1", "true", "yes", "on"].includes(normalized)) {
      return true;
    }
    if (["0", "false", "no", "off"].includes(normalized)) {
      return false;
    }
  }

  return fallback;
}

function normalizeTheme(value, fallback = "dark") {
  const normalized = String(value || "").trim().toLowerCase();
  return normalized === "light" || normalized === "dark" ? normalized : fallback;
}

function normalizeConfig(config = {}) {
  return {
    title: normalizeString(config.title, DEFAULT_CONFIG.title),
    subtitle: normalizeString(config.subtitle, DEFAULT_CONFIG.subtitle),
    apiBaseUrl: normalizeString(config.apiBaseUrl).replace(/\/$/, ""),
    analyticsEnabled: normalizeBoolean(
      config.analyticsEnabled,
      DEFAULT_CONFIG.analyticsEnabled,
    ),
    source: normalizeString(config.source, DEFAULT_CONFIG.source),
    turnstileToken: normalizeString(config.turnstileToken),
    turnstileSiteKey: normalizeString(
      config.turnstileSiteKey,
      DEFAULT_CONFIG.turnstileSiteKey,
    ),
    theme: normalizeTheme(config.theme, DEFAULT_CONFIG.theme),
    starterQuestions: normalizeStarterQuestions(config.starterQuestions),
  };
}

function parseJsonResponse(text) {
  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function buildRequestMessages(conversation) {
  return conversation
    .map((message) => ({
      role: message?.role,
      content: message?.content,
    }))
    .filter(
      (message) =>
        (message.role === "user" || message.role === "assistant") &&
        typeof message.content === "string" &&
        message.content.trim().length > 0,
    );
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function ensureTurnstileApiLoaded() {
  if (window.turnstile) {
    return Promise.resolve();
  }

  if (turnstileLoadPromise) {
    return turnstileLoadPromise;
  }

  turnstileLoadPromise = new Promise((resolve, reject) => {
    const existingScript = document.getElementById(TURNSTILE_SCRIPT_ID);
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener(
        "error",
        () => reject(new Error("Turnstile script failed to load.")),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.id = TURNSTILE_SCRIPT_ID;
    script.src = TURNSTILE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error("Turnstile script failed to load."));
    document.head.appendChild(script);
  });

  return turnstileLoadPromise;
}

async function ensureTurnstileWidget() {
  if (!state.config.turnstileSiteKey) {
    return null;
  }

  await ensureTurnstileApiLoaded();

  if (state.turnstileWidgetId !== null) {
    return state.turnstileWidgetId;
  }

  let container = document.getElementById(TURNSTILE_CONTAINER_ID);
  if (!container) {
    container = document.createElement("div");
    container.id = TURNSTILE_CONTAINER_ID;
    container.setAttribute(
      "style",
      "position:fixed;left:0;bottom:0;width:1px;height:1px;opacity:0.01;pointer-events:none;overflow:hidden;z-index:-1;",
    );
    document.body.appendChild(container);
  }

  state.turnstileWidgetId = window.turnstile.render(container, {
    sitekey: state.config.turnstileSiteKey,
    size: "compact",
    execution: "execute",
  });

  return state.turnstileWidgetId;
}

async function acquireTurnstileToken() {
  if (state.config.turnstileToken) {
    return state.config.turnstileToken;
  }

  if (!state.config.turnstileSiteKey) {
    return "";
  }

  const widgetId = await ensureTurnstileWidget();
  if (widgetId === null || widgetId === undefined) {
    return "";
  }

  try {
    window.turnstile.reset(widgetId);
  } catch {}

  window.turnstile.execute(widgetId);

  const maxWaitMs = 7000;
  const stepMs = 100;
  for (let elapsed = 0; elapsed < maxWaitMs; elapsed += stepMs) {
    const token = window.turnstile.getResponse(widgetId);
    if (token) {
      return token;
    }
    await sleep(stepMs);
  }

  throw new Error("Turnstile token acquisition timed out.");
}

function trackEvent(event, metadata = {}) {
  if (!state.config.apiBaseUrl || !state.config.analyticsEnabled) {
    return;
  }

  const payload = {
    event,
    metadata: {
      source: state.config.source,
      pagePath: window.location.pathname,
      sessionId: getSessionId(),
      widgetVersion: EMBED_CONTRACT_VERSION,
      ...metadata,
    },
  };

  fetch(`${state.config.apiBaseUrl}/api/events`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});
}

function autoResizeTextarea(textarea) {
  textarea.style.height = "0px";
  textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
}

function typeIntoElement(el, text) {
  if (state.activeTyping) {
    state.activeTyping.cancelled = true;
  }
  const ctrl = { cancelled: false };
  state.activeTyping = ctrl;

  // 20ms per tick; for long responses batch chars to stay under ~4s total
  const MS_PER_TICK = 20;
  const MAX_DURATION_MS = 4000;
  const charsPerTick = Math.max(1, Math.ceil(text.length / (MAX_DURATION_MS / MS_PER_TICK)));
  let i = 0;
  el.textContent = "";

  function step() {
    if (ctrl.cancelled || !el.isConnected) return;
    i = Math.min(i + charsPerTick, text.length);
    el.textContent = text.slice(0, i);
    state.elements.messages.scrollTop = state.elements.messages.scrollHeight;
    if (i < text.length) {
      setTimeout(step, MS_PER_TICK);
    } else {
      state.activeTyping = null;
    }
  }
  setTimeout(step, MS_PER_TICK);
}

function renderMessages() {
  const { messages } = state.elements;

  const shouldAnimate =
    state.animateNextAssistant &&
    state.conversation.length > 0 &&
    state.conversation[state.conversation.length - 1].role === "assistant";

  const visibleConversation = shouldAnimate
    ? state.conversation.slice(0, -1)
    : state.conversation;

  const conversationHtml = visibleConversation
    .map(
      (message) => `
        <div class="pcw-message ${message.role} ${message.kind || "default"}">
          <div class="pcw-message-text">${escapeHtml(message.content)}</div>
          ${
            message.note
              ? `<div class="pcw-message-note">${escapeHtml(message.note)}</div>`
              : ""
          }
        </div>
      `,
    )
    .join("");

  const animatedMsgHtml = shouldAnimate
    ? (() => {
        const msg = state.conversation[state.conversation.length - 1];
        return `<div class="pcw-message ${msg.role} ${msg.kind || "default"} pcw-typing-target">
          <div class="pcw-message-text"></div>
          ${msg.note ? `<div class="pcw-message-note">${escapeHtml(msg.note)}</div>` : ""}
        </div>`;
      })()
    : "";

  const pendingHtml = state.pending
    ? `
      <div class="pcw-message assistant typing" aria-live="polite" aria-label="Assistant is thinking">
        <span class="pcw-dots" aria-hidden="true">
          <span></span><span></span><span></span>
        </span>
      </div>
    `
    : "";

  const startersHtml =
    state.startersVisible && state.conversation.length <= 1 && !state.pending
      ? `<div class="pcw-starters-inline">${state.config.starterQuestions
          .map(
            (q) =>
              `<button class="pcw-starter" type="button" data-starter="${escapeHtml(q)}">${escapeHtml(q)}</button>`,
          )
          .join("")}</div>`
      : "";

  messages.innerHTML = `${conversationHtml}${animatedMsgHtml}${pendingHtml}${startersHtml}`;
  messages.scrollTop = messages.scrollHeight;

  if (shouldAnimate) {
    state.animateNextAssistant = false;
    const target = messages.querySelector(".pcw-typing-target div");
    if (target) {
      const msg = state.conversation[state.conversation.length - 1];
      typeIntoElement(target, msg.content);
    }
  }
}

function setStatus(_message = "") {
  // status display removed
}

function setPending(nextPending) {
  state.pending = nextPending;
  state.elements.send.disabled = nextPending;
  state.elements.input.disabled = nextPending;
  state.elements.clear.disabled = nextPending;
  state.elements.send.textContent = nextPending ? "Sending..." : "Send";
  renderMessages();
}

function setOpen(nextOpen) {
  const wasOpen = state.open;
  state.open = nextOpen;
  state.elements.launcher.setAttribute("aria-expanded", String(nextOpen));

  if (nextOpen) {
    state.elements.panel.classList.remove("is-closing");
    state.elements.panel.classList.add("is-open");
    if (!wasOpen) {
      trackEvent("open");
    }
    state.previousFocusedElement = document.activeElement;
    state.elements.input.focus();
  } else {
    state.elements.panel.classList.remove("is-open");
    state.elements.panel.classList.add("is-closing");
    const panel = state.elements.panel;
    panel.addEventListener(
      "animationend",
      () => {
        if (!state.open) {
          panel.classList.remove("is-closing");
        }
      },
      { once: true },
    );
    const focusTarget =
      state.previousFocusedElement instanceof HTMLElement
        ? state.previousFocusedElement
        : state.elements.launcher;
    focusTarget.focus();
  }
}

function trapFocus(event) {
  if (!state.open || event.key !== "Tab") {
    return;
  }

  const focusable = Array.from(
    state.elements.panel.querySelectorAll(
      'button:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
    ),
  );

  if (!focusable.length) {
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const active = document.activeElement;

  if (event.shiftKey && active === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && active === last) {
    event.preventDefault();
    first.focus();
  }
}

function onDocumentKeydown(event) {
  if (event.key === "Escape" && state.open) {
    event.preventDefault();
    setOpen(false);
    return;
  }

  trapFocus(event);
}

function clearConversation() {
  state.conversation = [
    {
      role: "assistant",
      kind: "default",
      content:
        "Ask about experience, projects, stack, or strengths. Replies stay concise and grounded in documented portfolio context.",
    },
  ];
  state.lastUserMessage = "";
  state.startersVisible = true;
  setStatus("Conversation cleared");
  setPending(false);
  renderMessages();
}

async function retryLastMessage() {
  if (!state.lastUserMessage || state.pending) {
    return;
  }

  await submitMessage(state.lastUserMessage);
}

async function submitMessage(content) {
  const message = content.trim();

  if (!message) {
    return;
  }

  state.lastUserMessage = message;
  trackEvent("send", { messageLength: message.length });

  if (!state.config.apiBaseUrl) {
    state.conversation.push({
      role: "assistant",
      kind: "error",
      note: "Widget configuration issue",
      content:
        "The chat widget is not configured with an API endpoint yet. Set apiBaseUrl in the embed config.",
    });
    renderMessages();
    setStatus("Missing apiBaseUrl");
    return;
  }

  state.conversation.push({ role: "user", content: message });
  renderMessages();
  setStatus("Thinking...");
  setPending(true);

  state.elements.input.value = "";
  autoResizeTextarea(state.elements.input);

  try {
    const turnstileToken = await acquireTurnstileToken();

    const response = await fetch(`${state.config.apiBaseUrl}/api/chat`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        messages: buildRequestMessages(state.conversation),
        turnstileToken: turnstileToken || undefined,
        metadata: {
          source: state.config.source,
          pagePath: window.location.pathname,
          sessionId: getSessionId(),
        },
      }),
    });

    const rawPayload = await response.text();
    const payload = parseJsonResponse(rawPayload);

    if (!response.ok) {
      trackEvent("error", {
        statusCode: response.status,
      });
      const errorCode = payload?.error?.code;
      const errorMessage =
        payload?.error?.message || `Request failed with status ${response.status}`;
      throw new Error(
        `${errorCode ? `[${errorCode}] ` : ""}${errorMessage}`,
      );
    }
    const reply = payload?.reply?.trim();
    const isFallback = payload?.meta?.fallback === true;
    const fallbackReason = payload?.meta?.fallbackReason;
    const refusal = payload?.meta?.refusal === true;
    const refusalReason = payload?.meta?.refusalReason;

    if (isFallback) {
      trackEvent("fallback", { fallbackReason });
    }
    if (refusal) {
      trackEvent("refusal", { refusalReason });
    }

    state.conversation.push({
      role: "assistant",
      kind: isFallback ? "fallback" : "default",
      note: isFallback
        ? `Safe fallback${fallbackReason ? `: ${fallbackReason.replaceAll("_", " ")}` : ""}`
        : "",
      content:
        reply ||
        "I couldn't find a grounded answer in the portfolio context yet.",
    });
    state.animateNextAssistant = true;
    if (state.hasConnectionIssue) {
      state.hasConnectionIssue = false;
      state.reconnectNotified = true;
      setStatus("Reconnected. Responses are live again.");
    } else {
      setStatus(
        isFallback
          ? "Showing safe fallback response"
          : "Connected and responding",
      );
    }
  } catch (error) {
    console.error("[portfolio-chatbot] request failed", error);
    state.hasConnectionIssue = true;
    state.reconnectNotified = false;
    const detail = String(error?.message || "").trim().slice(0, 180);
    state.conversation.push({
      role: "assistant",
      kind: "error",
      note: "Network or API error",
      content: detail
        ? `I couldn't complete that request. ${detail}`
        : "I couldn't reach the portfolio assistant just now. You can retry the last question or wait a moment and try again.",
    });
    state.animateNextAssistant = true;
    setStatus("Connection issue. Retry is available.");
    trackEvent("error", {
      statusCode: 0,
    });
  } finally {
    setPending(false);
  }
}

function attachEventHandlers() {
  const {
    launcher,
    close,
    clear,
    form,
    input,
    messages,
  } = state.elements;

  launcher.addEventListener("click", () => setOpen(!state.open));
  close.addEventListener("click", () => setOpen(false));
  clear.addEventListener("click", clearConversation);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    await submitMessage(input.value);
  });

  input.addEventListener("input", () => autoResizeTextarea(input));
  input.addEventListener("keydown", async (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      await submitMessage(input.value);
    }
  });

  messages.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-starter]");

    if (!button) {
      return;
    }

    const value = button.getAttribute("data-starter") || "";

    const startersEl = messages.querySelector(".pcw-starters-inline");
    if (startersEl) {
      startersEl.classList.add("is-hiding");
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
    state.startersVisible = false;

    if (!state.open) {
      setOpen(true);
    }
    await submitMessage(value);
  });

  document.addEventListener("keydown", onDocumentKeydown);
}

function createMarkup(config) {
  return `
    <style>${STYLE_TEXT}</style>
    <div class="pcw-root" data-theme="${escapeHtml(config.theme)}">
      <div
        id="pcw-panel"
        class="pcw-panel"
        aria-live="polite"
        role="dialog"
        aria-modal="false"
        aria-label="${escapeHtml(config.title)} chat panel"
      >
        <header class="pcw-header">
          <div class="pcw-header-row">
            <div>
              <h2 class="pcw-title">${escapeHtml(config.title)}</h2>
            </div>
            <div class="pcw-header-actions">
              <button class="pcw-header-action pcw-clear" type="button" aria-label="Clear chat">
                Clear
              </button>
              <button class="pcw-header-action pcw-close" type="button" aria-label="Close chat">
                ×
              </button>
            </div>
          </div>
        </header>

        <div class="pcw-body">
          <div class="pcw-messages">
            <div class="pcw-message assistant">
              Ask about experience, projects, stack, or strengths. Replies stay concise and grounded in documented portfolio context.
            </div>
          </div>

          <form class="pcw-form">
            <label class="pcw-visually-hidden" for="pcw-input">
              Ask a question
            </label>
            <textarea
              id="pcw-input"
              class="pcw-input"
              rows="1"
              placeholder="Ask a question..."
              aria-label="Ask a question about Jason's experience"
            ></textarea>
            <button class="pcw-send" type="submit">Send</button>
          </form>

        </div>
      </div>

      <button
        class="pcw-launcher"
        type="button"
        aria-label="Open portfolio chat"
        aria-haspopup="dialog"
        aria-controls="pcw-panel"
        aria-expanded="false"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H9l-4.5 4v-4.5A2.5 2.5 0 0 1 4 13V6.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
          <path d="M8 8.75h8M8 11.75h5.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  `;
}

function resolveConfig(overrides = {}) {
  const globalConfig = window[CONFIG_GLOBAL_NAME] || {};
  const scriptConfig = EMBED_SCRIPT_CONFIG;
  const mergedConfig = {
    ...DEFAULT_CONFIG,
    ...globalConfig,
    ...overrides,
    apiBaseUrl:
      overrides.apiBaseUrl ||
      globalConfig.apiBaseUrl ||
      scriptConfig.apiBaseUrl ||
      "",
    title:
      overrides.title ||
      globalConfig.title ||
      scriptConfig.title ||
      DEFAULT_CONFIG.title,
    subtitle:
      overrides.subtitle ||
      globalConfig.subtitle ||
      scriptConfig.subtitle ||
      DEFAULT_CONFIG.subtitle,
    starterQuestions:
      overrides.starterQuestions ||
      globalConfig.starterQuestions ||
      scriptConfig.starterQuestions ||
      DEFAULT_CONFIG.starterQuestions,
    analyticsEnabled:
      overrides.analyticsEnabled ??
      globalConfig.analyticsEnabled ??
      DEFAULT_CONFIG.analyticsEnabled,
    source:
      overrides.source ||
      globalConfig.source ||
      scriptConfig.source ||
      DEFAULT_CONFIG.source,
    turnstileToken:
      overrides.turnstileToken ||
      globalConfig.turnstileToken ||
      scriptConfig.turnstileToken ||
      DEFAULT_CONFIG.turnstileToken,
    turnstileSiteKey:
      overrides.turnstileSiteKey ||
      globalConfig.turnstileSiteKey ||
      scriptConfig.turnstileSiteKey ||
      DEFAULT_CONFIG.turnstileSiteKey,
    theme:
      overrides.theme ||
      globalConfig.theme ||
      scriptConfig.theme ||
      DEFAULT_CONFIG.theme,
  };

  return normalizeConfig(mergedConfig);
}

function mountWidget(overrides = {}) {
  if (state.mounted) {
    return state;
  }

  const config = resolveConfig(overrides);
  const host = document.createElement("div");
  host.id = WIDGET_HOST_ID;

  const shadowRoot = host.attachShadow({ mode: "open" });
  shadowRoot.innerHTML = createMarkup(config);
  document.body.append(host);

  state.mounted = true;
  state.config = config;
  state.elements = {
    host,
    panel: shadowRoot.querySelector(".pcw-panel"),
    launcher: shadowRoot.querySelector(".pcw-launcher"),
    close: shadowRoot.querySelector(".pcw-close"),
    clear: shadowRoot.querySelector(".pcw-clear"),
    form: shadowRoot.querySelector(".pcw-form"),
    input: shadowRoot.querySelector(".pcw-input"),
    send: shadowRoot.querySelector(".pcw-send"),
    messages: shadowRoot.querySelector(".pcw-messages"),
  };

  attachEventHandlers();
  autoResizeTextarea(state.elements.input);
  setPending(false);
  setStatus(
    state.config.apiBaseUrl
      ? `Ready for ${state.config.apiBaseUrl}/api/chat`
      : "Set apiBaseUrl to connect the widget",
  );
  return state;
}

function unmountWidget() {
  if (!state.mounted) {
    return;
  }

  document.removeEventListener("keydown", onDocumentKeydown);
  state.elements.host?.remove();
  state.mounted = false;
  state.open = false;
  state.pending = false;
  state.turnstileWidgetId = null;
  state.elements = {};
  state.conversation = [];
}

function updateConfig(overrides = {}) {
  state.config = resolveConfig(overrides);
  if (state.mounted) {
    unmountWidget();
    mountWidget(state.config);
  }
  return state.config;
}

window[WIDGET_GLOBAL_NAME] = {
  contractVersion: EMBED_CONTRACT_VERSION,
  mount: mountWidget,
  unmount: unmountWidget,
  updateConfig,
  getConfig: () => ({ ...state.config }),
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => mountWidget(), {
    once: true,
  });
} else {
  mountWidget();
}
