<template>
    <div class="navigation">
        <div class="top-banner-container">
            <div class="top-banner">
                <div class="currency-dropdown">
                    <p>Currency:</p>
                    <select name="" id=""> 
                        <option class="currency-dropdown__item"> GBP </option>
                        <option class="currency-dropdown__item"> SEK </option>
                        <option class="currency-dropdown__item"> DKK </option>
                        <option class="currency-dropdown__item"> EUR </option>
                    </select>
                </div>
                <div class="user-option">
                    <router-link to="/register"><a href="#" class="user-option__register banner-btn">Register</a></router-link>
                    <router-link to="/register"><a href="#" class="user-option__login banner-btn">Sign In</a></router-link>
                </div>
                <div class="basket-button">        
                    <button href="#" class="basket-button__basketinfo banner-btn">
                        <span class="basket-button__valueinfo"><i class="fas fa-shopping-cart"></i>Empty</span>
                    </button>
                    <div class="basket-button__hovered">

                    </div>

                
                </div>
            
            </div>
        </div>
        <nav id="navigation" class="navbar">
            
                <div class="navbar-brand">
                    <router-link to="/"><img src="../assets/desktop/logo.png" alt="brand logo" class="brand-logo"></router-link>
                </div>
                <div class="navbar-menu">
                    <ul class="navbar-menu__items">
                        <li class="navbar-menu__items__links">
                            <a href=""><i class="fas fa-angle-down"></i><router-link to="#">Mens</router-link></a>
                            <div class="menu-dropdown">
                              <div class="menu-dropdown__casual">
                                    <strong>CASUAL</strong>
                                    <ul class="menu-dropdown__items">
                                        <li class="menu-dropdown__items__links"><a href="#">Jackets</a></li>
                                        <li class="menu-dropdown__items__links"><a href="#">Hoodies &amp; Sweatshirts</a></li>
                                        <li class="menu-dropdown__items__links"><a href="#">Sportswear</a></li>
                                        <li class="menu-dropdown__items__links"><a href="#">T-Shirts</a></li>
                                        <li class="menu-dropdown__items__links"><a href="#">Tops</a></li>
                                    </ul> 
                                </div>
                                <div class="menu-dropdown__formal">
                                    <strong>FORMAL</strong>
                                    <ul class="menu-dropdown__items">
                                        <li class="menu-dropdown__items__links"><a href="#">Jackets</a></li>
                                        <li class="menu-dropdown__items__links"><a href="#">Shirts</a></li>
                                        <li class="menu-dropdown__items__links"><a href="#">Dresses</a></li>
                                        <li class="menu-dropdown__items__links"><a href="#">Accesories</a></li>
                                        <li class="menu-dropdown__items__links"><a href="#">Shoes</a></li>
                                    </ul>
                                </div>
                                <div class="promotion">
                                    <strong class="promotion__heading">Autumn sale! <br> Up to 50% off</strong>
                                </div>                          
                            </div>
                        </li>
                        <li class="navbar-menu__items__links">
                            <a href=""><i class="fas fa-angle-down"></i><router-link to="#">Womens</router-link></a>
                            <div class="menu-dropdown">
                                <div class="menu-dropdown__casual">
                                    <strong>CASUAL</strong>
                                    <ul class="menu-dropdown__items">
                                        <li class="menu-dropdown__items__links"><a href="#">Jackets</a></li>
                                        <li class="menu-dropdown__items__links"><a href="#">Hoodies &amp; Sweatshirts</a></li>
                                        <li class="menu-dropdown__items__links"><a href="#">Sportswear</a></li>
                                        <li class="menu-dropdown__items__links"><a href="#">T-Shirts</a></li>
                                        <li class="menu-dropdown__items__links"><a href="#">Tops</a></li>
                                    </ul> 
                                </div>
                                <div class="menu-dropdown__formal">
                                    <strong>FORMAL</strong>
                                    <ul class="menu-dropdown__items">
                                        <li class="menu-dropdown__items__links"><a href="#">Jackets</a></li>
                                        <li class="menu-dropdown__items__links"><a href="#">Shirts</a></li>
                                        <li class="menu-dropdown__items__links"><a href="#">Dresses</a></li>
                                        <li class="menu-dropdown__items__links"><a href="#">Accesories</a></li>
                                        <li class="menu-dropdown__items__links"><a href="#">Shoes</a></li>
                                    </ul>
                                </div>
                                <div class="promotion">
                                    <strong class="promotion__heading">Autumn sale!<br> Up to 50% off</strong>
                                </div>                             
                            </div>    
                        </li>
                        <li class="navbar-menu__items__links">
                            <a href=""><router-link to="/about">The Brand</router-link></a>
                        </li>
                        <li class="navbar-menu__items__links">
                            <a href=""><i class="fas fa-angle-down"></i><router-link to="#">Local stores</router-link></a>
                        </li>
                        <li class="navbar-menu__items__links">
                            <a href=""><i class="fas fa-angle-down"></i><router-link to="#">Look book</router-link></a>
                        </li>
                    </ul>
                </div> 
                <div class="search-bar">
                    <form class="search-bar__form" action="search" method="get">
                        <input id="search-product" type="search" name="search-product" value="" placeholder="Search" aria-label="Search" autocomplete="off" spellcheck="false">
                        <i class="fas fa-search"></i>
                    </form>
                </div>
                <button class="hamburger" v-on:click="openMenu">
                    <i class="fas fa-bars hamburger"></i>
                </button>
            
        </nav>
    </div>
</template>

<style lang="scss">

</style>
<script>
export default {
  name: "NavigationMenu",
  methods: {
      openMenu: function() {
          var menu = document.getElementById("navigation");
     if (menu.className === "navbar") {
        menu.className += " responsive";
    } else {
        menu.className = "navbar";
    }
  }
}
}
</script>
