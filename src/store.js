import { createStore,combineReducers,compose, applyMiddleware } from "redux";
import AppReducer from "./redux/reducers/AppReducer";




const rootReducer = combineReducers({
    AppReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

export default store;