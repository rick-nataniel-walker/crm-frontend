<template>
  <div class="dashboard-view bg-white">
    <h2 class="section-title">Painel de Controle</h2>

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
          id: 1,
          icon: "fas fa-file-alt",
          number: 24,
          label: "Artigos Publicados",
          bgColor: "bg-secondary-light",
          color: "text-secondary",
        },
        {
          id: 2,
          icon: "fas fa-edit",
          number: 5,
          label: "Rascunhos",
          bgColor: "bg-accent-light",
          color: "text-accent",
        },
        {
          id: 3,
          icon: "fas fa-comments",
          number: 42,
          label: "Comentários",
          bgColor: "bg-primary-light",
          color: "text-primary",
        },
        {
          id: 4,
          icon: "fas fa-tags",
          number: 15,
          label: "Tags",
          bgColor: "bg-gray-200",
          color: "text-gray-600",
        },
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

.section-title {
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(0, 161, 78, 0.2);
}
</style>
