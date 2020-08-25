<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  mounted(){
    this.$emit('onComplitedLoading',true);
    this.$emit('setActive','home');
  }
}
</script>
