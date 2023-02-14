import { countryRepository } from "../../Infrastructure"

export const countryService = {
    getCountries: () => {
        return countryRepository.getCountry()
    }
}