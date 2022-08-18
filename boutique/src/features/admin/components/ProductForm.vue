<script lang="ts">
import { useForm, useField } from "vee-validate";
import { z } from "zod";
import { toFormValidator } from "@vee-validate/zod";

// export interface ProductInterface {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
//   description: string;
//   category: Category;
// }
const required = { required_error: "Veuillez renseigner ce champ !" };

const validateSchema = toFormValidator(
  z.object({
    title: z
      .string(required)
      .min(1, { message: "Le titre doit faire au moins 1 caractère" })
      .max(10, { message: "Le titre ne doit pas depasser 10 caractères" }),
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
</script>

<template>
  <div class="card">
    <h1>Form</h1>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 100%;
  max-width: 500px;
}
</style>
