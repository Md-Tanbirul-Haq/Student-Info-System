
"use client";

import React from "react";

import {
    Button,
    Description,
    FieldError,
    Fieldset,
    Form,
    Input,
    Label,
    Surface,
    TextArea,
    TextField,

} from "@heroui/react";

import {
    Select,
    ListBox,
} from "@heroui/react";
import toast from "react-hot-toast";

const AddStudentPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        console.log(data);

        try {
            const response = await fetch("http://localhost:5000/add_student", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            toast.success("Student added successfully!"), {
                duration: 3000,

                style: {
                    background: "#333",
                    color: "#fff",
                },

            };
        }
        catch (error) {
            console.error("Error adding student:", error);
            toast.error("Failed to add student. Please try again.", {

            });

        }



    };

    return (
        <div className="bg-gray-50 min-h-screen px-4 py-12">

            <div className="max-w-4xl mx-auto">

                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Add New Student
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Fill in the information below to register a new student.
                    </p>
                </div>

                {/* Form Container */}
                <Surface className="w-full p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">

                    <Form onSubmit={onSubmit}>

                        <Fieldset className="w-full">

                            {/* Personal Information */}
                            <div className="mb-6">
                                <Fieldset.Legend>
                                    Personal Information
                                </Fieldset.Legend>

                                <Description>
                                    Provide basic student details.
                                </Description>
                            </div>

                            <Fieldset.Group className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                <TextField
                                    isRequired
                                    name="name"
                                    validate={(value) => {
                                        if (value.trim().length < 3) {
                                            return "Name must be at least 3 characters";
                                        }
                                        return null;
                                    }}
                                >
                                    <Label>Full Name</Label>
                                    <Input
                                        placeholder="Enter full name"
                                        variant="secondary"
                                    />
                                    <FieldError />
                                </TextField>

                                <TextField isRequired name="studentId">
                                    <Label>Student ID</Label>
                                    <Input
                                        placeholder="Enter student ID"
                                        variant="secondary"
                                    />
                                    <FieldError />
                                </TextField>

                                <TextField name="email" type="email">
                                    <Label>Email Address</Label>
                                    <Input
                                        placeholder="example@email.com"
                                        variant="secondary"
                                    />
                                    <FieldError />
                                </TextField>

                                <TextField isRequired name="phone">
                                    <Label>Phone Number</Label>
                                    <Input
                                        placeholder="Enter phone number"
                                        variant="secondary"
                                    />
                                    <FieldError />
                                </TextField>

                                <TextField name="dateOfBirth">
                                    <Label>Date of Birth</Label>
                                    <Input
                                        type="date"
                                        variant="secondary"
                                    />
                                    <FieldError />
                                </TextField>
                                <Select name="gender" isRequired>
                                    <Label>Gender</Label>

                                    <Select.Trigger>
                                        <Select.Value placeholder="Select Gender" />
                                        <Select.Indicator />
                                    </Select.Trigger>

                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item id="Male">Male</ListBox.Item>
                                            <ListBox.Item id="Female">Female</ListBox.Item>

                                        </ListBox>
                                    </Select.Popover>

                                    <FieldError />
                                </Select>

                            </Fieldset.Group>

                            {/* Academic Information */}
                            <div className="border-t border-gray-200 mt-8 pt-6 mb-6">

                                <Fieldset.Legend>
                                    Academic Information
                                </Fieldset.Legend>

                                <Description>
                                    Enter the students academic details.
                                </Description>

                            </div>

                            <Fieldset.Group className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                <TextField isRequired name="class">
                                    <Label>Class</Label>
                                    <Input
                                        placeholder="Enter class"
                                        variant="secondary"
                                    />
                                    <FieldError />
                                </TextField>

                                <TextField isRequired name="roll">
                                    <Label>Roll Number</Label>
                                    <Input
                                        placeholder="Enter roll number"
                                        variant="secondary"
                                    />
                                    <FieldError />
                                </TextField>

                                <TextField name="department">
                                    <Label>Department</Label>
                                    <Input
                                        placeholder="Enter department"
                                        variant="secondary"
                                    />
                                </TextField>

                                <TextField name="session">
                                    <Label>Academic Session</Label>
                                    <Input
                                        placeholder="e.g. 2025-2026"
                                        variant="secondary"
                                    />
                                </TextField>

                            </Fieldset.Group>

                            {/* Guardian Information */}
                            <div className="border-t border-gray-200 mt-8 pt-6 mb-6">

                                <Fieldset.Legend>
                                    Guardian Information
                                </Fieldset.Legend>

                                <Description>
                                    Provide parent or guardian contact details.
                                </Description>

                            </div>

                            <Fieldset.Group className="w-full gap-5">

                                <TextField name="guardianName">
                                    <Label>Guardian Name</Label>
                                    <Input
                                        placeholder="Enter guardian name"
                                        variant="secondary"
                                    />
                                </TextField>

                                <TextField name="guardianPhone">
                                    <Label>Guardian Phone</Label>
                                    <Input
                                        placeholder="Enter guardian phone"
                                        variant="secondary"
                                    />
                                </TextField>

                                <TextField name="address">
                                    <Label>Address</Label>
                                    <TextArea
                                        placeholder="Enter full address"
                                        variant="secondary"
                                    />
                                </TextField>

                            </Fieldset.Group>

                            {/* Action Buttons */}
                            <Fieldset.Actions className="w-full flex justify-end mt-8 border-t border-gray-200 pt-6">

                                <Button
                                    type="reset"
                                    variant="tertiary"
                                >
                                    Reset
                                </Button>

                                <Button
                                    type="submit"
                                >
                                    Add Student
                                </Button>

                            </Fieldset.Actions>

                        </Fieldset>

                    </Form>

                </Surface>

            </div>

        </div>
    );
};

export default AddStudentPage;
