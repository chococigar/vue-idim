<template>
    <div class="Modal">
        <div class="detail__head">
            <!-- <img src="/src/assets/2x/paju_01.png"> -->
        </div>
        <div class="detail__body">
            <div class="detail__body__imgs">
                <img src="/src/assets/2x/paju_02.png">
                <img src="/src/assets/2x/paju_03.png">
                <img src="/src/assets/2x/paju_04.png">
                <img src="/src/assets/2x/paju_05.png">
                <img src="/src/assets/2x/paju_06.png">
            </div>
            <div class="detail__body__info">

                <div class="info__title">
                    <h3 class="title kor">파주 청석교회</h3>
                    <h3 class="title eng">PAJU BLUESTONE CHURCH</h3>
                </div>

                <hr>

                <p class="info bold info__menu">Type / Public</p>

                <hr>

                <div class="info__menu">
                    <p class="info">Client /</p>
                    <p class="info">location /</p>
                    <p class="info">Design Period /</p>
                    <p class="info">Structural Engineer /</p>
                    <p class="info">Photography /</p>
                </div>

                <hr>

                <div class="info__text">
                    <p class="paragraph">
                        The siteadsfasf is the next of a community park in new town area and a corner location. The roof has a angle to face the park and there will be an outdoor seats on it. An external continuous path will connect from below grade to the roof. The main church service space is at the below grade level with natural light from floated mass. 3 dimensional overlay will make richness of space.
                    </p>
                    <p class="paragraph">
                        파주 운정지구에 위치할 이 교회는 아직 형성되지< 않은 주변 컨텍스트에서 앞으로 지역 커뮤니티의 중심이 되고자 하였다. 설계의 접근은 불확정적인 주변 환경을 예상하여 대응하는 것인 아닌 본디 이 땅에서 기원한 것 같은 원형적 형상을 추구하여 본래 교회의 이름인 청석(Blue Stone)을 교회가 가져야 할 이미지로 개념화하였다. 
                        <br>"뜬 돌(Floating Stone)"이 될 청석 교회는 지역의 점이자 하나의 반석이며 열린 집으로 기능하도록, 바위의 형태, 필로티, 그리고 지하 예배당과 지붕의 데크로 연결되는 외부 
                    </p>
                </div>


            </div>
        </div>
        <app-footer class="footer-detail"></app-footer>
        
    </div>
</template>

<script>
import Footer from './../Footer.vue';

export default {
    components: {
        appFooter: Footer
    }
}

</script>


<style lang="scss">
    // .Modal {
        // position: fixed;
        // top:0;
        // left:0;
        // width:100%;
        // min-height: 100vh;
        // background-color: white;
    // }

    .footer-detail {
        margin-left: 2%;
        margin-right: 2%;
    }

    .detail__head {
        background: url('/src/assets/2x/paju_01.png');
        background-attachment: fixed;
        background-size: cover;
        height: 100vh;
        margin-bottom: 40px;

        // width:100%;
        // img { width: 100%;}
    }
    .detail__body {
        margin: 0 2%;
        display: flex;
        .detail__body__imgs {
            width: 75%;
            img {
                width: 100%;
                margin-bottom: 20px;
            }
        }
        .detail__body__info {
            width: 25%;
            padding: 20px 2% 0 2%;
            font-family: 'Noto Sans KR';
            .title {
                color: #0041d3;
                font-size: 20px;
            }
            .kor {
                font-weight: 900;
                font-family: 'Nanum Myeongjo';
            }
            .eng {
                font-weight: 400;
            }
            .paragraph {
                font-size: 17px;
                color: rgba(0,0,0,.4);
                line-height: 2.5;
                font-weight: 500;
                margin-bottom: 40px;
            }
            .info {
                font-weight: 300;
                font-size: 16px;
            }
            .bold {
                font-weight:800;
            }


            .info__title {
                margin-bottom: 40px;
            }
            .info__menu {
                margin: 25px 0;
            }
            .info__text {
                margin: 40px 0
            }
        }
    }

</style>
