/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from "frog";
import { handle } from "frog/next";
// import { start } from "./components/start";
// import { FrogOptions } from "./components";

const app = new Frog({
  assetsPath: "/",
  basePath: "/tips/api",
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
});

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame("/", (c) => {
  const { buttonValue, status } = c;
  return c.res({
    image: (
      <div
        style={{
          color: "white",
          background: "#000",
          display: "flex",
          fontSize: 60,
          width: "100%",
          height: "100%",
        }}
      >
        {status === "initial"
          ? "Select your fruit!"
          : `Selected: ${buttonValue}`}
      </div>
    ),
    intents: [
      <Button value="apple">Apple</Button>,
      <Button value="banana">Banana</Button>,
      <Button value="mango">Mango</Button>,
    ],
  });
});

// app.route("/swap", swapFrame);

export const GET = handle(app);
export const POST = handle(app);
