import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DownloadCV from "../general/download-cv";

const HeroSection = () => {
  return (
    <section className="py-16 px-10 md:py-24 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Kolom Kiri */}
        <div className="flex flex-col items-start gap-4 text-left order-2 md:order-1">
          <span className="text-lg font-medium text-primary">
            Halo, saya Naja 👋
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            Fullstack Web Developer
          </h1>
          <p className="max-w-prose text-muted-foreground">
            Saya adalah seorang developer yang bersemangat dalam membangun
            antarmuka web yang modern, responsif, dan mudah digunakan.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Button asChild>
              <Link href={"#contact"}>
                <Mail className="mr-2 h-4 w-4" />
                <p>Hubungi saya</p>
              </Link>
            </Button>
            <DownloadCV />
          </div>
        </div>
        {/* Kolom Kanan */}
        <div className="flex items-center justify-center md:justify-end order-1 md:order-2 mt-5">
          <div className="relative w-[280px] h-[320px]">
            <Image
              src={"/images/profile.jpg"}
              alt={"Foto Naja"}
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
