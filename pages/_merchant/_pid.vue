<template>
  <div class="v-main__wrap" v-if="donemount">
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />

    <meta name="theme-color" :content="theme_color" />
    <div class="container fill-height container--fluid">
      <!-- <div class="layout justify-center"> -->
        <v-row justify="center">
          <v-col cols="12" xl="6" lg="6" md="8">
        <div class="w-full">
          <div class="d-flex py-3">
            <div>
              <!-- <div class="display-1" style="font-size:33px!important">{{ product_name }}</div> -->
            
            </div>
            <v-spacer></v-spacer>
            <NuxtLink :to="'/'+$route.params.merchant+($route.query.ref?'?ref='+$route.query.ref:'')"><v-btn @click="vibrate()" :color="s_color" :dark="s_dark" style="font-size:14px">

             {{$t('return-main-shop')}}
            </v-btn></NuxtLink>
      
          </div>
         
          <div class="pa-3 v-card v-card--flat v-sheet theme--light">
            <div class="row">
              
              <div class="col-md-6 col-12">
                <v-card>
                <div class="d-flex">
                  <div class="mr-2 ml-2" v-if="product_image_gallery.length>0 || product_video">

                    <!-- main product image -->
                     <div
                  
                        class="v-card v-card--link v-sheet theme--light mt-2"
                         @click="selected_image=product_image,selected_image_index=0"
                      >
                        <div
                          class="v-image v-responsive rounded  mb-2 theme--light"
                          style="height: 80px; width: 80px"
                        >
                          <div
                            class="v-responsive__sizer"
                            style="padding-bottom: 100%"
                          ></div>

                          <div 
                            class="v-image__image v-image__image--cover"
                            :style="{
                              'background-image':
                                'url(' +
                                domain +
                                '/product/image.php?m='+merchant_id+'&type=product&im=' +
                                product_image +
                                ')',
                                'background-position': 'center center;'
                                
                            }"
                          ></div>
                          <div
                            class="v-responsive__content"
                            style="width: 1000px"
                          >
                          </div>
                        </div>
                      </div>

                      <!-- product gallery -->
                    <template
                      v-for="(image_galley, index) in product_image_gallery"
                    >
                      <div
                        :key="index"
                        class="v-card v-card--link v-sheet theme--light"
                        @click="selected_image=image_galley.image,selected_image_index=index+1"
                      >
                        <div
                          class="v-image v-responsive rounded mb-2 theme--light"
                          style="height: 80px; width: 80px"
                        >
                          <div
                            class="v-responsive__sizer"
                            style="padding-bottom: 100%"
                          ></div>

                          <div
                            class="v-image__image v-image__image--cover"
                           
                            :style="{
                              'background-image':
                                'url(' +
                                domain +
                                '/product/image.php?m='+merchant_id+'&type=product&im=' +
                                image_galley.image +
                                ')',
                                'background-position': 'center center;'
                                
                            }"
                          ></div>
                          <div
                            class="v-responsive__content"
                            style="width: 1000px"
                          ></div>
                        </div>
                      </div>
                    </template>
                      <!-- video -->
                    <div
                    v-if="product_video!==''" @click="dialog_video=true"
                        class="v-card v-card--link v-sheet theme--light mt-2"
                      >
                        <div
                          class="v-image v-responsive rounded  mb-2 theme--light"
                          style="height: 80px; width: 80px"
                        >
                          <div
                            class="v-responsive__sizer"
                            style="padding-bottom: 100%"
                          ></div>
                        
            
            
                          <div 
                            class="v-image__image v-image__image--cover"
                            :style="{
                              'background-image':
                                'url(' +
                                'https://img.youtube.com/vi/'+product_video+'/default.jpg' +
                                ')',
                                'background-position': 'center center;'
                                
                            }"
                          >
                             <v-overlay
            :absolute="true"
          ><v-icon>mdi-play</v-icon></v-overlay>
                          </div>
          

                          <div
                            class="v-responsive__content"
                            style="width: 1000px"
                          ></div>
                        </div>
                      </div>

                  </div>
                  <div  class="d-flex align-center flex-grow-1 justify-center" @click="selected_slider=selected_image_index,dialog_image_slider=true">
                    <img
                      :src="selected_image?domain +
                                '/product/image.php?m='+merchant_id+'&type=product&im=' +
                                 selected_image:domain +
                                '/product/image.php?m='+merchant_id+'&type=product&im=' +
                                product_image"
                      class="rounded ma-1"
                      style="max-width: 100%; max-height: 460px"
                    />
                  </div>
                
                </div>
                </v-card>
              </div>

              <!-- product details -->
              <div class="col-md-6 col-12">
                <div class="d-flex"></div>
                <div style="font-size:18px!important;line-height:32px;color:#495057;font-weight:700">
                  {{ product_name }}
                </div>

                <!-- <hr
                  role="separator"
                  aria-orientation="horizontal"
                  class="my-2 v-divider theme--light"
                /> -->
                <!-- <div class="d-flex align-center text-h6" style="font-size:19px!important;line-height:32px;">
                  <div> {{$t('product-price')}}:</div>
                  <span
                    class="text-decoration-line-through mx-1 font-weight-regular"
                  ></span
                  >
                   <span class="strikethrough-diagonal" v-if="original_price!=='' ">RM{{ parseFloat(original_price).toFixed(2)}}&nbsp;</span>
                  <span>RM{{ product_price }}</span>
                </div> -->

                <!-- <div class="mt-3 text-body-1"  v-html="product_description">
                </div> -->
                <!-- <hr
                  role="separator"
                  aria-orientation="horizontal"
                  class="my-2 v-divider theme--light"
                /> -->
                <!-- <div class="font-weight-bold mb-1">{{$t('about-item')}}</div> -->
                <div
                  class="mt-2 " style="font-size:15px!important;line-height:20px;"
                  v-html="product_description"
                ></div>

                <h5 style="color:#0062c4;font-weight:500;font-size:12px;"><b style="color:#495057;font-weight:700;font-size:12px;">{{$t('category')}}:</b>
                 {{product_category_id!==0?product_category_name:$t('uncategorised')}} </h5>

                    <hr
                  role="separator"
                  aria-orientation="horizontal"
                  class="my-2 v-divider theme--light"
                />
                <div style="font-size:14px!important;color:#333;font-weight:600">{{$t('share-item')}}</div>
                    <v-text-field color="#1ca301" class="copy-text" ref="share_link" background-color="#f5f5f5" :value="'https://share.emenu.com.my/'+product_id+'?rdr=1'" outlined dense readonly>
                         <template v-slot:append class="ma-0" >
                              <v-btn @click="copy_link('https://share.emenu.com.my/'+product_slug+'-'+product_id+'?rdr=1')" small  outlined color="#10d876"  style="margin-bottom:8px!important" >
                                    <!-- <v-icon left>
                                        mdi-subdirectory-arrow-right
                                     </v-icon> -->
                                        <span style="font-size:12px;">{{copy_status?'copied':'copy'}}</span>
                                      </v-btn>
                                      </template>
                    </v-text-field>
              </div>
            </div>

            <hr
              role="separator"
              aria-orientation="horizontal"
              class="my-1 v-divider theme--light"
            />
            <!-- product real variant -->
            <div class="col-md-12 col-12 ma-0 pa-0" v-if="product_variant.length > 0 && product_type==1 && setup_done">
              <div class="pa-0  theme--light">
                <div class="d-flex flex-column">
                  <div class="mt-1 price-font" style="font-size:16px!important;font-weight:700;color:#515184">{{$t('product-variant')}}</div>
                  <!-- <div class="text-body-1">Free Shipping</div>
                    <div class="text-h6 success--text my-3">In Stock</div> -->
                  <div class="product-variations">
                    <div>
                      <!-- product varaint -->
                      <div
                        class="product-topping-list js-variation-selector">
                      
                         <v-radio-group v-model="selected_variant_id" mandatory class="">
                          <v-radio
                            class="mb-2"
                            v-for="varian in product_variant"
                            :key="varian.id"
                            :value="varian.id"
                            :disabled="(varian.stock!=='' && varian.stock<1)||varian.status=='1'?true:false"
                          >

                            <template v-slot:label>

                                <v-row class="ml-1 mr-2">
                   
                                  <span class="radio-text price-font" style="color:#6c757d ;font-size: 14px !important; font-weight:500;"><b >{{varian.name}}</b><b style="color:#ff8585">{{(varian.stock!=='' && varian.stock<1)||varian.status=='1'?' -Out of stock':''}}</b></span><v-spacer></v-spacer>
                                     <span class="radio-text price-font" style="color:#7979a0;font-size: 13px !important; font-weight:350;"> <b>RM {{parseFloat(variant_actual_price(varian.price)).toFixed(2)}}</b></span>
                                </v-row>

                            </template>
                          </v-radio>
                        </v-radio-group>
                      </div>
                      <!-- end product variation -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
                <hr v-if="product_variant.length > 0"
              role="separator"
              aria-orientation="horizontal"
              class="my-1 v-divider theme--light"
            />
            
            <!-- product addon -->
            <div class="col-md-12 col-12 ma-0 pa-0" v-if="product_variation.length > 0">
              <div class="pa-0 ">
                <div class="d-flex flex-column">
                  <!-- <div class="text-body-1 font-weight-bold" style="font-size:14px!important">{{$t('product-option')}}</div> -->
                  <!-- <div class="text-body-1">Free Shipping</div>
                    <div class="text-h6 success--text my-3">In Stock</div> -->
                  <div class="product-variations">
                    <div>
                      <!-- product variation -->
                      <div
                        class="product-topping-list js-variation-selector"
                        
                      >
                        <template v-for="(variant, index) in product_variation" >
                          <div :key="index" class="mb-7" :id="'#option-'+index">
                           <div class="d-flex" >  
                           <!--   <span class="product-topping-list-title-text" style="font-size:16px!important">{{
                                variant.group_name
                              }}</span>  -->
                          <span class="mt-1 product-topping-list-title-text" style="font-size:17px!important;font-weight:700;color:#515184">{{ variant.group_name}}</span>
                            <div style="display:block;">
                              <span
                                class="product-topping-list-tag required-list"
                                v-if="variant.option == 1"
                              >
                                {{$t('product-option-required')}}
                              </span>
                              <span
                                class="product-topping-list-tag"
                                v-if="variant.option == 0"
                              >
                                {{$t('product-option-optional')}}
                              </span>
                              </div>
                            </div>
                            <p
                              class="ma-0 pa-0 product-topping-list-indication"
                              v-if="variant.type == 1"
                            >
                              {{$t('product-option-select-one')}}
                            </p>
                            <p
                              class="ma-0 pa-0  product-topping-list-indication"
                              v-if="variant.type == 0"
                            >
                            {{$t('product-option-select-multiple')}}
                              {{ variant.max?variant.max:variant.variation.length }}
                              {{$t('product-option-select-multiple-quantifier')}}
                            </p>
                             <p
                              class="product-topping-list-indication"
                              style="color:red; font-size:12px;"
                              v-if="variant.error"
                            >
                             {{$t('product-option-at-least-error')}}
                              {{ variant.min }}
                              {{$t('product-option-at-least-error-last-word')}}
                            </p>
                            <v-row
                              align="center"
                              justify="center"
                              style="margin: -18px !important"
                            >
                              <v-col cols="12" >
                                <div class="pa-1 mt-2">
                                <rad
                                  @calc="update_add_on_total_price"
                                  @update_error="variant.error=false"
                                  :show_error="variant.error"
                                  :array="variant.variation"
                                  :multiple="variant.type == 0 ? true : false"
                                  :optional="variant.option == 0 ? true : false"
                                  :min="variant.min?variant.min:-1"
                                  :max="variant.max?variant.max:-1"
                                >
                                </rad>
                                </div>
                              </v-col>
                            </v-row>
                          </div>
                        </template>
                      </div>
                      <!-- end product variation -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <!-- <div class="text-h6" style="font-size:20px!important;line-height:32px;" >{{$t('note')}}</div> -->
                   <div class="mt-1 price-font" style="font-size:16px!important;font-weight:700;color:#515184">{{$t('note')}}</div>
              <v-textarea
                v-model="remark"
                placeholder=""
                class="pa-0"
                outlined
              ></v-textarea>
            </div>
            <hr
              role="separator"
              aria-orientation="horizontal"
              class="my-3 v-divider theme--light"
            />
          </div>
        </div>
        </v-col>
        </v-row>

        
      <!-- </div> -->
    </div>
    <div style="height:30px;"></div>
    <footer
      v-if="catalog_mode!=='0'"
      class="v-footer v-sheet theme--light product-add-to-cart d-block"
      style="left: 0px; right: 0px; bottom: 0px; height:95px; position:fixed;padding-top:6px"
    >
    
      <v-row dense class="mt-1">
      <NumberInputSpinner
        v-if="donemount && number_refresh"
        :min="0"
        :max="product_stock"
        :step="1"
        @change="vibrate()"
        style="align-self: center"
        class="ml-2"
        :integerOnly="true"
        v-model="add_to_card_qty"
      />  
      <div class="stock_available">&nbsp;
      {{(product_stock < 100) ? product_stock+' available':''}}

      </div>
      <v-spacer></v-spacer>
      <div class="price-font mr-2" style="display:block;letter-spacing:0.2px;">
      <span style="color:#adb5bd;font-size:12px;font-weight:700;letter-spacing:0.2px;">RM</span>
      <!-- <span v-if="original_price!=='' ">{{ parseFloat(original_price).toFixed(2)}}&nbsp;</span> -->
                  <span style="color:#1ca301;font-size:20px;font-weight:700;letter-spacing:0.2px;">{{ (parseFloat(product_price)+parseFloat(product_variation_total)).toFixed(2) }} </span> </div>
        </v-row>
        <v-row class="mb-3" style="align-self: center;margin-left:5px;margin-right:5px;">

      <v-btn :color="p_color" :dark="p_dark" v-if="product_stock>0" :loading="add_to_cart_loading"  
            @click="check_product_variation(),vibrate()" style="font-size:15px;align-self: center;width:-webkit-fill-available">
        {{$t('add-to-cart')}}
      </v-btn>

      <v-btn :color="p_color" v-if="product_stock<=0" tile  disabled style="font-size:15px;align-self: center;width:-webkit-fill-available"   >
        {{$t('add-to-cart')}}
      </v-btn>

        </v-row>
      
      <!-- <v-btn :color="p_color" :dark="p_dark" v-if="product_stock>0" :loading="add_to_cart_loading" width="45%" @click="check_product_variation(),vibrate()" style="font-size:15px;align-self: center;">
        {{$t('add-to-cart')}} 
      </v-btn>
      <v-btn :color="p_color" v-if="product_stock<=0" tile width="45%" disabled style="font-size:15px;align-self: center;" >
        {{$t('add-to-cart')}}

      </v-btn> -->
 
    </footer>
    <input type="hidden" v-model="refresh"/>

    <!-- gallery dialog -->
    <v-dialog v-model="dialog_image_slider" fullscreen >
      <a href="#" class="close"></a>
      <v-card style="background-color:black;width:100%;height:100%;border-radius:0px" align="center" justify="center"
      @click="dialog_image_slider=false">
      <a href="#" @click="dialog_image_slider=false" class="close"></a>
      
      <v-carousel v-model="selected_slider" class="ma-auto" height="100%">
      <v-carousel-item
        v-for="(item,i) in slider_array"
        :key="i"
        :src="domain +'/product/image.php?m='+merchant_id+'&type=product&im=' + item.image"
        contain
      >
      
      </v-carousel-item>
      </v-carousel>

      </v-card>
    </v-dialog>
    <!-- video dialog -->
     <v-dialog v-model="dialog_video" v-if="dialog_video" fullscreen >
      <a href="#" class="close"></a>
      <v-card style="background-color:black;width:100%;height:100%;border-radius:0px" align="center" justify="center"
      @click="dialog_video=false">
      <a href="#" @click="dialog_video=false" class="close"></a>
      <div class="video-container">
      <iframe id="ytplayer" type="text/html" allowfullscreen
      :src="'https://www.youtube.com/embed/'+product_video+'?autoplay=1'"
      frameborder="0"></iframe>
      </div>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
