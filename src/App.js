import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Router } from './router';
import { initializeApp } from './store/app/action';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Loader from './components/common/Loader/Loader';

const App = () => {
  const { isInitialized } = useSelector(state => state.app);
  const { user, isAuth } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  
  useEffect(()=>{   
    dispatch(initializeApp());
  },[dispatch]);

  if(!isInitialized){
    return <Loader/>
  }

  return (
    <div className='app-wrapper'>
      <HeaderContainer user={user} isAuth={isAuth}/>
      <div className='app-wrapper-content'>
        { isAuth && <Navbar /> }
        <div className='app-inside-content'>
          <Router />
        </div>
      </div>
    </div>
  );
}

export default App;
