import { SaasToolsFilterClientComponentsAggregator } from "@/components/client";
import { findSaasCategories } from "@/database/data";
import { PricingModel } from "@/util/types";

type Props = {
  existingPricingModelFilter: PricingModel[];
  existingCategoryFilter: string[];
};

export async function SaasToolsFilter({
  existingPricingModelFilter,
  existingCategoryFilter,
}: Props) {
  const categories = await findSaasCategories();

  return (
    <div>
      <SaasToolsFilterClientComponentsAggregator
        existingCategoryFilter={existingCategoryFilter}
        existingPricingModelFilter={existingPricingModelFilter}
        categories={categories}
      />
    </div>
  );
}
