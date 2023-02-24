export type Country = {
    country_id: string;
    flag: string;
    title: string;
    population: number;
    region: string;
    capital: string | string[] | undefined;
}