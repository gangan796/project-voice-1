<script lang="ts" setup>
</script>
<template>
    <div class="container">
        <h1 class="title">关于默筏</h1>
        <p class="description">
            “默筏”是一款专为表达障碍人群设计的中文智能输入系统，服务对象包括渐冻症、脑性麻痹、中风后遗症等无法正常说话或打字的用户。系统支持眼动或单指操作，通过九宫格布局降低误触率，结合中文拼音首字母输入习惯，利用大模型实现整句联想与补全。用户可以填写个性化偏好，让AI根据个人兴趣生成更贴切的表达内容。输入内容可语音朗读、自动保存，常用句支持一键调用。
        </p>
        <div class="features">
            <img class="image-main" src="@/assets/product-images/index.jpg" alt="主界面">
           <div class="features-right">
               <img class="image-right-top" src="@/assets/product-images/setting.jpg" alt="设置界面">
               <img class="image-right-bottom" src="@/assets/product-images/setting2.jpg" alt="设置界面">
           </div>
        </div>
    </div>

</template>
<style>
h1.title {
    font-size: 4.6875rem;
    color: #30728c;
    text-align: center;
    font-weight: 600;
    margin-top: 2.625rem;
}
.description {
    font-size: 1.5rem;
    color: #30728c;
    line-height: 1.6;
    width:70%;
    margin: 0 auto;
    line-height: 2rem;
    text-indent: 2em;
    margin-top: 1.625rem;;
}
.features {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: 0 auto;
    gap: 2rem;
}

.features {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 70%;
    margin: 2rem auto 0 auto;
    gap: 2rem;
}

.image-main {
    width: 50.9375vw;
    height: 50.9259vh;
    object-fit: cover;
}

.features-right {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    height: 100%;
}

.image-right-top,
.image-right-bottom {
    width: 25.7917vw;
    height: 24.8148vh;
    object-fit: cover;
}
</style>