// Typescript definitions

export type Question = {
    id: string, 
    title: string, 
    description: string, 
    tags: string[],
    alerts: "on" | "off", 
}