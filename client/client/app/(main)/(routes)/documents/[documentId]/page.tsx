import { BlockNoteEditor } from "@blocknote/core";
import{Editor} from "@/components/editor";
import { useQuery } from "convex/react";
import { useMemo } from "react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";


interface DocumentIdPageProps{
    params:{
        documentId: Id<"documents">;
    };
};

