import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageSquareText,
} from "lucide-react";
import { Badge } from "../ui/badge";
import ContactForm from "@/components/form/ContactForm"; // Pastikan path ini benar
import Link from "next/link";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full bg-white py-16 px-10 md:py-24 md:px-20"
    >
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 md:px-8">
        {/* Badge & Intro */}
        <div className="flex flex-col items-center text-center gap-4">
          <Badge
            variant={"secondary"}
            className="py-2 px-5 text-base md:text-lg font-semibold"
          >
            <MessageSquareText className="mr-2 h-5 w-5" />
            Contact
          </Badge>
          <p className="max-w-xl text-lg text-muted-foreground">
            Apa selanjutnya? Jangan ragu untuk menghubungi saya melalui formulir
            atau kirim email langsung.
          </p>
        </div>

        {/* Konten Utama (Grid) */}
        <div className="grid w-full max-w-5xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Kolom Kiri: Info Kontak Langsung */}
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <h3 className="text-xl font-bold tracking-tight md:text-2xl">
              Socil Media
            </h3>
            <p className="text-muted-foreground">
              Kamu juga dapat menemukan saya di platform ini!
            </p>
            <div className="flex flex-row">
              <Link
                href="https://www.instagram.com/mnajatr/"
                className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-gray-200"
                target="_blank"
              >
                <Instagram className="h-6 w-6 text-muted-foreground md:h-7 md:w-7" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mnajatr/"
                className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-gray-200"
                target="_blank"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground md:h-7 md:w-7" />
              </Link>
              <Link
                href="https://github.com/mnajatr/"
                className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-gray-200"
                target="_blank"
              >
                <Github className="h-6 w-6 text-muted-foreground md:h-7 md:w-7" />
              </Link>
            </div>
          </div>

          {/* Kolom Kanan: Form Kontak */}
          <div className="flex w-full flex-col gap-4">
            <h3 className="text-xl font-bold tracking-tight text-center md:text-left md:text-2xl">
              Kirim Pesan
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
