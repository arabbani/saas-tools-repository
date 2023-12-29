import { Badge, BadgeProps } from "@/components/ui";
import { PricingModel } from "@/util/types";
import clsx from "clsx";

interface SaasToolPricingBadgeProps extends React.HTMLAttributes<HTMLElement> {
  pricingModel: PricingModel;
}

export function SaasToolPricingBadge({ pricingModel }: SaasToolPricingBadgeProps) {
  let badgeVariant: Pick<BadgeProps, "variant">["variant"] = "default";

  switch (pricingModel) {
    case "Free":
      badgeVariant = "secondary";
      break;
    case "Paid":
      badgeVariant = "destructive";
      break;
  }

  return (
    <Badge
      variant={badgeVariant}
      className={clsx({
        "bg-green-900 hover:bg-green-900/80": pricingModel === "Open Source",
      })}
    >
      {pricingModel}
    </Badge>
  );
}
