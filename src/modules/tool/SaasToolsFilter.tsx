import { SaasToolsFilterClientComponentsAggregator } from "@/components/client";
import { findSaasCategories } from "@/database/data";
import { PricingModel } from "@/util/types";

type Props = {
  existingPricingModelFilter: PricingModel[];
  existingCategoryFilter: string[];
  sortOrder?: string;
};

export async function SaasToolsFilter({
  existingPricingModelFilter,
  existingCategoryFilter,
  sortOrder,
}: Props) {
  const categories = await findSaasCategories();

  return (
    <div>
      <SaasToolsFilterClientComponentsAggregator
        existingCategoryFilter={existingCategoryFilter}
        existingPricingModelFilter={existingPricingModelFilter}
        categories={categories}
        sortOrder={sortOrder}
      />
    </div>
  );
}
