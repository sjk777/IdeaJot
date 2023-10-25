"use client";

import {useParams, useRouter } from "next/navigation";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Item } from "./item";
import { cn } from "@/lib/utils";
import { FileIcon } from "lucide-react";

//interface with DocumentList that states the level and data (for nesting purposes) and data
interface DocumentListProps{
    parentDocumentId?: Id<"documents">;
    level?: number;
    data?: Doc<"documents">[];
}


export const DocumentList = ({
    parentDocumentId,
    level= 0
}: DocumentListProps) => {
    const params = useParams();
    const router = useRouter();
    //type of the useState will take in a string and a boolean
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});
    
    //updates the component's state using the setExpanded function, and toggles the expansion state of a document identified by its 'documentId'
    // common way to toggl expansion of elements in a list of similiar UI components
    const onExpand = (documentId: string) =>{
        setExpanded(prevExpanded =>({
            ...prevExpanded,
            [documentId]: !prevExpanded[documentId]
        }));
    };

    //redirect user to a document page to the listed URL in push
    const onRedirect = (documentId: string) => {
        router.push(`/documents/${documentId}`)
    };

    const documents = useQuery(api.documents.getSidebar, {
        parentDocument: parentDocumentId
            });
    
    //convex will not display undefined unless it is loading, so we check for that here
    if(documents === undefined){
        return(
            <>
            <Item.Skeleton level={level} />
            {level === 0 && (
                <>
                <Item.Skeleton level={level} />
                <Item.Skeleton level={level} />
                </>
            )}
            </>
        );
    };


    return(
        <>
        <p
            style={{paddingLeft: level ? `${(level * 12) +25}px`: undefined
        }}
        className={cn(
            "hidden text-sm font-medium text-muted-foreground/80",
            //if its expanded give it a class of last:block if level is 0 gives it hidden
        
            expanded && "last:block",
            level === 0 && "hidden"
        )}
        >
            this is empty
        </p>
        {documents.map((document) =>(
            <div key={document._id}>
                <Item
                    id={document._id}
                    onClick ={() => onRedirect(document._id)}
                    label = {document.title}
                    icon= {FileIcon}
                    documentIcon={document.icon}
                    active={params.documentId === document._id}
                    level ={level}
                    onExpand={() => onExpand(document._id)}
                    expanded={expanded[document._id]}
                    />
                       {expanded[document._id] && (
                <DocumentList
                    parentDocumentId={document._id}
                    level={level + 1}
                />
                    )}
            </div>
        ))};
        </>
    )
}

