new Vue({
    el: "#app",
    data: {
        gameOver: true,
        playerHP: 100,
        playerAttackPower: 11,
        playerSpecialPower: 19,
        playerHealPower: 10,
        monsterHP: 100,
        monsterAttackPower: 11,
        messages: []
    },
    methods: {
        playerAttack: function(power) {
            if (this.gameOver) return;
            const attack = Math.max(Math.floor(Math.random() * power), 3);
            this.monsterHP -= attack;
            this.checkWinLose(attack);
            if (!this.gameOver) {
                this.messages.unshift({
                    player: true,
                    msg: `Player hit monster for ${attack}!`
                });
            }
            this.monsterAttack();
        },
        playerHeal: function() {
            if (this.gameOver) return;
            this.playerHP += this.playerHealPower;
            if (this.playerHP > 100) this.playerHP = 100;
            this.messages.unshift({
                player: true,
                msg: `Player healed themselves for ${this.playerHealPower}!`
            });
            this.monsterAttack();
        },
        monsterAttack: function() {
            if (this.gameOver) return;
            const attack = Math.max(
                Math.floor(Math.random() * this.monsterAttackPower),
                3
            );
            this.playerHP -= attack;
            this.checkWinLose(attack);
            if (!this.gameOver)
                this.messages.unshift({
                    player: false,
                    msg: `Monster hit player for ${attack}!`
                });
        },
        checkWinLose: function(attack) {
            if (this.playerHP <= 0) {
                this.gameOver = true;
                this.messages.unshift({
                    player: false,
                    msg: `Monster hit player for ${attack} - you are defeated!`
                });
            }
            if (this.monsterHP <= 0) {
                this.gameOver = true;
                this.messages.unshift({
                    player: true,
                    msg: `Player hit monster for ${attack}, defeating it! Monster was vanquished!`
                });
            }
        },
        resetGame: function() {
            this.gameOver = false;
            this.playerHP = 100;
            this.monsterHP = 100;
            this.messages = [];
        }
    },
    computed: {}
});
