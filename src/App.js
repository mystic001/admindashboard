import Topbar from './Topbar/Topbar';
import './App.css';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
     <Topbar/>
     <div className="bodyContainer">
       <Sidebar/>
       <div className = "otherpages">
      
       </div>
       
     </div>
    </div>
  );
}

export default App;
