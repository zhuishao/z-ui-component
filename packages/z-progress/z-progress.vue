<template>
    <div class="z-progress" :data-width="percent"></div>
</template>

<script>
    export default {
        props: {
            percent: {
                type: Number,
                default: 0,
            }
        },
        name: "z-progress"
    }
</script>

<style scoped>
    [data-width] {
        height: 20px;
        background-color: rgba(0, 0, 0, .2);
        position: relative;
        width: attr(data-width px, auto);
    }

    [data-width]::before {
        content: '';
        position: absolute;
        height: 100%;
        transition: all .3s;
        background-color: rgb(0, 0, 0);
    }

    [data-width="0"]::before {
        width: 0;
    }

    [data-width="5"]::before {
        width: 5%;
    }

    [data-width="10"]::before {
        width: 10%;
    }

    [data-width="15"]::before {
        width: 15%;
    }

    [data-width="20"]::before {
        width: 20%;
    }

    [data-width="25"]::before {
        width: 25%;
    }

    [data-width="30"]::before {
        width: 30%;
    }

    [data-width="35"]::before {
        width: 35%;
    }

    [data-width="40"]::before {
        width: 40%;
    }

    [data-width="45"]::before {
        width: 45%;
    }

    [data-width="50"]::before {
        width: 50%;
    }

    v[data-width="55"]::before {
        width: 55%;
    }

    [data-width="60"]::before {
        width: 60%;
    }

    [data-width="65"]::before {
        width: 65%;
    }

    [data-width="70"]::before {
        width: 70%;
    }

    [data-width="75"]::before {
        width: 75%;
    }

    [data-width="90"]::before {
        width: 90%;
    }

    [data-width="85"]::before {
        width: 85%;
    }

    [data-width="90"]::before {
        width: 90%;
    }

    [data-width="95"]::before {
        width: 95%;
    }

    [data-width="100"]::before {
        width: 100%;
    }
</style>
