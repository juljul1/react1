import React from 'react';
import GalleryElem from '../GalleryElem';
import './styles.css';
import v4 from 'uuid/v4';

export default class Gallery extends React.Component {

  render() {
      const {card,deletMovies}= this.props;

    return (
            <div className="Gallery">
                {card.map( elem => <GalleryElem key={v4()} {...elem}
                    onDelete={()=>{ deletMovies(elem.id); }}/>)}
            </div>

    );
  }
}
