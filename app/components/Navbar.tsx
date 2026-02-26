"use client";

import { useState, useEffect } from "react";
import { Mic, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100"
                : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-lg shadow-indigo-500/25 transition-transform group-hover:scale-105">
                        <Mic className="h-4.5 w-4.5 text-white" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-slate-900">
                        KeepYour<span className="text-indigo-600">Seed</span>
                    </span>
                </a>

                {/* Desktop links */}
                <div className="hidden items-center gap-8 md:flex">
                    <a
                        href="#features"
                        className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
                    >
                        Fonctionnalités
                    </a>
                    <a
                        href="#how-it-works"
                        className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
                    >
                        Comment ça marche
                    </a>
                    <a
                        href="#hero"
                        className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-700 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
                    >
                        Tester l&apos;App
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="flex md:hidden items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-gray-100"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 right-0 border-b border-gray-100 bg-white/95 backdrop-blur-xl p-6 md:hidden animate-fade-in">
                    <div className="flex flex-col gap-4">
                        <a
                            href="#features"
                            className="text-sm font-medium text-slate-600 hover:text-slate-900"
                            onClick={() => setMenuOpen(false)}
                        >
                            Fonctionnalités
                        </a>
                        <a
                            href="#how-it-works"
                            className="text-sm font-medium text-slate-600 hover:text-slate-900"
                            onClick={() => setMenuOpen(false)}
                        >
                            Comment ça marche
                        </a>
                        <a
                            href="#hero"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25"
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
