import { useEffect, useState } from 'react'
import './App.css'
import { countryService } from '../../../../Domain';

function App() {
  const [count, setCount] = useState(0)
  const [country, setCountry] = useState<any>([])

  useEffect(() => {
      countryService.getCountries().then(setCountry)  
  }, [])

console.log(country);

  return (
    <div className="App">
      <div>
        {country.map((country: any)=>(
          <p>{country.country_id}</p>
        ))}
      </div>
    </div>
  )
}

export default App
