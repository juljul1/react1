import React from 'react';
import '../Header.css';
import logo from '../logo.svg';

export default class Header extends React.Component {
  render() {
      const { text } = this.props;
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{text}</h1>
            <ul className="Navigation">
                <li className="Navigation__item">
                    <a className="Navigation__link" href="#">ABOUT</a>
                    </li>
                <li className="Navigation__item">
                    <a className="Navigation__link" href="#">BROWSE</a>
                </li>
                <li className="Navigation__item">
                    <a className="Navigation__link" href="#">LOGIN</a>
                </li>
            </ul>
        </header>
    );
  }
}
