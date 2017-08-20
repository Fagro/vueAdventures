new Vue({

    el: '#app',

    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isNewGame: true,
        loggerType: false,
        logs: []
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
        startGame: function () {
            this.isNewGame = false;
            this.logs = [];
            this.playerHealth = 100;
            this.monsterHealth = 100;
            return this.isNewGame;
        },
        randomMove: function () {
            return parseInt(Math.random() * 10, 10);
        },
        applyMonsterAttack: function (monsterAttack) {
            this.playerHealth = this.playerHealth - monsterAttack;

            if (monsterAttack > 0)
                this.logs.push({ text: "monster hits player for " + monsterAttack, type: 'monster-turn' });

            if (this.playerHealth <= 0) {
                var result = confirm("You lose, want to start a new game ?");
                if (result) {
                    this.startGame();
                    this.isNewGame = false;
                }
                this.isNewGame = true;
            }
        },

        applyPlayerAttack: function (playerAttack) {

            this.monsterHealth = this.monsterHealth - playerAttack;

            if (playerAttack > 0) {
                this.logs.push({ text: "player hits monster for " + playerAttack, type: 'player-turn' });
            }

            if (this.monsterHealth <= 0) {
                var result = confirm("You won, want to start a new game ?");
                if (result) {
                    this.startGame();
                }
                this.isNewGame = true;
            }
        },
        applyHeal: function (heal) {
            this.playerHealth = this.playerHealth + heal;
            this.logs.push({ text: "player heals himself for " + heal, type: 'player-turn' });
            loggerType = true;
        },

        attack: function () {
            var attack = this.randomMove() + 5;
            var monsterAttack = this.randomMove() + 5;

            this.applyPlayerAttack(attack);
            this.applyMonsterAttack(monsterAttack);

        },
        specialAttack: function () {
            var attack = this.randomMove() + 7;
            var monsterAttack = this.randomMove() + 5;

            this.applyPlayerAttack(attack);
            this.applyMonsterAttack(monsterAttack);
        },
        heal: function () {
            var playerHeal = this.randomMove() + 2;
            var monsterAttack = this.randomMove() + 2;

            this.applyMonsterAttack(monsterAttack);
            this.applyHeal(playerHeal);
        },
        giveUp: function(){
            var result = confirm("are you sure you want to give up");
            if(result){
                this.startGame();
                this.isNewGame = true; 
            }
        }

    }
});