"use client";

import React, { useState, useEffect } from "react";

interface SystemStatusProps {
  className?: string;
}

export default function SystemStatus({ className = "" }: SystemStatusProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOnline, setIsOnline] = useState(true);
  const [systemLoad, setSystemLoad] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client flag to true after hydration
    setIsClient(true);
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setSystemLoad(Math.random() * 100);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className={`glass-panel glass-panel-hover p-6 ${className}`}>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white neon-glow">
            SYSTEM STATUS
          </h3>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isOnline ? 'status-online' : 'status-busy'}`}></div>
            <span className="text-sm text-gray-300">
              {isOnline ? "ONLINE" : "BUSY"}
            </span>
          </div>
        </div>

        {/* Time and Date */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-cyan-400 text-sm">TIME:</span>
            <span className="text-white font-mono text-lg neon-glow">
              {isClient ? formatTime(currentTime) : "--:--:--"}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-cyan-400 text-sm">DAY:</span>
            <span className="text-white font-mono text-sm neon-glow">
              {isClient ? currentTime.toLocaleDateString("en-US", { weekday: "long" }) : "Loading..."}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-cyan-400 text-sm">DATE:</span>
            <span className="text-white font-mono text-sm neon-glow">
              {isClient ? currentTime.toLocaleDateString("en-US", { 
                year: "numeric",
                month: "short",
                day: "numeric"
              }) : "Loading..."}
            </span>
          </div>
        </div>

        {/* Greeting */}
        <div className="text-center py-2">
          <span className="text-cyan-400 text-sm">
            {isClient ? `${getGreeting()}, Visitor` : "Welcome, Visitor"}
          </span>
        </div>

        {/* System Metrics */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-cyan-400 text-sm">CPU LOAD:</span>
            <div className="flex items-center space-x-2">
              <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
                  style={{ width: `${systemLoad}%` }}
                ></div>
              </div>
              <span className="text-white text-sm font-mono">
                {systemLoad.toFixed(1)}%
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-cyan-400 text-sm">MEMORY:</span>
            <span className="text-white text-sm font-mono">8.2GB / 16GB</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-cyan-400 text-sm">NETWORK:</span>
            <span className="text-white text-sm font-mono">STABLE</span>
          </div>
        </div>

        {/* Status Messages */}
        <div className="space-y-2 pt-2 border-t border-white/10">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-xs">All systems operational</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-400 text-xs">Ready for new projects</span>
          </div>
        </div>
      </div>
    </div>
  );
}
