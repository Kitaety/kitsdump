import Vue from 'vue'
import App from './App.vue'
import router from './router'

let User ={
  firstName:'Данилович',
  name:'Евгений',
  lastName:'Сергеевич',
  sex:'мужской',
  maritalStatus:'холост',
  citizen:'Республика Беларусь',
  dateBirdth:'04.12.1999',
  phone:'+375295777980',
  email:'danilovitch.ev@gmail.com',
  photo:'https://sun9-3.userapi.com/c638429/v638429399/3b9ba/qof8uJKeSzo.jpg',
  contacts:[
    {type:'vk',value:'https://vk.com/kitaety'},
    {type:'github',value:'https://github.com/Kitaety'}
  ],
  education:[
    {
      type: 'Высшее',
      institution: 'УО "ПолесГУ"',
      specialty: 'Инженер-программист-экономист'
    },

  ]
};
export {User};

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
