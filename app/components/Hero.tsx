import {
    Mic,
    Globe,
    Download,
    ArrowRight,
    Smartphone,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-44 md:pb-32"
        >
            {/* Background gradient blobs */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-100/60 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-purple-100/40 blur-3xl" />
            </div>

            <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">
                {/* Text content */}
                <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700 animate-fade-in">
                        <Mic className="h-3.5 w-3.5" />
                        Journal Audio — Local-First
                    </div>

                    <h1 className="max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl animate-fade-in-up">
                        Vos idées capturées{" "}
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            à la vitesse du son.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-500 animate-fade-in-up [animation-delay:100ms]">
                        KeepYourSeed est votre journal audio instantané. Capturez chaque pensée
                        d&apos;un simple tap, retrouvez-la hors-ligne, et synchronisez-la
                        automatiquement dans le cloud.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-3 animate-fade-in-up [animation-delay:200ms]">
                        {/* Version Web */}
                        <a
                            href="#"
                            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
                        >
                            <Globe className="h-4.5 w-4.5" />
                            Version Web
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </a>
                        {/* Télécharger l'APK */}
                        <a
                            href="#"
                            className="group inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-indigo-200 bg-white px-7 py-3.5 text-sm font-semibold text-indigo-700 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:-translate-y-0.5"
                        >
                            <Download className="h-4.5 w-4.5" />
                            Télécharger l&apos;APK
                        </a>
                    </div>

                    {/* Expo Go QR Code Card */}
                    <div className="mt-8 animate-fade-in-up [animation-delay:350ms]">
                        <div className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-lg shadow-gray-900/5">
                            <div className="rounded-xl bg-white p-2 ring-1 ring-gray-100">
                                <QRCodeSVG
                                    value="exp://u.expo.dev/update/xxxxx"
                                    size={88}
                                    bgColor="#ffffff"
                                    fgColor="#1e1b4b"
                                    level="M"
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <Smartphone className="h-4 w-4 text-indigo-600" />
                                    <span className="text-sm font-semibold text-slate-900">
                                        Tester avec Expo Go
                                    </span>
                                </div>
                                <p className="text-xs leading-relaxed text-slate-400">
                                    Scannez ce QR code avec l&apos;app{" "}
                                    <span className="font-medium text-slate-500">Expo Go</span>{" "}
                                    pour tester instantanément sur votre téléphone.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Phone mockup placeholder */}
                <div className="relative flex-shrink-0 animate-fade-in-up [animation-delay:300ms]">
                    <div className="animate-float">
                        <div className="relative h-[520px] w-[260px] overflow-hidden rounded-[2.5rem] border-[6px] border-slate-800 bg-slate-900 shadow-2xl shadow-slate-900/30">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-slate-800" />
                            {/* Screen content */}
                            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-indigo-600 via-indigo-700 to-purple-800 px-6">
                                <div className="m-6 flex w-full flex-col gap-2.5">
                                    {[1].map((i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-sm"
                                        >
                                            <div className="flex flex-1 flex-col gap-1.5">
                                                <div className="h-2 w-3/4 rounded-full " />
                                                <div className="h-1.5 w-1/2 rounded-full " />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                    <Mic className="h-10 w-10 text-white" />
                                </div>
                                <p className="text-center text-sm font-medium text-white/90">
                                    Appuyez pour enregistrer
                                </p>
                                <div className="mt-8 h-1.5 w-32 rounded-full bg-white/20" />
                                <div className="mt-3 h-1.5 w-20 rounded-full bg-white/15" />
                                <div className="mt-6 flex w-full flex-col gap-2.5">
                                    {[1, 2].map((i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-sm"
                                        >
                                            <div className="h-8 w-8 rounded-full bg-white/20" />
                                            <div className="flex flex-1 flex-col gap-1.5">
                                                <div className="h-2 w-3/4 rounded-full bg-white/25" />
                                                <div className="h-1.5 w-1/2 rounded-full bg-white/15" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Decorative glow */}
                    <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-indigo-400/10 blur-3xl" />
                </div>
            </div>
        </section>
    );
}
