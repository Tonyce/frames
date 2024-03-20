/** @jsxImportSource frog/jsx */

import { Frog } from "frog";
import { handle } from "frog/next";
import { pinata } from "frog/hubs";
// import { FrogOptions } from "./components";
import landingFrame from "./frame";

const app = new Frog({
  assetsPath: "/",
  basePath: "/frames/landing/api",
  hub: pinata(),
  headers: {
    "cache-control": "public, max-age=3600",
  },
});

app.route("/", landingFrame);

export const GET = handle(app);
export const POST = handle(app);
