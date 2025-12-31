import { CTABand } from "@/components/sections/CTABand";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Globe, Sparkles, CheckCircle } from "lucide-react";
import earlyYears from "@/public/early-years.png";
import innovationLab from "@/public/innovation-lab.png";
import library from "@/public/library.png";
import Image from "next/image";

const britishFeatures = [
    "Cambridge IGCSE & O-Level qualifications",
    "Structured, subject-focused curriculum",
    "Emphasis on depth over breadth",
    "Critical analysis and academic rigor",
    "Clear pathway to A Levels",
    "Recognized by top universities worldwide",
];

const americanFeatures = [
    "Flexible, holistic curriculum",
    "Advanced Placement (AP) courses",
    "Emphasis on creativity and innovation",
    "Continuous assessment model",
    "Breadth across multiple disciplines",
    "Global university recognition",
];

const earlyYearsFeatures = [
    "Play-based learning approach",
    "Social-emotional development focus",
    "Child-led exploration and discovery",
    "Building independence and resilience",
    "Love of learning foundation",
    "Seamless transition to primary years",
];

const Academics = () => {
    return (

        <main className="pt-20">
            {/* Hero */}
            <section className="py-24 bg-navy-light">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                            Academic Excellence
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                            World-Class <span className="text-gradient-gold">Pathways</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Choose the educational journey that best prepares your child for global
                            success — British rigor, American innovation, or both.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pathways Tabs */}
            <section className="py-24 bg-background" id="pathways">
                <div className="container mx-auto px-4 lg:px-8">
                    <Tabs defaultValue="british" className="w-full">
                        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 bg-secondary">
                            <TabsTrigger value="british" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                                <BookOpen className="w-4 h-4 mr-2" />
                                British IGCSE
                            </TabsTrigger>
                            <TabsTrigger value="american" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                                <Globe className="w-4 h-4 mr-2" />
                                American Diploma
                            </TabsTrigger>
                            <TabsTrigger value="early" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                                <Sparkles className="w-4 h-4 mr-2" />
                                Early Years
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="british" id="british" className="animate-fade-in">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                                        British <span className="text-gradient-gold">IGCSE</span> Pathway
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        Our British pathway follows the internationally recognized Cambridge IGCSE
                                        curriculum, renowned for its academic rigor and depth. Students develop
                                        mastery in core subjects while building critical thinking skills that
                                        prepare them for A Levels and admission to the world's top universities.
                                    </p>
                                    <ul className="space-y-3">
                                        {britishFeatures.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                <span className="text-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="relative">
                                    <Image
                                        src={library}
                                        alt="Students studying in library"
                                        className="rounded-lg w-full h-[400px] object-cover"
                                    />
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="american" id="american" className="animate-fade-in">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                                        American <span className="text-gradient-gold">Diploma</span> Pathway
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        The American Diploma pathway offers flexibility and breadth, encouraging
                                        students to explore diverse interests while maintaining academic excellence.
                                        With Advanced Placement courses available, students can challenge themselves
                                        at college level and stand out in global university admissions.
                                    </p>
                                    <ul className="space-y-3">
                                        {americanFeatures.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                <span className="text-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="relative">
                                    <Image
                                        src={innovationLab}
                                        alt="Students in innovation lab"
                                        className="rounded-lg w-full h-[400px] object-cover"
                                    />
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="early" id="early-years" className="animate-fade-in">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                                        Finnish-Inspired <span className="text-gradient-gold">Early Years</span>
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        Our early years program draws from Finland's world-leading approach to
                                        childhood education. Through play, exploration, and social interaction,
                                        young learners develop independence, creativity, and a genuine love
                                        of learning that forms the foundation for academic success.
                                    </p>
                                    <ul className="space-y-3">
                                        {earlyYearsFeatures.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                <span className="text-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="relative">
                                    <Image
                                        src={earlyYears}
                                        alt="Children in early years classroom"
                                        className="rounded-lg w-full h-[400px] object-cover"
                                    />
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Comparison */}
            <section className="py-24 bg-navy-light">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                            Pathway <span className="text-gradient-gold">Comparison</span>
                        </h2>
                        <p className="text-muted-foreground">
                            Find the right fit for your child's learning style and aspirations
                        </p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[600px] border-collapse">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left py-4 px-6 text-foreground font-serif text-lg">Feature</th>
                                    <th className="text-center py-4 px-6 text-foreground font-serif text-lg">British IGCSE</th>
                                    <th className="text-center py-4 px-6 text-foreground font-serif text-lg">American Diploma</th>
                                </tr>
                            </thead>
                            <tbody className="text-muted-foreground">
                                <tr className="border-b border-border">
                                    <td className="py-4 px-6">Curriculum Focus</td>
                                    <td className="text-center py-4 px-6">Depth & Mastery</td>
                                    <td className="text-center py-4 px-6">Breadth & Flexibility</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="py-4 px-6">Assessment Style</td>
                                    <td className="text-center py-4 px-6">Final Examinations</td>
                                    <td className="text-center py-4 px-6">Continuous Assessment</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="py-4 px-6">Advanced Courses</td>
                                    <td className="text-center py-4 px-6">A Levels</td>
                                    <td className="text-center py-4 px-6">AP Courses</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="py-4 px-6">University Recognition</td>
                                    <td className="text-center py-4 px-6">Global (UK focus)</td>
                                    <td className="text-center py-4 px-6">Global (US focus)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <CTABand />
        </main>
    );
};

export default Academics;