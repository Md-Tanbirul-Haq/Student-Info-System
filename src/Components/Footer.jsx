
"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Logo & Description */}
                    <div>
                        <h2 className="text-2xl font-bold">
                            Student <span className="text-blue-400">Info System</span>
                        </h2>

                        <p className="text-gray-400 mt-4 text-sm leading-6">
                            A simple and reliable platform to manage
                            student information and academic records
                            efficiently.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li>
                                <Link href="/" className="hover:text-blue-400">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/students" className="hover:text-blue-400">
                                    Students
                                </Link>
                            </li>
                            <li>
                                <Link href="/add-student" className="hover:text-blue-400">
                                    Add Student
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-blue-400">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Contact Us
                        </h3>

                        <p className="text-gray-400 text-sm mb-3">
                            Email: **********
                        </p>

                        <p className="text-gray-400 text-sm">
                            Student Info System
                        </p>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">

                    <p className="text-gray-400 text-sm">
                        © 2026  Student Info System. All rights reserved.
                    </p>




                </div>

            </div>
        </footer>
    );
};

export default Footer;
