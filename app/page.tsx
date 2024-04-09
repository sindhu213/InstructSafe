import Link from "next/link";
import { Button } from "@/components";

export default function Page() {
    return (
        <main>
            <Link href="/questions">
                <Button innerText="Ask/Answer a question" />
            </Link>
            <Link href="/notification">
                <Button innerText="View notifications"/> 
            </Link>
        </main>
    );
}
