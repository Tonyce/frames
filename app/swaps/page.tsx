import { getFrameMetadata } from "frog/next";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const metadataPage = `${process.env.WEBSITE_URL}/swaps/api`;
  const frameTags = await getFrameMetadata(metadataPage);
  console.log("metadataPage", metadataPage);
  console.log("frameTags", frameTags);
  return {
    other: frameTags,
  };
}

export default function Home() {
  return <div>swaps</div>;
}
