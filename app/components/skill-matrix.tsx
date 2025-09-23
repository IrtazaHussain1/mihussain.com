"use client";

import React, { useState, useEffect } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

interface SkillMatrixProps {
  className?: string;
}

export default function SkillMatrix({ className = "" }: SkillMatrixProps) {
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({});
  const [isClient, setIsClient] = useState(false);

  const skills: Skill[] = [
    // Backend
    { name: "Python", level: 9, category: "Backend", color: "from-yellow-400 to-orange-500" },
    { name: "Django", level: 9, category: "Backend", color: "from-green-400 to-emerald-500" },
    { name: "FastAPI", level: 8, category: "Backend", color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", level: 8, category: "Backend", color: "from-green-500 to-lime-500" },
    { name: ".NET", level: 7, category: "Backend", color: "from-purple-500 to-violet-500" },
    { name: "Go", level: 7, category: "Backend", color: "from-blue-400 to-teal-500" },

    // Frontend
    { name: "React", level: 9, category: "Frontend", color: "from-blue-400 to-cyan-500" },
    { name: "Next.js", level: 8, category: "Frontend", color: "from-purple-400 to-pink-500" },
    { name: "TypeScript", level: 8, category: "Frontend", color: "from-blue-500 to-indigo-500" },
    { name: "JavaScript", level: 8, category: "Frontend", color: "from-yellow-500 to-orange-500" },
    { name: "Tailwind CSS", level: 8, category: "Frontend", color: "from-cyan-400 to-blue-400" },

    // AI / ML / Data
    { name: "AI/ML", level: 8, category: "AI/ML", color: "from-indigo-500 to-purple-500" },
    { name: "TensorFlow", level: 7, category: "AI/ML", color: "from-yellow-500 to-orange-400" },
    { name: "PyTorch", level: 7, category: "AI/ML", color: "from-red-500 to-orange-600" },
    { name: "Data Analytics", level: 8, category: "AI/ML", color: "from-pink-500 to-yellow-500" },

    // DevOps / Cloud / Modern Infra
    { name: "Docker", level: 8, category: "DevOps", color: "from-blue-600 to-cyan-600" },
    { name: "Kubernetes", level: 7, category: "DevOps", color: "from-blue-400 to-blue-700" },
    { name: "CI/CD", level: 8, category: "DevOps", color: "from-green-400 to-blue-500" },
    { name: "Serverless", level: 7, category: "Cloud", color: "from-cyan-400 to-blue-500" },
    { name: "AWS", level: 7, category: "Cloud", color: "from-orange-500 to-red-500" },
    { name: "Azure", level: 6, category: "Cloud", color: "from-blue-500 to-blue-800" },
    { name: "GCP", level: 6, category: "Cloud", color: "from-yellow-400 to-blue-500" },
    { name: "Edge Computing", level: 6, category: "Cloud", color: "from-green-400 to-blue-400" },

    // Database
    { name: "PostgreSQL", level: 8, category: "Database", color: "from-indigo-500 to-purple-500" },
    { name: "MongoDB", level: 7, category: "Database", color: "from-green-600 to-emerald-600" },
    { name: "Firebase", level: 7, category: "Database", color: "from-yellow-400 to-orange-600" },

    // APIs & Modern Web
    { name: "GraphQL", level: 7, category: "API", color: "from-pink-400 to-purple-600" },
    { name: "Microservices", level: 8, category: "API", color: "from-purple-500 to-pink-500" },

    // Blockchain & Emerging Tech
    { name: "Blockchain", level: 6, category: "Emerging Tech", color: "from-gray-700 to-yellow-600" },
    { name: "MCP Servers", level: 6, category: "Emerging Tech", color: "from-gray-700 to-emerald-600" },

    // Tools
    { name: "Git", level: 9, category: "Tools", color: "from-red-500 to-orange-500" },
    { name: "OpenAI", level: 9, category: "Tools", color: "from-red-500 to-yellow-500" },
    { name: "Cursor", level: 9, category: "Tools", color: "from-red-500 to-pink-500" },
    { name: "Slack", level: 9, category: "Tools", color: "from-red-500 to-green-500" },
    { name: "Figma", level: 6, category: "Tools", color: "from-red-500 to-blue-500" },
    { name: "Notion", level: 9, category: "Tools", color: "from-red-500 to-orange-500" },
    { name: "Jira", level: 8, category: "Tools", color: "from-red-500 to-yellow-500" },
    { name: "Confluence", level: 8, category: "Tools", color: "from-red-500 to-pink-500" },
  ];

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  useEffect(() => {
    // Set client flag to true after hydration
    setIsClient(true);
    
    // Animate skills on mount
    const timer = setTimeout(() => {
      const newAnimatedSkills: Record<string, number> = {};
      skills.forEach((skill, index) => {
        setTimeout(() => {
          newAnimatedSkills[skill.name] = skill.level;
          setAnimatedSkills({ ...newAnimatedSkills });
        }, index * 100);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getCategoryColor = (category: string) => {
    const colors = {
      Backend: "text-cyan-400",
      Frontend: "text-purple-400",
      DevOps: "text-green-400",
      Cloud: "text-pink-400",
      Database: "text-blue-400",
      API: "text-green-400",
      Tools: "text-emerald-400",
      "AI/ML": "text-purple-400",
      "Emerging Tech": "text-yellow-400",
    };
    return colors[category as keyof typeof colors] || "text-white-400";
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Skills by Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div key={category} className="glass-panel glass-panel-hover p-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className={`w-3 h-3 rounded-full ${getCategoryColor(category).replace('text-', 'bg-')} animate-pulse`}></div>
              <h4 className="text-lg font-semibold text-white">
                {category.toUpperCase()}
              </h4>
            </div>
            
            <div className="space-y-3">
              {categorySkills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white text-sm font-medium">
                      {skill.name}
                    </span>
                    <span className="text-white text-sm font-mono">
                      {isClient ? (animatedSkills[skill.name] || 0) : 0}/10
                    </span>
                  </div>
                  
                  <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out relative`}
                      style={{ 
                        width: `${isClient ? ((animatedSkills[skill.name] || 0) * 10) : 0}%`
                      }}
                    >
                      {/* Animated shimmer effect */}
                      {isClient && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      )}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Matrix Stats */}
      <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-cyan-300">
              {isClient ? skills.length : 0}
            </div>
            <div className="text-sm text-gray-300 font-medium">TECHNOLOGIES</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-300">
              {isClient ? Object.keys(skillsByCategory).length : 0}
            </div>
            <div className="text-sm text-gray-300 font-medium">CATEGORIES</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-300">
              {isClient ? Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length) : 0}/10
            </div>
            <div className="text-sm text-gray-300 font-medium">AVERAGE</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-300">
              {isClient ? Math.max(...skills.map(s => s.level)) : 0}/10
            </div>
            <div className="text-sm text-gray-300 font-medium">PEAK SKILL</div>
          </div>
        </div>
      </div>
    </div>
  );
}
