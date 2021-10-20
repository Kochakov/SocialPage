const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 11 },
        { id: 2, message: 'It is my first post', likesCount: 45 }
    ],
    newPostText: 'itp'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
      
           
        
        case UPDATE_NEW_POST_TEXT:
           return {
                ...state,
                newPostText: action.newText
            }
            
        
        
        default:
            return state;
        
    }
}


export const addPostsActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer