import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingCart, faAngleDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
/*
new Vue({
  el: '#product',
  data: {
      json: null
  },

  created: function () {
    fetch("../assets/productData.json")
      .then(r => r.json())
      .then(json => {
        this.json=json;
      });
  }
});


import data from '../src/assets/productData.json'

new Vue({
  el: '#product',
  data: function () {
    return {
        data        
    }
  }
}).$mount('#product')
*/