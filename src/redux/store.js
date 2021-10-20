import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 11 },
                { id: 2, message: 'It is my first post', likesCount: 45 }
            ],
            newPostText: 'itp'
        },

        dialogsPage: {

            dialogsData: [
                { id: 1, name: 'Dymich' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' },
            ],

            messagesData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },
                { id: 6, message: 'Yo' }
            ],
            newMessageBody: ""
        }

    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed')
    },



    subscribe(observer) {
        this._callSubscriber = observer; //observer pattern //publisher-subscriber 
    },

    dispatch(action) { // {type: 'ADD-POST'} action - это объект
        //reducer - это функции, которые получают action и нужную часть state, адресованную именно этому reducer и возвращает измененный state
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)

    }
}



export default store;
window.store = store;