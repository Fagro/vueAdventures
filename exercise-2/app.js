new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function () {
            alert('alerted!!!');
        },
        updatedWithKeydown: function (event) {
            this.value = event.target.value;
        },
        updatedWithEnter: function (event) {
            this.value = event.target.value;
        }
    }
});