// Server actions
"use server";
import {z} from 'zod';
import { db } from '@/lib/prismadb';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

//CreateQuestion
const CreateQuestion= z.object({
    title: z.string(), 
    description: z.string(),
    tagsUnified: z.string(), 
    setAlerts: z.enum(["on", "off"])
})

export async function createQuestion(formdata: FormData){
    try{
        const {title, description, tagsUnified, setAlerts} = CreateQuestion.parse({
            title: formdata.get('title'),
            description: formdata.get('description'),
            tagsUnified: formdata.get('tags'),
            setAlerts: formdata.get('alerts')
        })
        const tags = tagsUnified.split(" ").map((element:String) => element.slice(1,));

        const question = await db.question.create({
            data: {
                title,
                description,
                tags,
                setAlerts
            }
        }); 
        revalidatePath('/questions/');
        redirect('/questions');
    } catch(error){
        console.log("Error creating question. Please try again. ", error);
        throw error;  
    }
}