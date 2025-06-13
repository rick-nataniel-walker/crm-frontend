<template>
  <div class="sidebar">
    <ul class="nav-menu">
      <li
        v-for="item in menuItems"
        :key="item.name"
        :class="['nav-item', { active: isActive(item.route) }]"
        @click="navigateTo(item.route)"
      >
        <i :class="item.icon"></i>
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavSidebar",
  data() {
    return {
      menuItems: [
        { name: "Dashboard", icon: "fas fa-tachometer-alt", route: "/" },
        { name: "Artigos", icon: "fas fa-file-alt", route: "/articles" },
        { name: "Categorias", icon: "fas fa-folder", route: "/categories" },
        { name: "Tags", icon: "fas fa-tags", route: "/tags" },
        { name: "Comentários", icon: "fas fa-comments", route: "/comments" },
        { name: "Usuários", icon: "fas fa-users", route: "/users" },
        { name: "Configurações", icon: "fas fa-cog", route: "/settings" },
      ],
    };
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.sidebar {
  background: var(--light);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  padding: 30px 0;
}

.nav-menu {
  list-style: none;
}

.nav-item {
  padding: 15px 30px;
  border-left: 4px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-item:hover,
.nav-item.active {
  background: rgba(0, 161, 78, 0.05);
  border-left: 4px solid var(--secondary);
  color: var(--primary);
}

.nav-item i {
  width: 24px;
  text-align: center;
}
</style>
