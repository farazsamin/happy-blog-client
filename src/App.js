import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
     <Router>
       <Switch>
         <Route exact path="/">
           <Login></Login>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
