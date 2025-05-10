<script setup>
</script>

<template>
    <header>
        <router-link to="/">Главная</router-link>
        <router-link to="/faq">Вопросы</router-link>
    </header>
</template>

<style scoped>
header{
    background: grey;
    display: flex;
    justify-content: space-between;
    padding: 20px;
}
.router-link-active {
    font-size: 40px;
    color: rgb(110, 102, 102);
}
</style>
