<script setup>
defineProps({
    item: Object,
});
</script> 

<template>
    <a>
        {{ item }}
        <img :src="item.img" alt=""/>
        <h1>{{ item.title }}</h1>
        <p>{{ item.desc }}</p>
        <h2>{{item.price}}</h2>
        <h3>{{item.info}}</h3>
    </a>
</template>