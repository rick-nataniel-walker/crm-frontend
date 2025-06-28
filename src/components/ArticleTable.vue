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
        <tr v-for="article in articleList" :key="article.id">
          <td>{{ article.title }}</td>
          <td>{{ article.author.name }}</td>
          <td>{{ article.category.name }}</td>
          <td>{{ article.tags }}</td>
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
</template>

<script>
import WordBadge from "@/components/shared/WordBadge";
import SectionTitle from "@/components/shared/SectionTitle";
import { mapActions, mapMutations, mapState } from "vuex";
import { DELETE_ARTICLE, FILL_ARTICLE } from "@/store/constants";
export default {
  name: "ArticleTable",
  components: {
    WordBadge,
    SectionTitle,
  },
  props: {
    articleList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState(["articles"]),
  },
  methods: {
    ...mapMutations([FILL_ARTICLE]),
    ...mapActions([DELETE_ARTICLE]),
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
        // Dispatch action to delete article fas fa-save
        this.DELETE_ARTICLE(id);
      }
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

th {
  @apply py-4 px-8 font-black text-primary text-left border-b border-gray-200;
}

td {
  @apply py-4 px-8 border-b border-gray-100;
}
tbody tr {
  @apply hover:bg-secondary-light;
}

tr:last-child td {
  border-bottom: none;
}
</style>
