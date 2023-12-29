"use client";

import { Checkbox } from "@/components/ui";
import { useId } from "react";

interface CheckboxWithLabelProps
  extends React.HTMLAttributes<HTMLInputElement> {}

export function CheckboxWithLabel({ children }: CheckboxWithLabelProps) {
  const id = useId();

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {children}
      </label>
    </div>
  );
}
