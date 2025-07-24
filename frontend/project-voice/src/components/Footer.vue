<script lang="ts" setup>
</script>
<template>
    <!-- 备案信息 -->
    <!-- 关于我们 -->
    <div class="footer-container">
        <RouterLink to="/about" class="footer-link">关于我们</RouterLink>
    </div>
</template>
<style scoped>
.footer-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center; 
  justify-content: center; 
  padding: 1rem;
  box-sizing: border-box;
}

.footer-link {
  color: #ABABAB;
  text-decoration: none;
    font-size: 1.125rem;
  transition: color 0.2s ease;
}
.footer-link:hover {
  color: #2d85f0;
}

</style>