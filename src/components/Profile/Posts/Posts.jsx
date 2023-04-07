import Post from './Post/Post';
import cls from './Posts.module.css';
import { memo } from 'react';

const Posts = memo((props) => {
  const { posts, onDeletePost } = props;

  return (
    <div className={cls.posts}>
      {posts.map(post => <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount} onDeletePost={onDeletePost} />)}
    </div>
  );
});

export default Posts;
