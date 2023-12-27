import { SaasToolList } from "@/modules/tool";
import { Tool } from "@prisma/client";

export default async function Home() {
  // const tools = await getSaasTools();
  const tools: Tool[] = [
    {
      id: 1,
      name: 'ReRoom AI',
      description: 'ReRoom is an AI-powered design tool that helps users create and customize their own space. It allows users to upload a photo of their room, explore over 20 different design styles, and remodel their space. It also offers pre-made rooms from the latest generation from the community. Users can also confirm their email address to unlock additional features.',
      pricingModel: 'Free',
      imageUrl: 'https://assets-global.website-files.com/63994dae1033718bee6949ce/6442ed7f833d0946a39b9172_preview-new.jpeg',
      websiteUrl: 'https://reroom.ai/',
      tags: 'Finance, Inspiration',
      upvotes: 0,
      published: true,
      createdAt: new Date('2023-12-27T12:30:24.176Z')
    },
    {
      id: 2,
      name: 'Rose.ai',
      description: 'Rose is a cloud data platform designed to help users find, engage, visualize and share data. It enables integration of external and internal data, with the ability to permission data for internal teams or third parties. It also provides infrastructure tools to clean, analyze, and visualize data in their web application and a data marketplace to preview, buy, and sell data.',
      pricingModel: 'Freemium',
      imageUrl: 'https://assets-global.website-files.com/63994dae1033718bee6949ce/63dabe5f5f52c02edda57679_Screenshot-2-1-2023-11.32.42%20AM.png',
      websiteUrl: 'https://rose.ai/',
      tags: 'Finance',
      upvotes: 5,
      published: true,
      createdAt: new Date('2023-12-27T12:33:17.890Z')
    }
  ]

  return (
    <main className="py-12 max-w-7xl mx-auto">
      <SaasToolList tools={tools} />
    </main>
  );
}
