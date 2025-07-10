export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const SKILLS = [
  { name: "HTML", image: "/logo/html5.svg" },
  { name: "CSS", image: "/logo/css3.svg" },
  { name: "JavaScript", image: "/logo/javascript.svg" },
  { name: "TypeScript", image: "/logo/typescript.svg" },
  { name: "React", image: "/logo/reactjs.svg" },
  { name: "Next.js", image: "/logo/nextjs.svg" },
  { name: "Node.js", image: "/logo/nodejs.svg" },
  { name: "Express.js", image: "/logo/express.svg" },
  { name: "PostgreSQL", image: "/logo/postgresql.svg" },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Atma Mansur",
    description:
      "Kerja bagus! Saya sangat terkesan. Dia sangat ahli dalam pekerjaannya :) Saya merekomendasikan Naja dan akan mempekerjakannya lagi di masa mendatang untuk pengembangan Fullstack.",
    job: "Founder — atma.com",
    image: "/images/person-face/atma-mansur.jpg",
  },
  {
    id: 2,
    name: "Uli Puspita",
    description:
      "Pria hebat, sangat direkomendasikan untuk pekerjaan pengembangan front-end yang KOMPLEKS! Keahliannya luar biasa dan dia akan menjadi tambahan yang luar biasa untuk tim mana pun.",
    job: "Founder — uli.com",
    image: "/images/person-face/uli-puspita.jpg",
  },
  {
    id: 3,
    name: "Ghaliyati Nasyidah",
    description:
      "Naja sangat mudah dan menyenangkan untuk diajak bekerja sama, dan dia benar-benar peduli dengan keberhasilan proyek ini. Sagar memiliki pengetahuan tingkat tinggi dan mampu mengerjakan aplikasi MERN saya tanpa masalah.",
    job: "Founder — ghaliyati.com",
    image: "/images/person-face/ghaliyati-nasyidah.jpg",
  },
];
