"use client";

import { QuestionType } from "@/lib/definitions";
import { renderPublishedTime } from "@/lib/utils";
import Link from "next/link";
import { handleUpvotes } from "@/lib/actions";
import { useState } from "react";

export default function QuestionCard({ params }: { params: QuestionType }) {
    const [upvotes, setUpvotes] = useState<number>(params.upvotes);

    const handleClick = async () => {
        try {
          const updatedQuestion = await handleUpvotes(params);
          setUpvotes(updatedQuestion.upvotes);
        } catch (error) {
          console.error("Error upvoting:", error);
        }
    }

    return (
        <div className="border-solid px-3 w-1/2">
            <section className="title flex justify-between my-2">
                <h3 className="underline mb-0 text-rose-600">{params.title}</h3>
                <button onClick={handleClick}>Upvote this question</button>
            </section>

            <section className="metadata flex w-1/2 text-sm font-semibold justify-between">
                <p>Published at: {renderPublishedTime(params.publishedAt)}</p>
                <p>Upvotes: {upvotes}</p>
                <p>Views: {params.views}</p>
            </section>

            <section className="border-solid my-3 px-3">
                <p className="font-semibold underline">Description</p>
                <p>{params.description}</p>
            </section>

            <section className="mb-4">
                <Link href="/questions/answer">
                    <button >Post an answer</button>
                </Link>
            </section>
        </div>
    );
}
