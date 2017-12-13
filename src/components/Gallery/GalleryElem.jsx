import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import src from './img/Die_hard.jpg';

export default class GalleryElem extends React.Component {
  render() {
      const { title , raiting , genre, text } = this.props;
    return (
        <div className="Gallery-elem">
            <div className="Gallery-elem__discribe">
                <img src={src} className="Gallery-elem__pic" alt="icon" />
                <div>
                    <h2 className="Gallery-elem__title">{title}</h2>
                    <h5 className="Gallery-elem__ditail">
                    <b>RAITING:</b> {raiting}
                    </h5>
                </div>
            </div>
            <p className="Gallery-elem__text">{text}</p>
            <h5 className="Gallery-elem__ditail genre">
                <b>GENRE:</b> {genre}
            </h5>
            <div className="Gallery-elem__btn">
                <a href="#" className="Gallery-elem__delete">Delete</a>
            </div>
        </div>
    );
  }
}
GalleryElem.propTypes = {
    genre: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    raiting: PropTypes.number
}
