
import './App.css';
import HomePage from './containers/HomePage';
import ProductListPage from "./containers/ProductListPage"
import {
  BrowserRouter as Router,Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">

<Router>
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/:slug" component={ProductListPage}/>
    </Switch>
</Router>
    
    </div>
  );
}

export default App;
