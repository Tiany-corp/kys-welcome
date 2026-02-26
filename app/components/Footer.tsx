import { Mic } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-gray-100 px-6 py-12">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700">
                        <Mic className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-bold text-slate-900">
                        KeepYour<span className="text-indigo-600">Seed</span>
                    </span>
                </div>

                {/* Links */}
                <div className="flex items-center gap-6">
                    <a
                        href="#"
                        className="text-sm text-slate-400 transition-colors hover:text-slate-600"
                    >
                        Politique de confidentialité
                    </a>
                    <a
                        href="#"
                        className="text-sm text-slate-400 transition-colors hover:text-slate-600"
                    >
                        Conditions d&apos;utilisation
                    </a>
                    <a
                        href="#"
                        className="text-sm text-slate-400 transition-colors hover:text-slate-600"
                    >
                        Contact
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-xs text-slate-400">
                    &copy; {new Date().getFullYear()} KeepYourSeed. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
}
