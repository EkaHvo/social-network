import cls from './Navbar.module.css';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
  
  const navs = [
    {to:`/profile`,text:'Profile'},
    {to:'/dialogs',text:'Messages'},
    {to:'/users',text:'Users'},
    {to:'/news',text:'News'},
    {to:'/music',text:'Music'},
    {to:'/settings',text:'Settings'},
  ];

  return (
    <nav className={cls.navbar}>
      {
        navs.map((link,index) => <CustomLink key={index} to={link.to}>{link.text}</CustomLink>)
      }
    </nav>
  );
}

export default Navbar;
