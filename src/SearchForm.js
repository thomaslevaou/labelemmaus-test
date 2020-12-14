// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SearchForm.css'
import { getAllSchools } from './SchoolsList'

class SearchForm extends Component {
  state = { stateName: 'AL', schoolName: '', pageNumber: 1}

  unitedStatesList = [
    {code: 'AL', fullName: 'Alabama'},
    {code: 'AK', fullName: 'Alaska'},
    {code: 'AZ', fullName: 'Arizona'},
    {code: 'AR', fullName: 'Arkansas'},
    {code: 'CA', fullName: 'Californie'},
    {code: 'CO', fullName: 'Colorado'},
    {code: 'CT', fullName: 'Connecticut'},
    {code: 'DE', fullName: 'Delaware'},
    {code: 'FL', fullName: 'Floride'},
    {code: 'GA', fullName: 'Géorgie'},
    {code: 'HI', fullName: 'Hawaii'},
    {code: 'ID', fullName: 'Idaho'},
    {code: 'IL', fullName: 'Illinois'},
    {code: 'IN', fullName: 'Indiana'},
    {code: 'IA', fullName: 'Iowa'},
    {code: 'KS', fullName: 'Kansas'},
    {code: 'KY', fullName: 'Kentucky'},
    {code: 'LA', fullName: 'Louisiane'},
    {code: 'ME', fullName: 'Maine'},
    {code: 'MD', fullName: 'Maryland'},
    {code: 'MA', fullName: 'Massachusetts'},
    {code: 'MI', fullName: 'Michigan'},
    {code: 'MN', fullName: 'Minnesota'},
    {code: 'MS', fullName: 'Mississippi'},
    {code: 'MO', fullName: 'Missouri'},
    {code: 'MT', fullName: 'Montana'},
    {code: 'NE', fullName: 'Nebraska'},
    {code: 'NV', fullName: 'Nevada'},
    {code: 'NH', fullName: 'New Hampshire'},
    {code: 'NJ', fullName: 'New Jersey'},
    {code: 'NM', fullName: 'Nouveau Mexique'},
    {code: 'NY', fullName: 'New York'},
    {code: 'NC', fullName: 'Caroline Du Nord'},
    {code: 'ND', fullName: 'Dakota du Nord'},
    {code: 'OH', fullName: 'Ohio'},
    {code: 'OK', fullName: 'Oklahoma'},
    {code: 'OR', fullName: 'Oregon'},
    {code: 'PA', fullName: 'Pennsylvanie'},
    {code: 'RI', fullName: 'Rhode Island'},
    {code: 'SC', fullName: 'Caroline du Sud'},
    {code: 'SD', fullName: 'Dakota du Sud'},
    {code: 'TN', fullName: 'Tennessee'},
    {code: 'TX', fullName: 'Texas'},
    {code: 'UT', fullName: 'Utah'},
    {code: 'VT', fullName: 'Vermont'},
    {code: 'VA', fullName: 'Virginie'},
    {code: 'WA', fullName: 'Washington'},
    {code: 'WV', fullName: 'Virginie Occidentale'},
    {code: 'WI', fullName: 'Wisconsin'},
    {code: 'WY', fullName: 'Wyoming'}
  ];

  handleStateName = event => {
    this.setState({ stateName: event.target.value })
  }

  handleSchoolName = event => {
    this.setState({ schoolName: event.target.value })
  }

  handlePageNumber = event => {
    // Only numbers are allowed for the page number
    let value = event.target.value.replace(/\D+/, '')
    this.setState({ pageNumber: value })
  }


  startSearch = event => {
    event.preventDefault()
    const researchParameters = { stateName: this.state.stateName, schoolName: this.state.schoolName, page: this.state.pageNumber }
    getAllSchools(researchParameters, this.props.onStored, this.props.onResearchLaunched)
  }

  render() {
    const { stateName, schoolName, pageNumber} = this.state
    return (
      <form className="searchFormInput" onSubmit={this.startSearch}>
        <p>
          <label>
          État des États-Unis :
            <select onChange={event => this.handleStateName(event)} value={stateName}>
              {this.unitedStatesList.length && (
                  this.unitedStatesList.map((usState) => (
                    <option key={usState.code} value={usState.code}>{usState.code} - {usState.fullName}</option>
                  ))
              )}
            </select>
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
