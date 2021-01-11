require('./bootstrap');

import Vue from "vue"
import App from "./vue/app.Vue"

const app = new Vue({
    el: "#app",
    components: { App }
});