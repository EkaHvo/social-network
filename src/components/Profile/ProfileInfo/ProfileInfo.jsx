import { useState } from 'react';
import { AddPhotoInput } from './AddPhoto/AddPhoto';
import { ProfileReduxDataForm as ProfileDataForm} from './ProfileDataForm/ProfileDataForm';
import { ProfileData } from './ProfileData/ProfileData';
import Avatar from '../../Avatar/Avatar';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import cls from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  const { status, onStatusChange, isOwner, onAddPhoto, profile, onEditProfile } = props;
  const { photos } = profile;

  const [editMode, setEditMode] = useState(false);
  const toEditMode = () => {
    setEditMode(true);
  }
  const fromEditMode = (data) => {
    onEditProfile(data);
    setEditMode(false);
  }

  return (
    <>
      <div className={cls.profileHeader}>
        <div className={cls.profileCover}></div>
        <div className={cls.profileDescr}>
          <div className={cls.profileCoverAvatar}>
            <Avatar src={photos.small} />
          </div>
          {isOwner ? <AddPhotoInput onAddPhoto={onAddPhoto} /> : null}
          <div className={cls.profileMainInfo}>
            <ProfileStatus
              status={status}
              isOwner={isOwner}
              onStatusChange={onStatusChange} />
          </div>
        </div>
      </div>
      { editMode 
        ? <ProfileDataForm initialValues={profile} contacts={profile.contacts} onSubmit={fromEditMode}/> 
        : <ProfileData profile={profile} isOwner={isOwner} toEditMode={toEditMode}/>}
    </>
  );
}

export default ProfileInfo;
