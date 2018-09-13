
<template>
    <div class="productpage-content">
        <HeaderHero title="Product view" subtitle="Mens - Casuals - Hoodies &amp; Sweathshirts - Ave classic sweatshirt"></HeaderHero>
        <ProductView></ProductView>
    </div>
</template>

<script>
import HeaderHero from '@/components/HeaderHero.vue'
import ProductView from '@/components/ProductView.vue'



export default {
    name: 'product',
    components: {
        HeaderHero, 
        ProductView
    
  }
  }
</script>


