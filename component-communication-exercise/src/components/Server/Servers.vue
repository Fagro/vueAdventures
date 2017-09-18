<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="index in 5">
                Server #{{ index }}
            </li>
        </ul>
    </div>
</template>

<script>
import listItem from '.'

export default {
    data: function(){
        return{
            servers:[
                {id: 1, status: 'Normal'},
                {id: 2, status: 'Critical'},
                {id: 3, status: 'Normal'},
                {id: 4, status: 'Unknown'},
                {id: 5, status: 'Good'},
                {id: 6, status: 'Warning'}

            ]
        }
    }
}
</script>

<style>

</style>
