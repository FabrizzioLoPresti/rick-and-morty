import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Character } from '@/interfaces/Character'
import { getCharacters, getCharacter } from '@/services/apiServices'

interface CharacterState {
  characters: Character[]
  character: Character | null
  page: number
  pages: number | null
  loading: boolean
  error: string | null
}

const initialState: CharacterState = {
  characters: [],
  character: null,
  page: 1,
  pages: null,
  loading: false,
  error: null,
}

const characterSlice = createSlice({
  name: 'characters',
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
    },
    setPages(state, action: PayloadAction<number>) {
      state.pages = action.payload
    },
    getCharacterStart(state) {
      state.loading = true
      state.error = null
    },
    getCharacterSuccess(state, action: PayloadAction<Character>) {
      state.character = action.payload
      state.loading = false
      state.error = null
    },
    getCharacterFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {
  getCharactersStart,
  getCharactersSuccess,
  getCharactersFailure,
  setPage,
  setPages,
  getCharacterStart,
  getCharacterSuccess,
  getCharacterFailure
} = characterSlice.actions

export default characterSlice.reducer

export const fetchCharacters = (page: number) => async (dispatch: any) => {
  try {
    dispatch(getCharactersStart())
    const { results, info } = await getCharacters(page)
    dispatch(getCharactersSuccess(results))
    dispatch(setPages(info.pages))
  } catch (err: any) {
    dispatch(getCharactersFailure(err.message))
  }
}

export const fetchCharacter = (id: number) => async (dispatch: any) => {
  try {
    dispatch(getCharacterStart())
    const character = await getCharacter(id)
    dispatch(getCharacterSuccess(character))
  } catch (err: any) {
    dispatch(getCharacterFailure(err.message))
  }
}