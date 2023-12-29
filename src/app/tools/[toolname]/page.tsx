import { ExternalLink, TypographyH2 } from "@/components/custom";
import { findSaasToolByName } from "@/database/data";
import { SaasToolPricingBadge, SaasToolTagsBadgeLink } from "@/modules/tool";
import { openGraphMetadataDefault } from "@/util/site-metadata";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { cache } from "react";

type Props = {
  params: {
    toolname: string;
  };
};

const getData = cache(async (name: string) => {
  const data = await findSaasToolByName(name);
  return data;
});

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const saasTool = await getData(decodeURIComponent(params.toolname));
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  if (!saasTool) {
    redirect("/");
  }
 
  return {
    title: saasTool.name,
    description: saasTool.description,
    openGraph: {
      ...openGraphMetadataDefault,
      images: [{
        url: saasTool.imageUrl,
        alt: saasTool.name, 
      }, ...previousImages],
    },
  }
}

export default async function ToolDetails({ params }: Props) {
  const saasTool = await getData(decodeURIComponent(params.toolname));
  
  if (!saasTool) {
    redirect("/");
  }

  return (
    <div className="max-w-5xl mx-3 xl:mx-auto grid md:grid-cols-12 gap-6">
      <div className="col-span-6 relative h-52 lg:h-72">
        <Image src={saasTool.imageUrl} alt={saasTool.name} fill priority />
      </div>
      <div className="col-span-6">
        <TypographyH2>{saasTool.name}</TypographyH2>
        <ExternalLink
          url={saasTool.websiteUrl}
          className="flex gap-1 items-center my-2"
        >
          Website
          <ExternalLinkIcon className="size-5" />
        </ExternalLink>
        <p className="my-3 text-pretty text-sm lg:text-base">{saasTool.description}</p>
        <p className="mb-4">
          <span className="font-medium">Pricing:</span>{" "}
          <SaasToolPricingBadge pricingModel={saasTool.pricingModel} />
        </p>
        <SaasToolTagsBadgeLink tags={saasTool.tags} />
      </div>
    </div>
  );
}
