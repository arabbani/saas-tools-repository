"use client";

import { Checkbox } from "@/components/ui";
import { useId } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

interface CheckboxWithLabelProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {}

export function CheckboxWithLabel({ children, onCheckedChange }: CheckboxWithLabelProps) {
  const id = useId();

  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <Checkbox id={id} onCheckedChange={onCheckedChange} />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
      >
        {children}
      </label>
    </div>
  );
}
