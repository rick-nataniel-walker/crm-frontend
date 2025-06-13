<template>
  <div class="header">
    <div class="logo">
      <div class="logo-icon">
        <i class="fas fa-mountain"></i>
      </div>
      <div class="logo-text">Blog CMS</div>
    </div>
    <div class="user-info">
      <div class="user-avatar">UG</div>
      <div>
        <div>Dr. Ubaldo Gemusse</div>
        <div style="font-size: 0.9rem; opacity: 0.8">Administrador</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo-icon {
  width: 50px;
  height: 50px;
  background: var(--secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.logo-text {
  font-family: "Playfair Display", serif;
  font-size: 1.8rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
