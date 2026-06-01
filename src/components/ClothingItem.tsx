import React from 'react'
import { Plus } from 'lucide-react'
import { useClothingStore } from '../store/clothingStore'
import { ClothingItem as ClothingItemType } from '../store/clothingStore'

interface Props {
  clothing: ClothingItemType
}

const ClothingItem: React.FC<Props> = ({ clothing }) => {
  const { addClothing, selectedClothing } = useClothingStore()
  const isSelected = selectedClothing.some(item => item.id === clothing.id)

  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600">
          <img
            src={clothing.image}
            alt={clothing.name}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{clothing.name}</p>
          <p className="text-xs text-gray-500">{clothing.color}</p>
        </div>
      </div>
      <button
        onClick={() => addClothing(clothing)}
        disabled={isSelected}
        className={`p-2 rounded transition-colors ${
          isSelected
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-indigo-600 text-white hover:bg-indigo-700'
        }`}
      >
        <Plus className="w-5 h-5" />
      </button>
    </div>
  )
}

export default ClothingItem
