<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import { z } from "zod";
import { toFormValidator } from "@vee-validate/zod";
import { onMounted, ref } from "vue";

const firstInput = ref<HTMLInputElement | null>(null);

onMounted(() => {
  firstInput.value?.focus();
});

const required = { required_error: "Veuillez renseigner ce champ !" };

const validateSchema = toFormValidator(
  z.object({
    title: z
      .string(required)
      .min(1, { message: "Le titre doit faire au moins 1 caractère" })
      .max(30, { message: "Le titre ne doit pas depasser 30 caractères" }),
    image: z.string(required),
    price: z
      .number(required)
      .min(0, { message: "Le prix doit être positif" })
      .max(15000, { message: "Le prix ne doit pas depasser 15000" }),
    description: z
      .string(required)
      .min(10, { message: "La description doit faire au moins 10 caractères" }),
    category: z.string(required),
  })
);

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: validateSchema,
});

const title = useField("title");
const image = useField("image");
const price = useField("price");
const description = useField("description");
const category = useField("category");

const trySubmit = handleSubmit(async (formValues, { resetForm }) => {
  try {
    await fetch("https://restapi.fr/api/projetProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    resetForm();
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="card">
    <h3 class="mb-10">Ajouter un article</h3>
    <form @submit="trySubmit">
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Titre</label>
        <input ref="firstInput" v-model="title.value.value" type="text" />
        <small class="form-error" v-if="title.errorMessage.value">
          {{ title.errorMessage.value }}
        </small>
      </div>
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Image</label>
        <input v-model="image.value.value" type="text" />
        <small class="form-error" v-if="image.errorMessage.value">
          {{ image.errorMessage.value }}
        </small>
      </div>
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Prix</label>
        <input v-model="price.value.value" type="number" />
        <small class="form-error" v-if="price.errorMessage.value">
          {{ price.errorMessage.value }}
        </small>
      </div>
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Description</label>
        <textarea
          v-model="( description.value.value as string )"
          type="text"
        ></textarea>
        <small class="form-error" v-if="description.errorMessage.value">
          {{ description.errorMessage.value }}
        </small>
      </div>
      <div class="d-flex flex-column mb-20">
        <label class="mb-5">*Catégorie</label>
        <select v-model="category.value.value">
          <option value="">Choisissez une catégorie</option>
          <option value="Desktop">Desktop</option>
          <option value="Gamer">Gamer</option>
          <option value="Streaming">Streaming</option>
        </select>
        <small class="form-error" v-if="category.errorMessage.value">
          {{ category.errorMessage.value }}
        </small>
      </div>
      <button class="btn btn-primary" :disabled="isSubmitting">
        Sauvegarder
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 100%;
  max-width: 500px;
}
</style>
