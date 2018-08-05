import Home from './components/Home.vue';
import About from './components/About.vue';
import Projects from './components/projects/Projects.vue';
import PajuChurch from './components/projects/Paju-Church.vue';
import Communiation from './components/communication/Communication.vue';

export const routes = [
    { 
        path: '', 
        component: Home 
    },
    {
        path: '/projects',
        component: Projects,
        children: [
            { path: 'pajuchurch', component: PajuChurch }
        ]
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/communication',
        children: [
            { path: '', component: Communiation }
        ]
    }
]