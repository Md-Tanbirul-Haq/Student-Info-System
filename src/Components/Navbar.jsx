"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';

const Navbar = () => {
    return (
        <nav className="w-full border-b shadow-sm bg-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    Student Info System
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                    <Link href="/Home">Home</Link>

                    <Link href="/Student">Students</Link>

                    <Link href="/Add_student">Add Student</Link>

                    <Link href="/dashboard">Dashboard</Link>
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-3">
                    <Button as={Link} href="/login" color="primary">
                        Login
                    </Button>

                    <Button as={Link} href="/register" variant="bordered">
                        Register
                    </Button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
