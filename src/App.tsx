import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Link as LinkIcon, Gamepad2, Info, Loader2 } from 'lucide-react';

export default function App() {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    setTimeout(() => {
      window.open('https://linkurl.pk/BTNJO9Z7', '_blank', 'noopener,noreferrer');
      setIsConnecting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-blue-500/30 flex flex-col relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-blue-600/15 rounded-full blur-[100px] sm:blur-[120px] top-[-20%] sm:top-[-200px]" />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 relative z-10 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-12 w-full"
        >
          {/* Header Section */}
          <div className="space-y-6">
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ delay: 0.2, duration: 0.5 }}
               className="inline-flex items-center justify-center p-2 sm:p-3 sm:px-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl mb-2 sm:mb-4 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
            >
              <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-2 sm:mr-3" />
              <span className="text-blue-400 font-semibold tracking-wide uppercase text-xs sm:text-sm">Roblox Rewards Hub</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-500 drop-shadow-sm font-display uppercase">
              CC HUB
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Welcome to CC Hub where we host giveaways and most importantly do invite rewards we do invite rewards for bloxfruits and adopt me and everything is very easy to do verify here and you will see a channel called <span className="inline-block text-blue-400 font-mono text-sm bg-blue-900/30 px-2 py-0.5 rounded border border-blue-500/20 shadow-blue-500/10 shadow-sm mx-1">#invite-rewards</span> where it shows what you have to do.
            </p>
          </div>

          {/* Interactive Call to Action Center */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-6 bg-slate-900/40 border border-white/5 p-8 sm:p-12 rounded-3xl backdrop-blur-xl relative group overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-blue-500/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <button 
              onClick={handleConnect}
              disabled={isConnecting}
              className="relative px-8 sm:px-10 py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600 border border-blue-400/30 text-white text-lg sm:text-xl font-bold rounded-2xl transition-all duration-300 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-10px_rgba(37,99,235,0.8)] disabled:hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:-translate-y-1 disabled:hover:translate-y-0 flex items-center justify-center gap-3 w-full sm:w-auto active:scale-95 disabled:active:scale-100 group/btn disabled:opacity-80 disabled:cursor-not-allowed"
            >
               {isConnecting ? (
                 <Loader2 className="w-6 h-6 animate-spin text-blue-200" />
               ) : (
                 <LinkIcon className="w-6 h-6 transition-transform group-hover/btn:rotate-12" />
               )}
               <span>{isConnecting ? 'Connecting...' : 'Connect with us'}</span>
            </button>
            
            <p className="text-sm sm:text-base text-blue-200/70 max-w-md text-center flex items-start sm:items-center justify-center gap-3 bg-blue-950/30 p-4 sm:p-3 rounded-xl border border-blue-500/10">
              <ShieldAlert className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 sm:mt-0" />
              <span className="text-left sm:text-center">Verify with us and your invites will start being counted make sure anyone you invite also verifies</span>
            </p>
          </motion.div>

          {/* Bottom Rules / Info Cards */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6, duration: 0.6 }}
             className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left"
          >
            <div className="bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/10 hover:border-red-500/20 transition-colors p-6 sm:p-8 rounded-3xl flex flex-col gap-4 group">
               <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                 <ShieldAlert className="w-6 h-6 text-red-400" />
               </div>
               <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                 <span className="text-white font-medium">Anyone you invite must also verify</span> to stay in our server and we do this to make sure it's not a alt or j4j if we find out you are doing j4j or these are alt you will be banned.
               </p>
            </div>

            <div className="bg-gradient-to-bl from-blue-500/5 to-transparent border border-blue-500/10 hover:border-blue-500/20 transition-colors p-6 sm:p-8 rounded-3xl flex flex-col gap-4 group">
               <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                 <Info className="w-6 h-6 text-blue-400" />
               </div>
               <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                 <span className="text-white font-medium">DM the owner ONLY</span> and you must be verified to be eligible to claim your rewards.
               </p>
            </div>
          </motion.div>
        </motion.div>
      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-md mt-auto">
        <p>&copy; {new Date().getFullYear()} CC HUB. All rights reserved.</p>
      </footer>
    </div>
  );
}
