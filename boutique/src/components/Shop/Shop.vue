<script setup lang="ts">
import type {
  FiltersInterface,
  FilterUpdate,
  ProductInterface,
} from "@/interface";
import ShopProductList from "./ShopProductList.vue";
import ShopFilters from "./ShopFilters.vue";

defineProps<{
  products: ProductInterface[];
  filters: FiltersInterface;
}>();

const emit = defineEmits<{
  (e: "addProductToCart", productId: number): void;
  (e: "updateFilter", updateFilter: FilterUpdate): void;
}>();
</script>

<template>
  <div class="d-flex flex-row">
    <ShopFilters
      :filters="filters"
      @update-filter="emit('updateFilter', $event)"
      class="shop-filters"
    />
    <ShopProductList
      class="flex-fill"
      :products="products"
      @add-product-to-cart="emit('addProductToCart', $event)"
    />
  </div>
</template>

<style lang="scss" scoped>
.shop-filters {
  flex: 0 0 200px;
}
</style>
