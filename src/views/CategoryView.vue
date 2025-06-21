<template>
  <section-title title="Categorias" />
  <div class="grid md:grid-cols-2">
    <form-group label="nome" v-model="categories.name" />
  </div>
  <action-btn icon="fas fa-save" text="Guardar categoria" />
</template>

<script>
import SectionTitle from "@/components/shared/SectionTitle";
import ActionBtn from "@/components/shared/ActionBtn";
import FormGroup from "@/components/form/FormGroup";
import { categories } from "@/datasource";
export default {
  name: "CategoryView",
  components: {
    SectionTitle,
    ActionBtn,
    FormGroup,
  },
  data() {
    return { categories };
  },
  methods: {
    saveCategory() {},
  },
};
</script>

<style scoped></style>
