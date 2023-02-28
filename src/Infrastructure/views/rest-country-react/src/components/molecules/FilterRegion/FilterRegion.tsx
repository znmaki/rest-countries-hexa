import './styles/FilterRegion.css';

const FilterRegion = () => {
  return (
    <select className='filter-region'>
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europa</option>
      <option value="oceania">Oceania</option>
    </select>
  )
}

export default FilterRegion