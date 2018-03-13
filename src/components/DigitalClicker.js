// Code DigitalClicker Component Here
// In the components/DigitalClicker.js file, create a DigitalClicker React component.
// This component has an initial state property called timesClicked, which is initially defined as 0.
// The component renders out a button with a label that shows the timesClicked value. This means that, at the start, your button should just say 0.
// Whenever the button is clicked, update the state by incrementing the timesClicked by 1.
//


import React, {Component} from 'react';

class DigitalClicker extends Component {

  state = {
      timesClicked: 0,
    }


  clicked = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked,
    });
  }

  render() {
    return (
      <button onClick={this.clicked}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;
