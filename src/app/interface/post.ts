export interface Post {
    id: number,
    title: string,
    description: string,
    emoji: string,
    commenti: []
}
export interface PostGet {
    title: string,
    description: string,
    emoji: string,
    commenti:string[]
}

export interface CommentPost{
    comment:string
}