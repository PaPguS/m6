<script setup>
</script>

<template>
    <header>
        <router-link to="/">Главная</router-link>
        <router-link to="/faq">Вопросы</router-link>
        <router-link to='/admin'>Aдмин</router-link>
    </header>
</template>

<style scoped>
header{
    font-size: 40px;
    background: grey;
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.router-link-active {
    color: blue;
}
</style>
