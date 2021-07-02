import React from "react";

import MyWeekPage from './pages/MyWeekPage';
import UploadRecipePage from "./pages/UploadRecipePage";

export default function MainPage() {

    switch (this.props.value) {
      case 'myweek':
        return <MyWeekPage />;
      case 'uploadrecipe':
        return <UploadRecipePage />;
    }
    
    return <MyWeekPage />;
    
  }

