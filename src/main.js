import Vue from 'vue'
import App from './App.vue'
import router from './router'

let User ={
  firstName:'Данилович',
  name:'Евгений',
  lastName:'Сергеевич',
  dateBirdth:'04.12.1999',
  phone:'+375295777980',
  email:'danilovitch.ev@gmail.com',
  photo:'https://sun9-3.userapi.com/c638429/v638429399/3b9ba/qof8uJKeSzo.jpg',
  urls:[
    {name:'vk',value:'https://vk.com/kitaety'},
    {name:'github',value:'https://github.com/Kitaety'}
  ]
};
export {User};

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
