import React, { useEffect } from "react"
import { Table } from "reactstrap"
import { connect } from "react-redux"
import {getCountries} from "./redux/actions/actionCreator"

function App(props) {

  useEffect(() => {
    props.getCountries();
  }, [])

  console.log(props);
  return (
    <div>
      <h3>Countries</h3>
      <Table hover size="sm">
        <thead>
          <tr>
            <th>Country</th>
            <th>Capital</th>
            <th>Region</th>
            <th>Native Name</th>
            <th>Flag</th>
          </tr>
        </thead>
        <tbody>
          {props.isLoading ? <img src="https://media0.giphy.com/media/cnzP4cmBsiOrccg20V/giphy.gif" alt="Loading" /> : props.countries.map((country) => (
            <tr key={country.name}>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>{country.region}</td>
              <td>{country.nativeName}</td>
              <td>
                <img
                  src={country.flag}
                  alt={country.name}
                  style={{ width: "100px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
const mapStateToProps = state => {
  return{
    countries: state.countries,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, {getCountries})(App)
