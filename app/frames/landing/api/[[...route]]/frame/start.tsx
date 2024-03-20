/** @jsxImportSource frog/jsx */

import { Button, Env, FrameContext, Frog, TextInput } from "frog";
import { backgroundStyles, titleStyles } from "./styles";

export function start(c: FrameContext) {
  return c.res({
    image: (
      <div
        style={{ ...backgroundStyles, padding: 64, backgroundColor: "#6944BA" }}
      >
        <div
          style={{
            ...backgroundStyles,
            position: "relative",
            border: "2px solid rgba(15, 36, 56, 0.1)",
            borderRadius: 32,
            gap: 12,
          }}
        >
          Degencast Landing Page
        </div>
      </div>
    ),
    intents: [
      <Button.Link href="https://warpcast.com/liang">Follow</Button.Link>,
      <Button.Link href="https://warpcast.com/~/channel/degencast">
        Join
      </Button.Link>,
      <Button action={`/finish`}>Done</Button>,
    ],
  });
}
