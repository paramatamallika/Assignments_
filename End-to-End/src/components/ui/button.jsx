import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          variant === "default" &&
            "bg-black text-white hover:bg-black/90",
          size === "default" && "h-10 px-4 py-2",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
