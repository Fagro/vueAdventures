<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name : {{name}}</p>
        <button @click="resetName">Reset my name</button>
        <button @click="resetFn()">Reset my name from parent</button>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        resetFn : Function
    },
    methods:{
        resetName(){
            this.name = "Max"
            this.$emit('nameWasReset', this.name)
        }
    }
}
</script>

<style scoped>
div {
    background-color: lightcoral;
}
</style>
