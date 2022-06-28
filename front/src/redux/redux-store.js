import { combineReducers, legacy_createStore as createStore } from 'redux';
import{landReducer} from './land-reduser'





let reducers=combineReducers({
    AboutPage: landReducer,

    
    }

    
)


 let store = createStore(reducers);


export default store

