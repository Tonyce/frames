import { getFrameMetadata } from "frog/next";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const frameTags = await getFrameMetadata(
    `${process.env.VERCEL_URL}/swaps/api`
  );
  console.log("frameTags", frameTags);
  return {
    other: frameTags,
  };
}

export default function Home() {
  return <div>swaps</div>;
}
