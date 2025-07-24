<script lang="ts" setup>
import { ref } from 'vue'
import { ProductIntroduction, About, Acknowledgements, FAQ } from '@/components'
const Abouts = ref(1)
</script>
<template>
    <div class="abouts">
        <div >
            <ul>
                <li>
                    <button @click="$router.push('/')">返回</button>
                     <button @click="Abouts = 3">致谢名单</button>
                     <button @click="Abouts = 2">团队构成</button>
                     <button @click="Abouts = 1">产品介绍</button>
                </li>
            </ul>
        </div>
        <div v-if="Abouts === 1">
            <ProductIntroduction />
        </div>
        <div v-if="Abouts === 2">
            <About />
        </div>
        <div v-if="Abouts === 3">
            <Acknowledgements />
        </div>
        <div v-if="Abouts === 4">
            <FAQ />
        </div>
    </div>
</template>

<style scoped>
.abouts {
    width: 1920px;
    height: 1080px;
    margin: 0 auto;
    background-color: #ffffff;
}
li {
    height: 7.9375rem;
    width: 100%;
    background-color: #30728c;
    padding-right: 5.9375rem;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 2.625rem;
}
button {
    background: none;
    border: none;
    box-shadow: none;
    outline: none;
    color: white;
    font-size: 2.5rem;
    font-weight: 350;
    display: flex;
    align-items: center;
    height: 100%;
}
</style>

