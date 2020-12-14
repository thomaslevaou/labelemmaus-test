import React, { PureComponent } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';
import { Container, Col, Row } from 'reactstrap';
import fetch from 'cross-fetch'
import './SchoolsList.css'

const mapStyle = {
    width: '100%',
    height: 350
}

function displaySchoolAdress(htmlToPrint) {
  return { __html: htmlToPrint}
}

const MAPBOX_API_KEY= 'pk.eyJ1IjoicGV0ZXJrb2xpb3MiLCJhIjoiY2tpbmhuY2hvMG9seTJxcDNtZXIyM2R2MyJ9.Hw_QvFeJNr1mFNOcg5o_aw'
const SCHOOLDIGGER_APP_ID = 'f62510d9'
const SCHOOLDIGGER_APP_KEY = 'beb7298690a7654dde11f33a1586f871'


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

class SchoolsList extends PureComponent {
  state = {
    viewport: {
      latitude: 40.50884,
      longitude: -95.58781,
      zoom: 3
    }
  }

  render() {
    const { viewport } = this.state;
    return (
    <div>
      La recherche a retourné {this.props.schoolResults.numberOfSchools} résultat(s).
      <Container fluid={true}>
        <Row>
          <Col>
            <ReactMapGL
              mapboxApiAccessToken={MAPBOX_API_KEY}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              {...viewport}
              {...mapStyle}
              onViewportChange={(viewport) => this.setState({viewport})}
            >
            {
              this.props.schoolResults.schoolList.map(({ schoolName, address }, index) => {
                if (address.latLong && address.latLong.longitude && address.latLong.latitude) {
                  let marker = {
                    name: schoolName,
                    longitude: address.latLong.longitude,
                    latitude: address.latLong.latitude,
                  }
                  return(
                    <CustomMarker
                      key={`marker-${index}`}
                      index={index}
                      marker={marker}
                    />
                  )
               }
               return ''
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


export function getAllSchools (researchParameters, onStored, onResearchLaunched) {
  onResearchLaunched(true)
  fetch('https://api.schooldigger.com/v1/schools?st=' + researchParameters.stateName +
        '&q=' + researchParameters.schoolName + '&page=' + researchParameters.page + '&appID=' + SCHOOLDIGGER_APP_ID + '&appKey=' + SCHOOLDIGGER_APP_KEY)
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
