"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
    {
        label: "Home",
        href: "/",
        children: [
            { label: "Home One", href: "/" },
            { label: "Home Two", href: "/home-two" },
        ],
    },
    {
        label: "Pages",
        href: "/pages",
        children: [
            { label: "About Us", href: "/about" },
            { label: "Our Team", href: "/team" },
            { label: "FAQ", href: "/faq" },
        ],
    },
    {
        label: "Blog",
        href: "/blog",
        children: [
            { label: "Blog List", href: "/blog" },
            { label: "Blog Details", href: "/blog/details" },
        ],
    },
    { label: "Causes", href: "/causes" },
    {
        label: "Shop",
        href: "/shop",
        children: [
            { label: "Products", href: "/shop" },
            { label: "Cart", href: "/cart" },
        ],
    },
    {
        label: "Contact",
        href: "/contact",
        children: [
            { label: "Contact Us", href: "/contact" },
            { label: "Locations", href: "/locations" },
        ],
    },
];

function Chevron({ open = false }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""
                }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M6 9l6 6 6-6" />
        </svg>
    );
}

export default function Navbar() {
    const [active, setActive] = useState("Home"); // highlighted item
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileSub, setMobileSub] = useState(null);

    return (
        <header className="relative z-50 w-full bg-white font-sans">
            <div className="mx-auto flex h-[110px] max-w-[1400px] items-stretch justify-between px-4 lg:px-10">
                <Link href="/" className="my-auto flex items-center">
                    <Image
                        src="/logo.jpg"
                        alt="Logo"
                        width={85}
                        height={85}
                        className="h-[85px] w-[85px] rounded-full object-cover"
                        priority
                    />
                </Link>

                {/* Desktop menu */}
                <nav className="hidden items-stretch lg:flex" aria-label="Main">
                    <ul className="flex items-stretch">
                        {navItems.map((item) => {
                            const isActive = active === item.label;
                            return (
                                <li key={item.label} className="group relative flex items-stretch">
                                    <Link
                                        href={item.href}
                                        onClick={() => setActive(item.label)}
                                        className={`flex items-center gap-1 px-6 text-[19px] font-medium transition-colors ${isActive
                                            ? "bg-[#39B54A] text-white"
                                            : "text-[#0a2a66] hover:bg-[#39B54A]/60"
                                            }`}
                                    >
                                        {item.label}
                                        {item.children && <Chevron />}
                                    </Link>

                                    {item.children && (
                                        <ul className="invisible absolute left-0 top-full min-w-[200px] translate-y-2 bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                            {item.children.map((child) => (
                                                <li key={child.label}>
                                                    <Link
                                                        href={child.href}
                                                        className="block px-5 py-2.5 text-[16px] text-[#0a2a66] hover:bg-[#39B54A] hover:text-white"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    <div className="ml-8 flex items-center">
                        <Link
                            href="/donate"
                            className="rounded-[4px] bg-[#0a2a66] px-10 py-[26px] text-[17px] font-semibold uppercase leading-none text-white transition-colors hover:bg-[#0d3a8c]"
                        >
                            Donate Now
                        </Link>
                    </div>
                </nav>

                {/* Mobile toggle */}
                <button
                    type="button"
                    onClick={() => setMobileOpen((v) => !v)}
                    className="my-auto rounded p-2 text-[#0a2a66] lg:hidden"
                    aria-label="Toggle menu"
                    aria-expanded={mobileOpen}
                >
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        {mobileOpen ? (
                            <path d="M6 6l12 12M18 6L6 18" />
                        ) : (
                            <path d="M4 7h16M4 12h16M4 17h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <nav className="border-t border-slate-200 bg-white lg:hidden" aria-label="Mobile">
                    <ul className="px-4 py-2">
                        {navItems.map((item) => (
                            <li key={item.label} className="border-b border-slate-100">
                                <div className="flex items-center justify-between">
                                    <Link
                                        href={item.href}
                                        onClick={() => {
                                            setActive(item.label);
                                            if (!item.children) setMobileOpen(false);
                                        }}
                                        className={`flex-1 px-3 py-3 text-[17px] font-medium text-[#0a2a66] ${active === item.label ? "bg-[#39B54A] text-white" : ""
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                    {item.children && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setMobileSub(mobileSub === item.label ? null : item.label)
                                            }
                                            className="p-3 text-[#0a2a66]"
                                            aria-label={`Toggle ${item.label} submenu`}
                                        >
                                            <Chevron open={mobileSub === item.label} />
                                        </button>
                                    )}
                                </div>
                                {item.children && mobileSub === item.label && (
                                    <ul className="pb-2 pl-6">
                                        {item.children.map((child) => (
                                            <li key={child.label}>
                                                <Link
                                                    href={child.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="block py-2 text-[15px] text-[#0a2a66]"
                                                >
                                                    {child.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="px-4 pb-4">
                        <Link
                            href="/donate"
                            className="block rounded bg-[#0a2a66] py-4 text-center font-semibold uppercase text-white"
                        >
                            Donate Now
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
}