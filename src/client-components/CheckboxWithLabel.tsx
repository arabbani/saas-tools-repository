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
    <div className="flex items-center space-x-2 cursor-pointer">
      <Checkbox id={id} {...props} />
      <Label htmlFor={id} className="cursor-pointer font-normal text-xs lg:text-sm">{children}</Label>
    </div>
  );
}