import * as moment from "moment/moment";
import { BASEURL } from "@/api/baseurl";
import axios from "axios";
import NumberInputSpinner from "vue-number-input-spinner";
import rad from "@/components/radio";
export default {
   transition: 'slide',
  components: {
    NumberInputSpinner,
    rad,
  },
  data() {
    return {
      domain: BASEURL,
      remark: "",
      donemount: false,
      number_refresh:true,
      selected_image:'',
      selected_image_index:0,
      add_to_card_qty:1,
      refresh:0,
      unsavedChanges:true,
      dialog_image_slider:false,
      dialog_video:false,
      selected_slider:0,
      copy_status:false,
      product_variation_total:0,
      tier_id:null,
      global_rate:null,
      global_type:null,
      global_status:null,
      setup_done:false,
    };
  },
  async asyncData({ params, $axios }) {
    const productData = new URLSearchParams();

    if(params.pid.includes("-")){

      const pid = params.pid.split('-').pop();

      productData.append("url", `${params.merchant}`);
      productData.append("product_id", pid);
      productData.append("get_product", "get_product");

    }else{
      productData.append("url", `${params.merchant}`);
      productData.append("product_id", `${params.pid}`);
      productData.append("get_product", "get_product");
    }




    let productResponse = await $axios.$post("product/index.php", productData);
    console.log(productResponse);
     if (productResponse.status !== "1") {
      window.location.href = "https://emenu.com.my/"+`${params.merchant}`+(this.$route.query.ref?'?ref='+this.$route.query.ref:''); 
      return;
    }

    const formData = new URLSearchParams();
    formData.append("url", `${params.merchant}`);
    formData.append("read", "date");
    let formResponse = await $axios.$post("form/index.php", formData);

    if(formResponse.form_function[0].color) {
        var color = JSON.parse(formResponse.form_function[0].color);
        var p_color = color.primary_color;
        var s_color = color.second_color;
    }else{
        var p_color = "#000000";
        var s_color = "#666f7b";
    }


    if (productResponse.status == "1") {
      var product_variation = [];
      if (productResponse.read[0].variation!=='') {
        product_variation = JSON.parse(productResponse.read[0].variation);
      }
      var product_image_gallery = [];
      if (productResponse.read[0].image_gallery!=='') {
        product_image_gallery = JSON.parse(productResponse.read[0].image_gallery);
      }

      var product_variant = [];


      // var tier_id=productResponse.read[0].tier_id;
      var tier_id=1;

      // var price=productResponse.read[0].price;
      var price=productResponse.read[0].price;
    
      console.log(JSON.parse(price));


      return {
        merchant_url:`${params.merchant}`,
        merchant_id: formResponse.form_function[0].merchant_id,
        catalog_mode: formResponse.form_function[0].catalog_mode,
        theme_color: formResponse.form_function[0].form_color,
        default_language: formResponse.form_function[0].default_language,
        product_id: productResponse.read[0].product_id,
        product_name: productResponse.read[0].name,
        product_image: productResponse.read[0].image,
        product_image_gallery: product_image_gallery,
        product_video: productResponse.read[0].youtube_video,
        product_slug: productResponse.read[0].slug,

        // product_description: productResponse.read[0].description,
        product_description: productResponse.read[0].description.replace(/\n/g, "<br/>"),
        tier_id:-1,
        product_price: 0.00,
        price: price,
        product_category_id: productResponse.read[0].category_id,
        product_category_name: productResponse.read[0].category_name,
        original_price:productResponse.read[0].original_price,
        product_item_code: productResponse.read[0].item_code,
        product_variation: product_variation,

        product_type: productResponse.read[0].type,
        product_variant: productResponse.read[0].variant,
        stock: productResponse.read[0].stock,
        weight: productResponse.read[0].weight,
        p_color:p_color,
        s_color:s_color,
        add_to_cart_loading:false,
        selected_variant_id:'',
      };
    } else {
      window.location.href = "https://emenu.com.my/"+`${params.merchant}`+(this.$route.query.ref?'?ref='+this.$route.query.ref:''); 
    }

    // return{
    //   banner_status: formResponse.data.form_function[0].banner_status,
    //   banner_video_link: formResponse.data.form_function[0].banner_video_link,
    //   bank_details: formResponse.data.form_function[0].bank_details,
    //   theme_color: formResponse.data.form_function[0].form_color,
    //   form_image: formResponse.data.form_function[0].form_banner,
    //   form_title: formResponse.data.form_function[0].name,
    //   merchant_address: "Merchant address| 商家地址 : \n" + formResponse.data.form_function[0].address,
    //   self_collect: formResponse.data.form_function[0].self_collect == "0" ? true : false,
    //   delivery_date_option: formResponse.data.form_function[0].delivery_date_option == "0" ? true : false,
    //   delivery_time_option:  formResponse.data.form_function[0].delivery_time_option == "0"? true : false,
    //   email_option : formResponse.data.form_function[0].email_option == "0" ? true : false,
    //   form_description : formResponse.data.form_function[0].description,
    //   bank_transfer : formResponse.data.form_function[0].bank_transfer == "0" ? true: false,
    //   cash_on_delivery : formResponse.data.form_function[0].cash_on_delivery == "0" ? true : false,
    //   fpay_transfer : formResponse.data.form_function[0].fpay_transfer == "0" ? true: false,
    //   allow_discount : formResponse.data.form_function[0].allow_discount,
    //   order_min_day : formResponse.data.form_function[0].order_min_day,
    //   working_day : formResponse.data.form_function[0].working_day,
    //   note:formResponse.data.form_function[0].note_default_value,
    //   shipping_setting_status:formResponse.data.form_function[0].shipping_setting_status,
    //   tax_percent:formResponse.data.form_function[0].tax_percent,
    //   tax_name:formResponse.data.form_function[0].tax_name,
    //   json_promo_dialog:formResponse.data.form_function[0].promo_dialog,
    // }
  },
  head () {
    return {
      title: this.product_name,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: this.meta_title!==''?this.meta_title:this.product_name, 
          name: this.meta_title!==''?this.meta_title:this.product_name, 
          content: this.meta_description!==''?this.meta_description:this.product_description, },
          { hid: 'og:image', property: 'og:image', 
          content:  this.domain +'/product/image.php?m='+this.merchant_id+'&type=product&im=' +this.product_image }
      ]
    }
  },
  computed: {
    slider_array(){

      var array=[];
      var product_object={image:this.product_image}
      array.push(product_object);

      for(var i=0; i<this.product_image_gallery.length; i++){
         array.push({image:this.product_image_gallery[i].image});
      }
      return array
    },
    language(){
      return this.$store.state.locale;
    },
    
    product_stock(){

      if(this.product_type=='0'){
        if(this.stock==''){

        return 9999;
      }else{
        var used_stock=this.$store.getters.product_used_stock(this.product_id,this.product_type,this.selected_variant_id);
        
          return parseFloat((parseFloat(this.stock)-parseFloat(used_stock)).toFixed(0))

      }

      }else{

        for(var i=0; i<this.product_variant.length; i++){
            if(this.product_variant[i].id==this.selected_variant_id){
            if(this.product_variant[i].stock==''){
              return 9999;
            }

              var used_stock=this.$store.getters.product_used_stock(this.product_id,this.product_type,this.selected_variant_id);
             return parseFloat((parseFloat(this.product_variant[i].stock)-parseFloat(used_stock)).toFixed(0))
            

            }
           
        }
         return 0;

      }
      
      
    },

    p_dark:function () {
      return this.text_color_auto(this.p_color);
    },

    s_dark:function () {
      return this.text_color_auto(this.s_color);
    },

    selected_product_variant(){
      if(this.product_type=='0'){
        return [];
      }

        for(var i=0; i<this.product_variant.length; i++){
            if(this.product_variant[i].id==this.selected_variant_id){

                this.product_variant[i].selected=true;

            }else{
                this.product_variant[i].selected=false;
              
            }

          

        }
          return this.product_variant;
    },

    // display_price(){
    //   if(this.product_type=='1' &&this.product_variant!==''){
    //       var variant=JSON.parse(this.product_variant);
        
    //       var smallest=parseFloat(variant[0].price);

    //       for(var g=0; g<variant.length; g++){
            
    //           if(parseFloat(variant[g].stock)>0|| variant[g].stock==''){
    //             product[i].in_stock=true;
    //           }

    //           if(parseFloat(variant[g].price)<smallest){
    //             smallest=variant[g].price;
    //           }

    //       }
    //       return 'From RM'+parseFloat(smallest).toFixed(2);
    //     }

    // }
    


    
  },
  watch:{
    product_stock(e){
      console.log(e);
      if(e<this.add_to_card_qty){
        this.number_refresh=false;
        this.$nextTick(() => {
        this.number_refresh=true;

        // The whole view is rendered, so I can safely access or query
        // the DOM. ¯\_(ツ)_/¯
        this.add_to_card_qty=e;

      })

      }
    },
    language(){
      this.$i18n.locale = this.language;
    },
    selected_variant_id(e){
      for(var i=0; i<this.product_variant.length;i++){
        if(e==this.product_variant[i].id){
          // this.product_price=this.product_variant[i].price

           if(this.check_json(this.product_variant[i].price)){

            var price=JSON.parse(this.product_variant[i].price);

          for(var g=0; g<price[0].tier.length; g++){

              if(price[0].tier[g].tier_id==this.tier_id){


                if(parseFloat(price[0].price_type)==0){

                    if(price[0].tier[i].rate==''){


                        if(this.global_status==0){
                            if(this.global_type==0){
                              this.product_price=(parseFloat(price[0].normal)-(parseFloat(price[0].normal)*parseFloat(this.global_rate)/100)).toFixed(2);
                                break;
                            }else {
                                  this.product_price=(parseFloat(price[0].normal)-parseFloat(this.global_rate)).toFixed(2);
                                  if(this.product_price<0){
                                    this.product_price=0;
                                  }
                                  break;
                            }
                          }else{
                            this.product_price=parseFloat(price[0].normal).toFixed(2);
                            break;
                          }


                        // this.product_price=parseFloat(price[0].normal)  
                        // break;
                    }

                  this.product_price=(parseFloat(price[0].normal)-
                  (parseFloat(price[0].normal)*parseFloat(price[0].tier[g].rate)/100)).toFixed(2);
              

                  break;

                }else{
                   if(price[0].tier[i].rate==''){

                         if(this.global_status==0){
                            if(this.global_type==0){
                              this.product_price=(parseFloat(price[0].normal)-(parseFloat(price[0].normal)*parseFloat(this.global_rate)/100)).toFixed(2);
                                break;
                            }else {
                                  this.product_price=(parseFloat(price[0].normal)-parseFloat(this.global_rate)).toFixed(2);
                                  if(this.product_price<0){
                                    this.product_price=0;
                                  }
                                  break;
                            }
                          }else{
                            this.product_price=parseFloat(price[0].normal).toFixed(2);
                            break;
                          }

                        // this.product_price=parseFloat(price[0].normal)  
                        // break;
                    }
                  this.product_price=(parseFloat(price[0].normal)-(parseFloat(price[0].tier[g].rate))).toFixed(2);

                  if(this.product_price<0){
                    this.product_price=0;
                  }
                   console.log('hehe2');
                  break;
                }
              // console.log('pricekeke:'+ this.product_price);

                //  this.product_price=parseFloat(price[0].normal);

              }
              if(i==price[0].tier.length-1){
                   console.log('hehe2');
                

                        if(this.global_status==0){
            
                            if(this.global_type==0){


                            this.product_price=(parseFloat(price[0].normal)-
                            (parseFloat(price[0].normal)*parseFloat(this.global_rate)/100)).toFixed(2);
                    
                            }else {
                                this.product_price=(parseFloat(price[0].normal)-(parseFloat(this.global_rate))).toFixed(2);
                                  
                                  if(this.product_price<0){
                                    this.product_price=0;
                                  }

                            }
                            
                          }else{      
                              // variant , no tier found, no global
                              
                              this.product_price=parseFloat(price[0].normal).toFixed(2);

                          }


              }


          }

            
          }else{


            if(this.global_status==0){
                            if(this.global_type==0){
                              this.product_price=(parseFloat(this.product_variant[i].price)-(parseFloat(this.product_variant[i].price)*parseFloat(this.global_rate)/100)).toFixed(2);
                               
                            }else {
                                  this.product_price=(parseFloat(this.product_variant[i].price)-parseFloat(this.global_rate)).toFixed(2);
                                  if(this.product_price<0){
                                    this.product_price=0;
                                  }
                         
                            }
                          }else{
                            this.product_price=parseFloat(this.product_variant[i].price).toFixed(2);
               }

                  // this.product_price=this.product_variant[i].price;
                  //  if(this.product_price<0){
                  //   this.product_price=0;
                  // }





                for(var h=0; h<this.product_variant.length;h++){
                Object.assign(this.product_variant[h], {selected: false});

                }
                this.product_variant[i].selected=true;
                

          }



          

        }
      }
    }

  },
  created(){
      this.$store.dispatch("fetchCart",this.merchant_url);
      this.$store.dispatch("fetchlocale",this.default_language);
      // this.tier_id=1;
      // this.global_rate="10";
      // this.global_type=0;
      // this.global_status=0;
      if(localStorage.getItem('visit_date')){

          if(localStorage.merchant==this.merchant_url){
               var check_date=moment(localStorage.visit_date, 'YYYY-MM-DD', true).isValid();
                if(check_date){
                  var current_date=moment().format("YYYY-MM-DD");

                  if(localStorage.visit_date==current_date){
                    //ok

                    if(localStorage.getItem('visit_product')){
                        var visit_product=localStorage.visit_product;
                        for(var i=0; i<visit_product.length; i++){
                          if(visit_product[i]==this.product_id){
                            break;
                          }

                          if(i=visit_product.length-1){
                            // localStorage.visit_product.push(this.product_id);

                            var temp_local=JSON.parse(localStorage.visit_product);
                            temp_local.push(this.product_id);
                            localStorage.visit_product=JSON.stringify(temp_local);
                          
                            //insert product visit query
                            console.log('p1');
                          this.update_product_visitor(this.merchant_id,moment().format('YYYY-MM-DD'),this.product_id);
                            
                          }
                        }

                      }else{
                        var arr=[];
                        localStorage.visit_product =JSON.stringify(arr);
                        var temp_local=JSON.parse(localStorage.visit_product);
                        temp_local.push(this.product_id);
                        localStorage.visit_product=JSON.stringify(temp_local);
                           

                   
                        //insert product visit query
                            console.log('p2');

                          this.update_product_visitor(this.merchant_id,moment().format('YYYY-MM-DD'),this.product_id);
                      }
                  
                    }else{
                      localStorage.visit_date=moment().format('YYYY-MM-DD'); 
                      //insert visit query
                      this.update_visitor(this.merchant_id,moment().format('YYYY-MM-DD'));

                     var arr=[];
                      localStorage.visit_product =JSON.stringify(arr);
                      var temp_local=JSON.parse(localStorage.visit_product);
                      temp_local.push(this.product_id);
                      localStorage.visit_product=JSON.stringify(temp_local);
                      console.log('p3');

                    //insert product visit query
                      this.update_product_visitor(this.merchant_id,moment().format('YYYY-MM-DD'),this.product_id);

                    }

                  }else{
                    localStorage.visit_date=moment().format('YYYY-MM-DD'); 
                    //insert visit query
                    this.update_visitor(this.merchant_id,moment().format('YYYY-MM-DD'));


                    var arr=[];
                localStorage.visit_product =JSON.stringify(arr);
                var temp_local=JSON.parse(localStorage.visit_product);
                temp_local.push(this.product_id);
                localStorage.visit_product=JSON.stringify(temp_local);
                                console.log('p4');

            //insert product visit query
              this.update_product_visitor(this.merchant_id,moment().format('YYYY-MM-DD'),this.product_id);
            

                  }
                }else{
                   localStorage.visit_date=moment().format('YYYY-MM-DD'); 
                    //insert visit query
                    this.update_visitor(this.merchant_id,moment().format('YYYY-MM-DD'));

                    var arr=[];
                          localStorage.visit_product =JSON.stringify(arr);
                          var temp_local=JSON.parse(localStorage.visit_product);
                          temp_local.push(this.product_id);
                          localStorage.visit_product=JSON.stringify(temp_local);
                            console.log('p5');

            //insert product visit query
              this.update_product_visitor(this.merchant_id,moment().format('YYYY-MM-DD'),this.product_id);

                }
                 
            //  }else{
            //    localStorage.promo_display_date=moment().format('YYYY-MM-DD HH:mm'); 
            //  }

        }else{
           localStorage.visit_date=moment().format('YYYY-MM-DD'); 
            //insert visit query
            this.update_visitor(this.merchant_id,moment().format('YYYY-MM-DD'));


            var arr=[];
            localStorage.visit_product =JSON.stringify(arr);
            var temp_local=JSON.parse(localStorage.visit_product);
            temp_local.push(this.product_id);
            localStorage.visit_product=JSON.stringify(temp_local);
                            console.log('p6');

            //insert product visit query
              this.update_product_visitor(this.merchant_id,moment().format('YYYY-MM-DD'),this.product_id);

        }

         if(this.$route.query.ref && this.$route.query.ref!==''){

          this.check_ref_tier(this.$route.query.ref);

          }else if(localStorage.getItem('ref')){
            this.check_ref_tier(localStorage.ref);
          }else{
            this.product_setup();
          }

      
    },
   
  mounted() {
    this.donemount = true;
      this.history_length=window.history.length;

        window.scroll(0, 0); 

    
        //      if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        //   this.$router.push('/'+this.merchant_url); 
        // } else {
        //   console.info( "This page is not reloaded");
        // }
  },
  methods: {
    add_on_change(variation_index, variant_index) {
      this.product_variation[variation_index].variation[variant_index]
        .quantity == 1
        ? (this.product_variation[variation_index].variation[
            variant_index
          ].quantity = 0)
        : (this.product_variation[variation_index].variation[
            variant_index
          ].quantity = 1);
          console.log(JSON.stringify(this.product_variation));
    },

    radio_onchage() {

    },
    
    check_product_variation(){

        if(this.product_variation.length>0){

          for(var i=0; i<this.product_variation.length; i++){

            var total_selected_qty=0;
            var ok_to_add_card=true;

            for(var g=0; g<this.product_variation[i].variation.length; g++){
              
              if(this.product_variation[i].variation[g].quantity==1){
                  total_selected_qty=total_selected_qty+1;
              }

              if(g==this.product_variation[i].variation.length-1){
                
                console.log(total_selected_qty+' vs '+this.product_variation[i].min);

                if(total_selected_qty<this.product_variation[i].min){
                  ok_to_add_card=false;
                this.$set(this.product_variation[i], "error", true);
                
               
                }
              }

            }
             if(i==this.product_variation.length-1){
               if(ok_to_add_card){
               this.add_to_cart();

               }else{
                 for(var i=0; i<this.product_variation.length; i++){
                   if(this.product_variation[i].error==true){
                       var scrollDiv = document.getElementById("#option-"+i).offsetTop+200;
                 window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
                 return
                   }
              

                 }
               
               }
             }
          }


        }else{
          this.add_to_cart();
        }
    },

    add_to_cart() {
      
        if(this.add_to_card_qty<1){
          return;
        }

        var final_price=this.product_price;
        this.add_to_cart_loading=true;
          var cart_array=this.$store.state.cart;
          console.log(JSON.stringify(cart_array));

          for(var i=0; i<cart_array.length; i++){
            if (
                cart_array[i].product_id == this.product_id &&
                cart_array[i].product_name == this.product_name &&
                cart_array[i].product_price == final_price &&
                cart_array[i].remark == this.remark &&
                JSON.stringify(cart_array[i].product_variation) ==
                  JSON.stringify(this.product_variation)
                  &&
                JSON.stringify(cart_array[i].variant) ==
                  JSON.stringify(this.selected_product_variant)
              ) {
                //add quantity
                console.log('update');
                console.log(i);

                this.$store.commit('updateCart', {index:i,quantity:this.add_to_card_qty})
                this.$router.push('/'+this.merchant_url+(this.$route.query.ref?'?ref='+this.$route.query.ref:'')); 
                this.add_to_cart_loading=false;
                

                this.add_to_card_qty=0;
                this.remark='';
                return;
              }
          }
            var new_item = {product_id:this.product_id, item_code:this.product_item_code, product_name:this.product_name, product_price:final_price, product_variation:this.product_variation,
            type:this.product_type,variant:this.selected_product_variant,remark:this.remark,quantity:this.add_to_card_qty,stock:this.stock,weight:this.weight};
            this.$store.commit('pushCart', new_item);
            // this.$router.push('/'+this.merchant_url+(this.$route.query.ref?'?ref='+this.$route.query.ref:'')); 
            this.$router.push('/'+this.merchant_url); 
            this.add_to_card_qty=1;
                this.remark='';

    },

    shop_button(){
          // console.log(window.history.length);
          // if(window.history.length > 3){
          //     this.$router.back()


              // this.$store.commit('', e.target.value)
          // }else{
              this.$router.push('/'+this.merchant_url); 
              // this.$router.push('/'+this.merchant_url+(this.$route.query.ref?'?ref='+this.$route.query.ref:'')); 

          // }
    },

    text_color_auto(hexcolor) {
      // If a leading # is provided, remove it
      if (hexcolor.slice(0, 1) === "#") {
        hexcolor = hexcolor.slice(1);
      }

      // If a three-character hexcode, make six-character
      if (hexcolor.length === 3) {
        hexcolor = hexcolor
          .split("")
          .map(function (hex) {
            return hex + hex;
          })
          .join("");
      }

      // Convert to RGB value
      var r = parseInt(hexcolor.substr(0, 2), 16);
      var g = parseInt(hexcolor.substr(2, 2), 16);
      var b = parseInt(hexcolor.substr(4, 2), 16);

      // Get YIQ ratio
      var yiq = (r * 299 + g * 587 + b * 114) / 1000;

      // Check contrast
      return yiq >= 128 ? false : true;
    },

    vibrate(){
      // window.navigator.vibrate(25); 
      const canVibrate = window.navigator.vibrate
      if (canVibrate) {window.navigator.vibrate(25)}
    },
    
    update_visitor(merchant_id,date) {
      const params = new URLSearchParams();
      params.append("update_visitor", 'update_visitor');
      params.append("merchant_id", merchant_id);
      params.append("date", date);

      axios({
        method: "post",
        url: this.domain + "/form/index.php",
        data: params,
      })
        .then((response) => {
          console.log(response);
        
        })
        .catch((error) => {
          console.log(error);
        });
    },

    update_product_visitor(merchant_id,date,product_id) {
      const params = new URLSearchParams();
      params.append("update_product_visitor", 'update_visitor');
      params.append("merchant_id", merchant_id);
      params.append("date", date);
      params.append("product_id", product_id);

      axios({
        method: "post",
        url: this.domain + "/form/index.php",
        data: params,
      })
        .then((response) => {
          console.log(response);
        
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async copy_link(mytext) {
      try {
        await navigator.clipboard.writeText(mytext);
        this.copy_status=true;
      } catch($e) {
        this.copy_status=false;
      }
    },
    update_add_on_total_price(){
      var total=0;
              // console.log(this.product_variation[i].variation[g]?JSON.stringify(this.product_variation[i].variation[g]):'');

      for(var i=0; i<this.product_variation.length; i++){
          for(var g=0; g<this.product_variation[i].variation.length; g++){

            if(this.product_variation[i].variation[g].quantity==1){

              total=total+parseFloat(this.product_variation[i].variation[g].price);
              console.log('fsfs'+JSON.stringify(this.product_variation[i].variation[g]));

            }

          }
          if(i==this.product_variation.length-1){
            console.log('totala'+total);
            this.product_variation_total=total;
          }
      }
    },
    check_json(s){
     try {
        JSON.parse(s, function(k, v) {
          if (k === "" && typeof v === "number") {
            throw "Invalid JSON";
          }
          return v;
        });
        return true;
      } catch (e) {
        return false;
      }
    },
    variant_actual_price(price){

      if(this.check_json(price)){

           var price=JSON.parse(price);

          for(var i=0; i<price[0].tier.length; i++){

              if(price[0].tier[i].tier_id==this.tier_id){

                if(parseFloat(price[0].price_type)==0){
                    if(price[0].tier[i].rate==''){


                        if(this.global_status==0){
                            if(this.global_type==0){
                              return (parseFloat(price[0].normal)-(parseFloat(price[0].normal)*parseFloat(this.global_rate)/100)).toFixed(2);
                                
                            }else {
                                  var p=parseFloat(price[0].normal)-parseFloat(this.global_rate);
                                  if(p<0){
                                    return 0;
                                  }else{
                                    return p.toFixed(2);
                                  }
                                  break;
                            }
                          }else{
                            
                            return parseFloat(price[0].normal).toFixed(2);
                            
                          }


                      //  return parseFloat(price[0].normal)  
                  }
                  return (parseFloat(price[0].normal)-
                  (parseFloat(price[0].normal)*parseFloat(price[0].tier[i].rate)/100)).toFixed(2);
                  

                }else{
                    if(price[0].tier[i].rate==''){

                      if(this.global_status==0){
                            if(this.global_type==0){
                              return (parseFloat(price[0].normal)-(parseFloat(price[0].normal)*parseFloat(this.global_rate)/100)).toFixed(2);
                                
                            }else {
                                  var p=parseFloat(price[0].normal)-parseFloat(this.global_rate);
                                  if(p<0){
                                    return 0;
                                  }else{
                                    return p.toFixed(2);
                                  }
                                  break;
                            }
                          }else{
                            
                            return parseFloat(price[0].normal).toFixed(2);
                            
                          }
                      //  return parseFloat(price[0].normal)  
                  }
                  var p= parseFloat(price[0].normal)-(parseFloat(price[0].tier[i].rate));

                    if(p<0){
                      return 0;
                    }else{
                      return p.toFixed(2);
                    }
              
              
                }
              // console.log('pricekeke:'+ this.product_price);

              //  this.product_price=parseFloat(price[0].normal);

              }
              if(i==price[0].tier.length-1){
             

                        if(this.global_status==0){
                            if(this.global_type==0){
                            return (parseFloat(price[0].normal)-
                              (parseFloat(price[0].normal)*parseFloat(this.global_rate)/100)).toFixed(2);
                            }else {
                                var p=parseFloat(price[0].normal)-(parseFloat(this.global_rate));
                                  
                                  if(p<0){
                                    return 0;
                                  }else{
                                    return p.toFixed(2)
                                  }

                            }
                            
                          }else{      
                              // variant , no tier found, no global
                              
                              return parseFloat(price[0].normal).toFixed(2);

                          }


              }


          }

            
          }else{

                 if(this.global_status==0){
                            if(this.global_type==0){
                              return (parseFloat(price)-(parseFloat(price)*parseFloat(this.global_rate)/100)).toFixed(2);
                               
                            }else {
                                  var p= parseFloat(price)-parseFloat(this.global_rate);
                                    if(p<0){
                                    return 0;
                                  }else{
                                    return p.toFixed(2);
                                  }
                         
                            }
                      }else{
                            return parseFloat(price).toFixed(2);
                    }

                 


          }

    },
    check_ref_tier(ref){
        //api check tier
   

          const params = new URLSearchParams();
          params.append("check_tier", '1');
          params.append("ref", ref);
          params.append("merchant_id", this.merchant_id);
      

          axios({
            method: "post",
            url: this.domain + "/order/index.php",
            data: params,
          })
            .then((response) => {
              console.log(response);
               if (response.data.status == "1") {
                localStorage.ref=ref; 
                this.tier_id=response.data.data[0].tier_id;
                this.global_rate=response.data.data[0].global_rate;
                this.global_status=response.data.data[0].global_status;
                this.global_type=response.data.data[0].global_type;
                this.product_setup();
                
               }else{
                localStorage.ref=''; 
                this.tier_id=null;
                this.global_rate=null;
                this.global_status=null;
                this.global_type=null;
                this.product_setup();
                

               }
            })
            .catch((error) => {
              console.log(error);
            });

    },
    product_setup(){
       this.product_variant = this.check_json(this.product_variant)?JSON.parse(this.product_variant):[];
    
        //variant product
        if (this.product_variant!=='' &&this.product_type=='1') {
          
          if(this.check_json(this.product_variant[0].price)){

            var price=JSON.parse(this.product_variant[0].price);

          for(var i=0; i<price[0].tier.length; i++){

              if(price[0].tier[i].tier_id==this.tier_id){


                if(parseFloat(price[0].price_type)==0){

                    if(price[0].tier[i].rate==''){


                      if(this.global_status==0){
                            if(this.global_type==0){
                              this.product_price=(parseFloat(price[0].normal)-(parseFloat(price[0].normal)*parseFloat(this.global_rate)/100)).toFixed(2);
                                break;
                            }else {
                                  this.product_price=(parseFloat(price[0].normal)-parseFloat(this.global_rate)).toFixed(2);
                                  if(this.product_price<0){
                                    this.product_price=0;
                                  }
                                  break;
                            }
                          }else{
                            this.product_price=parseFloat(price[0].normal).toFixed(2);
                            break;
                          }

                        
                        // this.product_price=parseFloat(price[0].normal)  

                        break;
                   }

                  this.product_price=(parseFloat(price[0].normal)-
                  (parseFloat(price[0].normal)*parseFloat(price[0].tier[i].rate)/100)).toFixed(2);

                  break;

                }else{
                    if(price[0].tier[i].rate==''){
                      
                      if(this.global_status==0){
                            if(this.global_type==0){
                              this.product_price=(parseFloat(price[0].normal)-(parseFloat(price[0].normal)*parseFloat(this.global_rate)/100)).toFixed(2);
                                break;
                            }else {
                                  this.product_price=(parseFloat(price[0].normal)-parseFloat(this.global_rate)).toFixed(2);
                                  if(this.product_price<0){
                                    this.product_price=0;
                                  }
                                  break;
                            }
                          }else{
                            this.product_price=parseFloat(price[0].normal).toFixed(2);
                            break;
                          }


                        // this.product_price=parseFloat(price[0].normal)  
                        break;
                  }

                  this.product_price=(parseFloat(price[0].normal)-(parseFloat(price[0].tier[i].rate))).toFixed(2);

                  if(this.product_price<0){
                    this.product_price=0;
                  }
                 
                  break;
                }
              // console.log('pricekeke:'+ this.product_price);

                //  this.product_price=parseFloat(price[0].normal);

              }
              if(i==price[0].tier.length-1){
                  console.log('reach7');
       
                
                        if(this.global_status==0){
            
                            if(this.global_type==0){


                          this.product_price=(parseFloat(price[0].normal)-
                            (parseFloat(price[0].normal)*parseFloat(this.global_rate)/100)).toFixed(2);
                    
                            }else {
                                this.product_price=(parseFloat(price[0].normal)-(parseFloat(this.global_rate))).toFixed(2);
                                  
                                  if(this.product_price<0){
                                     this.product_price=0;
                                  }

                            }
                            
                          }else{      
                              // variant , no tier found, no global
                              
                              this.product_price=parseFloat(price[0].normal).toFixed(2);

                          }


              }


          }

            
          }else{
       

              
            if(this.global_status==0){
                            if(this.global_type==0){
                              this.product_price=(parseFloat(this.product_variant[0].price)-(parseFloat(this.product_variant[0].price)*parseFloat(this.global_rate)/100)).toFixed(2);
                               
                            }else {
                                  this.product_price=(parseFloat(this.product_variant[0].price)-parseFloat(this.global_rate)).toFixed(2);
                                  if(this.product_price<0){
                                    this.product_price=0;
                                  }
                         
                            }
                          }else{
                            this.product_price=parseFloat(this.product_variant[0].price).toFixed(2);
               }







                  // this.product_price=this.product_variant[0].price;
                  //  if(this.product_price<0){
                  //   this.product_price=0;
                  // }
                for(var h=0; h<this.product_variant.length;h++){
                Object.assign(this.product_variant[h], {selected: false});

                }
                this.product_variant[0].selected=true;
                console.log('pricezezee:'+ this.product_price);

          }



      }else{

          console.log('reach9');
    
        //not variant product
         
        if(this.check_json(this.price)){
            //not variant product and price json
 
            this.price=JSON.parse(this.price);
            

          for(var i=0; i<this.price[0].tier.length; i++){

              if(this.price[0].tier[i].tier_id==this.tier_id){

                if(this.price[0].price_type==0){

                    if(this.price[0].tier[i].rate==''){
                        // this.product_price=parseFloat(this.price[0].normal)  
                        if(this.global_status==0){
                            if(this.global_type==0){
                              this.product_price=(parseFloat(this.price[0].normal)-(parseFloat(this.price[0].normal)*parseFloat(this.global_rate)/100)).toFixed(2);
                                break;
                            }else {
                                  this.product_price=(parseFloat(this.price[0].normal)-parseFloat(this.global_rate)).toFixed(2);
                                  if(this.product_price<0){
                                    this.product_price=0;
                                  }
                                  break;
                            }
                          }else{
                            this.product_price=parseFloat(this.price[0].normal).toFixed(2);
                            break;
                          }


                        break;
                  }


                  this.product_price=(parseFloat(this.price[0].normal)-
                  (parseFloat(this.price[0].normal)*parseFloat(this.price[0].tier[i].rate)/100)).toFixed(2);
                  console.log('hehe1');
                  break;

                }else {
                  if(this.price[0].tier[i].rate==''){
                        // this.product_price=parseFloat(this.price[0].normal)  

                         if(this.global_status==0){
                            if(this.global_type==0){
                              this.product_price=(parseFloat(this.price[0].normal)-(parseFloat(this.price[0].normal)*parseFloat(this.global_rate)/100)).toFixed(2);
                                break;
                            }else {
                                  this.product_price=(parseFloat(this.price[0].normal)-parseFloat(this.global_rate)).toFixed(2);
                                  if(this.product_price<0){
                                    this.product_price=0;
                                  }
                                  break;
                            }
                          }else{
                            this.product_price=parseFloat(this.price[0].normal).toFixed(2);
                            break;
                          }
                        break;
                  }
                  this.product_price=(parseFloat(this.price[0].normal)-(parseFloat(this.price[0].tier[i].rate))).toFixed(2);

                  if(this.product_price<0){
                    this.product_price=0;
                  }

                  break;
                }

              } 
                // not variant, no tier found check global
              if(i ==this.price[0].tier.length-1){

                        if(this.global_status==0){
                            if(this.global_type==0){
                              this.product_price=(parseFloat(this.price)-(parseFloat(this.price)*parseFloat(this.global_rate)/100)).toFixed(2);
                    
                            }else {
                                  this.product_price=(parseFloat(this.price)-parseFloat(this.global_rate)).toFixed(2);
                                  if(this.product_price<0){
                                    this.product_price=0;
                                  }
                            }
                          }else{
                            this.product_price=parseFloat(this.price[0].normal).toFixed(2);
                          }

              }

              
          }

        }else{
          // not variant and price not json
          if(this.global_status==0){
            
            if(this.global_type==0){

              this.product_price=(parseFloat(this.price)-(parseFloat(this.price)*parseFloat(this.global_rate)/100)).toFixed(2);
    
             }else {

                  this.product_price=(parseFloat(this.price)-parseFloat(this.global_rate)).toFixed(2);
                  
                  if(this.product_price<0){
                    this.product_price=0;
                  }

            }
            
          }else{

            this.product_price=parseFloat(this.price).toFixed(2);

          }
          
        }
      }
        this.setup_done=true;
        this.update_add_on_total_price();
    }



  },
};
</script>
<style>
.product-add-to-cart {
  box-shadow: 0 2px 28px 0 rgb(0 0 0 / 12%) !important;

  background: #fff !important;
}
.vnis__button {
  background: #e8e8e8!important;
  -webkit-appearance: none;
  transition: background 0.5s ease;
  border: 0;
  border-radius: 4px;
  color: #000 !important;
  cursor: pointer;
  float: left;
  font-size: 21px!important;
  margin: 0;
  width: 30px !important;
  height: 30px !important;
}

.vnis__input {
  height: 30px !important;
  width: calc(100% - 60px) !important;
  font-weight: 500!important;
}
.product-topping-list .product-topping-list-tag {
  font-size: 0.8rem !important;
}
.product-topping-list .product-topping-list-title {
  font-size: 1.3rem !important;
}
.required-list {
  background: #4caf50 !important;
  color: #ffffff !important;
}
.product-topping-list .product-topping-list-tag {
  background-color: rgb(178 189 255);
  color: #ffffff;
}
.product-topping-list .product-topping-list-indication {
  font-size: 0.9rem !important;
}
.stock_available{
  font-size: 12px !important;
  color: #757575;
  font-weight:400;
  align-self: center;
}
.close {
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.6;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #ffffff;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

.strikethrough-diagonal {
	 position: relative;
	 color: #55555599;
      font-weight:300;
      font-size:16px;
}
 .strikethrough-diagonal:before {
	 position: absolute;
	 content: '';
	 left: 0;
	 top: 45%;
	 right: 0;
	 border-top: 1px solid;
	 border-color: inherit;
	 -webkit-transform: skewY(-10deg);
	 -moz-transform: skewY(-10deg);
	 transform: skewY(-10deg);
}

iframe {
margin:auto;
position: fixed;
right: 0;
bottom: 0;
top:0;
left:0;
min-width: 70%;
min-height: 70%;
width: auto;
height: auto;
background-size: cover;
}
.price-font {
    font-family: "Montserrat", sans-serif;
}
.copy-text input {
          font-size: 12px;
    font-weight: 600;
    color: #444;
 
    }
    .copy-text {
    border-color:#eee!important;
    }

 .copy-text.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)
    > .v-input__control
    > .v-input__slot
    fieldset {
    color: #eee;
  }

</style>