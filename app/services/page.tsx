"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  const services = [
    {
      icon: "🖥️",
      title: "Website Development",
      description:
        "Custom websites built with modern technologies and best practices. From personal portfolios to complex business websites, I create solutions that are fast, accessible, and optimized for all devices.",

      features: ["forntend development", "backend development"],
    },
    {
      icon: "🎨",
      title: "UI/UX Design Implementation",
      description:
        "Turning designs into functional interfaces with clean, maintainable code and attention to detail. I transform design mockups into pixel-perfect, responsive interfaces.",
      features: [
        "Pixel-perfect implementation",
        "Interactive prototypes",
        "Animation and transitions",
        "Design system implementation",
        "Cross-browser compatibility",
      ],
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description:
        "Speed up your website and improve core web vitals. I optimize existing websites to improve loading times, reduce bundle sizes, and enhance overall performance.",
      features: [
        "Core Web Vitals improvement",
        "Code splitting and lazy loading",
        "Image optimization",
        "Caching strategies",
        "Bundle size reduction",
      ],
    },
    {
      icon: "🔄",
      title: "Website Maintenance",
      description:
        "Ongoing support and maintenance to keep your website running smoothly, securely, and up-to-date with the latest technologies.",
      features: [
        "Regular updates and security patches",
        "Performance monitoring",
        "Content updates",
        "Bug fixes and troubleshooting",
        "Backup and recovery",
      ],
    },
  ];

  const [activeService, setActiveService] = useState(0);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-10 font-outfit">
            Services
          </h1>

          <div className="grid gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={cn(
                  "border border-border/50 transition-all duration-300 cursor-pointer overflow-hidden",
                  activeService === index ? "shadow-md" : "hover:shadow-sm"
                )}
                onClick={() => setActiveService(index)}
              >
                <CardContent className="p-0">
                  <div className="p-6 relative">
                    <div
                      className={cn(
                        "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left transition-transform duration-300",
                        activeService === index ? "scale-x-100" : "scale-x-0"
                      )}
                    ></div>

                    <div className="flex items-start gap-4">
                      <div className="text-5xl">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 font-outfit">
                          {service.title}
                        </h3>
                        <p className="text-lg text-muted-foreground font-outfit">
                          {service.description}
                        </p>

                        <div
                          className={cn(
                            "mt-4 grid gap-3 overflow-hidden transition-all duration-300",
                            activeService === index
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          )}
                        >
                          <h4 className="font-bold text-base uppercase tracking-wider text-primary font-outfit">
                            Features
                          </h4>
                          <ul className="grid gap-2 pl-6 list-disc text-lg text-muted-foreground font-outfit">
                            {service.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
