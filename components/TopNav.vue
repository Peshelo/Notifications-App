<template>
    <!-- follow me on twitter @asad_codes -->

<div class="flex flex-wrap">
  <section class="relative mx-auto">
      <!-- navbar -->
    <nav class="flex justify-between bg-green-900 text-white w-screen">
      <div class="px-5 xl:px-12 py-6 flex w-full items-center">
        <a class="text-xl font-bold font-heading" href="#">
          <!-- <img class="h-9" src="logo.png" alt="logo"> -->
          Notifications App.
        </a>
        <!-- Nav Links -->
        <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><NuxtLink class="hover:text-gray-200" to="/dashboard/">Home</NuxtLink></li>
          <li><NuxtLink class="hover:text-gray-200" to="/dashboard/notifications/">Notifications</NuxtLink></li>
          <li><NuxtLink class="hover:text-gray-200" href="/dashboard/users/">Users</NuxtLink></li>
        </ul>
        <!-- Header Icons -->
        <div class="hidden xl:flex space-x-5 items-center">
          <!-- <a class="flex items-center hover:text-gray-200" href="#">
             <Icon name="material-symbols:notifications-rounded" size="23"/>
            </a> -->
          <!-- Sign In / Register      -->
          <button @click="logout" class="flex items-center hover:text-gray-200" href="#">
             Logout
          </button>
          
        </div>
      </div>
      <!-- Responsive navbar -->
      <div class="xl:hidden flex mr-6 items-center" >
        <button @click="logout" class="flex items-center hover:text-gray-200" href="#">
             Logout
          </button>
      </div>
    </nav>
    
  </section>
</div>

</template>

<script setup>

const logout = () => {
  localStorage.removeItem('token')
  router.push('/auth/login')
}
</script>

<style>
.nuxt-link-active, .router-link-active {
  color: green;
  background-color: white;
  padding: 10px;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
}
</style>