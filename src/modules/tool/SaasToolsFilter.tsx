import {
  SaasToolCategoryFilter,
  SaasToolPricingModelFilter,
} from "@/components/client";
import { Separator } from "@/components/ui";
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
        categories={categories}
        existingCategoryFilter={existingCategoryFilter}
      />
      <Separator decorative className="my-3" />
      <SaasToolPricingModelFilter
        existingPricingModelFilter={existingPricingModelFilter}
      />
    </div>
  );
}
