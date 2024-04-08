"use client";

import { fetchAnswers } from "@/lib/data";
import { useContext, useEffect, useState } from "react";
import { TitleContext } from "@/lib/providers";
import { AnswerType } from "@/lib/definitions";

export default function AnswerCard() {
    const title = useContext(TitleContext);
    const [answers, setAnswers] = useState<AnswerType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchAnswers(title);
                setAnswers(response);
            } catch (error) {
                console.log(error);
                throw new Error("Could not fetch answers right now. Please try again later. ");
            }
        };
        if (title) {
            fetchData();
        }
    }, [title]);

    return (
        <section>
            <div>
                {answers.map((answer) => (
                    <p key={answer.id}>{answer.answer}</p>
                ))}
            </div>
        </section>
    );
}
