new Vue({

    el: '#exercise',
    data: {
        fullname: 'Fagro Vizcaino Salcedo',
        age: 28
    },
    methods: {
        multiplyAgeBy3: function () {
            return this.age * 3;
        },
        getRandomFloat: function () {
            return Math.random();
        },
        getGoogleImage: function(){
            return "http://www.best-cat-art.com/images/bad-cat.jpg";
        }
    }
});