/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from "frog";
import { backgroundStyles, titleStyles } from "./styles";

export function start(c: any) {
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
          <span style={titleStyles}>Check Your Storage</span>
        </div>
      </div>
    ),
    intents: [<Button action="/check">Get Started</Button>],
  });
}
