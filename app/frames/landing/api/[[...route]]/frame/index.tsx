import { FrameContext, Frog, TransactionContext } from "frog";
import { pinata } from "frog/hubs";
import { getFont } from "@/lib/fonts";

import { start } from "./start";
import { finish } from "./finish";

// export type CustomFrameContext = FrameContext<FrogOptions>;
// export type CustomTransactionContext = TransactionContext<FrogOptions>;

export const app = new Frog({
  imageOptions: async () => {
    const gilroy = await getFont("gilroy");
    const inter = await getFont("inter");
    return { fonts: [gilroy, inter] };
  },
  headers: {
    "Cache-Control": "public, max-age=3600",
  },
  hub: pinata(),
});

app.frame("/", start);
app.frame("/finish", finish);

export default app;
