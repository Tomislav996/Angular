import { Timestamp } from "firebase/firestore";


export interface Post {
    id: string;
    author: string;
    title: string;
    likes: number;
    creationDate: Timestamp;
    content: string;
}

export interface PostToCreate {
    author: string;
    title: string;
    likes: number;
    creationDate: Timestamp;
    content: string;
}