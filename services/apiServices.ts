import { RootState } from '@/store/store'
import axios from '@/libs/axios'
import { Character } from '@/interfaces/Character'

type Respomse = {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: Character[]
}

export const getCharacters = async (page: number, filters: RootState['characters']['filters']): Promise<Respomse> => {
  const { gender, status } = filters
  const { data } = await axios.get('/character', {
    params: {
      page,
      ...(gender && { gender }),
      ...(status && { status }),
    }
  })
  return data
}

export const getCharacter = async (id: number): Promise<Character> => {
  const { data } = await axios.get(`/character/${id}`)
  return data
}