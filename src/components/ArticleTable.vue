<template>
  <section-title title="Artigos" />
  <div class="table-container">
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
        <tr v-for="article in articles" :key="article.id">
          <td>{{ article.title }}</td>
          <td>{{ article.author }}</td>
          <td>{{ article.category }}</td>
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
import { mapActions } from "vuex";
import { DELETE_ARTICLE } from "@/store";
export default {
  name: "ArticleTable",
  components: {
    WordBadge,
    SectionTitle,
  },
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions([DELETE_ARTICLE]),
    editArticle(id) {
      this.$router.push(`/articles/edit/${id}`);
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
.table-container {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background: rgba(0, 53, 26, 0.05);
}

th {
  padding: 15px 20px;
  text-align: left;
  color: var(--primary);
  font-weight: 600;
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
}

td {
  padding: 15px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

tr:last-child td {
  border-bottom: none;
}
</style>
