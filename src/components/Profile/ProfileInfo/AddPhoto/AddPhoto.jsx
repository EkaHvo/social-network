import cls from './AddPhoto.module.css';

export const AddPhotoInput = ({ onAddPhoto }) => {
  const onOwnerAvatarChange = (e) =>  {
    if(e.currentTarget.files.length){
      onAddPhoto(e.currentTarget.files[0])
    }
  }

  return (
    <label className={cls.inputWrapper}>
      <input className={cls.inputFile} type='file' onChange={onOwnerAvatarChange}/>		
      <span className={cls.inputLabel}>	&#9998;</span>
    </label>
  )
}
