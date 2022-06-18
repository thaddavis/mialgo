import algosdk from "algosdk";

export async function getNodeStatus() {
  const algodToken = {
    "X-API-key": `${process.env.REACT_APP_PURE_STAKE_API_KEY}`,
  };
  const algodServer = "https://testnet-algorand.api.purestake.io/ps2";
  const algodPort = 443;
  let algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
  console.log(await algodClient.status().do());
}
