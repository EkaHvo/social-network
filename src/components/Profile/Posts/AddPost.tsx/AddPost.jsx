import Button from '../../../Button/Button';
import cls from './AddPost.module.css';
import { reduxForm } from 'redux-form';
import { maxLengthCreator, required, alphaNumeric } from '../../../../utils/validators';
import { createField } from "../../../common/FormControls/FormControls";

const maxLength30 = maxLengthCreator(30);

const AddPostForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className={cls.addPostWrapper}>
      {createField('newPostText', 'textarea', 'text', [required, maxLength30], alphaNumeric, 'New post')}
      <Button>Send</Button>
    </form>
  )
}

export const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPostForm);
