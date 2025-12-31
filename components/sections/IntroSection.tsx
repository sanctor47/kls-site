import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import innovationLab from "@/public/innovation-lab.png";
import Image from "next/image";
import Link from "next/link";

export function IntroSection() {
  return (
    <section className="py-24 bg-navy-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={innovationLab}
                alt="Students collaborating in innovation lab"
                className="w-full h-100 lg:h-125 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/50 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Welcome to KLS SIA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Where Excellence Is the{" "}
              <span className="text-gradient-gold">Standard</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                KLS SIA represents a new paradigm in premium education — one that honors 
                the rich legacy of KLS while pioneering innovative approaches to learning 
                that prepare students for a rapidly evolving world.
              </p>
              <p>
                Our campus, opening in 2026/2027, will be a beacon of academic excellence, 
                offering both British IGCSE and American Diploma pathways alongside 
                Finnish-inspired early years education. Here, every child receives the 
                attention, challenge, and support they need to flourish.
              </p>
              <p>
                We don't just educate students — we nurture visionaries, innovators, and 
                ethical leaders who will shape the future of Egypt and the world.
              </p>
            </div>
            <Link href="/about">
              <Button variant="goldOutline" size="lg" className="group">
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}