"use client"

import { useState } from "react"
import UploadBox from "../components/UploadBox"
import ProductCard from "../components/ProductCard"

export default function Home() {
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (file: File | null, imageUrl: string | null) => {
    try {
      setLoading(true)
      setError(null)
      setResults([])
      const formData = new FormData()
      if (file) formData.append("image", file)
      if (imageUrl) formData.append("imageUrl", imageUrl)
      const res = await fetch("/api/search", { method: "POST", body: formData })
      if (!res.ok) {
        setError("No product matches found")
        setLoading(false)
        return
      }
      const data = await res.json()
      setResults(data)
      if (!data || data.length === 0) setError("No product matches found")
    } catch {
      setError("No product matches found")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start px-4 py-10">
      <h1 className="text-3xl font-bold text-fuchsia-900 mb-8">Visual Product Matcher</h1>

      <div className="w-full max-w-4xl">
        <UploadBox onSearch={handleSearch} />
      </div>

      {loading && <p className="text-center mt-6 text-purple-700">Searching…</p>}

      {!loading && error && results.length === 0 && (
        <p className="text-center mt-6 text-pink-600 font-medium">✖ {error}</p>
      )}

      {!loading && results.length > 0 && (
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {results.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </main>
  )
}
