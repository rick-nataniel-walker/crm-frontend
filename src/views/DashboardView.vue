<template>
  <div class="dashboard-view">
    <h2 class="section-title">Painel de Controle</h2>

    <div class="stats-grid">
      <stats-card
        v-for="stat in stats"
        :key="stat.title"
        :icon="stat.icon"
        :number="stat.number"
        :label="stat.label"
        :color="stat.color"
      />
    </div>

    <h2 class="section-title">Artigos Recentes</h2>
    <button class="btn-primary" @click="navigateToNewArticle">
      <i class="fas fa-plus"></i> Novo Artigo
    </button>
  </div>
</template>

<script>
import StatsCard from "@/components/StatsCard";

export default {
  name: "DashboardView",
  components: {
    StatsCard,
  },
  data() {
    return {
      stats: [
        {
          icon: "fas fa-file-alt",
          number: 24,
          label: "Artigos Publicados",
          color: "green",
        },
        { icon: "fas fa-edit", number: 5, label: "Rascunhos", color: "orange" },
        {
          icon: "fas fa-comments",
          number: 42,
          label: "Comentários",
          color: "primary",
        },
        { icon: "fas fa-tags", number: 15, label: "Tags", color: "gray" },
      ],
    };
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
