
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@heroui/react';

const HomePage = () => {
    return (
        <main className="max-w-7xl mx-auto px-5 my-5">

            {/* Hero Section */}
            <section className="relative min-h-[550px] flex items-center overflow-hidden rounded-2xl">

                {/* Banner Image */}
                <Image
                    src="/banner.png"
                    alt="Education Banner"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Content */}
                <div className="relative z-10 w-full md:w-1/2 p-8 md:p-12">

                    <span className="text-blue-600 font-semibold text-sm">
                        WELCOME TO Student Info System
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight">
                        Student Management
                        <span className="text-blue-600"> System</span>
                    </h1>

                    <p className="text-gray-600 mt-5 text-base md:text-lg leading-relaxed">
                        Manage student information, track records,
                        and organize academic activities easily
                        with our simple and secure platform.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-8">

                        <Link
                            href="/students"
                            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                        >
                            Explore Students
                        </Link>

                        <Link
                            href="/login"
                            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
                        >
                            Get Started
                        </Link>

                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-6 mt-10 text-sm font-medium text-gray-700">

                        <span> Easy Management</span>
                        <span> Secure Access</span>
                        <span> Fast & Reliable</span>

                    </div>

                </div>

            </section>


            <section className="py-16">

                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Our Features
                    </h2>


                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="p-6 rounded-xl border shadow-sm">
                        <h3 className="text-xl font-semibold text-blue-600">
                            Student Management
                        </h3>
                        <p className="text-gray-500 mt-3">
                            Easily add, view, update and delete student records.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl border shadow-sm">
                        <h3 className="text-xl font-semibold text-blue-600">
                            Secure Authentication
                        </h3>
                        <p className="text-gray-500 mt-3">
                            Secure login and registration with authentication.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl border shadow-sm">
                        <h3 className="text-xl font-semibold text-blue-600">
                            Easy Dashboard
                        </h3>
                        <p className="text-gray-500 mt-3">
                            Manage and monitor student information easily.
                        </p>
                    </div>

                </div>

            </section>

        </main>
    );
};

export default HomePage;
