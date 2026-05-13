import { GraduationCap, Lightbulb, Sprout } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import profileImage from "@/assets/profile.png";

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll">
          <p className="text-sm tracking-widest uppercase text-primary font-medium mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Where Engineering Meets Strategy
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12 animate-on-scroll">
          {/* Profile Image */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <div className="w-48 lg:w-64 h-48 lg:h-64 glass-card p-3 rounded-full border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 flex items-end justify-center">
              <img
                src={profileImage}
                alt="Profile photo"
                className="w-40 lg:w-56 h-40 lg:h-56 rounded-full object-cover shadow-lg" />
               
            </div>
          </div>

          {/* Bio Text */}
          <div className="lg:col-span-2 flex items-center">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am Natalia Serrano. Graduate of dual Master's degrees in Business Analytics and Marketing from Hult International Business School in London, building on a strong foundation of Industrial Engineering from Pontificia Universidad Javeriana in Cali, Colombia. My work sits at the intersection of data-driven decision-making, marketing automation, and sustainable business practices.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
          {
            icon: GraduationCap,
            title: "Academic Foundation",
            desc: "Dual Masters from Hult London (Business Analytics & Marketing) with Industrial Engineering roots from Javeriana Cali."
          },
          {
            icon: Lightbulb,
            title: "Data & AI Focus",
            desc: "Passionate about leveraging AI, machine learning, and analytics to drive smarter marketing and operations."
          },
          {
            icon: Sprout,
            title: "Sustainability",
            desc: "Committed to integrating sustainability principles into business strategy and technology solutions."
          }].
          map((item, i) =>
          <div
            key={item.title}
            className="animate-on-scroll glass-card-elevated rounded-xl p-6"
            style={{ transitionDelay: `${i * 0.15}s` }}>
            
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default AboutSection;