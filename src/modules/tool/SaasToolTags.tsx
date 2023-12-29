import { badgeVariants } from "@/components/ui";
import Link from "next/link";

interface SaasToolTagsProps extends React.HTMLAttributes<HTMLElement> {
  tags: string;
}

export function SaasToolTags({ tags }: SaasToolTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.split(",").map((tag) => (
        <Link
          href={`/?type=${tag}`}
          className={badgeVariants({ variant: "secondary" })}
          key={tag}
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}
