import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Code, HeartHandshake } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-10 md:py-24 md:px-20 bg-gray-50">
      <div className="container mx-auto flex flex-col items-center gap-10">
        {/* Badge */}
        <Badge
          variant={"secondary"}
          className="py-2 px-6 text-lg font-semibold"
        >
          <Lightbulb className="mr-2 h-5 w-5" />
          <p>About me</p>
        </Badge>

        {/* Content */}
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          {/* Kiri */}
          <div className="flex w-full justify-center">
            <Image
              src={"/images/profile.jpg"}
              alt={"Foto Naja"}
              width={280}
              height={320}
              className="rounded-lg object-cover shadow-md"
            />
          </div>

          {/* Kanan */}
          <div className="flex flex-col gap-6 text-left">
            <h2 className="text-3xl font-bold tracking-tight">
              Mengenal Saya Lebih Dekat
            </h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              vitae maiores labore sapiente earum repudiandae consequatur
              obcaecati. Velit dicta repellendus, porro iure accusantium,
              doloremque nisi itaque sunt ipsum, soluta officia!
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="flex items-center text-xl font-semibold">
                  <Code className="mr-2 h-5 w-5 text-primary" />
                  <p>Keterampilan Inti</p>
                </h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>React</li>
                  <li>Next.js</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="flex items-center text-xl font-semibold">
                  <HeartHandshake className="mr-2 h-5 w-5 text-primary" />
                  <p>Nilai-nilai utama</p>
                </h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Continuous Learner</li>
                  <li>Detail-Oriented</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
