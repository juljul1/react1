import React from 'react';
import './styles.css';
import Header from '../Header';
import Gallery from '../Gallery';
import data from '../Gallery/data.js';
import Form from '../Form';


export default class App extends React.Component {

    state = {
   data: data
 };
 _onFormSubmit = el => {
   this.setState({
     data: [...this.state.data, el]
   });
   console.log(el);
};
_deletMovies = id =>{
     this.setState({data:this.state.data.filter( elem => elem.id!==id)});
   }
  render() {

    return (
      <div className="App">
        <Header text = "M o v i e   M a t e" />
        <div className="Gallery-Form">
            <Form  onFormSubmit={this._onFormSubmit} />
            <Gallery card={this.state.data} deletMovies={this._deletMovies} />
        </div>
    </div>
  );
  }
}
