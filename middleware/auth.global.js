export default defineNuxtRouteMiddleware((to, from) => {
    // if (to.params.id === '1') {
    //   return abortNavigation()
    // }
    // Check if the user is authenticated by checking for token in localStorage
    // const isLoggedIn = localStorage.getItem('token')
    // // If the user is not authenticated
    // if (!isLoggedIn) {
    //   // Redirect to the home page
    
    //   return navigateTo('/auth/login')
    // }



    if (to.path === '/auth/login' || to.path === '/') {
      // alert("Login")
      if (process.browser) {
        window.localStorage.setItem('nuxt-color-mode','light')
  
    }
        // return
    }else{
      if (process.browser) {
          window.localStorage.setItem('nuxt-color-mode','light')
          if (!window.localStorage.getItem('token')) {
            window.location = '/auth/login'
          }
      }
    }
      

    // In a real app you would probably not redirect every route to `/`
    // however it is important to check `to.path` before redirecting or you
    // might get an infinite redirect loop
 
    // const {data} = useFetch('https://jsonplaceholder.typicode.com/posts')
    // console.log(data);
  })