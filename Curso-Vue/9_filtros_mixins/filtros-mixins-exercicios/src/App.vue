<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<p>{{ cpfDoAluno | cpf | inverter}}</p>
		<input type="text" :value="cpfDoAluno | cpf">
		<hr>
		<Frutas/>
		<hr>
		<div>
    <ul>
        <li v-for="fruta in frutas" :key ="fruta">
            {{ fruta }}
        </li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add()">
</div>

	</div>

</template>

<script>
import Frutas from './Frutas.vue'
import frutasMixin from './frutasMixin'


export default {
	components:{Frutas},
	mixins:[frutasMixin],
	filters:{
		cpf(valor){
			const arr = valor.split('')
			arr.splice(3, 0,'.')
			arr.splice(7,0,'.')
			arr.splice(11,0,'-')
			return arr.join('')
		}
	},
data(){
	return{
		fruta:'',
        frutas: ['Banana','Maçã', 'Acerola'],
		cpfDoAluno: '12345678910'
	}
},
methods:{
    add(){
        this.frutas.push(this.fruta)
        this.fruta =''
    }
}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
input{
	font-size: 2.5rem;
}
</style>
