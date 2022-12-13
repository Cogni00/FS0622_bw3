export interface Post {
    id: number,
    user_id:number,
    title: string,
    description: string,
    emoji: string,
    commenti: [],
    date: {}
}
export interface PostGet {
    user_id:number,
    title: string,
    description: string,
    emoji: string,
    commenti: string[],
    date: {}
}

export interface CommentPost {
    comment: string
}
