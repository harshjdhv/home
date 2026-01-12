import Link from 'next/link';

type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  description: string;
  url?: string;
};

const ExperienceSection = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Freelance",
      position: "Full Stack Developer",
      period: "2023 — Present",
      description: "Building web apps, crypto infrastructure, and AI-powered tools for clients worldwide.",
    },
    {
      company: "CSRBOX",
      position: "IBM SkillsBuild Intern",
      period: "2024",
      description: "Front-end development focused on accessibility and responsive design.",
      url: "https://csrbox.org",
    }
  ];

  return (
    <div className="flex flex-col">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`py-4 ${index !== experiences.length - 1 ? "border-b border-dashed" : ""}`}
        >
          <div className="flex items-center justify-between gap-4 mb-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium tracking-tight text-foreground">
                {exp.position}
              </h3>
              <span className="text-muted-foreground/30">·</span>
              {exp.url ? (
                <Link
                  href={exp.url}
                  target="_blank"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {exp.company} ↗
                </Link>
              ) : (
                <span className="text-xs text-muted-foreground">
                  {exp.company}
                </span>
              )}
            </div>
            <span className="text-xs text-muted-foreground shrink-0 font-medium opacity-70">
              {exp.period}
            </span>
          </div>
          <p className="text-sm text-muted-foreground tracking-tight leading-relaxed">
            {exp.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;