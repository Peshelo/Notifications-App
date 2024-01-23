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
          <li><NuxtLink class="hover:text-gray-200" to="./notifications/">Notifications</NuxtLink></li>
          <li><NuxtLink class="hover:text-gray-200" href="#">Events</NuxtLink></li>
          <li><NuxtLink class="hover:text-gray-200" href="#">Info</NuxtLink></li>

        </ul>
        <!-- Header Icons -->
        <div class="hidden xl:flex space-x-5 items-center">
          <a class="flex items-center hover:text-gray-200" href="#">
             <Icon name="material-symbols:notifications-rounded" size="23"/>
            </a>
          <!-- Sign In / Register      -->
          <button @click="logout" class="flex items-center hover:text-gray-200" href="#">
             Logout
          </button>
          
        </div>
      </div>
      <!-- Responsive navbar -->
      <a class="xl:hidden flex mr-6 items-center" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span class="flex absolute -mt-5 ml-4">
          <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
          </span>
        </span>
      </a>
      <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </a>
    </nav>
    
  </section>
</div>

<div class="absolute bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <NuxtLink to="./" class="block bg-green-900 p-4  text-white rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">

          <Icon name="material-symbols:add-ad-outline-rounded" class="" size="23"/>
        </NuxtLink>
    </div>
</div>
</template>

<script setup>

const logout = () => {
  localStorage.removeItem('token')
  router.push('/auth/login')
}
</script>

<style lang="scss" scoped>

</style>