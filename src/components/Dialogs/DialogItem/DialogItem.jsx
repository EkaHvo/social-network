import Avatar from '../../Avatar/Avatar';
import CostumLink from '../../CustomLink/CustomLink';
import { TEST_AVATAR_SRC } from '../../../constants/vars';

const DialogItem = (props) => {
  const { id, name } = props;

  return (
    <CostumLink to={`/dialogs/${id}`} classname='flex'>
      <Avatar src={TEST_AVATAR_SRC} />
      {name}
    </CostumLink>
  )
}

export default DialogItem;
