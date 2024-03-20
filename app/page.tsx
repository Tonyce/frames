import { getFrameMetadata } from "frog/next";
import type { Metadata } from "next";

import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const frameTags = await getFrameMetadata(`${process.env.WEBSITE_URL}/api`);
  return {
    other: frameTags,
  };
}

export default function Home() {
  return <main className={styles.main}>degencast</main>;
}
