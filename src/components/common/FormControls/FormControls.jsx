import classnames from 'classnames';
import { Field } from 'redux-form';
import cls from './FormControls.module.css';

export const Input = ({ input, meta, typeComponent, ...restProps }) => { 
  const { touched, error, warning } = meta;

  const hasError = touched && error;
  const hasWarn = touched && warning;

  const classNames = classnames(cls[typeComponent], hasError && cls.error, hasWarn && cls.warning);

  return (
    <>
      {
        ( typeComponent === 'textarea' && <textarea {...input} {...restProps} className={classNames}/> ) ||
        ( typeComponent === 'input' && <input {...input} {...restProps} className={classNames}/> ) 
      }
      { hasError && <span className={cls.error}>{error}</span> }
      { hasWarn && <span className={cls.warning}>{warning}</span> }
    </>
  );
}

export const createField = (name, typeComponent, type, validate, warn, placeholder, text, props) => {
  return (
    <div>
      <Field 
        name={name}
        typeComponent={typeComponent}
        component={Input} 
        type={type} 
        validate={validate}
        warn={warn}
        placeholder={placeholder} 
        {...props}/>
      { text ? (<span>{text}</span>) : '' }
    </div>
  )
}
