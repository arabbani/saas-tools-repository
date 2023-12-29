import {
  SaasToolCategoryFilter,
  SaasToolPricingModelFilter,
} from "@/client-components";
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
      <SaasToolCategoryFilter
      className="mb-8"
        categories={categories}
        existingCategoryFilter={existingCategoryFilter}
      />
      <SaasToolPricingModelFilter
        existingPricingModelFilter={existingPricingModelFilter}
      />
    </div>
  );
}
