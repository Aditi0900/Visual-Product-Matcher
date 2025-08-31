interface ProductCardProps {
  product: {
    id: number
    name: string
    category: string
    image: string
    score: number
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="min-w-0 p-4 rounded-2xl bg-white border border-pink-100 shadow-sm hover:shadow-md transition">
      <div className="w-full overflow-hidden rounded-lg bg-gradient-to-br from-pink-100 to-purple-100">
        <img src={product.image} alt={product.name} className="block w-full aspect-[4/3] object-cover" />
      </div>
      <h3 className="mt-3 truncate font-semibold text-fuchsia-900">{product.name}</h3>
      <p className="text-sm text-pink-600">{product.category}</p>
      <p className="text-sm text-purple-800 mt-1">Similarity: {(product.score * 100).toFixed(1)}%</p>
    </div>
  )
}
