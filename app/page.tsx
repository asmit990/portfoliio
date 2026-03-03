import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { Typewriter } from "@/components/ui/typewriter";
import { TimeCounter } from "@/components/time-counter";

import { WorkItem } from "@/components/work-item";
import { ProjectListItem } from "@/components/project-list-item";
import { AchievementItem } from "@/components/achievement-item";
import { Dock } from "@/components/dock";
import { SkillsDraggable } from "@/components/skills-draggable";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ScrollAnimation,
  FadeInText,
  SlideUp,
  SlideInLeft,
  SlideInRight,
} from "@/components/scroll-animation";

export default function Page() {
  return (
    <main className="min-h-dvh bg-grid pb-32 pt-6 dark:bg-neutral-950">
      <FadeInText>
        <nav className="mx-auto mb-4 flex w-full max-w-xl items-center justify-between px-4 md:px-6 lg:px-8 text-xs text-neutral-600 dark:text-neutral-300">
          <Link
            href="#"
            className="font-semibold text-neutral-900 dark:text-neutral-50"
          >
            asmit.
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="#experience"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              experience
            </a>
            <a
              href="#projects"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              projects
            </a>
            <a
              href="#achievements"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              achievements
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </FadeInText>

      <div className="mx-auto max-w-xl px-4 md:px-6 lg:px-8">
        <article
          aria-label="Portfolio"
          className="relative rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
        >
          <div className="p-4 md:p-6 lg:p-6">
            {/* Header */}

            <SlideUp>
              <header id="about" className="space-y-2 section-lines p-4">
                <FadeInText delay={0.1}>
                  <div className="flex items-center justify-between">
                    <TextShimmer
                      as="p"
                      className="text-xs"
                      duration={2.2}
                      spread={1.2}
                    >
                      hi there, I'm
                    </TextShimmer>
                    <TimeCounter className="text-xs text-neutral-500 dark:text-neutral-400 font-mono" />
                  </div>
                </FadeInText>
                <SlideInLeft delay={0.2}>
                  <div className="flex items-center gap-3">
                    <div className="h-16 w-16 ring-2 ring-neutral-200 dark:ring-neutral-900 rounded-full overflow-hidden">
                      <img
                        src="/facedemo.jpeg"
                        alt="Asmit Pandey"
                        className="h-full w-full object-cover scale-115 -translate-x-0.5"
                      />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">
                      Asmit Pandey
                    </h1>
                  </div>
                </SlideInLeft>
                <FadeInText delay={0.3}>
                  <div className="flex flex-wrap items-center mt-3 gap-2 sm:gap-4 text-xs text-neutral-600 dark:text-neutral-300">
                    <span className="max-w-[50ch]">
                      <Typewriter
                        text={[
                          "Backend Engineer",
                          "Distributed Systems",
                          "Event-Driven Architecture",
                        ]}
                        speed={90}
                        waitTime={2000}
                        deleteSpeed={80}
                        className="text-neutral-600 dark:text-neutral-300"
                        cursorChar="|"
                        showCursor={true}
                      />
                    </span>
                  </div>
                </FadeInText>
                <SlideInRight delay={0.4}>
                  <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-4">
                    <Button
                      size="sm"
                      asChild
                      className="h-6 w-20 rounded-sm bg-neutral-900 px-4 text-white shadow-sm hover:bg-neutral-900/90 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                    >
                      <a
                        href="https://drive.google.com/file/d/1nEKCPIjHtLNK6dXzufvtKZXiZ6WCXqxy/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Resume"
                      >
                        Resume
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-6 w-6 rounded-sm border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      <a
                        href="mailto:asmitpandeyw4354@gmail.com"
                        aria-label="Send email"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
             
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-6 w-6 rounded-sm border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      <a
                        href="https://github.com/asmit990"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-6 w-6 rounded-sm border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      <a
                        href="www.linkedin.com/in/asmit-pandey-950406290"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </SlideInRight>
              </header>
            </SlideUp>

            {/* Bio */}
            <FadeInText delay={0.5}>
              <section className="mt-4 m-2 justify-center items-center text-[13px] leading-6 text-neutral-600 dark:text-neutral-300 space-y-3">
                <p>
                  I specialize in backend engineering with a focus on reliability, performance, and distributed system design.
                </p>
                <div className="pl-4 border-l-2 border-neutral-200 dark:border-neutral-800 space-y-1">
                  <p>• Scalable REST APIs</p>
                  <p>• Queue-based asynchronous processing</p>
                  <p>• Secure webhook delivery systems</p>
                  <p>• Microservices architecture</p>
                  <p>• Database performance optimization</p>
                  <p>• Production-grade error monitoring systems</p>
                </div>
                <p>
                  I prefer building systems that are measurable, stress-tested, and architected for failure handling rather than just feature-complete.
                </p>
              </section>
            </FadeInText>

            {/* Projects */}
            <SlideUp delay={0.2}>
              <section id="projects" className="mt-8 section-lines p-4">
                <FadeInText delay={0.1}>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                    Projects.
                  </h3>
                </FadeInText>
                <div className="space-y-2">
                  <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="HookRelay — Webhook Delivery Infrastructure"
                      links={[]}
                      bullets={[
                        "Production-grade webhook delivery system inspired by Stripe and GitHub notification models.",
                        "Decoupled API server and async worker architecture using Redis + BullMQ",
                        "Instant HTTP 200 responses with background job processing",
                        "Exponential retry logic (3s → 9s → 27s → 81s → 243s) with Dead Letter Queue support",
                        "HMAC-SHA256 payload signing for tamper detection",
                        "Redis-based rate limiting (100 events/min per API key)",
                        "Stress tested with 50,000 concurrent users",
                        "15/15 integration tests passing"
                      ]}
                      tags={["Node.js", "Express", "PostgreSQL", "Redis", "BullMQ", "JWT", "HMAC-SHA256"]}
                    />
                  </SlideInLeft>
                  <SlideInRight delay={0.1}>
                    <ProjectListItem
                      title="ErrorHub — Error Monitoring Platform"
                      links={[]}
                      bullets={[
                        "Modular error monitoring system with SDK, CLI, backend API, and dashboard.",
                        "Four-layer architecture (SDK, CLI, API, Dashboard)",
                        "Middleware-based API key validation with project isolation",
                        "SDK auto-captures uncaughtException and unhandledRejection",
                        "CLI tool with project linking and API key verification",
                        "Normalized PostgreSQL schema for multi-project isolation"
                      ]}
                      tags={[
                        "Node.js",
                        "Express",
                        "React",
                        "TypeScript",
                        "PostgreSQL"
                      ]}
                    />
                  </SlideInRight>
                  <SlideInLeft delay={0.2}>
                    <ProjectListItem
                      title="Microservices Alert System — Real-Time Notification Platform"
                      links={[]}
                      bullets={[
                        "Distributed notification platform using message-based architecture.",
                        "Three independent services (Auth, Messaging, Notifications)",
                        "RabbitMQ-based async producer-consumer communication",
                        "Dockerized environment with Docker Compose",
                        "JWT-based authentication"
                      ]}
                      tags={[
                        "Node.js",
                        "TypeScript",
                        "RabbitMQ",
                        "Docker",
                        "Nginx",
                        "JWT"
                      ]}
                    />
                  </SlideInLeft>
                </div>
                <FadeInText delay={0.2}>
                  <div className="mt-3 flex justify-center">
                    <a
                      href="https://github.com/ASMIT990"
                      className="inline-flex items-center gap-1 rounded-sm border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      View all projects →
                    </a>
                  </div>
                </FadeInText>
              </section>
            </SlideUp>

            <SlideUp delay={0.3}>
              <section id="achievements" className="mt-8 section-lines p-4">
                <FadeInText delay={0.1}>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                    Achievements.
                  </h3>
                </FadeInText>
                <ul className="space-y-2">
                  <SlideInLeft delay={0.1}>
                    <li>
                      <AchievementItem
                        title="4th Place — Hackathon (40+ teams)"
                        date="Recent"
                        description="Delivered production-ready full-stack expense tracker in 7 hours."
                      />
                    </li>
                  </SlideInLeft>
                  <SlideInRight delay={0.1}>
                    <li>
                      <AchievementItem
                        title="Web Development Head — Frames Club, GBU"
                        date="Past"
                        description="Led web development initiatives and managed technical projects for the club."
                      />
                    </li>
                  </SlideInRight>
                  <SlideInLeft delay={0.2}>
                    <li>
                      <AchievementItem
                        title="Core Member — GDG GBU"
                        date="Past"
                        description="Organized technical workshops and events for 200+ students."
                      />
                    </li>
                  </SlideInLeft>
                </ul>
              </section>
            </SlideUp>
            {/* Skills */}
            <SlideUp delay={0.3}>
              <section className="mt-5 section-lines p-4">
                <SkillsDraggable />
              </section>
            </SlideUp>

            {/* Education */}
            <SlideUp delay={0.3}>
              <section className="mt-8 section-lines p-4">
                <FadeInText delay={0.1}>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                    Education.
                  </h3>
                </FadeInText>
                <ul className="space-y-2">
                  <SlideInLeft delay={0.1}>
                    <li>
                      <AchievementItem
                        title="Gautam Buddha University"
                        date="2023 – 2027"
                        description="Bachelor of Technology in Information Technology"
                      />
                    </li>
                  </SlideInLeft>
                  <SlideInRight delay={0.1}>
                    <li>
                      <AchievementItem
                        title="Kendriya Vidyalaya IIT Kanpur"
                        date="2021 – 2022"
                        description="CBSE Class XII"
                      />
                    </li>
                  </SlideInRight>
                </ul>
              </section>
            </SlideUp>

            {/* Get in Touch */}
            <SlideUp delay={0.3}>
              <section className="mt-8 text-center section-lines p-6">
                <FadeInText delay={0.1}>
                  <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                    {"Let's work together."}
                  </h2>
                </FadeInText>
                <FadeInText delay={0.1}>
                  <p className="mx-auto mt-2 max-w-xl text-xs text-neutral-500 dark:text-neutral-400">
                    {
                      "I'm always interested in new opportunities and exciting projects. Whether you have a project in mind or just want to chat about tech, I'd love to hear from you."
                    }
                  </p>
                </FadeInText>

                {/* CTAs */}
                <SlideInLeft delay={0.1}>
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    <Button
                      size="sm"
                      asChild
                      className="h-9 rounded-md bg-neutral-900 px-4 text-white shadow-sm hover:bg-neutral-900/90 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                    >
                      <a
                        href="mailto:asmitpandeyw4354@gmail.com"
                        aria-label="Get in touch via email"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span>Get in touch</span>
                        </span>
                      </a>
                    </Button>
                  </div>
                </SlideInLeft>

                {/* Social row */}
                <SlideInRight delay={0.1}>
                  <div className="mt-4 flex items-center justify-center gap-2 sm:gap-4 text-neutral-600 dark:text-neutral-300">
                    <a
                      href="https://twitter.com/asmitwt"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href="https://github.com/ASMIT990"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/asmitpandey/"
                      aria-label="Open LinkedIn"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </SlideInRight>

                {/* Availability + response time */}
                <FadeInText delay={0.1}>
                  <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
                    Currently available for freelance work and full‑time
                    opportunities
                  </p>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                    Response time: Usually within 24 hours
                  </p>
                </FadeInText>

                {/* Divider before footer */}
              </section>
            </SlideUp>
          </div>
        </article>
        <div className="mt-8 flex justify-center rounded-xl py-2  border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950 ">
          <p className="text-xs text-neutral-500 dark:text-neutral-400 section-lines p-2">
            <span className="italic">Never forget, why you started</span> <span aria-hidden> ❤️</span>
          </p>
        </div>{" "}
      </div>

      {/* Floating Dock */}

      <Dock />
    </main>
  );
}
