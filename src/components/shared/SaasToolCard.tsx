import { SaasTool } from "@/database/schema";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
  badgeVariants,
} from "../ui";

export function SaasToolCard({ tool }: { tool: SaasTool }) {
  return (
    <Card className="overflow-clip">
      <CardContent className="grid grid-cols-10 h-44 p-0">
        <Link href="/" target="_blank" className="col-span-4 relative">
          <Image src={tool.imageUrl} alt={tool.name} fill />
        </Link>
        <div className="col-span-6 p-4 flex flex-col">
          <CardTitle className="text-link mb-2 w-max">
            <Link href="/" target="_blank" className="flex gap-2">
              {tool.name}
              <OpenInNewWindowIcon />
            </Link>
          </CardTitle>
          <CardDescription className="grow">{`${tool.description
            .substring(0, 150)
            .trimEnd()}...`}</CardDescription>
          <CardFooter className="p-0 pt-2 flex gap-1">
            {tool.tags.split(",").map((tag) => (
              <Link
                href={`/?type=${tag}`}
                className={badgeVariants({ variant: "secondary" })}
                key={tag}
              >
                {tag}
              </Link>
            ))}
          </CardFooter>
        </div>
      </CardContent>
    </Card>
  );
}
