import { SaasToolPricingModelFilter } from "@/client-components";
import { PricingModel } from "@/util/types";

type Props = {
  pricingModelFilter?: PricingModel | PricingModel[];
};

export function SaasToolsFilter({ pricingModelFilter }: Props) {
  return (
    <div>
      <SaasToolPricingModelFilter pricingModelFilter={pricingModelFilter} />
    </div>
  );
}
