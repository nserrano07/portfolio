import { Briefcase, BarChart3, Sun } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import solarDecathlonAwards from "@/assets/solar-decathlon-awards.jpg";

const experiences = [
{
   icon: Briefcase,
   role: "Project Management Officer & Data Marketing Consultant",
   company: "Probance - Colombia / UK",
   period: "Recent",
   bullets: [
   "Led Jira KPI visualization and automated dashboard.",
   "Implemented marketing automation strategies for 50+ clients across Shopify, Prestashop, and custom e-commerce platforms.",
   "Bridged technical teams and stakeholders to deliver data-driven campaign optimization."]

},
{
   icon: BarChart3,
   role: "PMO Specialist",
   company: "Open International -  Colombia",
   period: "Previous",
   bullets: [
   "Transitioned performance indicators from Excel-based tracking to interactive Power BI dashboards.",
   "Built SQL queries and data pipelines to improve reporting accuracy and speed.",
   "Standardized project management processes across multiple departments."]

},
{
  icon: Sun,
  role: "Site Operations Coordinator",
  company: "Solar Decathlon 2019",
  period: "2019",
  bullets: [
  "Coordinated on-site logistics and operations for an international sustainable housing competition.",
  "Managed cross-disciplinary teams under tight deadlines in a high-pressure environment."]

}];


const ExperienceSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="experience" className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll">
          <p className="text-sm tracking-widest uppercase text-primary font-medium mb-2">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Professional Journey
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) =>
            <div
              key={exp.role}
              className="animate-on-scroll relative md:pl-16"
              style={{ transitionDelay: `${i * 0.15}s` }}>
              
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-1 w-12 h-12 rounded-full bg-primary items-center justify-center">
                  <exp.icon size={20} className="text-primary-foreground" />
                </div>

                <div className="glass-card-elevated rounded-xl p-6">
                  <div className="flex items-center gap-3 md:hidden mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <exp.icon size={18} className="text-primary-foreground" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{exp.period}</span>
                  </div>
                  <div className="hidden md:block text-xs font-medium text-muted-foreground mb-1">{exp.period}</div>
                  <h3 className="font-semibold text-foreground text-lg">{exp.role}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{exp.company}</p>
                  
                  <ul className="space-y-2">
                    {exp.bullets.map((b) =>
                  <li key={b} className="text-muted-foreground text-sm leading-relaxed flex gap-2 text-justify">
                        <span className="text-primary mt-0.5 shrink-0">•</span>
                        {b}
                      </li>
                  )}
                  </ul>

                  {/* Solar Decathlon Images - below text */}
                  {exp.company.includes("Solar Decathlon") &&
                    <div className="mt-5">
                      <div className="rounded-lg overflow-hidden shadow-md max-w-md">
                        <img
                          src={solarDecathlonAwards}
                          alt="Solar Decathlon 2019 Awards"
                          className="w-full h-56 object-cover" />
                      </div>
                    </div>
                  }
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default ExperienceSection;