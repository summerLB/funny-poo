import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './lib/perfectScrollbar.js';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css';

Vue.config.productionTip = false;

// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference
Vue.prototype.UIkit = UIkit;


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');