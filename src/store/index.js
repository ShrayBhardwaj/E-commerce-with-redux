//combineReducer is used for to used more then one reducer 
//for example here we used 2 reducer product and Cart

import {createStore, combineReducers} from "redux"
import ProductsReducer from "./Reducer/ProductsReducer"
import { devToolsEnhancer } from 'redux-devtools-extension';
import CartReducer from "./Reducer/CartReducer"

const root = combineReducers({
    ProductsReducer,
    CartReducer
});
const store = createStore(root,devToolsEnhancer());

export default store;

//with the help of these store we used gobally our data and import in app.js
