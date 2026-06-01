import React, { useRef } from 'react'
import { Upload } from 'lucide-react'
import { useClothingStore } from '../store/clothingStore'

const UploadSection: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { setUserImage } = useClothingStore()

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setUserImage(result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[500px]">
      <div
        className="bg-white rounded-lg shadow-lg p-12 text-center cursor-pointer hover:shadow-xl transition-shadow"
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Envie sua foto</h2>
        <p className="text-gray-600 mb-6">
          Clique ou arraste uma foto para começar a experimentar roupas
        </p>
        <div className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
          Selecionar foto
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>
    </div>
  )
}

export default UploadSection
