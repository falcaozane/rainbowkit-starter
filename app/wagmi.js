import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  
  sepolia,
  fraxtalTestnet,
  xdcTestnet,
  polygonZkEvmTestnet
} from 'wagmi/chains';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId,
  chains: [
    fraxtalTestnet,
    sepolia,
    xdcTestnet,
    polygonZkEvmTestnet
  ],
});
