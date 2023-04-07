import { reduxForm } from "redux-form";
import { required } from "../../../utils/validators";
import Button from "../../Button/Button";
import { createField } from "../../common/FormControls/FormControls";
import cls from './LoginForm.module.css';

const LoginForm = ({ handleSubmit, error }) => {
  return (
      <form onSubmit={handleSubmit} className={cls.form}>
        {createField('email', 'input', 'text', [required], null, 'Email')}
        {createField('password', 'input', 'text', [required], null, 'Password')}
        {createField('rememberMe', 'input', 'checkbox', null, null, null, 'remember me')}
        { error && <div className={cls.error}>{error}</div> }

        <Button>Login</Button>
      </form>
  );
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
