<template>
    <NuxtLayout name="dashboard">
        <Header title="Dashboard" subTitle="Overal View"/>
        <!-- Stats Cards -->
        
        <div v-if="!pending || !pendingUsers || pendingStatistics" class="grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 max-sm:grid-cols-1 gap-4 my-8">
            <StatsCard link="/dashboard/notifications/" title="TOTAL NOTIFICATIONS" :value="statistics.totalNotifications" color="green"/>
            <StatsCard link="/dashboard/users/" title="ACTIVE USERS" :value="statistics.totalActiveUsers" color="green"/>
            <StatsCard link="/dashboard/users/" title="REGISTERED USERS" :value="statistics.totalActiveUsers" color="green"/>
            <StatsCard link="/dashboard/users/" title="INACTIVE USERS" :value="statistics.totalInActiveUsers" color="green"/>
        </div>
     <AddNotifications />
     <!-- Handle emit function called -->

        <!-- Add notification Table -->
        <p v-if="pending">Loading...</p>
        <p v-if="error">Error: {{ error }}</p>
        <NotificationTable :notifications="data" title="Notifications" v-else/>

        <!-- Notification Modal -->
 
    </NuxtLayout>
</template>

<script setup>
   const {data,pending,error,refresh} = useFetch('http://localhost:8080/notifications')
   const {data:statistics,pending:pendingStatistics,error:errorStatistics,refresh:refreshStatistics} = useFetch('http://localhost:8080/statistics')
</script>

<style lang="scss" scoped>

</style>