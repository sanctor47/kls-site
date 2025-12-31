import { CTABand } from "@/components/sections/CTABand";
import innovationLab from "@/public/innovation-lab.png";
import earlyYears from "@/public/early-years.png";
import athletics from "@/public/athletics.png";
import library from "@/public/library.png";
import heroCampus from "@/public/hero-campus.png";
import Image from "next/image";

const facilities = [
    {
        title: "Innovation Labs",
        description: "State-of-the-art technology spaces equipped for robotics, coding, AI exploration, and STEAM projects.",
        image: innovationLab,
    },
    {
        title: "Arts & Performance Spaces",
        description: "Professional-grade studios for visual arts, music rooms, and a performance theater for drama and dance.",
        image: library,
    },
    {
        title: "Sports Complex",
        description: "Olympic-standard facilities including swimming pools, indoor courts, outdoor fields, and fitness centers.",
        image: athletics,
    },
    {
        title: "Early Years Center",
        description: "Purpose-built spaces designed for play-based learning with nature integration and safe outdoor areas.",
        image: earlyYears,
    },
    {
        title: "Learning Commons",
        description: "A modern library and collaborative study space with extensive resources and quiet zones for focus.",
        image: library,
    },
];

const Campus = () => {
    return (

        <main className="pt-20">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px]">
                <Image
                    src={heroCampus}
                    alt="KLS SIA Campus"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-4">
                        <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                            World-Class Facilities
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                            Campus & <span className="text-gradient-gold">Facilities</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Designed to inspire learning, creativity, and excellence in every dimension.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                            Spaces That <span className="text-gradient-gold">Inspire</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Our campus is designed with intention — every space supports our educational
                            philosophy and provides the environment students need to thrive.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {facilities.map((facility, index) => (
                            <div
                                key={facility.title}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
                                        {facility.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-lg">
                                        {facility.description}
                                    </p>
                                </div>
                                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                                    <Image
                                        src={facility.image}
                                        alt={facility.title}
                                        className="rounded-lg w-full h-[350px] object-cover hover-lift"
                                    />
                                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-lg -z-10" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Virtual Tour CTA */}
            <section className="py-24 bg-navy-light">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                            Coming Soon: <span className="text-gradient-gold">Virtual Tour</span>
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Experience our campus from anywhere in the world. Virtual tours and campus
                            previews will be available as construction progresses.
                        </p>
                    </div>
                </div>
            </section>

            <CTABand />
        </main>

    );
};

export default Campus;