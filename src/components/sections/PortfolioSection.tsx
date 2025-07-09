import { ExternalLink, StickyNote } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 px-10 md:py-24 md:px-20">
      <div className="container mx-auto flex flex-col items-center gap-10">
        <Badge
          variant={"secondary"}
          className="py-2 px-6 text-lg font-semibold"
        >
          <StickyNote className="mr-2 h-5 w-5" />
          Portfolio
        </Badge>
        <p className="text-muted-foreground text-lg text-center">
          Beberapa proyek penting yang telah saya bangun:
        </p>
        <div className="rounded-xl bg-gray shadow-md  mx-auto flex w-full max-w-6xl flex-col lg:flex-row">
          <div className="flex items-center justify-center border-gray-100 bg-gray-50 p-8 max-md:rounded-t-xl lg:p-12 md:rounded-l-xl md:border-r">
            <Image
              src={"/images/landing-page-omnifood.png"}
              alt={"Logo DIXON Shoes and Apparel Care"}
              width={1711}
              height={1141}
              className="object-cover rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-6 p-8 lg:p-12">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
              Omnifood
            </h3>
            <p className="text-normal text-base text-muted-foreground">
              Mengikuti kursus web development profesional, saya membangun
              landing page untuk "Omnifood", sebuah konsep layanan makanan sehat
              yang dirancang untuk para profesional sibuk.
            </p>
            <p className="text-normal text-base text-muted-foreground">
              Tugas utama saya adalah mengubah konsep desain yang ada menjadi
              sebuah website fungsional yang 100% responsif di semua ukuran
              perangkat.
            </p>
            <p className="text-normal text-base text-muted-foreground">
              Saya menerapkan HTML semantik, CSS Grid dan Flexbox untuk
              menciptakan layout yang kompleks, serta JavaScript untuk
              menambahkan fungsionalitas interaktif.
            </p>
            <p className="text-normal text-base text-muted-foreground">
              Hasilnya adalah sebuah landing page yang sepenuhnya responsif dan
              fungsional, yang juga mengantarkan saya pada penguasaan mendalam
              atas teknologi CSS Grid.
            </p>
            <div className="flex flex-row gap-2">
              <Badge
                variant={"secondary"}
                className="rounded-full py-1 px-5 text-sm font-medium text-muted-foreground"
              >
                HTML
              </Badge>
              <Badge
                variant={"secondary"}
                className="rounded-full py-1 px-5 text-sm font-medium text-muted-foreground"
              >
                CSS
              </Badge>
              <Badge
                variant={"secondary"}
                className="rounded-full py-1 px-5 text-sm font-medium text-muted-foreground"
              >
                JavaScript
              </Badge>
            </div>
            <Link
              href={"https://omnifood-naja.netlify.app/"}
              target="_blank"
              className="self-start rounded-lg text-muted-foreground p-1.5 hover:bg-gray-50"
            >
              <ExternalLink />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
