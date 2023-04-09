import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../assets/images/logo.png';
import cls from './Header.module.css';

const Header = (props) => {
  const { login, isAuth, onLogout } = props;

  return (
    <header className={cls.header}>
      <div className={cls.content}>
        <div className={cls.logo}>
          <img className={cls.img} src={logo} alt='logo'></img>
          <h1 className={cls.title}>Cosmos network</h1>
        </div>
        {
          isAuth &&
          ( 
            <div className={cls.personal}>
                <CustomLink to={`/profile`} classname='flex'>
                  <div>{ login }</div>
                  <Avatar title='my avatar'/>
                </CustomLink>
              <Button onClick={onLogout}>
                  <span className={cls.exit}></span>
              </Button>
            </div>
          )
        }
      </div>
    </header>
  );
}

export default Header;
