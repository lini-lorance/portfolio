"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Globe, Server, Cpu } from "lucide-react";
import { Badge } from "./ui/badge";

export default function Skills() {
  const skills = [
    "React.js",
    "Next.js",
    "JavaScript",
    "Material UI",
    "Tailwind CSS",
    "Shadcn UI",
    "Bootstrap",
    "HTML/CSS",
    "REST API",
    "Node.js",
    "SQL",
    "Azure",
    "GitHub",
    "Vercel",
    "Firebase",
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-6 lg:px-8 bg-muted/50 scroll-mt-16"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical toolkit spans the entire development stack, enabling me
            to build complete solutions.
          </p>
        </motion.div>
        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill, index) => (
            <Badge key={index} className="mr-2 mb-2 ">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
