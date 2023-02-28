import { Neighbor } from "../../Domain"
import { http, CountriesDTO } from "../http"

export const neighborRepository = {
    getNeighbor: async (cca2: string) => {
        const countrie = await http.get<CountriesDTO[]>(`https://restcountries.com/v3.1/alpha/${cca2}`)
        return countrie.map((countryDTO): Neighbor => ({
            name: countryDTO.name.common,
        }))
    }
}