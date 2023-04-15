import { reduxForm } from 'redux-form';
import Button from '../../../Button/Button';
import { createField } from '../../../common/FormControls/FormControls';
import cls from './ProfileDataForm.module.css';

const ProfileDataForm = ({handleSubmit, contacts}) => {
  return (
    <form onSubmit={handleSubmit} >
      Full name: { createField('fullName', 'input', 'text' )}
      About me: { createField('aboutMe', 'input', 'text' )}
      Looking for a job: { createField('lookingForAJob', 'input', 'checkbox' )}
      Looking for a job Description: { createField('lookingForAJobDescription', 'textarea' )}
      {
        Object.keys(contacts).map(key => <ProfileField name={key}/>)
      }
      <Button>Edit profile</Button>
    </form>
  )
}

const ProfileField = ({name}) => {
  return (
    <div className={cls.contact} key={name}>
      <span>{name}:</span> 
      {createField(`contacts.${name}`, 'input', 'text' )}
    </div>
  )
}

export const ProfileReduxDataForm = reduxForm({
  form: 'editProfile'
})(ProfileDataForm);
