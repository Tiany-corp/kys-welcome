import { Mic, HardDrive, Sparkles, ArrowRight } from "lucide-react";

interface StepProps {
    number: number;
    icon: React.ReactNode;
    title: string;
    description: string;
}

function Step({ number, icon, title, description }: StepProps) {
    return (
        <div className="group flex flex-col items-center text-center">
            {/* Number badge */}
            <div className="relative mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-seed border border-seed-border bg-seed-card text-seed-primary transition-all group-hover:border-seed-primary group-hover:bg-seed-primary group-hover:text-seed-bg">
                    {icon}
                </div>
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-seed bg-seed-primary text-xs font-bold text-seed-bg">
                    {number}
                </span>
            </div>
            <h3 className="mb-2 text-lg font-bold text-seed-text">{title}</h3>
            <p className="max-w-xs text-sm leading-relaxed text-seed-text-muted">
                {description}
            </p>
        </div>
    );
}

export default function HowItWorks() {
    const steps = [
        {
            icon: <Mic className="h-8 w-8" />,
            title: "Plantez une idée",
            description:
                "Un tap suffit pour enregistrer à la vitesse de la pensée. Simple, direct et sans interface encombrante.",
        },
        {
            icon: <HardDrive className="h-8 w-8" />,
            title: "Sauvegarde local",
            description:
                "Votre note est d'abord sécurisée localement pour une ré-écoute instantanée, avant d'être synchronisée dans le cloud.",
        },
        {
            icon: <Sparkles className="h-8 w-8" />,
            title: "Entretenez vos pensées",
            description:
                "Chaque jour, une Pensée du Passé vous attend. Reconnectez-vous à vous pour prendre conscience de votre évolution et continuer à cheminer.",
        },
    ];

    return (
        <section
            id="how-it-works"
            className="relative overflow-hidden px-6 py-24 md:py-32"
        >
            {/* Subtle background */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-seed-bg" />

            <div className="mx-auto max-w-5xl">
                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold tracking-wider text-seed-secondary uppercase">
                        Simple et organique
                    </p>
                    <h2 className="text-3xl font-extrabold tracking-tight text-seed-text sm:text-4xl">
                        Comment ça marche&nbsp;?
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-seed-text-muted">
                        Trois étapes naturelles : de la plantation à la récolte, de la récolte à la semence, vos visions s'entretiennent et de nouvelles naissent.
                    </p>
                </div>

                <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
                    {/* Connector line (desktop only) */}
                    <div className="pointer-events-none absolute top-10 left-[16%] right-[16%] hidden h-px bg-seed-border md:block" />

                    {steps.map((step, i) => (
                        <Step
                            key={i}
                            number={i + 1}
                            icon={step.icon}
                            title={step.title}
                            description={step.description}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 flex justify-center">
                    <a
                        href="#hero"
                        className="group inline-flex items-center gap-2 rounded-seed bg-seed-primary px-8 py-4 text-sm font-semibold text-seed-bg transition-all hover:bg-seed-primary-light hover:-translate-y-0.5"
                    >
                        Commencer maintenant
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </section>
    );
}
