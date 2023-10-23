"use client";

import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
    const {isAuthenticated, isLoading} = useConvexAuth();
    return(
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Welcome to <span className="underline"> ideaJot</span>.
            </h1>
            <h3 className="text-basem sm:text-xl md:text-2xl font-medium">
                Your partner for everyday organization 
            </h3>
            {/* hiding the button in the to display if they are authentication or not */}
            {isLoading && (
                <div className="w-full flex items=center justify-center">Loading...</div>
            )}
            {isAuthenticated && !isLoading && (
                 <Button asChild>
                    <Link href="/documents">
                    
                 Enter ideaJot
                 <ArrowRight className="h-4 w-4 ml-2"/>
                 </Link>
             </Button>
            )}
            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button>
                        Get ideaJot Free
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </SignInButton>
            )}
        
        </div>
    )
}

