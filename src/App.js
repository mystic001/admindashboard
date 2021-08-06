import Topbar from './Topbar/Topbar';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import User from './pages/User/User'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Topbar/>
      <div className="bodyContainer">
       <Sidebar/>
       <Switch>
       <Route path = "/" exact component = {Home}/>
       <Route path="/users" component = {Users}><Users /></Route>
       <Route path="/user/" component = {User}><User/></Route>
      </Switch>
      </div>
      </Router>
     
    </div>
  );
}

export default App;
