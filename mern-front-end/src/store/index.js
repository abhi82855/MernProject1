import { createStore ,applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(
   applyMiddleware(thunk)
));

//const store = createStore(rootReducer ,applyMiddleware(thunk));

 export default store;

// import { createStore } from "redux";
// import rootReducer from '../reducers';
// const store =createStore(rootReducer);
// export default store;
