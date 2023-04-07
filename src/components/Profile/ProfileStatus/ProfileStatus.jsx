import { useEffect, useState } from "react";

const ProfileStatus = (props) => {
  const {status, isOwner, onStatusChange} = props;

  const [ isEditMode, setEditMode] = useState(false);
  const [ localStatus, setLocalStatus] = useState('');

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    if(status !== localStatus) {
      onStatusChange(localStatus);
    }
  }

  const updateStatusHandle = (event) => {
    setLocalStatus(event.target.value);
  }

  useEffect(()=>{
    if(status) {
      setLocalStatus(status)
    }
  }, [status])

  if(!isOwner){ return <div>{status}</div> }

  return (
    <>
      { 
        isEditMode || !status
        ? <input autoFocus 
          onBlur={deactivateEditMode} 
          onChange={updateStatusHandle} 
          value={localStatus}/>
        : <div onClick={activateEditMode}>{localStatus}</div> 
      }
    </>
  );
}

export default ProfileStatus;
