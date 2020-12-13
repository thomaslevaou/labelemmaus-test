// import React, { Component } from 'react'
import fetch from 'cross-fetch'
import './SchoolsList.css'

function displaySchoolAdress(htmlToPrint) {
  return { __html: htmlToPrint}
}

const SchoolsList = ({ schoolResults }) => (
  <div className="schoolsList">
    {schoolResults.numberOfSchools} écoles trouvées.
    <table className="schoolsList table">
      <thead>
        <tr>
          <th> Nom de l'école </th>
          <th> Nombre d'étudiants </th>
          <th> Adresse complète </th>
        </tr>
      </thead>
      <tbody>
        {schoolResults.schoolList.map(({ schoolid, schoolName, schoolYearlyDetails, address}) => (
          <tr key={schoolid}>
            <td>{schoolName}</td>
            <td>{schoolYearlyDetails[0] ? schoolYearlyDetails[0].numberOfStudents : 'N/A'}</td>
            <td dangerouslySetInnerHTML={displaySchoolAdress(address.html)}/>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

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

export function getAllSchools (researchParameters, onStored) {
  fetch('https://api.schooldigger.com/v1/schools?st=' + researchParameters.stateName +
        '&q=' + researchParameters.schoolName + '&appID=' + APP_ID + '&appKey=' + APP_KEY)
  .then(res => {
    if (res.status >= 400) {
      throw new Error("Bad response from server")
    }
    return res.json()
  }).then(data => {
    onStored(data)
  }).catch(err => {
    console.error(err)
  });
}
