/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from "frog";
import { backgroundStyles, titleStyles, warningStyles } from "./styles";
import { getUserDataByFid, getUserStorageByFid } from "@/lib/hub";

export async function check(c: any) {
  const { buttonValue, status } = c;
  const { frameData } = c;
  if (!frameData) {
    return c.res({
      image: (
        <div style={backgroundStyles}>
          <span style={titleStyles}>Thanks for Playing</span>

          <span style={warningStyles}>
            Your transaction is being processed. This frame doesn't check for a
            successful execution
          </span>
        </div>
      ),
      intents: [<Button action={`/`}>Try Again</Button>],
    });
  }
  const { castId, fid, messageHash, network, timestamp, url } = frameData;
  // const fid = c.frameData?.fid || 17137;
  // console.log("buttonValue", buttonValue, fid);
  const [user, storage] = await Promise.all([
    getUserDataByFid(fid),
    getUserStorageByFid(fid),
  ]);
  // console.log("user", user, storage);
  return c.res({
    action: "/finish",
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
            alignItems: "flex-start",
            justifyContent: "flex-start",
            overflow: "hidden",
            padding: "50px 50px 20px 50px",
          }}
        >
          <div
            style={{
              ...backgroundStyles,
              position: "relative",
              flexDirection: "row",
              justifyContent: "flex-start",
              width: "100%",
              height: "auto",
              padding: "20px 10px",
              gap: "20px",
            }}
          >
            <img
              src={user.pfp}
              alt=""
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "10px",
              }}
            />
            <div
              style={{
                color: "rgb(56, 189, 248)",
                fontSize: "50px",
              }}
            >
              {user.display}
            </div>
          </div>
          <div
            style={{
              ...backgroundStyles,
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px",
              fontSize: 45,
              gap: 10,
            }}
          >
            <span>units: {storage.units}</span>
            <span>
              casts: {storage.casts?.used} / {storage.casts?.limit}
            </span>
            <span>
              links: {storage.links?.used} / {storage.links?.limit}
            </span>
            <span>
              reactions: {storage.reactions?.used} / {storage.reactions?.limit}
            </span>
          </div>
        </div>
      </div>
    ),
    intents: [
      <TextInput placeholder="amount of unit, default 1" />,
      <Button action="/">Back</Button>,
      <Button.Transaction target="/rent">Buy More</Button.Transaction>,
    ],
  });
}
