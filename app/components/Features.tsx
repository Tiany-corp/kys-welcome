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
            className={`group relative overflow-hidden rounded-seed border border-seed-border bg-seed-card p-8 transition-all duration-300 hover:border-seed-primary hover:-translate-y-1 ${className}`}
        >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-seed bg-seed-bg text-seed-primary transition-colors group-hover:bg-seed-primary group-hover:text-seed-bg">
                {icon}
            </div>
            <h3 className="mb-2 text-lg font-bold text-seed-text">{title}</h3>
            <p className="text-sm leading-relaxed text-seed-text-muted">{description}</p>
            {/* Hover accent */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-seed-primary opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
    );
}

const features = [
    {
        icon: <Mic className="h-6 w-6" />,
        title: "Capture instantanée",
        description:
            "Enregistrez en temps réel sur web et mobile. Une interface ultra-rapide pour ne jamais perdre une idée, même fugace.",
    },
    {
        icon: <CloudOff className="h-6 w-6" />,
        title: "Local-First & Cloud Sync",
        description:
            "Vos données vous appartiennent. Accessibles hors-ligne instantanément, sauvegardées dans le cloud dès qu'il y a du réseau.",
    },
    {
        icon: <History className="h-6 w-6" />,
        title: "Pensée quotidienne",
        description:
            "Chaque jour, une pensée différente vous attend. Que ca soit un souvenir ravivé, un début d'idée à perfectionner ou une pensée qui vous a guidé, tout est fait pour entretenir vos pensées.",
    },
    {
        icon: <ShieldCheck className="h-6 w-6" />,
        title: "Un jardin privé et sécurisé",
        description:
            "Vos audios n'appartiennent qu'à vous. L'authentification sécurisée et le stockage chiffré pour protéger votre intimité.",
    },
];

export default function Features() {
    return (
        <section id="features" className="px-6 py-24 md:py-32">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold tracking-wider text-seed-secondary uppercase">
                        Un journal qui a du sens
                    </p>
                    <h2 className="text-3xl font-extrabold tracking-tight text-seed-text sm:text-4xl">
                        Pensé pour vous et{" "}
                        <span className="text-seed-primary">
                            votre pensée.
                        </span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-seed-text-muted">
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
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
