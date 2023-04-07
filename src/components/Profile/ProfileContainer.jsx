import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { reset } from 'redux-form';
import { setProfile, setStatus, updateStatus } from '../../store/profile/action';
import { addPost, deletePost } from '../../store/profile/slice';
import Profile from './Profile';

const ProfileContainer = () => {
  const { profile, posts, status } = useSelector(state => state.profile);
  const { user } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const userId = useParams().userId || user.id;

  const onAddPost = (values) => {
    dispatch(addPost(values));
    dispatch(reset('addPost'));
  }

  const onDeletePost = (id) => {
    dispatch(deletePost({id}));
  }

  const onStatusChange = (status) => {
    dispatch(updateStatus(status));
  }

  useEffect(() => {
    dispatch(setProfile(userId));
    dispatch(setStatus(userId));
  }, [dispatch, userId])

  return (
    <Profile
      profile={profile}
      status={status}
      isOwner={userId === user.id}
      onStatusChange={onStatusChange}
      onAddPost={onAddPost}
      onDeletePost={onDeletePost}
      posts={posts} />
  );
}

export default ProfileContainer;


