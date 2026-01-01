"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function WorkPage() {
  const categories = ["All", "Websites", "Web Apps", "E-commerce", "UI Design"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Job Portal Website",
      description:
        "A modern job portal platform built with Spring Boot and Tailwind CSS",
      image: "/jobportal.png?height=600&width=800",
      category: "Websites",
      tags: ["Spring Boot", "React", "Thymeleaf"," Tailwind CSS", "My SQL"," Hibernate"," RESTful APIs"," Docker"," GCP"],
      link: "https://job-portal-742835143175.asia-south2.run.app/login",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A creative portfolio for a digital artist with interactive galleries",
      image: "/cv.png?height=600&width=800",
      category: "Websites",
      tags: ["React", "Tailwind CSS", "HTML"],
      link: "https://about-me-git-main-surajgiri55446s-projects.vercel.app/",
    },
    {
      id: 3,
      title: "Quick Invoice Generator",
      description:
        "A web app to create and manage invoices quickly and efficiently.",
      image: "/invoice.png?height=600&width=800",
      category: "Web Apps",
      tags: ["React", "Spring boot", "My SQl"],
      link: "https://billing-seven-alpha.vercel.app/",
    },
     {
      id: 4,
      title: "Money Manager App",
      description:
        "A personal finance management app to track expenses and budgets.",
      image: "/money.png?height=600&width=800",
      category: "Web Apps",
      tags: ["React", "Spring boot", "My SQl"], 
      link: "https://money-manager-frontend-eccz.vercel.app/login", 
    },
     {
      id: 5,
      title: "E-commerce Store",
      description:
        "A full-featured e-commerce platform with product listings, shopping cart, and checkout.",
      image: "/e.png?height=600&width=800",
      category: "UI Designs",
      tags: ["html", "css"], 
      link: "https://superb-druid-4bb34b.netlify.app/", 
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-outfit">
          My Work
        </h1>
        <p className="text-2xl text-muted-foreground mb-12 max-w-2xl font-outfit">
          A showcase of my recent projects that demonstrate my expertise in both
          frontend and backend development, highlighting my full-stack
          development skills.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={cn(
                "rounded-full text-lg font-outfit",
                activeCategory === category &&
                  "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              )}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2 font-outfit">
                  {project.title}
                </h3>
                <p className="text-white/80 text-lg mb-4 font-outfit">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-white/20 text-white hover:bg-white/30 text-sm font-outfit"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="text-white flex items-center gap-1 text-lg w-fit hover:text-primary transition-colors font-outfit"
                >
                  View project <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length > 6 && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="rounded-full text-lg font-outfit"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show less" : "Show more projects"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
