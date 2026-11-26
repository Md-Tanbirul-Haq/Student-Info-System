
"use client";

import React, { useEffect, useState } from "react";

import {
    Button,
    Description,
    Input,
    Link,
    Surface,
} from "@heroui/react";

const ViewStudentsPage = () => {

    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    // Get All Students
    useEffect(() => {

        const getStudents = async () => {

            try {
                const response = await fetch(
                    "http://localhost:5000/get_students"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch students");
                }

                const data = await response.json();

                setStudents(Array.isArray(data) ? data : []);

            } catch (error) {
                console.log("Fetch Error:", error);
            } finally {
                setLoading(false);
            }

        };

        getStudents();

    }, []);

    // Search Students
    const filteredStudents = students.filter((student) => {

        const searchValue = String(search ?? "").toLowerCase();

        const studentName = String(student.name ?? "").toLowerCase();

        const studentId = String(student.studentId ?? "").toLowerCase();

        return (
            studentName.includes(searchValue) ||
            studentId.includes(searchValue)
        );

    });

    // Delete Student
    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmDelete) return;

        try {

            const response = await fetch(
                `http://localhost:5000/delete_student/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (!response.ok) {
                throw new Error("Failed to delete student");
            }

            setStudents((previous) =>
                previous.filter((student) => student._id !== id)
            );

        } catch (error) {
            console.log("Delete Error:", error);
        }

    };

    return (

        <div className="bg-gray-50 min-h-screen px-4 py-12">

            <div className="max-w-6xl mx-auto">

                {/* Page Header */}
                <div className="mb-8">

                    <h1 className="text-3xl font-bold text-gray-800">
                        All Students
                    </h1>

                    <Description className="mt-2">
                        Manage and view all registered students.
                    </Description>

                </div>

                {/* Student Information */}
                <Surface className="p-6 rounded-xl border border-gray-200 mb-6">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                        <div>

                            <p className="text-sm text-gray-500">
                                Total Students
                            </p>

                            <h2 className="text-3xl font-bold text-gray-800 mt-1">
                                {students.length}
                            </h2>

                        </div>

                        <Link href="/Add_student"> <Button color="primary">
                            Add New Student
                        </Button></Link>

                    </div>

                </Surface>

                {/* Search */}
                <Surface className="p-5 rounded-xl border border-gray-200 mb-6">

                    <Input
                        className="w-1/2"
                        placeholder="Search by student name or ID."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        variant="secondary"
                    />

                </Surface>

                {/* Student List */}
                <Surface className="rounded-xl border border-gray-200 overflow-hidden">

                    <div className="p-5 border-b border-gray-200">

                        <h2 className="text-lg font-semibold text-gray-800">
                            Student List
                        </h2>

                    </div>

                    {loading ? (

                        <p className="text-center py-10 text-gray-500">
                            Loading students...
                        </p>

                    ) : filteredStudents.length === 0 ? (

                        <p className="text-center py-10 text-gray-500">
                            No students found.
                        </p>

                    ) : (

                        <div className="divide-y divide-gray-200">

                            {filteredStudents.map((student) => (

                                <div
                                    key={student._id}
                                    className="p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 hover:bg-gray-50"
                                >

                                    {/* Student Details */}
                                    <div className="flex items-start gap-4">

                                        <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">

                                            {String(student.name ?? "S")
                                                .charAt(0)
                                                .toUpperCase()}

                                        </div>

                                        <div>

                                            <h3 className="font-semibold text-gray-800">
                                                {student.name}
                                            </h3>

                                            <p className="text-sm text-gray-500 mt-1">
                                                ID: {student.studentId}
                                            </p>

                                            <p className="text-sm text-gray-500">
                                                {student.email || "No email"}
                                            </p>

                                        </div>

                                    </div>

                                    {/* Academic Details */}
                                    <div className="text-sm text-gray-600">

                                        <p>
                                            Class: {student.class}
                                        </p>

                                        <p className="mt-1">
                                            Roll: {student.roll}
                                        </p>

                                        <p className="mt-1">
                                            Phone: {student.phone}
                                        </p>

                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-2">

                                        <Link href={`Student/${student._id}`}>
                                            <Button
                                                size="sm"
                                                variant="secondary"
                                            >
                                                View
                                            </Button>

                                        </Link>

                                        <Button
                                            size="sm"
                                            color="primary"
                                        >
                                            Edit
                                        </Button>

                                        <Button
                                            size="sm"
                                            color="danger"
                                            onPress={() => handleDelete(student._id)}
                                        >
                                            Delete
                                        </Button>

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

                </Surface>

            </div>

        </div>

    );

};

export default ViewStudentsPage;
