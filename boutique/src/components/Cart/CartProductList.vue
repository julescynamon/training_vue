<script setup lang="ts">
import CartProduct from "./CartProduct.vue";
import type { ProductInterface } from "@/interface/product.interface";

defineProps<{
  cart: ProductInterface[];
}>();

const emit = defineEmits<{
  (e: "removeProductFromCart", productId: number): void;
}>();
</script>

<template>
  <div class="d-flex flex-column">
    <CartProduct
      v-for="product of cart"
      :product="product"
      @remove-product-from-cart="emit('removeProductFromCart', $event)"
      :key="product.id"
    />
  </div>
</template>

<style lang="scss" scoped></style>
