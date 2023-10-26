import { BlockNoteEditor } from "@blocknote/core";
import{Editor} from "@/components/editor";
import { useQuery, useMutation } from "convex/react";
import { useMemo } from "react";
import dynamic from "next/dynamic";


import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";


interface DocumentIdPageProps{
    params:{
        documentId: Id<"documents">;
    };
};

const DocumentIdPage = ({
    params
}: DocumentIdPageProps) => {
    const Editor = useMemo(() => dynamic(() => import("@/components/editor"), { ssr: false }) ,[]);

  const document = useQuery(api.documents.getById, {
    documentId: params.documentId
  });

  const update = useMutation(api.documents.update);

  const onChange = (content: string) => {
    update({
      id: params.documentId,
      content
    });
  };

}
