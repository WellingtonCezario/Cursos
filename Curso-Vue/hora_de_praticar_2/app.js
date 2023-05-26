new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valorDois:''
    },
    methods:{
        alerta(){
            alert('Alerta!')
        },
        exibirTexto(event){
           this.valor = event.target.value
        },
        exibirTextoDois(event){
            this.valorDois = event.target.value
         }
    }
})