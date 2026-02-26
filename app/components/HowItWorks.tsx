import { Mic, HardDrive, Cloud, ArrowRight } from "lucide-react";

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
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-all group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-indigo-500/25">
                    {icon}
                </div>
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white shadow-lg">
                    {number}
                </span>
            </div>
            <h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3>
            <p className="max-w-xs text-sm leading-relaxed text-slate-500">
                {description}
            </p>
        </div>
    );
}

export default function HowItWorks() {
    const steps = [
        {
            icon: <Mic className="h-8 w-8" />,
            title: "Enregistrez",
            description:
                "Ouvrez l'app et appuyez sur le bouton. Votre note vocale est capturée en un instant.",
        },
        {
            icon: <HardDrive className="h-8 w-8" />,
            title: "Sauvegarde locale",
            description:
                "Votre enregistrement est immédiatement sauvegardé sur votre téléphone. Accessible même sans connexion.",
        },
        {
            icon: <Cloud className="h-8 w-8" />,
            title: "Sync Cloud",
            description:
                "Dès que le réseau est disponible, vos mémos se synchronisent automatiquement et en toute sécurité.",
        },
    ];

    return (
        <section
            id="how-it-works"
            className="relative overflow-hidden px-6 py-24 md:py-32"
        >
            {/* Subtle background */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

            <div className="mx-auto max-w-5xl">
                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold tracking-wider text-indigo-600 uppercase">
                        Simple comme bonjour
                    </p>
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Comment ça marche&nbsp;?
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-slate-500">
                        Trois étapes, zéro friction. Du micro au cloud en toute
                        transparence.
                    </p>
                </div>

                <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
                    {/* Connector line (desktop only) */}
                    <div className="pointer-events-none absolute top-10 left-[16%] right-[16%] hidden h-0.5 bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-200 md:block" />

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
                        className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 transition-all hover:bg-slate-800 hover:-translate-y-0.5"
                    >
                        Commencer maintenant
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </section>
    );
}
