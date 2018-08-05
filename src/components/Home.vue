<template>
    <div class="Home">
        <!-- <img src="./../assets/1x/Home_01.png"> -->
        <!-- <img src="./../assets/2x/Asset 2@2x.png">
        <img src="./../assets/2x/Asset 2@2x.png"> -->
        <div class="right-half"></div>
    </div>
</template>

<style lang="scss">

    .Home {
        // display:flex;
        // justify-content: center;
        // img {
        //     height: 100%;
        // }
        background: url('./../assets/1x/Home_01.png');
        height: 100vh;
    }

    .right-half {
        background: url('./../assets/1x/Home_02.png');
        width:50%;
        position: absolute;
        right:0px;
        height:100%;
    }

</style>
