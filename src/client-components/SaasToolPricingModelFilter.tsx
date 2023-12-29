"use client";

import { PRICING_MODELS } from "@/util/constant";
import { PricingModel } from "@/util/types";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckboxWithLabel } from "./CheckboxWithLabel";

type Props = {
  existingPricingModelFilter: PricingModel[];
};

export function SaasToolPricingModelFilter({
  existingPricingModelFilter,
}: Props) {
  const params = useSearchParams();
  const router = useRouter();

  const handlePricingModelChange = (
    checked: boolean,
    pricingModel: PricingModel
  ) => {
    const newParams = new URLSearchParams(params.toString());
    let selectedPricingModelFilter: string[] = [];

    if (newParams.get("pricingModel")) {
      selectedPricingModelFilter = newParams.get("pricingModel")!.split(",");
    }

    if (checked && !selectedPricingModelFilter.includes(pricingModel)) {
      selectedPricingModelFilter.push(pricingModel);
    } else {
      selectedPricingModelFilter = selectedPricingModelFilter.filter(
        (item) => item !== pricingModel
      );
    }

    newParams.delete("pricingModel");

    if (selectedPricingModelFilter.length) {
      newParams.set("pricingModel", selectedPricingModelFilter.toString());
    }
    router.push(`/?${newParams.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {PRICING_MODELS.map((pricingModel) => (
        <CheckboxWithLabel
          key={pricingModel}
          onCheckedChange={(checked: boolean) => {
            handlePricingModelChange(checked, pricingModel);
          }}
          checked={existingPricingModelFilter.includes(pricingModel)}
        >
          {pricingModel}
        </CheckboxWithLabel>
      ))}
    </div>
  );
}
