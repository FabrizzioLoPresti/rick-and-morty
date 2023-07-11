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

export const getCharacters = async (page: number): Promise<Respomse> => {
  const { data } = await axios.get(`/character?page=${page}`)
  return data
}

export const getCharacter = async (id: number): Promise<Character> => {
  const { data } = await axios.get(`/character/${id}`)
  return data
}