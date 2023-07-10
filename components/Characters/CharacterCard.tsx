import Image from "next/image"
import { Character } from "@/interfaces/Character"

type Props = {
  character: Character
}

const CharacterCard = ({character}: Props) => {
  const { name, image, origin: {name: nameOrigin} } = character

  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-5 flex flex-col justify-center items-center">
      <Image src={image} alt={name} width="200" height="200" className="rounded-full" />
      <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      <p className="text-xl font-bold text-gray-800">{nameOrigin}</p>
    </div>
  )
}

export default CharacterCard