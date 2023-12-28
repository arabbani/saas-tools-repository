import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle
} from "@/components/ui";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { SaasToolTags } from "./SaasToolTags";
import { TypeSaasToolForCard } from "./utility-types";

export function SaasToolCard({ tool }: { tool: Readonly<TypeSaasToolForCard> }) {
  return (
    <Card className="overflow-clip">
      <CardContent className="grid grid-cols-12 h-36 lg:h-40 p-0">
        <div className="col-span-5 relative">
          <Image src={tool.imageUrl} alt={tool.name} fill />
        </div>
        <div className="col-span-7 p-3 lg:p-4 flex flex-col">
          <CardTitle className="text-link text-sm lg:text-base hover:text-linkeffect mb-2 flex gap-3 justify-between items-center">
            <Link href={`/tools/${tool.name}`} className="underline hover:no-underline hyphens-auto">
              {tool.name}
            </Link>
            <a href={tool.websiteUrl} target="_blank">
              <ExternalLinkIcon className="size-5" />
            </a>
          </CardTitle>
          <CardDescription className="grow text-pretty">{tool.excerpt}</CardDescription>
          <CardFooter className="p-0 pt-2 hidden lg:block">
            <SaasToolTags tags={tool.tags} />
          </CardFooter>
        </div>
      </CardContent>
    </Card>
  );
}
