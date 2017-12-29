import React from 'react';

export default class NavItem extends React.Component {
render()
     {
      const {link} = this.props;
      return(link.map( elem =>
            <li key={elem} className="Navigation__item">
            <a href="#" className="Navigation__link">{elem}</a></li> )
          )
    }
}
