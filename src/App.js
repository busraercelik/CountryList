import React, { useState, useEffect } from "react"
import { Table } from "reactstrap"
import axios from "axios"

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log({ error }))
  }, [])

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
          {countries.map((country) => (
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

export default App
