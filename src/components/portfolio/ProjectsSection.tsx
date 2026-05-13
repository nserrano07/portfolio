import { ExternalLink, Code, Leaf, Brain, BarChart3, Palette, Blocks, Activity, Cpu } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tagIcons: Record<string, React.ElementType> = {
  React: Code,
  Lovable: Blocks,
  "UI/UX": Palette,
  "London Tech": Cpu,
  Python: Code,
  Streamlit: BarChart3,
  "AI for Sustainability": Leaf,
  "Low-Code": Blocks,
  NLP: Brain,
  "Product Thinking": Brain,
  "Healthcare AI": Activity,
  Figma: Palette,
  "Data Analytics": BarChart3,
  Sustainability: Leaf,
  "Green IT": Leaf,
  "Industrial Engineering": Cpu,
};

const projects = [
  {
    title: "London Tube Labyrinth Diary",
    description:
      "A React-based personal tracker for the 'Labyrinth' art series across 270 London Underground stations. Demonstrates front-end development and 'vibe coding' logic.",
    link: "https://tfl-labyrinth-diary.lovable.app",
    tags: ["React", "Lovable", "UI/UX", "London Tech"],
  },
  {
    title: "Recycling Coop: AI Waste Reporting",
    description:
      "Developed an AI-enhanced waste tracking system for SDG 12.5.1. Features a Glide app for data entry and a Streamlit dashboard for real-time visualization of waste volumes across Colombian cities.",
    link: "https://nso-recycling-coop-pyhy.glide.page",
    tags: ["Python", "Streamlit", "AI for Sustainability", "Low-Code"],
  },
  {
    title: "MyMediRecord: AI Medical History",
    description:
      "A conceptual AI blueprint using NLP to digitize and aggregate fragmented medical records in emerging markets. Focused on reducing misdiagnosis and improving portable care accessibility.",
    link: "https://www.figma.com/make/U0rCry1HphUXOQuqUIvCJr/Medical-History-AI-App?t=hIHY9um4IpHbOE92-1",
    tags: ["NLP", "Product Thinking", "Healthcare AI", "Figma"],
  },
  {
    title: "AI Carbon Impact & Systems Optimization",
    description:
      "Academic research using the 'Green Algorithms' framework to estimate the carbon footprint of ML models. Optimized deployment scenarios for high-usage applications in South America.",
    note: "Core component of my Business Analytics Master's project.",
    tags: ["Data Analytics", "Sustainability", "Green IT", "Industrial Engineering"],
  },
];

const ProjectsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="projects" className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll">
          <p className="text-sm tracking-widest uppercase text-primary font-medium mb-2">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Selected Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            return (
              <div
                key={project.title}
                className="animate-on-scroll glass-card-elevated rounded-xl p-6 flex flex-col gap-4 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-foreground text-lg leading-snug">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {project.note && (
                  <p className="text-xs text-primary font-medium italic">
                    📌 {project.note}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => {
                    const Icon = tagIcons[tag] || Code;
                    return (
                      <span
                        key={tag}
                        className="flex items-center gap-1.5 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-full"
                      >
                        <Icon size={12} />
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
