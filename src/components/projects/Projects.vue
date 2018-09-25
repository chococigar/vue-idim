<template>

  <div class="Main">
    <masonry class="projects" :cols="{default: 2, 800: 1}" :gutter="0">
        <div v-for="(item, index) in items" :key="index">
            <div class="project">
                <router-link :to="item.detail">
                    <img class='project__img' :src='item.img' >
                </router-link>
            </div>
        </div>
    </masonry>

    <router-view></router-view>

    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from './../Footer.vue';

export default {

    components: {
        appFooter: Footer
    },

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
    }
    .projects{
        margin-top:320px;
        border-top: 0.5px solid #D6D6D6;
        width:100%;
    }
    .project {
        //margin-bottom: 40px;
    }
    .project__img {
        vertical-align:top;
      object-fit: cover;
      width: 100%;
      height: 400px;
    }

</style>

