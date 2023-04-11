import Avatar from '../../Avatar/Avatar';
import { AddPhotoInput } from './AddPhoto/AddPhoto';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import cls from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  const { fullName, avatar, status, onStatusChange, isOwner, onAddPhoto } = props;

  return (
    <div className={cls.profileHeader}>
      <div className={cls.ownerCover}></div>
      <div className={cls.profileDescr}>
        <div className={cls.ownerCoverAvatar}>
          <Avatar src={avatar}/>
        </div>
        { isOwner ?	<AddPhotoInput onAddPhoto={onAddPhoto}/> : null}
        <div className={cls.ownerInfo}>
          <div>{fullName}</div>
          <ProfileStatus 
            status={status} 
            isOwner={isOwner} 
            onStatusChange={onStatusChange}/>
        </div>
      </div>
    </div>

  );
}

export default ProfileInfo;
