"use client";
import { AnswerCard } from "@/components";
import { useSearchParams } from "next/navigation";
import { TitleContext } from "@/lib/providers";


export default function Page(){
    const searchParams = useSearchParams();
    const title = searchParams.get('title') ?? " ";
    
    return (
        <TitleContext.Provider value={title}>
            <AnswerCard />
        </TitleContext.Provider>
    )
}