import React from "react";
import '../style/MainPage.css';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {backgroundColor: 'blue'};
  }

  render() {
    return (
      <div class="mainpage">
        <h1>This is the Main Page.</h1>
      </div>
    );
  }
}

export default MainPage;
