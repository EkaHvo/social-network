import Button from '../../../Button/Button';
import cls from './ProfileData.module.css';

const Contact = ({contactTitle, contactValue}) => { 
  return <div className={cls.contact}><b>{contactTitle}:</b> {contactValue}</div>
}

export const ProfileData = ({profile, isOwner, toEditMode}) => { 
  const { aboutMe, lookingForAJob, lookingForAJobDescription, contacts, fullName } = profile;

  return (
    <div className={cls.profileExtraInfo}>
      { fullName && <div><b>{fullName}</b></div>}
      { aboutMe && <div><b>{aboutMe}</b></div>}
      <div><b>Looking for a job: </b>{lookingForAJob ? 'yes': 'no'}</div>
      { lookingForAJob && lookingForAJobDescription && <div>{lookingForAJobDescription}</div> }
      <div className={cls.contacts}> <b>My contacts:</b>
        {
          Object.keys(contacts).map(key => (
            contacts[key] && Contact({contactTitle: key, contactValue: contacts[key]})
          ))
        }
      </div>
      {isOwner && <Button onClick={toEditMode}>Edit profile</Button>}
    </div>
  )
}

