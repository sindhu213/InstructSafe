// Server actions
"use server";
import { z } from "zod";
import { db } from "@/lib/prismadb";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { QuestionType } from "@/lib/definitions";

//CreateQuestion
const CreateQuestion = z.object({
    title: z.string(),
    description: z.string(),
    tagsUnified: z.string(),
    setAlerts: z.enum(["on", "off"]),
});

export async function createQuestion(formdata: FormData) {
    try {
        const { title, description, tagsUnified, setAlerts } =
            CreateQuestion.parse({
                title: formdata.get("title"),
                description: formdata.get("description"),
                tagsUnified: formdata.get("tags"),
                setAlerts: formdata.get("alerts"),
            });
        const tags = tagsUnified
            .split(" ")
            .map((element: String) => element.slice(1));
        const upvotes = 0,
            views = 0;

        if (setAlerts == "on") {
            const Notification = await db.notification.create({
                data: {
                    content: description,
                    type:"QUESTION"
                }
            })
        }

        const Question = await db.question.create({
            data: {
                title,
                description,
                tags,
                setAlerts,
                upvotes,
                views,
            },
        });
        revalidatePath("/questions/");
        redirect("/questions");
    } catch (error) {
        console.log("Error creating question. Please try again. ", error);
        throw error;
    }
}

//CreateAnswer
const CreateAnswer = z.object({
    answer: z.string(),
    setAlerts: z.enum(["on", "off"]),
    title: z.string(),
});

export async function createAnswer(formdata: FormData) {
    try {
        const { answer, setAlerts, title } = CreateAnswer.parse({
            answer: formdata.get("answer"),
            setAlerts: formdata.get("alerts"),
            title: formdata.get("title"),
        });

        const upvotes = 0;

        const question = await db.question.findFirst({
            where: {
                title,
            },
        });

        if(setAlerts == "on"){
            const Notification = await db.notification.create({
                data: {
                    content: answer,
                    type: "ANSWER",
                }
            })
        }

        const Answer = await db.answer.create({
            data: {
                answer,
                setAlerts,
                upvotes,
                question: {
                    connect: {
                        id: question?.id,
                    },
                },
            },
        });
        revalidatePath("/questions/");
        redirect("/questions");
    } catch (error) {
        console.log("Error creating question. Please try again. ", error);
        throw error;
    }
}

//Click-specific handling
export async function handleUpvotes(params: QuestionType) {
    try {
        const question = await db.question.findUnique({
            where: {
                id: params.id,
            },
        });

        if (!question) {
            throw new Error("Question not found");
        }

        const updatedQuestion = await db.question.update({
            where: {
                id: params.id,
            },
            data: {
                upvotes: question.upvotes + 1,
            },
        });

        return updatedQuestion;
    } catch (error) {
        console.error(error);
        throw new Error("Error updating the upvotes. Please try again later.");
    }
}
