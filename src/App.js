import React, { Component } from 'react'
import SearchForm from './SearchForm'
import SchoolsList, {FAKE_SL}  from './SchoolsList'
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
        {(FAKE_SL && <SchoolsList schoolResults={FAKE_SL}/>)}
      </div>
    )
  }
}

export default App;
