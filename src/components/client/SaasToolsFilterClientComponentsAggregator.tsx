"use client";

import {
  SaasToolCategoryFilter,
  SaasToolPricingModelFilter,
  SaasToolsSortBy,
} from "@/components/client";
import { Button, Separator } from "@/components/ui";
import { SaasCategory } from "@/database/schema";
import { PricingModel } from "@/util/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

type Props = {
  existingPricingModelFilter: PricingModel[];
  existingCategoryFilter: string[];
  categories: SaasCategory[];
  sortOrder?: string;
};

export function SaasToolsFilterClientComponentsAggregator({
  existingPricingModelFilter,
  existingCategoryFilter,
  categories,
  sortOrder,
}: Props) {
  const params = useSearchParams();
  const router = useRouter();

  const selectedFilter = useRef({
    category: existingCategoryFilter,
    pricingModel: existingPricingModelFilter,
    sortOrder: sortOrder,
  });

  const handlePricingModelChange = (
    checked: boolean,
    pricingModel: PricingModel
  ) => {
    handleFilterChange("pricingModel", checked, pricingModel);
  };

  const handleCategoryChange = (checked: boolean, pricingModel: string) => {
    handleFilterChange("category", checked, pricingModel);
  };

  const applyFilter = () => {
    const newParams = new URLSearchParams(params.toString());
    newParams.delete("pricingModel");
    newParams.delete("category");

    if (selectedFilter.current.category.length) {
      newParams.set("category", selectedFilter.current.category.toString());
    }

    if (selectedFilter.current.pricingModel.length) {
      newParams.set(
        "pricingModel",
        selectedFilter.current.pricingModel.toString()
      );
    }

    if (selectedFilter.current.sortOrder) {
      newParams.set("sortOrder", selectedFilter.current.sortOrder);
    }
    router.push(`/?${newParams.toString()}`);
  };

  const handleFilterChange = (
    kind: "category" | "pricingModel",
    checked: boolean,
    key: string
  ) => {
    let newFilter: string[] = selectedFilter.current[kind];

    if (checked && !newFilter.includes(key)) {
      newFilter.push(key);
    } else {
      newFilter = newFilter.filter((item) => item !== key);
    }

    if (kind === "pricingModel") {
      selectedFilter.current[kind] = newFilter as PricingModel[];
    } else {
      selectedFilter.current[kind] = newFilter;
    }
  };

  const handleSortOrderChange = (value: string) => {
    selectedFilter.current.sortOrder = value;
  };

  return (
    <div className="mb-4">
      <SaasToolCategoryFilter
        categories={categories}
        existingCategoryFilter={existingCategoryFilter}
        handleValueChange={handleCategoryChange}
      />
      <Separator decorative className="my-3" />
      <div className="flex justify-between">
        <SaasToolPricingModelFilter
          existingPricingModelFilter={existingPricingModelFilter}
          handleValueChange={handlePricingModelChange}
        />
        <div className="flex gap-4">
          <SaasToolsSortBy
            sortOrder={sortOrder}
            handleValueChange={handleSortOrderChange}
          />
          <Button onClick={applyFilter}>Apply</Button>
        </div>
      </div>
    </div>
  );
}
