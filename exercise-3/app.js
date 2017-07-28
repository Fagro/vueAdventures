new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            result: function (){
                return this.value != 37 ? 'not there yet' : 'done';
            }
        },
        watch:{
           result : function(val){
               setTimeout(function(){
                    this.value = 0;
               }.bind(this), 5000);
           }
        }
    });