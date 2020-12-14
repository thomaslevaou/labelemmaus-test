import React, { PureComponent } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';
import { Container, Row } from 'reactstrap';
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
const SCHOOLDIGGER_APP_ID = 'eae0df34'
const SCHOOLDIGGER_APP_KEY = '97413a49bd585791ef0eb9774adcce54'


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
      <Row>
        <div className="col-md-4 offset-md-4 numberOfResultText">
          La recherche a retourné {this.props.schoolResults.numberOfSchools} résultat(s).
        </div>
      </Row>
      <Container fluid={true}>
        <Row>
          <div class="col-md-12">
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
          </div>
        </Row>
      <br />
      <Row>
      <div className="col-md-12">
        <table className="table table-striped resultsTable table-bordered">
          <thead className="thead-emmaus">
            <tr>
              <th width='40%'> Nom de l'école </th>
              <th width='30%'> Nombre d'étudiants </th>
              <th width='30%'> Adresse complète </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {this.props.schoolResults.schoolList.map(({ schoolid, schoolName, schoolYearlyDetails, address}) => (
              <tr key={schoolid}>
                <td>{schoolName}</td>
                <td>{schoolYearlyDetails[0] ? schoolYearlyDetails[0].numberOfStudents : 'N/A'}</td>
                <td dangerouslySetInnerHTML={displaySchoolAdress(address.html)}/>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </Row>
    </Container>
    </div>);
  }
}

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
