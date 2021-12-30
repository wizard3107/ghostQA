import './App.css';
import Nav from './component/nav';
import Register from './component/register';
import SignIn from './component/SignIn';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <div className='container'id='comp'>
    <div className='logo'>
        <img src='logoicon.png' alt='logo' /><h2 style={{color:'white'}}>Ghost <span style={{color:'green'}}>QA</span></h2>
        </div>
      <Nav />
      <div className='container'>
        <Routes>
        <Route path={'/'} element={<SignIn/>}>
          </Route>
          <Route path={'/register'} element={<Register/>}>
          </Route> 
        </Routes>
      </div>
    </div>
    </div>
    </Router>
  );
}

export default App;
