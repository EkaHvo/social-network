import classNames from 'classnames';
import cls from './Loader.module.css';

const Loader = () => {
  const one = classNames(cls.line, cls.lineOne);
  const two = classNames(cls.line, cls.lineTwo);
  const three = classNames(cls.line, cls.lineThree);
  
  return (
    <div className={cls.loader}>
      <div className={one}></div>
      <div className={two}></div>
      <div className={three}></div>
    </div>
  );
}

export default Loader;
