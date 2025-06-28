<template>
  <div class="bg-white grid">
    <section-title :title="formTitle" />
    <div class="grid md:grid-cols-4 gap-8">
      <form-group label="Nome" v-model="tag.name" class="md:col-span-2" />
      <action-btn
        icon="fas fa-save"
        text="Salvar a Tag"
        class="md:col-span-1 md:mt-8 h-12"
        @click="saveTag"
      />
    </div>

    <section-title title="Tags" />
    <main-table>
      <template #headers>
        <th>{{ tagTableHeader.id }}</th>
        <th>{{ tagTableHeader.name }}</th>
        <th>{{ tagTableHeader.action }}</th>
      </template>
      <template #body>
        <tr v-for="tag in paginationSetup.items" :key="tag.id">
          <td>{{ tag.id }}</td>
          <td>{{ tag.name }}</td>
          <td>
            <button class="action-btn" @click="editTag(tag.id)">
              <i class="fas fa-edit"></i>
            </button>
            <button class="action-btn" @click="deleteTag(tag.id)">
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
import SectionTitle from "@/components/shared/SectionTitle";
import FormGroup from "@/components/form/FormGroup";
import MainTable from "@/components/tables/MainTable";
import TablePagination from "@/components/tables/TablePagination";
import { paginate, getPaginationControls } from "@/helpers/Paginator";
import ActionBtn from "@/components/shared/ActionBtn";
import { mapActions, mapMutations, mapState } from "vuex";
import {
  CREATE_TAG,
  DELETE_TAG,
  FETCH_TAGS,
  FILL_TAG,
  UPDATE_TAG,
} from "@/store/constants";
import { tagTableHeader } from "@/datasource";
export default {
  name: "TagView",
  components: {
    TablePagination,
    MainTable,
    ActionBtn,
    SectionTitle,
    FormGroup,
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 5,
      tagTableHeader,
    };
  },
  computed: {
    ...mapState(["tags", "tag"]),
    formTitle() {
      return this.tag.id ? "Actualizar tag" : "Criar Nova Tag";
    },
    paginationSetup() {
      return paginate(this.tags, {
        currentPage: this.currentPage,
        itemsPerPage: this.itemsPerPage,
      });
    },
    paginatioControls() {
      return getPaginationControls(this.paginationSetup);
    },
  },
  methods: {
    ...mapActions([CREATE_TAG, FETCH_TAGS, UPDATE_TAG, DELETE_TAG]),
    ...mapMutations([FILL_TAG]),
    handlePageChange(page) {
      this.currentPage = page;
    },
    handleItemsPerPageChange(itemsPerPage) {
      this.itemsPerPage = itemsPerPage;
    },
    saveTag() {
      return this.tag.id
        ? this.UPDATE_TAG(this.tag)
        : this.CREATE_TAG(this.tag);
    },
    editTag(id) {
      this.tags.forEach((tag) => {
        if (tag.id === id) {
          this.FILL_TAG(tag);
        }
      });
    },
    deleteTag(id) {
      if (confirm("Tem certeza que deseja apagar esta tag?"))
        this.DELETE_TAG(id);
    },
  },
  beforeMount() {
    this.FETCH_TAGS();
  },
};
</script>

<style scoped></style>
