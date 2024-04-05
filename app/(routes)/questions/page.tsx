import { Button, QuestionCard } from "@/components";
import Link from "next/link";
import { fetchOpenQuestions } from "@/lib/data";
import { QuestionType } from "@/lib/definitions";

export default async function Page() {
    const questions: QuestionType[] = await fetchOpenQuestions();

    return (
        <main>
            <h1 className="underline">Public questions</h1>
            <div className="add">
                <p>Could not find a related question? Ask now!</p>
                <Link href="/questions/ask">
                    <Button innerText="Ask a question" />
                </Link>
            </div>
            
            <hr />
            
            <div className="questions">
                <h2 className="underline">List of open questions</h2>
            </div>

            {questions.map((question) => (
                <QuestionCard key={question.id} params={question}/>
            ))}
        </main> 
    );
}
