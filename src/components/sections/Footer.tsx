import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-50 py-6">
      <div className="flex items-center justify-center gap-1">
        <p className="text-normal text-xs text-muted-foreground flex items-center md:text-sm">
          &copy; {year} | Coded by Muhammad Naja Tri Razaqa
        </p>
      </div>
    </footer>
  );
};

export default Footer;
