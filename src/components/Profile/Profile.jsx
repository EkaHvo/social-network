import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';
import Loader from '../common/Loader/Loader';
import {AddPostReduxForm as AddPost} from './Posts/AddPost.tsx/AddPost';

const Profile = (props) => {
  const { profile, status, posts, onAddPost, onDeletePost, isOwner, onStatusChange, onAddPhoto, onEditProfile } = props;

  if(!profile) {
    return <Loader/>
  } else {
    return (
      <>
        <ProfileInfo 
          status={status}
          isOwner={isOwner}
          onAddPhoto={onAddPhoto}
          onStatusChange={onStatusChange}
          onEditProfile={onEditProfile}
          profile={profile}/>
        { isOwner ? <AddPost onSubmit={onAddPost}/> : null }
        <Posts posts={posts} onDeletePost={onDeletePost}/>
      </>
    );
  }
}

export default Profile;
