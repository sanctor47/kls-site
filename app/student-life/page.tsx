import { CTABand } from "@/components/sections/CTABand";
import {
    Users,
    Lightbulb,
    Trophy,
    Palette,
    Cpu,
    Heart
} from "lucide-react";
import athletics from "@/public/athletics.png";
import Image from "next/image";

const activities = [
    {
        icon: Users,
        title: "Leadership Development",
        description: "Student councils, Model United Nations, mentorship programs, and leadership retreats that build confidence and civic responsibility.",
    },
    {
        icon: Lightbulb,
        title: "Entrepreneurship & Innovation",
        description: "Business incubators, hackathons, internship opportunities, and startup mentorship to nurture the next generation of innovators.",
    },
    {
        icon: Trophy,
        title: "Athletics & Sports",
        description: "Comprehensive sports programs including swimming, football, basketball, tennis, and more — building teamwork, discipline, and fitness.",
    },
    {
        icon: Palette,
        title: "Creative Arts",
        description: "Visual arts, music, drama, dance, and creative writing programs that develop artistic expression and cultural appreciation.",
    },
    {
        icon: Cpu,
        title: "Technology Integration",
        description: "AI, coding, robotics, and STEAM programs that prepare students for a technology-driven future.",
    },
    {
        icon: Heart,
        title: "Community Engagement",
        description: "Service learning, community partnerships, and social responsibility initiatives that develop empathy and global citizenship.",
    },
];

const StudentLife = () => {
    return (
        <main className="pt-20">
            {/* Hero */}
            <section className="relative py-24 bg-navy-light overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                            Beyond the Classroom
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                            Student <span className="text-gradient-gold">Life</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Education at KLS SIA extends far beyond academics. We nurture complete
                            individuals through diverse experiences that build character, skills, and passions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Image Banner */}
            <section className="relative h-[40vh] min-h-75">
                <Image
                    src={athletics}
                    alt="Students in sports activities"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background to-transparent" />
            </section>

            {/* Activities Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                            Shaping <span className="text-gradient-gold">Complete</span> Individuals
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Our comprehensive co-curricular programs ensure every student discovers
                            their passions and develops skills that last a lifetime.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activities.map((activity) => (
                            <div
                                key={activity.title}
                                className="group p-8 bg-card border border-border rounded-lg hover-lift"
                            >
                                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <activity.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                                    {activity.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {activity.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-24 bg-navy-light">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <blockquote className="text-2xl sm:text-3xl font-serif italic text-foreground leading-relaxed mb-8">
                            "At KLS SIA, we believe that the experiences outside the classroom are
                            just as important as those within. We're not just building scholars —
                            we're building leaders, artists, athletes, and citizens."
                        </blockquote>
                        <p className="text-primary font-medium">— The KLS SIA Philosophy</p>
                    </div>
                </div>
            </section>

            <CTABand />
        </main>
    );
};

export default StudentLife;