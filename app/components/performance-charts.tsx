"use client";
import React, { useState, useEffect } from "react";

interface PerformanceChartsProps {
  className?: string;
}

export default function PerformanceCharts({ className = "" }: PerformanceChartsProps) {
  const [isClient, setIsClient] = useState(false);
  const [cpuUsage, setCpuUsage] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);
  const [networkSpeed, setNetworkSpeed] = useState(0);
  const [activeConnections, setActiveConnections] = useState(0);

  useEffect(() => {
    setIsClient(true);
    
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 30) + 60); // 60-90%
      setMemoryUsage(Math.floor(Math.random() * 20) + 50); // 50-70%
      setNetworkSpeed(Math.random() * 3 + 1); // 1-4 MB/s
      setActiveConnections(Math.floor(Math.random() * 50) + 100); // 100-150
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) {
    return (
      <div className={`glass-panel p-6 flex items-center justify-center ${className}`}>
        <p className="text-gray-400 text-center">Loading performance data...</p>
      </div>
    );
  }

  return (
    <div className={`relative h-full overflow-hidden rounded-xl ${className}`}>
      {/* Heatmap Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-yellow-500/10 to-green-500/20"></div>
        {/* Heatmap Grid */}
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-1 p-2">
          {Array.from({length: 48}).map((_, i) => {
            const intensity = Math.random();
            const colors = [
              'bg-red-500/30',
              'bg-orange-500/25',
              'bg-yellow-500/20',
              'bg-green-500/15',
              'bg-blue-500/10'
            ];
            const colorIndex = Math.floor(intensity * colors.length);
            return (
              <div
                key={i}
                className={`${colors[colorIndex]} rounded-sm animate-pulse`}
                style={{
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random() * 2}s`
                }}
              ></div>
            );
          })}
        </div>
      </div>

      {/* Foreground Cards */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Top Card - Project Stats */}
        <div className="glass-panel p-4 mb-3 flex-1">
          <h3 className="text-sm font-semibold text-white mb-4 text-center">PROJECT ANALYTICS</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-cyan-400 text-xs">PROJECTS</span>
              <span className="text-white text-sm font-mono">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-green-400 text-xs">LIVE</span>
              <span className="text-white text-sm font-mono">8</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-purple-400 text-xs">TECH STACK</span>
              <span className="text-white text-sm font-mono">24</span>
            </div>
          </div>
        </div>

        {/* Bottom Card - Activity Status */}
        <div className="glass-panel p-4 flex-1">
          <h3 className="text-sm font-semibold text-white mb-4 text-center">ACTIVITY STATUS</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-yellow-400 text-xs">CURRENTLY</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs">ONLINE</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-400 text-xs">STATUS</span>
              <span className="text-cyan-400 text-xs">AVAILABLE</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-pink-400 text-xs">RESPONSE</span>
              <span className="text-white text-xs font-mono">~2h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
