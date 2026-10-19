import { MessageSquare, ShieldCheck, Users } from "lucide-react";

import Logo from "@/components/Logo";

const features = [
  {
    icon: Users,
    title: "Live cursors and presence",
    text: "See who is in the document and where they are typing.",
  },
  {
    icon: MessageSquare,
    title: "Comments and mentions",
    text: "Discuss any sentence and tag teammates in the thread.",
  },
  {
    icon: ShieldCheck,
    title: "Share with the right access",
    text: "Invite people to edit, or let them view only.",
  },
];

// A small coloured caret with a name tag, like the ones shown while co-editing
const Cursor = ({
  name,
  color,
  className,
}: {
  name: string;
  color: string;
  className: string;
}) => (
  <span className={`absolute ${className}`}>
    <span
      className="absolute -top-6 left-0 whitespace-nowrap rounded-md px-1.5 py-0.5 text-[10px] font-semibold text-ink-100"
      style={{ backgroundColor: color }}
    >
      {name}
    </span>
    <span
      className="block h-5 w-0.5 rounded-full"
      style={{ backgroundColor: color }}
    />
  </span>
);

/** Left-hand brand panel of the sign-in and sign-up pages (hidden on small screens). */
const AuthShowcase = () => {
  return (
    <aside className="auth-brand-panel">
      <Logo />

      <div className="space-y-10">
        <div className="space-y-4">
          <h1 className="max-w-[460px] text-4xl font-bold leading-tight xl:text-5xl">
            Write together,{" "}
            <span className="bg-gradient-to-r from-brand-400 to-sun-400 bg-clip-text text-transparent">
              in real time.
            </span>
          </h1>
          <p className="max-w-[420px] text-brand-100">
            One shared page for your team. Draft, discuss and refine without
            ever passing a file around.
          </p>
        </div>

        {/* Decorative preview of two people editing the same document */}
        <div className="animate-fade-up relative w-full max-w-[460px] rounded-2xl border border-ink-400/60 bg-ink-100/70 p-6 shadow-2xl shadow-black/40 backdrop-blur">
          <p className="text-xs font-medium text-brand-100">Q4 launch plan</p>
          <div className="mt-5 space-y-3.5">
            <div className="h-3.5 w-2/3 rounded-full bg-white/85" />
            <div className="h-2.5 w-full rounded-full bg-ink-500" />
            <div className="relative h-2.5 w-11/12 rounded-full bg-ink-500">
              <Cursor
                name="Ava"
                color="#F5B544"
                className="-top-1.5 right-16"
              />
            </div>
            <div className="h-2.5 w-4/5 rounded-full bg-ink-500" />
            <div className="relative h-2.5 w-3/4 rounded-full bg-ink-500">
              <Cursor
                name="Noah"
                color="#5EA8FF"
                className="-top-1.5 right-24"
              />
            </div>
          </div>
        </div>

        <ul className="space-y-5">
          {features.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400 ring-1 ring-brand-500/30">
                <Icon className="size-5" />
              </span>
              <div>
                <p className="font-semibold">{title}</p>
                <p className="text-sm text-brand-100">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-xs text-brand-100/70">
        &copy; {new Date().getFullYear()} Coauthr
      </p>
    </aside>
  );
};

export default AuthShowcase;
