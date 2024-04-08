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
    open: boolean,
    authorID: string | null,
}

export type User = {
    id: string, 
    username: string,
    email: string, 
    emailVerified: Date | null,
    hashedPassword: string,
    createdAt: Date,
    questions: QuestionType,
    answers: AnswerType
}

export type AnswerType = {
    id: string,
    question: QuestionType,
    answer: string,
    publishedAt: Date,
    upvotes: number,
    setAlerts: string,
    authorID: string | null,
    questionId: string
}