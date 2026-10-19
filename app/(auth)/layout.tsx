import AuthShowcase from "@/components/AuthShowcase";
import Logo from "@/components/Logo";

// Shared by /sign-in and /sign-up: brand panel on the left, Clerk form on the right.
// The folder name "(auth)" is a route group: it organises files without changing the URL.
export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="auth-split">
      <AuthShowcase />

      <section className="auth-form-panel">
        {/* The brand panel is hidden on phones, so show the logo here instead */}
        <Logo className="lg:hidden" />
        {children}
      </section>
    </main>
  );
}
