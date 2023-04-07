import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import cls from './Dialogs.module.css';
import { DialogsReduxForm as DialogsForm } from './DialogsForm/Dialogs';

const Dialogs = (props) => {
  const { dialogsData, messageData, sendMessage } = props;

  return (
    <div className={cls.dialogs}>
      <div>
        {dialogsData.map(dialogItem => <DialogItem key={dialogItem.id} id={dialogItem.id} name={dialogItem.name} />)}
      </div>
      <div>
        <div className={cls.messages}>
          {messageData.map(item => <Message message={item.message} key={item.id} id={item.id} />)}
        </div>
        <DialogsForm onSubmit={sendMessage}/>
      </div>
    </div>
  );
}

export default Dialogs;
