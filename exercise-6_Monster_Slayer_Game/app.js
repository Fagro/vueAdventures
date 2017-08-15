new Vue({

    el: '#app',

    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isNewGame: true
    },
    computed: {
        playerHealthBar: function () {
            return {
                backgroundColor: 'green',
                width: this.playerHealth + '%',
                color: 'white',
                margin: 0
            }
        },
        monsterHealthBar: function () {
            return {
                backgroundColor: 'green',
                margin: 0,
                width: this.monsterHealth + '%',
                color: 'white'
            }
        }
    },
    methods: {
        startGame: function(){
            this.isNewGame = false;
            return this.isNewGame;
        }

    }
});