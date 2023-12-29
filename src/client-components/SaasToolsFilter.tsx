"use client";

import { PRICING_MODELS } from "@/util/constant";
import { PricingModel } from "@/util/types";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckboxWithLabel } from "./CheckboxWithLabel";

export function SaasToolsFilter() {
  const params = useSearchParams();
  const router = useRouter();

  const handlePricingModelChange = (
    checked: boolean,
    pricingModel: PricingModel
  ) => {
    const newParams = new URLSearchParams(params.toString());
    let existingPricingModelFilter = newParams.getAll("pricingModel");

    if (checked && !existingPricingModelFilter.includes(pricingModel)) {
      existingPricingModelFilter.push(pricingModel);
    } else {
      existingPricingModelFilter = existingPricingModelFilter.filter(
        (item) => item !== pricingModel
      );
    }

    newParams.delete("pricingModel");
    existingPricingModelFilter.forEach((item) =>
      newParams.append("pricingModel", item)
    );
    router.push(`/?${newParams.toString()}`);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {PRICING_MODELS.map((pricingModel) => (
          <CheckboxWithLabel
            key={pricingModel}
            onCheckedChange={(checked: boolean) => {
              handlePricingModelChange(checked, pricingModel);
            }}
          >
            {pricingModel}
          </CheckboxWithLabel>
        ))}
      </div>
    </div>
  );
}
