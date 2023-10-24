"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react"
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";

import { api } from "@/convex/_generated/api";
import {Button} from "@/components/ui/button";

const DocumentsPage = () => {
    const {user} = useUser();
    const create = useMutation(api.documents.create);

    const onCreate = () =>{
        const promise = create({title: "Untitled"});

        toast.promise(promise, {
            loading: "Creating new note for you!",
            success: "New note created!",
            error: "Unable to create a new Note, please try again."
        });
    }

    return(
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src = "/empty.png"
                height ="300"
                width="300"
                alt="empty"
                />
                <h2 className="text-lg font-medium">
                    Welcome to {user?.firstName}&apos;s ideaJot!
                </h2>
                <Button onClick={onCreate}>
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Create a note
                </Button>
                
        </div>
    );
}

export default DocumentsPage;