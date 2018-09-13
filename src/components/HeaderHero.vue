
<template>
    <section class="header-hero">
        <img src="../assets/desktop/hero_brand_page.jpg" alt="" class="header-hero__image">
        <div class="overlay">
        <h1 class="header-hero__title">{{title}}</h1>
        <h4 class="header-hero__subtitle">{{subtitle}} </h4>
        </div>
        
    </section>
</template>

<script>
export default {
    name: 'HeroSection',
    props: ['title', 'subtitle', 'img'],
    
}
</script>

