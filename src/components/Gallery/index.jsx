import React from 'react';
import GalleryElem from '../GalleryElem';
import './styles.css';
import v4 from 'uuid/v4';

const Gallery = ({card,deletMovies}) => (
    <div className="Gallery">
        {card.map( elem => <GalleryElem key={elem.id} {...elem}
            onDelete={()=>{ deletMovies(elem.id); }}/>)}
    </div>
);
export default Gallery;
