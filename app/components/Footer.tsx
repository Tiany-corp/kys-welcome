import GraineLogo from "./GraineLogo";


export default function Footer() {
    return (
        <footer className="border-t border-seed-border bg-seed-bg px-6 py-12">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-seed">
                        <GraineLogo className="h-9 w-9 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-sm font-bold text-seed-text">
                        KeepYour<span className="text-seed-primary">Seed</span>
                    </span>
                </div>

                {/* Links */}
                <div className="flex items-center gap-6">
                    <a
                        href="#"
                        className="text-sm text-seed-text-muted transition-colors hover:text-seed-text"
                    >
                        Politique de confidentialité
                    </a>
                    <a
                        href="#"
                        className="text-sm text-seed-text-muted transition-colors hover:text-seed-text"
                    >
                        Conditions d&apos;utilisation
                    </a>
                    <a
                        href="#"
                        className="text-sm text-seed-text-muted transition-colors hover:text-seed-text"
                    >
                        Contact
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-xs text-seed-text-muted">
                    &copy; {new Date().getFullYear()} KeepYourSeed. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
}
