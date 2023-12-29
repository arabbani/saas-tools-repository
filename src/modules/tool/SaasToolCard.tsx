import { ExternalLink } from "@/components/custom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { SaasToolTags } from "./SaasToolTags";
import { TypeSaasToolForCard } from "./utility-types";

interface SaasToolCardProps extends React.HTMLAttributes<HTMLElement> {
  tool: Readonly<TypeSaasToolForCard>;
}

export function SaasToolCard({ tool }: SaasToolCardProps) {
  return (
    <Card className="overflow-clip">
      <CardContent className="grid grid-cols-12 h-36 lg:h-40 p-0">
        <div className="col-span-5 relative">
          <Image src={tool.imageUrl} alt={tool.name} fill />
        </div>
        <div className="col-span-7 p-3 lg:p-4 flex flex-col">
          <CardTitle className="text-sm lg:text-base mb-2 flex gap-3 justify-between items-center">
            <Link
              href={`/tools/${tool.name}`}
              className="internal-link"
            >
              {tool.name}
            </Link>
            <ExternalLink url={tool.websiteUrl}>
              <ExternalLinkIcon className="size-5" />
            </ExternalLink>
          </CardTitle>
          <CardDescription className="grow text-pretty">
            {tool.excerpt}
          </CardDescription>
          <CardFooter className="p-0 pt-2 hidden lg:block">
            <SaasToolTags tags={tool.tags} />
          </CardFooter>
        </div>
      </CardContent>
    </Card>
  );
}
