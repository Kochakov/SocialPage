import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)

    useEffect(() => {  //сначала отрисовывается jsx, затем происходит useEffect
        setStatus(props.status)    
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status) //запрос на сервер для обновления статуса (api.js)
    }


    let [status, setStatus] = useState(props.status)

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
                </div>
            }
            { editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={ deactivateEditMode } autoFocus={true} value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;