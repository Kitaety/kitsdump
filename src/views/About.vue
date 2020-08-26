<template>
  <div class="scroll-x">
    <div class="wrap">
      <div class="base-info-panel"
      :style="{height: photoH + 'px'}">
        <div id="photo" class="base-info-panel__photo" 
          :style="{width:windowsWidth + 'px', height: photoH + 'px'}">
          <img :src="user.photo" alt="Нет фото">
        </div>
        <div class="base-info-panel__info">
          <h1>Основная информация</h1>
          <div class="info-block">
            <p class="property">Фамилия:</p>
            <p class="value">{{user.firstName}}</p>
          </div>
          <div class="info-block">
            <p class="property">Имя:</p>
            <p class="value">{{user.name}}</p>
          </div>
          <div class="info-block">
            <p class="property">Отчество:</p>
            <p class="value">{{user.lastName}}</p>
          </div>
          <div class="info-block">
            <p class="property">Дата рождения:</p>
            <p class="value">{{user.dateBirdth}}</p>
          </div>
          <div class="info-block">
            <p class="property">Гражданство:</p>
            <p class="value">{{user.citizen}}</p>
          </div>
          <div class="info-block">
            <p class="property">Пол:</p>
            <p class="value">{{user.sex}}</p>
          </div>
          <div class="info-block">
            <p class="property">Семейное положение:</p>
            <p class="value">{{user.maritalStatus}}</p>
          </div>
        </div>
      </div>
      <div class="contact-panel">
        <h1>Контактная информация</h1>
        <div class="contact-panel__item ">
          <p>Тел.:</p>
          <p>{{user.phone}}</p>
        </div>
        <div class="contact-panel__item">
          <p>Email:</p>
          <p>{{user.email}}</p>
        </div>
        <div 
          class="contact-panel__item" 
          v-for="(url,index) in user.urls"
          :key="index"
          >
            <p>{{url.name.toUpperCase()}}: </p>
            <a :href="url.value">{{url.value}}</a>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import {User} from '../main.js';

export default {
  data:function(){
    return{
      user:User,
      windowsWidth:0,
    }
  },
  computed:{
    photoH:function(){
      return this.windowsWidth*1.25;
    }
  },
  methods:{
    updateWidth:function(){
      this.windowsWidth=document.documentElement.clientWidth*0.15;
    }
  },
  mounted(){
    this.$emit('onComplitedLoading',true);
    this.updateWidth();
  },
  created(){
    window.addEventListener('resize', this.updateWidth);
  }
}
</script>
<style scoped>
h1{
  margin-left: 10%;
}
.info-block{
  display: flex;
}
.property{
  display: block;
  width: 35%;
  text-align: left;
  margin-left: 2%;
}
.base-info-panel{
  width: 100%;
  display: flex;
}
.base-info-panel__info{
  width: 80%;
  height: 100%;
  display: block;
}
.base-info-panel__photo{
  overflow: hidden;
  border: 2px solid #4f9e00;
}
.base-info-panel__photo img{
  width: 100%;
  height: 100%;
  transform: scale(1.2);
  object-fit: cover;
}
.contact-panel{
  margin: 2% 0;
}
.info-block,
.contact-panel__item{
  display:flex;
  margin: 1% 0;
}
.contact-panel__item p{
  width: 10%;
  text-align: left;
  margin-right: 2%;
}
.contact-panel__item a{
  display: block;
  color:#4f9e00;
  text-decoration: none;
  border-bottom: 2px solid transparent;
}
.contact-panel__item a:hover{
  border-bottom: 2px solid #4f9e00;
}
</style>