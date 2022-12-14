export interface Post {
    id: number,
    user_id: number,
    title: string,
    description: string,
    emoji: string,
    commenti: object[],
    date: {}
}
export interface PostGet {
    user_id: number,
    title: string,
    description: string,
    emoji: string,
    commenti: object[],
    date: {}
}

export interface CommentPost {
    comment: {}
}

export interface PostPut {
    id: number,
    description: string,
    emoji: string,
    commenti: object[],
    date: {}
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
