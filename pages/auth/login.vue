<template>
<NuxtLayout name="auth" class="h-screen">
  <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <!-- <img class="mx-auto h-32 w-auto" src="../../assets/images/zcc.png" alt="Your Company" /> -->
      <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Sign in to your account</h2>
      <!-- <p class="mt-2 text-center text-sm text-gray-600">
        Or
        {{ ' ' }}
        <NuxtLink to="./register" class="font-medium hover:text-indigo-500 underline underline-offset-2">Create an acount</NuxtLink>
      </p> -->
    </div> 

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white dark:bg-gray-700 border border-gray-300 py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <p v-if="loading" class="text-center">Loading...</p>
        <form v-else @submit.prevent="handleSubmit()" class="space-y-6">
          <div>
            <label v-if="errors.email" for="email" class="block text-xs text-red-500">*{{errors.email}}</label>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-white">Email address</label>
            <div class="mt-1">
              <input v-model="email" id="email" required name="email" type="email" autocomplete="email" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
            <!-- <p v-if="this.errors.email" class="text-sm text-red-600 text-left mb-2">*{{this.errors.email}}</p> -->
          </div>

          <div>
            <label v-if="errors.password" for="email" class="block text-xs text-red-500">*{{errors.passwords}}</label>

            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-white">Password</label>
            <div class="mt-1">
              <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
            <!-- <p v-if="this.errors.password" class="text-sm text-red-600 text-left mb-2">*{{this.errors.password}}</p> -->

          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500" />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-green-600 hover:text-green-500">Forgot your password?</a>
            </div>
          </div>

          <div>
            <button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-green-700 py-3 px-4 text-md font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign in</button>
            <!-- <label v-if="this.errored" class="text-red-400 text-center my-2 text-sm">{{ this.errors }}</label> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</NuxtLayout>
</template>


<script setup>

</script>

<script>
import axios from 'axios'
import {jwtDecode} from "jwt-decode";
//Import api from runtimeConfig


export default {
    layout:'auth',
    data(){
        return{
            email: "",
            password: "",
            loading: false,
            errors: {},
            loading: false,
            errored: false
        }
    },
    methods:{
        async handleSubmit(){
         this.errored = false;
            this.errors = {};
            if(!this.email){
                this.errors.email = "Email is required";
            }
            if(!this.password){
                this.errors.password = "Enter password";
            }
            if (Object.keys(this.errors).length === 0) {
       // Your code for handling the login form submission
       this.loading = true;
       try{
        await axios.post(`${this.$config.apiBase}/api/v1/auth/login`, {
        email:this.email,
        password :this.password
        },{
            headers: {'Content-Type': 'application/json',
            // Authorization : 'Bearer ' + localStorage.token,
            'Access-Control-Allow-Origin': '*'
          },
            credentials: 'include',
          }).then((response) =>{
          const data = response.data;
          console.log(data);
            console.warn(response.status)
          if(response.status != 200){
            this.errors.failed = "Wrong Login details...";
            alert(this.errors.failed);
          }else{
            this.success="";
            this.success = "Login Sucessful...";

            console.log("Login Successful..")
            localStorage.token = response.data;
            localStorage.token = this.getTokenValue(response.data);
            localStorage.role = this.getUserRole(response.data);

            this.push();

          }
        }).catch(error => {
          this.errors = error.message;
        this.errored = true
        
      }).finally(() => this.loading = false);

}catch(err){
  this.errored = true;
  this.errors.network = "Error: " + err.message;
  this.errors.ERR = err;
console.log("Error:",err.message)

}
      }
        },
        push(){
      this.$router.push("/dashboard/")
    },
    getTokenValue(tokenString) {
    const tokenArray = tokenString.split(' ')
    const tokenValue = tokenArray[tokenArray.indexOf('token') + 2]
    return tokenValue
    },
    getUserRole(tokenString) {
    const tokenArray = tokenString.split(' ')
    const tokenValue = tokenArray[tokenArray.indexOf('role') + 2].replace("[","").replace("]","");
    return tokenValue
    },
    },
   
    

}
</script>

<style>

</style>