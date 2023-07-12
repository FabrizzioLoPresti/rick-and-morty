import { useAppSelector } from "@/hooks/useReduxStore"
import CharacterCard from "./CharacterCard"
import LoadingComponent from "../Layout/LoadingComponent"
import ErrorComponent from "../Layout/ErrorComponent"

type Props = {}

const List = (props: Props) => {
  const { characters, loading, error } = useAppSelector(state => state.characters)

  if(error) return <ErrorComponent />

  const loadingComponents = Array.from({ length: 10 }).map((_, index) => (
    <LoadingComponent key={index} />
  ));
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5 place-items-center">
     {loading ? loadingComponents : (
        characters &&
        characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))
      )}
    </div>
  )
}

export default List