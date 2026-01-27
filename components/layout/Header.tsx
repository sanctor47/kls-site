'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
        label: "Academics",
        href: "/academics",
        children: [
            { label: "Overview", href: "/academics" },
            { label: "British IGCSE", href: "/academics#british" },
            { label: "American Diploma", href: "/academics#american" },
            { label: "Early Years", href: "/academics#early-years" },
        ],
    },
    { label: "Student Life", href: "/student-life" },
    { label: "Campus", href: "/campus" },
    { label: "Admissions", href: "/admissions" },
    { label: "Contact", href: "/contact" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = {
        pathname: typeof window !== "undefined" ? window.location.pathname : "",
    }

    const isActive = (href: string) => {
        if (href === "/") return location.pathname === "/";
        return location.pathname.startsWith(href);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src={logo}
                            alt="KIS SIA Logo"
                            width={180}
                            height={80}
                            className="object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {navItems.map((item) =>
                                    item.children ? (
                                        <NavigationMenuItem key={item.label}>
                                            <NavigationMenuTrigger
                                                className={cn(
                                                    "bg-transparent text-sm font-medium transition-colors hover:text-primary",
                                                    isActive(item.href) && "text-primary"
                                                )}
                                            >
                                                {item.label}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-48 gap-1 p-2 bg-card border border-border">
                                                    {item.children.map((child) => (
                                                        <li key={child.href}>
                                                            <NavigationMenuLink asChild>
                                                                <Link
                                                                    href={child.href}
                                                                    className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary rounded-md transition-colors"
                                                                >
                                                                    {child.label}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    ) : (
                                        <NavigationMenuItem key={item.label}>
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                                                    isActive(item.href) ? "text-primary" : "text-foreground"
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        </NavigationMenuItem>
                                    )
                                )}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="/admissions#register">
                            <Button variant="gold" size="lg">
                                Register Interest
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-border animate-fade-in">
                        <nav className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <div key={item.label}>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "block px-4 py-3 text-sm font-medium transition-colors hover:text-primary hover:bg-secondary rounded-md",
                                            isActive(item.href) ? "text-primary bg-secondary" : "text-foreground"
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                    {item.children && (
                                        <div className="pl-4">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 px-4">
                                <Link href="/admissions#register" onClick={() => setMobileMenuOpen(false)}>
                                    <Button variant="gold" className="w-full">
                                        Register Interest
                                    </Button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}