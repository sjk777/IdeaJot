"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
//import Toolbar from "@/components/toolbar";
import { Editor } from "@/components/editor";

interface DocumentIdPageProps{
    params:{
        documentId: Id<"documents">;
    };
};

const DocumentIdPage = ({
    params
}: DocumentIdPageProps) => {
    const update = useMutation(api.documents.update);
    const onChange= (content: string) => {
        update({
            id:params.documentId,
            content
        })
    }

    const document= useQuery(api.documents.getById, {
        documentId:params.documentId
    });

    if(document === undefined){
        return(
            <div>Loading...</div>
        )
    }

    return ( 
        <div className="pb-40">
            <div className="h-[15vh]"/>
            <div className="md:max-w-3xl lg:max-w-4xl mx-auo">
                <Editor 
                onChange={onChange}
                initialContent={document.content}/>
            </div>
        </div>
     );
}
 
export default DocumentIdPage;

