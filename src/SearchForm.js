import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SearchForm.css'
import { getAllSchools } from './SchoolsList'
import { Container, Row } from 'reactstrap';


/** @class SearchForm
* @author Thomas Le Vaou
* @date 13/12/2020
* @brief Component qui gère le formulaire de recherche. 
*/
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
    const { stateName, schoolName, pageNumber } = this.state
    return (
      <Container fluid={true}>
      <form className="searchFormInputList" onSubmit={this.startSearch}>
      <Row>
        <h1 className="col-md-6"> Label Emmaüs - Test Technique </h1>
        <div className="col-md-6 credits">Développements réalisés par Thomas Le Vaou</div>
      </Row>
          <Row>
          <div className="form-group col-md-6">
              <label for="selectStateFromList">
                État des États-Unis :
              </label>
              <select id="selectStateFromList" className="form-control" onChange={event => this.handleStateName(event)} value={stateName}>
                {this.unitedStatesList.length && (
                    this.unitedStatesList.map((usState) => (
                      <option key={usState.code} value={usState.code}>{usState.code} - {usState.fullName}</option>
                    ))
                )}
              </select>
          </div>
          <div className="form-group col-md-6">
            <label for="schoolNameInput">
              Nom de l'école :
            </label>
              <input
                id="schoolNameInput"
                className="form-control"
                type="text"
                value={schoolName}
                onChange={this.handleSchoolName}
              />
          </div>
          </Row>
          <Row>
            <div className="form-group col-md-3 offset-md-6">
              <label for="pageNumberField">
                Page numéro :
              </label>
              <input
                id="pageNumberField"
                type="text"
                className="form-control"
                value={pageNumber}
                onChange={this.handlePageNumber}
              />
            </div>
            <div className="form-group col-md-3">
              <button type="submit" className="btn btn-lg formButton">Rechercher</button>
            </div>
          </Row>
      </form>
      </Container>
    )
  }
}


SearchForm.propTypes = {
  onStored: PropTypes.func.isRequired,
  onResearchLaunched: PropTypes.func.isRequired
}

export default SearchForm
