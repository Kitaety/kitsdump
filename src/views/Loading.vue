<template>
    <div class="loading-panel">
        <div class="loading-panel__text">
            <div class="flex">
                {{loadingText}}
            </div>
        </div>
        <div class="loading-panel__progress-bar">
            <div class="loading-panel__progress-bar__indicator"
                :class="[index<progress/2?'show':'hiden']"
                v-for="(i,index) in 10" :key="index"
            ></div>
        </div>
        <form 
            class="loading-panel__button-panel" 
            v-show="isShowBut" 
            onsubmit="return false;"
            >
            <router-link class="cursor-pointer" to="/home" tag="button">Продолжить</router-link>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Loading',
    data:function(){
        return{
            messages:[
                {
                    value:'Инициализация ядра...',
                    endProc:10
                },
                {
                    value:'Проверка данных...',
                    endProc:20
                },
                {
                    value:'Инициализация ядра...',
                    endProc:40
                },
                {
                    value:'Отправка Т-800...',
                    endProc:50
                },
                {
                    value:'Проверка данных...',
                    endProc:65
                },
                {
                    value:'Инициализация протокола "Таракан"...',
                    endProc:75
                },
                {
                    value:'Инициализация сессии...',
                    endProc:85
                },
                {
                    value:'Запуск ядерной боеголовки...',
                    endProc:100
                },
                {
                    value:'Система готова к использованию',
                    endProc:120
                },
            ],
            indexMessage:0,
            progress:0,
            time:6000,
            step:5,
            timerId:0,
        }
    },
    computed:{
        countStep:function(){
            return 100/this.step;
        },
        timeUpdate:function(){
            return this.time/this.countStep;
        },
        loadingText:function(){
            let result;
            for(let i =0; i<this.messages.length;i++){
                if(this.progress<this.messages[i].endProc/this.step){
                    result = this.messages[i].value;
                    break;
                }
            }

            return result;
        },
        isShowBut:function(){
            return this.progress>this.countStep;
        }
    },
    methods:{
        updateProgress:function(){
            this.progress++;
            if(this.progress==this.countStep+1){
                clearInterval(this.timerId);
            }
        }
    },
    mounted(){
        this.timerId = setInterval(this.updateProgress,this.timeUpdate)
        // setTimeout(()=>{clearInterval(timerId);},this.time+this.timeUpdate+10);
        this.$emit('onComplitedLoading',false);
    }    
}
</script>

<style scoped>
.flex{
    margin-right:auto !important;
    margin-left:auto !important;
}
.flex *{
    display: inline;
    margin: 0 !important;
}
.loading-panel{
    padding: 0;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 20%;
    font-size: 1vw;
}
.loading-panel *{
    margin: 5% auto;
}
.loading-panel__text{
    text-align: center;
    color:#4f9e00;
}
.loading-panel__progress-bar{
    outline-offset:2px;
    outline: 2px solid #4f9e00;
    position: relative;
    height: 20%;
    margin: 0 10%;

    display: flex;
}

.loading-panel__progress-bar__indicator:first-child{
    margin-left:0 !important;
}
.loading-panel__progress-bar__indicator:last-child{
    margin-right: 0 !important;
}
.loading-panel__progress-bar__indicator{
    width: 8%;
    height: 100%;
    margin: 0 auto;
    background: #4f9e00;
}
.loading-panel__button-panel{
    display: block;
}
.loading-panel__button-panel button{
    background: transparent;
    padding: 1% 3%;
    border:2px solid #4f9e00;
    color:#4f9e00;
    display: block;
    margin: 0 auto;
}
.loading-panel__button-panel button:hover{
    background: #4f9e00;
    color:#000800;
}
.loading-panel__button-panel button:active{
    background: #63c500;
}
.hiden{
    visibility: hidden;
}
.show{
    visibility:visible;
}
</style>
