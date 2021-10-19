import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = props.state.messagesData.map(messages => <Message text={messages.message} />)


    let newPostElement = React.createRef()

  const addMessage = () => {
    let text = newPostElement.current.value
    alert(text)
  }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addMessage}>Send message</button>
        </div>
    )
}

export default Dialogs