import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/auth';

import HLayout from './components/HLayout/HLayout';
import HPage from './components/HPage/HPage';

export const statusTypes = ['unreachable', 'home', 'signup', 'login', 'authorized'];

export const determineStatus = (b1, b2, b3) => (
  statusTypes[
    !b1 && !b2 && !b3 ? 1 : 0 
    + b1 ? 2 : 0 
    + b2 ? 3 : 0 
    + b3 ? 4 : 0 
  ] 
);

const App = () => {
  const { isAuthenticated, showLogIn, showSignUp } = useSelector(state => state.auth);
  const status = determineStatus(showSignUp, showLogIn, isAuthenticated);

  console.log("Status:", status);

  const dispatch = useDispatch();

  /*
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);
  */

  const onMount = () => {
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      logoutHandler();
      return;
    }
    const id = localStorage.getItem('userId');
    const remainingMilliseconds = new Date(expiryDate).getTime() - new Date().getTime();
    dispatch(authActions.login());
    /*
    setUserToken(token);
    setUserId(id);
    */
    setAutoLogout(remainingMilliseconds);
  };
  
  const setAutoLogout = milliseconds => {
    setTimeout(() => {
      logoutHandler();
    }, milliseconds);
  };

  const logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
    dispatch(authActions.logout());
  };

  
  onMount();

  return (
    <HLayout>
      <HPage status={ status } />
    </HLayout>
  );
};

export default App;