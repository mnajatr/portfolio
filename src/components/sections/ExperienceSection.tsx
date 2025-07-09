import { BriefcaseBusiness } from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-16 px-10 md:py-24 md:px-20 bg-gray-50"
    >
      <div className="container mx-auto flex flex-col items-center gap-10">
        {/* Badge */}
        <Badge
          variant={"secondary"}
          className="py-2 px-6 text-lg font-semibold"
        >
          <BriefcaseBusiness className="mr-2 h-5 w-5" />
          <p>Experience</p>
        </Badge>
        <p className="text-muted-foreground text-lg text-center">
          Berikut ringkasan singkat pengalaman terkini saya:
        </p>

        {/* Content */}
        <div className="bg-white max-w-4xl rounded-xl hover:-translate-y-2 transition-transform duration-300 shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-start p-8 gap-4 md:gap-12 ">
            <div className="relative min-w-40 h-16 order-1">
              <Image
                src={"/logo/dixonsac.svg"}
                alt={"Logo DIXON Shoes and Apparel Care"}
                fill
                className="object-contain"
              />
            </div>
            <div className="md:flex-grow md:mx-4 space-y-4 order-2">
              <h3 className="text-xl font-semibold">Bussines Owner</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
            <p className="text-muted-foreground whitespace-nowrap text-base order-1 md:order-3">
              March 2023 - Present
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
