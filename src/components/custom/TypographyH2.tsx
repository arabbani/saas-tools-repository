import React, { ReactNode } from "react";

export function TypographyH2({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-3xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}
