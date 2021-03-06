import React, { Component } from 'react';
import './App.css';
import Flexi from './component/flexi';
import Constants from './constants';
class App extends Component {
  constructor(){
    super();
    this.state = {
      config: Constants.config,
      formSubmissionSuccess: false
    }
  }

  onFlexiSubmit = (value) => {
      this.setState({formSubmissionSuccess: true});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Flexi Component Demo</h1>
        </header>
        { !this.state.formSubmissionSuccess 
          ? 
            <Flexi  onSubmit={this.onFlexiSubmit} config={this.state.config}/> 
          :
            <div className="formSuccess">Form has been submitted successfully</div>
        }
      </div>
    );
  }
}

export default App;
