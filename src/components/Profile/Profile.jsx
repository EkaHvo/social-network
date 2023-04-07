import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';
import Loader from '../common/Loader/Loader';
import {AddPostReduxForm as AddPost} from './Posts/AddPost.tsx/AddPost';

const Profile = (props) => {
  const { profile, status, posts, onAddPost, onDeletePost, isOwner, onStatusChange } = props;

  if(!profile) {
    return <Loader/>
  } else {
    return (
      <>
        <ProfileInfo 
          fullName={profile.fullName}
          avatar={profile.photos.small}
          status={status}
          isOwner={isOwner}
          onStatusChange={onStatusChange}/>
        { isOwner ? <AddPost onSubmit={onAddPost}/> : null }
        <Posts posts={posts} onDeletePost={onDeletePost}/>
      </>
    );
  }
}

export default Profile;
