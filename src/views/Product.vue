<template>
    <section class="product">
        <div class="container">
            <div class="product__img-slider">
                <div class="img-slider__item">
                    <img src="../assets/desktop/item1.png" alt="" class="product__img">
                </div> 
                <!-- Next and previous buttons -->
                <div class="arrows">
                    <div class="icon arrow arrow-left"><i class="fa fa-angle-left"></i></div>
                    <div class="icon arrow arrow-right"><i class="fa fa-angle-right"></i></div>
                </div>     
            </div>
            <div class="product__info">
                <h2>PRODUCTNAME</h2>
                <div class="product__review">
                    <div class="product__review__stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <p><strong>3</strong> Review(s) |</p>
                        <a class="" href="#">Add a review</a>
                    <p>| Share: </p>
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
                    <div class="product__price--old">107</div>
                    <div class="product__price--new">89,99</div>
                </div>
                <div class="product__details">
                    <p><strong>Availablity:</strong>In stock</p>
                    <p><strong>Product code:</strong>#45768</p>
                    <p>
                        <strong>Tags:</strong>
                        <a href="#" class="tags">Classic</a>,
                        <a href="#" class="tags">Casual</a>,
                        <a href="#" class="tags">V-Neck</a>
                    </p>
                </div>
                <div class="product__description">
                    <p>
                    Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh 
                    suspendisse est congue metus nunc, id viverra elit loreti rhoncus 
                    quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.
                    •  Elasticated cuffs
                    •  Casual fit
                    •  100% Cotton
                    •  Free shipping with 4 days delivery
                    </p>
                </div>
                <div class="product__select">
                    <div class="select__color">
                        <label for="">COLOUR</label>
                        <select name="color" id="">
                            <option selected disabled value="0">Select Color</option>
                            <option value="">Red</option>
                            <option value="">Blue</option>
                            <option value="">Black</option>
                            <option value="">Green</option>
                            <option value="">Purple</option>
                        </select>
                    </div>
                    <div class="select__size">
                        <label for="">SIZE</label>
                        <select name="size" id="">
                            <option selected disabled value="0">Select Size</option>
                            <option value="">XS</option>
                            <option value="">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XL</option>
                        </select>
                    </div>
                    <label for="qty" class="">Qty</label>
                    <div class="select__qty">
                        <p><!--{{ counter < 0 ? 0 : counter }}-->0</p>
                        <div>
                            <button v-on:click.prevent="counter += 1" name="button"><i class="fas fa-chevron-up"></i></button>
                            <button v-on:click.prevent="distract(counter)" name="button"><i class="fas fa-chevron-down"></i></button>
                        </div>
                    </div>
                    <div class="product__add">
                        <button class="btn bg-cyan"><i class="fas fa-shopping-cart"></i> ADD TO CART</button>
                        <button class="btn btn-border ml-2"><i class="far fa-heart"></i> ADD TO COLLECTION</button>
                        <a href="#"><i class="far fa-compress-alt"></i>ADD TO COMPARE</a>
                    </div>
                </div>
            </div>
            <div class="product__subdata">
                <div id="tabs" class="filter-tabs">
                    <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]" class="filter-tabs__link">DESCRIPTION</a>
                    <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]" class="filter-tabs__link">VIDEO</a>
                    <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]" class="filter-tabs__link">SIZE & SPECS</a>
                    <a v-on:click="activetab=4" v-bind:class="[ activetab === 4 ? 'active' : '' ]" class="filter-tabs__link">DELEVERY & RETURNS</a>
                    <a v-on:click="activetab=5" v-bind:class="[ activetab === 5 ? 'active' : '' ]" class="filter-tabs__link">REVIEWS</a>
                </div>
                <div class="content">
                    <div v-if="activetab === 1" class="product__tabs-category">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore blanditiis non consequuntur. Qui obcaecati earum, perferendis facilis perspiciatis ab natus iusto accusantium explicabo dolores incidunt ad non exercitationem vitae. Maiores!
                        Fugit, minima voluptatibus omnis mollitia possimus libero ipsam sunt quo nemo accusantium voluptatum natus aspernatur explicabo eum dolores sed facere eos repellat est repellendus id. Nobis corrupti rerum praesentium ipsam.
                        Laudantium esse, quod, eaque et nisi distinctio soluta quaerat doloribus nam, tempore possimus. Aliquam nisi quidem neque nam suscipit minima repellendus atque soluta, quia incidunt aperiam, dignissimos non quaerat error.
                        Quaerat error eius, corporis totam ut expedita facere, maiores consequatur quis veniam unde quibusdam quisquam aliquid dolor! Voluptatum porro, iste temporibus possimus corporis ex nulla esse, beatae nemo deserunt modi.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'product',
  
  data(){
    return {
      activetab:1
    };
  }
}
</script>

