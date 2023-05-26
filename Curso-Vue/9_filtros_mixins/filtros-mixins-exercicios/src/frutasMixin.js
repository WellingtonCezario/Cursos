export default{
    data(){
        return{
            fruta:'',
            frutas: ['Banana','Maçã', 'Acerola']
        }
    },
    methods:{
        add(){
            this.frutas.push(this.fruta)
            this.fruta =''
        }
    }
}