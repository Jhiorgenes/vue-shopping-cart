<template>
  <div class="flex gap-14 m-10">
    <div class="flex-1">
      <!-- Shopping Cart -->
      <header class="flex items-center gap-2">
        <img
          @click="$router.go(-1)"
          src="../assets/back.svg"
          class="cursor-pointer bg-transparent hover:bg-slate-300 rounded-full p-2 transition"
          alt="ícone de voltar"
        />
        <h1 class="font-bold text-lg">Carrinho de compras</h1>
      </header>
      <div class="divider"></div>
      <main>
        <div class="flex flex-col">
          <h2 class="font-semibold text-lg">Seu carrinho de compras</h2>
          <p class="text-sm">
            Você tem {{ state.cart.length }} itens no seu carrinho.
          </p>
        </div>
        <div class="flex flex-col gap-6 mt-8">
          <ProductDetails
            v-for="product in state.cart"
            :key="product.id"
            :id="product.id"
            :title="product.title"
            :description="product.description"
            :price="product.price"
            :image="product.thumbnail"
            :quantity="product.quantity"
          />
        </div>
      </main>
    </div>
    <div class="flex-1 max-w-md">
      <PaymentDetails />
    </div>
  </div>
</template>

<script setup>
import ProductDetails from '../components/ProductDetails.vue'
import PaymentDetails from '../components/PaymentDetails.vue'
import { useProductsStore } from '../stores/ProductsStore'
const { state } = useProductsStore()
</script>

<style scoped></style>
