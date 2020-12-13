// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SearchForm.css'
import { getAllSchools } from './SchoolsList'

class SearchForm extends Component {
  state = { stateName: '', schoolName: ''}

  handleCountry = event => {
    this.setState({ stateName: event.target.value })
  }

  handleSchoolName = event => {
    this.setState({ schoolName: event.target.value })
  }

  startSearch = event => {
    event.preventDefault()
    const researchParameters = { stateName: this.state.stateName, schoolName: this.state.schoolName }
    getAllSchools(researchParameters, this.props.onStored, this.props.onResearchLaunched)
  }

  render() {
    return (
      <form className="searchFormInput" onSubmit={this.startSearch}>
        <p>
          <label>
            Pays :
            <input
              type="text"
              value={this.state.stateName}
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


SearchForm.propTypes = {
  onStored: PropTypes.func.isRequired,
  onResearchLaunched: PropTypes.func.isRequired
}

export default SearchForm
