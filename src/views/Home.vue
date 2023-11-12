<template>
  <div class="grid grid-cols-5 gap-4 mt-10 px-10">
    <div
      class="card card-compact shadow"
      v-for="product in state.products"
      :key="product.id"
    >
      <figure>
        <img class="max-h-40 w-full" :src="product.thumbnail" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <div class="card-actions flex justify-between items-center">
          <span>R$ {{ product.price }}</span>
          <button
            @click="addProductToCartByID(product.id)"
            class="btn btn-primary"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProductsStore } from '../stores/ProductsStore'

const { state, fetchProducts, addProductToCartByID } = useProductsStore()

onMounted(() => {
  fetchProducts
})
</script>
