<template>
    <div class="shadow-xl border rounded-md p-4">
        <h1 class="text-xl my-2">{{ title }}</h1>
        <!-- <p>{{ notifications }}</p> -->
        <div class="flex flex-row justify-between border-b border-gray-200 dark:border-gray-700">
      <UInput  class="py-2 text-xl" placeholder="Filter notifications..." />
      <button class="flex flex-row gap-2 p-2 items-center justify-center">
        <Icon name="i-material-symbols:refresh"/>
        Refresh
      </button>
    </div>
    
        <UTable class="border rounded-md drop-shadow-md" :rows="notifications" :columns="columns">
          <template #actions-data="{ row }">
          <UDropdown :items="items(row)">
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-ellipsis-horizontal-20-solid"
            />
          </UDropdown>
        </template>
        </UTable>
        <UModal v-model="isOpen" class="p-4 text-3xl text-white">
          <h1 class="text-black my-4 p-4">Are you sure?</h1>
          <div class="flex p-4 flex-row justify-between items-center gap-2 ">
           <button @click="isOpen=false" class="bg-red-600 p-2 hover:shadow-md w-full">Cancel</button> 
           <button @click="deleteNote" class="bg-green-600 p-2 hover:shadow-md w-full">Yes</button> 

          </div>
        </UModal>
    </div>
</template>

<script setup>
 defineProps(
   {
     notifications: {
      type: Array,
      required: true,
   },
    title: {
      type: String,
      required: true,
    },
  }
 )
 const isOpen = ref(false)
 const currentId = ref(null)
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
},
  {
    key: "actions",
    label: "Actions",
  }
]

const items = (row) => [
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
      click: ()=> {
       deleteNotification(row.id)
      }
    },
  ]
];

function deleteNotification (id){
  isOpen.value = true
  currentId.value = id
} 
const deleteNote=  async  ()=>{
 
  const {data: deleteData,error: deleteError} = await useFetch(`http://localhost:8080/notifications/delete/${currentId.value}`,{
  method:"DELETE",
  headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Access-Control-Allow-Origin": "*",
                Accept: "*/*",
              },
}).catch((err)=>console.log(err)).finally(
isOpen = false
)
}
</script>




<style lang="scss" scoped>

</style>
