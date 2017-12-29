import React, { Component } from "react";
import './styles.css';

export default class Checkbox extends Component {
  state = {
    isCheked: {
      action: false,
      drama: false,
      comedy: false
    },
    genre: []
  };

  _userGenresChange = evt => {
    let box = Object.assign(this.state.isCheked);
    box[evt.target.value] = evt.target.checked;
    let genres = Object.assign(this.state.genre);
    if (evt.target.checked) {
      genres = [...genres, evt.target.value];
      this.setState({ genre: genres }, () =>
        this.props.onGenreChange(this.state.genre)
      );
    } else {
      genres = genres.filter(item => item !== evt.target.value);
      this.setState({ genre: genres }, () =>
        this.props.onGenreChange(this.state.genre)
      );
    }
    this.setState({ isCheked: box });
  };

  render() {
    return (
      <div>
        <label  className="movie__gender">
          <input type="checkbox" checked={this.state.isCheked.action}
            value="action" onChange={this._userGenresChange} />action
        </label>
        <label  className="movie__gender">
          <input type="checkbox" checked={this.state.isCheked.drama}
            value="drama" onChange={this._userGenresChange} />drama
        </label>
        <label  className="movie__gender">
          <input
            type="checkbox" checked={this.state.isCheked.comedy}
            value="comedy" onChange={this._userGenresChange} />comedy
        </label>
      </div>
    );
  }
}
