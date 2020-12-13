// import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './SearchForm.css'


class SearchForm extends Component {
  state = { country: '', schoolName: ''}

  handleCountry = event => {
    this.setState({ country: event.target.value })
  }

  handleSchoolName = event => {
    this.setState({ schoolName: event.target.value })
  }

  startSearch = event => {
    event.preventDefault()
    // const newEntry = { country: this.state.country, schoolName: this.state.schoolName }
    alert('Recherche lancée !')
    // saveHOFEntry(newEntry, this.props.onStored)
  }

  render() {
    return (
      <form className="searchFormInput" onSubmit={this.startSearch}>
        <p>
          <label>
            Pays :
            <input
              type="text"
              value={this.state.country}
              onChange={this.handleCountry}
            />
          </label>
          <label>
            Nom de l'école :
            <input
              type="text"
              value={this.state.schoolName}
              onChange={this.handleSchoolName}
            />
          </label>
          <button type="submit">Rechercher</button>
        </p>
      </form>
    )
  }
}

/* SearchForm.propTypes = {
  guesses: PropTypes.number.isRequired,
  onStored: PropTypes.func.isRequired
} */

export default SearchForm
