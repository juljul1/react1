import React from 'react';
import './styles.css';
import Select from './select.jsx';
import Checkbox from './checkbox.jsx';
import v4 from 'uuid/v4';

export default class Form extends React.Component {
    state = {
        id: v4(),
        title: '',
        descr: '',
        raiting: '',
        poster: '',
        genre: ''
    };
    _addMovieTitleChange = (evt) => {
        this.setState({ title: evt.target.value });
    };
    _addMovieDescChange = (evt) => {
        this.setState({ descr: evt.target.value });
    };
    _userRaitChange = elem => {
       this.setState({ raiting: `${elem}/10` });
     };
     _userPosterChange = evt => {
        this.setState({ poster: evt.target.value });
      };
    _userGenresChange = elem => {
    this.setState({ genre: elem });
  };
    _formSubmit = evt => {
        evt.preventDefault();
    const userData = {
        title: this.state.title,
        descr: this.state.descr
        };
    if (this.state.title !== "" && this.state.descr !== "") {
      this.setState({ id: v4() }, () => this.props.onFormSubmit(this.state));
      this.form.reset();
    } else {
      alert("Please enter all Movie information!");
  }}

  render() {

      const { title, descr, raiting, poster, genre } = this.state;
    return (
        <section className="MovieForm">
            <form action="#"  onSubmit={this._formSubmit} ref ={node => (this.form = node)}>
                <fieldset className='MovieForm__field'>
                <legend className="MovieForm__lable">Add film</legend>
            <label className="MovieForm__lable">Title <br></br>
                <textarea type="text" className="MovieForm__input" cols="20" rows="1" value={title} onChange={this._addMovieTitleChange}>
                </textarea>
            </label>
            <label className="MovieForm__lable">Description<br></br>
                <textarea  type="text" className="MovieForm__txt" cols="30" rows="10" value={descr} onChange={this._addMovieDescChange}>
                </textarea>
            </label>

            <label className="MovieForm__lable">Rating<br></br>
                <Select className="MovieForm__input" userVote={this._userRaitChange} />
            </label>
            <label className="MovieForm__lable">Picture url <br></br>
                <textarea type="text" className="MovieForm__input" cols="30" rows="1" value={poster} onChange={this._userPosterChange}>
                </textarea>
            </label>
         <Checkbox onGenreChange={this._userGenresChange} />
            <button className="MovieForm__btn" >Submit</button>
        </fieldset>
        </form>
        </section>
    );
  }
}
