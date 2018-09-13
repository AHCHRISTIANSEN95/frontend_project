<template>
  <div class="home">
    <!-- HEADER HERO SECTION START -->
    <header class="header-hero-home">
      <div class="header-hero-home__text">
        <span>A  V  E</span>
      </div>
      <img src="../assets/desktop/hero.png" alt="" class="header-hero__image">
      <button class="header-hero-home__button primary-btn">SHOP MEN's COLLECTION</button>
    </header>
    <!-- HEADER HERO SECTION END -->

    
    
    <!-- MAIN SECTION START -->
    <main class="main-container padding-b-60">
      
      <div class="main-grid">
         <hr>
          <div id="tabs" class="filter-tabs">
            <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]" class="filter-tabs__link">POPULAR</a>
            <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]" class="filter-tabs__link">NEW ARRIVALS</a>
            <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]" class="filter-tabs__link">BEST SELLERS</a>
            <a v-on:click="activetab=4" v-bind:class="[ activetab === 4 ? 'active' : '' ]" class="filter-tabs__link">SPECIAL OFFERS</a>
            <a v-on:click="activetab=5" v-bind:class="[ activetab === 5 ? 'active' : '' ]" class="filter-tabs__link">COMIN SOON</a>
          </div>
      </div>
        
      <div class="content">
        <div v-if="activetab === 1" class="tabcontent">
            <ProductItem v-for="product in products" :key="product.id" v-on:click="updateSelected(product)" :price="product.price" :producttext="product.productText"  :name="product.productName" :img="product.productImage" :thumb1="product.productGallery[0]" :thumb2="product.productGallery[1]" ></ProductItem>
        </div>
      </div>        
      
    </main>
    <!-- MAIN SECTION END -->
    <LookBook/> <!-- LOOK BOOK SECTION IMPLMENTED -->
  </div>
</template>


<!-- STYLE FOR HOME.VUE -->
<style lang="scss" scoped>


</style>

<!-- SCRIPT FOR HOME.VUE -->
<script>
// @ is an alias to /src
import LookBook from '@/components/LookBookSection.vue'
import ProductItem from '@/components/ProductItem.vue'

import axios from "axios";

export default {
  name: 'home',
  
  components: {
    LookBook, ProductItem
  },
  data(){
    return {
      showProducts: false,
      selectedProduct: {},
      activetab:1,
      products: null  
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get('productData.json')
        .then(response => (this.products = response.data));
    },
    updateSelected (selectedItem) {
        this.selectedProduct = selectedItem;
        this.showProducts = true;
     }
  }
  }

</script>
