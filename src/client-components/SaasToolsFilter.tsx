"use client";

import { PRICING_MODELS } from "@/util/constant";
import { PricingModel } from "@/util/types";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckboxWithLabel } from "./CheckboxWithLabel";

type Props = {
  pricingModelFilter?: PricingModel | PricingModel[];
};

export function SaasToolsFilter({ pricingModelFilter }: Props) {
  const params = useSearchParams();
  const router = useRouter();

  let selectedPricingModelFilter: PricingModel[] = [];

  if (pricingModelFilter) {
    if (!Array.isArray(pricingModelFilter)) {
      selectedPricingModelFilter = [pricingModelFilter];
    } else {
      selectedPricingModelFilter = pricingModelFilter;
    }
  }

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
            checked={selectedPricingModelFilter.includes(pricingModel)}
          >
            {pricingModel}
          </CheckboxWithLabel>
        ))}
      </div>
    </div>
  );
}
