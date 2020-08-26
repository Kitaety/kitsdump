<template>
  <div class="scroll-x">
    <div class="wrap">
      <div class="base-info-panel"
      :style="{height: photoH + 'px'}">
        <div id="photo" class="base-info-panel__photo" 
          :style="{width:windowsWidth + 'px', height: photoH + 'px'}">
          <img :src="user.photo" alt="Нет фото">
        </div>
        <v-info-panel 
          name="Основная информация"
          width="80%"
          itemWidth="40%"
          :items="getUserBaseInfo()"
        />
      </div>
      <v-info-panel 
        name="Контактная информация"
        width="100%"
        itemWidth="15%"
        :items="getUserContactInfo()"
      />
      <v-info-panel 
        name="Образование"
        width="100%"
        itemWidth="15%"
        :items="getUserEducationInfo()"
      />
    </div>
  </div>
</template>
<script>
import {User} from '../main.js';
import vInfoPanel from '@/components/vInfoPanel.vue'

export default {
  components:{
    vInfoPanel,
  },
  data:function(){
    return{
      user:User,
      windowsWidth:0,
    }
  },
  computed:{
    photoH:function(){
      return this.windowsWidth*1.5;
    },
  },
  methods:{
    getUserBaseInfo:function(){
      return [
        {name:'Фамилия',value:this.user.firstName},
        {name:'Имя',value:this.user.name},
        {name:'Отчество',value:this.user.lastName},
        {name:'Дата рождения',value:this.user.dateBirdth},
        {name:'Гражданство',value:this.user.citizen},
        {name:'Пол',value:this.user.sex},
        {name:'Семейное положение',value:this.user.maritalStatus},
      ]; 
    },
    getUserContactInfo:function(){
      let contactInfo = [
        {name:'Тел',value:this.user.phone},
        {name:'Email',value:this.user.email},
      ]
      for(let i=0; i<this.user.contacts.length; i++ ){
        contactInfo.push({name: this.user.contacts[i].type.toUpperCase(), value :this.user.contacts[i].value, isUrl:true});
      }
      return contactInfo; 
    },
    getUserEducationInfo:function(){
      let educationInfo =[];
      for(let i = 0; i < this.user.education.length; i++){
        educationInfo.push({name: this.user.education[i].type, value: this.user.education[i].institution + '  ' + this.user.education[i].specialty});
      }
      return educationInfo;
    },
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
.base-info-panel{
  width: 100%;
  display: flex;
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
</style>