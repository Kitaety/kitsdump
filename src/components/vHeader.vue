<template>
    <div class="header">
        <div class="nav">
            <router-link 
                v-for="(route,index) in routers"
                :key="index"
                :to="route.path"
                class="link cursor-pointer"
                active-class="selected"
                tag="div"
                ><p>{{route.name}}</p></router-link>
        </div>
    </div>
</template>
<script>
export default {
    computed:{
        routers:function(){
            return this.$router.options.routes.filter((route,index)=>{return index > 0});
        }
    }
}
</script>
<style scoped>
.header{
    height: 10%;
    width: 100%;
    border-bottom: 2px solid #4f9e00;
}
.nav{
    height: 100%;
    widows: inherit;
    box-sizing: border-box;
    display: flex;
    padding: 0 10%;
}
.link{
    display: flex;
    align-items: center; 
    height: inherit;
    padding: 0% 3%;
    text-decoration: none;
    border: 2px solid transparent;
}
.link p{
    margin: 0;
    font-size: 1.5vw !important;
}
.selected
{
    color:#001100;
    background: #4f9e00;
}
.link:hover{
    border: 2px solid #4f9e00;
}
</style>