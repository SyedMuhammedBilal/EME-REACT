import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { userSigninReducer } from './reducers/userReducers';
import thunk  from 'redux-thunk'
import Cookie from 'js-cookie'

const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { userSign: { userInfo } };
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    userSignin: userSigninReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;