import React from "react";

import Dashboard from './pages/Dashboard';
import EnterMeal from "./pages/EnterMeal";

class MainPage extends React.Component {

  render() {
    switch (this.props.value) {
      case 'dashboard':
        return <Dashboard />;
      case 'entermeal':
        return <EnterMeal />;
    }
    
    return <Dashboard />;
    
  }
}

export default MainPage;
