import Vue from 'vue'
import Router from 'vue-router'
import Project2 from './components/Project2'
import About from './components/About'
Vue.use(Router);

export default new Router({
    routes:[
        {
            path:"/",
            name:"project2",
            component:Project2
        },
        {
            path:"/about/:name",
            name:"about",
            component:About
        }
    ]
})