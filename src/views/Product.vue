
<template>
    <div class="productpage-content">
        <HeaderHero title="Product view" subtitle="Mens - Casuals - Hoodies &amp; Sweathshirts - Ave classic sweatshirt"></HeaderHero>
        <ProductView v-for="product in products" :key="product.id" v-on:click="updateSelected(product)" :price="product.price" :oldPrice="product.oldPrice" :producttext="product.productText" :description="product.description" :name="product.productName" :img="product.productImage" :fit="product.fit" :delivery="product.delivery" :material="product.material"></ProductView>  
    </div>
</template>

<script>
import HeaderHero from '@/components/HeaderHero.vue'
import ProductView from '@/components/ProductView.vue';

import axios from "axios";

export default {
    name: 'product',
    components: {
        HeaderHero, ProductView
    
  },
  data(){
    return {
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
    }
  }
  }
</script>


