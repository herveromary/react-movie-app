import React from "react";
import axios from "axios";
import { render } from "@testing-library/react";

class FormMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      commentaire: "",
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    axios
      .post("https://post-a-form.herokuapp.com/api/movies/", this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`film ajouté avec l'ID ${res.id} !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un film : ${e.message}`);
      });
  }

  render() {
    return (
      <div className='FormEmployee'>
        <h1>Saisie d'un film</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className='form-data'>
              <label htmlFor='titre'>Titre</label>
              <input
                type='text'
                id='title'
                name='title'
                onChange={this.onChange}
                value={this.state.title}
                required
              />
            </div>

            <div className='form-data'>
              <label htmlFor='firstname'>Poster</label>
              <input
                type='url'
                id='poster'
                name='poster'
                onChange={this.onChange}
                value={this.state.poster}
                required
              />
            </div>

            <div className='form-data'>
              <label htmlFor='email'>commentaire</label>
              <textarea
                type='textarea'
                id='comment'
                name='comment'
                onChange={this.onChange}
                value={this.state.comment}
                required
              />
            </div>
            <hr />
            <div className='form-data'>
              <input type='submit' value='Ajouter le film !' />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormMovie;
