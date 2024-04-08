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

export async function fetchAnswers(title:string) {
    try {
        const answers = await db?.answer.findMany({
            where: {
                question: {
                    title: title,
                }
            },
            include: {
                question: true,
            }
        });
        return answers;
    } catch (error) {
        console.error(error);
        throw new Error(
            "Could not fetch answer right now. Please try again later. "
        );
    }
}

