import { defineStore } from 'pinia'
import { computed, reactive, watch } from 'vue'

export const useProductsStore = defineStore('products', () => {
  // state
  const state = reactive({
    products: [],
    cart: [],
    totalPrice: 0,
  })

  // actions
  function deleteProductById(id) {
    const product = state.cart.findIndex(product => product.id === id)
    const updatedProducts = [...state.cart]

    updatedProducts.splice(product, 1)

    state.cart = updatedProducts
    updateTotalPrice()
  }

  function addProductToCartByID(id) {
    const product = state.products.findIndex(product => product.id === id)
    const updatedCart = [...state.cart]
    updatedCart.push(state.products[product])

    state.cart = updatedCart
    updateTotalPrice()
  }

  // computeds
  const productsQuantity = computed(() => {
    return state.products.length
  })

  function updateTotalPrice() {
    state.totalPrice = state.cart.reduce((total, produto) => {
      return total + produto.price
    }, 0)
  }

  watch(
    () => state.cart,
    () => {
      updateTotalPrice()
    }
  )

  const fetchProducts = computed(async () => {
    const response = await fetch('https://dummyjson.com/products')
    const json = await response.json()
    state.products.push(...json.products)
  })

  return {
    state,
    productsQuantity,
    deleteProductById,
    fetchProducts,
    addProductToCartByID,
  }
})
