import { Country, CountryCCA2 } from "../../Domain"
import { http, CountriesDTO } from "../http"

export const countryRepository = {
    getCountry: async () => {
        const countries = await http.get<CountriesDTO[]>('https://restcountries.com/v3.1/all')

        return countries.map((countryDTO): Country => ({
            country_id: countryDTO.cca2,
            title: countryDTO.name.common,
            population: countryDTO.population,
            region: countryDTO.region,
            capital: countryDTO.capital,
            flag: countryDTO.flags.svg ? countryDTO.flags.svg : countryDTO.flags.png
        }))
    },

    getCountryCca2: async (cca2: string) => {
        const countrie = await http.get<CountriesDTO[]>(`https://restcountries.com/v3.1/alpha/${cca2}`)
        return countrie.map((countryDTO): CountryCCA2 => ({
            country_id: countryDTO.cca2,
            name: countryDTO.name.common,
            nativeName: countryDTO.name.nativeName ? Object.values(countryDTO.name.nativeName as any[])[0].official : countryDTO.name.common,
            population: countryDTO.population,
            region: countryDTO.region,
            subregion: countryDTO.subregion ? countryDTO.subregion : 'Not data',
            capital: countryDTO.capital,
            domain: countryDTO.tld ? countryDTO.tld[0] : 'No data',
            currencies: countryDTO.currencies ? Object.values(countryDTO.currencies as any[])[0].symbol : 'No data',
            languages: countryDTO.languages,
            borderC: countryDTO.borders ? countryDTO.borders : 'No data',
            flag: countryDTO.flags.svg ? countryDTO.flags.svg : countryDTO.flags.png
        }))
    }
}