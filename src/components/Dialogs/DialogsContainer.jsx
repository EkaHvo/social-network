import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../store/dialog/slice';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
  const dispatch = useDispatch();

  const dialogsData = useSelector(state => state.dialogs);
  const { dialogs, messages } = dialogsData;

  const sendMessageHandler = (values) => {
    dispatch(sendMessage(values));
  }

  return <Dialogs 
    dialogsData={dialogs}
    messageData={messages}
    sendMessage={sendMessageHandler}/>
}

export default DialogsContainer;
