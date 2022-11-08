<template>
  <v-app>
    <v-main>
      <v-navigation-drawer temporary v-model="sidebar" app 
        :class="{'nav-drawer-width-lg': $vuetify.breakpoint. smAndUp, 'nav-drawer-width-sm':$vuetify.breakpoint. xs }">
        <div class="d-flex justify-end pr-2 pt-2">
          <v-btn @click="sidebar = false" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <!-- <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="@/assets/images/me.jpg">
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Jeremy Poh
              </v-list-item-title>
              <v-list-item-subtitle class="title">jeremypoh0205@gmail.com</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-divider></v-divider> -->
        <br>

        <v-list nav>
          <div @click="open(index)" v-for="(navLink, index) in navLinks" :key="index.title" color="primary">
            <!--if the nav does not have sub menu, use v-list-item-->
            <v-list-item link
              v-if="!navLink.subLinks" class="nav-drawer-link">
              <v-list-item-icon>
                <!-- :to="navLink.path" -->
                <v-icon :style="'color:' + color.primary_color" v-text="navLink.icon"></v-icon>
                <!-- <v-icon> {{navLink.icon }}</v-icon> -->
              </v-list-item-icon>
              <v-list-item-content> 
                <v-list-item-title :style="'color:' + color.primary_color">{{ navLink.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!--else, use v-list-group to group the submenu-->
            <v-list-group class="nav-drawer-group-link"
              v-else :key="index.title" no-action :value="false">
            <template v-slot:activator>
              <v-list-item-icon>
                <!-- :to="navLink.path" -->
                <v-icon :style="'color:' + color.primary_color" v-text="navLink.icon"></v-icon>
                <!-- <v-icon> {{navLink.icon }}</v-icon> -->
              </v-list-item-icon>
              <v-list-item-content> 
                <v-list-item-title :style="'color:' + color.primary_color">{{ navLink.title }}</v-list-item-title>
              </v-list-item-content>
             </template>
             <v-list-item link
              v-for="(cat, i) in category" :key="i">
              <v-list-item-content> 
                <v-list-item-title :style="'color:' + color.second_color">{{ cat.name }}</v-list-item-title>
              </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </div>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="#ECEFF1" height="80px" hide-on-scroll> 
       <!-- :src="require('~/assets/bg.png')">  -->
       <!-- "https://picsum.photos/1920/1080?random" -->
       <!-- <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(189, 195, 199,.5), rgba(44, 62, 80,.8)"
        ></v-img>
       </template> -->
       <span class="">
         <v-app-bar-nav-icon class="" @click="sidebar = !sidebar"> 
           <v-icon size="35">mdi-menu</v-icon> 
         </v-app-bar-nav-icon>
       </span>
       <router-link to="/secondpage" custom v-slot="{navigate}" style="cursor: pointer">
          <v-img v-if="!mobileNav" class="ml-6" @click="navigate" role="link" :src="require('~/assets/images/emenu-logo.jpg')"
            max-height="120" max-width="120" contain>
          </v-img> 
       </router-link>
 
       <v-spacer></v-spacer>
       <v-toolbar-title class="">
         <router-link to="/secondpage" custom v-slot="{navigate}" style="cursor: pointer">
           <div class="d-flex align-center ">
             <v-img v-if="mobileNav" class="mx-2" @click="navigate" role="link" :src="require('~/assets/images/emenu-logo.jpg')"
               max-height="120" max-width="120" contain>
             </v-img> 
             <!-- {{appTitle}} -->
          </div>
         </router-link>
       </v-toolbar-title>
       <v-spacer></v-spacer>
       <v-btn class="hidden-sm-and-up" color="transparent" style="border:2px solid white !important">
         REGISTER
       </v-btn>
       
       <v-toolbar-items class="hidden-lg-and-down">
         <v-btn id="no-background-hover"
           text
           v-for="(navLink,index) in navLinks"
           :key="index.title"
           :to="navLink.path">
           <!-- <v-icon left dark>{{ navLink.icon }}</v-icon> -->
           {{ navLink.title }}
         </v-btn>
       </v-toolbar-items>
 
       <v-menu offset-y>
         <template v-slot:activator="{ on, attrs }">
           <v-btn class="hidden-xs-only" color="transparent" v-bind="attrs" v-on="on">
               Languages
             <v-icon>mdi-menu-down</v-icon>
           </v-btn>
         </template>
         <v-list>
           <v-list-item link
             v-for="(item, index) in itemsLanguage"
             :key="index">
             <v-list-item-title v-text="item.title"></v-list-item-title>
           </v-list-item>
         </v-list>
       </v-menu>
      </v-app-bar>

  <!-------------------- Dialog Box(when user account button has been clicked) ------------------------->
<v-dialog v-model="account_dialog" transition="dialog-top-transition" persistent max-width="420px" min-width="360px">
  <template v-slot:activator="{ on, attrs }">
    <v-btn class="my-4"
      color="primary"
      v-bind="attrs"
      v-on="on">
      REGISTER
    </v-btn>
  </template>
  
  <template v-slot:default="dialog">
    <div class="d-flex justify-end white">
       <v-btn @click="dialog.value = false" icon >
         <v-icon>
           mdi-close-circle
         </v-icon>
       </v-btn>
    </div>
    <!--Login Form-->
    <v-tabs v-model="tab" show-arrows >
      <v-tabs-slider color="#007FFF"></v-tabs-slider>
        <v-tab style="width:100%; background-color:#42A5F5;" v-if="tab==0" >
          <div class="d-flex flex-column title py-1 white--text">Login
            <v-icon color="white">mdi-account-arrow-right</v-icon>
          </div>
        </v-tab>
        <v-tab style="width:100%; background-color: #F5F5F5;" v-if="tab==1" >
          <div class="d-flex flex-column title py-1" color="#78909C">Login
            <v-icon color="#78909C">mdi-account-arrow-right</v-icon>
          </div>
        </v-tab>
           <v-tab-item>
             <v-card >
                <v-card-text>
                  <v-form class="pa-6 caption" ref="loginForm">
                     <!-- <v-text-field outlined clearable
                       name="phoneNo"
                       label="Whatsapp Phone Number (+60)"
                       type="text" 
                       prepend-inner-icon="mdi-whatsapp"
                       required
                     ></v-text-field> -->

                     <vue-tel-input-vuetify
                        v-model="vueTelVuetifyLogin.phone" v-bind="vueTelVuetifyLogin.props">
                      </vue-tel-input-vuetify>

                     <v-text-field outlined 
                       name="password"
                       label="Password"
                       prepend-inner-icon="mdi-lock-outline" 
                       :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
                       :type="showPassword ? 'text' : 'password'"
                       hint="At least 8 characters"
                       @click:append="showPassword =! showPassword"
                       :rules="[rules.required, rules.passValidate]"
                     ></v-text-field>      

                     <div class="forgotPass">
                         <p class="body-2">Forget Password? <a href="#" class="text-decoration-none">Reset Now</a></p>
                     </div>                

                     <v-hover v-slot="{ hover }">
                       <v-btn  @click="login" class="btn-transi white--text" 
                           block elevation="2" large to="/" 
                           :style="{ 'background-color': hover ? '#01579B' : '#0091EA' }"> 
                           LOGIN
                       </v-btn>
                     </v-hover>
                     
                     <v-hover v-slot="{ hover }">
                       <v-btn class="btn-transi white--text mt-2" 
                           block elevation="2" large to="/" 
                           :style="{ 'background-color': hover ? '#EF6C00' : '#F57F17' }"> 
                           CONTINUE AS GUEST
                       </v-btn>
                     </v-hover>
                 </v-form>

                    <div class="d-flex justify-center caption">
                        <p class="body-2">Don't have an account? <a href="#" class="text-decoration-none" @click="tab=1">Register Now!</a></p>
                    </div>

               </v-card-text>
             </v-card>
           </v-tab-item>

       <!--Register Part-->     
       <v-tab style="width:100%; background-color:#42A5F5;" v-if="tab==1">
         <div class="d-flex flex-column title py-1 white--text">Register
           <v-icon color="white">mdi-account-plus</v-icon>
         </div>
       </v-tab>

       <v-tab style="width:100%; background-color: #F5F5F5;" v-if="tab==0">
         <div class="d-flex flex-column title py-1" color="#78909C">Register
           <v-icon color="#78909C">mdi-account-plus</v-icon>
         </div>   
       </v-tab>

       <v-tab-item>
        <v-card>
         <v-card-text>
            <v-form class="px-6 caption" ref="registerForm">
              <v-text-field v-model="name" outlined clearable name="username" label="Username"
                 type="text"
                 prepend-inner-icon="mdi-account-outline"
                 :rules="[v => !!v || 'Please enter your name']"
              ></v-text-field>        
               
              <v-text-field outlined clearable
                 name="email"
                 label="Email"
                 type="email" 
                 prepend-inner-icon="mdi-email-outline"
                 :rules="emailRules"
               ></v-text-field>
                
               <!-- <v-text-field outlined clearable
                name="phoneNo"
                label="Whatsapp Phone Number (+60)"
                type="password" 
                prepend-inner-icon="mdi-whatsapp"
                dense
                required
               ></v-text-field> -->
               <v-text-field outlined clearable
                 name="password"
                 label="Password"
                 type="password" 
                 prepend-inner-icon="mdi-lock-outline"
                 :rules="[v => !!v || 'Please enter your password']"
               ></v-text-field>

               <vue-tel-input-vuetify
                 v-model="vueTelVuetifyRegister.phone" v-bind="vueTelVuetifyRegister.props">
               </vue-tel-input-vuetify>
    
               <v-checkbox input-value="1" class="d-flex align-start" 
                 :rules="[v => !!v || 'Please ensure you read the condition!']"> 
                 <template v-slot:label>
                   <div >
                     By ticking, you are confirming that you have understood and agree with our
                     <v-tooltip bottom>
                       <template v-slot:activator="{ on }">
                         <a target="_blank" href="https://vuetifyjs.com" @click.stop v-on="on">
                           Terms & Conditions
                         </a>
                       </template>
                       Opens in new window
                     </v-tooltip>
                   </div>
                 </template>
              </v-checkbox>
             
              <v-hover v-slot="{ hover }">
                <v-btn @click="register" class="btn-transi white--text" 
                    block elevation="5" large to="/" 
                    :style="{ 'background-color': hover ? '#01579B' : '#0091EA' }"> 
                    REGISTER
                </v-btn>
              </v-hover>
           </v-form>
           <div class="d-flex justify-center caption pt-4">
               <p class="body-2">If you are our member, <a href="#" class="text-decoration-none" @click="tab=0">Login Now!</a></p>
           </div>
         </v-card-text>
       </v-card>
     </v-tab-item>
    </v-tabs>
  </template>
</v-dialog>

<!--dialog based on postcode-->
<v-dialog v-model="postcode_dialog" content-class="my-custom-dialog" transition="fab-transition" max-width="650">
    <template v-slot:default="dialog">
      <v-card class="pt-8 pb-4">
        <v-card-text class="shipping-dialog-box">
           <div class="shipping-title-wrap">
             <h1 class="shipping-title font-weight-bold" :class="{'font-size-headline': $vuetify.breakpoint. xs, 'font-size-display1': $vuetify.breakpoint. smAndUp}">
              SHIPPING DETAILS
             </h1>
           </div>
           <div class="dLogBoxInfo" :class="{'mt-4 text-center': $vuetify.breakpoint. xs, 'mt-8': $vuetify.breakpoint. smAndUp }">
            <h4 class="pb-2 font-weight-bold" :class="{'font-size-subtitle-1 text-center': $vuetify.breakpoint. xs }"> 
                  Delivery and Shipping Fee Calculation
            </h4>
             <div class="pt-1 px-2 font-size-para" :class="{'d-flex justify-center align-center': $vuetify.breakpoint. xs }"
                v-for="(postcode, i) in postcodes" :key="i">
                <ul :class="{'ml-2': $vuetify.breakpoint. smAndUp}">
                  <li style="list-style-type: disc;">  
                      <span :class="{'font-size-caption': $vuetify.breakpoint. xs }">
                         For postcode <strong>{{postcode.postcode_1}}</strong> to postcode <strong>{{postcode.postcode_2}}</strong>: 
                         Shipping fee is <strong>RM{{postcode.shipping_fee}}.</strong>
                      </span>
                        <div class="pt-2" v-for="(shippingCondition, i) in postcode.advanced_shipping_fee" :key="i.advanced_shipping_fee">
                          <div :class="{'d-flex align-start': $vuetify.breakpoint. xs, 'd-flex align-center': $vuetify.breakpoint. mdAndUp}">
                            <v-icon size="20" color="red">mdi-information</v-icon>
                            <span class="pl-1" :class="{'font-size-caption': $vuetify.breakpoint. xs }"> 
                              Amount spending between <strong>RM{{shippingCondition.total_fee_1}}</strong> - 
                              <strong>RM{{shippingCondition.total_fee_2}}</strong>, 
                              shipping fee would be <strong>RM{{shippingCondition.shipping_fee}}.</strong> 
                            </span>
                          </div>
                        </div>
                      <br>
                  </li>
                </ul>               
             </div>
          </div>
        </v-card-text>
        <v-card-actions class="d-flex justify-end white">
          <v-btn class="pl-4" :style="'background-color:' + color.primary_color" dark @click="dialog.value = false">Got It
            <v-icon left>
                mdi-check-circle
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>

  <!--based on distance-->
  <v-dialog v-model="distance_dialog" content-class="my-custom-dialog" transition="fab-transition" max-width="650">
    <template v-slot:activator="{ on, attrs }">
      <v-btn dark class="my-2"
        :style="'background-color:' + color.primary_color" v-bind="attrs" v-on="on"> Distance
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card class="pt-8 pb-4">
        <v-card-text class="shipping-dialog-box">
           <div class="shipping-title-wrap">
             <h1 class="shipping-title font-weight-bold" :class="{'font-size-headline': $vuetify.breakpoint. xs, 'font-size-display1': $vuetify.breakpoint. smAndUp}">
               SHIPPING DETAILS
             </h1>
           </div>
           <div class="dLogBoxInfo" :class="{'mt-4 text-center': $vuetify.breakpoint. xs, 'mt-8': $vuetify.breakpoint. smAndUp }">
               <h4 class="pb-2 font-weight-bold" :class="{'font-size-subtitle-1': $vuetify.breakpoint. xs }"> 
                  Delivery and Shipping Fee Calculation
               </h4>
             <div class="pt-1 px-2 font-size-para" :class="{'d-flex justify-center align-center': $vuetify.breakpoint. xs }"
               v-for="(distance, i) in distances" :key="i">
               <ul :class="{'ml-2': $vuetify.breakpoint. smAndUp}">
                  <li style="list-style-type: disc;">  
                      <span :class="{'font-size-caption': $vuetify.breakpoint. xs }">For distance <strong>{{distance.distance_1}}</strong>
                        km to distance <strong>{{distance.distance_2}} km</strong>: Shipping fee 
                        is <strong>RM{{distance.shipping_fee}}.</strong>
                      </span>
                        <div class="pt-2" v-for="(distanceCondition, i) in distance.advanced_shipping_fee" :key="i.advanced_shipping_fee">
                          <div :class="{'d-flex align-start': $vuetify.breakpoint. xs, 'd-flex align-center': $vuetify.breakpoint. mdAndUp}">
                            <v-icon class="pr-2" size="20" color="red">mdi-information</v-icon>
                            <span class="pl-1" :class="{'font-size-caption': $vuetify.breakpoint. xs }"> 
                              Amount spending between <strong>RM{{distanceCondition.total_fee_1}}</strong> 
                              - <strong>RM{{distanceCondition.total_fee_2}}</strong>: 
                              Shipping fee would be <strong>RM{{distanceCondition.shipping_fee}}.</strong> 
                            </span>
                          </div>
                        </div>
                      <br>
                  </li>
                </ul>               
             </div>
           </div>
        </v-card-text>
        <v-card-actions class="d-flex justify-end white">
          <v-btn class="pl-4" :style="'background-color:' + color.primary_color" dark @click="dialog.value = false">Got It
            <v-icon left>
                mdi-check-circle
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>

  <!--based on EasyParcel-->
 <v-dialog class="" content-class="my-custom-dialog" transition="fab-transition" max-width="650">
    <template v-slot:activator="{ on, attrs }">
      <v-btn dark class="my-2"
        :style="'background-color:' + color.primary_color" v-bind="attrs" v-on="on"> EasyParcel
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card class="pt-8 pb-4">
        <v-card-text class="shipping-dialog-box">
           <div class="shipping-title-wrap">
             <h1 class="shipping-title font-weight-bold" :class="{'font-size-headline': $vuetify.breakpoint. xs, 'font-size-display1': $vuetify.breakpoint. smAndUp}">
              SHIPPING DETAILS
             </h1>
           </div>
           <div class="mt-4 d-flex justify-center">
             <v-img :src="require('~/assets/images/easyparcel-logo.jpg')"
                max-height="120" max-width="160" contain>
             </v-img> 
           </div>
        
           <div class="dLogBoxInfo text-center" :class="{'mt-5': $vuetify.breakpoint. xs, 'mt-4': $vuetify.breakpoint. smAndUp }">
            <div class="px-4 pb-2">
               <h4 v-if=" order_min_purchase > 0" class="font-weight-bold pb-2"
                 :class="{'font-size-subtitle-1': $vuetify.breakpoint. xs, 'font-size-headline-2': $vuetify.breakpoint. smAndUp }"> 
                 * Minimum Spending: 
                  <span class="font-weight-regular red--text">RM{{order_min_purchase}}</span>
               </h4>
               <h4 class="font-weight-bold" :class="{'font-size-subtitle-1': $vuetify.breakpoint. xs }"> 
                  Delivery and Shipping Fee Calculation
               </h4>
               <h5 class="font-weight-regular red--text font-size-para">(Rate will depand on EasyParcel)</h5>
               <p class="pt-5 text-grey font-size-para">E.g. EasyParcel's free shipping is applied when purchasing more than <strong>RM{{easyparcel_free_shipping_range }}</strong>.</p>             
               <div class="justify-center font-size-para" :class="{'d-flex align-start': $vuetify.breakpoint. xs, 'd-flex align-center': $vuetify.breakpoint. mdAndUp}">
                 <v-icon size="20" color="red">mdi-information</v-icon>
                 <span :class="{'pl-1': $vuetify.breakpoint. xs, 'pl-2': $vuetify.breakpoint. mdAndUp}">Check <a href="https://easyparcel.com/my/" 
                    target="_blank" class="text-decoration-none">here</a> to know more the shipping rate!
                 </span>
               </div>
            </div>
          </div>
        </v-card-text>
        <v-card-actions class="d-flex justify-end white">
          <v-btn class="pl-4" :style="'background-color:' + color.primary_color" dark @click="dialog.value = false">Got It
            <v-icon left>
                mdi-check-circle
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>

   <!--based on Lalamove-->
 <v-dialog content-class="my-custom-dialog" transition="fab-transition" max-width="650">
    <template v-slot:activator="{ on, attrs }">
      <v-btn dark class="my-2"
        :style="'background-color:' + color.primary_color" v-bind="attrs" v-on="on"> Lalamove
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card class="pt-8 pb-4">
        <v-card-text class="shipping-dialog-box">
           <div class="shipping-title-wrap">
             <h1 class="shipping-title font-weight-bold" :class="{'font-size-headline': $vuetify.breakpoint. xs, 'font-size-display1': $vuetify.breakpoint. smAndUp}">
              SHIPPING DETAILS
             </h1>
           </div>

           <div class="my-4 d-flex justify-center">
             <v-img :src="require('~/assets/images/lalamove-logo.jpg')"
                max-height="150" max-width="180" contain>
             </v-img> 
           </div>

           <div class="dLogBoxInfo text-center" :class="{'mt-5': $vuetify.breakpoint. xs, 'mt-4': $vuetify.breakpoint. smAndUp }">
            <div class="px-4 pb-2 text-grey">
               <h4 v-if="order_min_purchase > 0" class="font-weight-bold pb-2" 
                 :class="{'font-size-subtitle-1': $vuetify.breakpoint. xs, 'font-size-headline-2': $vuetify.breakpoint. smAndUp }"> 
                 * Minimum Spending: 
                  <span class="font-weight-regular red--text">RM{{order_min_purchase}}</span>
               </h4>
               <h4 class="font-weight-bold" :class="{'font-size-subtitle-1 text-center': $vuetify.breakpoint. xs }"> 
                  Delivery and Shipping Fee Calculation
               </h4>
               <h5 class="font-weight-regular red--text font-size-para">(Rate will depand on Lalamove)</h5>
               <p class="pt-5 font-size-para">E.g. Lalamove's free shipping range is applied when purchasing more than <strong>RM{{lalamove_free_shipping_range }}</strong>.</p>             
               <div class="justify-center font-size-para" :class="{'d-flex align-start': $vuetify.breakpoint. xs, 'd-flex align-center': $vuetify.breakpoint. mdAndUp}">
                 <v-icon size="20" color="red">mdi-information</v-icon>
                 <span :class="{'pl-1': $vuetify.breakpoint. xs, 'pl-2': $vuetify.breakpoint. mdAndUp}">Check <a href="https://www.lalamove.com/en-my/all-vehicle-pricing-detail" 
                   target="_blank" class="text-decoration-none">here</a> to know more the shipping rate!
                </span>
               </div>
            </div>
          </div>
        </v-card-text>
        <v-card-actions class="d-flex justify-end white">
          <v-btn class="pl-4" :style="'background-color:' + color.primary_color" dark @click="dialog.value = false">Got It
            <v-icon left>
                mdi-check-circle
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>


  <!------------------Terms & Condition and Privacy Policies------------------>
  <v-dialog v-model="termsPrivacy_dialog" width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn dark class="my-2" 
        :style="'background-color:' + color.primary_color" v-bind="attrs" v-on="on">Terms & Condition
      </v-btn>
    </template>
    <template v-slot:default="dialog">
       <v-card class="tnc-section">
         <v-card-title class="d-flex justify-center">
           <h2 class="tnc-title">Terms & Condition</h2>
         </v-card-title>
          <v-card-text>
            <h3 class="py-3 font-weight-medium tnc-description">
              Welcome to CHANNEL SOFT PLT web site online store. Terms and conditions stated below applies to all visitors and users of CHANNEL SOFT PLT. 
              Please note that you are agree to be bound by these terms and conditions as long as you are on www.emenu.com.my/mygrocery. Please read it carefully
              before accessing or using our services.
            </h3>
            <h4 class="tnc-category">General</h4>
            <p class="tnc-cat-description">
               The content of terms and conditions may be change, move or delete at any time. Please note that 
               CHANNEL SOFT PLT have the rights to change the contents of the terms and conditions without any 
               notice. Any violation of rules and regulations of these terms and conditions, CHANNEL SOFT PLT will 
               take immediate actions against the offender(s).
            </p>
            <h4 class="tnc-category">Site Contents & Copyrights</h4>
            <p class="tnc-cat-description">
               Unless otherwise noted, all materials, including images, illustrations, designs, icons, photographs, 
               video clips, and written and other materials that appear as part of this Site, in other words 
               “Contents of the Site” are copyrights, trademarks, trade dress and/or other intellectual properties 
               owned, controlled or licensed by CHANNEL SOFT PLT.
            </p>
            <h4 class="tnc-category">Product Information</h4>
            <p class="tnc-cat-description">
               We cannot guarantee all actual products will be exactly the same shown on the monitor as that 
               is depending on the user monitor.
            </p>
            <h4 class="tnc-category">Newsletter</h4>
            <p class="tnc-cat-description">
               User shall agree that CHANNEL SOFT PLT may send newsletter include the promotion regarding the latest 
               news/products/promotions etc through email to the user.
            </p>
            <h4 class="tnc-category">Indemnification</h4>
            <p class="tnc-cat-description">
               The user shall agree to defend, indemnify and hold CHANNEL SOFT PLT harmless from and against any and 
               all claims, damages, costs and expenses, including attorneys' fees, arising from or related to your use of the Site.
            </p> 
            <h4 class="tnc-category">Link to other sites</h4>
            <p class="tnc-cat-description">
               Any access link to third party sites is at your own risk. The seller will not be related or involve to any 
               such website if the user's content/product(s) got damaged or loss have any connection with third party site.
            </p>
            <h4 class="tnc-category">Inaccuracy Information</h4>
            <p class="tnc-cat-description">
               From time to time, there may be information on www.emenu.com.my/mygrocery that contains 
               typographical error, inaccuracies, omissions, that may relate to product 
               description, pricing, availability and article contents. We reserve the rights 
               to correct any errors, inaccuracies, change or edit information without prior notice to the customers. 
               If you are not satisfy with your purchased product(s), please return it back to us with the invoice. 
               Please check out “Return and Refund Policy”.
            </p>
            <h4 class="tnc-category">Termination</h4>
            <p class="tnc-cat-description">
               This agreement is effective unless and until either by the customer or the seller. 
               Customer may terminate this agreement at any time. However, the seller may also terminate the agreement 
               with the customer without any prior notice and will be denying the access of the customer who is 
               unable to comply the terms and conditions above.
            </p>
            <h4 class="tnc-category">Delivery</h4>
            <p class="tnc-cat-description">
               Delivery usually will takes about 2 to 14 days. If we are unable to meet the estimated delivery date, 
               we shall not be liable for any losses, liabilities, costs, damages, charges or expenses arising out of the late delivery.
            </p>
            <h4 class="tnc-category">Return & Refund Policy</h4>
            <p class="tnc-cat-description">
               The returned goods/products will be checked with the receipt together and the goods should be in the good condition. 
               The packaging should also be in original condition in original shipping container as received. If the goods/products 
               has been used or damaged by the customer, there will not be any refund. CHANNEL SOFT PLT will also not be 
               responsible if your shipment is lost during the return transit. Once we have checked and confirm the 
               goods/products, customer will receive the refund within 28 days and will be refunded via the same payment method .
            </p>
            
            <div style="font-size: 14px; line-height:20px">
              <span>Please return your purchase to the following address:</span>
              <br>
              <span>CHANNEL SOFT PLT</span>
              <br>
              <span>66, Jalan Ekoperniagaan 2, Taman Ekoperniagaan 2, <br>Senai Airport City, 81400, Senai, Johor</span>
            </div>
          </v-card-text>

          <v-card-title class="d-flex justify-center">
           <h2 class="tnc-title">Privacy Policy</h2>
         </v-card-title>
          <v-card-text>
            <h4 class="pt-5 tnc-category">Collected Information</h4>
            <p class="tnc-cat-description">
               We only collect the informations that needed for the procedure at our website or when fill up the personal information 
               on the site. The information that we gathered are voluntarily submitted by the customers to us. 
               We collect customer's personal information during the account registration on our site.
            </p>
            <h4 class="tnc-category">Personal Identification Details</h4>
            <p class="tnc-cat-description">
               Your personal identification details are used to process your order of the products, 
               customize your profile information, internal usage with legal requirements, 
               update your status of online shopping in our site and also to update our customers with our 
               latest news of updates/changes, promotions and events.
            </p>
            <h4 class="tnc-category">Confidentiality</h4>
            <p class="tnc-cat-description">
              Your personal information such as credit cards details, bank account numbers are well kept secret and confidential with us. 
              We will never share any of your personal details to any third party. Our sites do apply appropriate 
              security application in order to keep all the customers information safe at all time.
            </p>
            <h4 class="tnc-category">Authority</h4>
            <p class="tnc-cat-description">
              CHANNEL SOFT PLT have the rights to do any changes/updates Privacy Policy contents without 
              giving prior notice to the customers. Do keep track on the Privacy Policy page on our website.
            </p>
            <h4 class="tnc-category">Security</h4>
            <p class="tnc-cat-description">
              our company website do applies appropriate security application in order to prevent the leaking customers' 
              personal identification details from third parties, illegal disclosure and hackers. 
              However bear in mind that any information transmitted through Internet is NOT 100% guaranteed 
              safe and secure.
            </p> 
            <br>
            
            <div style="text-align:center; font-size: 14px; line-height: 20px;">
              <p style="font-weight:600">Please contact us at mygrocery@emenu.com.my or whatsapp to the number 01111311663 if you have any questions or doubts.</p>
              <span style="font-weight:600">Company: CHANNEL SOFT PLT</span>
              <br>
              <span style="font-weight:600">Registration No:</span>
              <br>
              <span style="font-weight:600">Email: mygrocery@emenu.com.my</span>
              <br>
              <span style="font-weight:600">Contact Number: 01111311663</span>
            </div>

          </v-card-text>
         <v-card-actions>
           <v-spacer></v-spacer>
           <v-btn color="green darken-1" text @click="dialog.value = false">
             Disagree
           </v-btn>
           <v-btn color="green darken-1" text @click="dialog.value = false">
             Agree
           </v-btn>
         </v-card-actions>
       </v-card>
      </template>
     </v-dialog>

     <nuxt /> 
    </v-main>
  </v-app>
</template>


<script>
import axios from "axios"; // this is libraty for call api 

export default {
  data () {
    return {
      appTitle: 'E-MENU',
      sidebar:false,
      mobileNav:false,
      navLinks:[
        { title: 'Home', path: '/secondpage', icon: 'mdi-home' },
        { title: 'Shipping', path: '/secondpage', icon: 'mdi-truck' },
        { 
          title: 'Categories', 
          path: '/signup', 
          icon: 'mdi-account-arrow-right',
          subLinks: [
            {category: 'Fish'},
            {category: 'Fish'},
             {category: 'Fish'}
          ]
        },
        { title: 'Terms and Condition & Privacy Policies', path: '/signin', icon: 'mdi-account-plus' },
        { title: 'Login/Register As Member', icon: 'mdi-account-plus' },        
      ],
      itemsLanguage: [
        { title: 'English' },
        { title: 'Mandarin' },
        { title: 'Bahasa Melayu' },
      ],

      color: '',
      secondary_color:'',
      tab:0,
      email:'',
      password:'',
      showPassword: false,
      formHasErrors: false,
      emailRules: [
        value => !!value || "Please enter your email",
        value => /.+@.+\..+/.test(value) || "Email must be valid (e.g. jeremy14@gmail.com) "
      ],
      rules: {
         required: value => !!value || "Please enter your password",
         passValidate: (value) => (value && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(value)) || 'Minimum 8 characters, One capital latter, Special charater, Number',
      },

      postcode_dialog:false,
      account_dialog:false,
      postcode_dialog:false,
      distance_dialog:false,
      termsPrivacy_dialog:false,
      address: '',
      postcodes: [],
      distances: [],
      order_min_purchase:"",
      easyparcel_free_shipping_range:"",
      lalamove_free_shipping_range:"",

      category:[],
      vueTelVuetifyLogin: {
        phone:'',
        props:{
          name:'phoneNo',
          mode: "international",
          outlined:true,
          autofocus: false,
          hint:'e.g. +60111223112 (MY)',
          label:'Enter your phone number',
          onlyCountries: ["MY", "SG"],
          fetchCountry: true,
          inputOptions: {
            showDialCode: true,
          },
        }
      },
      vueTelVuetifyRegister: {
        phone:'',
        props:{
          name:'phoneNo',
          mode: "international",
          outlined:true,
          autofocus: false,
          hint:'e.g. +60111223112 (MY)',
          label:'Enter your phone number',
          onlyCountries: ["MY", "SG"],          
          fetchCountry: true,
          inputOptions: {
            showDialCode: true,
          },
        }
      },
    }
  },
  created() {
     window.addEventListener('resize', this.checkScreen);
     this.checkScreen();
     this.insert();
     this.insert2();
   },
   methods:{
    open(index ){
      if(index == 0){
        this.distance_dialog = true;
      }
      else if(index == 1){
        this.distance_dialog = true;
      }
      else if(index == 3){
        this.termsPrivacy_dialog = true;
      }
      else if(index == 4){
        this.account_dialog = true;
      }
    },
    checkScreen(){
       this.windowWidth = window.innerWidth;
       if(this.windowWidth <= 599) {
           this.mobileNav = true;
           return;
       }
       //else
       // set logo to false if more than 600px
       this.mobileNav = false;
       return;
    },

    insert() {
           // now we use axios to post data to api for inserting data
       const params = new URLSearchParams();
       params.append("read", "1");
       params.append("url", "homekopitiam1");
      axios({
        method: "post",
        url: "https://cp.emenu.com.my/form/index.php",
        data: params,// the data we want to post, this.name and this.age is the input textfield data
        
      })
        .then((response) => {    
          this.postcodes = JSON.parse(response.data.form_function[0].shipping_by_postcode);
          this.distances = JSON.parse(response.data.form_function[0].shipping_by_distance);
          this.easyparcel_free_shipping_range = response.data.form_function[0].easyparcel_free_shipping_range;
          this.lalamove_free_shipping_range = response.data.form_function[0].lalamove_free_shipping_range;
          this.order_min_purchase = response.data.form_function[0].order_min_purchase;
          this.color= JSON.parse(response.data.form_function[0].color);
          this.categories= JSON.parse(response.data.form_function[0].category);
          
          console.log("cat",response.data.form_function[0].category);  //call all the data
          console.log("color",response.data.form_function[0].color);  //call all the data
          console.log("postcode", this.postcodes);  //call all the data
          this.address = response.data.form_function[0].whatsapp_number;
          console.log("testing", response.data.form_function[0]);  //call all the data
          //console.log("testing", response.data.form_function[0].name); //call specific data
          // after post we call read_data() function, so it refresh the table
          //this.read_data();

        })
        .catch((error) => {
          console.log(error);
        });
    },

    insert2() {
           // now we use axios to post data to api for inserting data
       const params = new URLSearchParams();
       params.append("get_category", "");
       params.append("form_id", "cb5efd09be95e12cf82e3764e578cb58");
      axios({
        method: "post",
        url: "https://cp.emenu.com.my/form/index.php",
        data: params,// the data we want to post, this.name and this.age is the input textfield data
        
      })
        .then((response) => {    
          console.log(response)
          this.category= response.data.category;
          
          console.log("tcat", this.category);  //call all the data      
          //console.log("testing", response.data.form_function[0].name); //call specific data
          // after post we call read_data() function, so it refresh the table
          //this.read_data();

        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
}
</script>

<style>
:root{
  --main-color: rgb(10, 21, 58);
  --font-size-display1: 34px;
  --font-size-headline: 24px;
  --font-size-headline-2: 16px;
  --font-size-subtitle-1: 15px;
  --font-size-paragraph: 14px;
  --font-size-caption: 12px;
}

.font-size-display1{
  font-size: var(--font-size-display1);
}

.font-size-headline{
  font-size: var(--font-size-headline);
}

.font-size-headline-2{
  font-size: var(--font-size-headline-2);
}

.font-size-subtitle-1{
  font-size: var(--font-size-subtitle-1);
}

.font-size-para{
  font-size: var(--font-size-paragraph);
}

.font-size-caption{
  font-size: var(--font-size-caption);
}

/* ------- Header -------- */
/* for header navigation */
.nav-drawer-width-lg{
  width: 420px !important;
}

.nav-drawer-width-sm{
  width: 550px !important;
}

.nav-drawer-link,
.nav-drawer-group-link {
  font-family: 'Montserrat', sans-serif !important;
  font-weight: bold;
}

.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close), 
.v-navigation-drawer--temporary:not(.v-navigation-drawer--close) {
  z-index: 11;
}

/* for button no hover effect in navigation*/
#no-background-hover::before{
  background-color: transparent !important;
}

/* for nav link underline hover effect */
.v-toolbar__items .v-btn__content::after{
  content: "";
	position: absolute;
	width: 100%;
	height: 2px;
	background-color: black;
  bottom: -5px;
	left: 0;
	transform: scaleX(0);
	transform-origin: bottom right;
	transition: transform 0.25s linear;
}

.v-toolbar__items .v-btn__content:hover::after{
	transform-origin: bottom left;
	transform: scaleX(1);
}

/* change default border color of input-field */
.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)
    > .v-input__control
    > .v-input__slot
    fieldset {
    color: rgba(169, 169, 169, 0.33);
    border: 2px solid rgba(169, 169, 169, 0.33);
}

/* for checkbox label*/ 
.v-input--selection-controls .v-input__slot > .v-label{
  font-size: 14px; 
}

/* for tabs header (account register and login) */
.theme--light.v-tabs > .v-tabs-bar{
  height: 100%;
}

.btn-transi{
  transition: 0.5s ease;
}

.shipping-dialog-box{
  font-family: 'Montserrat', sans-serif !important;
  letter-spacing: -0.3px;
  font-weight: 500;
  line-height: 20px;
}

.shipping-title-wrap{
  display: flex;
  justify-content: center;
  border-radius: 5px;
  padding: 8px;
  background: #E3F2FD;
}
  
.shipping-title{
  text-align: center;
  position: relative;
  display: inline-block;
  color: #212529;
}

.shipping-title::after{
  content: '';
  position: absolute;
  left: 37%;
  border-radius: 5px;
  bottom: 0;
  width: 100px;
  height: 2px;
  background-color:#E53935;
}

.dLogBoxInfo{
  background-color: #E3F2FD;
  border-radius: 5px;
  padding: 12px;
  line-height: 20px;
}

.text-grey{
  color:#6c757d;
}

/* Terms & Condition and Privacy Policies */
.tnc-section{
  font-family:'Times New Roman', Times, serif !important;
}

.tnc-title{
  position: relative;
  font-weight: 500 !important;
}

.tnc-title::after{
  content: '';
  position: absolute;
  left:0;
  border-radius: 5px;
  bottom: -5px;
  width: 100%;
  height: 2px;
  background-color: rgb(10, 21, 58);
}

.tnc-description{
  font-family:'Helvetica';
  text-align: justify;  
  font-size: 14px;
  line-height: 20px;
}

.tnc-category{
  font-size: var(--font-size-subtitle-1);
  font-weight: bold;
}

.tnc-cat-description{
  font-size: 14px;
  text-align: justify;
  line-height: 20px;

}

@media screen and (max-width: 599px) {
  .shipping-title::after {
    left: 39%;
    width: 60px;
  }

  .tnc-title{
    font-size: 24px;
  }
}

@media screen and (max-width: 380px) {
  .tnc-description {
    text-align: left;
  }
}
/* ========= Header ========= */
</style>
