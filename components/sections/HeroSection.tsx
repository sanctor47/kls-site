import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroCampus from "@/public/hero-campus.png";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroCampus}
          alt="KIS SIA Campus at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 bg-linear-to-r from-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Opening Tag */}
          <div className="animate-fade-in-up mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium">
              Opening 2026/2027
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground leading-tight mb-6">
            Education for the{" "}
            <span className="text-gradient-gold">Visionaries</span>{" "}
            Who Will Shape the Future
          </h1>

          {/* Supporting Line */}
          <p className="animate-fade-in-delay text-xl sm:text-2xl font-serif italic text-primary mb-4">
            KIS SIA is Where Legacy Meets Innovation
          </p>

          {/* Subheadline */}
          <p className="animate-fade-in-delay-2 text-lg text-muted-foreground max-w-2xl mb-10">
            A place where only the highest standards are standard. Combining decades of educational 
            excellence with innovative pedagogy to create the next generation of global leaders.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row gap-4">
            <Link href="/admissions#register">
              <Button variant="gold" size="xl" className="group">
                Register Your Interest
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="xl">
                Discover Our Vision
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}