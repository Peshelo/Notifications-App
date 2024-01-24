<template>
    <NuxtLink v-if="value" :to="link !== null ? link : '/'" class="w-full bg-white border rounded-md drop-shadow-md p-2">
    <div class=" bg-white border rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
      <div :class="`bg-${color}-900`" class="h-20  flex items-center justify-between">
        <p class="mr-0 text-white text-lg pl-5">{{title}}</p>
      </div>
      <div class="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
        <p>TOTAL</p>
      </div>
      <p class="py-4 text-3xl text-black ml-5">{{ value }}</p>
      <!-- <hr > -->
    </div>
    </NuxtLink>
</template>

<script setup>
  defineProps(
    {
      title: String,
      value: Number,
      color: String,
      link: String
    }

  )
</script>

<style lang="scss" scoped>

</style>
