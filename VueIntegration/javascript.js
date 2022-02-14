import { createApp } from 'vue'
import App from './App.vue'

const app = createApp({
    el: '#app',
    data: {
        Cars: [],

    },

    methods: {
        addCars(){
            Cars.push("Aston"); 
            console.log(Cars);
        }

    }
})