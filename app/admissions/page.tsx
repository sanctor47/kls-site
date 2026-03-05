'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const journeySteps = [
    {
        step: 1,
        title: "Register Interest Online",
        description: "Complete our registration form to join our priority list for the inaugural cohort.",
    },
    {
        step: 2,
        title: "Schedule Private Consultation",
        description: "Meet with our admissions team to discuss your child's needs and aspirations.",
    },
    {
        step: 3,
        title: "Attend Campus Preview",
        description: "Experience our facilities and meet our faculty during an exclusive campus visit.",
    },
    {
        step: 4,
        title: "Child Assessment & Parent Meeting",
        description: "A holistic assessment to understand your child and ensure the best fit.",
    },
    {
        step: 5,
        title: "Accept Your Place",
        description: "Secure your child's place in KIS SIA's prestigious inaugural cohort.",
    },
];

const faqs = [
    {
        question: "What age groups does KIS SIA accept for the 2026/2027 opening year?",
        answer: "For our inaugural year, we will be accepting students for Pre-School and KG1. We plan to expand grade levels annually as our first cohort progresses.",
    },
    {
        question: "Does KIS SIA provide transportation services?",
        answer: "Yes, we will offer comprehensive transportation services covering major residential areas. Details will be shared with admitted families.",
    },
    {
        question: "What is the academic calendar?",
        answer: "KIS SIA follows an international academic calendar beginning in September and ending in June, with breaks aligned to Egyptian national holidays and international school standards.",
    },
    {
        question: "Can students switch between British and American pathways?",
        answer: "Yes, we provide flexibility for students to transition between pathways at appropriate junctures, supported by academic counseling to ensure smooth transitions.",
    },
    {
        question: "What qualifications do KIS SIA teachers hold?",
        answer: "Our faculty holds advanced degrees and international teaching certifications. Many have experience at leading institutions worldwide and undergo continuous professional development.",
    },
];

const Admissions = () => {
    const [formData, setFormData] = useState({
        parentName: "",
        email: "",
        phone: "",
        childName: "",
        childAge: "",
        entryLevel: "",
        pathway: "",
        message: "",
        consent: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.consent) {
            alert("Please provide consent to proceed with the registration.");
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        alert("Thank you for registering your interest! We will be in touch soon.");

        setFormData({
            parentName: "",
            email: "",
            phone: "",
            childName: "",
            childAge: "",
            entryLevel: "",
            pathway: "",
            message: "",
            consent: false,
        });

        setIsSubmitting(false);
    };

    return (


        <main className="pt-20">
            {/* Hero */}
            <section className="py-24 bg-navy-light">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                            Join Our Inaugural Cohort
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                            Admissions <span className="text-gradient-gold">2026/2027</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Opening Year Entry Levels: Pre-School, KG1 and FS1 — expanding annually thereafter.
                        </p>
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                            Your <span className="text-gradient-gold">Admissions</span> Journey
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A straightforward path to joining Egypt&apos;s most prestigious new school.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

                            <div className="space-y-8">
                                {journeySteps.map((step) => (
                                    <div key={step.step} className="relative flex gap-6">
                                        <div className="shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold z-10">
                                            {step.step}
                                        </div>
                                        <div className="grow pb-8">
                                            <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-muted-foreground">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Form */}
            <section id="register" className="py-24 bg-navy-light scroll-mt-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                                Register Your <span className="text-gradient-gold">Interest</span>
                            </h2>
                            <p className="text-muted-foreground">
                                Complete the form below to join our priority registration list.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                                    <Input
                                        id="parentName"
                                        required
                                        value={formData.parentName}
                                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                                        className="bg-card border-border"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address *</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="bg-card border-border"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number *</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="bg-card border-border"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="childName">Child&apos;s Name *</Label>
                                    <Input
                                        id="childName"
                                        required
                                        value={formData.childName}
                                        onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                                        className="bg-card border-border"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="childAge">Child&apos;s Age / Date of Birth *</Label>
                                    <Input
                                        id="childAge"
                                        required
                                        placeholder="e.g., 4 years old or 15/03/2021"
                                        value={formData.childAge}
                                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                                        className="bg-card border-border"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="entryLevel">Intended Entry Level *</Label>
                                    <Select
                                        value={formData.entryLevel}
                                        onValueChange={(value) => setFormData({ ...formData, entryLevel: value })}
                                    >
                                        <SelectTrigger className="bg-card border-border">
                                            <SelectValue placeholder="Select entry level" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-card border-border">
                                            <SelectItem value="pre-school">Pre-School</SelectItem>
                                            <SelectItem value="kg1">KG1</SelectItem>
                                            <SelectItem value="fs1">FS1</SelectItem>
                                            <SelectItem value="other">Other / Future Years</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="pathway">Pathway Interest</Label>
                                <Select
                                    value={formData.pathway}
                                    onValueChange={(value) => setFormData({ ...formData, pathway: value })}
                                >
                                    <SelectTrigger className="bg-card border-border">
                                        <SelectValue placeholder="Select preferred pathway" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-card border-border">
                                        <SelectItem value="british">British IGCSE</SelectItem>
                                        <SelectItem value="american">American Diploma</SelectItem>
                                        <SelectItem value="undecided">Undecided</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Additional Message (Optional)</Label>
                                <Textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="bg-card border-border resize-none"
                                    placeholder="Tell us anything else you'd like us to know..."
                                />
                            </div>

                            <div className="flex items-start gap-3">
                                <Checkbox
                                    id="consent"
                                    checked={formData.consent}
                                    onCheckedChange={(checked) =>
                                        setFormData({ ...formData, consent: checked as boolean })
                                    }
                                    className="mt-1"
                                />
                                <Label htmlFor="consent" className="text-sm text-muted-foreground font-normal">
                                    I consent to KIS SIA collecting and processing my personal data in accordance
                                    with the privacy policy. I understand I may be contacted regarding admissions.
                                </Label>
                            </div>

                            <Button
                                type="submit"
                                variant="gold"
                                size="xl"
                                className="w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Submit Registration"}
                                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="py-24 bg-background scroll-mt-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                                Frequently Asked <span className="text-gradient-gold">Questions</span>
                            </h2>
                        </div>

                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`faq-${index}`}
                                    className="bg-card border border-border rounded-lg px-6"
                                >
                                    <AccordionTrigger className="text-left font-serif text-lg hover:text-primary">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Admissions;