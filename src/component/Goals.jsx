import Image from "next/image";
import Link from "next/link";

const goals = [
    {
        id: "environment",
        branchNum: "01",
        title: "Environment and Climate",
        tagline: "Eco Resilience & Green Action",
        image: "/climate.jpg",
        route: "/goals/environment",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        description:
            "Restoring ecosystems and building climate resilience for vulnerable delta communities.",
        initiatives: [
            "Afforestation & Mangrove Shield Initiatives",
            "River Preservation & Anti-Plastic Cleanups",
            "Disaster Rapid Response & Climate Adaptation Kits",
            "Renewable Energy & Eco-Sanitation in Coastal Belts",
        ],
        targetMetric: "Target: 250K Trees Planted by 2027",
    },
    {
        id: "education",
        branchNum: "02",
        title: "Education and Awareness",
        tagline: "Universal Learning & Civic Literacy",
        image: "/education.jpg",
        route: "/goals/education",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        description:
            "Equipping underprivileged youth with quality education, digital skills, and civic knowledge.",
        initiatives: [
            "Grassroots Learning Centers in Slums & Remote Chars",
            "Digital Literacy & Vocational Coding Hubs",
            "Full Scholarships & Annual School Supply Packages",
            "Civic Literacy, Ethics & Critical Thinking Workshops",
        ],
        targetMetric: "Target: 50,000+ Students Supported",
    },
    {
        id: "community",
        branchNum: "03",
        title: "Community Care and Inclusion",
        tagline: "Dignity, Health & Equal Opportunity",
        image: "/care.jpg",
        route: "/goals/community",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        description:
            "Empowering vulnerable communities through healthcare, shelter, and self-reliance programs.",
        initiatives: [
            "Free Rural Medical Camps & Telehealth Access",
            "Disability Accessibility & Assistive Mobility Aid",
            "Emergency Food Security & Winter Relief Drives",
            "Women's Micro-Enterprise & Livelihood Seed Grants",
        ],
        targetMetric: "Target: 100+ Free Healthcare Camps",
    },
    {
        id: "youth",
        branchNum: "04",
        title: "Youth Voice and Social Justice",
        tagline: "Empowered Leaders & Systemic Change",
        image: "/awarness.jpg",
        route: "/goals/youth",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
        ),
        description:
            "Mobilizing youth changemakers advocating for democratic rights and social justice.",
        initiatives: [
            "National Youth Civic Action & Debate Forums",
            "Anti-Corruption & Transparency Youth Councils",
            "Legal Rights & Human Rights Advocacy Clinics",
            "Grassroots Social Innovation & Activism Incubator",
        ],
        targetMetric: "Target: 15,000+ Active Youth Ambassadors",
    },
];

