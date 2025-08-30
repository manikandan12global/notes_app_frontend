import React from "react";
import AuthForm from "@/components/auth/AuthForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication - StickyNotes",
  description: "Login or register for your account",
};


export default async function Page() {

  const initialTab = "login"


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 to-orange-50 p-4">
      <div className="w-full max-w-md">
        <AuthForm initialTab={initialTab} />
      </div>
    </div>
  );
}
