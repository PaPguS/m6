<script setup>
import {ref} from "vue";

let name = ref("");
let src = ref("");
let price = ref("");
let gb = ref("");
let ddr = ref("");
let bit = ref("");
let gpu = ref("");

function sendItem() {
    let data = {
        "name": name.value,
        "img": src.value,
        "price": price.value,
        "gb": gb.value,
        "ddr": ddr.value,
        "bit": bit.value,
        "gpu": gpu.value,
    }
    fetch("https://e0d49d85686653a2.mokky.dev/produckt", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        })

        name.value = "";
        src.value = "";
        price.value = "";
        gb.value = "";
        ddr.value = "";
        bit.value = "";
        gpu.value = "";
}
</script>

<template>
    <form @submit.prevent="sendItem">
    <label>
        <p>Введите ссылку на карточку:</p>
        <input v-model="src"  required/>
        <img v-if="src" :src="src" />
    </label>

    <label>
        <p>Введите название:</p>
        <input v-model="name" required>
    </label>

    <label>
        <p>Введите цену на товар:</p>
        <input v-model="price" required>
    </label>

    <label>
        <p>Введите количество гигабайтов:</p>
        <input v-model="gb" required> 
    </label>

    <label>
        <p>Введите тип DDR:</p>
        <input v-model="ddr" required>
    </label>

    <label>
        <p>Введите количество бит:</p>
        <input v-model="bit" required>
    </label>

    <label>
        <p>Введите графический процессор:</p>
        <input v-model="gpu" required>
    </label>

    <label>
        <button type="submit">Отправить</button>
    </label>
    </form>

</template>

<style scoped>
input{
    border-radius: 7px;
    padding: 5px;
    font-size: 15px;
    color: rgb(74, 74, 74);
}
p{
    font-size: 23px;
    padding: 6px;
}
</style>