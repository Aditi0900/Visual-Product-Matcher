🖼️ Visual Product Matcher
An AI-powered tool that helps you find visually similar products by uploading an image or providing an image URL.
Built using Next.js, TailwindCSS, and CLIP (via @xenova/transformers). Runs entirely in the browser – no server needed!
🔗 Live Demo: https://visual-product-matcher.up.railway.app
📦 GitHub: Aditi0900/Visual-Product-Matcher
⚡ Features
📸 Upload an image or paste an image URL
🧠 Generate embeddings using CLIP (Contrastive Language–Image Pre-training)
🔍 Match your image against pre-computed product embeddings
💡 Fast, simple UI powered by Next.js and TailwindCSS
🌐 Fully client-side – easy to deploy on Railway, Vercel, or Render
🧪 Demo Workflow
Upload an image or provide a URL.
The app extracts its visual embedding using the CLIP model.
It compares this embedding with stored product embeddings.
The top visually similar products are displayed.
📂 Getting Started
Clone the repository and install dependencies:
git clone https://github.com/Aditi0900/Visual-Product-Matcher.git
cd visual-product-matcher
npm install
Then, run the development server:
npm run dev
Visit http://localhost:3000 to use the app locally.
🚀 Deployment
This app runs entirely on the client – you can deploy it to Railway, Vercel, Netlify, or Render with no backend configuration.
Deploy to Vercel
🧠 Powered By
Next.js – React framework for production
Tailwind CSS – Utility-first CSS framework
@xenova/transformers – Running CLIP in the browser (WebAssembly or WebGPU)
📦 Product Embeddings
Product embeddings are pre-computed and stored locally.
You can replace the existing embeddings file (public/data/products.json) with your own product catalog.
Each item should include an image URL and the corresponding CLIP embedding.
🛠️ Customize with Your Own Data
Generate CLIP embeddings using the same model (ViT-B/32 recommended).
Structure your product data like this:
[
  {
    "id": "1",
    "image": "/products/shoe1.jpg",
    "embedding": [0.123, 0.456, ..., 0.789]
  },
  ...
]
Replace the existing products.json in public/data/.
📄 License
MIT License © 2025 Aditi0900