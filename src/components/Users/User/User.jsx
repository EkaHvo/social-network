import cls from './User.module.css';
import Avatar from '../../Avatar/Avatar';
import Button from '../../Button/Button';
import CustomLink from '../../CustomLink/CustomLink';
import { useDispatch } from "react-redux";
import { toggleFollowUser } from '../../../store/users/action';

const User = ({ isLoadingFollow, user }) => {
  const { id, photos, followed, name, status } = user;

  const dispatch = useDispatch();

  const toggleFollowHandler = (e) => {
    e.preventDefault();

    if (!followed) {
      dispatch(toggleFollowUser({id, type:'follow'}));
    } else {
      dispatch(toggleFollowUser({id, type:'unfollow'}));
    }
  }

  return (
    <li className={cls.user} id={id}>
      <CustomLink to={`/profile/${id}`}>
        <Avatar src={photos.small} />
        <div>
          <div>{name}</div>
          <div>{status}</div>
        </div>
        <Button
          disabled={isLoadingFollow.includes(id)}
          onClick={toggleFollowHandler}>
          {followed ? 'Unfollow' : 'Follow'}
        </Button>
      </CustomLink>
    </li>
  );
}

export default User;
