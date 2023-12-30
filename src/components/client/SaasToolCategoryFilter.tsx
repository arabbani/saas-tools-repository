"use client";

import { Saasategory } from "@/database/schema";
import { cn } from "@/lib/css";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckboxWithLabel } from "./CheckboxWithLabel";

interface Props extends React.HTMLAttributes<HTMLElement> {
  existingCategoryFilter: string[];
  categories: Saasategory[];
}

export function SaasToolCategoryFilter({
  existingCategoryFilter,
  categories,
  className,
}: Props) {
  const params = useSearchParams();
  const router = useRouter();

  const handleCategoryChange = (checked: boolean, category: string) => {
    const newParams = new URLSearchParams(params.toString());
    let selectedPricingModelFilter: string[] = [];

    if (newParams.get("category")) {
      selectedPricingModelFilter = newParams.get("category")!.split(",");
    }

    if (checked && !selectedPricingModelFilter.includes(category)) {
      selectedPricingModelFilter.push(category);
    } else {
      selectedPricingModelFilter = selectedPricingModelFilter.filter(
        (item) => item !== category
      );
    }

    newParams.delete("category");

    if (selectedPricingModelFilter.length) {
      newParams.set("category", selectedPricingModelFilter.toString());
    }
    router.push(`/?${newParams.toString()}`);
  };

  return (
    <div className={cn("grid md:grid-cols-4 lg:grid-cols-6 md:gap-x-3 md:gap-y-4", className)}>
      {categories?.map((category) => (
        <CheckboxWithLabel
          key={category.id}
          onCheckedChange={(checked: boolean) => {
            handleCategoryChange(checked, category.name);
          }}
          defaultChecked={existingCategoryFilter.includes(category.name)}
        >
          {category.name}
        </CheckboxWithLabel>
      ))}
    </div>
  );
}
