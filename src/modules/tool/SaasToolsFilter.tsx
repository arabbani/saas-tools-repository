import { SaasToolPricingModelFilter } from "@/client-components";
import { PricingModel } from "@/util/types";

type Props = {
  existingPricingModelFilter: PricingModel[];
};

export function SaasToolsFilter({ existingPricingModelFilter }: Props) {
  return (
    <div>
      <SaasToolPricingModelFilter
        existingPricingModelFilter={existingPricingModelFilter}
      />
    </div>
  );
}
