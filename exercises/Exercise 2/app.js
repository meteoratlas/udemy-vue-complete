new Vue({
    el: "#exercise",
    data: {
        value: "test"
    },
    methods: {
        raiseAlert: str => {
            alert(str);
        },
        // arrow functions don't work here (because of how they hand 'this', probably)
        storeKey: function(event) {
            this.value = event.target.value;
        }
    }
});
