import { Button } from "@/components";
import Link from "next/link";

export default function Page() {
    return (
        <main>
            <Link href="/questions/ask">
                <Button param="Ask Question" />
            </Link>

            <Link href="#">
                <Button param="Answer Question" />
            </Link>
        </main>
    );
}
