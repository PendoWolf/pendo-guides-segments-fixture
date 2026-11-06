import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'pieriot-cart'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product, { size, crust, quantity = 1 }) => {
    const lineId = `${product.id}-${size}-${crust}`
    setItems((prev) => {
      const existing = prev.find((item) => item.lineId === lineId)
      if (existing) {
        return prev.map((item) =>
          item.lineId === lineId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [
        ...prev,
        {
          lineId,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          colors: product.colors,
          size,
          crust,
          quantity,
        },
      ]
    })
  }

  const updateQuantity = (lineId, quantity) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.lineId === lineId ? { ...item, quantity: Math.max(0, quantity) } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (lineId) => {
    setItems((prev) => prev.filter((item) => item.lineId !== lineId))
  }

  const clearCart = () => setItems([])

  const value = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    return {
      items,
      count,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
