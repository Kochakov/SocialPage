import { reduxForm } from "redux-form";
import { createField, Input } from "../../Common/Preloader/FormsControls/FormsControls"
import s from "./ProfileInfo.module.css"



const ProfileDataForm = ({ handleSubmit, profile, error }) => {

    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div className={s.formSummaryError}>   {error}  </div>}
        <div>
            <b>FullName</b>: {createField("FullName", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
        </div>
        <div>
            <b>My professional skills</b>: {createField("My skills", "lookingForAJobDescription", [], Input, {type: "textarea"} )} 
        </div>
        <div>
            <b>AboutMe</b>: {createField("About me", "aboutMe", [], Input, {type: "textarea"} )}
        </div>
        <div>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <div key={key} className={s.contact}>
            <b>{key}: {createField("FullName", "contacts." + key, [], Input)}</b> 
        </div>
      })}
    </div>
    </form>

}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;