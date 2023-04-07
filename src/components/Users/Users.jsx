import cls from './Users.module.css';
import User from './User/User';
import Pagination from './Pagination/Pagination';

const Users = ({usersData, currentPage, pageSize, totalCount, onPageChanged, isLoadingFollow })=> {

  return (
    <>
      <Pagination
        currentPage={currentPage} 
        totalCount={totalCount}
        pageSize={pageSize} 
        onPageChanged={onPageChanged}/>
      <ul className={cls.users}>
        { usersData.map(user => <User key={user.id} user={user} isLoadingFollow={isLoadingFollow}/> )}
      </ul>
    </>
  );
}

export default Users;
