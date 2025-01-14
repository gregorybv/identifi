import identiFi from "./identiFi.json";
import { ethers } from 'ethers';

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const {ethereum} = window;
  if (ethereum) {
    const signer = provider.getSigner();
    return new ethers.Contract(
      "0x041b5F12624D072A599F928e6143579D5B70Bd49",
      identiFi.abi,
      signer
    );
  }
};
