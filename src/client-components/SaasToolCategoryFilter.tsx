"use client";

import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  existingCategoryFilter: string[];
};

export function SaasToolCategoryFilter({
  existingCategoryFilter,
}: Props) {
  const params = useSearchParams();
  const router = useRouter();

  // const saasCategories = await findSaasCategories();

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
      {/* {saasCategories?.map((category) => (
        <CheckboxWithLabel
          key={category.id}
          onCheckedChange={(checked: boolean) => {
            handleCategoryChange(checked, category.name);
          }}
          checked={existingCategoryFilter.includes(category.name)}
        >
          {category.name}
        </CheckboxWithLabel>
      ))} */}
    </div>
  );
}
