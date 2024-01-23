<template>
    <NuxtLayout name="dashboard">
        <Header title="Dashboard" subTitle="Overal View"/>
        <!-- Stats Cards -->
        <div class="grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 max-sm:grid-cols-1 gap-4 my-8">
            <StatsCard link="/dashboard/notifications/" title="TOTAL NOTIFICATIONS" value="120" color="green"/>
            <StatsCard title="ACTIVE USERS" value="10" color="purple"/>
            <StatsCard title="REGISTERED USERS" value="3" color="green"/>
            <StatsCard title="ADMIN USERS" value="1" color="purple"/>
        </div>
        <div class="flex flex-row justify-end items-center my-4">
            <button @click="isOpen = true" class="p-2 rounded-md bg-blue-700 text-white">Add New Notification</button>
        </div>
        <!-- Add notification Table -->
        <p v-if="pending">Loading...</p>
        <p v-if="error">Error: {{ error }}</p>
        <NotificationTable :notifications="data" title="Notifications" v-else/>
        <!-- Notification Modal -->
        <UModal v-model="isOpen">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
            <h3 class="text-lg font-semibold">Add New Notification</h3>
        </template>

        <!-- Add Notification Form -->


        <template #footer>
            <button class="p-2 w-full rounded-md bg-blue-700 text-white">Add New Notification</button>
        </template>
      </UCard>
    </UModal>
    </NuxtLayout>
</template>

<script setup>
const isOpen = ref(false)
   const {data,pending,error} = useFetch('http://localhost:8080/notifications')
</script>

<style lang="scss" scoped>

</style>