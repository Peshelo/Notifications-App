<template>
    <NuxtLayout name="dashboard">
        <Header title="Notifications" subTitle="List of all notifications"/>
        <p v-if="pending">Loading...</p>
        <p v-if="error">Error: {{ error }}</p>
        <NotificationTable :notifications="data" title="Notifications" v-else/>
    </NuxtLayout>
</template>

<script setup>

   const {data,pending,error} = useFetch('http://localhost:8080/notifications')

</script>

<style lang="scss" scoped>

</style>