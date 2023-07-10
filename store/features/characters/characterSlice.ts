import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Character } from '@/interfaces/Character'
import { getCharacters } from '@/services/apiServices'

interface CharacterState {
  characters: Character[]
  page: number
  loading: boolean
  error: string | null
}

const initialState: CharacterState = {
  characters: [],
  page: 1,
  loading: false,
  error: null,
}

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    getCharactersStart(state) {
      state.loading = true
      state.error = null
    },
    getCharactersSuccess(state, action: PayloadAction<Character[]>) {
      state.characters = action.payload
      state.loading = false
      state.error = null
    },
    getCharactersFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    }
  }
})

export const {
  getCharactersStart,
  getCharactersSuccess,
  getCharactersFailure,
  setPage
} = characterSlice.actions

export default characterSlice.reducer

export const fetchCharacters = (page: number) => async (dispatch: any) => {
  try {
    dispatch(getCharactersStart())
    const characters = await getCharacters(page)
    dispatch(getCharactersSuccess(characters))
  } catch (err: any) {
    dispatch(getCharactersFailure(err.message))
  }
}
