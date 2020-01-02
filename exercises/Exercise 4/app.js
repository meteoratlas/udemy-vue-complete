new Vue({
    el: "#exercise",
    data: {
        swap: "highlight",
        rounded: "rounded",
        green: "green",
        userClass: "shrink",
        userClass2: "green",
        useBoolClass: false,
        userStyle: "",
        curProgress: 0
    },
    methods: {
        startEffect: function() {
            let v = this;
            setInterval(function() {
                v.swap = v.swap === "highlight" ? "shrink" : "highlight";
            }, 1000);
        },
        startProgress: function() {
            this.curProgress = 0;
            let v = this;
            let interval = setInterval(() => {
                v.curProgress++;
                if (v.curProgress >= 100) {
                    clearInterval(interval);
                }
            }, 25);
        }
    },
    computed: {
        boolClass: function() {
            return this.useBoolClass === "true" ? "bool" : "";
        },
        progBar: function() {
            return {
                width: this.curProgress * 2,
                height: "50px",
                backgroundColor: "red"
            };
        }
    }
});
