<template>
<section v-if="product" class="product">
        <div class="container">
            <div class="product__img-slider">


                    <div class="img-slider__item">
                        <img :src="product.productImage" :alt="product.productName" class="product__img">
                      <!--  <img :src="getCurrentImage.src" :alt="getCurrentImage.text" class="product__img">-->
                    </div>
              
                <!-- Next and previous buttons -->
                <button class="prev" ><i class="fa fa-angle-left"></i></button>
                <button class="next" ><i class="fa fa-angle-right"></i></button>
               

                <!-- imageslider
                <div class="img-slider__item">
                    <img src="../assets/desktop/item1.png" alt="" class="product__img">
                </div> 
                
                <div class="arrows">
                    <div class="icon arrow arrow-left"><i class="fa fa-angle-left"></i></div>
                    <div class="icon arrow arrow-right"><i class="fa fa-angle-right"></i></div>
                </div>  -->   
            </div>
            <div class="product__info">
                <h2>{{product.productName}}</h2>
                <div class="product__review">
                    <div class="product__review__stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <a href="#"><strong>3</strong> Review(s)</a>|<a class="" href="#">Add a review</a>|<p> Share: </p>
                    <ul class="some-icons">
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                        <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="far fa-envelope"></i></a></li>
                    </ul>   
                </div>
                <div class="product__price">
                    <p class="product__price--old"><span>&#163;</span>{{product.oldPrice}}</p>
                    <p class="product__price--new"><span>&#163;</span>{{product.price}}</p>
                </div>
                <div class="product__details">
                    <span><strong>Availablity:</strong>{{product.quantity}}</span>
                    <span><strong>Product code:</strong>#{{product.productCode}}</span>
                    <span>
                        <strong>Tags:</strong>
                        <a href="#" class="tags">{{product.categories[0]}}</a>,
                        <a href="#" class="tags">{{product.categories[1]}}</a>,
                        <a href="#" class="tags">{{product.categories[2]}}</a>
                    </span>
                </div>
                <div class="product__description">
                    <p>{{product.productText}}</p>
                    <br>
                    <li>{{product.fit}}</li>
                    <br>
                    <li>{{product.material}}</li>
                    <br>
                    <li>{{product.delivery}}</li>
                    <br>
                    <li>{{product.other}}</li>
                    
                </div>
                <div class="product__select">
                    <div class="select__field">
                        <label for="">COLOUR</label>
                        <select name="color" id="">
                            <option selected disabled value="0">Select Color</option>
                            <option value="">{{product.colors[0]}}</option>
                            <option value="">{{product.categories[1]}}</option>
                            <option value="">{{product.categories[2]}}</option>
                            <option value="">{{product.categories[3]}}</option>
                            <option value="">{{product.categories[4]}}</option>
                        </select>
                    </div>
                    <div class="select__field">
                        <label for="">SIZE</label>
                        <select name="size" id="">
                            <option selected disabled value="0">Select Size</option>
                            <option value="">{{product.size[0]}}</option>
                            <option value="">{{product.size[1]}}</option>
                            <option value="">{{product.size[2]}}</option>
                            <option value="">{{product.size[3]}}</option>
                            <option value="">{{product.size[4]}}</option>
                        </select>
                    </div>
                    
                    <div class="select__field">
                        <label for="qty" class="">Qty</label>
                        <div class="counter">
                            <p><!--{{ counter < 0 ? 0 : counter }}-->0</p>
                            <div class="counter-buttons" >
                                <button v-on:click.prevent="counter += 1" name="button"><i class="fas fa-chevron-up"></i></button>
                                <button v-on:click.prevent="distract(counter)" name="button"><i class="fas fa-chevron-down"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product__add">
                        <button class="btn__cart"><i class="fas fa-shopping-cart"></i> ADD TO CART</button>
                        <button class="btn__save"><i class="far fa-heart"></i> ADD TO COLLECTION</button>
                       <a href=""><div class="btn__compare" ><img height="25px" src="../assets/compare.svg.svg" alt=""></div> ADD TO COMPARE</a>
                </div>
            </div>
            <div class="product__subdata">
                <div id="tabs" class="product__filter-tabs">
                    <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]" class="filter-tabs__link">DESCRIPTION</a>
                    <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]" class="filter-tabs__link">VIDEO</a>
                    <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]" class="filter-tabs__link">SIZE & SPECS</a>
                    <a v-on:click="activetab=4" v-bind:class="[ activetab === 4 ? 'active' : '' ]" class="filter-tabs__link">DELEVERY & RETURNS</a>
                    <a v-on:click="activetab=5" v-bind:class="[ activetab === 5 ? 'active' : '' ]" class="filter-tabs__link">REVIEWS</a>
                </div>
                <div class="product__subdata-content">
                    <div v-if="activetab === 1" class="product__tabs-category">
                        <h4>{{product.productName}}</h4>
                        <p>{{product.description}}</p>
                    </div>
                    <div v-if="activetab === 2" class="product__tabs-category">
                        <h4>Here goes the product video</h4>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </section> 
</template>
<script>
import axios from "axios";

export default {
  name:'productitem',
    data() {
        return {
            activetab:1,
            product: null
    };
},

mounted(){
    this.getProductById();
},

methods:{
    getProductById(){
        let productId = this.$route.params.id;

        axios

        .get("/productData.json")
        .then(response => {
        this.product = response.data.products.find(p => p.id === productId);
        console.log(this.product);
        })
        .catch(error => console.log(error));
    }
},
} ;

</script>
