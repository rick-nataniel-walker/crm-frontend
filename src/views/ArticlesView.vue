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
          v-model="article.featuredImage"
          inputType="file"
        />
      </div>
    </div>

    <action-btn icon="fas fa-save" text="Salvar o Artigo" class="mt-12" />
  </div>
</template>

<script>
import ActionBtn from "@/components/shared/ActionBtn";
import ArticleTable from "@/components/ArticleTable";
import SectionTitle from "@/components/shared/SectionTitle";
import FormGroup from "@/components/form/FormGroup";
import { articles, article, categories, tags } from "@/datasource";

export default {
  name: "ArticlesView",
  components: {
    ActionBtn,
    ArticleTable,
    FormGroup,
    SectionTitle,
  },
  data() {
    return {
      articles,
      article,
      categories,
      tags,
    };
  },
  //TODO: when calling API use the config below to deal with edit and save
  /* computed: {
    formTitle() {
      return this.articleId ? "Editar Artigo" : "Criar Novo Artigo";
    },
  },
   methods: {
    saveArticle() {
      const action = this.articleId ? "updateArticle" : "createArticle";
      this.$store
        .dispatch(action, this.article)
        .then(() => {
          this.$router.push("/articles");
        })
        .catch((error) => {
          console.error("Error saving article:", error);
        });
    },
    loadArticle() {
      if (this.articleId) {
        this.$store.dispatch("fetchArticle", this.articleId).then((article) => {
          this.article = article;
        });
      }
    },
  },
  created() {
    this.loadArticle();
  },*/
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
