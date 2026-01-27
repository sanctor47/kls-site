import { CTABand } from "@/components/sections/CTABand";
import { Eye, Target, Heart, Award } from "lucide-react";
import innovationLab from "@/public/innovation-lab.png";
import Image from "next/image";

const values = [
    {
        icon: Eye,
        title: "Vision",
        description: "To set a new global standard for premium education in Egypt — nurturing leaders of intellect, character, and compassion who will shape the future.",
    },
    {
        icon: Target,
        title: "Mission",
        description: "To provide an education of uncompromising quality, combining academic mastery with personal growth and ethical responsibility. We empower every student to pursue excellence, lead with confidence, and serve with integrity.",
    },
    {
        icon: Heart,
        title: "Philosophy",
        description: "We believe education should go beyond academics. At KLS SIA, learning is a process of transformation — cultivating intelligence, character, and creativity. Our students are taught to ask bold questions, challenge assumptions, and discover their own potential to shape the world.",
    },
    {
        icon: Award,
        title: "Legacy",
        description: "Building on KIS's decades of educational excellence, SIA represents the pinnacle chapter — a commitment to being the very best.",
    },
];

const About = () => {
    return (

        <main className="pt-20">
            {/* Hero Section */}
            <section className="py-24 bg-navy-light">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                            About KIS SIA
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                            Where <span className="text-gradient-gold">Legacy</span> Meets Innovation
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            KIS SIA is more than a school — it&apos;s a movement to redefine what premium
                            education can achieve in Egypt and beyond.
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                                Our Philosophy
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                                Education Beyond <span className="text-gradient-gold">Academics</span>
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    At KIS SIA, we believe that true education is transformative. It goes beyond
                                    the transmission of knowledge to shape character, ignite curiosity, and develop
                                    the skills needed to thrive in an ever-changing world.
                                </p>
                                <p>
                                    Our approach integrates rigorous academic standards with character development,
                                    creative expression, and real-world application. We don&apos;t just prepare students
                                    for exams — we prepare them for life.
                                </p>
                                <p>
                                    Every child at KIS SIA is seen, valued, and challenged to become the best
                                    version of themselves. Our educators are mentors, our classrooms are
                                    laboratories for discovery, and our community is a family.
                                </p>
                            </div>
                        </div>
                        {/* <div className="relative">
                            <Image
                                src={innovationLab}
                                alt="Students learning in modern classroom"
                                className="rounded-lg w-full h-100 object-cover"
                            />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary/30 rounded-lg -z-10" />
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Vision, Mission, Values */}
            <section className="py-24 bg-navy-light">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                            What <span className="text-gradient-gold">Guides</span> Us
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map((item) => (
                            <div
                                key={item.title}
                                className="p-8 bg-card border border-border rounded-lg hover-lift"
                            >
                                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                    <item.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
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

            {/* Heritage Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                            Our Heritage
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-8">
                            A Legacy of <span className="text-gradient-gold">Excellence</span>
                        </h2>
                        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                            <p>
                                KIS SIA builds upon decades of educational excellence established by KIS.
                                For generations, KIS has been synonymous with quality education in Egypt,
                                producing leaders who have shaped industries, communities, and nations.
                            </p>
                            <p>
                                SIA — the Scholar&apos;s International Academy — represents the pinnacle of this
                                legacy. It is our commitment to taking everything we&apos;ve learned and creating
                                something extraordinary: a school that sets new benchmarks for premium
                                education not just in Egypt, but globally.
                            </p>
                            <p>
                                When you choose KIS SIA, you&apos;re not just choosing a school — you&apos;re joining
                                a legacy of excellence that will shape your child&apos;s future.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTABand />
        </main>
    );
};

export default About;
