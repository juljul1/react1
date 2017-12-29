import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

export default class GalleryElem extends React.Component {

  render() {
      const { title , raiting , genre, descr, poster, onDelete } = this.props;

    return (

        <div className="Gallery-elem">
            <div className="Gallery-elem__discribe">
                <img src={poster} className="Gallery-elem__pic" alt="icon" />
                <div>
                    <h2 className="Gallery-elem__title">{title}</h2>
                    <h5 className="Gallery-elem__ditail">
                    <b>RAITING:</b> {raiting}
                    </h5>
                </div>
            </div>
            <p className="Gallery-elem__text">{descr}</p>
            
            <h5 className="Gallery-elem__ditail genre">
                <b>GENRE:</b> {genre}
            </h5>
            <button href="#" className="Gallery-elem__btn Gallery-elem__delete"  onClick={onDelete}>
                Delete
            </button>

        </div>
    );
  }
}
