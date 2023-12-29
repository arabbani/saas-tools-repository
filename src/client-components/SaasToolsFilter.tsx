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
    let existingPricingModelFilter = newParams.getAll("pricing-model");

    if (checked && !existingPricingModelFilter.includes(pricingModel)) {
      existingPricingModelFilter.push(pricingModel);
    } else {
      existingPricingModelFilter = existingPricingModelFilter.filter(
        (item) => item !== pricingModel
      );
    }

    newParams.delete("pricing-model");
    existingPricingModelFilter.forEach((item) =>
      newParams.append("pricing-model", item)
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
