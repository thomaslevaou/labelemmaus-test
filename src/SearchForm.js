// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SearchForm.css'
import { getAllSchools } from './SchoolsList'

class SearchForm extends Component {
  state = { stateName: '', schoolName: '', pageNumber: 1}

  handleStateName = event => {
    this.setState({ stateName: event.target.value })
  }

  handleSchoolName = event => {
    this.setState({ schoolName: event.target.value })
  }

  handlePageNumber = event => {
    let value = event.target.value.replace(/\D+/, '')
    this.setState({ pageNumber: value })
  }

  startSearch = event => {
    event.preventDefault()
    const researchParameters = { stateName: this.state.stateName, schoolName: this.state.schoolName, page: this.state.page }
    getAllSchools(researchParameters, this.props.onStored, this.props.onResearchLaunched)
  }

  render() {
    const { stateName, schoolName, pageNumber} = this.state
    return (
      <form className="searchFormInput" onSubmit={this.startSearch}>
        <p>
          <label>
            Pays :
            <input
              type="text"
              value={stateName}
              onChange={this.handleStateName}
            />
          </label>
          <label>
            Nom de l'école :
            <input
              type="text"
              value={schoolName}
              onChange={this.handleSchoolName}
            />
          </label>
          <label>
            Page numéro :
            <input
              type="text"
              value={pageNumber}
              onChange={this.handlePageNumber}
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
