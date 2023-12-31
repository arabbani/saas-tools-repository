"use client";

import { SaasCategory } from "@/database/schema";
import { CheckboxWithLabel } from "./CheckboxWithLabel";

interface Props extends React.HTMLAttributes<HTMLElement> {
  existingCategoryFilter: string[];
  categories: SaasCategory[];
  handleValueChange: (checked: boolean, category: string) => void;
}

export function SaasToolCategoryFilter({
  existingCategoryFilter,
  categories,
  handleValueChange,
}: Props) {
  return (
    <div className="grid md:grid-cols-4 lg:grid-cols-6 md:gap-x-3 md:gap-y-4">
      {categories?.map((category) => (
        <CheckboxWithLabel
          key={category.id}
          onCheckedChange={(checked: boolean) => {
            handleValueChange(checked, category.name);
          }}
          defaultChecked={existingCategoryFilter.includes(category.name)}
        >
          {category.name}
        </CheckboxWithLabel>
      ))}
    </div>
  );
}
