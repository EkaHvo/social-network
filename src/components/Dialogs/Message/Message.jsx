import cls from './Message.module.css';
import Avatar from '../../Avatar/Avatar';
import { TEST_AVATAR_SRC } from '../../../constants/vars';

const Message = (props) => {
  const {message,id} = props;
  const myID = 1;
  
  let classNames = id === myID ? cls.message : `${cls.message} ${cls.right}`;

  return (
    <div className={classNames}>
      <Avatar src={TEST_AVATAR_SRC}/>
      {message}
    </div>
  )
}

export default Message;
