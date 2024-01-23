<template>
<div class="h-screen">
  <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl bbold tracking-tight text-gray-900">Register an account</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or Already have an account
        {{ ' ' }}
        <NuxtLink to="./signIn" class="font-medium text-[var(--primary)] hover:text-indigo-500">Sign in</NuxtLink>
      </p>
    </div>

    <div class="mt-8 w-full sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white border border-green-100 py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <p v-if="this.errors.ERR">{{ this.error.ERR }}</p>
        <p v-if="this.errors">{{ this.errors }}</p>
        <p>{{ this.agree }}</p>
        <p v-if="loading" class="text-center">Loading...</p>
        <form v-else @submit.prevent="handleSubmit()" class="space-y-4">
          <div>
            <label for="firstname" class="block text-sm font-medium text-gray-700">Firstname</label>
            <div class="mt-1">
              <input v-model="firstname" id="firstname" name="firstname" type="text" autocomplete="firstname" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
            <p v-if="this.errors.firstname" class="text-sm text-red-600 text-left mb-2">*{{this.errors.firstname}}</p>
          </div>
          <div>
            <label for="lastname" class="block text-sm font-medium text-gray-700">Lastname</label>
            <div class="mt-1">
              <input v-model="lastname" id="lastname" name="lastname" type="text" autocomplete="lastname" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
            <p v-if="this.errors.lastname" class="text-sm text-red-600 text-left mb-2">*{{this.errors.lastname}}</p>
          </div>
          <div>
            <label for="natioanalId" class="block text-sm font-medium text-gray-700">National Id</label>
            <div class="mt-1">
              <input v-model="nationalId" id="username" name="nationalId" type="text" autocomplete="nationalId" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
            <p v-if="this.errors.nationalId" class="text-sm text-red-600 text-left mb-2">*{{this.errors.nationalId}}</p>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="mt-1">
              <input v-model="email" id="email" name="email" type="email" autocomplete="email" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
            <p v-if="this.errors.email" class="text-sm text-red-600 text-left mb-2">*{{this.errors.email}}</p>
          </div>
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <div class="mt-1">
              <input v-model="username" id="username" name="username" type="text" autocomplete="username" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
            <p v-if="this.errors.username" class="text-sm text-red-600 text-left mb-2">*{{this.errors.username}}</p>
          </div>
          <div>
            <label for="mobileNumber" class="block text-sm font-medium text-gray-700">Mobile Number</label>
            <div class="mt-1">
              <input v-model="mobileNumber" id="mobileNumber" name="mobileNumber" type="text" autocomplete="mobileNumber" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
            <p v-if="this.errors.mobileNumber" class="text-sm text-red-600 text-left mb-2">*{{this.errors.mobileNumber}}</p>
          </div>
          <div>
            <label for="role" class="block text-sm font-medium text-gray-700">Account Type</label>
            <div class="mt-1">
              <select v-model="role" class="py-2 px-4 border rounded mb-2 w-full focus:outline-none focus:border-[var(--secondary)] duration-300">
                <option selected disabled>Select Role</option>
                <option value="Admin">Admin</option>
                <option value="User">Regular User</option>
              </select>    </div>

          </div>
          <div>
            <label for="role" class="block text-sm font-medium text-gray-700">Taberi</label>
            <div class="mt-1">
              <select v-model="taberi.id" class="py-2 px-4 border rounded mb-2 w-full focus:outline-none focus:border-[var(--secondary)] duration-300">
                <option selected disabled>Select Role</option>
                <option value="1">Taberi 1</option>
                <option value="2">Taberi 2</option>
              </select>    </div>

          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <div class="mt-1">
              <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
            <p v-if="this.errors.password" class="text-sm text-red-600 text-left mb-2">*{{this.errors.password}}</p>

          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div class="mt-1">
              <input v-model="confirmPassword" id="password" name="confirmPassword" type="password" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
            <p v-if="this.errors.confirmPassword" class="text-sm text-red-600 text-left mb-2">*{{this.errors.confirmPassword}}</p>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center gap-1">
              <input v-model="agree" id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
              <label>I agree to the<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> terms and conditions</a></label>           </div>

          </div>

          <div>
            <button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-green-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Register</button>
          </div>
        </form>
        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-3 gap-3">
            <div>
              <a href="#" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                <span class="sr-only">Sign in with Facebook</span>
                <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>

            <div>
              <a href="#" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                <span class="sr-only">Sign in with Twitter</span>
                <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>

            <div>
              <a href="#" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                <span class="sr-only">Sign in with GitHub</span>
                <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import axios from 'axios'

  export default {
      layout:'auth',
      data(){
          return{        
  firstname: "",
  lastname: "",
  email: "",
  username: "",
  natioanlId: "",
  password: "",
  role: "",
  mobileNumber: "",
  nationalId: "",
  taberi: {
    id: ""
  },
  confirmPassword: "",
  agree: false,
  errors: {},
  errored:false,
  loading: false,
          }
      },
      methods:{
          async handleSubmit(){
              this.errors = {};
              if(this.checked === false){
                this.errors.agree = "Agree to the terms and conditions"
                alert(this.errors.agree)
              }
              if(!this.firstname){
                  this.errors.firstname = "Firstname is required";
              }
              if(!this.lastname){
                  this.errors.lastname = "Lastname is required";
              }
              if(!this.email){
                  this.errors.email = "Email is required";
              }
              if(!this.mobileNumber){
                  this.errors.mobileNumber = "Mobile is required";
              }
              if(!this.nationalId){
                  this.errors.natioanalId = "Natioanl Id is required";
              }
              if(!this.password){
                  this.errors.password = "Enter password";
              } 
              if(!this.confirmPassword){
                  this.errors.Confirmpassword = "Re-enter password";
              }
              if(this.password !== this.confirmPassword){
                  this.errors.Confirmpassword = "Passwords do not match";
              }
             
              if (Object.keys(this.errors).length === 0) {
            this.loading=true;
        // make API call or submit form data here
        try{
          console.log("Sending...")
        await axios.post('http://3.10.190.157:7635/auth/register',{
            // await axios.post('http://192.168.100.7/api/v1/auth/register/tenant',{

  firstname: this.firstname,
  lastname: this.lastname,
  email: this.email,
  username: this.username,
  nationalId: this.nationalId,
  imageUrl: "No Image found",
  password: this.password,
  roles: this.role,
  mobileNumber: this.mobileNumber,
  // taberi: {
  //   id: this.taberi.id
  // },
        },{
            headers: {'Content-Type': 'application/json',
            //   'Authorization' : 'Bearer ' + token,
              accept : '*/*',
              'Access-Control-Allow-Origin': '*'},
            credentials: 'include'
          }).then((response) =>{
          const data = response.data;
          this.response = data;
          console.log(this.response);
          alert(this.response)
          this.$router.push('./signIn')
          // if(this.response === "User Not Found"){
          //   this.errors.failed = "Wrong Login details.";
          // }else{
            
          // }
        }).finally(()=>this.loading = false)

}catch(err){
console.log("Error:",err)
this.errors.failed = "Sorry, an error occured!";
}
        console.log("Form submitted successfully");
      }
          }
      }
      
  
  }
  </script>
  
  <style>
  
  </style>
