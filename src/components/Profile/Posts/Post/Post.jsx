import cls from './Post.module.css';
import Avatar from '../../../Avatar/Avatar';
import Button from '../../../Button/Button';

const Post = (props) => {
  const {id, message, likesCount, onDeletePost} = props;
  const handleDelete = () => {
    onDeletePost(id)
  };
  
  return (
    <div className={cls.post}>
      <Avatar src='https://i.pinimg.com/originals/1b/8c/4a/1b8c4a21c217008ca89478652c7dc9f6.jpg'/>
      {message}
      <div>
        {likesCount} likes
      </div>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
}

export default Post;
