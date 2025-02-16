import React from "react";

interface TypographyH2Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export function TypographyH2({ children, className }: TypographyH2Props) {
  return (
    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}
