"use client";

import { PRICING_MODELS } from "@/util/constant";
import { CheckboxWithLabel } from ".";

export function SaasToolsFilter() {
  // const params = useSearchParams();
  // const router = useRouter();

  // const updateRoute = (value: string) => {
  //   const newParams = new URLSearchParams(params.toString());
  //   newParams.set("sort", value);
  //   router.push(`/?${newParams.toString()}`);
  // };

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {PRICING_MODELS.map((pricingModel) => (
          <CheckboxWithLabel key={pricingModel}>{pricingModel}</CheckboxWithLabel>
        ))}
      </div>
    </div>
  );
}
