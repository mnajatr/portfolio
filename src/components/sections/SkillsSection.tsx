import React from "react";
import { SKILLS } from "@/lib/constants";
import { Badge } from "../ui/badge";
import { Code } from "lucide-react";
import Image from "next/image";

const SkillsSection = () => {
  return (
    <section id="#skills" className="py-16 px-10 md:py-24 md:px-20">
      <div className="container mx-auto flex flex-col items-center gap-10">
        {/* Badge */}
        <Badge
          variant={"secondary"}
          className="py-2 px-6 text-lg font-semibold"
        >
          <Code className="mr-2 h-5 w-5" />
          <p>Skills</p>
        </Badge>
        <p className="text-muted-foreground text-lg text-center">
          Keterampilan, alat, dan teknologi yang saya kuasai:
        </p>

        {/* Content */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-3"
            >
              <div className="relative w-16 h-16">
                <Image
                  src={skill.image}
                  alt={"Programming Language Image"}
                  fill
                  className="object-cover hover:scale-125 transition-transform duration-500"
                />
              </div>
              <p className="text-muted-foreground text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
