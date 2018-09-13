<template>
<div id="test" class="test">
<ProductItemtest  v-for="product in products" :key="product.id" :price="product.price" :description="product.description"  :name="product.productName" :img="product.productImage" :thumb1="product.productGallery[0]" :thumb2="product.productGallery[1]" ></ProductItemtest>

</div>
        

</template>
<script>
import ProductItemtest from '@/components/ProductItemtest.vue'



import axios from "axios";

export default {
    name: "test",
    components: {
        ProductItemtest
    },
        data() {
        return {
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

