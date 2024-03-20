/** @jsxImportSource frog/jsx */

import { Button, TextInput } from "frog";

import { backgroundStyles, warningStyles, titleStyles } from "./styles";
import { CustomFrameContext } from ".";

export const assets = [
  {
    name: "$DEGEN",
    network: "base",
    image:
      "https://pbs.twimg.com/profile_images/1751028059325501440/9jrvP_yG_400x400.jpg",
    address: "0x4ed4e862860bed51a9570b96d89af5e1b0efefed",
  },
  {
    name: "$SENDIT",
    network: "base",
    image: "https://i.imgur.com/iQLxGMj.png",
    address: "0xBa5B9B2D2d06a9021EB3190ea5Fb0e02160839A4",
  },
  {
    name: "$HIGHER",
    network: "base",
    image: "https://i.imgur.com/bdQcnVI.png",
    address: "0x0578d8a44db98b23bf096a382e016e29a5ce0ffe",
  },
  {
    name: "$MEMBER",
    network: "base",
    image: "https://i.imgur.com/GobFUtr.png",
    address: "0xA4eFE9e8E2A2D5A2aC46805f233b8e49d0e11955",
  },
  {
    name: "$WOWOW",
    network: "base",
    image: "https://i.imgur.com/MEQ9ndF.jpeg",
    address: "0x8118e4b58451064303034bcd3a0b0f2e8dd45ec3",
  },
  {
    name: "$TN100x",
    network: "base",
    image:
      "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/e6f48016-65e4-4f9e-8157-9e4f9b233700/original",
    address: "0x8f5f1d63599362115e7f9fe71bfd5ab883d82c82",
  },
  {
    name: "$DOG",
    network: "base",
    image:
      "https://pbs.twimg.com/profile_images/1549962330368270336/Ymfk7XtM_400x400.jpg",
    address: "0xae2ce200bdb67c472030b31f602f0756c9aeb61c",
  },
];

export const tokenSelectionScreen = (c: CustomFrameContext) => {
  return c.res({
    image: (
      <div style={backgroundStyles}>
        <div
          style={{
            display: "flex",
            gap: 36,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {assets.map((asset, i) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid rgba(15, 36, 56, 0.1)",
                backgroundColor: "#FFFFFF",
                borderRadius: 32,
                gap: 16,
                padding: "32px 48px",
                width: "241px",
                position: "relative",
              }}
            >
              <span
                style={{
                  left: 0,
                  top: 0,
                  position: "absolute",
                }}
              >
                {`${i}`}
              </span>
              <img
                src={asset.image}
                width={54}
                height={54}
                style={{ borderRadius: 9999 }}
              />
              <span style={{ color: "#5E6773", fontSize: "26px" }}>
                {asset.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    intents: [
      <TextInput placeholder="Pick the token number" />,
      <Button action={`/selected-token`}>Select</Button>,
    ],
  });
};