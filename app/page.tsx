import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center">
        <p className="text-3xl mb-2 font-ovo ">
          Hi! I&apos;m<p className="text-purple-500">Suraj Giri</p>{" "}
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-outfit">
          Full Stack Developer
          <br />
        </h1>

        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto font-outfit">
          Based in Kashipur, Uttarakhand, India
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            className="rounded-full px-8 py-8 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 font-outfit"
            asChild
          >
            <Link href="/contact" className="flex items-center text-xl">
              contact me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            variant="outline"
            className="rounded-full px-10 py-8 text-xl font-outfit"
            asChild
          >
            <Link href="/resume.pdf" className="flex items-center">
              my resume
              <Download className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center font-outfit">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 dark:border-primary/10">
              <Image
                src="/myphoto.jpg?height=400&width=400"
                alt="Suraj Giti"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl font-ovo">
              I'm a passionate full-stack developer with a strong focus on clean
              design, intuitive user experience, and building scalable,
              efficient web and mobile applications. I love turning ideas into
              real-world solutions using technologies like Java, Spring Boot,
              React, and more.
            </p>

            <p className="text-muted-foreground font-outfit">
              With 10 years of experience working with leading tech companies,
              I've developed a deep understanding of what makes a great user
              experience. I specialize in React, and modern CSS
              frameworks.
            </p>

            <Button variant="link" className="font-outfit p-0" asChild>
              <Link
                href="/about"
                className="flex items-center text-primary text-xl"
              >
                Learn more about me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-outfit">
            Services
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-outfit text-xl">
            I offer a range of services to help bring your digital vision to
            life
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-xl">
            {[
              {
                title: "Web Development",
                description:
                  "I build custom websites using modern technologies and best practices to ensure they are fast, reliable, and easy to use.",
                icon: "🖥️",
              },
              {
                title: "UI/UX Design",
                description:
                  "I design clean and easy-to-use interfaces that make the user experience better",
                icon: "🎨",
              },
              {
                title: "Performance Optimization",
                description:
                  "Speed up your website and improve core web vitals",
                icon: "⚡",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-md transition-all duration-300 overflow-hidden border border-border/50"
              >
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 font-outfit">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-outfit">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              className="rounded-full px-8 py-4 text-xl font-outfit"
              asChild
            >
              <Link href="/services">View all services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-outfit">
          My Work
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-outfit text-xl">
          A selection of my recent projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <Image
                src={`/jobportal.png?height=600&width=800`}
                alt={`Project ${project}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-2 font-outfit">
                job portal system
                </h3>
                <p className="text-white/80 mb-4 font-outfit">
                  A modern job portal platform built with Spring Boot and Tailwind CSSgit
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-white/20 text-white hover:bg-white/30"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-white/20 text-white hover:bg-white/30"
                  >
                    Spring boot
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-white/20 text-white hover:bg-white/30"
                  >
                    Tailwind CSS
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button
            className="rounded-full px-8 py-4 text-xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 font-outfit"
            asChild
          >
            <Link href="/work">View all projects</Link>
          </Button>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-outfit">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto font-outfit text-xl">
            I'd love to hear from you! If you have any questions, comments, or
            feedback, please use the form below.
          </p>
          <Button
            className="rounded-full px-8 py-4 text-xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 font-outfit"
            asChild
          >
            <Link href="/contact" className="flex items-center">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
