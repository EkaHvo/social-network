import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { reset } from 'redux-form';
import { savePhoto, setProfile, setStatus, updateProfile, updateStatus } from '../../store/profile/action';
import { addPost, deletePost } from '../../store/profile/slice';
import Loader from '../common/Loader/Loader';
import Profile from './Profile';

const ProfileContainer = () => {
  const { profile, posts, status, isProfileLoading } = useSelector(state => state.profile);
  const { user } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const userId = useParams().userId || user.id;

  const onAddPost = (values) => {
    dispatch(addPost(values));
    dispatch(reset('addPost'));
  }

  const onAddPhoto = (file) => {
    dispatch(savePhoto(file));
  }

  const onEditProfile = (data) => {
    dispatch(updateProfile(data));
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
    <>
      { isProfileLoading 
          ? <Loader />
          : <Profile
              profile={profile}
              status={status}
              isOwner={userId === user.id}
              onStatusChange={onStatusChange}
              onEditProfile={onEditProfile}
              onAddPhoto={onAddPhoto}
              onAddPost={onAddPost}
              onDeletePost={onDeletePost}
              posts={posts} />
      }
    </>
  )
}

export default ProfileContainer;


