/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from "frog";
import { handle } from "frog/next";
import { pinata } from "frog/hubs";
// import { FrogOptions } from "./components";
import storage from "./frame/index";

const app = new Frog({
  assetsPath: "/",
  basePath: "/storage/api",
  hub: pinata(),
  headers: {
    "cache-control": "public, max-age=3600",
  },
});

app.route("/", storage);

export const GET = handle(app);
export const POST = handle(app);
