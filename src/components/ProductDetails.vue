<template>
  <div class="flex items-center justify-between p-3 shadow-md rounded">
    <div class="flex gap-4 items-center bg-contain">
      <img
        :src="props.image"
        alt="imagem de comida"
        class="h-20 w-20 rounded"
      />
      <div>
        <strong>{{ props.title }}</strong>
        <p>{{ props.description }}</p>
      </div>
    </div>
    <div class="flex items-center gap-9">
      <div class="flex flex-col items-center">
        <span>R$ {{ props.price }}</span>
      </div>
      <img
        class="cursor-pointer"
        src="../assets/trash.svg"
        alt="ícone de lixeira"
        @click="products.deleteProductById(props.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '../stores/ProductsStore'

const props = defineProps([
  'id',
  'image',
  'title',
  'description',
  'price',
  'quantity',
])

const products = useProductsStore()
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
