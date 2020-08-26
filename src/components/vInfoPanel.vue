<template>
    <div class="info-panel" :style="{width:width}">
        <h1>{{name}}</h1>
        <v-info-item :width="itemWidth"
            v-for="(item,index) in items"
            :key="index"
            :name="item.name"
            :value="item.value"
            :isUrl="item.isUrl"
        />
    </div>
</template>
<script>
import vInfoItem from "@/components/vInfoItem.vue";

export default {
    components:{
        vInfoItem,
    },
    props:{
        name:{
            type:String,
            default:'',
        },
        width:{
            type:String,
            default:'auto',
        },
        itemWidth:{
            type:String,
            default:'auto',
        },
        items:{
            default:[],
        }
    },
}
</script>
<style scoped>
h1{
    margin-left: 10%;
}
.info-panel{
    margin:2% 0;
}
</style>