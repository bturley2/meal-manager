// import logo from '../assets/logo.svg';
import '../style/App.css';
import Navbar from './Navbar';
import MainPage from './MainPage';

import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function App() {
  // return (
  //   <div>
  //     <Button variant="contained" color="primary">
  //       Hello World
  //     </Button>
  //   </div>
  // );

  return (
    <div>
      <head>

      </head>

      <body>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <h1>Hello World!</h1>
        <Navbar />
        <MainPage />
      </body>
    </div>

  );
}

export default App;
