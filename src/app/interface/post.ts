export interface Post {
    id: number,
    title: string,
    description: string,
    emoji: string,
    commenti: [],
    date: {}
}
export interface PostGet {
    title: string,
    description: string,
    emoji: string,
    commenti: string[],
    date: {}
}

export interface CommentPost {
    comment: string
}
