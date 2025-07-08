"use client";

import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadCV = () => {
  return (
    <Button
      variant={"outline"}
      onClick={() => window?.open("/files/naja-cv.pdf", "_blank")}
      className="cursor-pointer"
    >
      <FileText className="mr-2 h-4 w-4" />
      <p>Lihat CV</p>
    </Button>
  );
};

export default DownloadCV;
