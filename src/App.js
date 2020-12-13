import React, { Component } from 'react'
import SearchForm from './SearchForm'
import SchoolsList  from './SchoolsList'
import './App.css';

class App extends Component {

  state = {
    schoolsList: null
  }

  displaySchoolsList = schoolsList => {
    this.setState({ schoolsList })
  }

  render () {
    const { schoolsList } = this.state
    return (
      <div className="schools">
        <SearchForm onStored={this.displaySchoolsList}/>
        {(schoolsList && <SchoolsList schoolResults={schoolsList}/>)}
      </div>
    )
  }
}

export default App;
