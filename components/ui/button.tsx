import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// All visual choices for a button live in this one cva() call.
// Pick a look with <Button variant="..." size="...">.
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-ink-100 transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Emerald gradient: the main call to action
        default:
          "gradient-brand text-white shadow-md shadow-brand-700/30 hover:brightness-110",
        // Rose gradient: delete and other destructive actions
        destructive:
          "gradient-danger text-white shadow-md shadow-danger-500/30 hover:brightness-110",
        outline:
          "border border-ink-500 bg-transparent text-white hover:bg-ink-300",
        secondary:
          "bg-ink-400 text-brand-100 hover:bg-ink-500 hover:text-white",
        ghost: "text-brand-100 hover:bg-ink-300 hover:text-white",
        link: "text-brand-400 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  // asChild lets the button hand its styles to a child element (for example a <Link>)
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };