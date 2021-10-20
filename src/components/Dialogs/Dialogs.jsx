import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
    let messagesElements = state.messagesData.map(messages => <Message text={messages.message} key={messages.id} />)
    let newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessage()   
    }

    const onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={ newMessageBody } onChange={ onNewMessageChange } placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={ onSendMessageClick }>Send message</button>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Dialogs