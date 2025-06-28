<template>
  <div class="bg-white grid">
    <section-title :title="formTitle" />
    <div class="grid md:grid-cols-4 gap-8">
      <form-group label="nome" v-model="category.name" class="md:col-span-2" />
      <action-btn
        icon="fas fa-save"
        text="Salvar a categoria"
        class="md:col-span-1 md:mt-8 h-12"
        @click="saveCategory"
      />
    </div>

    <section-title title="Categorias" />
    <main-table>
      <template #headers>
        <th>{{ categoryTableHeader.id }}</th>
        <th>{{ categoryTableHeader.name }}</th>
        <th>{{ categoryTableHeader.action }}</th>
      </template>
      <template #body>
        <tr v-for="category in paginationSetup.items" :key="category.id">
          <td>{{ category.id }}</td>
          <td>{{ category.name }}</td>
          <td>
            <button class="action-btn" @click="editCategory(category.id)">
              <i class="fas fa-edit"></i>
            </button>
            <button class="action-btn" @click="deleteCategory(category.id)">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </template>
    </main-table>
    <table-pagination
      v-if="paginationSetup.totalItems > 0"
      :pagination="paginatioControls"
      @page-changed="handlePageChange"
      @items-per-page-changed="handleItemsPerPageChange"
    />
  </div>
</template>

<script>
import ActionBtn from "@/components/shared/ActionBtn";
import FormGroup from "@/components/form/FormGroup";
import MainTable from "@/components/tables/MainTable";
import SectionTitle from "@/components/shared/SectionTitle";
import TablePagination from "@/components/tables/TablePagination";
import { paginate, getPaginationControls } from "@/helpers/Paginator";
import { categoryTableHeader } from "@/datasource";
import { mapActions, mapMutations, mapState } from "vuex";
import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  FETCH_CATEGORIES,
  FILL_CATEGORY,
  UPDATE_CATEGORY,
} from "@/store/constants";
export default {
  name: "CategoryView",
  components: {
    ActionBtn,
    FormGroup,
    MainTable,
    SectionTitle,
    TablePagination,
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 5,
      categoryTableHeader,
    };
  },
  computed: {
    ...mapState(["categories", "category"]),
    formTitle() {
      return this.category.id ? "Actualizar categoria" : "Criar Nova Categoria";
    },
    paginationSetup() {
      return paginate(this.categories, {
        currentPage: this.currentPage,
        itemsPerPage: this.itemsPerPage,
      });
    },
    paginatioControls() {
      return getPaginationControls(this.paginationSetup);
    },
  },
  methods: {
    ...mapMutations([FILL_CATEGORY]),
    ...mapActions([
      CREATE_CATEGORY,
      DELETE_CATEGORY,
      FETCH_CATEGORIES,
      UPDATE_CATEGORY,
    ]),
    handlePageChange(page) {
      this.currentPage = page;
    },
    handleItemsPerPageChange(itemsPerPage) {
      this.itemsPerPage = itemsPerPage;
    },

    async saveCategory() {
      this.category.id
        ? this.UPDATE_CATEGORY(this.category)
        : this.CREATE_CATEGORY(this.category);
    },
    editCategory(id) {
      this.categories.forEach((category) => {
        if (category.id === id) {
          this.FILL_CATEGORY(category);

          this.$nextTick(() => {
            const formElement = document.getElementById("form");
            if (formElement) {
              formElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          });
        }
      });
    },
    deleteCategory(id) {
      if (confirm("Tem certeza que deseja apagar esta categoria?"))
        this.DELETE_CATEGORY(id);
    },
  },
  beforeMount() {
    this.FETCH_CATEGORIES();
  },
  watch: {
    categories() {
      this.currentPage = 1;
    },
  },
};
</script>

<style scoped></style>
