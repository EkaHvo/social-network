import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from './Login.module.css';
import { useNavigate } from "react-router-dom";
import { login } from "../../store/auth/action";
import { LoginReduxForm as LoginForm } from "./LoginForm/LoginForm";

const Login = () => {
  const { isAuth }= useSelector(state => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = (formData) => {
    let {email, password, rememberMe = false} = formData
    dispatch(login({email, password, rememberMe}));
  }

  useEffect(()=>{
    if(isAuth){
      navigate(`/profile`);
    }
  }, [navigate, isAuth])

  return (
    <div className={cls.wrapper}>
      <h1>Login</h1>
      <LoginForm onSubmit={onLogin}/>
    </div>
  );
}

export default Login;
