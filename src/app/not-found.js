
"use client";

import React from "react";
import { Button, Surface, Description } from "@heroui/react";

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

            <Surface className="max-w-md w-full p-8 text-center rounded-2xl border border-gray-200 shadow-sm">

                <h1 className="text-8xl font-bold text-blue-600">
                    404
                </h1>

                <h2 className="text-2xl font-bold text-gray-800 mt-4">
                    Page Not Found!
                </h2>

                <Description className="mt-3 text-red-500">
                    Sorry, the page you are looking for
                    does not exist.
                </Description>

                <div className="mt-8">
                    <Button
                        color="primary"
                        onPress={() => window.location.href = "/"}
                    >
                        Back to Home
                    </Button>
                </div>

            </Surface>

        </div>
    );
};

export default NotFound;
