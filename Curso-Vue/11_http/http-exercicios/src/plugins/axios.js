import Vue from 'vue'
import axios from 'axios'

//axios.defaults.baseURL = 'https://curso-vue-85bda-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue){
        //Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-85bda-default-rtdb.firebaseio.com/',
            headers:{"Authorization" : "abc123"}
        })
        Vue.prototype.$http.interceptors.request.use(config =>{
            console.log(config.method)
            return config
        }, error => Promise.reject(error))
        Vue.prototype.$http.interceptors.response.use(res =>{

 return res

        }, error => Promise.reject(error))
    }

})