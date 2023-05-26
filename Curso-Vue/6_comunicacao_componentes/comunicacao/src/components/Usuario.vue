<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <button @click="alterarNome()">Alterar nome</button>
        <p> O nome do usuário é: {{nome }}</p>
        <p>A idade do usuário é: {{ idade }}</p>
        <hr>
        <div class="componentes">
            <app-usuario-info :nome="nome" 
            :idade="idade"
            @nomeMudou="nome = $event"
            />
            <app-usuario-editar
            :idade="idade"
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    data(){
        return {
            nome: 'João',
            idade: 20
        }
    },
    methods:{
        alterarNome(){
            this.nome="Felipe"
        }
    },
    components: { AppUsuarioInfo, AppUsuarioEditar }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
