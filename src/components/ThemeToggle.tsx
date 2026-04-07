type ThemeMode = 'light' | 'dark'
type ThemeToggleProps = {
  mode: ThemeMode
  onToggle: () => void
}

export default function ThemeToggle({ mode, onToggle }: ThemeToggleProps) {
  const currentLabel = mode === 'dark' ? 'Dark Mode' : 'Light Mode'
  const nextLabel = mode === 'dark' ? 'Light Mode' : 'Dark Mode'
  const label = `Current theme: ${currentLabel}. Switch to ${nextLabel}.`

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      style={{
        position: 'fixed',
        left: 'max(1.25rem, env(safe-area-inset-left))',
        bottom: 'max(1.25rem, env(safe-area-inset-bottom))',
      }}
      className="button-reactive accent-orbit z-[80] inline-flex cursor-pointer items-center gap-2 rounded-full border border-primary/70 bg-primary px-4 py-2 text-xs font-semibold tracking-[0.08em] text-on-primary backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.22)]"
    >
      <span
        aria-hidden="true"
        className="inline-block h-2.5 w-2.5 rounded-full bg-on-primary shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-primary)_18%,transparent)]"
      />
      <span>{currentLabel}</span>
    </button>
  )
}

export type { ThemeMode }
