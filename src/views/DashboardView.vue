<template>
  <div class="dashboard-view bg-white">
    <section-title title="Painel de Controle" />

    <div class="stats-grid">
      <stats-card
        v-for="stat in STATS"
        :key="stat.id"
        :icon="stat.icon"
        :number="stat.number"
        :label="stat.label"
        :bg-color="stat.bgColor"
        :color="stat.color"
      />
    </div>

    <article-table :articleList="articles" />
  </div>
</template>

<script>
import StatsCard from "@/components/shared/StatsCard";
import ArticleTable from "@/components/ArticleTable";
import SectionTitle from "@/components/shared/SectionTitle";
import { mapActions, mapGetters, mapState } from "vuex";
import { FETCH_ARTICLES, FETCH_TAGS, STATS } from "@/store/constants";

export default {
  name: "DashboardView",
  components: {
    StatsCard,
    ArticleTable,
    SectionTitle,
  },
  computed: {
    ...mapState(["articles"]),
    ...mapGetters([STATS]),
  },
  methods: {
    ...mapActions([FETCH_ARTICLES, FETCH_TAGS]),
  },
  beforeMount() {
    this.FETCH_ARTICLES();
    this.FETCH_TAGS();
  },
};
</script>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}
</style>