export default function Goals() {
    return (
        <section className="relative w-full overflow-hidden bg-slate-50 py-24 sm:py-32 font-sans">
            {/* Subtle background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
                <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#39B54A]/10 blur-3xl" />
                <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[#0a2a66]/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#0a2a66]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0a2a66]">
                        <span className="h-2 w-2 rounded-full bg-[#0a2a66]" />
                        Strategic Framework
                    </div>
                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0a2a66] sm:text-4xl lg:text-5xl">
                        Our Core <span className="text-[#39B54A]">Goals & Pillars</span>
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                        Structured like an evergreen tree: rooted in deep community values, branching outward into four vital domains to transform Bangladesh sustainably.
                    </p>
                </div>

                {/* Tree Structure Visualization */}
                <div className="relative mt-16 lg:mt-24">
                    {/* Tree Crown / Apex Root Node */}
                    <div className="mx-auto flex max-w-md flex-col items-center text-center">
                        <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#0a2a66] to-[#0d3a8c] text-[#39B54A] shadow-xl ring-4 ring-white">
                            <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18m0-18l-4 5m4-5l4 5m-4 13l-6-4m6 4l6-4m-6-4l-5-3m5 3l5-3" />
                            </svg>
                        </div>
                        <div className="mt-3 inline-block rounded-full bg-[#0a2a66] px-5 py-1 text-xs font-bold uppercase tracking-wider text-[#39B54A]">
                            Core Mission Trunk
                        </div>
                        <h3 className="mt-1 text-lg font-bold text-[#0a2a66]">
                            Sustainable • Just • Self-Reliant Bangladesh
                        </h3>
                    </div>

                    {/* Central Tree Trunk Line (Desktop) */}
                    <div className="hidden lg:block absolute left-1/2 top-24 bottom-16 -translate-x-1/2 w-1.5 bg-gradient-to-b from-[#0a2a66] via-[#0a2a66]/40 to-[#0a2a66]/10 rounded-full" />

                    {/* Mobile Trunk Line */}
                    <div className="lg:hidden absolute left-6 sm:left-8 top-24 bottom-16 w-1 bg-gradient-to-b from-[#0a2a66] via-[#0a2a66]/40 to-[#0a2a66]/10 rounded-full" />

                    {/* Branches List */}
                    <div className="mt-12 space-y-12 lg:space-y-16">
                        {goals.map((goal, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <div
                                    key={goal.id}
                                    className={`relative flex flex-col lg:flex-row items-center ${isLeft ? "lg:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* Desktop Side Spacer */}
                                    <div className="hidden lg:block lg:w-1/2" />

                                    {/* Central Branch Node Pin (Desktop) */}
                                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-20 items-center justify-center">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-[#39B54A] font-bold text-xs text-white shadow-md transition-transform hover:scale-110">
                                            {goal.branchNum}
                                        </div>
                                    </div>

                                    {/* Branch Card Container */}
                                    <div
                                        className={`w-full pl-14 sm:pl-16 lg:pl-0 lg:w-1/2 ${isLeft ? "lg:pr-12" : "lg:pl-12"
                                            }`}
                                    >
                                        {/* Mobile Node Pin */}
                                        <div className="lg:hidden absolute left-6 sm:left-8 -translate-x-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#0a2a66] text-xs font-bold text-[#39B54A] shadow">
                                            {goal.branchNum}
                                        </div>

                                        {/* The Branch Card — Background Image at 70% visibility */}
                                        <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
                                            {/* Background Image — 70% visible */}
                                            <div className="absolute inset-0">
                                                <Image
                                                    src={goal.image}
                                                    alt={goal.title}
                                                    fill
                                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                                    className="object-cover object-center opacity-40 transition-transform duration-700 ease-out group-hover:scale-105"
                                                />
                                                {/* Dark overlay for text readability */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
                                            </div>

                                            {/* Card Content */}
                                            <div className="relative z-10 p-6 sm:p-8">
                                                {/* Top Row: Badge + Icon */}
                                                <div className="flex items-center justify-between">
                                                    <span className="inline-flex items-center rounded-full bg-[#39B54A] px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white">
                                                        Branch {goal.branchNum}
                                                    </span>
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/30">
                                                        {goal.icon}
                                                    </div>
                                                </div>

                                                {/* Title + Short Description */}
                                                <div className="mt-5">
                                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#39B54A]">
                                                        {goal.tagline}
                                                    </p>
                                                    <h4 className="mt-1 text-2xl font-bold text-white sm:text-3xl drop-shadow-sm">
                                                        {goal.title}
                                                    </h4>
                                                    <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
                                                        {goal.description}
                                                    </p>
                                                </div>

                                                {/* See Details Link */}
                                                <div className="mt-6">
                                                    <Link
                                                        href={goal.route}
                                                        className="inline-flex items-center gap-2 rounded-lg bg-[#39B54A] px-5 py-2.5 text-sm font-bold text-white shadow transition-all duration-200 hover:bg-[#2F9E3F] hover:shadow-md"
                                                    >
                                                        See Details
                                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Tree Roots Base Callout */}
                    <div className="relative mt-16 pt-8 text-center">
                        <div className="mx-auto inline-flex items-center gap-2 rounded-2xl bg-[#0a2a66] px-6 py-4 text-white shadow-lg">
                            <svg className="h-5 w-5 text-[#39B54A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span className="text-sm font-semibold">
                                Deeply Rooted in Grassroots Communities Across All 64 Districts
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
