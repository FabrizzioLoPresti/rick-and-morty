'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { useAppDispatch } from "@/hooks/useReduxStore"
import { fetchCharacters, setPage } from "@/store/features/characters/characterSlice"
import List from "@/components/Characters/List"
import Paginator from "@/components/Layout/Paginator"

export default function Home() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const params = useSearchParams()

  useEffect(() => {
    dispatch(fetchCharacters(Number(params.get('page') || 1)))
    dispatch(setPage(Number(params.get('page') || 1)))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  return (
    <main className="max-w-7xl mx-auto">
      <List />
      <Paginator />
    </main>
  )
}
