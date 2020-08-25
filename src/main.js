import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

export let user = {
  firstName:'Данилович',
  name:'Евгений',
  lastName:'Сергеевич',
  dateBirdth:'04.12.1999',
  photo:'',
  urls:[
    {name:'vk',value:'https://vk.com/kitaety'},
    {name:'github',value:'https://github.com/Kitaety'}
  ]
}