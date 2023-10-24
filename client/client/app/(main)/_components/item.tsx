"use client";

import {ChevronDown, ChevronRight, LucideIcon } from "lucide-react";

import { Id } from "@/convex/_generated/dataModel";


interface ItemProps {
    id?: Id<"documents">;
    documentIcon?: string;
    active?: boolean;
    expanded?: boolean;
    isSearch?: boolean;
    level?: number;
    onExpand?: () => void;
    label: string;
    onClick: () => void;
    icon: LucideIcon;
};

export const Item = ({
    id,
    active,
    documentIcon,
    isSearch,
    level=0,
    onExpand,
    expanded,
    label,
    onClick,
    icon: Icon,
}: ItemProps) => {
    const ChevronIcon = expanded ? ChevronDown : ChevronRight;


    return(
        <div
        onClick= {onClick}
        role="button"
        /* Math used to distinguish what level the current document is on, and how deep the parent goes */
        style={{paddingLeft: level? `${level *12 + 12}px`:"12px"}}
        className={cn("group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted foreground font-medium"
                    active && "bg-primary/5 text-primary")}
        >
        /* double exclamation mark is used to convert the value to a boolean */
            {!!id && (

            )}
            <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground"/>
            <span className="truncate">
                {label}
            </span>

        </div>
    )
}