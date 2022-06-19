import QRCode1 from "../../images/QRCodes/Wallet1.png";
import QRCode2 from "../../images/QRCodes/Wallet2.png";
import QRCode3 from "../../images/QRCodes/Wallet3.png";
import MialgoSite from "../../images/QRCodes/mialgo.io.png";
import Token from "../../images/QRCodes/token.png";

export const QRCodesAlgorand: {
  name: string;
  description: string;
  link: string;
  image: any;
}[] = [
  {
    name: "My Algo Wallet",
    description: "",
    link: "#",
    image: QRCode1,
  },

  {
    name: "Pera Wallet",
    description: "",
    link: "#",
    image: QRCode2,
  },

  {
    name: "Algosigner Wallet",
    description: "",
    link: "#",
    image: QRCode3,
  },

  {
    name: "Token",
    description: "MIALGO Token",
    link: "#",
    image: Token,
  },
];
