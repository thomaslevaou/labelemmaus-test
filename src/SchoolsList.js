// import React, { Component } from 'react'
import fetch from 'cross-fetch'
import './SchoolsList.css'

function displaySchoolAdress(htmlToPrint) {
  return { __html: htmlToPrint}
}

const SchoolsList = ({ schoolResults }) => (
  <div className="schoolsList">
    {schoolResults.numberOfSchools} écoles trouvées.
    <table className="table">
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
    /* data = {
      "_comment": "NOTICE: API limit for Dev/Test is 1 call per minute, up to 20 calls per day. This limit has been reached. You may continue to make calls, but this result is bogus data and should not be used in a production environment. To change your API plan, go to https://developer.schooldigger.com/admin/applications/",
      "numberOfSchools": 12857,
      "numberOfPages": 1286,
      "schoolList": [
        {
          "schoolid": "060429013779",
          "schoolName": "School #1682568234",
          "phone": "(555) 555-5555",
          "url": "https://www.schooldigger.com/(pathtoitem)",
          "urlCompare": "https://www.schooldigger.com/(pathtoitem)",
          "address": {
            "street": "123 Main St.",
            "city": "Anytown",
            "state": "CA",
            "stateFull": "California",
            "zip": "99999",
            "zip4": "9999",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Anytown/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/99999/search.aspx",
            "html": "27 rue Durantin<br />75018 Paris"
          },
          "lowGrade": "K",
          "highGrade": "12",
          "schoolLevel": "Other",
          "isCharterSchool": "No",
          "isMagnetSchool": "No",
          "isVirtualSchool": "Yes",
          "isTitleISchool": "No",
          "isTitleISchoolwideSchool": "No",
          "district": {
            "districtID": "0604290",
            "districtName": "School District #2093851705",
            "url": "https://www.schooldigger.com/(pathtoitem)",
            "rankURL": "https://www.schooldigger.com/(pathtorank)"
          },
          "county": {
            "countyName": "AnyCounty",
            "countyURL": "https://www.schooldigger.com/go/CA/county/AnyCounty/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "schoolYearlyDetails": [
            {
              "year": 2019,
              "numberOfStudents": 434,
              "percentFreeDiscLunch": 23.9,
              "percentofAfricanAmericanStudents": 70.4,
              "percentofAsianStudents": 19.43,
              "percentofHispanicStudents": 16.5,
              "percentofIndianStudents": 74.43,
              "percentofPacificIslanderStudents": 25.27,
              "percentofWhiteStudents": 96.08,
              "percentofTwoOrMoreRaceStudents": 67.8,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 3.6,
              "pupilTeacherRatio": 24.4,
              "numberofAfricanAmericanStudents": 5,
              "numberofAsianStudents": 88,
              "numberofHispanicStudents": 25,
              "numberofIndianStudents": 12,
              "numberofPacificIslanderStudents": 3,
              "numberofWhiteStudents": 2,
              "numberofTwoOrMoreRaceStudents": 51,
              "numberofUnspecifiedRaceStudents": null
            }
          ],
          "isPrivate": false,
          "privateDays": null,
          "privateHours": null,
          "privateHasLibrary": null,
          "privateCoed": null,
          "privateOrientation": null,
          "hasBoundary": false
        },
        {
          "schoolid": "069999953556",
          "schoolName": "School #304085033",
          "phone": "(555) 555-5555",
          "url": "https://www.schooldigger.com/(pathtoitem)",
          "urlCompare": "https://www.schooldigger.com/(pathtoitem)",
          "address": {
            "street": "123 Main St.",
            "city": "Anytown",
            "state": "CA",
            "stateFull": "California",
            "zip": "99999",
            "zip4": "9999",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Anytown/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/99999/search.aspx",
            "html": "123 Main St.<br />Anytown, CA 99999-9999"
          },
          "lowGrade": "K",
          "highGrade": "6",
          "schoolLevel": "Private",
          "isCharterSchool": "(n/a)",
          "isMagnetSchool": "(n/a)",
          "isVirtualSchool": "(n/a)",
          "isTitleISchool": "(n/a)",
          "isTitleISchoolwideSchool": "(n/a)",
          "county": {
            "countyName": "AnyCounty",
            "countyURL": "https://www.schooldigger.com/go/CA/county/AnyCounty/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "schoolYearlyDetails": [
            {
              "year": 2018,
              "numberOfStudents": 80,
              "percentFreeDiscLunch": null,
              "percentofAfricanAmericanStudents": 30.89,
              "percentofAsianStudents": 41.6,
              "percentofHispanicStudents": 49.93,
              "percentofIndianStudents": 3.15,
              "percentofPacificIslanderStudents": 45.3,
              "percentofWhiteStudents": 47.73,
              "percentofTwoOrMoreRaceStudents": 41.34,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 11.4,
              "pupilTeacherRatio": 17.9,
              "numberofAfricanAmericanStudents": 93,
              "numberofAsianStudents": 11,
              "numberofHispanicStudents": 80,
              "numberofIndianStudents": 97,
              "numberofPacificIslanderStudents": 47,
              "numberofWhiteStudents": 29,
              "numberofTwoOrMoreRaceStudents": 88,
              "numberofUnspecifiedRaceStudents": null
            }
          ],
          "isPrivate": true,
          "privateDays": 245,
          "privateHours": 6.0,
          "privateHasLibrary": false,
          "privateCoed": "Coed",
          "privateOrientation": "Nonsectarian",
          "hasBoundary": null
        },
        {
          "schoolid": "069999905482",
          "schoolName": "School #2129362833",
          "phone": "(555) 555-5555",
          "url": "https://www.schooldigger.com/(pathtoitem)",
          "urlCompare": "https://www.schooldigger.com/(pathtoitem)",
          "address": {
            "street": "123 Main St.",
            "city": "Anytown",
            "state": "CA",
            "stateFull": "California",
            "zip": "99999",
            "zip4": "9999",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Anytown/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/99999/search.aspx",
            "html": "123 Main St.<br />Anytown, CA 99999-9999"
          },
          "lowGrade": "PK",
          "highGrade": "2",
          "schoolLevel": "Private",
          "isCharterSchool": "(n/a)",
          "isMagnetSchool": "(n/a)",
          "isVirtualSchool": "(n/a)",
          "isTitleISchool": "(n/a)",
          "isTitleISchoolwideSchool": "(n/a)",
          "county": {
            "countyName": "AnyCounty",
            "countyURL": "https://www.schooldigger.com/go/CA/county/AnyCounty/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "schoolYearlyDetails": [
            {
              "year": 2018,
              "numberOfStudents": 498,
              "percentFreeDiscLunch": null,
              "percentofAfricanAmericanStudents": 90.2,
              "percentofAsianStudents": 3.8,
              "percentofHispanicStudents": 20.74,
              "percentofIndianStudents": 17.18,
              "percentofPacificIslanderStudents": 65.91,
              "percentofWhiteStudents": 14.27,
              "percentofTwoOrMoreRaceStudents": 19.09,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 1.0,
              "pupilTeacherRatio": 13.0,
              "numberofAfricanAmericanStudents": 55,
              "numberofAsianStudents": 67,
              "numberofHispanicStudents": 83,
              "numberofIndianStudents": 72,
              "numberofPacificIslanderStudents": 43,
              "numberofWhiteStudents": 99,
              "numberofTwoOrMoreRaceStudents": 21,
              "numberofUnspecifiedRaceStudents": null
            }
          ],
          "isPrivate": true,
          "privateDays": 205,
          "privateHours": 6.0,
          "privateHasLibrary": false,
          "privateCoed": "Coed",
          "privateOrientation": "Nonsectarian",
          "hasBoundary": false
        },
        {
          "schoolid": "069999930338",
          "schoolName": "School #343698633",
          "phone": "(555) 555-5555",
          "url": "https://www.schooldigger.com/(pathtoitem)",
          "urlCompare": "https://www.schooldigger.com/(pathtoitem)",
          "address": {
            "street": "123 Main St.",
            "city": "Anytown",
            "state": "CA",
            "stateFull": "California",
            "zip": "99999",
            "zip4": "9999",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Anytown/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/99999/search.aspx",
            "html": "123 Main St.<br />Anytown, CA 99999-9999"
          },
          "lowGrade": "2",
          "highGrade": "12",
          "schoolLevel": "Private",
          "isCharterSchool": "(n/a)",
          "isMagnetSchool": "(n/a)",
          "isVirtualSchool": "(n/a)",
          "isTitleISchool": "(n/a)",
          "isTitleISchoolwideSchool": "(n/a)",
          "county": {
            "countyName": "AnyCounty",
            "countyURL": "https://www.schooldigger.com/go/CA/county/AnyCounty/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "schoolYearlyDetails": [
            {
              "year": 2018,
              "numberOfStudents": 911,
              "percentFreeDiscLunch": null,
              "percentofAfricanAmericanStudents": 15.04,
              "percentofAsianStudents": 47.59,
              "percentofHispanicStudents": 74.19,
              "percentofIndianStudents": 36.75,
              "percentofPacificIslanderStudents": 47.58,
              "percentofWhiteStudents": 40.24,
              "percentofTwoOrMoreRaceStudents": 78.6,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 6.0,
              "pupilTeacherRatio": 14.3,
              "numberofAfricanAmericanStudents": 23,
              "numberofAsianStudents": 78,
              "numberofHispanicStudents": 23,
              "numberofIndianStudents": 63,
              "numberofPacificIslanderStudents": 45,
              "numberofWhiteStudents": 98,
              "numberofTwoOrMoreRaceStudents": 21,
              "numberofUnspecifiedRaceStudents": null
            }
          ],
          "isPrivate": true,
          "privateDays": 210,
          "privateHours": 5.2,
          "privateHasLibrary": false,
          "privateCoed": "Coed",
          "privateOrientation": "Nonsectarian",
          "hasBoundary": false
        },
        {
          "schoolid": "069999953557",
          "schoolName": "School #1632983321",
          "phone": "(555) 555-5555",
          "url": "https://www.schooldigger.com/(pathtoitem)",
          "urlCompare": "https://www.schooldigger.com/(pathtoitem)",
          "address": {
            "street": "123 Main St.",
            "city": "Anytown",
            "state": "CA",
            "stateFull": "California",
            "zip": "99999",
            "zip4": "9999",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Anytown/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/99999/search.aspx",
            "html": "123 Main St.<br />Anytown, CA 99999-9999"
          },
          "lowGrade": "PK",
          "highGrade": "1",
          "schoolLevel": "Private",
          "isCharterSchool": "(n/a)",
          "isMagnetSchool": "(n/a)",
          "isVirtualSchool": "(n/a)",
          "isTitleISchool": "(n/a)",
          "isTitleISchoolwideSchool": "(n/a)",
          "county": {
            "countyName": "AnyCounty",
            "countyURL": "https://www.schooldigger.com/go/CA/county/AnyCounty/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "schoolYearlyDetails": [
            {
              "year": 2018,
              "numberOfStudents": 2,
              "percentFreeDiscLunch": null,
              "percentofAfricanAmericanStudents": 25.84,
              "percentofAsianStudents": 61.58,
              "percentofHispanicStudents": 12.82,
              "percentofIndianStudents": 97.45,
              "percentofPacificIslanderStudents": 29.9,
              "percentofWhiteStudents": 96.98,
              "percentofTwoOrMoreRaceStudents": 42.03,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 3.0,
              "pupilTeacherRatio": 8.6,
              "numberofAfricanAmericanStudents": 17,
              "numberofAsianStudents": 23,
              "numberofHispanicStudents": 94,
              "numberofIndianStudents": 36,
              "numberofPacificIslanderStudents": 62,
              "numberofWhiteStudents": 75,
              "numberofTwoOrMoreRaceStudents": 98,
              "numberofUnspecifiedRaceStudents": null
            }
          ],
          "isPrivate": true,
          "privateDays": null,
          "privateHours": 6.0,
          "privateHasLibrary": true,
          "privateCoed": "Coed",
          "privateOrientation": "Nonsectarian",
          "hasBoundary": null
        },
        {
          "schoolid": "069999942016",
          "schoolName": "School #2005464783",
          "phone": "(555) 555-5555",
          "url": "https://www.schooldigger.com/(pathtoitem)",
          "urlCompare": "https://www.schooldigger.com/(pathtoitem)",
          "address": {
            "street": "123 Main St.",
            "city": "Anytown",
            "state": "CA",
            "stateFull": "California",
            "zip": "99999",
            "zip4": "9999",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Anytown/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/99999/search.aspx",
            "html": "123 Main St.<br />Anytown, CA 99999-9999"
          },
          "lowGrade": "PK",
          "highGrade": "K",
          "schoolLevel": "Private",
          "isCharterSchool": "(n/a)",
          "isMagnetSchool": "(n/a)",
          "isVirtualSchool": "(n/a)",
          "isTitleISchool": "(n/a)",
          "isTitleISchoolwideSchool": "(n/a)",
          "county": {
            "countyName": "AnyCounty",
            "countyURL": "https://www.schooldigger.com/go/CA/county/AnyCounty/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "schoolYearlyDetails": [
            {
              "year": 2018,
              "numberOfStudents": 900,
              "percentFreeDiscLunch": null,
              "percentofAfricanAmericanStudents": 64.06,
              "percentofAsianStudents": 6.58,
              "percentofHispanicStudents": 32.18,
              "percentofIndianStudents": 81.18,
              "percentofPacificIslanderStudents": 13.96,
              "percentofWhiteStudents": 62.4,
              "percentofTwoOrMoreRaceStudents": 2.27,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 6.5,
              "pupilTeacherRatio": 0.1,
              "numberofAfricanAmericanStudents": 50,
              "numberofAsianStudents": 25,
              "numberofHispanicStudents": 98,
              "numberofIndianStudents": 39,
              "numberofPacificIslanderStudents": 43,
              "numberofWhiteStudents": 51,
              "numberofTwoOrMoreRaceStudents": 74,
              "numberofUnspecifiedRaceStudents": null
            }
          ],
          "isPrivate": true,
          "privateDays": 194,
          "privateHours": 6.5,
          "privateHasLibrary": false,
          "privateCoed": "Coed",
          "privateOrientation": "Christian (no specific denomination)",
          "hasBoundary": false
        },
        {
          "schoolid": "069999953558",
          "schoolName": "School #1220108834",
          "phone": "(555) 555-5555",
          "url": "https://www.schooldigger.com/(pathtoitem)",
          "urlCompare": "https://www.schooldigger.com/(pathtoitem)",
          "address": {
            "street": "123 Main St.",
            "city": "Anytown",
            "state": "CA",
            "stateFull": "California",
            "zip": "99999",
            "zip4": "9999",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Anytown/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/99999/search.aspx",
            "html": "123 Main St.<br />Anytown, CA 99999-9999"
          },
          "lowGrade": "1",
          "highGrade": "8",
          "schoolLevel": "Private",
          "isCharterSchool": "(n/a)",
          "isMagnetSchool": "(n/a)",
          "isVirtualSchool": "(n/a)",
          "isTitleISchool": "(n/a)",
          "isTitleISchoolwideSchool": "(n/a)",
          "county": {
            "countyName": "AnyCounty",
            "countyURL": "https://www.schooldigger.com/go/CA/county/AnyCounty/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "schoolYearlyDetails": [
            {
              "year": 2018,
              "numberOfStudents": 466,
              "percentFreeDiscLunch": null,
              "percentofAfricanAmericanStudents": 6.81,
              "percentofAsianStudents": 72.1,
              "percentofHispanicStudents": 16.84,
              "percentofIndianStudents": 38.37,
              "percentofPacificIslanderStudents": 8.24,
              "percentofWhiteStudents": 18.55,
              "percentofTwoOrMoreRaceStudents": 61.24,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 1.3,
              "pupilTeacherRatio": 11.5,
              "numberofAfricanAmericanStudents": 18,
              "numberofAsianStudents": 6,
              "numberofHispanicStudents": 57,
              "numberofIndianStudents": 15,
              "numberofPacificIslanderStudents": 53,
              "numberofWhiteStudents": 5,
              "numberofTwoOrMoreRaceStudents": 16,
              "numberofUnspecifiedRaceStudents": null
            }
          ],
          "isPrivate": true,
          "privateDays": 100,
          "privateHours": null,
          "privateHasLibrary": true,
          "privateCoed": "Coed",
          "privateOrientation": "Nonsectarian",
          "hasBoundary": null
        },
        {
          "schoolid": "069999953559",
          "schoolName": "School #1012795967",
          "phone": "(555) 555-5555",
          "url": "https://www.schooldigger.com/(pathtoitem)",
          "urlCompare": "https://www.schooldigger.com/(pathtoitem)",
          "address": {
            "street": "123 Main St.",
            "city": "Anytown",
            "state": "CA",
            "stateFull": "California",
            "zip": "99999",
            "zip4": "9999",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Anytown/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/99999/search.aspx",
            "html": "123 Main St.<br />Anytown, CA 99999-9999"
          },
          "lowGrade": "PK",
          "highGrade": "PK",
          "schoolLevel": "Private",
          "isCharterSchool": "(n/a)",
          "isMagnetSchool": "(n/a)",
          "isVirtualSchool": "(n/a)",
          "isTitleISchool": "(n/a)",
          "isTitleISchoolwideSchool": "(n/a)",
          "county": {
            "countyName": "AnyCounty",
            "countyURL": "https://www.schooldigger.com/go/CA/county/AnyCounty/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "schoolYearlyDetails": [
            {
              "year": 2018,
              "numberOfStudents": 794,
              "percentFreeDiscLunch": null,
              "percentofAfricanAmericanStudents": 29.78,
              "percentofAsianStudents": 73.38,
              "percentofHispanicStudents": 81.15,
              "percentofIndianStudents": 91.78,
              "percentofPacificIslanderStudents": 88.39,
              "percentofWhiteStudents": 94.86,
              "percentofTwoOrMoreRaceStudents": 86.15,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": null,
              "pupilTeacherRatio": null,
              "numberofAfricanAmericanStudents": 63,
              "numberofAsianStudents": 59,
              "numberofHispanicStudents": 63,
              "numberofIndianStudents": 72,
              "numberofPacificIslanderStudents": 32,
              "numberofWhiteStudents": 58,
              "numberofTwoOrMoreRaceStudents": 99,
              "numberofUnspecifiedRaceStudents": null
            }
          ],
          "isPrivate": true,
          "privateDays": null,
          "privateHours": 10.5,
          "privateHasLibrary": false,
          "privateCoed": "Coed",
          "privateOrientation": "Nonsectarian",
          "hasBoundary": null
        },
        {
          "schoolid": "062827013394",
          "schoolName": "School #1411314663",
          "phone": "(555) 555-5555",
          "url": "https://www.schooldigger.com/(pathtoitem)",
          "urlCompare": "https://www.schooldigger.com/(pathtoitem)",
          "address": {
            "street": "123 Main St.",
            "city": "Anytown",
            "state": "CA",
            "stateFull": "California",
            "zip": "99999",
            "zip4": "9999",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Anytown/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/99999/search.aspx",
            "html": "123 Main St.<br />Anytown, CA 99999-9999"
          },
          "lowGrade": "",
          "highGrade": "",
          "schoolLevel": "",
          "isCharterSchool": "No",
          "isMagnetSchool": "(n/a)",
          "isVirtualSchool": "(n/a)",
          "isTitleISchool": "(n/a)",
          "isTitleISchoolwideSchool": "(n/a)",
          "district": {
            "districtID": "0628270",
            "districtName": "School District #1044105775",
            "url": "https://www.schooldigger.com/(pathtoitem)",
            "rankURL": "https://www.schooldigger.com/(pathtorank)"
          },
          "county": {
            "countyName": "AnyCounty",
            "countyURL": "https://www.schooldigger.com/go/CA/county/AnyCounty/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "schoolYearlyDetails": [],
          "isPrivate": false,
          "privateDays": null,
          "privateHours": null,
          "privateHasLibrary": null,
          "privateCoed": null,
          "privateOrientation": null,
          "hasBoundary": true
        },
        {
          "schoolid": "061044001166",
          "schoolName": "School #814729509",
          "phone": "(555) 555-5555",
          "url": "https://www.schooldigger.com/(pathtoitem)",
          "urlCompare": "https://www.schooldigger.com/(pathtoitem)",
          "address": {
            "street": "123 Main St.",
            "city": "Anytown",
            "state": "CA",
            "stateFull": "California",
            "zip": "99999",
            "zip4": "9999",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Anytown/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/99999/search.aspx",
            "html": "123 Main St.<br />Anytown, CA 99999-9999"
          },
          "lowGrade": "K",
          "highGrade": "6",
          "schoolLevel": "Elementary",
          "isCharterSchool": "No",
          "isMagnetSchool": "No",
          "isVirtualSchool": "No",
          "isTitleISchool": "No",
          "isTitleISchoolwideSchool": "No",
          "district": {
            "districtID": "0610440",
            "districtName": "School District #1920789956",
            "url": "https://www.schooldigger.com/(pathtoitem)",
            "rankURL": "https://www.schooldigger.com/(pathtorank)"
          },
          "county": {
            "countyName": "AnyCounty",
            "countyURL": "https://www.schooldigger.com/go/CA/county/AnyCounty/search.aspx"
          },
          "rankHistory": [
            {
              "year": 2019,
              "rank": 556,
              "rankOf": 1000,
              "rankStars": 0,
              "rankLevel": "Elementary",
              "rankStatewidePercentage": 81.83,
              "averageStandardScore": 55.02
            },
            {
              "year": 2018,
              "rank": 817,
              "rankOf": 1000,
              "rankStars": 2,
              "rankLevel": "Elementary",
              "rankStatewidePercentage": 45.33,
              "averageStandardScore": 14.13
            }
          ],
          "rankMovement": 51,
          "schoolYearlyDetails": [
            {
              "year": 2019,
              "numberOfStudents": 564,
              "percentFreeDiscLunch": 48.16,
              "percentofAfricanAmericanStudents": 49.45,
              "percentofAsianStudents": 45.74,
              "percentofHispanicStudents": 9.05,
              "percentofIndianStudents": 50.91,
              "percentofPacificIslanderStudents": 59.66,
              "percentofWhiteStudents": 12.97,
              "percentofTwoOrMoreRaceStudents": 77.52,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 27.0,
              "pupilTeacherRatio": 27.3,
              "numberofAfricanAmericanStudents": 92,
              "numberofAsianStudents": 65,
              "numberofHispanicStudents": 58,
              "numberofIndianStudents": 12,
              "numberofPacificIslanderStudents": 86,
              "numberofWhiteStudents": 53,
              "numberofTwoOrMoreRaceStudents": 79,
              "numberofUnspecifiedRaceStudents": null
            }
          ],
          "isPrivate": false,
          "privateDays": null,
          "privateHours": null,
          "privateHasLibrary": null,
          "privateCoed": null,
          "privateOrientation": null,
          "hasBoundary": true
        }
      ]
    } */
    onStored(data)
  }).catch(err => {
    console.error(err)
  });
}
