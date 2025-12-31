"use client";
import React from 'react';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiGit,
  SiSolana,
  SiEthereum,
  SiDocker,
  SiExpress,
  SiFramer,
  SiSolidity,
  SiRust,
} from 'react-icons/si';
import { Workflow, Brain, Blocks, Webhook, Cpu } from 'lucide-react';

type Skill = {
  name: string;
  icon: React.ReactNode;
};

const skillsRow1: Skill[] = [
  { name: "TypeScript", icon: <SiTypescript size={14} /> },
  { name: "JavaScript", icon: <SiJavascript size={14} /> },
  { name: "React", icon: <SiReact size={14} /> },
  { name: "Next.js", icon: <SiNextdotjs size={14} /> },
  { name: "Node.js", icon: <SiNodedotjs size={14} /> },
  { name: "Python", icon: <SiPython size={14} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={14} /> },
  { name: "MongoDB", icon: <SiMongodb size={14} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={14} /> },
  { name: "GraphQL", icon: <SiGraphql size={14} /> },
  { name: "REST APIs", icon: <Workflow size={14} /> },
  { name: "Git", icon: <SiGit size={14} /> },
];

const skillsRow2: Skill[] = [
  { name: "Solana", icon: <SiSolana size={14} /> },
  { name: "Ethereum", icon: <SiEthereum size={14} /> },
  { name: "Web3.js", icon: <Blocks size={14} /> },
  { name: "Docker", icon: <SiDocker size={14} /> },
  { name: "Express", icon: <SiExpress size={14} /> },
  { name: "Framer Motion", icon: <SiFramer size={14} /> },
  { name: "Solidity", icon: <SiSolidity size={14} /> },
  { name: "Anchor", icon: <Webhook size={14} /> },
  { name: "AI/ML", icon: <Brain size={14} /> },
  { name: "Rust", icon: <SiRust size={14} /> },
  { name: "System Design", icon: <Cpu size={14} /> },
];

const Marquee = ({ 
  skills, 
  reverse = false,
  speed = 25,
}: { 
  skills: Skill[]; 
  reverse?: boolean;
  speed?: number;
}) => {
  const duplicatedSkills = [...skills, ...skills];
  
  return (
    <div className="relative flex overflow-hidden group">
      <div 
        className={`flex gap-4 py-3 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ 
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedSkills.map((skill, idx) => (
          <div
            key={`${skill.name}-${idx}`}
            className="flex items-center gap-2 px-4 py-2 border border-dashed rounded-sm bg-muted/10 hover:bg-muted/30 hover:border-foreground/20 transition-all duration-300 whitespace-nowrap cursor-default"
          >
            <span className="text-muted-foreground">
              {skill.icon}
            </span>
            <span className="jetbrains-mono text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
      <div 
        className={`flex gap-4 py-3 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ 
          animationDuration: `${speed}s`,
        }}
        aria-hidden
      >
        {duplicatedSkills.map((skill, idx) => (
          <div
            key={`${skill.name}-dup-${idx}`}
            className="flex items-center gap-2 px-4 py-2 border border-dashed rounded-sm bg-muted/10 hover:bg-muted/30 hover:border-foreground/20 transition-all duration-300 whitespace-nowrap cursor-default"
          >
            <span className="text-muted-foreground">
              {skill.icon}
            </span>
            <span className="jetbrains-mono text-xs text-muted-foreground transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <div className="flex flex-col gap-1 -mx-4 sm:-mx-6">
      <Marquee skills={skillsRow1} speed={60} />
      <Marquee skills={skillsRow2} reverse speed={70} />
    </div>
  );
};

export default SkillsSection;
