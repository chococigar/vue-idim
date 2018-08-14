<template>
    <div class="header">
        <div>
            <router-link to="/projects" active-class="active" tag="span" @mouseover="onHover = !onHover" >PROJECT</router-link>
            <router-link to="/about" active-class="active" tag="span">ABOUT</router-link>
            <router-link to="/news" active-class="active" tag="span">NEWS</router-link>
            <router-link to="/communiation" active-class="active" tag="span">COMMUNICATION</router-link>
            <router-link to="/contact" active-class="active" tag="span">CONTACT</router-link>
        </div>

        <router-link class="logo" to="/" tag="div">
            <img src="./../assets/Logo2.png">
        </router-link>


    </div>
</template>

<style lang="scss">

    .header {
        z-index:9999;

        position:fixed;
        top:0;

        padding: 40px 2%;
        display: flex;
        justify-content: space-between;
        width: 100%;

        .logo {
            cursor:pointer;
            width:140px;
            position: relative;
            img {
                position: absolute;
                right: 50%;
                width: 100%;
            }
        }

        span {
            font-family: 'Noto Sans KR';
            font-weight: 500;
            font-size: 14px;
            color: black;
            cursor:pointer;
            letter-spacing: 0.5px;
            margin-right: 40px;
        }
        span:hover {
            color: #0041d3;
            font-weight: 600;
        }
        .active {
            color: #0041d3;
        }
    }


</style>

