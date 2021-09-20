
import './App.css';
import HomePage from './containers/HomePage';
import ProductListPage from "./containers/ProductListPage"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isUserLoggedIn } from './actions';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,Switch, Route
} from "react-router-dom";
import ProductDetailsPage from './containers/ProductDetailsPage';

function App() {

  const auth = useSelector((state) => state.auth);
  const dispatch=useDispatch();
  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
  
  }, [auth.authenticate])
  return (
    <div className="App">

<Router>
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/:productSlug/:productId/p" component={ProductDetailsPage}/>
      <Route path="/:slug" component={ProductListPage}/>
      
    </Switch>
</Router>
    
    </div>
  );
}

export default App;
