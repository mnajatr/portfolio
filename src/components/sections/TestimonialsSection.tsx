import { MessageSquareText } from "lucide-react";
import { Badge } from "../ui/badge";
import { TESTIMONIALS } from "@/lib/constants";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-16 px-10 md:py-24 md:px-20 bg-gray-50"
    >
      <div className="container mx-auto flex flex-col items-center gap-10">
        {/* Badge */}
        <Badge
          variant={"secondary"}
          className="py-2 px-6 text-lg font-semibold"
        >
          <MessageSquareText />
          Testimonials
        </Badge>
        <p className="text-muted-foreground text-lg text-center">
          Hal-hal baik yang orang katakan tentang saya:
        </p>

        <ul className="flex list-none gap-12 p-0 max-md:flex-col md:max-lg:flex-wrap">
          {TESTIMONIALS.map((item, index) => (
            <li key={index} className="mx-auto flex w-full md:w-2/3 lg:w-1/3">
              <figure className="flex w-full flex-col items-center gap-6 rounded-xl bg-white p-8 shadow-md md:p-12">
                <Avatar className="h-16 w-16 object-contain">
                  <AvatarImage
                    src={item.image}
                    alt={`Foto dari ${item.name}`}
                  />
                  <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <blockquote className="text-base text-normal text-muted-foreground">
                  <p>"{item.description}"</p>
                </blockquote>
                <figcaption className="flex flex-col gap-1 text-center">
                  <p className="text-lg font-semibold  text-gray-900 md:text-xl w-full">
                    {item.name}
                  </p>
                  <p className="text-normal text-sm text-muted-foreground">
                    {item.job}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TestimonialsSection;
