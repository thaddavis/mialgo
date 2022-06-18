import algosdk from "algosdk";

export async function checkOutBlock() {
  const algodToken = {
    "X-API-key": `${process.env.REACT_APP_PURE_STAKE_API_KEY}`,
  };
  const server = "https://testnet-algorand.api.purestake.io/idx2";
  const port = 443;
  let indexerClient = new algosdk.Indexer(algodToken, server, port);
  let blockInfo = await indexerClient.lookupBlock(5).do();
  console.log(blockInfo);
}
