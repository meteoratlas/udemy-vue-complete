new Vue({
    el: "#app",
    data: {
        playerHP: 100,
        playerAttackPower: 9,
        playerSpecialPower: 16,
        playerHealPower: 8,
        monsterHP: 100,
        monsterAttackPower: 8,
        messages: [],
        pHPStyle: {
            backgroundColor: "green",
            margin: 0,
            color: "white",
            width: this.playerHP + "%"
        },
        mHPStyle: {}
    },
    methods: {
        playerAttack: function(power) {
            if (this.playerHP <= 0 || this.monsterHP <= 0) return;
            const attack = Math.max(Math.floor(Math.random() * power), 3);
            this.monsterHP -= attack;
            if (this.monsterHP <= 0) {
                this.messages.unshift(
                    `Player hit monster for ${attack}, defeating it! Monster was vanquished!`
                );
            } else {
                this.messages.unshift(`Player hit monster for ${attack}!`);
            }
            this.monsterAttack();
        },
        playerHeal: function() {
            if (this.monsterHP <= 0 || this.playerHP <= 0) return;
            this.playerHP += this.playerHealPower;
            if (this.playerHP > 100) this.playerHP = 100;
            this.messages.unshift(
                `Player healed themselves for ${this.playerHealPower}!`
            );
            this.monsterAttack();
        },
        monsterAttack: function() {
            if (this.monsterHP <= 0 || this.playerHP <= 0) return;
            const attack = Math.max(
                Math.floor(Math.random() * this.monsterAttackPower),
                3
            );
            this.playerHP -= attack;
            if (this.playerHP <= 0) {
                this.messages.unshift(
                    `Monster hit player for ${attack} - you are defeated!`
                );
            } else this.messages.unshift(`Monster hit player for ${attack}!`);
        },
        resetGame: function() {
            this.playerHP = 100;
            this.monsterHP = 100;
            this.messages = [];
        }
    },
    computed: {}
});
