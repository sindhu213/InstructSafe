import { fetchAnswers } from "@/lib/data";
import { renderPublishedTime } from "@/lib/utils";

export default async function AnswerCard({ title }: { title: string }) {
    const answers = await fetchAnswers(title);
    return (
        <section>
            <div>
                <h1 className="underline mb-0 text-rose-600">{title}</h1>
                {answers.map((answer) => (
                    <section
                        key={answer.id}
                        className="border-solid p-5 w-1/2 m-3"
                    >
                        <p className="text-lg">{answer.answer}</p>
                        <section className="flex text-sm font-semibold justify-between">
                            <p>
                                Published at:{" "}
                                {renderPublishedTime(answer.publishedAt)}
                            </p>
                        </section>
                    </section>
                ))}
            </div>
        </section>
    );
}
