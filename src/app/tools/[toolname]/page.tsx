import { ExternalLink, TypographyH2 } from "@/components/custom";
import { findSaasToolByName } from "@/database/data";
import { SaasToolPricingTag, SaasToolTags } from "@/modules/tool";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
  params: {
    toolname: string;
  };
};

export default async function ToolDetails({ params }: Props) {
  const saasTool = await findSaasToolByName(
    decodeURIComponent(params.toolname)
  );

  if (!saasTool) {
    redirect("/");
  }

  return (
    <div className="max-w-5xl mx-3 xl:mx-auto grid md:grid-cols-12 gap-6">
      <div className="col-span-6 relative max-h-64">
        <Image src={saasTool.imageUrl} alt={saasTool.name} fill />
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
          <SaasToolPricingTag pricingModel={saasTool.pricingModel} />
        </p>
        <SaasToolTags tags={saasTool.tags} />
      </div>
    </div>
  );
}
