<template>
  <div class="calculator">
     <Display :value="displayValue"/>
     <Button label="AC" triple @buttonClick="clearMemory"/>
     <Button label="/" operation @buttonClick="setOperation"/>
     <Button label="7" @buttonClick="addDigit"/>
     <Button label="8" @buttonClick="addDigit"/>
     <Button label="9" @buttonClick="addDigit"/>
     <Button label="*" operation @buttonClick="setOperation"/>
     <Button label="4" @buttonClick="addDigit"/>
     <Button label="5" @buttonClick="addDigit"/>
     <Button label="6" @buttonClick="addDigit"/>
     <Button label="-" operation @buttonClick="setOperation"/>
     <Button label="1" @buttonClick="addDigit"/>
     <Button label="2" @buttonClick="addDigit"/>
     <Button label="3" @buttonClick="addDigit"/>
     <Button label="+" operation @buttonClick="setOperation"/>
     <Button label="0" @buttonClick="addDigit" double/>
     <Button label="." @buttonClick="addDigit"/>
     <Button label="=" operation @buttonClick="setOperation"/>
  </div>
       
</template>

<script>
import Display from '../components/Display.vue'
import Button from '../components/Button.vue'


export default {
    name: 'Calculator',
    components: {
        Display,
        Button
    },
    data: () => ({
        displayValue: '0',
        clearDisplay: false,
        operation: null,
        values: [0, 0],
        current: 0,
    }),
    methods: {
        clearMemory() {
            Object.assign(this.$data, this.$options.data())
        },
        setOperation(operation) {
            if (this.current === 0) {
                this.operation = operation
                this.current = 1
                this.clearDisplay = true
            } else {
                const equals = operation === '='
                const currentOperation = this.operation

                try{
                    this.values[0] = eval(`${this.values[0]} ${currentOperation} ${this.values[1]}`)
                } catch(e) {
                    console.error(e)
                }

                this.values[1] = 0

                this.displayValue = this.values[0]
                this.operation = equals ? null : operation
                this.current = equals ? 0 : 1

                this.clearDisplay = !equals
            }
        },
        addDigit(digit) {
            if (digit === '.' && this.displayValue.includes('.')) return

            const clearDisplay = this.displayValue === '0' || this.clearDisplay 
            const currentValue = clearDisplay ? '' : this.displayValue
            const displayValue = currentValue + digit

            this.displayValue = displayValue
            this.clearDisplay = false

            this.values[this.current] = displayValue
            
        }
    }
}
</script>

<style>
.calculator{
    height: 360px;
    width: 265px;
    border-radius: 5px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat 1fr 48px 48px 48px 48px;

    margin-top: 1rem;
}
</style>