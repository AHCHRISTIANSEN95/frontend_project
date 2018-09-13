<template>
    <div v-if="activetab === 1" class="tabcontent">
        
            <div v-for="product in products" :key="product.id" class="product-item" >
               <router-link :to="`/product/${product.id}`"> 
                <label for="price" class="product-item__price"><span>&#163;</span>{{product.price}}</label>
                    <img :src="product.productImage" :alt="product.productName" class="product-item__img">
                    <div class="product-item__thumbnail">
                            <img class="product-item__img--thumbnail" :src="product.productGallery[0]" alt="thumbnail back">
                            <img class="product-item__img--thumbnail" :src="product.productGallery[1]" alt="thumbnail front">
                        </div>
                       
                    <div class="product-item--hovered">
                        
                        <div class="product-item__content">
                            <h5>{{product.productName}}</h5>
                            <p>{{product.productText}}</p>
        
                        <div class="product-item__buttons">
                        <button class="product-item__button primary-r-btn"><a href="#"><i class="fas fa-shopping-cart"></i></a></button>
                        <button class="product-item__button primary-r-btn"><a href="#"><i class="far fa-heart"></i></a></button>
                        <button class="product-item__button primary-r-btn"><a href="#"><img height="25px" src="../assets/compare.svg.svg" alt=""></a></button>
                    </div>
                </div>
            </div>
             </router-link>
        </div>
    </div>
</template>

<script type="text/javascript">
import axios from "axios";

export default {
    data(){
    return {
        activetab: 1,
        products: null  
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get('/productData.json')
        .then(response => (this.products = response.data.products))
        .finally();
    }
  }
  }



</script>
