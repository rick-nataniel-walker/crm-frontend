<template>
  <div class="bg-white">
    <div class="article-form-container mt-8" id="form">
      <section-title :title="formTitle" />
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

      <text-editor label="Conteúdo" @contentChanged="fillContent" />

      <div class="grid md:grid-cols-2 gap-8">
        <form-group
          label="Categoria"
          v-model="article.categoryId"
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
        <file-input
          name="postImg"
          label="Imagem de Destaque"
          @base64Img="getImage"
          formats="image/*"
          :return-as-base64="false"
        />
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        <tag-selector :tags="tags" v-model="article.tags" />
      </div>
    </div>

    <action-btn
      icon="fas fa-save"
      text="Salvar o Artigo"
      class="mt-8 mb-18"
      @click="saveArticle"
    />
    <article-table :articleList="articles" />
  </div>
</template>

<script>
import ActionBtn from "@/components/shared/ActionBtn";
import ArticleTable from "@/components/ArticleTable";
import FileInput from "@/components/form/FileInput";
import FormGroup from "@/components/form/FormGroup";
import SectionTitle from "@/components/shared/SectionTitle";
import TagSelector from "@/components/form/TagSelector";
import TextEditor from "@/components/form/TextEditor";
import {
  CREATE_ARTICLE,
  FETCH_ARTICLES,
  FETCH_CATEGORIES,
  FETCH_TAGS,
  UPDATE_ARTICLE,
} from "@/store/constants";
import { mapActions, mapState } from "vuex";

export default {
  name: "ArticlesView",
  components: {
    ActionBtn,
    ArticleTable,
    FileInput,
    FormGroup,
    SectionTitle,
    TagSelector,
    TextEditor,
  },
  data() {
    return {
      articleId: null,
      selectedTags: [],
    };
  },

  computed: {
    ...mapState(["article", "articles", "categories", "tags"]),
    formTitle() {
      return this.article.id ? "Editar Artigo" : "Criar Novo Artigo";
    },
  },
  methods: {
    ...mapActions([
      CREATE_ARTICLE,
      FETCH_ARTICLES,
      FETCH_CATEGORIES,
      FETCH_TAGS,
      UPDATE_ARTICLE,
    ]),
    async saveArticle() {
      this.article.id
        ? await this.UPDATE_ARTICLE(this.article)
        : await this.CREATE_ARTICLE(this.article);
    },
    fillContent(data) {
      this.article.content = data;
    },
    getImage(data) {
      this.article.postImg = data;
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
    await this.FETCH_CATEGORIES();
    await this.FETCH_TAGS();
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
</style>
