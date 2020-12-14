import React, { PureComponent } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';
import { Container, Col, Row } from 'reactstrap';
import fetch from 'cross-fetch'
import './SchoolsList.css'

const mapStyle = {
    width: '100%',
    height: 600
}

function displaySchoolAdress(htmlToPrint) {
  return { __html: htmlToPrint}
}

const mapboxApiKey= 'pk.eyJ1IjoicGV0ZXJrb2xpb3MiLCJhIjoiY2tpbmhuY2hvMG9seTJxcDNtZXIyM2R2MyJ9.Hw_QvFeJNr1mFNOcg5o_aw'

const CustomMarker = ({index, marker}) => {
  return (
    <Marker
      longitude={marker.longitude}
      latitude={marker.latitude}>
      <div className="marker">
        <span><b>{index + 1}</b></span>
      </div>
    </Marker>
)};

const DEFAULT_STATE = {
  viewport: {
    latitude: 40.50884,
    longitude: -95.58781,
    zoom: 3
  },
  markers: []
}

class SchoolsList extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {...DEFAULT_STATE}
  }

  componentDidMount() {
    var newMarkers = []
    this.props.schoolResults.schoolList.forEach(({ schoolName, address }) => {
      if (address.latLong && address.latLong.longitude && address.latLong.latitude) {
        let newMarker = {
          name: schoolName,
          longitude: address.latLong.longitude,
          latitude: address.latLong.latitude,
        }
        newMarkers = newMarkers.concat(newMarker)
      }
    })
    this.setState(DEFAULT_STATE)
    console.log(this.state.markers)
  }


  render() {
    const { viewport, markers } = this.state;
    return (

    <div>
      La recherche a retourné {this.props.schoolResults.numberOfSchools} résultat(s).
      <Container fluid={true}>
        <Row>
          <Col>
            <ReactMapGL
              mapboxApiAccessToken={mapboxApiKey}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              {...viewport}
              {...mapStyle}
              onViewportChange={(viewport) => this.setState({viewport})}
            >
            {
              markers.map((marker, index) => {
                return(
                  <CustomMarker
                    key={`marker-${index}`}
                    index={index}
                    marker={marker}
                  />
                 )
              })
            }
            </ReactMapGL>
          </Col>
        </Row>
      </Container>
      <table className="table">
        <thead>
          <tr>
            <th> Nom de l'école </th>
            <th> Nombre d'étudiants </th>
            <th> Adresse complète </th>
          </tr>
        </thead>
        <tbody>
          {this.props.schoolResults.schoolList.map(({ schoolid, schoolName, schoolYearlyDetails, address}) => (
            <tr key={schoolid}>
              <td>{schoolName}</td>
              <td>{schoolYearlyDetails[0] ? schoolYearlyDetails[0].numberOfStudents : 'N/A'}</td>
              <td dangerouslySetInnerHTML={displaySchoolAdress(address.html)}/>
            </tr>
          ))}
        </tbody>
      </table>
    </div>);
  }

}

/* Proptypes à définir asap
SchoolsList.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      guesses: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      player: PropTypes.string.isRequired,
    })
  ).isRequired,
}
*/

export default SchoolsList


const APP_ID = 'f62510d9'
const APP_KEY = 'beb7298690a7654dde11f33a1586f871'
// const SCHOOLS_KEY = '::SchoolsList'

export function getAllSchools (researchParameters, onStored, onResearchLaunched) {
  onResearchLaunched(true)
  fetch('https://api.schooldigger.com/v1/schools?st=' + researchParameters.stateName +
        '&q=' + researchParameters.schoolName + '&page=' + researchParameters.page + '&appID=' + APP_ID + '&appKey=' + APP_KEY)
  .then(res => {
    if (res.status >= 400) {
      throw new Error("Bad response from server")
    }
    return res.json()
  }).then(data => {
    onResearchLaunched(false)
    onStored(data)
  }).catch(err => {
    console.error(err)
  });
}
