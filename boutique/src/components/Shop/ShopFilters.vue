<script setup lang="ts">
import type {
  FiltersInterface,
  FilterUpdate,
  ProductInterface,
} from "@/interface";

defineProps<{
  filters: FiltersInterface;
}>();

const emit = defineEmits<{
  (e: "updateFilter", updateFilter: FilterUpdate): void;
}>();
</script>

<template>
  <div class="p-20">
    <section class="mb-20">
      <h3 class="mb-10">Rechercher</h3>
      <input
        type="text"
        placeholder="Rechercher"
        :value="filters.search"
        @input="
          emit('updateFilter', {
            search: ($event.target as HTMLInputElement).value,
          })
        "
      />
    </section>
    <section class="mb-20">
      <div class="mb-5">
        <input type="radio" name="priceRange" id="0-10000" />
        <label for="0-10000"></label>
      </div>
      <div class="mb-5">
        <input type="radio" name="priceRange" id="800-1000" />
        <label for="800-1000"></label>
      </div>
      <div class="mb-5">
        <input type="radio" name="priceRange" id="1000-1500" />
        <label for="1000-1500"></label>
      </div>
      <div class="mb-5">
        <input type="radio" name="priceRange" id="1500-2000" />
        <label for="1500-2000"></label>
      </div>
      <div class="mb-5">
        <input type="radio" name="priceRange" id="2000-10000" />
        <label for="2000-10000"></label>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
