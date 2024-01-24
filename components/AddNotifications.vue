<template>
    <div>
        <div class="flex flex-row justify-end items-center my-4">
            <button @click="isOpen = true" class="p-2 rounded-md bg-blue-700 text-white">Add New Notification</button>
        </div>
        <UModal v-model="isOpen">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
            <h3 class="text-lg font-semibold">Add New Notification</h3>
        </template>

        <!-- Add Notification Form -->
        <form class="p-4 space-y-4">
            <div class="flex flex-col space-y-2">
                <label class="text-sm font-semibold">Title</label>
                <UInput v-model="title" placeholder="Notification Title" />
            </div>
            <div class="flex flex-col space-y-2">
                <label class="text-sm font-semibold">Topic</label>
                <UInput v-model="topic" placeholder="Notification Topic" />
            </div>
            <div class="flex flex-col space-y-2">
                <label class="text-sm font-semibold">Description</label>
                <UTextarea v-model="content" placeholder="Notification Description" />
            </div>
            <!-- <div class="flex flex-col space-y-2">
                <label class="text-sm font-semibold">Sender</label>
                <UInput v-model="sender" placeholder="Notification Sender" />
            </div> -->
            <div class="flex flex-col space-y-2">
                <label class="text-sm font-semibold">Schedule</label>
                <UInput v-model="schedhuledTime" type="datetime-local" placeholder="Notification Date Created" />
            </div>
        </form>

        <template #footer>
            <button @click="addNotification" class="p-2 w-full rounded-md bg-blue-700 text-white">Add New Notification</button>
        </template>
      </UCard>
    </UModal>
    </div>
</template>

<script setup>
const isOpen = ref(false)
const title = ref('')
const topic = ref('')
const content = ref('')
const sender = ref('')
const schedhuledTime = ref('')

const addNotification = () => {
    
    
//Check if all fields are filled
    if(!title.value || !topic.value || !content.value  || !schedhuledTime.value){
        alert('Please fill all fields')
        return
    }

    const body = {
        notification: {
            title: title.value,
            content: content.value,
            topic: topic.value
        },
        targetType: "CLIENT",
        target: "string",
        scheduledTime: schedhuledTime.value
    }
    console.log(body)
    fetch('http://localhost:8080/schedule', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
            // Reset all fields
            title.value = ''
            topic.value = ''
            content.value = ''
            sender.value = ''
            schedhuledTime.value = ''
            alert('Notification Added')
            isOpen.value = false
    })
    .catch(err => console.log(err)).finally(() => {
        // alert('Notification Added')
    })
}



</script>

<style lang="scss" scoped>

</style>