import { Network, Alchemy } from "alchemy-sdk";

const settings = {
  apiKey: ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);

export default alchemy;
