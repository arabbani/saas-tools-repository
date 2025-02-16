import { badgeVariants } from "@/components/ui";
import { cn } from "@/lib/css";
import Link from "next/link";

interface SaasToolTagLinkBadgesProps extends React.HTMLAttributes<HTMLElement> {
  tags: string;
}

export function SaasToolTagLinkBadges({ tags }: SaasToolTagLinkBadgesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.split(",").map((tag) => (
        <Link
          href={`/?category=${tag}`}
          className={cn("underline", badgeVariants({ variant: "secondary" }))}
          key={tag}
          prefetch={false}
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}
