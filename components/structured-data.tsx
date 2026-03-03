"use client";

import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Asmit Pandey",
      jobTitle: "Backend Engineer",
      description:
        "Backend-focused developer building scalable systems, webhook infrastructure, and event-driven architectures.",
      url: "https://asmitpandey.dev",
      image:
        "/facedemo.jpeg",
      email: "asmitpandeyw4354@gmail.com",
      nationality: "Indian",
      birthDate: "2005",
      gender: "Male",
      address: {
        "@type": "PostalAddress",
        addressCountry: "India",
        addressRegion: "Delhi",
        addressLocality: "New Delhi",
      },
      sameAs: [
        "https://www.linkedin.com/in/asmitpandey/",
        "https://github.com/asmitpandey",
        "https://twitter.com/asmitpandey",
      ],
      knowsAbout: [
        "Full Stack Development",
        "React",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "Web Development",
        "Software Engineering",
        "Portfolio Development",
        "Minimalist Design",
        "Modern Web Design",
        "Student Portfolio",
        "Developer Portfolio",
        "Tech Portfolio",
        "Professional Portfolio",
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Gautam Buddha University",
          alternateName: "GBU",
          description: "Bachelor of Technology in Information Technology",
          url: "https://gbu.ac.in",
        },
      ],
      worksFor: [
        {
          "@type": "Organization",
          name: "Gautam Buddha University",
          description: "Backend Development Intern",
        },
      ],
      award: [
        {
          "@type": "Award",
          name: "4th Place — Hackathon (40+ teams)",
          description:
            "Delivered production-ready full-stack expense tracker in 7 hours.",
          dateAwarded: "2025-04",
        }
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Backend Engineer",
        description: "Building scalable systems, webhook infrastructure, and event-driven architectures.",
        skills: [
          "Node.js",
          "PostgreSQL",
          "Redis",
          "Docker",
          "Kubernetes",
          "RabbitMQ",
          "TypeScript",
          "Python",
          "React",
        ],
      },
    };

    try {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    } catch (error) {
      console.error("Error adding structured data:", error);
    }
  }, []);

  return null;
}
