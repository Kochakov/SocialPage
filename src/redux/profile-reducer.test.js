import profileReducer, { addPostsActionCreator, deletePost } from "./profile-reducer";
import Reaact from "react"

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 11 },
        { id: 2, message: 'It is my first post', likesCount: 45 }
    ]
};

it('message post should be correct', () => {

    //1. test data
    
    let action = addPostsActionCreator("it-kamasutra.com")

   
    //2. action
    let newState = profileReducer(state, action )


    //3. expectation
    expect (newState.posts[2].message).toBe("it-kamasutra.com") 
})


it('length post should be incremented', () => {

    //1. test data
    
    let action = addPostsActionCreator("it-kamasutra.com")

   
    //2. action

    let newState = profileReducer(state, action )


    //3. expectation
    expect (newState.posts.length).toBe(3) 
})

it('after deleting length should be decrement', () => {

    //1. test data
    
    let action = deletePost(1)

   
    //2. action

    let newState = profileReducer(state, action )


    //3. expectation
    expect (newState.posts.length).toBe(1) 
})

