"use client";
import { createAnswer } from "@/lib/actions";
import { Button } from "@/components";
import { useSearchParams } from "next/navigation";

export default function Page() {
    const searchParams = useSearchParams();
    const title = searchParams.get("title");

    return (
        <section className="answer">
            <form action={createAnswer} className="w-1/2">
                <h1 className="underline">Answer the question</h1>
                <fieldset className="my-4">
                    <legend className="font-extrabold">Question</legend>
                    <label htmlFor="title">{title}</label>
                    <input type="hidden" name="title" value="title" />
                    <br />
                </fieldset>

                <fieldset className="my-4">
                    <legend className="font-extrabold">Answer</legend>
                    <label htmlFor="answer">
                        What are the details of your answer?
                    </label>
                    <br />
                    <textarea
                        name="answer"
                        id="answer"
                        cols={50}
                        rows={10}
                        required
                    ></textarea>
                </fieldset>

                <fieldset className="my-4">
                    <legend className="font-extrabold" aria-required="true">
                        Notification
                    </legend>
                    <label htmlFor="notification">
                        Enable notifications for discussions regarding this
                        question.
                    </label>
                    <br />
                    <div>
                        <input
                            type="radio"
                            id="yes"
                            name="alerts"
                            value="on"
                            required
                        />
                        <label htmlFor="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="alerts" value="off" />
                        <label htmlFor="no">No</label>
                    </div>
                </fieldset>

                <div className="button">
                    <Button params='type:"submit"' innerText="Submit" />
                </div>
            </form>
        </section>
    );
}
