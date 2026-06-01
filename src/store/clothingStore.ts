import { create } from 'zustand'

export interface ClothingItem {
  id: string
  name: string
  category: 'shirt' | 'pants' | 'jacket' | 'dress'
  color: string
  image: string
}

export interface SelectedClothing {
  id: string
  x: number
  y: number
  scale: number
  rotation: number
}

interface ClothingStore {
  userImage: string | null
  selectedClothing: SelectedClothing[]
  setUserImage: (image: string) => void
  addClothing: (clothing: ClothingItem) => void
  removeClothing: (id: string) => void
  updateClothing: (id: string, updates: Partial<SelectedClothing>) => void
  clearAll: () => void
}

export const useClothingStore = create<ClothingStore>((set) => ({
  userImage: null,
  selectedClothing: [],
  
  setUserImage: (image) => set({ userImage: image }),
  
  addClothing: (clothing) => set((state) => ({
    selectedClothing: [
      ...state.selectedClothing,
      {
        id: clothing.id,
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
      }
    ]
  })),
  
  removeClothing: (id) => set((state) => ({
    selectedClothing: state.selectedClothing.filter(item => item.id !== id)
  })),
  
  updateClothing: (id, updates) => set((state) => ({
    selectedClothing: state.selectedClothing.map(item =>
      item.id === id ? { ...item, ...updates } : item
    )
  })),
  
  clearAll: () => set({ userImage: null, selectedClothing: [] })
}))
