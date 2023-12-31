import { Badge, BadgeProps } from "@/components/ui";
import { cn } from "@/lib/css";
import { PricingModel } from "@/util/types";

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
      className={cn({
        "bg-green-900 hover:bg-green-900/80": pricingModel === "Open Source",
      })}
    >
      {pricingModel}
    </Badge>
  );
}
