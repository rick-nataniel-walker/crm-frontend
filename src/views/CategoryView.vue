<template>
  <div class="bg-white grid">
    <section-title title="Criar Nova Categoria" />
    <div class="grid md:grid-cols-4 gap-8">
      <form-group label="nome" v-model="category.name" class="md:col-span-2" />
      <action-btn
        icon="fas fa-save"
        text="Guardar categoria"
        class="md:col-span-1 md:mt-8 h-12"
        @click="saveCategory"
      />
    </div>
  </div>
</template>

<script>
import SectionTitle from "@/components/shared/SectionTitle";
import ActionBtn from "@/components/shared/ActionBtn";
import FormGroup from "@/components/form/FormGroup";
import { category } from "@/datasource";
import { mapActions } from "vuex";
import { CREATE_CATEGORY } from "@/store/constants";
export default {
  name: "CategoryView",
  components: {
    SectionTitle,
    ActionBtn,
    FormGroup,
  },
  data() {
    return { category };
  },
  methods: {
    ...mapActions([CREATE_CATEGORY]),
    saveCategory() {
      this.CREATE_CATEGORY(category);
      category.name = "";
    },
  },
};
</script>

<style scoped></style>
