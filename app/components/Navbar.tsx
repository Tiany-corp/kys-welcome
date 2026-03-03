"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import GraineLogo from "./GraineLogo";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20); // j'instancie onScroll et je met dedans une fonction setScrolled qui prend en entrée un booléen. 
        // Je met une condition dans mon entrée de setScroll : si je prend le window et que son scrollY est supérieur à 20 je met vrai dans setScroll.
        // Si je ne met pas de listener, setScrolled ne va s'activer qu'une fois au début : même si window.ScrollY change, setScroll ne sera pas appelé (et donc pas exécuté)
        window.addEventListener("scroll", onScroll); // Je rajoute un listener sur ma windows qui exécute onScroll à chaque scroll
        return () => window.removeEventListener("scroll", onScroll); // J'enlève le listener de la fenètre quand le composant est démonté
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                ? "bg-seed-bg/80 backdrop-blur-xl shadow-sm border-seed-border"
                : "bg-transparent border-transparent"
                }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <GraineLogo className="h-9 w-9 transition-transform group-hover:scale-110" />
                    <span className="text-lg font-bold tracking-tight text-seed-text">
                        KeepYour<span className="text-seed-primary">Seed</span>
                    </span>
                </a>

                {/* Desktop links */}
                <div className="hidden items-center gap-8 md:flex">
                    <a
                        href="#features"
                        className="text-sm font-medium text-seed-text-muted transition-colors hover:text-seed-text"
                    >
                        Fonctionnalités
                    </a>
                    <a
                        href="#how-it-works"
                        className="text-sm font-medium text-seed-text-muted transition-colors hover:text-seed-text"
                    >
                        Comment ça marche
                    </a>
                    <a
                        href="https://keepyourseed.tiany-rafa.fr/kys-web-app/"
                        className="inline-flex items-center gap-2 rounded-seed bg-seed-primary px-5 py-2.5 text-sm font-semibold text-seed-bg transition-all hover:bg-seed-primary-light hover:-translate-y-0.5"
                    >
                        Tester l&apos;App
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="flex md:hidden items-center justify-center rounded-seed p-2 text-seed-text-muted hover:bg-seed-card"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 right-0 border-b border-seed-border bg-seed-bg/95 backdrop-blur-xl p-6 md:hidden animate-fade-in">
                    <div className="flex flex-col gap-4">
                        <a
                            href="#features"
                            className="text-sm font-medium text-seed-text-muted hover:text-seed-text"
                            onClick={() => setMenuOpen(false)}
                        >
                            Fonctionnalités
                        </a>
                        <a
                            href="#how-it-works"
                            className="text-sm font-medium text-seed-text-muted hover:text-seed-text"
                            onClick={() => setMenuOpen(false)}
                        >
                            Comment ça marche
                        </a>
                        <a
                            href="https://keepyourseed.tiany-rafa.fr/kys-web-app/"
                            className="inline-flex items-center justify-center gap-2 rounded-seed bg-seed-primary px-5 py-2.5 text-sm font-semibold text-seed-bg"
                            onClick={() => setMenuOpen(false)}
                        >
                            Tester l&apos;App
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
