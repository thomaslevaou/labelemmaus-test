import React, { Component } from 'react'
import SearchForm from './SearchForm'
import SchoolsList  from './SchoolsList'
import './App.css';
import mapboxgl from 'mapbox-gl';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


mapboxgl.accessToken = 'pk.eyJ1IjoicGV0ZXJrb2xpb3MiLCJhIjoiY2tpbmhuY2hvMG9seTJxcDNtZXIyM2R2MyJ9.Hw_QvFeJNr1mFNOcg5o_aw'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2,
      schoolsList: null,
      loading: false
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

  displaySchoolsList = schoolsList => {
    this.setState({ schoolsList })
  }

  updateLoadingStatus = loading => {
    this.setState({ loading })
  }

  render () {
    const { schoolsList } = this.state
    return (
      <div className="schools">
        <SearchForm onStored={this.displaySchoolsList} onResearchLaunched={this.updateLoadingStatus}/>
        <div ref={el => this.mapContainer = el} className="mapContainer"/>
        {
          (this.state.loading ? (
            <div className="schoolsList">
              <ClipLoader
                css={override}
                size={150}
                color={"#123abc"}
                loading={this.state.loading}
              />
          </div>) : (schoolsList && (schoolsList.schoolList.length ?
            (<SchoolsList schoolResults={schoolsList}/>) :
            (<div className='schoolsList'> Aucun résultat n'a été trouvé. </div>))
        ))}
      </div>
    )
  }
}

export default App;
