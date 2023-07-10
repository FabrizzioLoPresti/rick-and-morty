'use client'

import { useEffect } from "react"
import { useAppDispatch } from "@/hooks/useReduxStore"
import { fetchCharacters } from "@/store/features/characters/characterSlice"
import List from "@/components/Characters/List"

export default function Home() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCharacters(1))
  }, [dispatch])

  return (
    <main>
      <List />
    </main>
  )
}
