import { useAppDispatch, useAppSelector } from "@/hooks/useReduxStore"
import { setFilters } from "@/store/features/characters/characterSlice"

type Props = {}

const Filters = (props: Props) => {
  const dispatch = useAppDispatch()
  const { filters: {gender, status} } = useAppSelector(state => state.characters)

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setFilters recibe { status: string | null; gender: string | null }
    switch (e.target.name) {
      case 'status':
        dispatch(setFilters({status: e.target.value === 'all' ? null : e.target.value, gender}))
        break;
      case 'gender':
        dispatch(setFilters({status, gender: e.target.value === 'all' ? null : e.target.value}))
        break;
      default:
        break;
    }
  }

  return (
    <div className='px-2 py-4 rounded-md bg-gray-300 flex flex-col md:flex-row md:items-center md:justify-between text-gray-800'>
      <div className='space-x-3'>
        <label htmlFor="status">Status</label>
        <select name="status" id="status" onChange={handleFilterChange} value={status ? status : 'all'}>
          <option value="all">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className='space-x-3'>
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" onChange={handleFilterChange} value={gender ? gender : 'all'}>
          <option value="all">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </div>
  )
}

export default Filters