import axios from '@/libs/axios'
import { Character } from '@/interfaces/Character'

export const getCharacters = async (page: number): Promise<Character[]> => {
  const { data } = await axios.get(`/character?page=${page}`)
  return data.results
}