<template>
  <div class="dashboard-view bg-white">
    <section-title title="Painel de Controle" />

    <div class="stats-grid">
      <stats-card
        v-for="stat in stats"
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
import { stats } from "@/datasource";
import { mapActions, mapState } from "vuex";
import { FETCH_ARTICLES } from "@/store/constants";

export default {
  name: "DashboardView",
  components: {
    StatsCard,
    ArticleTable,
    SectionTitle,
  },
  data() {
    return {
      stats,
    };
  },
  computed: {
    ...mapState(["articles"]),
  },
  methods: {
    ...mapActions([FETCH_ARTICLES]),
  },
  beforeMount() {
    this.FETCH_ARTICLES();
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
