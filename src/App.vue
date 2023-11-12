<template>
  <div class="navbar bg-slate-950 px-10">
    <div class="flex-1">
      <RouterLink to="/" class="btn normal-case text-xl">Home</RouterLink>
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <img src="./assets/shopping-cart.svg" alt="" />
            <span class="badge badge-sm indicator-item">{{
              state.cart.length
            }}</span>
          </div>
        </label>
        <div
          tabindex="0"
          class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div class="card-body">
            <span class="font-bold text-lg">{{ state.cart.length }} Itens</span>
            <span class="text-info"
              >Subtotal: ${{ state.totalPrice.toFixed(2) }}</span
            >
            <div class="card-actions">
              <button class="btn btn-primary btn-block">
                <RouterLink to="/cart">Ver carrinho</RouterLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<script setup>
import { useProductsStore } from './stores/ProductsStore'

const { state } = useProductsStore()
</script>

<style scoped></style>
