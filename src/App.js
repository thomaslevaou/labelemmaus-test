import React, { Component } from 'react'
import SearchForm from './SearchForm'
import SchoolsList  from './SchoolsList'
import './App.css';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #E62460;
`;

class App extends Component {

  state = {
    schoolsList: null,
    loading: false
  };

  displaySchoolsList = schoolsList => {
    this.setState({ schoolsList })
  }

  updateLoadingStatus = loading => {
    this.setState({ loading })
  }

  render () {
    const { schoolsList, loading, currentPageNumber} = this.state
    return (
      <div className="schools">
        <SearchForm onStored={this.displaySchoolsList} onResearchLaunched={this.updateLoadingStatus}/>
        {currentPageNumber}
        {
          (this.state.loading ? (
            <div className="schoolsList">
              <ClipLoader
                css={override}
                size={150}
                color={"#E62460"}
                loading={loading}
              />
          </div>) : (schoolsList ? (schoolsList.schoolList.length ?
            (<SchoolsList schoolResults={schoolsList}/>) :
            (<div className='schoolsList'> Aucun résultat n'a été trouvé. </div>)) :
            (<div className='schoolsList'> Veuillez entrer des critères de recherche, puis appuyez sur "Rechercher" pour effectuer une recherche. </div>)
        ))}
      </div>
    )
  }
}

export default App;
