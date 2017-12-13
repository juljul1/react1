import React from 'react';
import './Form/styles.css';
import Gallery from './Gallery';
import Form from './Form';
//import gallery from './gallery.js';

export default class MainBlock extends React.Component {
  render() {
    return (
        <div className="MainBlock">
            <Gallery />
            <Form />
        </div>
    );
  }
}
