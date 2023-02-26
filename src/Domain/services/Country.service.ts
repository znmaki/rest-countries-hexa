import { countryRepository } from "../../Infrastructure"

export const countryService = {
    getCountries: () => {
        return countryRepository.getCountry()
    },

    getCountryCCA: (cca: string) => {
        return countryRepository.getCountryCca2(cca)
    }
}