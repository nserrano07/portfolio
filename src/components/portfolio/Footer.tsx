import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-8 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-primary-foreground/70">
        <Leaf size={16} />
        <span className="text-sm">© {new Date().getFullYear()} Portfolio. All rights reserved.</span>
      </div>
      <div className="flex gap-6">
        {["Home", "About", "Experience", "Skills", "Contact"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
          >
            {l}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
