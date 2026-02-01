import React from 'react'
import Image from "next/image";
import kaumeya from "@/public/kaumeya.png";
import edge from "@/public/edge.png";
import elghonanmy from "@/public/el-ghonanmy.png";
import { cn } from '@/lib/utils';

const partners = [
  {
    name: "Kaumeya",
    logo: kaumeya,
  },
  {
    name: "Edge",
    logo: edge,
  },
  {
    name: "El Ghonanmy",
    logo: elghonanmy,
  },
];

const Partners = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Trusted Partnerships
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Building <span className="text-gradient-gold">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with leading educational institutions and organizations 
            to deliver exceptional learning experiences.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group p-8 bg-card border border-border rounded-lg hover-lift flex items-center justify-center transition-all"
            >
              <div className={cn("relative w-full h-24 md:grayscale group-hover:grayscale-0 transition-all duration-300")}>
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners