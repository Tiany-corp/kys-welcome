import {
    Mic,
    Globe,
    Download,
    ArrowRight,
    Smartphone,
} from "lucide-react";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-30 md:pb-32"
        >
            {/* Background design - kept clean for 'bloc-notes' aesthetic */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-seed-bg">
            </div>

            <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">
                {/* Text content */}
                <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">


                    <h1 className="max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-seed-text sm:text-5xl lg:text-6xl animate-fade-in-up">
                        Vos idées capturées{" "}
                        <span className="text-seed-primary">
                            à la vitesse du son.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-lg text-lg leading-relaxed text-seed-text-muted animate-fade-in-up [animation-delay:100ms]">
                        KeepYourSeed est votre journal audio instantané. Capturez chaque pensée
                        d&apos;un simple tap, retrouvez-la hors-ligne, et synchronisez-la
                        automatiquement dans le cloud.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-3 animate-fade-in-up [animation-delay:200ms]">
                        {/* Version Web */}
                        <a
                            href="https://keepyourseed.tiany-rafa.fr/kys-web-app/"
                            className="group inline-flex items-center justify-center gap-2.5 rounded-seed bg-seed-primary px-7 py-3.5 text-sm font-semibold text-seed-bg transition-all hover:bg-seed-primary-light hover:-translate-y-0.5"
                        >
                            <Globe className="h-4.5 w-4.5" />
                            Version Web
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </a>
                        {/* Télécharger l'APK */}
                        <a
                            href="#"
                            className="group inline-flex items-center justify-center gap-2.5 rounded-seed border-2 border-seed-border bg-seed-bg px-7 py-3.5 text-sm font-semibold text-seed-text transition-all hover:border-seed-primary hover:bg-seed-card hover:-translate-y-0.5"
                        >
                            <Download className="h-4.5 w-4.5" />
                            Télécharger l&apos;APK (bientôt)
                        </a>
                    </div>
                </div>
                <div className="relative flex-shrink-0 animate-fade-in-up [animation-delay:300ms]">
                    <div className="animate-float">
                        <div className="relative h-[520px] w-[260px] overflow-hidden rounded-[2.5rem] border-[6px] border-seed-text bg-seed-bg">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-seed-text" />
                            {/* Screen content */}
                            <div className="relative mt-7 h-full w-full overflow-hidden bg-seed-bg">
                                <Image
                                    src="/mockup.png"
                                    alt="KeepYourSeed App Mockup"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
