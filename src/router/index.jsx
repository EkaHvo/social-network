import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from '../components/common/Loader/Loader';
import withProtect from './withProtect';

const ProfileContainer = lazy(() => import('../components/Profile/ProfileContainer'));
const DialogsContainer = lazy(() => import('../components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('../components/Users/UsersContainer'));
const News = lazy(() => import('../components/News/News'));
const Music = lazy(() => import('../components/Music/Music'));
const Settings = lazy(() => import('../components/Settings/Settings'));
const Login = lazy(() => import('../components/Login/Login'));

let WithProtectProfile = withProtect(<ProfileContainer />);
let WithProtectDialogs = withProtect(<DialogsContainer />);
let WithProtectSettings = withProtect(<Settings />);

export const Router = () => {
  return (          
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<WithProtectProfile />}/>
        <Route path='/profile' element={<WithProtectProfile />}/>
        <Route path='/profile/:userId' element={<WithProtectProfile />}/>
        <Route path='/dialogs' element={<WithProtectDialogs />}/>
        <Route path='/users' element={<UsersContainer />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/music' element={<Music />}/>
        <Route path='/settings' element={<WithProtectSettings />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </Suspense>
  );
}
