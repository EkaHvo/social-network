import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../components/common/Loader/Loader';

function withProtect (wrappedComponent) {
  const ProtectedRoute = () => {
    const {isAuth, isAuthLoading}= useSelector(state => state.auth);
  
    if(isAuthLoading) return <Loader/>;
    return isAuth ? wrappedComponent : <Navigate to='/login' replace />;
  };

  return ProtectedRoute;
}


export default withProtect;
