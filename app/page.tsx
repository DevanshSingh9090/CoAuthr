import Logo from "@/components/Logo";

// TEMPORARY page: a "style guide" that proves the Coauthr theme works.
// It is replaced by the real document dashboard in Commit 10.

const palette = [
  { name: "ink-100", className: "bg-ink-100" },
  { name: "ink-200", className: "bg-ink-200" },
  { name: "ink-300", className: "bg-ink-300" },
  { name: "ink-400", className: "bg-ink-400" },
  { name: "ink-500", className: "bg-ink-500" },
  { name: "brand-400", className: "bg-brand-400" },
  { name: "brand-500", className: "bg-brand-500" },
  { name: "brand-700", className: "bg-brand-700" },
  { name: "sun-500", className: "bg-sun-500" },
  { name: "danger-500", className: "bg-danger-500" },
];

const sampleDocs = ["Product roadmap", "Meeting notes", "Launch announcement"];

export default function ThemePreview() {
  return (
    <main className="home-shell">
      <div className="app-header sticky left-0 top-0 z-40">
        <Logo />
        <span className="readonly-pill">Theme preview</span>
      </div>

      <div className="library">
        <section className="space-y-4">
          <h1 className="text-heading-lg">Colour palette</h1>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {palette.map(({ name, className }) => (
              <div key={name} className="space-y-2">
                <div
                  className={`h-14 rounded-xl border border-ink-400/50 ${className}`}
                />
                <p className="text-micro text-brand-100">{name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-heading-lg">Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <button className="gradient-brand rounded-full px-5 py-2.5 text-sm font-semibold shadow-md">
              Start a blank document
            </button>
            <button className="gradient-danger rounded-full px-5 py-2.5 text-sm font-semibold shadow-md">
              Delete
            </button>
            <button className="rounded-full bg-ink-400 px-5 py-2.5 text-sm font-semibold text-brand-100">
              Cancel
            </button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-heading-lg">Document cards</h2>
          <ul className="doc-grid">
            {sampleDocs.map((title) => (
              <li key={title} className="doc-card animate-fade-up">
                <div className="doc-card-preview" />
                <div className="space-y-1 p-5">
                  <p className="line-clamp-1 text-lg font-semibold">{title}</p>
                  <p className="text-sm text-brand-100">Created 2 days ago</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}