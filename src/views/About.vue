<template>
  <div class="about wrap">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  data:function(){
    return{
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
