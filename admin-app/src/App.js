import "./App.css";
// import Home from "./containers/Home";
// import Signin from "./containers/Signin";
// import Signup from "./containers/Signup";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
