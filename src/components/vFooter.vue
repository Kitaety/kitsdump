<template>
    <div class="footer">
        <div class="url-panel">
            <a href="https://vk.com/kitaety">VK</a>
            <a href="#">GITHUB</a>
        </div>
        <div class="time-panel">            
            {{currentTime}}
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            currentTime:'',
        }
    },
    computed:{
    },
    methods:{
        startTime:function () {
            let today = new Date();
            let h = today.getHours();
            let m = today.getMinutes();
            let s = today.getSeconds();


            m = this.checkTime(m);
            s = this.checkTime(s);
            this.currentTime = h + ':' + m + ':' + s;
            setTimeout(this.startTime, 500);
        },
        checkTime:function(i) {
            if (i < 10) {i = "0" + i;}  // add zero in front of numbers < 10
            return i;
        },
    },
    mounted(){
        this.startTime();
    }
}
</script>
<style scoped>
.footer{
    position: absolute;
    top:90%;
    left:0;
    width: 100%;
    height: 10%;
    border-top:2px solid #4f9e00;
    padding: 0 10%;
    color: #4f9e00;
    display: flex;
}
.url-panel{
    height: 100%;
    display: flex;
    align-items: center; 
}
.url-panel a{
    color: #4f9e00;
    margin: auto 30% auto 0;
    text-decoration: none;
    font-size: 1.5vw;
}
.url-panel a:hover{
    border-bottom: 2px solid #4f9e00;
}
.time-panel{
    font-size: 1.5vw;
    top:50%;
    transform: translateY(-50%);
    position: absolute;
    right: 10%;
}
</style>