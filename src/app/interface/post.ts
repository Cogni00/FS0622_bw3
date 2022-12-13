export interface Post {
    id: number,
    user_id: number,
    title: string,
    description: string,
    emoji: string,
    commenti: [],
    date: {}
}
export interface PostGet {
    user_id: number,
    title: string,
    description: string,
    emoji: string,
    commenti: string[],
    date: {}
}

export interface CommentPost {
    comment: string
}

export interface User {
    email: string,
    password: string,
    name: string,
    surname: string,
    id: number
}

export interface Like {
    postId: number,
    userId: number
}
