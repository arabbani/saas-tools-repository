import React from "react";

interface TypographyH2Props
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export function TypographyH2({ children }: TypographyH2Props) {
  return <h3 className="text-3xl font-semibold tracking-tight">{children}</h3>;
}
