import { ConnectButton } from '@rainbow-me/rainbowkit';

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
      }}
    >
      <ConnectButton />
    </div>
  );
}

export default Home;