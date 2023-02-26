export type Country = {
    country_id: string;
    flag: string;
    title: string;
    population: number;
    region: string;
    capital?: string | string[];
}

export type CountryCCA2 = {
    country_id: string;
    flag: string;
    title: string;
    population: number;
    region: string;
    subregion: string;
    domain: string;
    currencies: string;
    languages?: any;
    borderC?: string[] | string;
    capital?: string | string[];
}