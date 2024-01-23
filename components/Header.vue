<template>
    <div class="border-b py-4 w-full">
        <h1 class="text-[40px] font-semibold text-gray-600">{{title}}</h1>
           <p class="text-gray-400">{{ subTitle }}</p>
    </div>
           
</template>

<script setup>
defineProps(
  {
    title: String,
    subTitle: String
  }
)
</script>

<style lang="scss" scoped>

</style>