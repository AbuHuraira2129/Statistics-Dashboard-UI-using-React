import './App.css';

// Importing Components
import SideMenu from './components/SideMenu';
import Center from './components/Center';
import Right from './components/Right';


function App() {
  return (
    <div className="Main">
      <SideMenu/>
      <div className="dashboard">
      <Center/>
      <Right/>
      </div>
    </div>
  );
}

export default App;
