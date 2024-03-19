export const FEE_RECIPIENT_WALLET_ADDRESS =
  process.env.FEE_RECIPIENT_WALLET_ADDRESS;
export const BUY_TOKEN_PERCENTAGE_FEE = process.env.BUY_TOKEN_PERCENTAGE_FEE;

export const API_KEY_0X_API_KEY = process.env.API_KEY_0X_API_KEY;

if (!FEE_RECIPIENT_WALLET_ADDRESS) {
  throw new Error("FEE_RECIPIENT_WALLET_ADDRESS is not set");
}
if (!BUY_TOKEN_PERCENTAGE_FEE) {
  throw new Error("BUY_TOKEN_PERCENTAGE_FEE is not set");
}

if (!API_KEY_0X_API_KEY) {
  throw new Error("API_KEY_0X_API_KEY is not set");
}
