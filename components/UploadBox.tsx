"use client"

import { useState } from "react"

interface UploadBoxProps {
  onSearch: (file: File | null, imageUrl: string | null) => void
}

export default function UploadBox({ onSearch }: UploadBoxProps) {
  const [url, setUrl] = useState("")
  const [preview, setPreview] = useState<string | null>(null)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setPreview(URL.createObjectURL(file))
    onSearch(file, null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!url.trim()) return
    setPreview(url.trim())
    onSearch(null, url.trim())
  }

  return (
    <div className="w-full">
      <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-rose-50 via-fuchsia-50 to-indigo-50 p-6 sm:p-8 lg:p-10 shadow-2xl">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-fuchsia-900">Add an image</h2>
          <p className="text-sm text-purple-500 mt-1">Upload a file or paste a URL to search</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-2 auto-rows-fr">
          <div className="min-w-0 flex flex-col gap-4 lg:gap-6">
            <label className="group relative flex h-44 items-center justify-center rounded-2xl border-2 border-dashed border-purple-300 bg-white hover:border-pink-500 transition">
              <input type="file" accept="image/*" onChange={handleFile} className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
              <div className="text-center">
                <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-pink-100 group-hover:bg-pink-200 grid place-items-center">
                  <span className="text-pink-600 text-xl">↑</span>
                </div>
                <p className="text-sm text-purple-700">Drop or click to upload</p>
              </div>
            </label>

            <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste image URL..."
                className="min-w-0 flex-1 rounded-xl border border-purple-300 bg-white px-4 py-3 text-sm outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
              />
              <button
                type="submit"
                className="rounded-xl px-6 py-3 text-sm font-medium bg-pink-600 text-white hover:bg-pink-700 active:bg-pink-800 transition"
              >
                Search
              </button>
            </form>
          </div>

          <div className="min-w-0 rounded-2xl bg-white border border-purple-200 p-4 flex items-center justify-center">
            {preview ? (
              <img src={preview} alt="Preview" className="max-h-[22rem] w-full rounded-xl object-contain" />
            ) : (
              <p className="text-purple-400 text-sm">Preview will appear here</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
