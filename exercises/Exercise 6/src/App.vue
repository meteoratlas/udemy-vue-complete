<template>
    <div class="container">
        <app-header></app-header>
        <hr />
        <div class="row">
            <app-server-info></app-server-info>
            <div class="col-xs-12 col-sm-6">
                <p>Server Details are currently not updated</p>
            </div>
        </div>
        <hr />
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import ServerInfo from "./ServerInfo.vue";

export default {
    components: {
        "app-header": Header,
        "app-server-info": ServerInfo,
        "app-footer": Footer
    }
};
</script>

<style></style>
