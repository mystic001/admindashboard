import Topbar from './Topbar/Topbar';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
     <Topbar/>
     <div className="bodyContainer">
       <Sidebar/>
       <Home className = 'home' />
     </div>
    </div>
  );
}

export default App;
