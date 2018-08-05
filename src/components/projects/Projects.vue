<template>
  <div class="Main">
    <div class="filter">
        <span>All Projects</span>
        <span>Playground</span>
        <span>Residential</span>
        <span>Public</span>
        <span>Museum</span>
        <span>School</span>
        <span>Interior</span>
        <span>Commercial</span>
    </div>
    <masonry :cols="{default: 4, 1000: 3, 700: 2, 400: 1}" :gutter="40">
        <div v-for="(item, index) in items" :key="index">
            <div class="project">
                <router-link :to="item.detail" class="project__img">
                    <img :src='item.img' >
                </router-link>
                <div class="project__name">
                    <span>{{item.name}}</span>
                    <span>{{item.type}}</span>
                </div>
                <div class="project__info">
                    <p>Client / {{item.client}}</p>
                    <p>location / {{item.location}}</p>
                    <p>Design Period / {{item.design_period}}</p>
                </div>
            </div>
        </div>
    </masonry>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
    data: function() {
        return {
            items: [
                { 
                    name: 'CHANOU',
                    type: 'playground',
                    client: 'Chanou Manu',
                    location: 'Seoul, Korea',
                    design_period: '2017.01 - 2017.08',
                    img: "/src/assets/1x/project_01.png"
                    ,detail: "/projects/pajuchurch"
                },
                { 
                    name: 'CHANOU',
                    type: 'playground',
                    client: 'Chanou Manu',
                    location: 'Seoul, Korea',
                    design_period: '2017.01 - 2017.08',
                    img: "/src/assets/1x/project_02.png"
                    ,detail: "/projects/pajuchurch"
                },
                { 
                    name: 'CHANOU',
                    type: 'playground',
                    client: 'Chanou Manu',
                    location: 'Seoul, Korea',
                    design_period: '2017.01 - 2017.08',
                    img: "/src/assets/1x/project_03.png"
                    ,detail: "/projects/pajuchurch"
                },
                { 
                    name: 'CHANOU',
                    type: 'playground',
                    client: 'Chanou Manu',
                    location: 'Seoul, Korea',
                    design_period: '2017.01 - 2017.08',
                    img: "/src/assets/1x/project_04.png"
                    ,detail: "/projects/pajuchurch"
                },
                { 
                    name: 'CHANOU',
                    type: 'playground',
                    client: 'Chanou Manu',
                    location: 'Seoul, Korea',
                    design_period: '2017.01 - 2017.08',
                    img: "/src/assets/1x/project_05.png"
                    ,detail: "/projects/pajuchurch"
                },
                { 
                    name: 'CHANOU',
                    type: 'playground',
                    client: 'Chanou Manu',
                    location: 'Seoul, Korea',
                    design_period: '2017.01 - 2017.08',
                    img: "/src/assets/1x/project_06.png"
                    ,detail: "/projects/pajuchurch"
                },
                { 
                    name: 'CHANOU',
                    type: 'playground',
                    client: 'Chanou Manu',
                    location: 'Seoul, Korea',
                    design_period: '2017.01 - 2017.08',
                    img: "/src/assets/1x/project_07.png"
                    ,detail: "/projects/pajuchurch"
                },
                { 
                    name: 'CHANOU',
                    type: 'playground',
                    client: 'Chanou Manu',
                    location: 'Seoul, Korea',
                    design_period: '2017.01 - 2017.08',
                    img: "/src/assets/1x/project_08.png"
                    ,detail: "/projects/pajuchurch"
                },
                { 
                    name: 'CHANOU',
                    type: 'playground',
                    client: 'Chanou Manu',
                    location: 'Seoul, Korea',
                    design_period: '2017.01 - 2017.08',
                    img: "/src/assets/1x/project_09.png"
                    ,detail: "/projects/pajuchurch"
                },
                { 
                    name: 'CHANOU',
                    type: 'playground',
                    client: 'Chanou Manu',
                    location: 'Seoul, Korea',
                    design_period: '2017.01 - 2017.08',
                    img: "/src/assets/1x/project_10.png"
                    ,detail: "/projects/pajuchurch"
                },
                { 
                    name: 'CHANOU',
                    type: 'playground',
                    client: 'Chanou Manu',
                    location: 'Seoul, Korea',
                    design_period: '2017.01 - 2017.08',
                    img: "/src/assets/1x/project_11.png"
                    ,detail: "/projects/pajuchurch"
                },
                { 
                    name: 'CHANOU',
                    type: 'playground',
                    client: 'Chanou Manu',
                    location: 'Seoul, Korea',
                    design_period: '2017.01 - 2017.08',
                    img: "/src/assets/1x/project_12.png"
                    ,detail: "/projects/pajuchurch"
                },
                { 
                    name: 'CHANOU',
                    type: 'playground',
                    client: 'Chanou Manu',
                    location: 'Seoul, Korea',
                    design_period: '2017.01 - 2017.08',
                    img: "/src/assets/1x/project_13.png"
                    ,detail: "/projects/pajuchurch"
                }
            ]
        }
    },

    computed: {
        // items: function() {
        //     return [1,2,3,4,5];
        // }
    }
}
</script>

<style lang="scss">

    .Main {
        margin: 100px 2% 0 2%;
    }
    .filter {
        margin-bottom: 40px;
        display: flex;
        width: 60%;
        justify-content: space-between;
        font-family: 'Noto Sans KR';
        font-weight: 200;
        font-size: 14px;
    }

    .project {

        border-bottom: solid 1px rgba(0,0,0,0.4);
        margin-bottom: 40px;


        .project__img {
            width: 100%;
            img {
                 width: 100%;
            }
            margin-bottom: 40px;
        }
        .project__name {
            display: flex;
            justify-content: space-between;
            font-family: 'Noto Sans KR';
            font-weight: 600;
            font-size: 12px;
            margin-bottom: 20px;
        }
        .project__info {
            font-family: 'Noto Sans KR';
            font-weight: 200;
            font-size: 12px;
            p {
                margin: 0;
            }
            margin-bottom: 30px;
        }
    }
    
    
</style>

