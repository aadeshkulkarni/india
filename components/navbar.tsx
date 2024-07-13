"use client";
import React, { useEffect, useState } from "react";
import CreatePost from "./create-post";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";

const Navbar = () => {
  const session = useSession();
  const isAuthenticated = session.status === "authenticated";
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <header className="p-4 border border-gray-100 w-full flex justify-between items-center px-16">
      <h1 className="text-lg">India</h1>
      <div className="flex gap-4">
        <CreatePost />
        {isAuthenticated ? (
          <Button
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </Button>
        ) : (
          <Button
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              signIn("google", { callbackUrl: "/", redirect: true });
            }}
          >
            Sign In
          </Button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
