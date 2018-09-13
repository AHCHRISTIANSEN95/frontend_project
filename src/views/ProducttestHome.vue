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
        <div v-for="product in products" :key="product.id" v-if="activetab === 1" class="tabcontent">
            <ProductItemtest :price="product.price" :description="product.description"  :name="product.productName" :img="product.productImage" :thumb1="product.productGallery[0]" :thumb2="product.productGallery[1]" ></ProductItemtest>
       </div>
      </div>        
      
    </main>
    <!-- MAIN SECTION END -->
    <LookBook/> <!-- LOOK BOOK SECTION IMPLMENTED -->
</div>     

</template>
<script>
import ProductItemtest from '@/components/ProductItemtest.vue'
import LookBook from '@/components/LookBookSection.vue'

import axios from "axios";

export default {
    name: "home",
    components: {
        ProductItemtest, LookBook
    },
        data() {
        return {
            activetab:1,
            products: null 

        }
    },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get('productData.json')
        .then(response => (this.products = response.data));
    }
  }
  }

</script>

