import React from 'react';
import './styles.css';
//import gallery from './gallery.js';

export default class Form extends React.Component {
  render() {
    return (
        <div className="MovieForm">
            <label className="MovieForm__lable">Title</label>
            <input type="text" className="MovieForm__input"></input>
            <label className="MovieForm__descr">Description</label>
            <input type="text" className="MovieForm__txt"></input>
            <label className="MovieForm__lable">Rating</label>
            <select type="text" className="MovieForm__input">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button className="MovieForm__btn">Submit</button>
        </div>
    );
  }
}
