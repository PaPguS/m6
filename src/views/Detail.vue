<script setup>
import {onMounted, ref } from "vue";
import {useRoute} from 'vue-router'

let route = useRoute()

let data = ref([])
let detail = ref()
async function getData() {
    let response = await fetch("https://e0d49d85686653a2.mokky.dev/produckt")
    data.value = await response.json()
}
function getDataId() {
    for (let i of data.value) {
        console.log(i)
        if (i.id == route.params.id) {
            detail.value = i
        }
    }
}

onMounted(async () => {
    await getData()
    await getDataId()
})
</script>

<template>
    <section v-if="detail">
        <img :src="detail.img" alt=""/>
        <div>
        <p>Название: {{detail.name}}</p>
        <p>Цена: {{detail.price}}</p>
        <p>Гигобайты: {{detail.Gb}}</p>
        <p>Тип памяти: {{detail.DDR}}</p>
        <p>Биты: {{detail.Bit}}</p>
        <p>Гпу: {{detail.GPU}}</p>
        </div>
    </section>
</template>

<style scoped>
section{
    font-size: 250%;
    line-height: 1.5;
    padding: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
}
img{
    width:600px
}

</style>