import React, { Component } from 'react'
import SearchForm from './SearchForm'
import SchoolsList  from './SchoolsList'
import './App.css';
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoicGV0ZXJrb2xpb3MiLCJhIjoiY2tpbmhuY2hvMG9seTJxcDNtZXIyM2R2MyJ9.Hw_QvFeJNr1mFNOcg5o_aw'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2,
      schoolsList: null
    };
  }


  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
  }

  /* state = {
  } */

  displaySchoolsList = schoolsList => {
    this.setState({ schoolsList })
  }

  render () {
    const { schoolsList } = this.state
    return (
      <div className="schools">
        <SearchForm onStored={this.displaySchoolsList}/>
        <div ref={el => this.mapContainer = el} className="mapContainer"/>
        {(schoolsList && (schoolsList.schoolList.length ?
          (<SchoolsList schoolResults={schoolsList}/>) :
          (<div className='schoolsList'> Aucun résultat n'a été trouvé. </div>)
        ))}
        {/* (schoolsList && <SchoolsList schoolResults={schoolsList}/>) */}
      </div>
    )
  }
}

export default App;
