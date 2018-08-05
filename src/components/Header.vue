<template>
    <div class="header">
        <router-link class="logo" to="/" tag="div">
            <img src="./../assets/logo.png">
        </router-link>
        <router-link to="/projects" active-class="active" tag="span" @mouseover="onHover = !onHover" >PROJECT</router-link>
        <router-link to="/about" active-class="active" tag="span">ABOUT</router-link>
        <router-link to="/news" active-class="active" tag="span">NEWS</router-link>
        <router-link to="/communiation" active-class="active" tag="span">COMMUNICATION</router-link>
        <router-link to="/contact" active-class="active" tag="span">CONTACT</router-link>
    </div>
</template>

<style lang="scss">

    .header {
        z-index:9999;

        position:fixed;
        top:0;

        margin: 40px;
        display: flex;
        justify-content: space-between;
        width: 60%;

        .logo {
            cursor:pointer;
            width:200px;
            img {
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

