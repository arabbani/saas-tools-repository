"use client";

import { PRICING_MODELS } from "@/util/constant";
import { PricingModel } from "@/util/types";
import { CheckboxWithLabel } from "./CheckboxWithLabel";

type Props = {
  existingPricingModelFilter: PricingModel[];
  handleValueChange: (checked: boolean, pricingModel: PricingModel) => void;
};

export function SaasToolPricingModelFilter({
  existingPricingModelFilter,
  handleValueChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {PRICING_MODELS.map((pricingModel) => (
        <CheckboxWithLabel
          key={pricingModel}
          onCheckedChange={(checked: boolean) => {
            handleValueChange(checked, pricingModel);
          }}
          defaultChecked={existingPricingModelFilter.includes(pricingModel)}
        >
          {pricingModel}
        </CheckboxWithLabel>
      ))}
    </div>
  );
}
