"use client";

import { Checkbox, Label } from "@/components/ui";
import { useId } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

interface CheckboxWithLabelProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {}

export function CheckboxWithLabel({
  children,
  ...props
}: CheckboxWithLabelProps) {
  const id = useId();

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} {...props} />
      <Label htmlFor={id} className="cursor-pointer">{children}</Label>
    </div>
  );
}
