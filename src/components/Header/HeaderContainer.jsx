import { useDispatch } from "react-redux";
import { logout } from "../../store/auth/action";
import Header from "./Header";

const HeaderContainer = (props) => {
  const { user, isAuth, photo } = props;

  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  }

  return (
    <Header 
      login={user.login} 
      isAuth={isAuth} 
      photo={photo}
      onLogout={onLogout}/>
  );
}

export default HeaderContainer;
