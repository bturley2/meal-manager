import './App.css';
import SideBar from './components/SideBar/SideBarComponent';

function App() {
  document.body.style = 'background: yellow;';
  return (

    <SideBar />

    // <div>
    //   <h1 style={{color: 'red'}}>Hello World!</h1>
    // </div>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
