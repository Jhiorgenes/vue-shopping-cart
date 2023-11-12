<template>
  <div class="bg-[#1e1e1e] rounded-2xl p-5">
    <header class="flex items-center justify-between">
      <h1 class="text-white font-bold">Detalhes do Cartão</h1>
      <img
        class="h-12 w-12 rounded"
        src="https://www.github.com/jhiorgenes.png"
        alt=""
      />
    </header>
    <main class="mt-5">
      <div>
        <h2 class="text-white">Tipo do cartão</h2>
        <div class="grid grid-cols-4 gap-3 mt-2">
          <div class="bg-opacity-20 rounded">
            <img src="../assets/cartao1.svg" class="w-full" />
          </div>
          <div class="bg-opacity-20 rounded">
            <img src="../assets/cartao2.svg" class="w-full" />
          </div>
          <div class="bg-opacity-20 rounded">
            <img src="../assets/cartao3.svg" class="w-full" />
          </div>
          <div
            class="bg-[#D9D9D9] bg-opacity-20 rounded flex justify-center items-center"
          >
            <strong class="text-white text-sm">Ver todos</strong>
          </div>
        </div>
      </div>
      <form class="mt-7 flex flex-col gap-5">
        <div class="flex flex-col gap-1">
          <label class="text-white" for="name-on-card">Nome no cartão</label>
          <input
            type="text"
            class="bg-[#393939] px-4 py-2 rounded text-[#C4C4C4]"
            placeholder="Nome"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-white" for="name-on-card">Numero do cartão</label>
          <input
            type="number"
            class="bg-[#393939] px-4 py-2 rounded text-[#C4C4C4]"
            placeholder="1111 2222 3333 4444"
          />
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="flex flex-col gap-1">
            <label class="text-white" for="name-on-card"
              >Data de expiração</label
            >
            <input
              type="text"
              class="bg-[#393939] px-4 py-2 rounded text-[#C4C4C4]"
              placeholder="mm/yy"
            />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-white" for="name-on-card">CVV</label>
            <input
              type="text"
              class="bg-[#393939] px-4 py-2 rounded text-[#C4C4C4]"
              placeholder="mm/yy"
            />
          </div>
        </div>
      </form>
      <div class="border my-5 border-gray-500"></div>
      <div class="flex flex-col">
        <div class="flex justify-between">
          <span class="text-white">Subtotal</span>
          <span class="text-white">R$ {{ totalPrice }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-white">Frete</span>
          <span class="text-white">R$ 4</span>
        </div>
        <div class="flex justify-between">
          <span class="text-white">Total (Taxa incl.)</span>
          <span class="text-white">R$ {{ totalPrice + 4 }}</span>
        </div>
      </div>
      <footer
        class="mt-10 bg-[#393939] flex justify-between items-center text-white px-5 py-4 rounded-md"
      >
        <span>R$ {{ totalPrice + 4 }}</span>
        <button class="btn btn-success">
          Finalizar <img src="../assets/move-right.svg" alt="" />
        </button>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { useProductsStore } from '../stores/ProductsStore'
import { computed } from 'vue'

const { state } = useProductsStore()

const totalPrice = computed(() => {
  return +state.totalPrice.toFixed(2)
})
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
