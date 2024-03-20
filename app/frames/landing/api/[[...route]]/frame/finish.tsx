/** @jsxImportSource frog/jsx */

import { Button, Env, FrameContext } from "frog";
import { backgroundStyles, warningStyles, titleStyles } from "./styles";
import { getAddressFromFid, getFollowedFromFidToTargetFid } from "@/lib/hub";

export const finish = async (c: FrameContext) => {
  // app.hub?.fetchOptions('POST', '/finish)
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

  const hasFollowed = await getFollowedFromFidToTargetFid(fid, 7061);
  console.log("hasFollowed", hasFollowed);
  if (!hasFollowed) {
    return c.res({
      image: <div style={backgroundStyles}>Follow first</div>,
      intents: [
        <Button.Link href="https://warpcast.com/liang">Follow</Button.Link>,
        <Button action={`/finish`}>Try Again</Button>,
      ],
    });
  }

  const addresses = await getAddressFromFid(fid);

  const { ethAddress, solAddress } = addresses;
  console.log({ fid, ethAddress, solAddress });
  // POST to API Server to save the address

  return c.res({
    image: (
      <div style={backgroundStyles}>
        <span style={titleStyles}>Thanks for Playing</span>
      </div>
    ),
    intents: [
      <Button.Link href="https://degencast.xyz">Visit Degencast</Button.Link>,
    ],
  });
};
