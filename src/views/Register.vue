<template>
     <div class="sign-up padding-b-60">
        <HeaderHero> </HeaderHero>
         <section class="sign-up__container">
             <form class="signin" action="/signin" method="post" @submit="checkForm">

               <h4 class="signin__title">Sign in</h4>
            
               <p v-if="errors.length">
                 Correct error(s)
                 <ul>
                   <li v-for="error in errors" :key="error">{{error}}</li>
                 </ul>
               </p>
               <input id="email" v-model="semail"  name="email"  required="required" class="signin__email" placeholder="Your email..." type="email">
                <input id="password" v-model="spassword" name="password" required="required" class="signin__password" placeholder="Your password..." type="password">
                <button value="Submit" type="submit" class="signin__button primary-btn">Sign in</button>
               
                <span class="signin__forgot">
                    <a href="#">Forgot your password<i class="fas fa-long-arrow-alt-right"></i></a> 
                </span>
              </form> 
                  
            <form class="register" action="/register" method="post" @submit="checkFormRegisteration">
                <h4 class="register__title">Register</h4>
                  
               <p v-if="rerrors.length">
                 Correct error(s)
                 <ul>
                   <li v-for="rerror in rerrors" :key="rerror">{{rerror}}</li>
                 </ul>
               </p>
                <input v-model="remail"   name="email"  required="required" class="register__email" type="email" placeholder="Your Email..">
                <input v-model="rpassword"  name="password"  required="required"   type="password" placeholder="Your password..">
                <input v-model="cpassword"  name="password"  required="required"   type="password" placeholder="Confirm password..">
                <span class="register__account"><input class="register__checkbox" type="checkbox"> 
                    <p class="register__checkboxtext">Sign up for exclusive updates, discounts, new arrivals, contests, and more!</p>
                </span>
                
                <button  value="Submit" type="submit" class="register__button primary-btn">Create account</button>
               
                <span class="register__agree"> <p> By clicking ‘Create Account’, you agree to our <a href="#">Pricay Policy<i class="fas fa-long-arrow-alt-right"></i></a></p>
                    
                </span>
            </form>
         </section>
    </div>
</template>

<script>
import HeaderHero from "../components/HeaderHero";

export default {
    name: 'register',
    components: 
    HeaderHero,

    data() {
        return{ errors:[], semail: null, spassword: null, rerrors:[], remail: null, rpassword: null, cpassword: null
        }
    },
    methods: {
        checkForm: function(e) {
        if(this.semail && this.spassword) return true;
            this.errors = [];
                if (!this.semail) this.errors.push("Your Email is required");
                if (!this.spassword) this.errors.push("Your password is required");
                e.preventDefault();
        },
        checkFormRegisteration: function(e){
        if(this.remail && this.rpassword && this.cpassword) return true;
            this.rerrors = [];
                if (!this.remail) this.rerrors.push("Your Email is required");
                if (!this.rpassword) this.rerrors.push("Password is required");
                if (!this.cpassword) this.rerrors.push("Password is required");
                e.preventDefault();
        }
    }
};
</script>


