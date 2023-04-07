import cls from './Button.module.css';

const Button = (props) => {
  let {children, onClick, disabled} = props;
  
  return (
    <button 
    className={cls.button} 
    disabled={disabled} 
    onClick={onClick}>{children}</button>
  );
}

export default Button;
