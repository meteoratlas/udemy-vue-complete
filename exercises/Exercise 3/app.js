new Vue({
    el: "#exercise",
    data: {
        value: 0
    },
    computed: {
        result: function() {
            return this.value === 37 ? "Done" : "Not there yet";
        }
    },
    watch: {
        value: function() {
            let vm = this;
            setInterval(function() {
                vm.value = 0;
            }, 5000);
        }
    }
});
