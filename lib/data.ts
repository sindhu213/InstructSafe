import { db } from "@/lib/prismadb";

export async function fetchOpenQuestions() {
    try {
        const questions = await db?.question.findMany({
            where: {
                open: true,
            },
        });
        return questions;
    } catch (error) {
        console.error(error);
        throw new Error(
            "Could not fetch open questions. Please try again later. "
        );
    }
}
