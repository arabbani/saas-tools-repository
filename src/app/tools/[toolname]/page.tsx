import { TypographyH2 } from "@/components/custom";
import { findSaasToolByName } from "@/database/data";
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
    <div className="max-w-5xl mx-auto grid grid-cols-12 gap-6 h-48">
      <div className="col-span-5 relative">
        <Image src={saasTool.imageUrl} alt={saasTool.name} fill />
      </div>
      <div className="col-span-7 relative">
        <TypographyH2>{saasTool.name}</TypographyH2>
        <p className="mt-4 text-pretty">{saasTool.description}</p>
      </div>
    </div>
  );
}
