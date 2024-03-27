/** @jsxImportSource frog/jsx */

import { FrameContext, TransactionContext } from "frog";
import { Button, Frog, TextInput } from "frog";
import { getFont } from "@/lib/fonts";

import { start } from "./start";
import { check } from "./check";
import { rent } from "./rent";
import { finish } from "./finish";

type FrogOptions = {};

export type CustomFrameContext = FrameContext<FrogOptions>;
export type CustomTransactionContext = TransactionContext<FrogOptions>;

export const app = new Frog<FrogOptions>({
  // browserLocation: "/swaps",
  imageOptions: async () => {
    const gilroy = await getFont("gilroy");
    const inter = await getFont("inter");
    return { fonts: [gilroy, inter] };
  },
  headers: {
    "Cache-Control": "public, max-age=3600",
  },
});

app.frame("/", start);
app.frame("/check", check);
app.transaction("/rent", rent);
app.frame("/finish", finish);

export default app;
