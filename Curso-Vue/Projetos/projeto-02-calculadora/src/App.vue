<template>
    <div id="app">
        <h1>Calculadora</h1><Calculator/>
    </div>
</template>

<script>
import Calculator from './Main/Calculator'

export default {
components:{Calculator}
}
</script>

<style>
@font-face {
    font-family:'Roboto-Mono' ;
    src: url('./fonts/static/RobotoMono-Thin.ttf');
}
*{
    font-family: 'Roboto-Mono';
}
body{
    margin: 0;
}
#app{
    display: flex;
    flex-direction:column ;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    color: #FFF;
    background: linear-gradient(to right, rgb(83,105,118), rgb(41,46,73));
}
</style>