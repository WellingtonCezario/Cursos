new Vue({
    el: '#app',
   data:{
    start:false,
    playerLife: 100,

    monsterLife: 100,
   
    minPlayerLife:0
   },
   methods: {
    attack() {
      const playerDamage = Math.floor(Math.random() * 10) + 1; // Dano do jogador entre 1 e 10
      const monsterDamage = Math.floor(Math.random() * 15) + 1; // Dano do monstro entre 1 e 15
      this.playerLife -= monsterDamage;
      this.monsterLife -= playerDamage;
    },
    specialAtack(){
        const specialAtack = Math.floor(Math.random() * 18) + 1;
        const monsterDamage = Math.floor(Math.random() * 15) + 1; // Dano do monstro entre 1 e 15
        this.playerLife -= monsterDamage;
        this.monsterLife -= specialAtack;
    },
    heal(){
        const playerHealth = Math.floor(Math.random() * 12) + 1; 
        
        if(this.playerLife <= 100){
            this.playerLife += playerHealth;
        }else{
            this.playerLife = 100;
        }
    }
  }
})