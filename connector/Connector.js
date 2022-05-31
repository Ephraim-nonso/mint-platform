import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

// Export contract addresses
export const contractAddress = "0xA15eA089A75C95b091ED5BfeF41261D26ADbBB69"; // Kovan

export const providerOptions = {
  /* See Provider Options Section */

  // wallet connect
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      chainId: 42,
      infuraId: "acd485fef89240c2a29744adb8ca8bd1", // required
    },
  },

  // coinbase wallet
  coinbasewallet: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "Mixer", // Required
      infuraId: "acd485fef89240c2a29744adb8ca8bd1", // Required
      rpc: "", // Optional if `infuraId` is provided; otherwise it's required
      chainId: 42, // Optional. It defaults to 1 if not provided
      darkMode: false, // Optional. Use dark theme, defaults to false
    },
  },
};

export const DEFAULT_CHAIN = {
  4: {
    chainId: `0x${Number(1).toString(16)}`,
    chainName: "Rinkeby",
    nativeCurrency: {
      name: "Rinkeby Ether",
      symbol: "RIN",
      decimals: 18,
    },
    rpcUrls: [
      "https://rinkeby.infura.io/v3/acd485fef89240c2a29744adb8ca8bd1",
      "wss://rinkeby.infura.io/ws/v3/acd485fef89240c2a29744adb8ca8bd1",
    ],
  },
  42: {
    chainId: `0x${Number(1).toString(16)}`,
    chainName: "Kovan",
    nativeCurrency: {
      name: "Kovan Ether",
      symbol: "KOV",
      decimals: 18,
    },
    rpcUrls: [
      "https://kovan.infura.io/v3/acd485fef89240c2a29744adb8ca8bd1",
      "wss://kovan.infura.io/ws/v3/acd485fef89240c2a29744adb8ca8bd1",
    ],
  },
};
