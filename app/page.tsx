import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// TEMPORARY page: a "style guide" that proves the Coauthr theme and UI
// components work. It is replaced by the real document dashboard in Commit 10.

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
          <div className="flex flex-wrap items-center gap-3">
            <Button>Start a blank document</Button>
            <Button variant="destructive">Delete</Button>
            <Button variant="secondary">Cancel</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-heading-lg">Form controls and overlays</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Invite by email</Label>
              <Input id="email" type="email" placeholder="name@example.com" />
            </div>

            <div className="space-y-2">
              <Label>Permission</Label>
              <Select defaultValue="editor">
                <SelectTrigger>
                  <SelectValue placeholder="Choose a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="editor">Can edit</SelectItem>
                  <SelectItem value="viewer">Can view</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary">Open popover</Button>
              </PopoverTrigger>
              <PopoverContent>
                <p className="text-sm text-brand-100">
                  Popovers will hold the notifications panel.
                </p>
              </PopoverContent>
            </Popover>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Share this document</DialogTitle>
                  <DialogDescription>
                    Dialogs will hold the share and delete flows.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button>Got it</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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