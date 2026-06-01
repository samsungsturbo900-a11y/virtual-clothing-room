import { ClothingItem } from '../store/clothingStore'

// Mock images using placeholder service
const PLACEHOLDER_SHIRT = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%234f46e5"%3E%3C/rect%3E%3Ctext x="50" y="50" font-size="12" fill="white" text-anchor="middle" dominant-baseline="middle"%3ECamiseta%3C/text%3E%3C/svg%3E'
const PLACEHOLDER_PANTS = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%233b82f6"%3E%3C/rect%3E%3Ctext x="50" y="50" font-size="12" fill="white" text-anchor="middle" dominant-baseline="middle"%3ECalça%3C/text%3E%3C/svg%3E'
const PLACEHOLDER_JACKET = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%239333ea"%3E%3C/rect%3E%3Ctext x="50" y="50" font-size="12" fill="white" text-anchor="middle" dominant-baseline="middle"%3EJaqueta%3C/text%3E%3C/svg%3E'
const PLACEHOLDER_DRESS = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23ec4899"%3E%3C/rect%3E%3Ctext x="50" y="50" font-size="12" fill="white" text-anchor="middle" dominant-baseline="middle"%3EVestido%3C/text%3E%3C/svg%3E'

export const CLOTHING_CATALOG: ClothingItem[] = [
  // Camisetas
  {
    id: 'shirt-1',
    name: 'Camiseta Azul',
    category: 'shirt',
    color: 'Azul',
    image: PLACEHOLDER_SHIRT,
  },
  {
    id: 'shirt-2',
    name: 'Camiseta Vermelha',
    category: 'shirt',
    color: 'Vermelho',
    image: PLACEHOLDER_SHIRT,
  },
  {
    id: 'shirt-3',
    name: 'Camiseta Branca',
    category: 'shirt',
    color: 'Branco',
    image: PLACEHOLDER_SHIRT,
  },
  // Calças
  {
    id: 'pants-1',
    name: 'Calça Jeans',
    category: 'pants',
    color: 'Azul',
    image: PLACEHOLDER_PANTS,
  },
  {
    id: 'pants-2',
    name: 'Calça Preta',
    category: 'pants',
    color: 'Preto',
    image: PLACEHOLDER_PANTS,
  },
  {
    id: 'pants-3',
    name: 'Calça Cinza',
    category: 'pants',
    color: 'Cinza',
    image: PLACEHOLDER_PANTS,
  },
  // Jaquetas
  {
    id: 'jacket-1',
    name: 'Jaqueta Couro',
    category: 'jacket',
    color: 'Preto',
    image: PLACEHOLDER_JACKET,
  },
  {
    id: 'jacket-2',
    name: 'Jaqueta Denim',
    category: 'jacket',
    color: 'Azul',
    image: PLACEHOLDER_JACKET,
  },
  // Vestidos
  {
    id: 'dress-1',
    name: 'Vestido Preto',
    category: 'dress',
    color: 'Preto',
    image: PLACEHOLDER_DRESS,
  },
  {
    id: 'dress-2',
    name: 'Vestido Floral',
    category: 'dress',
    color: 'Colorido',
    image: PLACEHOLDER_DRESS,
  },
]
