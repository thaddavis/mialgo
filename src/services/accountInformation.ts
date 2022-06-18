import axios from "axios";

export async function accountInformation() {
  const algodToken = {
    "X-API-key": `${process.env.REACT_APP_PURE_STAKE_API_KEY}`,
  };
  const algodServer = `https://testnet-algorand.api.purestake.io/ps2/v2/accounts/${"U3LYLWNE3XJ5L32DRJAQKUEGJJRXDW2LKM5EPPO7653FREMCFI4FCEV5X4"}`;
  //   const algodPort = 443;
  //   let algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
  //   console.log(await algodClient.status().do());
  console.log(
    await axios.get(algodServer, {
      headers: algodToken,
    })
  );
}
