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
const SCHOOLS_KEY = '::SchoolsList'

export function getAllSchools (researchParameters, onStored) {
  fetch('https://api.schooldigger.com/v1/schools?st=' + researchParameters.stateName +
        '&q=' + researchParameters.schoolName + '&appID=' + APP_ID + '&appKey=' + APP_KEY, {
    'method': 'GET'
  })
  .then(res => {
    if (res.status >= 400) {
      throw new Error("Bad response from server")
    }
    alert('Résultats trouvés ?')
    console.log(res)
    let results = {
      "numberOfSchools": 12857,
      "numberOfPages": 1286,
      "schoolList": [
        {
          "schoolid": "060429013779",
          "schoolName": "21st Century Learning Institute",
          "phone": "(951) 769-8424",
          "url": "https://www.schooldigger.com/go/CA/schools/0429013779/school.aspx",
          "urlCompare": "https://www.schooldigger.com/go/CA/schools/0429013779/search.aspx",
          "address": {
            "latLong": {
              "latitude": 33.934277,
              "longitude": -116.969275
            },
            "street": "939 E. 10th St.",
            "city": "Beaumont",
            "state": "CA",
            "stateFull": "California",
            "zip": "92223",
            "zip4": "1927",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Beaumont/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/92223/search.aspx",
            "html": "939 E. 10th St.<br />Beaumont, CA 92223-1927"
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
            "districtName": "Beaumont Unified",
            "url": "https://www.schooldigger.com/go/CA/district/04290/search.aspx",
            "rankURL": "https://www.schooldigger.com/go/CA/districtrank.aspx?finddistrict=04290"
          },
          "county": {
            "countyName": "Riverside County",
            "countyURL": "https://www.schooldigger.com/go/CA/county/Riverside+County/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "locationIsWithinBoundary": null,
          "schoolYearlyDetails": [
            {
              "year": 2019,
              "numberOfStudents": 88,
              "percentFreeDiscLunch": 50.0,
              "percentofAfricanAmericanStudents": 10.23,
              "percentofAsianStudents": 2.27,
              "percentofHispanicStudents": 51.14,
              "percentofIndianStudents": 0.0,
              "percentofPacificIslanderStudents": 1.14,
              "percentofWhiteStudents": 32.95,
              "percentofTwoOrMoreRaceStudents": 2.27,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 3.6,
              "pupilTeacherRatio": 24.4,
              "numberofAfricanAmericanStudents": 9,
              "numberofAsianStudents": 2,
              "numberofHispanicStudents": 45,
              "numberofIndianStudents": 0,
              "numberofPacificIslanderStudents": 1,
              "numberofWhiteStudents": 29,
              "numberofTwoOrMoreRaceStudents": 2,
              "numberofUnspecifiedRaceStudents": null
            },
            {
              "year": 2018,
              "numberOfStudents": 65,
              "percentFreeDiscLunch": 58.46,
              "percentofAfricanAmericanStudents": 6.15,
              "percentofAsianStudents": 1.54,
              "percentofHispanicStudents": 52.31,
              "percentofIndianStudents": 1.54,
              "percentofPacificIslanderStudents": 0.0,
              "percentofWhiteStudents": 36.92,
              "percentofTwoOrMoreRaceStudents": 1.54,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 3.8,
              "pupilTeacherRatio": 17.0,
              "numberofAfricanAmericanStudents": 4,
              "numberofAsianStudents": 1,
              "numberofHispanicStudents": 34,
              "numberofIndianStudents": 1,
              "numberofPacificIslanderStudents": 0,
              "numberofWhiteStudents": 24,
              "numberofTwoOrMoreRaceStudents": 1,
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
          "schoolName": "9 Fruits Learning Center",
          "phone": "(650) 962-1900",
          "url": "https://www.schooldigger.com/go/CA/schools/9999953556/school.aspx",
          "urlCompare": "https://www.schooldigger.com/go/CA/schools/9999953556/search.aspx",
          "address": {
            "latLong": {
              "latitude": 37.415424,
              "longitude": -122.099278
            },
            "street": "2484 Old Middle Field Way",
            "city": "Mountain View",
            "state": "CA",
            "stateFull": "California",
            "zip": "94043",
            "zip4": "",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Mountain+View/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/94043/search.aspx",
            "html": "2484 Old Middle Field Way<br />Mountain View, CA 94043"
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
            "countyName": "Santa Clara County",
            "countyURL": "https://www.schooldigger.com/go/CA/county/Santa+Clara+County/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "locationIsWithinBoundary": null,
          "schoolYearlyDetails": [
            {
              "year": 2018,
              "numberOfStudents": 205,
              "percentFreeDiscLunch": null,
              "percentofAfricanAmericanStudents": 0.0,
              "percentofAsianStudents": 91.22,
              "percentofHispanicStudents": 0.49,
              "percentofIndianStudents": 0.0,
              "percentofPacificIslanderStudents": 0.0,
              "percentofWhiteStudents": 2.93,
              "percentofTwoOrMoreRaceStudents": 5.37,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 11.4,
              "pupilTeacherRatio": 17.9,
              "numberofAfricanAmericanStudents": 0,
              "numberofAsianStudents": 187,
              "numberofHispanicStudents": 1,
              "numberofIndianStudents": 0,
              "numberofPacificIslanderStudents": 0,
              "numberofWhiteStudents": 6,
              "numberofTwoOrMoreRaceStudents": 11,
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
          "schoolName": "A B C Little School",
          "phone": "(818) 786-5169",
          "url": "https://www.schooldigger.com/go/CA/schools/9999905482/school.aspx",
          "urlCompare": "https://www.schooldigger.com/go/CA/schools/9999905482/search.aspx",
          "address": {
            "latLong": {
              "latitude": 34.188035,
              "longitude": -118.431665
            },
            "street": "6447 Woodman Ave",
            "city": "Van Nuys",
            "state": "CA",
            "stateFull": "California",
            "zip": "91401",
            "zip4": "",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Van+Nuys/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/91401/search.aspx",
            "html": "6447 Woodman Ave<br />Van Nuys, CA 91401"
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
            "countyName": "Los Angeles County",
            "countyURL": "https://www.schooldigger.com/go/CA/county/Los+Angeles+County/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "locationIsWithinBoundary": null,
          "schoolYearlyDetails": [
            {
              "year": 2018,
              "numberOfStudents": 103,
              "percentFreeDiscLunch": null,
              "percentofAfricanAmericanStudents": 4.85,
              "percentofAsianStudents": 0.0,
              "percentofHispanicStudents": 4.85,
              "percentofIndianStudents": 0.0,
              "percentofPacificIslanderStudents": 0.0,
              "percentofWhiteStudents": 0.97,
              "percentofTwoOrMoreRaceStudents": 1.94,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 1.0,
              "pupilTeacherRatio": 13.0,
              "numberofAfricanAmericanStudents": 5,
              "numberofAsianStudents": 0,
              "numberofHispanicStudents": 5,
              "numberofIndianStudents": 0,
              "numberofPacificIslanderStudents": 0,
              "numberofWhiteStudents": 1,
              "numberofTwoOrMoreRaceStudents": 2,
              "numberofUnspecifiedRaceStudents": null
            },
            {
              "year": 2016,
              "numberOfStudents": 86,
              "percentFreeDiscLunch": null,
              "percentofAfricanAmericanStudents": 6.98,
              "percentofAsianStudents": 0.0,
              "percentofHispanicStudents": 5.81,
              "percentofIndianStudents": 0.0,
              "percentofPacificIslanderStudents": 0.0,
              "percentofWhiteStudents": 2.33,
              "percentofTwoOrMoreRaceStudents": 1.16,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 1.0,
              "pupilTeacherRatio": 14.0,
              "numberofAfricanAmericanStudents": 6,
              "numberofAsianStudents": 0,
              "numberofHispanicStudents": 5,
              "numberofIndianStudents": 0,
              "numberofPacificIslanderStudents": 0,
              "numberofWhiteStudents": 2,
              "numberofTwoOrMoreRaceStudents": 1,
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
          "schoolName": "A Better Chance School/Cal Autism Foundation",
          "phone": "(510) 262-1500",
          "url": "https://www.schooldigger.com/go/CA/schools/9999930338/school.aspx",
          "urlCompare": "https://www.schooldigger.com/go/CA/schools/9999930338/search.aspx",
          "address": {
            "latLong": {
              "latitude": 37.988489,
              "longitude": -122.330879
            },
            "street": "4138 Lakeside Dr",
            "city": "Richmond",
            "state": "CA",
            "stateFull": "California",
            "zip": "94806",
            "zip4": "",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Richmond/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/94806/search.aspx",
            "html": "4138 Lakeside Dr<br />Richmond, CA 94806"
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
            "countyName": "Contra Costa County",
            "countyURL": "https://www.schooldigger.com/go/CA/county/Contra+Costa+County/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "locationIsWithinBoundary": null,
          "schoolYearlyDetails": [
            {
              "year": 2018,
              "numberOfStudents": 86,
              "percentFreeDiscLunch": null,
              "percentofAfricanAmericanStudents": 8.14,
              "percentofAsianStudents": 16.28,
              "percentofHispanicStudents": 13.95,
              "percentofIndianStudents": 0.0,
              "percentofPacificIslanderStudents": 0.0,
              "percentofWhiteStudents": 51.16,
              "percentofTwoOrMoreRaceStudents": 10.47,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 6.0,
              "pupilTeacherRatio": 14.3,
              "numberofAfricanAmericanStudents": 7,
              "numberofAsianStudents": 14,
              "numberofHispanicStudents": 12,
              "numberofIndianStudents": 0,
              "numberofPacificIslanderStudents": 0,
              "numberofWhiteStudents": 44,
              "numberofTwoOrMoreRaceStudents": 9,
              "numberofUnspecifiedRaceStudents": null
            },
            {
              "year": 2016,
              "numberOfStudents": 37,
              "percentFreeDiscLunch": null,
              "percentofAfricanAmericanStudents": 8.11,
              "percentofAsianStudents": 16.22,
              "percentofHispanicStudents": 13.51,
              "percentofIndianStudents": 0.0,
              "percentofPacificIslanderStudents": 0.0,
              "percentofWhiteStudents": 51.35,
              "percentofTwoOrMoreRaceStudents": 10.81,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 5.0,
              "pupilTeacherRatio": 7.4,
              "numberofAfricanAmericanStudents": 3,
              "numberofAsianStudents": 6,
              "numberofHispanicStudents": 5,
              "numberofIndianStudents": 0,
              "numberofPacificIslanderStudents": 0,
              "numberofWhiteStudents": 19,
              "numberofTwoOrMoreRaceStudents": 4,
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
          "schoolName": "A Bright Beginning",
          "phone": "(323) 753-0043",
          "url": "https://www.schooldigger.com/go/CA/schools/9999953557/school.aspx",
          "urlCompare": "https://www.schooldigger.com/go/CA/schools/9999953557/search.aspx",
          "address": {
            "latLong": {
              "latitude": 33.959774,
              "longitude": -118.320578
            },
            "street": "2440 W Manchester Blvd",
            "city": "Inglewood",
            "state": "CA",
            "stateFull": "California",
            "zip": "90305",
            "zip4": "",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Inglewood/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/90305/search.aspx",
            "html": "2440 W Manchester Blvd<br />Inglewood, CA 90305"
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
            "countyName": "Los Angeles County",
            "countyURL": "https://www.schooldigger.com/go/CA/county/Los+Angeles+County/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "locationIsWithinBoundary": null,
          "schoolYearlyDetails": [
            {
              "year": 2018,
              "numberOfStudents": 66,
              "percentFreeDiscLunch": null,
              "percentofAfricanAmericanStudents": 0.0,
              "percentofAsianStudents": 0.0,
              "percentofHispanicStudents": 0.0,
              "percentofIndianStudents": 0.0,
              "percentofPacificIslanderStudents": 0.0,
              "percentofWhiteStudents": 0.0,
              "percentofTwoOrMoreRaceStudents": 0.0,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 3.0,
              "pupilTeacherRatio": 8.6,
              "numberofAfricanAmericanStudents": 0,
              "numberofAsianStudents": 0,
              "numberofHispanicStudents": 0,
              "numberofIndianStudents": 0,
              "numberofPacificIslanderStudents": 0,
              "numberofWhiteStudents": 0,
              "numberofTwoOrMoreRaceStudents": 0,
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
          "schoolName": "A Caring Touch Christian Family Center",
          "phone": "(661) 533-3910",
          "url": "https://www.schooldigger.com/go/CA/schools/9999942016/school.aspx",
          "urlCompare": "https://www.schooldigger.com/go/CA/schools/9999942016/search.aspx",
          "address": {
            "latLong": {
              "latitude": 34.558699,
              "longitude": -118.07563
            },
            "street": "3035 E Ave S",
            "city": "Palmdale",
            "state": "CA",
            "stateFull": "California",
            "zip": "93550",
            "zip4": "",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Palmdale/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/93550/search.aspx",
            "html": "3035 E Ave S<br />Palmdale, CA 93550"
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
            "countyName": "Los Angeles County",
            "countyURL": "https://www.schooldigger.com/go/CA/county/Los+Angeles+County/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "locationIsWithinBoundary": null,
          "schoolYearlyDetails": [
            {
              "year": 2018,
              "numberOfStudents": 4,
              "percentFreeDiscLunch": null,
              "percentofAfricanAmericanStudents": 0.0,
              "percentofAsianStudents": 0.0,
              "percentofHispanicStudents": 25.00,
              "percentofIndianStudents": 0.0,
              "percentofPacificIslanderStudents": 0.0,
              "percentofWhiteStudents": 0.0,
              "percentofTwoOrMoreRaceStudents": 0.0,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 6.5,
              "pupilTeacherRatio": 0.1,
              "numberofAfricanAmericanStudents": 0,
              "numberofAsianStudents": 0,
              "numberofHispanicStudents": 1,
              "numberofIndianStudents": 0,
              "numberofPacificIslanderStudents": 0,
              "numberofWhiteStudents": 0,
              "numberofTwoOrMoreRaceStudents": 0,
              "numberofUnspecifiedRaceStudents": null
            },
            {
              "year": 2016,
              "numberOfStudents": 37,
              "percentFreeDiscLunch": null,
              "percentofAfricanAmericanStudents": 0.0,
              "percentofAsianStudents": 0.0,
              "percentofHispanicStudents": 13.51,
              "percentofIndianStudents": 0.0,
              "percentofPacificIslanderStudents": 0.0,
              "percentofWhiteStudents": 0.0,
              "percentofTwoOrMoreRaceStudents": 0.0,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 1.0,
              "pupilTeacherRatio": 5.0,
              "numberofAfricanAmericanStudents": 0,
              "numberofAsianStudents": 0,
              "numberofHispanicStudents": 5,
              "numberofIndianStudents": 0,
              "numberofPacificIslanderStudents": 0,
              "numberofWhiteStudents": 0,
              "numberofTwoOrMoreRaceStudents": 0,
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
          "schoolName": "A Dare To Care Learning Center",
          "phone": "(310) 266-5831",
          "url": "https://www.schooldigger.com/go/CA/schools/9999953558/school.aspx",
          "urlCompare": "https://www.schooldigger.com/go/CA/schools/9999953558/search.aspx",
          "address": {
            "latLong": {
              "latitude": null,
              "longitude": null
            },
            "street": "PO Box 3513",
            "city": "Culver City",
            "state": "CA",
            "stateFull": "California",
            "zip": "90231",
            "zip4": "",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Culver+City/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/90231/search.aspx",
            "html": "PO Box 3513<br />Culver City, CA 90231"
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
            "countyName": "Los Angeles County",
            "countyURL": "https://www.schooldigger.com/go/CA/county/Los+Angeles+County/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "locationIsWithinBoundary": null,
          "schoolYearlyDetails": [
            {
              "year": 2018,
              "numberOfStudents": 15,
              "percentFreeDiscLunch": null,
              "percentofAfricanAmericanStudents": 40.0,
              "percentofAsianStudents": 0.0,
              "percentofHispanicStudents": 26.67,
              "percentofIndianStudents": 0.0,
              "percentofPacificIslanderStudents": 0.0,
              "percentofWhiteStudents": 26.67,
              "percentofTwoOrMoreRaceStudents": 6.67,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 1.3,
              "pupilTeacherRatio": 11.5,
              "numberofAfricanAmericanStudents": 6,
              "numberofAsianStudents": 0,
              "numberofHispanicStudents": 4,
              "numberofIndianStudents": 0,
              "numberofPacificIslanderStudents": 0,
              "numberofWhiteStudents": 4,
              "numberofTwoOrMoreRaceStudents": 1,
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
          "schoolName": "A New World Of Montessori",
          "phone": "(925) 791-5458",
          "url": "https://www.schooldigger.com/go/CA/schools/9999953559/school.aspx",
          "urlCompare": "https://www.schooldigger.com/go/CA/schools/9999953559/search.aspx",
          "address": {
            "latLong": {
              "latitude": 37.817199,
              "longitude": -121.99755999999999
            },
            "street": "101 Sonora Ave",
            "city": "Danville",
            "state": "CA",
            "stateFull": "California",
            "zip": "94526",
            "zip4": "",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Danville/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/94526/search.aspx",
            "html": "101 Sonora Ave<br />Danville, CA 94526"
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
            "countyName": "Contra Costa County",
            "countyURL": "https://www.schooldigger.com/go/CA/county/Contra+Costa+County/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "locationIsWithinBoundary": null,
          "schoolYearlyDetails": [
            {
              "year": 2018,
              "numberOfStudents": 24,
              "percentFreeDiscLunch": null,
              "percentofAfricanAmericanStudents": 0.0,
              "percentofAsianStudents": 0.0,
              "percentofHispanicStudents": 0.0,
              "percentofIndianStudents": 0.0,
              "percentofPacificIslanderStudents": 0.0,
              "percentofWhiteStudents": 0.0,
              "percentofTwoOrMoreRaceStudents": 0.0,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": null,
              "pupilTeacherRatio": null,
              "numberofAfricanAmericanStudents": 0,
              "numberofAsianStudents": 0,
              "numberofHispanicStudents": 0,
              "numberofIndianStudents": 0,
              "numberofPacificIslanderStudents": 0,
              "numberofWhiteStudents": 0,
              "numberofTwoOrMoreRaceStudents": 0,
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
          "schoolName": "A Place to Grow",
          "phone": "(805) 640-4300",
          "url": "https://www.schooldigger.com/go/CA/schools/2827013394/school.aspx",
          "urlCompare": "https://www.schooldigger.com/go/CA/schools/2827013394/search.aspx",
          "address": {
            "latLong": {
              "latitude": 34.449656,
              "longitude": -119.242538
            },
            "street": "414 E. Ojai Ave.",
            "city": "Ojai",
            "state": "CA",
            "stateFull": "California",
            "zip": "93023",
            "zip4": "2819",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Ojai/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/93023/search.aspx",
            "html": "414 E. Ojai Ave.<br />Ojai, CA 93023-2819"
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
            "districtName": "Ojai Unified",
            "url": "https://www.schooldigger.com/go/CA/district/28270/search.aspx",
            "rankURL": "https://www.schooldigger.com/go/CA/districtrank.aspx?finddistrict=28270"
          },
          "county": {
            "countyName": "Ventura County",
            "countyURL": "https://www.schooldigger.com/go/CA/county/Ventura+County/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "locationIsWithinBoundary": null,
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
          "schoolName": "A. E. Arnold Elementary",
          "phone": "(714) 220-6965",
          "url": "https://www.schooldigger.com/go/CA/schools/1044001166/school.aspx",
          "urlCompare": "https://www.schooldigger.com/go/CA/schools/1044001166/search.aspx",
          "address": {
            "latLong": {
              "latitude": 33.82683,
              "longitude": -118.055721
            },
            "street": "9281 Denni St.",
            "city": "Cypress",
            "state": "CA",
            "stateFull": "California",
            "zip": "90630",
            "zip4": "2724",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Cypress/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/90630/search.aspx",
            "html": "9281 Denni St.<br />Cypress, CA 90630-2724"
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
            "districtName": "Cypress Elementary",
            "url": "https://www.schooldigger.com/go/CA/district/10440/search.aspx",
            "rankURL": "https://www.schooldigger.com/go/CA/districtrank.aspx?finddistrict=10440"
          },
          "county": {
            "countyName": "Orange County",
            "countyURL": "https://www.schooldigger.com/go/CA/county/Orange+County/search.aspx"
          },
          "rankHistory": [
            {
              "year": 2019,
              "rank": 1140,
              "rankOf": 5789,
              "rankStars": 4,
              "rankLevel": "Elementary",
              "rankStatewidePercentage": 80.31,
              "averageStandardScore": 80.69846
            },
            {
              "year": 2018,
              "rank": 1059,
              "rankOf": 5662,
              "rankStars": 4,
              "rankLevel": "Elementary",
              "rankStatewidePercentage": 81.3,
              "averageStandardScore": 81.25938
            }
          ],
          "rankMovement": -81,
          "locationIsWithinBoundary": null,
          "schoolYearlyDetails": [
            {
              "year": 2019,
              "numberOfStudents": 739,
              "percentFreeDiscLunch": 38.29,
              "percentofAfricanAmericanStudents": 5.68,
              "percentofAsianStudents": 36.67,
              "percentofHispanicStudents": 28.69,
              "percentofIndianStudents": 0.14,
              "percentofPacificIslanderStudents": 0.41,
              "percentofWhiteStudents": 25.44,
              "percentofTwoOrMoreRaceStudents": 2.98,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 27.0,
              "pupilTeacherRatio": 27.3,
              "numberofAfricanAmericanStudents": 42,
              "numberofAsianStudents": 271,
              "numberofHispanicStudents": 212,
              "numberofIndianStudents": 1,
              "numberofPacificIslanderStudents": 3,
              "numberofWhiteStudents": 188,
              "numberofTwoOrMoreRaceStudents": 22,
              "numberofUnspecifiedRaceStudents": null
            },
            {
              "year": 2018,
              "numberOfStudents": 740,
              "percentFreeDiscLunch": 39.73,
              "percentofAfricanAmericanStudents": 5.41,
              "percentofAsianStudents": 36.89,
              "percentofHispanicStudents": 30.14,
              "percentofIndianStudents": 0.0,
              "percentofPacificIslanderStudents": 0.68,
              "percentofWhiteStudents": 24.05,
              "percentofTwoOrMoreRaceStudents": 2.84,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 29.0,
              "pupilTeacherRatio": 25.5,
              "numberofAfricanAmericanStudents": 40,
              "numberofAsianStudents": 273,
              "numberofHispanicStudents": 223,
              "numberofIndianStudents": 0,
              "numberofPacificIslanderStudents": 5,
              "numberofWhiteStudents": 178,
              "numberofTwoOrMoreRaceStudents": 21,
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
    }
    localStorage.setItem(SCHOOLS_KEY, results)
    onStored(results)
  })
  .catch(err => {
    console.error(err)
  });
}
