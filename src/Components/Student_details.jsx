
"use client";

import React from "react";
import {
    Button,
    Description,
    Surface,
    Link,
} from "@heroui/react";

const Student_details = ({ student }) => {

    return (

        <div className="bg-gray-50 min-h-screen px-4 py-12">

            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">
                            Student Details
                        </h1>

                        <Description className="mt-2">
                            View complete student information.
                        </Description>
                    </div>

                    <Link href="/Student">
                        <Button variant="secondary">
                            Back to Student List
                        </Button>
                    </Link>

                </div>

                {/* Student Profile */}
                <Surface className="p-6 rounded-xl border border-gray-200 mb-6">

                    <div className="flex flex-col sm:flex-row items-center gap-5">

                        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-700">
                            {student?.name?.charAt(0)?.toUpperCase() || "S"}
                        </div>

                        <div className="text-center sm:text-left">

                            <h2 className="text-2xl font-bold text-gray-800">
                                {student?.name || "N/A"}
                            </h2>

                            <p className="text-gray-500 mt-1">
                                Student ID: {student?.studentId || "N/A"}
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                Class {student?.class || "N/A"}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Roll {student?.roll || "N/A"}
                            </p>

                        </div>

                    </div>

                </Surface>

                {/* Personal Information */}
                <Surface className="p-6 rounded-xl border border-gray-200 mb-6">

                    <h2 className="text-lg font-semibold text-gray-800 mb-5">
                        Personal Information
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        <Info label="Full Name" value={student?.name} />

                        <Info label="Email Address" value={student?.email} />

                        <Info label="Phone Number" value={student?.phone} />

                        <Info label="Date of Birth" value={student?.dateOfBirth} />

                        <Info label="Gender" value={student?.gender} />

                        <Info label="Address" value={student?.address} />

                    </div>

                </Surface>

                {/* Academic Information */}
                <Surface className="p-6 rounded-xl border border-gray-200 mb-6">

                    <h2 className="text-lg font-semibold text-gray-800 mb-5">
                        Academic Information
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        <Info label="Student ID" value={student?.studentId} />

                        <Info label="Class" value={student?.class} />

                        <Info label="Roll Number" value={student?.roll} />

                        <Info label="Department" value={student?.department} />

                        <Info label="Session" value={student?.session} />

                    </div>

                </Surface>

                {/* Guardian Information */}
                <Surface className="p-6 rounded-xl border border-gray-200 mb-6">

                    <h2 className="text-lg font-semibold text-gray-800 mb-5">
                        Guardian Information
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        <Info
                            label="Guardian Name"
                            value={student?.guardianName}
                        />

                        <Info
                            label="Guardian Phone"
                            value={student?.guardianPhone}
                        />

                    </div>

                </Surface>

                {/* Footer */}
                <div className="flex justify-end">

                    <Link href="/Student">
                        <Button color="primary">
                            Back to Student List
                        </Button>
                    </Link>

                </div>

            </div>

        </div>

    );
};


// Reusable Information Component
const Info = ({ label, value }) => {

    return (
        <div className="bg-gray-100 p-4 rounded-lg  ">
            <p className="text-sm text-gray-500 mb-1">
                {label}
            </p>

            <p className="font-medium text-gray-800 break-words">
                {value || "N/A"}
            </p>
        </div>
    );

};

export default Student_details;
