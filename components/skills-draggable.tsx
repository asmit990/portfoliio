"use client";

import type React from "react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  SiGo,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiAmazonwebservices,
  SiGithubactions,
  SiRabbitmq,
  SiApachekafka
} from "react-icons/si";

type Skill = {
  label: string;
  icon?: React.ReactNode;
};

function SkillPill({ label, icon }: Skill) {
  return (
    <motion.div
      className={cn(
        "relative select-none",
        "inline-flex items-center gap-1.5 rounded-sm border px-1 py-0.25 text-xs font-medium",
        "bg-white text-neutral-600 border-neutral-200",
        "dark:bg-neutral-950 dark:text-neutral-300 dark:border-neutral-800"
      )}
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      aria-label={label}
    >
      <div
        className="h-3 w-3 flex items-center justify-center"
        aria-hidden="true"
      >
        {icon}
      </div>
      <span className="leading-none">{label}</span>
    </motion.div>
  );
}

export function SkillsDraggable() {
  const skills: Skill[] = [
    { label: "Go", icon: <SiGo className="h-3 w-3" /> },
    { label: "JavaScript", icon: <SiJavascript className="h-3 w-3" /> },
    { label: "TypeScript", icon: <SiTypescript className="h-3 w-3" /> },
    { label: "C++", icon: <SiCplusplus className="h-3 w-3" /> },
    { label: "Python", icon: <SiPython className="h-3 w-3" /> },
    { label: "Node.js", icon: <SiNodedotjs className="h-3 w-3" /> },
    { label: "Express.js", icon: <SiExpress className="h-3 w-3" /> },
    { label: "React.js" },
    { label: "Tailwind CSS" },
    { label: "Framer Motion" },
    { label: "Recharts" },
    { label: "Zustand" },
    { label: "REST APIs" },
    { label: "JWT" },
    { label: "WebSocket" },
    { label: "PostgreSQL", icon: <SiPostgresql className="h-3 w-3" /> },
    { label: "MongoDB", icon: <SiMongodb className="h-3 w-3" /> },
    { label: "Redis", icon: <SiRedis className="h-3 w-3" /> },
    { label: "Docker", icon: <SiDocker className="h-3 w-3" /> },
    { label: "SQLite" },
    { label: "NeonDB" },
    { label: "AWS EC2", icon: <SiAmazonwebservices className="h-3 w-3" /> },
    { label: "GitHub Actions", icon: <SiGithubactions className="h-3 w-3" /> },
    { label: "Turborepo" },
    { label: "Render" },
    { label: "Netlify" },
    { label: "Prometheus" },
    { label: "Apache Kafka", icon: <SiApachekafka className="h-3 w-3" /> },
    { label: "BullMQ" },
    { label: "RabbitMQ", icon: <SiRabbitmq className="h-3 w-3" /> },
    { label: "Gemini AI" },
  ];

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          Skills
        </h3>
        <div className="pointer-events-none hidden text-[10px] text-slate-500 dark:text-slate-400 sm:block">
          hover on this 🤭
        </div>
      </div>
      <div className={cn("relative flex flex-wrap gap-2")}>
        {skills.map(s => (
          <SkillPill key={s.label} {...s} />
        ))}
      </div>
    </div>
  );
}

export default SkillsDraggable;
