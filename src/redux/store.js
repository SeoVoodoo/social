import { rerenderEntireTree } from "../render";

export const store = {

    profilePage: {
        
        posts: [
            {id: 1, message: "Hi, how are you ?", likeCount: 15},
            {id: 2, message: "It's my first post", likeCount: 20},
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Victor"},
            {id: 6, name: "Valera"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How your it-kamasutra"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"},
            {id: 6, message: "Yo-yo"}
        ]
    }
}

export const addPost = (postMessage) => {
    
    const newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    }

    store.profilePage.posts.push(newPost);
    rerenderEntireTree(store);
} 