"use client";
import { AnswerCard } from "@/components";
import { useSearchParams } from "next/navigation";

export default function Page(){
    const searchParams = useSearchParams();
    const title = searchParams.get('title') ?? " ";
    
    return (
        <AnswerCard title = {title}/>
    )
}
