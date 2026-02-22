import { CTABand } from "@/components/sections/CTABand";
import { Users, MessageCircle, Calendar, FileText } from "lucide-react";

const resources = [
    { title: "Parent Handbook", description: "Comprehensive guide to school policies and procedures" },
    { title: "Academic Calendar", description: "Important dates, holidays, and events" },
    { title: "School Policies", description: "Uniform, attendance, and behavior guidelines" },
    { title: "Communication Portal", description: "Stay connected with teachers and staff" },
];

const Parents = () => {
    return (
        <main className="pt-20">
            {/* Hero */}
            <section className="py-24 bg-navy-light">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                            Partners in Education
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                            Parents & <span className="text-gradient-gold">Community</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            At KIS SIA, parents are partners. Together, we create an environment
                            where every child can thrive.
                        </p>
                    </div>
                </div>
            </section>

            {/* Partnership Philosophy */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                                Your Role in Our <span className="text-gradient-gold">Community</span>
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    We believe that the strongest educational outcomes happen when schools
                                    and families work together. At KIS SIA, parents aren&apos;t just informed —
                                    they&apos;re involved, heard, and valued.
                                </p>
                                <p>
                                    From open communication channels to leadership forums, we create
                                    opportunities for parents to contribute to our community and stay
                                    connected to their child&apos;s journey.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-card border border-border rounded-lg text-center">
                                <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h3 className="font-serif font-semibold text-foreground">Parent Forums</h3>
                                <p className="text-sm text-muted-foreground mt-2">Leadership opportunities</p>
                            </div>
                            <div className="p-6 bg-card border border-border rounded-lg text-center">
                                <MessageCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h3 className="font-serif font-semibold text-foreground">Open Communication</h3>
                                <p className="text-sm text-muted-foreground mt-2">Direct access to educators</p>
                            </div>
                            <div className="p-6 bg-card border border-border rounded-lg text-center">
                                <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h3 className="font-serif font-semibold text-foreground">Events & Workshops</h3>
                                <p className="text-sm text-muted-foreground mt-2">Community gatherings</p>
                            </div>
                            <div className="p-6 bg-card border border-border rounded-lg text-center">
                                <FileText className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h3 className="font-serif font-semibold text-foreground">Resources</h3>
                                <p className="text-sm text-muted-foreground mt-2">Handbooks & guides</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources */}
            <section className="py-24 bg-navy-light">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                            Parent <span className="text-gradient-gold">Resources</span>
                        </h2>
                        <p className="text-muted-foreground">Coming soon for enrolled families</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {resources.map((resource) => (
                            <div
                                key={resource.title}
                                className="p-6 bg-card border border-border rounded-lg hover-lift"
                            >
                                <h3 className="font-serif font-semibold text-foreground mb-2">
                                    {resource.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">{resource.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABand />
        </main>

    );
};

export default Parents;