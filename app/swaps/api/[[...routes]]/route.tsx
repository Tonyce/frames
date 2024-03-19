/** @jsxImportSource frog/jsx */

import { Frog } from "frog";
import { handle } from "frog/next";
import { pinata } from "frog/hubs";
// import { FrogOptions } from "./components";
import swapFrame from "./frame";

const app = new Frog({
  assetsPath: "/",
  basePath: "/swaps/api",
  hub: pinata(),
});

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

// app.frame("/", start);

app.route("/", swapFrame);

export const GET = handle(app);
export const POST = handle(app);
