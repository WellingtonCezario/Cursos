<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-text="'Oi<strong>oi</strong>'"></p>
		<div id="notation">
			<p>O v-text Exibe texto da forma que é digitado, mas não interpreta HTML.</p>
		</div>
		<hr>
		<p v-html="'<strong>oi</strong'"></p>
			<div id="notation">
			<p>O v-html Exibe texto HTML.</p>
		</div>
		<hr>
		<p v-destaque-local="cor">Usando a minha propria diretiva</p>
		<p style="margin: auto;" v-tamanho="largura" v-destaque-local:fundo.atrasar.alternar="'lightblue'">Usando a minha propria diretiva</p>
	</div>
</template>

<script>
export default {
	data(){
		return{
			cor: 'red',
			largura: '300px'
		}
	},
	directives:{
		'destaque-local': {
		bind(el, binding, vnode){

			const aplicarCor = cor =>{
			if(binding.arg === 'fundo'){

				el.style.backgroundColor =cor
			} else{
				el.style.color= cor
			}
			}


			let atraso = 0
			let corAtual = cor1
			const cor2 = 'purple'
			const cor1 = binding.value


			if(binding.modifiers['atrasar']) atraso = 3000


			setTimeout(() =>{
			
					if(binding.modifiers['alternar']){
						setInterval(()=>{	

							corAtual = corAtual === cor1 ? cor2 : cor1

							aplicarCor(corAtual)
						}, 1000)
				}else{
	
			
				aplicarCor(binding.value)}
			}, atraso)


		}
	}}
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
#notation{
	border: 1px solid gray;
	width: 300px;
	height: 200px;
	margin: auto;
	font-size: 28px;
}
</style>
