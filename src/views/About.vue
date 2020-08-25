<template>
  <div>
    <div class="wrap">
      <div class="base-info-panel">
        <div class="base-info-panel__photo">
          <img :src="user.photo" alt="Нет фото">
        </div>
        <div class="base-info-panel__info">
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
            <p class="property">Тел.:</p>
            <p class="value">{{user.phone}}</p>
          </div>
          <div class="info-block">
            <p class="property">Email:</p>
            <p class="value">{{user.email}}</p>
          </div>
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
    }
  },

  methods:{
    mounted(){
      this.$emit('onComplitedLoading',true);
      this.$emit('setActive','about');
    },
  }
}
</script>
<style scoped>
.info-block{
  display: flex;
}
.property{
  display: inline-block;
  width: 20%;
  text-align: right;
  margin-right: 2%;
}
.base-info-panel__photo{

}
</style>