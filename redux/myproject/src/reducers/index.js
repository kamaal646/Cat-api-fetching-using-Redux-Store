import isLoggedReducer from './isLogged';
import {combineReducers} from 'redux';
import { fetchdata } from './fetchdata';

const allReducer = combineReducers(
    {
        isLogged: isLoggedReducer,
        fetchData: fetchdata
    }
)
  export default allReducer;