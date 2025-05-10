<script setup>
defineProps({
    item: Object,
});
</script> 

<template>
    <a>
        <img :src="item.img" alt=""/>
        <p>Название: {{item.name}}</p>
        <p>Цена: {{item.price}}</p> 
        <p>Гигобайты: {{item.Gb}}</p>
        <p>Тип памяти: {{item.DDR}}</p>
        <p>Биты: {{item.Bit}}</p>
        <p>Гпу: {{item.GPU}}</p>
    </a>
</template>
<style scoped>
    a{
        background: rgb(246, 195, 195);
        width: 100%;
    }
    img{
        width: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
    }
    p{
        font-size: 35px;
        padding: 5px;
    }
</style>