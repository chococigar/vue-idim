<template>
    <div :class="{'header_min': scrolled}" v-on:input="handleScroll" class="header_trans header"> 
        <div class="block">
            <router-link class="logo" to="/" tag="div">
                <img v-if="scrolled" src="src/assets/img/idim-half.png">
                <img v-else src="src/assets/img/idim-square.png">
            </router-link>
            <router-link to="/projects" class="col" active-class="active" tag="span" @mouseover="onHover = !onHover" >
                <span class="eng">Design</span>
                <span class="kor">디자인</span>
            </router-link>
            <router-link to="/about" class="col" active-class="active" tag="span">
                <span class="eng">About</span>
                <span class="kor">소개</span>
            </router-link>
            <router-link to="/blog" class="col" active-class="active" tag="span">
                <span class="eng">Blog</span>
                <span class="kor">블로그</span>
            </router-link>
            <router-link to="/nanum" class="col" active-class="active" tag="span">
                <span class="eng">Nanum project</span>
                <span class="kor">나눔프로젝트</span>
            </router-link>
        </div>
        <div class="block">
            <router-link to="/works" class="col" active-class="active" tag="span" @mouseover="onHover = !onHover" >
                <span class="eng">Nanum project</span>
                <span class="kor">나눔프로젝트</span>
            </router-link>

            <span class="eng col">2018</span>
        </div>
        <div class="block">
            <router-link to="/news" class="col" active-class="active" tag="span" @mouseover="onHover = !onHover" >
                <span class="eng">Nanum project</span>
                <span class="kor">나눔프로젝트</span>
            </router-link>
        </div>
        <div class="block">
            <div class="eng col">award-winning multi-disciplinary<br>product design laboratory<br>specialized in social innovation<br>through design</div>
            <div class="kor col">국제적인 입지로 다양한 분야를<br>넘나들며 디자인을 통한<br>사회적인 변화를 꿈꾸는<br>제품 디자인연구소</div>

        </div>




    </div>
</template>

<script>

    export default {
        data: function(){
            return{
                      limitPosition: 400,
                      scrolled: false,
                      lastPosition: 0
            }
        },
        methods: {
            handleScroll (event) {
            // Any code to be executed when the window is   scrolled
                if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
                this.scrolled = true;
                // move up!
                } 
                  
                if (this.lastPosition > window.scrollY) {
                    this.scrolled = false;
                    // move down
                }
                this.lastPosition = window.scrollY;
                  // this.scrolled = window.scrollY > 250;
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

</script>

<style lang="scss">
 /*   @font-face{
      font-family: 'Noto light';
      src: url('../assets/styles/fonts/NotoSans-Regular.ttf'); 
    }
*/

    span {
        font-weight: 400;
        font-size: 14px;
        color: black;
        cursor:pointer;
        letter-spacing: 0.5px;
        display:inline;
        background:white;

    }
    span:hover {
        color: #0041d3;
        font-weight: 600;
    }
    .active {
        color: #0041d3;
    }

    .kor{
        font-family: 'Noto light';
        font-size: 14px;
        background:white;
    }
    .eng{
        font-family: 'Grilli medium';
        font-size: 14px;
        background:white;
    }


    .header {
        z-index:9999;

        position:fixed;
        top:0;

        //padding: 40px 2%;
        display: flex;
        justify-content: space-between;
        width: 100%;

    }
    .header_trans {
    will-change: transform;
    transition: transform 200ms linear;
    }
    .header_min {
        transform: translateY(-0%);
    }


    .block{
        flex: 1;
    }
    .col{
        display:block;
        padding:16px;
        padding-left:20px;
        padding-right:20px;
    }

    @media (max-width: 400px) { /*breakpoint*/
      .container {
        flex-direction: column;
      }
    }


    .logo {
        cursor:pointer;
        width:100px;
        position: relative;
        img {
            width: 100%;
        }
    }


</style>

