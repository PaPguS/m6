<script setup>
// import Cart from '../components/Cart.vue'
import {onMounted, ref } from "vue";


let data = ref([])

async function getData() {
    let response = await fetch("https://2d67a15116fee664.mokky.dev/product")
    data.value = await response.json()
}

onMounted(() => {
    getData()
})

</script>
<template>
    <section>
        {{data}}
        <!-- <Cart v-for="(item, index) in data" :key="index" :item="item"/> -->
    </section>
</template>

<style scoped>

</style>