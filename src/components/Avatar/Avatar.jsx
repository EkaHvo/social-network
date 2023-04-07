import cls from './Avatar.module.css';
import noAvatar from '../../assets/images/user.png'

const Avatar = (props) => {
  let {src} = props;
  return (
    src 
    ? <img className={cls.avatar} src={src} alt='avatar'></img>
    : <img className={cls.noAvatar} src={noAvatar} alt='avatar'></img>
  )
}

export default Avatar;
