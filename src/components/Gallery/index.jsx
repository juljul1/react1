import React from 'react';
import GalleryElem from './GalleryElem';
import './styles.css';
import gallery from './gallery.js';

export default class Gallery extends React.Component {
  render() {
      const galleryElem = gallery.map(movie  => <GalleryElem key={movie.id} {...movie} />);
    return (
        <div className="Gallery">
            {galleryElem}
        </div>
    );
  }
}
