import { GraduationCap, Users, Brain, Trophy, Lightbulb, Award } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "World-Class Pathways",
    description: "Choose between British IGCSE or American Diploma — both leading to top global universities.",
  },
  {
    icon: Brain,
    title: "Foundational Advantage",
    description: "Finnish-inspired early childhood education fostering curiosity, creativity, and resilience.",
  },
  {
    icon: Users,
    title: "Elite Faculty",
    description: "Internationally trained educators committed to personalized excellence in every classroom.",
  },
  {
    icon: Trophy,
    title: "Beyond the Classroom",
    description: "Sports, arts, leadership, technology, and entrepreneurship programs that shape complete individuals.",
  },
  {
    icon: Lightbulb,
    title: "Skills-Based Learning",
    description: "Critical thinking, problem-solving, and creativity embedded across all disciplines.",
  },
  {
    icon: Award,
    title: "A Trusted Legacy",
    description: "Building on KIS's decades of educational excellence — SIA represents our pinnacle chapter.",
  },
];

export function HighlightsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            The <span className="text-gradient-gold">KIS SIA</span> Difference
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where tradition meets innovation, and every student is empowered to become 
            a visionary leader of tomorrow.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group p-8 bg-card border border-border rounded-lg hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}