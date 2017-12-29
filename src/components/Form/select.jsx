import React from 'react';

export default class Select extends React.Component {
    state = {
    raitMovie: "9"
  };
  _userRaitChange = evt => {
    const target = evt.target;
    this.setState({ raitMovie: target.value }, () =>
      this.props.userVote(this.state.raitMovie)
    );
  };
  render () {
    const times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
     const { raitMovie } = this.state.raitMovie;
    //let items = times;
    return (
    <select name="numbers"
            className='MovieForm__input'
            id='select'
            value={raitMovie}
            onChange={this._userRaitChange}>
    {times.map( idx =>
        <option key={idx}>{idx}</option>)}
    </select>);
    }
}
