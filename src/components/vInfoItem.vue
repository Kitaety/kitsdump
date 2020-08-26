<template>
    <div class="info-item">
            <p class="property" :style="{width:width}">{{name}}:</p>
            <p v-if="!isUrl" class="value">{{value}}</p>
            <a v-else class="value" :href="value">{{value}}</a>
    </div>
</template>
<script>
export default {
    props:{
        name:{
            type:String,
            default:'',
        },
        value:{
            default:'',
        },
        width:{
            default:'auto',
        },
        isUrl:{
            type:Boolean,
            default:false,
        }
    }
}
</script>
<style scoped>
.info-item{
    display:flex;
    margin: 1% 0;
}
.property{
    display: block;
    text-align: left;
    margin-left: 2%;
}
.value{
    display: block;
    color:#4f9e00;
    text-decoration: none;
    border-bottom: 2px solid transparent;
}
a.value:hover{
    border-bottom: 2px solid #4f9e00;
}
</style>