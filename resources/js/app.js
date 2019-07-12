/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueCollapse from 'vue2-collapse'
Vue.use(VueCollapse)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('collapse-component', require('./components/Collapse.vue').default);

const app = new Vue({
    el: '#app',
});
