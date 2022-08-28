import './App.css';
import Login from './Components/Login.js';
import Navbar from './Components/Navbar.js';

function App() {
  return (
    <div className="App">
      <body>
        <div id='appContainer' className='container-fluid'>
          <div className='row align-items-start'>
            <Navbar></Navbar>
          </div>
          <div id='login-panel' className='row align-items-center justify-content-center'>
            <div className='col-sm-3'>
                <Login id='login'></Login>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
