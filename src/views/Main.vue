<script setup>
import Card from '../components/Card.vue'
import {onMounted, ref } from "vue";


let data = ref([])

async function getData() {
    let response = await fetch("https://e0d49d85686653a2.mokky.dev/produckt")
    data.value = await response.json()
}

onMounted(() => {
    getData()
})

</script>

<template>
    <section>
        <Card v-for="(item, index) in data" :key="index" :item="item"/>
    </section>
</template>

<style scoped>
section{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    gap: 50px;
    margin: 50px;
}
</style>