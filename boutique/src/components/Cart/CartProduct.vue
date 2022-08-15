<script setup lang="ts"></script>

<template>
  <div class="mb-10 p-10 d-flex flex-row align-items-center product">
    <strong class="flex-fill mr-10">Macbook Pro</strong>
    <span class="mr-10">Prix : 1500€</span>
    <button class="btn btn-danger">Supprimer</button>
  </div>
</template>

<style lang="scss" scoped>
.product {
  border: var(--border);
  border-radius: var(--border-radius);
  background-color: var(--gray-1);
}
</style>