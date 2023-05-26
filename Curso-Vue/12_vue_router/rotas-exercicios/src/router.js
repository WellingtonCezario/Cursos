import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'

import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import Menu from './components/template/Menu.vue'
import MenuAlt from './components/template/MenuAlt.vue'

Vue.use(Router)

const UsuarioEditar = () =>import('./components/usuario/UsuarioEditar')

const router = new Router({
    mode:'history',
    scrollBehavior(to){
        if(to.hash){
            return{selector: to.hash}
        }
    },
    routes:[{
        path:'/',
       // component: Inicio
       components:{
        default: Inicio,
        menu: Menu
       } 
    }, 
    {
        path : '/usuario',
      //  component : Usuario,
      components:{
        default: Usuario,
        menu: MenuAlt,
        menuInferior: MenuAlt
      },
        props: true,
        children:[
            { path:'', component: UsuarioLista},
            {path: ':id', component: UsuarioDetalhe, props: true, 
            beforeEnter: (to,from,next) =>{
                console.log('Antes da rota usuario detalhe')
                next()
            }
             },
            {path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario'}    
        ]
    }, {
        path:'*',
        redirect: '/'
    }]
})

router.beforeEach((to, from, next) =>{
    console.log('Antes das rotas -> global')
    next()
})


export default router