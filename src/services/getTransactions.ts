import axios from "axios";

export async function getTransactions() {
  const algodToken = {
    "X-API-key": `${process.env.REACT_APP_PURE_STAKE_API_KEY}`,
  };

  const algodServer = `https://testnet-algorand.api.purestake.io/idx2/v2/accounts/${"U3LYLWNE3XJ5L32DRJAQKUEGJJRXDW2LKM5EPPO7653FREMCFI4FCEV5X4"}/transactions`;
  console.log(
    await axios.get(algodServer, {
      headers: algodToken,
    })
  );
}
