import React
import { Shirt } from 'lucide-react'
import UploadSection from './components/UploadSection'
import CanvasEditor from './components/CanvasEditor'
import ClothingCatalog from './components/ClothingCatalog'
import { useClothingStore } from './store/clothingStore'

function App() {
  const { userImage } = useClothingStore()

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center gap-3">
          <Shirt className="w-8 h-8 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-900">Virtual Clothing Room</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {!userImage ? (
          // Upload Section
          <UploadSection />
        ) : (
          // Editor Section
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Canvas Editor */}
            <div className="lg:col-span-2">
              <CanvasEditor />
            </div>

            {/* Clothing Catalog */}
            <div className="lg:col-span-1">
              <ClothingCatalog />
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
          <p>© 2024 Virtual Clothing Room. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
