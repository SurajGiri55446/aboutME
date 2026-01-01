import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Java",
    "React",
    "Spring Boot",
    "Tailwind CSS",
    "Hibernate",
    "Eclipse",
    "Docker",
    "Git",
    "Responsive Design",
    "C language",
    "RESTful APIs",
    "MySQL",
    "MongoDB",
    "Agile Methodologies",
    "Problem Solving",
    "Team Collaboration",
    "Version Control (Git)",
    "Linux",
    "Google Cloud Platform (GCP)",
    "AWS",
    "IntelliJ IDEA",
    "Postman",
    "Visual Studio Code",
    "python",
    "GitHub",
    "C++",
    "Bootstrap",
    "ChatGPT",
    "AI Tools",
    "API Integration",
    "Debugging",
    "Software Development Life Cycle (SDLC)",
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-10 font-outfit text-primary">
            About Me
          </h1>

          <div className="grid md:grid-cols-[2fr_3fr] gap-10 items-start mb-20">
            <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 dark:border-primary/10">
              <Image
                src="/myphoto.jpg" // ✅ NOT /public/myphoto.jpg
                alt="surajgiri"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 ">
              <p className="text-xl font-ovo leading-relaxed">
                I'm Suraj Giri, a passionate full-stack developer with hands-on
                experience in building efficient, scalable, and user-friendly
                applications using Java, Spring Boot, React, and modern web
                technologies. I love turning ideas into reality through clean
                code and thoughtful design.
              </p>

              <p className="text-muted-foreground font-outfit leading-relaxed">
                I’m based in Kashipur, India, 1+ years of experience as a Junior
                Java Developer at Restope. I’ve worked on multiple projects,
                contributed to open source, and enjoy building user-friendly,
                accessible, and high-performance web applications using modern
                web technologies.
              </p>
            </div>
          </div>

          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8 font-outfit text-secondary">
              Skills & Tools
            </h2>

            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-5 py-2 text-base font-outfit rounded-xl shadow-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
