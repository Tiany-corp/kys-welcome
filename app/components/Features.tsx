import { Mic, CloudOff, History, ShieldCheck } from "lucide-react";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string;
}

function FeatureCard({ icon, title, description, className = "" }: FeatureCardProps) {
    return (
        <div
            className={`group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 ${className}`}
        >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                {icon}
            </div>
            <h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3>
            <p className="text-sm leading-relaxed text-slate-500">{description}</p>
            {/* Hover gradient accent */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
    );
}

const features = [
    {
        icon: <Mic className="h-6 w-6" />,
        title: "Capture instantanée",
        description:
            "Une interface ultra-rapide et minimaliste pour ne jamais perdre une idée. Un simple tap et c'est enregistré.",
    },
    {
        icon: <CloudOff className="h-6 w-6" />,
        title: "Local-First & Cloud Sync",
        description:
            "Vos données vous appartiennent. Accessibles hors-ligne instantanément, sauvegardées dans le cloud dès qu'il y a du réseau.",
    },
    {
        icon: <History className="h-6 w-6" />,
        title: "Historique intelligent",
        description:
            "Retrouvez, écoutez et gérez vos notes avec des indicateurs de synchronisation clairs et une navigation intuitive.",
    },
    {
        icon: <ShieldCheck className="h-6 w-6" />,
        title: "Sécurité",
        description:
            "Authentification sécurisée et stockage cloud chiffré pour protéger vos idées les plus précieuses.",
    },
];

export default function Features() {
    return (
        <section id="features" className="px-6 py-24 md:py-32">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold tracking-wider text-indigo-600 uppercase">
                        Fonctionnalités
                    </p>
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Tout ce qu&apos;il vous faut,{" "}
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            rien de superflu.
                        </span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-500">
                        KeepYourSeed a été conçu pour être l&apos;outil le plus simple et le
                        plus fiable pour capturer vos pensées vocales.
                    </p>
                </div>

                {/* Bento grid */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((f, i) => (
                        <FeatureCard
                            key={i}
                            icon={f.icon}
                            title={f.title}
                            description={f.description}
                            className={
                                i < 2
                                    ? "lg:col-span-2"
                                    : ""
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
