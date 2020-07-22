import { createStore, combineReducers} from 'redux';
import adsReducer from '../reducers/ad';
import filterReducer from '../reducers/filter';
import advanceFilterReducer from '../reducers/advanceFilter';

export default () => {
    const store = createStore(
        combineReducers({
            ads: adsReducer,
            filter:filterReducer,
            advanceFilter:advanceFilterReducer  
        }),
       
    );
    return store;
};