"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import NotesBoard from "@/components/notes/NotesBoard";
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const NotesMainContent = () => {
    const [userName, setUserName] = useState<string>("");
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUserName(localStorage.getItem("user_name") || "");
        }
    }, []);

    const handleSignOut = async () => {
        // Remove cookies instead of localStorage
        Cookies.remove("accessToken");
        Cookies.remove("user_name");
        router.push("/");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-4 md:p-8 ">
            <div className="max-w-7xl mx-auto">
                {/* Header with user info */}
                <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                                Welcome back, {userName}!
                            </h1>
                            <p className="text-gray-600 mt-1">
                                Organize your thoughts with sticky notes.
                            </p>
                        </div>
                        <Button
                            variant="outline"
                            onClick={handleSignOut}
                            className="border-red-500 text-red-500 hover:bg-red-50"
                        >
                            Sign Out
                        </Button>
                    </div>
                </div>

                {/* Main content - Notes Board */}
                <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
                    <NotesBoard />
                </div>
            </div>
        </div>
    );
}

export default NotesMainContent