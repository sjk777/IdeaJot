"use client";

import { Doc, Id } from "@/convex/_generated/dataModel";
import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

//interface with DocumentList that states the level and data (for nesting purposes) and data
interface DocumentListProps{
    parentDocumentId?: Id<"documents">;
    level?: number;
    data?: Doc<"documents">[];
}


export const DocumentList = () => ({
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




    return(
        <div>
            Document List
        </div>
    )
}

