import React, { useEffect, useRef } from 'react'
import { Download, RotateCcw } from 'lucide-react'
import { useClothingStore } from '../store/clothingStore'
import { CLOTHING_CATALOG } from '../data/clothingCatalog'

const CanvasEditor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { userImage, selectedClothing, clearAll } = useClothingStore()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !userImage) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Load and draw user image
    const img = new Image()
    img.onload = () => {
      // Set canvas size
      canvas.width = img.width
      canvas.height = img.height

      // Draw user image
      ctx.drawImage(img, 0, 0)

      // Draw clothing items
      selectedClothing.forEach((clothing) => {
        const clothingItem = CLOTHING_CATALOG.find(item => item.id === clothing.id)
        if (!clothingItem) return

        const clothingImg = new Image()
        clothingImg.onload = () => {
          ctx.save()
          ctx.translate(clothing.x + clothingImg.width / 2, clothing.y + clothingImg.height / 2)
          ctx.rotate((clothing.rotation * Math.PI) / 180)
          ctx.scale(clothing.scale, clothing.scale)
          ctx.drawImage(clothingImg, -clothingImg.width / 2, -clothingImg.height / 2)
          ctx.restore()
        }
        clothingImg.src = clothingItem.image
      })
    }
    img.src = userImage
  }, [userImage, selectedClothing])

  const handleDownload = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement('a')
    link.href = canvas.toDataURL('image/png')
    link.download = 'virtual-outfit.png'
    link.click()
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Visualização</h2>
      
      <div className="bg-gray-100 rounded-lg p-4 mb-6 flex justify-center">
        <canvas
          ref={canvasRef}
          className="max-w-full h-auto border-2 border-gray-300 rounded"
        />
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleDownload}
          className="flex-1 bg-indigo-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
        >
          <Download className="w-5 h-5" />
          Baixar Imagem
        </button>
        <button
          onClick={clearAll}
          className="flex-1 bg-gray-200 text-gray-900 px-4 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-5 h-5" />
          Recomeçar
        </button>
      </div>
    </div>
  )
}

export default CanvasEditor
