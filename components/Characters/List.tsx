import { useAppSelector } from "@/hooks/useReduxStore"
import CharacterCard from "./CharacterCard"

type Props = {}

const List = (props: Props) => {
  const { characters, loading, error } = useAppSelector(state => state.characters)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && characters && characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  )
}

export default List