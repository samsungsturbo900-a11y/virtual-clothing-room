import React, { useState } from 'react'
import { Shirt, X } from 'lucide-react'
import { useClothingStore } from '../store/clothingStore'
import { CLOTHING_CATALOG } from '../data/clothingCatalog'
import ClothingItem from './ClothingItem'

const ClothingCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const { selectedClothing, removeClothing } = useClothingStore()

  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'shirt', label: 'Camisetas' },
    { id: 'pants', label: 'Calças' },
    { id: 'jacket', label: 'Jaquetas' },
    { id: 'dress', label: 'Vestidos' },
  ]

  const filteredClothing = selectedCategory === 'all'
    ? CLOTHING_CATALOG
    : CLOTHING_CATALOG.filter(item => item.category === selectedCategory)

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Shirt className="w-6 h-6 text-indigo-600" />
        <h2 className="text-xl font-bold text-gray-900">Catálogo</h2>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
              selectedCategory === category.id
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Clothing Items */}
      <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
        {filteredClothing.map(item => (
          <ClothingItem key={item.id} clothing={item} />
        ))}
      </div>

      {/* Selected Clothing */}
      {selectedClothing.length > 0 && (
        <div className="border-t pt-4">
          <h3 className="font-bold text-gray-900 mb-3">Selecionadas ({selectedClothing.length})</h3>
          <div className="space-y-2">
            {selectedClothing.map(item => {
              const clothing = CLOTHING_CATALOG.find(c => c.id === item.id)
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-gray-100 p-2 rounded"
                >
                  <span className="text-sm text-gray-700">{clothing?.name}</span>
                  <button
                    onClick={() => removeClothing(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default ClothingCatalog
