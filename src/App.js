import React, { Component } from 'react'
import SearchForm from './SearchForm'
import SchoolsList  from './SchoolsList'
import './App.css';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

// Gestion du .gif d'attente pendant l'appel de l'API
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #E62460;
`;

/** @class App
* @author Thomas Le Vaou
* @date 13/12/2020
* @brief La classe App gère les liens entre les composants du formulaire de recherche
*       et celui du résultat.
*/
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
