import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTABandProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function CTABand({
  title = "Begin Your Child's Journey",
  description = "Secure a place in the inaugural cohort of KLS SIA. Register your interest today and be among the first to experience premium education reimagined.",
  buttonText = "Register Your Interest",
  buttonLink = "/admissions#register",
}: CTABandProps) {
  return (
    <section className="py-20 bg-linear-to-r from-navy-light to-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            {description}
          </p>
          <Link href={buttonLink}>
            <Button variant="gold" size="xl" className="group">
              {buttonText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}