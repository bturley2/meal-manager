import React from 'react';

import MainPage from './MainPage';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function App() {
  return (
    <div>
      <head>
        {/* Import Roboto font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

        {/* Scale devices for mobile */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </head>

      <body>
        <Sidebar />
        <Navbar />
        <MainPage />
      </body>
    </div>

  );
}

export default App;
