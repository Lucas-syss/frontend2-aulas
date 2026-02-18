"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-gray-900 text-white shadow-md rounded-xl">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="hidden md:flex space-x-6">
                        <Link 
                            href="/" 
                            className="hover:text-blue-400 transition-colors"
                        >
                            Home
                        </Link>
                        <Link 
                            href="/about" 
                            className="hover:text-blue-400 transition-colors"
                        >
                            About
                        </Link>
                        <Link 
                            href="/contact" 
                            className="hover:text-blue-400 transition-colors"
                        >
                            Contact
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none"
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
                    <Link 
                        href="/" 
                        className="block hover:text-blue-400"
                    >
                        Home
                    </Link>
                    <Link 
                        href="/about" 
                        className="block hover:text-blue-400"
                    >
                        About
                    </Link>
                    <Link 
                        href="/contact" 
                        className="block hover:text-blue-400"
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
