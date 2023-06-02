<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
	<!--	<b-button variant="primary" @click="exibir=!exibir" class="mb-4">Mostrar mensagem</b-button>
			<transition appear name="fade">
				<b-alert variant="info" v-if="exibir" show> {{ msg }}</b-alert>
			</transition>
			<transition appear name="slide">
				<b-alert variant="info" v-if="exibir" show>{{ msg }}</b-alert>
			</transition>
			<transition
			enter-active-class="animated shake"
			leave-active-class="animated shake"
			appear >
				<b-alert variant="info" v-if="exibir" show>{{ msg }}</b-alert>
			</transition> 
		<hr>
		<b-select v-model="tipoAnimacao">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select> -->	

	<!---	<transition

		:name='tipoAnimacao'>
			<b-alert variant="info" v-if="exibir" show>{{ msg }}</b-alert>
		</transition>
		<hr>
		<b-button variant="primary" @click="exibir2 = !exibir2">Exibir..</b-button>
		<transition
		:css="false"
		@before-enter="beforeEnter"
@enter="enter"
@after-enter="afterEnter"
@enter-cancelled="enterCancelled"
@before-leave="beforeLeave"
@leave="leave"
@after-leave="afterLeave"
@leave-cancelled="leaveCancelled"
		
		>
			<div v-if="exibir2" class="caixa"></div>
		</transition>
		<hr>
		<div class="mb-4">
			<b-button class="mr-2" variant="primary" @click="componenteSelecionado = 'AlertaInfo'">Info</b-button>
			<b-button variant="secondary" @click="componenteSelecionado = 'AlertaAdvertencia'">Advertencia</b-button>
		</div>
		<transition name="fade" mode="out-in">
			<component :is="componenteSelecionado"></component>
		</transition> -->

		<b-button @click="adicionarAluno" class="mb-4">Adicionar Aluno</b-button>
		<transition-group name="slide">
			<b-list-group v-for="(aluno, i) in alunos"  :key="aluno">
				<b-list-group-item @click="removerAluno(i)">{{ aluno }}</b-list-group-item>
			</b-list-group>
		</transition-group>
	</div>
</template>

<script>
import AlertaAdvertencia from './components/AlertaAdvertencia.vue'
import AlertaInfo from './components/AlertaInfo.vue'

export default {
components:{AlertaAdvertencia, AlertaInfo},

	data(){
	return{
		alunos:['Roberto', 'Julia', 'Afonso', 'Mário', 'Thiago', 'Leticia', 'Marina']
		,
		msg: 'Olá',
		exibir: false,
		exibir2: true,
		tipoAnimacao: 'fade',
		larguraBase: 0,
		componenteSelecionado: 'AlertaInfo'
	}
},
methods:{
	adicionarAluno(){
		const s = Math.random().toString(36).substring(2)
		this.alunos.push(s)
	},
	removerAluno(indice){
		this.alunos.splice(indice, 1)
	}
	,
	beforeEnter(el){
		this.larguraBase = 0	
		el.style.width = `${this.larguraBase}px`
	},
	enter(el,done){
	let rodada = 1
	const temporizador = setInterval(() =>{
		const novaLargura = this.larguraBase + rodada *10
		el.style.width = `${novaLargura}px`
		rodada++
		if(rodada > 30) {
			clearInterval(temporizador)
			done()
		}
	}, 20)
	},
	afterEnter(){
	

	},
	enterCancelled(){
		
	},
	beforeLeave(el){
		this.larguraBase = 300
		el.style.width = `${this.larguraBase}px`
	},
	leave(el, done){
		let rodada = 1
	const temporizador = setInterval(() =>{
		const novaLargura = this.larguraBase - rodada *10
		el.style.width = `${novaLargura}px`
		rodada++
		if(rodada > 30) {
			clearInterval(temporizador)
			done()
		}
	}, 20)
	},
	afterLeave(){
		console.log('AfterLeave')
	},
	leaveCancelled(){
		console.log('leaveCancelled')
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
	font-size: 1.5rem;
}
.caixa{
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}
.fade-enter, .fade-leave-to{
	opacity: 0;
}

.fade-enter-active, .fade-leave-active{
transition: opacity 1s;
}


@keyframes slide-in{
	from{transform:translateY(40px) ;}
	to{transform:translateY(0) ;}
}

@keyframes slide-out{
	from{transform:translateY(0) ;}
	to{transform:translateY(40px) ;}
}

.slide-enter-active{
	animation: slide-in 2s ease;
	transition: opacity 2s;
}
.slide-leave-active{
	position: absolute;
	width: 100%;
	transition: opacity 2s;
	animation: slide-out 2s ease
}

.slide-enter, .slide-leave-to{
	opacity: 0;
}

.slide-move{
transition: transform 1s;
}


</style>
