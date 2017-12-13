import React from 'react';
import '../App.css';
import Header from './Header';
import MainBlock from './Main';


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header text = "M o v i e   M a t e" />
        <MainBlock />

      </div>
    );
  }
}
