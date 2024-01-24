<template>
    <div class="shadow-xl border rounded-md p-4">
        <h1 class="text-xl my-2">{{ title }}</h1>
        <!-- <p>{{ notifications }}</p> -->
        <div class="flex flex-row justify-between items-center border-b border-gray-200 dark:border-gray-700">
      <UInput class="py-2 text-xl" placeholder="Filter users..." />
      <button @click="$emit('refresh')" class="flex flex-row gap-2 p-2 items-center justify-center">
        <Icon name="i-material-symbols:refresh"/>
        Refresh
      </button>
    </div>
        <UTable class="border rounded-md drop-shadow-md" :rows="users" :columns="columns" />
    </div>
</template>

<script setup>
 defineProps(
   {
     users:{
        type:Array,
        required:true
      },
      title:{
        type:String,
        required:true
      }
     }
   
 )
 const columns = [ {
  key: 'firstName',
  label: 'Firstname'
},
{
  key: 'lastName',
  label: 'Lastname'
},
 {
  key: 'username',
  label: 'Username'
}, {
  key: 'dateOfBirth',
  label: 'Date of Birth',
  sortable: true
}, 
{
  key: 'userGender',
  label: 'Gender',
  sortable: true
},
{
  key: 'userRoles',
  label: 'Role',
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