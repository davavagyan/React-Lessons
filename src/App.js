import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar';
import Profile from './components/Profile';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <Profile/>
      <h1>Git</h1>
    </div>
  );
}

export default App;
