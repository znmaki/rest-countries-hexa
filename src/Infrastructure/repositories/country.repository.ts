import { Country } from "../../Domain"
import { http, CountriesDTO } from "../http"

export const countryRepository = {
    getCountry: async () => {
        const countries = await http.get<CountriesDTO[]>('https://restcountries.com/v3.1/all')

        return countries.map((productDTO): Country => ({
            country_id: productDTO.cca2,
            title: productDTO.name.common,
            population: productDTO.population,
            region: productDTO.region,
            capital: productDTO.capital,
            flag: productDTO.flags.svg ? productDTO.flags.svg : productDTO.flags.png
        }))
    }

}