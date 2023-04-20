import './App.css';
import {Header} from  "./MyComponents/Header";
import {Sidebar} from  "./MyComponents/Sidebar";
import {RightSide} from "./MyComponents/RightSide";
import {Feed} from "./MyComponents/Feed";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='Main'>
        <Sidebar/>
        <Feed/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
