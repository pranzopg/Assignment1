import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Accounts/Navbar";
import {BrowserRouter,Route} from "react-router-dom"
const Home = () => {
  return (
  <>
  <Navbar/>
  <div className='details'>
        <p>Welcome to</p>
        <h1>Assignment of Home Page</h1>

    </div>
  </>
  )
}

const about = () => {
  return (
  <>
  <Navbar/>
  <div className='details'>
        <p>Welcome to</p>
        <h1>Assignment of about Page</h1>

    </div>
  </>
  )
}

const Services = () => {
  return (
  <>
  <Navbar/>
  <div className='details'>
        <p>Welcome to</p>
        <h1>Assignment of Services Page</h1>

    </div>
  </>
  )
}

const Contacts = () => {
  return (
  <>
  <Navbar/>
  <div className='details'>
        <p>Welcome to</p>
        <h1>Assignment of Contacts</h1>

    </div>
  </>
  )
}
function App() {
  return (
    <Navbar/>
  //  <BrowserRouter>
    //<Route exact path="/"  element={<Home/>}/>
   // </BrowserRouter>
  );
}


export default App;
