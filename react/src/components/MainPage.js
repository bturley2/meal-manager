import React from "react";

import MyWeekPage from './pages/MyWeekPage';
import UploadRecipePage from "./pages/UploadRecipePage";

class MainPage extends React.Component {

  render() {
    // switch (this.props.value) {
    //   case 'myweek':
    //     return <MyWeekPage />;
    //   case 'uploadrecipe':
    //     return <UploadRecipePage />;
    // }
    
    return <MyWeekPage />;
    
  }
}

export default MainPage;
