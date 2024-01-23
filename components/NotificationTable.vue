<template>
    <div class="shadow-xl border rounded-md p-4">
        <h1 class="text-xl my-2">{{ title }}</h1>
        <!-- <p>{{ notifications }}</p> -->
        <div class="flex border-b border-gray-200 dark:border-gray-700">
      <UInput v-model="q" class="py-2 text-xl" placeholder="Filter people..." />
    </div>

        <UTable class="border rounded-md drop-shadow-md" :rows="notifications" :columns="columns" />

        
    </div>
</template>

<script setup>
 defineProps(
   {
     notifications: Array,
     title: String,
   }
 )
 const columns = [ {
  key: 'title',
  label: 'Title'
},
{
  key: 'topic',
  label: 'Topic'
},
 {
  key: 'content',
  label: 'Description'
}, {
  key: 'sender',
  label: 'Sender',
  sortable: true
}, 
{
  key: 'dateCreated',
  label: 'Date Created',
  sortable: true
}]

</script>




<style lang="scss" scoped>

</style>