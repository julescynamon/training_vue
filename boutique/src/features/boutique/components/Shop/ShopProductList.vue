<script setup lang="ts">
import type { ProductInterface } from "@/interface";
import ShopProduct from "./ShopProduct.vue";

defineProps<{
  products: ProductInterface[];
}>();

const emit = defineEmits<{
  (e: "addProductToCart", productId: string): void;
  (e: "incPage"): void;
}>();
</script>

<template>
  <div class="d-flex flex-column p20">
    <div class="grid mb-20">
      <ShopProduct
        @add-product-to-cart="emit('addProductToCart', $event)"
        v-for="product of products"
        :product="product"
        :key="product._id"
      />
    </div>
    <div class="d-flex flex-row align-items-center justify-content-center">
      <button class="btn btn-primary" @click="emit('incPage')" >
        Charger plus de produits
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../../assets/mixin" as m;
.grid {
  display: grid;
  grid-template-columns: 1fr;
  @include m.md {
    grid-template-columns: 1fr 1fr;
  }
  @include m.lg {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @include m.xl {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  grid-auto-rows: 400px;
  gap: 20px;
}
</style>
