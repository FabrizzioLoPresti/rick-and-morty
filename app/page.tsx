'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxStore"
import { fetchCharacters, setPage } from "@/store/features/characters/characterSlice"
import List from "@/components/Characters/List"
import Paginator from "@/components/Layout/Paginator"
import Filters from "@/components/Layout/Filters"

export default function Home() {
  const dispatch = useAppDispatch()
  const params = useSearchParams()
  const router = useRouter()
  const { filters: {gender, status} } = useAppSelector(state => state.characters)

  useEffect(() => {
    dispatch(fetchCharacters(Number(params.get('page') || 1)))
    dispatch(setPage(Number(params.get('page') || 1)))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])
  
  useEffect(() => {
    dispatch(fetchCharacters(1))
    dispatch(setPage(1))
    router.push('/')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gender, status])

  return (
    <main className="max-w-7xl mx-auto">
      <Filters />
      <List />
      <Paginator />
    </main>
  )
}
