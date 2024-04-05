import Link from "next/link";
import { Button } from "@/components";

export default function Page() {
    return (
        <main>
            <Link href="/questions">
                <Button param="Ask/Answer a question" />
            </Link>
        </main>
    );
}
