"use client"

import { Twitter, Send, Hash, ImageIcon, Palette, Globe, ExternalLink, Wallet, Newspaper, Gift } from "lucide-react"
import Link from "next/link"

const links = [
  {
    name: "🎁 Croma Airdrop",
    url: "https://airdrop.cromachain.com",
    icon: Gift,
    description: "Claim your free Croma tokens",
    special: true,
  },
  {
    name: "Twitter",
    url: "https://x.com/CromaChain",
    icon: Twitter,
    description: "Follow us on Twitter",
  },
  {
    name: "Telegram",
    url: "https://t.me/Cromaartofficial",
    icon: Send,
    description: "Join our Telegram",
  },
  {
    name: "Discord",
    url: "https://discord.com/invite/SWj8TWfu9k",
    icon: Hash,
    description: "Join our Discord",
  },
  {
    name: "Croma Art Collection",
    url: "https://opensea.io/collection/croma-art",
    icon: Palette,
    description: "Explore our NFT collection",
  },
  {
    name: "Executive Portrait Series",
    url: "https://opensea.io/collection/croma-executive-portrait-series",
    icon: ImageIcon,
    description: "Premium portrait collection",
  },
  {
    name: "CromaArt.io",
    url: "https://cromaart.io",
    icon: Globe,
    description: "Official art platform",
  },
  {
    name: "CromaChain.com",
    url: "https://cromachain.com",
    icon: ExternalLink,
    description: "Blockchain platform",
  },
  {
    name: "TrixWallet.com",
    url: "https://trixwallet.com",
    icon: Wallet,
    description: "Secure crypto wallet",
  },
  {
    name: "TrixNews.com",
    url: "https://trixnews.com",
    icon: Newspaper,
    description: "Latest crypto news",
  },
]

export default function CromaLinktree() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950 to-orange-900 animate-gradient-shift"></div>

      {/* Animated Background Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-orange-500/20 to-red-700/30 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,69,0,0.15),transparent_50%)] animate-float"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.1),transparent_50%)] animate-float-reverse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500/30 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-orange-400/40 rounded-full animate-bounce-slow delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-red-400/20 rounded-full animate-bounce-slow delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-md">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          {/* Logo with Animation */}
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-red-600/30 to-orange-600/30 rounded-full flex items-center justify-center border-2 border-red-500/50 shadow-2xl backdrop-blur-sm animate-logo-glow">
            <img
              src="/croma-logo-new.png"
              alt="Croma Official Logo"
              className="w-24 h-24 object-contain drop-shadow-2xl animate-logo-pulse"
            />
          </div>

          <h1 className="text-3xl font-bold text-white mb-3 tracking-tight animate-fade-in-up delay-300">
            Croma Official Links
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed animate-fade-in-up delay-500">
            Discover the future of digital art and blockchain innovation
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link, index) => {
            const IconComponent = link.icon
            const isSpecial = link.special
            return (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full animate-fade-in-up"
                style={{ animationDelay: `${700 + index * 100}ms` }}
              >
                <div
                  className={`backdrop-blur-sm border rounded-2xl p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] ${
                    isSpecial
                      ? "bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/30 hover:bg-gradient-to-r hover:from-yellow-500/30 hover:to-orange-500/30 hover:border-yellow-400/70"
                      : "bg-gray-900/80 border-gray-700/50 hover:shadow-2xl hover:shadow-red-500/30 hover:bg-gray-800/90 hover:border-red-500/60 hover:shadow-orange-500/20"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                          isSpecial
                            ? "bg-gradient-to-br from-yellow-500 to-orange-500 group-hover:from-yellow-400 group-hover:to-orange-400 group-hover:shadow-yellow-500/50"
                            : "bg-gradient-to-br from-red-600 to-orange-600 group-hover:from-red-500 group-hover:to-orange-500 group-hover:shadow-red-500/50"
                        }`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-semibold text-lg transition-colors duration-300 ${
                          isSpecial
                            ? "text-yellow-100 group-hover:text-yellow-200"
                            : "text-white group-hover:text-orange-300"
                        }`}
                      >
                        {link.name}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors duration-300">
                        {link.description}
                      </p>
                    </div>

                    <div className="flex-shrink-0">
                      <ExternalLink
                        className={`w-5 h-5 transition-colors duration-300 ${
                          isSpecial
                            ? "text-yellow-400 group-hover:text-yellow-300"
                            : "text-gray-500 group-hover:text-red-400"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-800/50 animate-fade-in-up delay-1000">
          <p className="text-gray-500 text-sm">© 2024 Croma Official. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background: linear-gradient(135deg, #000000 0%, #7f1d1d 50%, #92400e 100%); }
          50% { background: linear-gradient(135deg, #1a1a1a 0%, #991b1b 50%, #c2410c 100%); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-180deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-30px); opacity: 0.8; }
        }
        
        @keyframes logo-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(220, 38, 38, 0.3), 0 0 40px rgba(255, 69, 0, 0.2); }
          50% { box-shadow: 0 0 30px rgba(220, 38, 38, 0.5), 0 0 60px rgba(255, 69, 0, 0.3); }
        }
        
        @keyframes logo-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-logo-glow {
          animation: logo-glow 3s ease-in-out infinite;
        }
        
        .animate-logo-pulse {
          animation: logo-pulse 2s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-1000 { animation-delay: 1000ms; }
      `}</style>
    </div>
  )
}
