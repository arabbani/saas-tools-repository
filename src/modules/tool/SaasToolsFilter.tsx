import {
  SaasToolCategoryFilter,
  SaasToolPricingModelFilter,
} from "@/client-components";
import { PricingModel } from "@/util/types";

type Props = {
  existingPricingModelFilter: PricingModel[];
  existingCategoryFilter: string[];
};

export function SaasToolsFilter({
  existingPricingModelFilter,
  existingCategoryFilter,
}: Props) {
  return (
    <div>
      <SaasToolCategoryFilter existingCategoryFilter={existingCategoryFilter} />
      <SaasToolPricingModelFilter
        existingPricingModelFilter={existingPricingModelFilter}
      />
    </div>
  );
}
