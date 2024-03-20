import { getFrameMetadata } from "frog/next";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const metadataPage = `${process.env.WEBSITE_URL}/swapsv2/api`;
  const frameTags = await getFrameMetadata(metadataPage);
  // console.log("metadataPage", metadataPage);
  // console.log("frameTags", frameTags);
  return {
    other: frameTags,
  };
}

export default function Home() {
  return <div>swapsv2</div>;
}
