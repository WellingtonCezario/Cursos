<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ nome }}</strong></p>
        <p>Idade do usuário: {{ idade }}</p>
        <button @click="mudarNome()">Resetar</button>
    </div>
</template>

<script>

import barramento from '@/barramento'

export default {
    props:{
        nome:{
            type: String,
            required: true
        },
        idade:{
            type: Number
        }
    },
    methods:{
            mudarNome(){
                console.log('mudei')
                this.nome = "João",
                this.$emit('nomeMudou', this.nome)
            },
            trocarNome(){

            }
        },
        created(){
            barramento.quandoIdadeMudar(idade =>{
                this.idade = idade
            })
        }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
