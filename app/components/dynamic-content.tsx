"use client";

import React, { useState, useEffect } from "react";

interface DynamicContentProps {
  className?: string;
}

export default function DynamicContent({ className = "" }: DynamicContentProps) {
  const [currentQuote, setCurrentQuote] = useState("");
  const [isClient, setIsClient] = useState(false);

  const motivationalQuotes = [
    {
      text: "Code is poetry written in logic",
      author: "Steve Jobs",
      icon: "💻",
      color: "from-blue-400 to-cyan-500"
    },
    {
      text: "Innovation distinguishes between a leader and a follower",
      author: "Steve Jobs",
      icon: "🚀",
      color: "from-purple-400 to-pink-500"
    },
    {
      text: "The best way to predict the future is to create it",
      author: "Peter Drucker",
      icon: "🔮",
      color: "from-green-400 to-emerald-500"
    },
    {
      text: "The only way to do great work is to love what you do",
      author: "Steve Jobs",
      icon: "❤️",
      color: "from-red-400 to-pink-500"
    },
    {
      text: "Simplicity is the ultimate sophistication",
      author: "Leonardo da Vinci",
      icon: "✨",
      color: "from-yellow-400 to-orange-500"
    },
    {
      text: "Think different, build different",
      author: "Apple",
      icon: "💡",
      color: "from-indigo-400 to-purple-500"
    },
    {
      text: "Every expert was once a beginner",
      author: "Helen Hayes",
      icon: "🌱",
      color: "from-teal-400 to-cyan-500"
    },
    {
      text: "Technology is nothing. What's important is that you have faith in people",
      author: "Steve Jobs",
      icon: "👥",
      color: "from-orange-400 to-red-500"
    }
  ];

  useEffect(() => {
    setIsClient(true);
    
    // Set initial quote
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    setCurrentQuote(JSON.stringify(randomQuote));
    
    // Change quote every 10 seconds
    const timer = setInterval(() => {
      const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
      setCurrentQuote(JSON.stringify(randomQuote));
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const quote = isClient && currentQuote ? JSON.parse(currentQuote) : motivationalQuotes[0];

  return (
    <div className={`glass-panel p-6 ${className}`}>
      <div className="text-center space-y-6">
        {/* Header */}
        <div className="flex items-center justify-center space-x-2">
          <div className="text-2xl">💭</div>
          <h3 className="text-lg font-bold text-white">Daily Inspiration</h3>
        </div>

        {/* Quote Card */}
        <div className={`relative p-6 rounded-lg bg-gradient-to-br ${quote.color} bg-opacity-10 border border-white/20`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-2 left-2 text-4xl">{quote.icon}</div>
            <div className="absolute bottom-2 right-2 text-2xl opacity-50">{quote.icon}</div>
          </div>
          
          {/* Quote Content */}
          <div className="relative z-10">
            <div className="text-4xl mb-4">{quote.icon}</div>
            <blockquote className="text-white text-lg leading-relaxed mb-4 italic">
              "{quote.text}"
            </blockquote>
            <cite className="text-cyan-300 text-sm font-medium">
              · {quote.author}
            </cite>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-400">Quote updates every 10 seconds</span>
        </div>
      </div>
    </div>
  );
}