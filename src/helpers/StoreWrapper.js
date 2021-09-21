import { Provider } from 'react-redux';
import store from '../store/index';

const StoreWrapper = ({ children }) => (
    <Provider store={ store }>
        { children }
    </Provider>
);

export default StoreWrapper;

