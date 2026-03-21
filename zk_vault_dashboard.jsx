import React, { useState } from 'react';

export default function App() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState('');

  const connectWallet = () => {
    setIsConnecting(true);
    
    // Simulating the delay of a Web3 wallet handshake
    setTimeout(() => {
      setWalletAddress('0x71C...9A23');
      setBalance('4.205 ETH');
      setIsConnected(true);
      setIsConnecting(false);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 font-sans">
      
      {/* THE CRUSHER: Cyber-Glitch CSS injected directly into the component */}
      <style>{`
        @keyframes cyber-glitch {
          0%, 90% { text-shadow: none; transform: translate(0); }
          92% { text-shadow: 2px 0px #ff003c, -2px 0px #00f0ff; transform: translate(-1px, 1px); }
          94% { text-shadow: -2px 0px #ff003c, 2px 0px #00f0ff; transform: translate(1px, -1px); }
          96% { text-shadow: 2px 0px #ff003c, -2px 0px #00f0ff; transform: translate(-1px, -1px); }
          98% { text-shadow: -2px 0px #ff003c, 2px 0px #00f0ff; transform: translate(1px, 1px); }
          100% { text-shadow: none; transform: translate(0); }
        }
        .glitch-text {
          animation: cyber-glitch 4s infinite;
          position: relative;
          display: inline-block;
        }
      `}</style>

      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 relative">
        
        {/* Header section */}
        <div className="p-6 border-b border-gray-700 bg-gray-800/50">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold tracking-wider text-gray-100">ZK-VAULT</h1>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-900/50 text-blue-400 border border-blue-800">
              {isConnected ? 'Mainnet' : 'Disconnected'}
            </span>
          </div>
        </div>

        {/* Main Interface */}
        <div className="p-8 flex flex-col items-center space-y-6">
          
          <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center mb-2 shadow-inner border border-gray-600">
             <span className="text-4xl">{isConnected ? '🟢' : '🔐'}</span>
          </div>

          {!isConnected ? (
            <div className="text-center space-y-4 w-full">
              <p className="text-gray-400 text-sm">Secure zero-knowledge authentication. No seed phrase required.</p>
              <button 
                onClick={connectWallet}
                disabled={isConnecting}
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold rounded-lg transition-all duration-200 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
              >
                {isConnecting ? 'Authenticating Protocol...' : 'Connect Wallet'}
              </button>
            </div>
          ) : (
            <div className="text-center space-y-6 w-full animate-fade-in">
              <div className="bg-gray-900 p-4 rounded-xl border border-gray-700">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Authenticated Address</p>
                <p className="font-mono text-green-400">{walletAddress}</p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-xl border border-gray-700">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Total Balance</p>
                <p className="text-3xl font-bold text-white">{balance}</p>
              </div>
            </div>
          )}
          
        </div>
        
        {/* Footer with Premium Glitch Watermark */}
        <div className="bg-gray-900 py-4 text-center border-t border-gray-700">
          <span className="text-[10px] text-gray-500 font-mono tracking-widest flex items-center justify-center space-x-2">
             <span>SYS_ARCHITECT //</span>
             <span className="text-blue-400 font-bold glitch-text drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
               SJAYJAYBEE
             </span>
           </span>
        </div>

      </div>
    </div>
  );
        }
