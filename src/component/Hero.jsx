import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-110px)] w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/banner.jpg"
                    alt="Change Bangladesh Banner"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
                {/* Gradient Overlays for Readability and Depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#071b40]/95 via-[#0a2a66]/80 to-[#0a2a66]/50" />
                <div className="absolute inset-0 bg-black/25" />
            </div>

            {/* Content Container */}
            <div className="relative mx-auto flex w-full max-w-[1400px] flex-col justify-center px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#39B54A] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm sm:text-sm">
                        <span className="flex h-2 w-2 rounded-full bg-white animate-pulse"></span>
                        Empowering Communities • Inspiring Change
                    </div>

                    {/* Headline */}
                    <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Building a Brighter, <br className="hidden sm:inline" />
                        <span className="text-[#39B54A]">Equitable Future</span> for Bangladesh
                    </h1>

                    {/* Subheading */}
                    <p className="mt-6 max-w-2xl text-lg text-slate-200 sm:text-xl leading-relaxed">
                        Join our nationwide mission to support underprivileged communities, provide quality education,
                        deliver emergency relief, and nurture sustainable development for every citizen.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
                        <Link
                            href="/donate"
                            className="inline-flex items-center justify-center rounded-md bg-[#39B54A] px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-200 hover:bg-[#2F9E3F] hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Donate Now
                            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                        <Link
                            href="/causes"
                            className="inline-flex items-center justify-center rounded-md border-2 border-white/80 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-[#0a2a66]"
                        >
                            Explore Causes
                        </Link>
                    </div>
                </div>

                {/* Impact Stats Grid */}
                <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-4 sm:gap-6 lg:mt-24">
                    <div className="rounded-lg bg-white/5 p-4 backdrop-blur-xs border border-white/10">
                        <div className="text-3xl font-extrabold text-[#39B54A] sm:text-4xl">50K+</div>
                        <div className="mt-1 text-sm font-medium text-slate-300">Lives Impacted</div>
                    </div>
                    <div className="rounded-lg bg-white/5 p-4 backdrop-blur-xs border border-white/10">
                        <div className="text-3xl font-extrabold text-[#39B54A] sm:text-4xl">64</div>
                        <div className="mt-1 text-sm font-medium text-slate-300">Districts Covered</div>
                    </div>
                    <div className="rounded-lg bg-white/5 p-4 backdrop-blur-xs border border-white/10">
                        <div className="text-3xl font-extrabold text-[#39B54A] sm:text-4xl">120+</div>
                        <div className="mt-1 text-sm font-medium text-slate-300">Active Projects</div>
                    </div>
                    <div className="rounded-lg bg-white/5 p-4 backdrop-blur-xs border border-white/10">
                        <div className="text-3xl font-extrabold text-[#39B54A] sm:text-4xl">100%</div>
                        <div className="mt-1 text-sm font-medium text-slate-300">Direct Impact</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
