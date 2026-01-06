import * as React from "react";

export function Dialog({ open, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      {children}
    </div>
  );
}

export function DialogContent({ children }) {
  return (
    <div className="bg-white rounded-lg p-6 w-full max-w-md">
      {children}
    </div>
  );
}
