<template>
  <div id="app">
    <v-header  v-if="isSrart"/>
    <router-view class="container"
      @onComplitedLoading="onComplitedLoading"
    />
    <v-footer v-if="isSrart"/>
  </div>
</template>
<script>
import vHeader from '@/components/vHeader';
import vFooter from '@/components/vFooter';

export default {
  data:function(){
    return{
      isSrart:false,
      currentPage:'loading'
    }
  },
  components:{
    vHeader,
    vFooter,
  },
  methods:{
    onComplitedLoading:function(value){
      this.isSrart=value;
    },
    setActive:function(value){
      console.log(value);
      this.currentPage=value;
    }
  }
}
</script>
<style>
*{
  font-family: 'Press Start 2P', cursive;
  font-size: 1vw;
}
body{
  background: #001100;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: inset 10px 0 60px 0 #000800,
              inset 0px 24px 60px 0 #000800,
              inset -10px 0 60px 0 #000800,
              inset 0 -24px 60px 0 #000800;
  color:#4f9e00;
  
}
#app{
  width: inherit;
  height: inherit;
  position: relative;
}
.container{
  max-height: 80%;
  min-height: 80%;
  overflow: scroll;
  margin: 0;
  padding: 0 10%;
  overflow-x:hidden;
}

</style>
