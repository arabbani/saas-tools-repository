"use client";

import { Saasategory } from "@/database/schema";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckboxWithLabel } from ".";

type Props = {
  existingCategoryFilter: string[];
  categories: Saasategory[];
};

export function SaasToolCategoryFilter({
  existingCategoryFilter,
  categories,
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
    <div className="flex flex-wrap gap-4">
      {categories?.map((category) => (
        <CheckboxWithLabel
          key={category.id}
          onCheckedChange={(checked: boolean) => {
            handleCategoryChange(checked, category.name);
          }}
          checked={existingCategoryFilter.includes(category.name)}
        >
          {category.name}
        </CheckboxWithLabel>
      ))}
    </div>
  );
}
