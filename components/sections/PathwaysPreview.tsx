import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Globe,  Sparkles } from "lucide-react";
import earlyYears from "@/public/early-years.png";
import Image from "next/image";
import Link from "next/link";

const pathways = [
  {
    icon: BookOpen,
    title: "British IGCSE",
    description: "Structured, rigorous curriculum focused on subject mastery and critical thinking. The ideal preparation for A Levels and prestigious universities worldwide.",
    link: "/academics#british",
  },
  {
    icon: Globe,
    title: "American Diploma",
    description: "Flexible, holistic education encouraging creativity and innovation. AP-level rigor with continuous assessment and global university recognition.",
    link: "/academics#american",
  },
  {
    icon: Sparkles,
    title: "Early Years",
    description: "Finnish-inspired foundation emphasizing play, discovery, and social learning. Building independence, resilience, and a lifelong love of learning.",
    link: "/academics#early-years",
  },
];

export function PathwaysPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Academic Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            World-Class <span className="text-gradient-gold">Pathways</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the educational journey that best aligns with your child's ambitions 
            and learning style.
          </p>
        </div>

        {/* Pathways Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pathways.map((pathway) => (
            <div
              key={pathway.title}
              className="group p-8 bg-card border border-border rounded-lg hover-lift text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <pathway.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                {pathway.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {pathway.description}
              </p>
              <Link href={pathway.link}>
                <Button variant="ghost" className="group/btn text-primary">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Image Banner */}
        <div className="mt-16 relative rounded-lg overflow-hidden">
          <Image
            src={earlyYears}
            alt="Finnish-inspired early years classroom"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/40 flex items-center">
            <div className="container mx-auto px-8 lg:px-16">
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-3">
                Where Every Child's Journey Begins
              </h3>
              <p className="text-muted-foreground max-w-lg mb-6">
                Our Finnish-inspired early years program nurtures curiosity and builds 
                the foundation for lifelong success.
              </p>
              <Link href="/academics">
                <Button variant="goldOutline">
                  Explore Our Curriculum
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}