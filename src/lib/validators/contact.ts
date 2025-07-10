import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Nama harus minimal 2 karakter." }),
  email: z
    .string()
    .email({ message: "Tolong masukkan alamat email yang benar." }),
  subject: z.string().min(5, { message: "Subjek harus minimal 2 karakter." }),
  message: z.string().min(10, { message: "Pesan harus minimal 10 karakter" }),
});

export type ContactFromData = z.infer<typeof contactFormSchema>;
