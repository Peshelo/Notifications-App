<template>
    <NuxtLayout name="dashboard">
        <Header title="Users" subTitle="List of all users"/>
        <p v-if="pending">Loading...</p>
        <p v-if="error">Error: {{ error }}</p>
        <UsersTable :users="data" title="Users Table" v-else/>
    </NuxtLayout>
</template>

<script setup>
const runTime = useRuntimeConfig()
const apiUrl = runTime.public.apiBase
const {data,pending,error,refresh} = useFetch(`${apiUrl}/users`)


</script>

<style lang="scss" scoped>

</style>