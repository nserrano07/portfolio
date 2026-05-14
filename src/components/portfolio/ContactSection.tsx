import { Mail, Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="contact" className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <div className="animate-on-scroll mb-10">
          <p className="text-sm tracking-widest uppercase text-primary font-medium mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-muted-foreground">Have a project in mind or want to chat? Reach out through any of the links below.</p>
        </div>

        <div className="animate-on-scroll flex items-center justify-center gap-4" style={{ transitionDelay: "0.15s" }}>
          <a
            href="https://www.linkedin.com/in/natalia-serrano-ortiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="LinkedIn Profile">
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:natalia.serrano.0701+portfolio@gmail.com"
            className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Email">
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>);

};

export default ContactSection;
