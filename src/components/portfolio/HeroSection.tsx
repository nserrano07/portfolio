import { ArrowDown } from "lucide-react";

const HeroSection = () =>
<section
  id="home"
  className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden bg-[#2d73b9]">
  
    {/* Decorative circles */}
    <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl" />
    <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />

    <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
      <p className="text-primary-foreground/70 text-sm tracking-widest uppercase mb-4 animate-fade-up">
        Data · Marketing · Sustainability
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        Bridging Data Analytics, Marketing Automation, and Sustainability
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
        Industrial Engineer and Master of Business Analytics specializing in optimizing workflows and driving data-led decisions.
      </p>
      <a
      href="#experience"
      className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-semibold px-8 py-3.5 rounded-lg hover:shadow-lg transition-all hover:-translate-y-0.5 animate-fade-up"
      style={{ animationDelay: "0.3s" }}>
      
        View My Work
        <ArrowDown size={18} />
      </a>
    </div>
  </section>;


export default HeroSection;