<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <hr>
    <p><strong>Código:{{ id }}</strong></p>
<router-link tag="button" primario
:to="{name: 'editarUsuario', params: {id: $route.params.id}, 
query: {completo:true, lingua:'pt'}, hash: '#rodape'
}"
>   Editar
</router-link>

    </div>
</template>

<script>
export default {
    props:['id'],
    beforeRouteEnter(to,from,next){
        console.log('Antes da rota!');
        next()
    }
 // data(){
  //  return{
   //   id:this.$route.params.id
   // }
 // },
 //watch:{
//  $route(to, from){
//    this.id = to.params.id
//  }
}
</script>

<style>

</style>