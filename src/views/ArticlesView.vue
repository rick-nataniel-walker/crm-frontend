<template>
  <div class="bg-white">
    <article-table :articles="articles" />
    <div class="article-form-container mt-24">
      <section-title title="Criar Novo Artigo" />
      <div class="grid md:grid-cols-2 gap-8">
        <form-group
          label="Título do Artigo"
          v-model="article.title"
          inputType="input"
          placeholder="Digite o título aqui..."
        />

        <form-group
          label="URL Amigável (Slug)"
          v-model="article.slug"
          inputType="input"
          placeholder="Ex: tecnicas-prospeccao-mineral"
        />
      </div>

      <form-group
        label="Resumo (Excerpt)"
        v-model="article.excerpt"
        inputType="textarea"
        placeholder="Breve resumo do artigo..."
      />

      <form-group
        label="Conteúdo"
        v-model="article.content"
        inputType="textarea"
        placeholder="Digite o conteúdo completo aqui..."
      />

      <div class="grid md:grid-cols-2 gap-8">
        <form-group
          label="Categoria"
          v-model="article.category"
          inputType="select"
        >
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </form-group>

        <form-group
          label="Imagem de Destaque"
          v-model="article.featured_image"
          inputType="input"
          type="file"
        />
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        <tag-selector :tags="tags" v-model="article.selectedTags" />
      </div>
    </div>

    <action-btn
      icon="fas fa-save"
      text="Salvar o Artigo"
      class="mt-12"
      @click="saveArticle"
    />
  </div>
</template>

<script>
import ActionBtn from "@/components/shared/ActionBtn";
import ArticleTable from "@/components/ArticleTable";
import FormGroup from "@/components/form/FormGroup";
import SectionTitle from "@/components/shared/SectionTitle";
import TagSelector from "@/components/form/TagSelector";
import { article, categories, tags } from "@/datasource";
import { CREATE_ARTICLE, FETCH_ARTICLES } from "@/store";
import { mapActions, mapState } from "vuex";

export default {
  name: "ArticlesView",
  components: {
    ActionBtn,
    ArticleTable,
    FormGroup,
    SectionTitle,
    TagSelector,
  },
  data() {
    return {
      articleId: null,
      article,
      categories,
      tags,
      selectedTags: [],
    };
  },

  computed: {
    ...mapState(["articles"]),
    formTitle() {
      return this.articleId ? "Editar Artigo" : "Criar Novo Artigo";
    },
  },
  methods: {
    ...mapActions([CREATE_ARTICLE, FETCH_ARTICLES]),
    async saveArticle() {
      //const action = this.articleId ? "updateArticle" : "createArticle";
      this.CREATE_ARTICLE(article);
      await this.FETCH_ARTICLES();
    },
    loadArticle() {
      if (this.articleId) {
        this.$store.dispatch("fetchArticle", this.articleId).then((article) => {
          this.article = article;
        });
      }
    },
  },
  async beforeMount() {
    await this.FETCH_ARTICLES();
  },
  created() {
    this.loadArticle();
  },
};
</script>

<style scoped>
.article-form-container {
  padding: 30px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

@media (min-width: 992px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
