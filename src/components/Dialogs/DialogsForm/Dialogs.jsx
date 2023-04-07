import Button from '../../Button/Button';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormControls/FormControls';
import { required, alphaNumeric } from '../../../utils/validators';

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name='newMessage'
          typeComponent = 'textarea'
          component={Input}
          validate={[required]}
          warn={alphaNumeric}
          placeholder="New message"/>
      </div>
      <Button>Send</Button>
    </form>
  )
}

export const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm);
