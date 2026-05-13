import { Database, KanbanSquare, Leaf, Languages } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  {
    icon: Database,
    title: "Data & Analytics",
    skills: ["Power BI", "Tableau", "SQL (Intermediate)", "Python", "R"],
  },
  {
    icon: KanbanSquare,
    title: "Project Management",
    skills: ["Scrum (SMPC, SPOPC)", "JIRA", "Agile Methodologies"],
  },
  {
    icon: Leaf,
    title: "Sustainability",
    skills: ["Climate Change Leadership", "AI for Sustainability", "ESG Strategy"],
  },
  {
    icon: Languages,
    title: "Languages",
    skills: ["English (Fluent)", "Spanish (Native)", "German (Intermediate)"],
  },
];

const SkillsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="section-padding bg-background" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll">
          <p className="text-sm tracking-widest uppercase text-primary font-medium mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Tools & Expertise
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="animate-on-scroll glass-card-elevated rounded-xl p-6"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <cat.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
