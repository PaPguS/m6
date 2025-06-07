<script setup>
import Card from "../components/Card.vue";
import { onMounted, ref } from "vue";

let data = ref([]);

async function getData() {
  let response = await fetch("https://e0d49d85686653a2.mokky.dev/produckt");
  data.value = await response.json();
}

let sortValue = ref("up");

function sortData() {
  if (sortValue.value == "up") {
    data.value.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sortValue.value == "down") {
    data.value.sort((a, b) => {
      return b.price - a.price;
    });
  }
}

let search = ref("");

async function searchData() {
  await getData();
  search.value = search.value.trim().toLowerCase();
  data.value = data.value.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.value)
    );
  });
}

onMounted(() => {
  getData();
});
</script>

<template>
  <section>
    <nav>
      <p>Сортировка:</p>
      <select v-model="sortValue" @change.prevent="sortData">
        <option value="up">По возрастанию цены</option>
        <option value="down">По убыванию цены</option>
      </select>
      <label>
        <p>Поиск:</p>
        <input v-model="search" @change="searchData" />
      </label>
    </nav>
    <div>
      <Card v-for="(item, index) in data" :key="index" :item="item" />
    </div>
  </section>
</template>

<style scoped>
nav{
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 30px;
    font-size: 30px;
}
label{
    display: flex;
    gap: 10px;
    font-size: 30px;
}

div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  margin: 50px;
}
</style>
