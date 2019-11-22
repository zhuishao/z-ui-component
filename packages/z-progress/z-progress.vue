<template>
    <div>
        <div class="z-progress-outer">
            <div class="z-progress-inner z-bg-groove">
                <div class="z-progress-bg" :data-width="rectifyNum(percent)"></div>
                <span class="z-progress-text">{{fixNum(percent)}}%</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            percent: {
                type: Number,
                default: 0,
            }
        },
        name: "z-progress",
        methods:{
            rectifyNum(value) {
                if (typeof value !== 'number') {
                    return 0
                } else if(value < 0){
                    return 0;
                } else if(value > 100) {
                    return 100;
                } else {
                    return Math.floor(value/5)*5;
                }
            },
            fixNum(value){
                if (typeof value !== 'number') {
                    return 0
                } else if(value < 0){
                    return 0;
                } else if(value > 100) {
                    return 100;
                } else {
                    return value.toFixed(1);
                }
            }
        }
    }
</script>

<style scoped>
    .z-bg-groove{
        box-shadow: 0 0 30px inset rgba(0,0,0,1);
        --undercolor:rgb(44,43,49);
        --upcolor:rgb(53,53,61);
        background-color: var(--undercolor);
        background-size: 4px 20px;
        background-image:
                radial-gradient(circle at 3px 1px,var(--upcolor),var(--upcolor) 1px,transparent 1px,transparent),
                radial-gradient(circle at 1px 3px,var(--upcolor),var(--upcolor) 1px,transparent 1px,transparent),
                radial-gradient(circle at 3px 5px,var(--upcolor),var(--upcolor) 1px,transparent 1px,transparent),
                radial-gradient(circle at 1px 7px,var(--upcolor),var(--upcolor) 1px,transparent 1px,transparent),
                radial-gradient(circle at 3px 9px,var(--upcolor),var(--upcolor) 1px,transparent 1px,transparent),
                radial-gradient(circle at 1px 11px,var(--upcolor),var(--upcolor) 1px,transparent 1px,transparent),
                radial-gradient(circle at 3px 13px,var(--upcolor),var(--upcolor) 1px,transparent 1px,transparent),
                radial-gradient(circle at 1px 15px,var(--upcolor),var(--upcolor) 1px,transparent 1px,transparent),
                radial-gradient(circle at 3px 17px,var(--upcolor),var(--upcolor) 1px,transparent 1px,transparent),
                radial-gradient(circle at 1px 19px,var(--upcolor),var(--upcolor) 1px,transparent 1px,transparent)
    }
    .z-progress-outer{
        display: inline-block;
        text-align: left;
        width: 100%;
    }
    .z-progress-inner {
        height: 20px;
        border-radius: 200px;
        background-color: rgba(0, 0, 0, .2);
    }
    [data-width="0"] + .z-progress-text{
        margin-left: -25px;
    }
    [data-width="100"] + .z-progress-text{
        margin-left: -50px;
    }
    .z-progress-text{
        position: absolute;
        margin-left: -45px;
        margin-top: -16px;
        padding:2px 10px 0;
        color: white;
        background-color:rgb(44,43,49) ;
        font-size: 12px;
        border-top-left-radius: 100px;
        border-top-right-radius: 100px;
    }
    .z-progress-bg{
        display: inline-block;
        border-radius: 200px;
        height: 80%;
        vertical-align: middle;
        margin-left: 2px;
        margin-right: -22px;
        background-color: rgba(255,255,255,.5);
        transition: all .3s;
    }
    [data-width="0"] {
        width: 3%;
    }

    [data-width="5"] {
        width: 5%;
    }

    [data-width="10"] {
        width: 10%;
    }

    [data-width="15"] {
        width: 15%;
    }

    [data-width="20"] {
        width: 20%;
    }

    [data-width="25"] {
        width: 25%;
    }

    [data-width="30"] {
        width: 30%;
    }

    [data-width="35"] {
        width: 35%;
    }

    [data-width="40"] {
        width: 40%;
    }

    [data-width="45"] {
        width: 45%;
    }

    [data-width="50"] {
        width: 50%;
    }

    [data-width="55"] {
        width: 55%;
    }

    [data-width="60"] {
        width: 60%;
    }

    [data-width="65"] {
        width: 65%;
    }

    [data-width="70"] {
        width: 70%;
    }

    [data-width="75"] {
        width: 75%;
    }

    [data-width="80"] {
        width: 80%;
    }

    [data-width="85"] {
        width: 85%;
    }

    [data-width="90"] {
        width: 90%;
    }

    [data-width="95"] {
        width: 96%;
    }

    [data-width="100"] {
        width: calc(100% - 4px);
    }
</style>
