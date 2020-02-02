import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

firebase.initializeApp({
// insert Firebase App data here
    apiKey: "AIzaSyBPDAUkwtg8MxVbFeo5YVQ_U1E7vZnS6WE",
    authDomain: "flutter-update-53be7.firebaseapp.com",
    databaseURL: "https://flutter-update-53be7.firebaseio.com",
    projectId: "flutter-update-53be7",
    storageBucket: "flutter-update-53be7",
    messagingSenderId: "110367011593",
    appId: "1:110367011593:web:dce42fcd12281880d9d9d8",
    measurementId: "G-LW04452QBF"
});

new Vue({
    render: h => h(App)
}).$mount('#app')
