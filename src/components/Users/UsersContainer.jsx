import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { setUsers } from "../../store/users/action";
import Loader from "../common/Loader/Loader";
import Users from "./Users"

const UsersContainer = () => {
   const selestFollowedUsersCount  = createSelector(
    (state) => state.users.users,
    (users) => {
      if(users) {
        return users.filter(user => user.followed).length
      }
    }
  )
  const usersData = useSelector(state => state.users);
  const followedUsersCount = useSelector(selestFollowedUsersCount);

  const { users, pageSize, totalCount, currentPage, isLoadingUsers, isLoadingFollow } = usersData;

  const dispatch = useDispatch();

  const onPageChanged = (currentPage) => {
    dispatch(setUsers({currentPage, pageSize}))
  }

  useEffect(() => {
    dispatch(setUsers({currentPage, pageSize}))
  }, [dispatch, currentPage, pageSize])

  return (
    <>
      {isLoadingUsers 
        ? <Loader />
        : <> 
            <div >Followed users count: {followedUsersCount}</div>
            <Users
            usersData={users}
            currentPage={currentPage}
            isLoadingFollow={isLoadingFollow}
            pageSize={pageSize}
            totalCount={totalCount}
            onPageChanged={onPageChanged} />
          </>
      }
    </>
  );
}

export default UsersContainer;
