<script lang="ts" setup>
// 致谢页面组件
</script>

<template>
  <div class="acknowledgements-container">
    <h1 class="page-title">致谢名单</h1>
    <section class="acknowledgement-section">
      <div class="content-group-main">
        <h2 class="section-title">特别鸣谢</h2>
        <div class="content-group">
          <h3 class="sub-title">个人</h3>
          <p class="name-list">
            刘宏哲、李妍、郭娜、曲欣、崔雅梦、朱阳、刘小龙、刘湘裕
          </p>
        </div>
        <div class="content-group">
          <h3 class="sub-title">用户测试者</h3>
          <p class="name-list">
            小约、小泉、小慧、苏雨、嘉嘉、胡予欣、任凡
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.acknowledgements-container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
}

.page-title {
  width: 100%;
  text-align: center;
  margin-top: 2.625rem;
  font-size:4rem;
  height: auto;
  color: #30728c;
  font-weight: 550;
}



.section-title {
  color: #30728c;
  font-size: 2.8125rem;
  margin-bottom: 3rem;
  font-weight: 500;
}

.content-group-main {
  margin-top:4.3rem;
  margin-left: 11.1875rem;
}

.content-group {
  margin-bottom: 2rem;
}

.sub-title {
  color: #30728c;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 550;
}

.name-list {
  color: #30728c;
  font-size: 1.5rem;

}

@media (max-width: 768px) {
  .acknowledgements-container {
    padding: 1rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .acknowledgement-section {
    padding: 1.5rem;
  }
  
  .name-list {
    font-size: 1rem;
  }
}
</style>