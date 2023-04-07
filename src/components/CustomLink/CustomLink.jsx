import { NavLink } from 'react-router-dom';
import cls from './CustomLink.module.css';

const CustomLink = (props) => {
  const {to, children, classname} = props;

  let classnames = classname ? `${cls.link} ${cls[classname]}`: cls.link;

  const setActive = () => {
    return ({isActive}) => isActive ? `${classnames} ${cls.activeLink}` : classnames;
  }
  
  return (
    <NavLink to={to} className={setActive()}>{children}</NavLink>
  );
}

export default CustomLink;
