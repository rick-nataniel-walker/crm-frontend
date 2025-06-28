<template>
  <section-title title="Artigos" />
  <div class="bg-white rounded-xl shadow-md overflow-hidden">
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Autor</th>
          <th>Categorias</th>
          <th>Tags</th>
          <th>Data</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in paginationResult.items" :key="article.id">
          <td>{{ article.title }}</td>
          <td>{{ article.author.name }}</td>
          <td>{{ article.category.name }}</td>
          <td>
            {{
              article.tags.length === 0
                ? ""
                : article.tags.map((tag) => tag.name).join(", ")
            }}
          </td>
          <td>{{ article.publishedAt }}</td>
          <td><word-badge :word="article.status" /></td>
          <td>
            <button class="action-btn" @click="editArticle(article.id)">
              <i class="fas fa-edit"></i>
            </button>
            <button class="action-btn" @click="deleteArticle(article.id)">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <table-pagination
    v-if="paginationResult.totalItems > 0"
    :pagination="paginationControls"
    @page-changed="handlePageChange"
    @items-per-page-changed="handleItemsPerPageChange"
  />
</template>

<script>
import WordBadge from "@/components/shared/WordBadge";
import SectionTitle from "@/components/shared/SectionTitle";
import TablePagination from "@/components/tables/TablePagination";
import { paginate, getPaginationControls } from "@/helpers/Paginator";
import { mapActions, mapMutations, mapState } from "vuex";
import { DELETE_ARTICLE, FILL_ARTICLE } from "@/store/constants";
export default {
  name: "ArticleTable",
  components: {
    WordBadge,
    SectionTitle,
    TablePagination,
  },
  props: {
    articleList: {
      type: Array,
      required: true,
    },
    currentArticleId: {
      type: [Number, String],
      default: null,
    },
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  computed: {
    ...mapState(["articles"]),
    paginationResult() {
      return paginate(this.articleList, {
        currentPage: this.currentPage,
        itemsPerPage: this.itemsPerPage,
      });
    },

    // Get pagination controls metadata
    paginationControls() {
      return getPaginationControls(this.paginationResult);
    },
  },
  methods: {
    ...mapMutations([FILL_ARTICLE]),
    ...mapActions([DELETE_ARTICLE]),
    handlePageChange(page) {
      this.currentPage = page;
    },
    handleItemsPerPageChange(itemsPerPage) {
      this.itemsPerPage = itemsPerPage;
    },
    editArticle(id) {
      this.articles.forEach((article) => {
        if (article.id === id) {
          this.FILL_ARTICLE(article);

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
    deleteArticle(id) {
      if (confirm("Tem certeza que deseja excluir este artigo?")) {
        this.DELETE_ARTICLE(id);
      }
    },
  },
  watch: {
    articles() {
      this.currentPage = 1;
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background: rgba(0, 53, 26, 0.05);
}
</style>
