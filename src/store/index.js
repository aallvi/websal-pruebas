import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import AppReducer from './reducers/app.reducer';
import LoginReducer from './reducers/login.reducers'
import ThemeReducer from './reducers/theme.reducers';


const RootReducer = combineReducers({
    login: LoginReducer,
    app: AppReducer,
    theme: ThemeReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))