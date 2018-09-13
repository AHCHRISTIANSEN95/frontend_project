<template>
  <div class="about-page">
    <!-- HEADER HERO SECTION START -->
    <HeaderHero title="About Avenue fashion" subtitle="Fashion For true Fashionists"></HeaderHero>
    <!-- HEADER HERO SECTION END -->
    <div class="brand-container">
      <section class="brand">
        <img class="brand__img-top" src="../assets/desktop/designer_brand_page.jpg" alt="">
        <div class="brand__content-top">
          <h4>Hand designed clothing</h4>
          <h6>established in 2013, avenue fashion Sed dictum elit vel sapien luctus eras</h6>
          <p>Praesent feugiat malesuada tristique maecenas rhoncus diam eget quam 
            vestibulim consectetur, id condimentum leo porttitor. Cum sociis natoque 
            penatibus eta magnis disut parturient montes, nascetur ridiculus mus. 
            Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh 
            suspendisse congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. 
            Donec pulvinar tempor lorem a pretium justo interdum.</p>
        </div>

        <img class="brand__img-right" src="../assets/desktop/trading_brand_page.jpg" alt="">
        <img class="brand__img-left" src="../assets/desktop/values_brand_page.jpg" alt="">
        <div class="brand__content-right">
          <h4>Ethical trading</h4>
          <h6>ewe oversee the working conditions of the people in the supply chain</h6>
          <p>Nullam dapibus consectetur neque, faucibus porttitor purus iaculis sed. Aenean eras 
            dapibus augue, eget dignissim dui maecenas et rhoncus mim, vel semper arcu lorem
            Pellentesque congue justo esteir pellentesque aliquet massa eget posuere tincidunt. 
            Cras viverra ullamcorper nunc accumsan hendrerit. 
          </p>
        </div>

        <div class="brand__content-left">
          <h4>Our values, vision and strategy</h4>
          <h6>The above image would be a great place for an advertising video</h6>
          <p>Cras maximus venenatis malesuada. Nulla sagittis elit felis, ac facilisis quam ornare aliquam. Etiam cursus odio vitae dui dignissim, 
            sed tempus lacus tincidunt et donec sapien velit, rhoncus eu nulla a, molestie tempus mi maecenas sagittis ornare.
            Pellentesque sapien mi, tincidunt nec magna vitae, volutpat elementum odioni lorem Aliquam tempor massa vitae augue mattis tempor id 
            in ante ut augue erat, luctus eil..
          </p>
        </div>
        
        <div class="brand__awards">
          <img class="brand__award" src="../assets/desktop/award.png" alt="">
          <img class="brand__award" src="../assets/desktop/award2.png" alt="">
          <img class="brand__award" src="../assets/desktop/award3.png" alt="">
        </div>

      </section>
    </div>
  </div>      
</template>

<script>
import HeaderHero from "@/components/HeaderHero.vue";

export default {
  name: "about",
  components: {
    HeaderHero
  }
};
</script>