// Typescript definitions

export type QuestionType = {
    id: string, 
    title: string, 
    description: string, 
    publishedAt: Date, 
    upvotes: number,
    views: number, 
    tags: string[],
    setAlerts: string 
    open: boolean
}

export type AnswerType = {
    id: string,
    title: QuestionType,
    answer: string,
    publishedAt: Date,
    upvotes: number,
    setAlerts: string
}