"use client";

import { useState } from "react";
import { Doc } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import {Input} from "@/components/ui/input";

interface TitleProps{
    initialData: Doc<"documents">;
};

const Title = ({
    initialData
}: TitleProps) => {
    const update= useMutation(api.documents.update)
    return ( 
        <div className=" flex- items-center gap-x-1">
            {!!initialData.icon && <p>{initialData.icon}</p>}
            {isEditing ? (
                <Input
            )}
        </div>
     );
}
 
export default Title;