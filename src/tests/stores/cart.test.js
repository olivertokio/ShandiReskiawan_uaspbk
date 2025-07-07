// tests/stores/cart.test.js
import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '@/stores/cart'

describe('Cart Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('menambahkan item ke keranjang', () => {
    const cart = useCartStore()
    cart.addToCart({ id: 1, nama: 'Susu Protein', harga: 150000 })
    expect(cart.items.length).toBe(1)
  })
})
