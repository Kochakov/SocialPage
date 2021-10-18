import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {



    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={s.message}>
            {props.text}
        </div>
    )
}



const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Adnrey" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Victor" id="5"/>
                <DialogItem name="Valera" id="6"/>
            </div>
            <div className={s.messages}>
                <Message text='Hi' />
                <Message text='How are you?' />
                <Message text='Yo' />
            </div>
        </div>
    )
}

export default Dialogs