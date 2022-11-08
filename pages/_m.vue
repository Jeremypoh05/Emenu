<template>
  <div class="menu is-mobile" >
  
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <meta name="google" content="notranslate">
    <meta name="theme-color" :content="theme_color" />
       <v-overlay :value="ipay_overlay" z-index="999999">
        <v-progress-circular
          indeterminate
          size="64"
        ></v-progress-circular>
          </v-overlay>
         
    <div class="page-wrapper">
      <div class="content-wrapper menu-bg">
        <main>
          <div class="page-container">
            
            <section
              class="vendor-section"
              id="category-all"
              :style="'background:' + theme_color"
            >
          <div v-if="news_ticker!=='' && check_json(news_ticker)" >
              <div v-if="JSON.parse(news_ticker).display==true">
                <div class="d-flex ">
                <div style="background:#3d3d3d;width:10%;text-align:center" >
                  <v-icon dark  class="pa-1">mdi-bullhorn</v-icon>
                  </div>
              <marquee bgcolor="#3d3d3d" class="pa-1" style="color:#ffffff" width="90%"><strong>{{JSON.parse(news_ticker).content}}</strong></marquee>
                </div>

              </div>
          </div>
              <div
                v-if="alert_item_added"
                id="div_block-651-440"
                class="ct-div-block"
                style="display: block; background-color: #4caf50; height: 45px"
              >
                <div id="text_block-663-440" class="ct-text-block" >
                  Item Added
                </div>
              </div>

              <div
                v-if="store_closed"
                id="div_block-651-440"
                class="ct-div-block"
                style="display: block; background-color: #e0e0e0; height: 45px"
              >
                <div id="text_block-663-440" class="ct-text-block" style="color:#b1b1b1">
                  {{$t('store-closed')}}
                </div>
              </div>

                                  
           
              <v-row  style="margin: unset"  justify="center">

                <v-col style="padding: unset" xl="6" lg="8" cols="12">
              <div class="videoWrapper" v-if="banner_status == 1">
                    <iframe
                      :src="banner_video_link"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                      <v-expand-transition hide-on-leave>
                <v-row no-gutters  justify="end" style="height:100%">
                    <v-col cols="1" >
                      <div class="subtitle-2 text-center" style="color:white"> <lang></lang>
              </div>
                    </v-col>
                  </v-row>
                </v-expand-transition>
              </div>
              <div v-if="banner_status == 0 && check_json(form_image)">
                <v-row no-gutters  justify="end" style="height:100%;z-index:9999;position:relative" >
                    <v-col cols="1" >
                      <div class="subtitle-2 text-center" style="color:white"> <lang></lang>
                    </div>
                    </v-col>
                  </v-row>
            <v-row dense no-gutters>
              <v-col cols="12" >
              <v-carousel width="100%" class="banner-slider" cycle height="auto" >
                  
                    <v-carousel-item
                      v-for="(img, i) in JSON.parse(form_image)"
                      :key="i">
                    
                      <v-img
                        v-if="banner_status == 0"
                        dense
                        :src="domain + 'product/image.php?m='+merchant_id+'&type=banner&im=' + img.image"
                        cover
                        min-height="250px"
                        max-height="550px"
                      ></v-img>
                    </v-carousel-item>

              </v-carousel>
              </v-col>
              </v-row>

              </div>
              <div  v-if="banner_status == 0 && !check_json(form_image)" >
                  <v-img
                    dense
                    :src="domain + 'product/image.php?m='+merchant_id+'&type=banner&im=' + form_image"
                    cover
                    min-height="250px"
                    max-height="550px"
                  >

            <v-expand-transition hide-on-leave>
             <v-row no-gutters  justify="end" style="height:100%">
                <v-col cols="1" >
                  <div class="subtitle-2 text-center" style="color:white"> <lang></lang>
                </div>
                </v-col>
              </v-row>
            </v-expand-transition>
                  </v-img>
                  </div>
                  <!-- <p>{{ $t("title") }}</p> -->
                </v-col>
                <v-col cols="12" style="padding: unset">
                 
                  <div class="vendor-info-container">
                    <div class="vendor-info-main hreview-aggregate">
                      <div class="vendor-info-main-headline item">
                        <h1 class="fn">{{ form_title }}</h1>
                      
                      </div>

                      <div class="vendor-info-main-details">
                        <div
                          class="vendor-info-main-details-cuisines-container summary"
                        >
                          <div v-html="form_description"></div>

                          <!-- <ul class="vendor-info-main-details-cuisines">
                            <li></li>

                            <li>{{ company_address }}</li>
                            <li>{{ company_tel }}</li>
                          </ul> -->
                          
                        </div>
                      </div>
                      <!-- <v-row justify="start">
                        <v-btn
                            style="min-width:35px; width:35px;height:35px;"
                            class="ma-2 mt-4"
                            tile
                            dark
                            small
                            color="#00e676"
                            @click="contact_store()"
                          >
                            <v-icon dark>
                              mdi-whatsapp
                            </v-icon>
                          </v-btn>

                
                      </v-row> -->
                      <!-- <div class="vendor-info-main-details">
                        <div
                          class="vendor-info-main-details-cuisines-container summary"
                        >
                          <ul class="vendor-info-main-details-cuisines">
                            <li></li>
                            <li>{{ tax_word }}</li>
                          </ul>
                        </div>
                      </div> -->
                    </div>
                  </div>
                </v-col>
                   <!-- <v-col cols="12" class="pa-0" >
                    <div style="background:#ffffff;position:sticky" class="">
                              <v-text-field
                      v-model="search_content"
                      background-color="#eeeeee"
                      class="search-field"
                      name="search"
                      style="background-color:#eeeeee"
                      solo
                      dense
                      @click:clear="clear_search_content"
                      :label="$t('search')+'...'"
                      prepend-inner-icon="mdi-magnify"
                      clearable
                      
                      hide-details
                    >
                    </v-text-field>
                    <nav class="dish-menu-category-list mt-2 ml-4 pr-4" >
                    
                    
                      <div  v-if="!searching">
                        <div class="nav-holder mr-4" >

                          <scrollactive active-class="category-items-selected" style="height:52px;" 
                            ><ul class="pl-0 pr-0 scollul" >
                              <li
                                v-for="(category, index) in categories"
                                :key="index"
                                class="pa-0"
                                
                              >
                                <a @click="vibrate()"
                                  :href="'#category-' + category.name"
                                  class="scrollactive-item nav-item category-items"
                                  style="font-size:12px;display:flex;height:35px;font-weight:700;color:#6c757d"
                                  >
                                  {{ category.name }}({{
                                    category.count_row
                                  }})</a
                                >
                              </li>
                            </ul></scrollactive
                          >
                        </div>
                      </div>
                    </nav>
                  </div>

                </v-col> -->
                <!-- <v-col cols="12" >
                    <div style="background:#ffffff">
                              <v-text-field
                      v-model="search_content"
                      background-color="#eeeeee"
                      class="search-field ml-4 mr-4"
                      name="search"
                      style="background-color:#eeeeee"
                      solo
                      @click:clear="clear_search_content"
                      :label="$t('search')+'...'"
                      prepend-inner-icon="mdi-magnify"
                      clearable
                      
                      hide-details
                    >
                    </v-text-field>
                  </div>
                </v-col> -->
                   
              </v-row>
              <v-row>
              </v-row>
                <div class="menu__blocks-wrapper">
                <div class="menu__blocks">
    
                  <div class="menu__list-wrapper" >
                   

                    <nav class="dish-menu-category-list" >
                      <div style="background:#ffffff" class="mr-0 mb-1">
                              <v-text-field
                      v-model="search_content"
                      :loading="search_loading"
                      background-color="#eeeeee"
                      color="#000000"
                      class="search-field ml-4 mr-4 mt-4 mb-3"
                      name="search"
                      style="background-color:#eeeeee"
                      solo
                      @click:clear="clear_search_content"
                      :label="$t('search')+'...'"
                      prepend-inner-icon="mdi-magnify"
                      clearable
                      
                      hide-details
                    >
                    </v-text-field>
                  </div>
                    
                      <div  v-if="!searching">
                        <div class="nav-holder ml-3 mr-3" >
                          

                          <scrollactive active-class="category-items-selected" style="height:52px;" 
                            ><ul class="pl-0 pr-0 scollul" >
                              <li
                                class="pa-0"
                                
                              >
                                <a @click="vibrate()"
                                 :href="'#category-all'"
                                  class="scrollactive-item nav-item category-items"
                                  style="font-size:12px;display:flex;height:35px;font-weight:700;color:#6c757d"
                                  >
                                  {{$t('all')}}</a
                                >
                              </li>

                              <li
                                v-for="(category, index) in categories"
                                :key="index"
                                class="pa-0"
                                
                              >
                                <a @click="vibrate()"
                                  :href="'#category-' + category.category_id"
                                  class="scrollactive-item nav-item category-items"
                                  style="font-size:12px;display:flex;height:35px;font-weight:700;color:#6c757d"
                                  >
                                  {{ category.name }}({{
                                    category.count_row
                                  }})</a
                                >
                              </li>
                            </ul></scrollactive
                          >
                        </div>
                      </div>
                    </nav>

                    <div class="menu__list" v-if="!searching">
          

                      <section
                        class="menu__items-wrapper"
                        :style="
                          !theme_color
                            ? 'background: f7f7f7;'
                            : 'background:' + theme_color
                        "
                      >
                          <popular_category v-if="enable_feature=='0'" :category_name="feature_label" :get_params="route_param"
                          :items="product_feature" :merchant_url="merchant_url" :merchant_id="merchant_id" :domain="domain"></popular_category>
                        <div class="menu__items" v-if="items.length > 0">
                          <!-- category + product -->
                          <div
                            class="dish-category-section"
                            style="margin: 10px"
                            v-for="category_product in categories"
                            :key="category_product.category_id"
                            :id="'category-' + category_product.category_id"
                          >
                            <div class="dish-category-section__inner-wrapper">
                              <h2 class="dish-category-title">
                                {{ category_product.name }}
                              </h2>

                              <ul class="dish-list scollul">
                                <!-- product -->
                                <template v-for="product in items">
                                  <li
                                    :class="[
                                      grid
                                        ? 'dish-card dish-card-grid-overwrite'
                                        : 'dish-card',
                                    ]"
                                    :key="product.product_id"
                                    v-if="
                                      category_product.category_id ==
                                      product.category_id
                                    "
                                    @click="product_onclick(product.product_id,product.slug)"
                                  >
                                    <span class="item-react-root">
                                      <div
                                        :class="[
                                          grid
                                            ? 'dish-info-container with-image dish-info-container-grid-overwrite'
                                            : 'dish-info-container with-image',
                                        ]"
                                      >
                                        <div
                                          :class="[
                                            grid
                                              ? 'dish-info dish-info-grid-overwrite'
                                              : 'dish-info',
                                          ]"
                                        >
                                          <h2
                                            class=""
                                            :class="[
                                              grid
                                                ? 'dish-name fn p-name dish-name-grid-overwrite'
                                                : 'dish-name fn p-name',
                                            ]"
                                          >
                                            <span :style="'color:' + p_color" style="font-size:13px;">{{
                                              product.name
                                            }}</span>
                                          </h2>
                                          <p
                                            class="dish-description e-description ingredients" 
                                          > 
                                          <span v-html="product.description"> </span>
                                          </p>
                                        </div>
                                        <picture>
                                          <div

                                            :style="{
                                              'background-image':
                                                'url(' +
                                                domain +
                                                '/product/image.php?m='+merchant_id+'&type=product_list&im=' +
                                               (product.image).replace(/\s+/g, '%20') +
                                                ')', 'witdh':'98px!important;'
                                            }"
                                            class="photo u-photo b-lazy b-loaded "
                                          >
                                            <v-overlay
                                          :absolute="true"
                                          :value="true"
                                          v-if="product.in_stock==false"
                                          >
                                           <!-- <v-img cover src="@/assets/images/sold-out.png">
                                           </v-img> -->
                                        <img style="width:100%; flex: 0 0 0%;" src="@/assets/images/sold-out.png" />

                                          </v-overlay>
                                          </div>
                                          <div

                                         
                                            :style="{
                                              'background-image':
                                                'url(' +
                                                domain +
                                                '/product/image.php?m='+merchant_id+'&type=product_list&im=' +
                                               (product.image).replace(/\s+/g, '%20') +
                                                ')',
                                            }"
                                            class="photo u-photo b-lazy b-loaded"
                                          ></div>
                                          <!-- <div
                                          :style="{
                                            'background-image':
                                              'url(' +
                                              domain +
                                              'image/image.php?f=' + 
                                              company_folder +
                                              '&im=' +
                                              product.inv_image +
                                              ')',
                                          }"
                                          class="photo u-photo b-lazy b-loaded"
                                        ></div> -->
                                        </picture>
                                      </div>
                                      <section class="action-bar">
                                        <div class="action-bar-content">
                                          <div class="price-tags-container">
                                             <span class="strikethrough-diagonal" v-if="product.original_price!=='' ">RM{{ parseFloat(product.original_price).toFixed(2)}}&nbsp;</span>
                                            <span class="price p-price" v-if="product.display_price=='' ">
                                         

                                              RM{{
                                                parseFloat(
                                                  product_actual_price(product.price)
                                                ).toFixed(2)
                                              }}</span>
                                              <span class="price p-price"  v-if="product.display_price!==''">
                                                {{product.original_price!==''?'RM':'From RM'}}
                                              {{
                                                  product.display_price
                                              }}</span>

                                            <div class="tags-container"></div>
                                          </div>
                                        </div>
                                        <!-- <button class="button" @click="product_onlick(product.product_id)"><v-icon>mdi-plus</v-icon></button> -->
                                        <!-- <v-btn tile x-small :color="p_color" :dark="p_dark" width="24px" height="24px" min-width="24px">+</v-btn> -->
                                      </section>
                                    </span>

                                  </li>
                                </template>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div v-else style="height: 460px">
                          <v-row justify="center" align="center">
                            <v-img
                              :src="domain + 'no-image-found.png'"
                              height="50%"
                              max-width="500px"
                            ></v-img>
                          </v-row>
                        </div>
                      </section>
                    </div>

                    <div class="menu__list" v-if="searching">
                      <section
                        class="menu__items-wrapper"
                        :style="
                          !theme_color
                            ? 'background: f7f7f7;'
                            : 'background:' + theme_color
                        "
                      >
                        <div class="menu__items">
                          <!-- category + product -->
                          <div
                            class="dish-category-section"
                            style="margin: 10px"
                          >
                            <div class="dish-category-section__inner-wrapper">
                              <h2 class="dish-category-title">
                                
                                {{$t('search-result')}}
                                <div
                                  style="font-size: 1.4rem; font-weight: 400"
                                >
                                  {{
                                    searched_items.length > 0
                                      ? searched_items.length +
                                       
                                        $t('item-found')+
                                        search_content
                                      : $t('0-item-found')
                                  }}
                                </div>
                             

                              </h2>

                              <ul class="dish-list ">
                                <div v-if="searched_items.length==0" style="height:600px;">

                                </div>
                                <!-- product -->
                                <template v-for="product in searched_items">
                                  <li
                                    :class="[
                                      grid
                                        ? 'dish-card dish-card-grid-overwrite'
                                        : 'dish-card',
                                    ]"
                                    :key="product.product_id"                                  
                                    @click="product_onclick(product.product_id,product.slug)" 
                                  >
                                 
                                    <span class="item-react-root">
                                      <div
                                        :class="[
                                          grid
                                            ? 'dish-info-container with-image dish-info-container-grid-overwrite'
                                            : 'dish-info-container with-image',
                                        ]"
                                      >
                                        <div
                                          :class="[
                                            grid
                                              ? 'dish-info dish-info-grid-overwrite'
                                              : 'dish-info',
                                          ]"
                                        >
                                          <h2
                                            class=""
                                            :class="[
                                              grid
                                                ? 'dish-name fn p-name dish-name-grid-overwrite'
                                                : 'dish-name fn p-name',
                                            ]"
                                          >
                                            <span>{{ product.name }}</span>
                                          </h2>
                                          <p
                                            class="dish-description e-description ingredients"
                                          >
                                            {{ product.description }}
                                          </p>
                                        </div>
                                        <picture>
                                          <div
                                            :style="{
                                              'background-image':
                                                'url(' +
                                                domain +
                                                '/product/image.php?m='+merchant_id+'&type=product_list&im=' +
                                                product.image +
                                                ')',
                                            }"
                                            class="photo u-photo b-lazy b-loaded"
                                          >
                                          <v-overlay
                                          :absolute="true"
                                          :value="true"
                                          v-if="product.in_stock==false"
                                          >
                                           <!-- <v-img cover src="@/assets/images/sold-out.png">
                                           </v-img> -->
                                        <img style="width:85px; flex: 0 0 0%;" src="@/assets/images/sold-out.png" />

                                          </v-overlay>
                                          
                                          </div>
                                           
                                          <!-- <div
                                          :style="{
                                            'background-image':
                                              'url(' +
                                              domain +
                                              'image/image.php?f=' +
                                              company_folder +
                                              '&im=' +
                                              product.inv_image +
                                              ')',
                                          }"
                                          class="photo u-photo b-lazy b-loaded"
                                        ></div> -->
                                        </picture>
                                      </div>
                                      <section class="action-bar">
                                        <div class="action-bar-content">
                                          <div class="price-tags-container">
                                             <span class="strikethrough-diagonal" v-if="product.original_price!=='' ">RM{{ parseFloat(product.original_price).toFixed(2)}}&nbsp;</span>
                                            <!-- <span class="price p-price">
                                              RM{{ product.price }}</span
                                            > -->

                                              <span class="price p-price" v-if="product.display_price==''">
                                              RM{{
                                                parseFloat(product_actual_price(product.price)
                                                ).toFixed(2)
                                              }}</span>
                                              <span class="price p-price"  v-if="product.display_price!==''">
                                                      {{product.original_price!==''?'RM':'From RM'}}
                                              {{
                                                  product.display_price
                                              }}</span>



                                            <div class="tags-container"></div>
                                          </div>
                                        </div>
                                        <!-- <button class="button" @click="product_onlick()">Add</button> -->
                                      </section>
                                    </span>
                                  </li>
                                </template>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>

              <div class="ma-10" height="20px"></div>

              <!-- <div :style="!theme_color ? 'background: f7f7f7;' : 'background:'+theme_color" height="20px"></div> -->
              <footer
                v-if="parseFloat(catalog_mode)==1"
                class="v-footer v-sheet theme--light v-footer--inset product-add-to-cart"
                style="
                  left: 0px;
                  right: 0px;
                  bottom: 0px;
                  position: fixed;
                  height: 55px;
                  z-index:99;
                "
              >
                <v-btn
                  :color="p_color"
                  :dark="p_dark"
                  @click="open_cart()"
                  style="font-size: 14px !important; align-self: center"
                  >{{ $t("view-cart") }} </v-btn
                >
                <v-spacer></v-spacer>
                <client-only>
                  <div class="mr-3 ct-code-block" style="font-size: 18px">
                    RM
                    <span class="total-cart-cost">
                      <number
                        :to="product_fee"
                        :format="theFormat"
                        :duration="1.5"
                        :delay="0.1"
                        easing="Power1.easeOut"
                    /></span>
                  </div>
                </client-only>
              </footer>
              <!-- <div id="div_block-659-440" class="ct-div-block">
                

                <div id="div_block-661-440" class="ct-div-block spacer"></div>
                <div id="code_block-662-440" class="ct-code-block">
                  RM
                  <client-only>
                    <span class="total-cart-cost">
                      <number
                        :to="product_fee"
                        :format="theFormat"
                        :duration="1.5"
                        :delay="0.1"
                        easing="Power1.easeOut"
                    /></span>
                  </client-only>
                </div>
              </div> -->
            </section>
          </div>
        </main>
      </div>
    </div>
    <!-- dine in cart dialog -->

        <v-dialog
          v-model="dialog_table_cart"
          v-if="dialog_table_cart"
          max-width="500px"
          width="auto"
          :fullscreen="$vuetify.breakpoint.xsOnly"
          scrollable
          persistent
          transition="dialog-bottom-transition"
      >

        <v-card class="no-overflowy">
          <v-toolbar dark color="white" style="flex: none">
            <v-btn icon @click="(dialog_table_cart = false)">
              <v-icon style="color: #2c5a88 !important">mdi-close</v-icon>
            </v-btn>
            <div class="cart-summary-header">
              <h3 class="cart-summary-header-title">{{$t('check-order')}}</h3>
            </div>
            <v-spacer></v-spacer>

            <v-btn color="#f44336"  style="font-size: 9px;" tile small @click="clear_cart_item()">{{$t('clear-cart')}}</v-btn>
          </v-toolbar>

        <v-card-text >
          <div class="cart-summary-items--wrapper">
                

            <div class="cart-summary-group-item">
              <div class="cart-summary-items">
                <ul
                  class="box-flex cart-summary-item-list cart-summary-item-list--expanded cart-summary-item-list--nonborder scrollul"
                >
                  <li v-for="(item, index) in cart_items" :key="index">
                    <div class="product-row">
                      <div class="product-card">
                        <div class="product-card-attributes">
                          <div class="product-name-prices">
                            <div class="product-card-name">
                              {{ item.product_name }}
                            </div>
                            <div class="product-card-prices">
                              <div
                                class="product-card-price"
                                style="font-weight: 400"
                              >
                            

                                RM&nbsp;{{ parseFloat(item.product_price).toFixed(2) }}
                              </div>
                            </div>
                          </div>
                          <div class="product-card-description">
                            <div class="product-card-variations">
                              <span class="product-toppings">

                                <span
                                  v-for="(
                                    vr, idx
                                  ) in item.variant"
                                  :key="idx"
                                  >
                                    <div
                                      v-if="vr.selected==true"
                                    >
                                      <b>{{ vr.name }}</b> &nbsp;
                                    </div>
                                </span>

       


                                <span
                                  v-for="(
                                    product_variant, index2
                                  ) in item.product_variation"
                                  :key="index2"
                                  ><template
                                    v-for="(
                                      product_var, index3
                                    ) in product_variant.variation"
                                  >
                                    <div
                                      :key="index3"
                                      v-if="product_var.quantity > 0"
                                    >
                                      <b>{{ product_var.name }}</b> &nbsp;
                                      <span style="font-size: 1.1rem">
                                        +RM{{ parseFloat(product_var.price).toFixed(2) }}
                                      </span>
                                    </div>
                                  </template>
                                </span>
                              </span>
                              <div
                                v-if="
                                  item.remark.length > 0 &&
                                  item.product_variation.length > 0
                                "
                              >
                                <br />
                              </div>
                              <div
                                class="product-card-variations"
                                v-if="item.remark.length > 0"
                              >
                          
                                <span class="product-toppings">
                                  <b>NOTE:{{ item.remark }}</b>
                                </span>
                              </div>
                            </div>
                            
                            <div
                              class="instant-cart-manager-container"
                              id="cart_button"
                            >
                              <div class="vnis" style="align-self: center">
                                <button
                                  class="vnis__button"
                                  @click="minus_cart_quantity(index)"
                                >
                                  -
                                </button>
                                <input
                                  type="number"
                                  min="0"
                                  debounce="500"
                                  class="vnis__input"
                                  :value="item.quantity"
                                  max="9999"
                                  disabled
                                />
                                <button
                                  class="vnis__button"
                                  @click="
                                    add_cart_quantity(index, item.product_id)
                                  "
                                >
                                  +
                                </button>
                              </div>
                              <div
                                class="ml-2"
                                style="color: red; right: 0"
                                v-if="cart_checking_stock(item.product_id)"
                              >
                                ONLY
                                {{ cart_checking_stock(item.product_id) }} ITEMS
                                LEFT
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <v-divider class="mr-3 ml-3 mt-0 mb-0"></v-divider>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <v-row>
              <v-col cols="12">
                <v-card class="mx-auto">
                  <v-card-text>
                    <div
                      class="text-h5 mb-6"
                      style="
                        font-size: 1.5rem !important;
                        font-weight: 800;
                        letter-spacing: 0.0125em !important;
                      "
                    >
                      
                      {{$t('order-summary')}}
                    </div>
                    <div class="d-flex">
                      <div style="font-size: 14px">{{$t('subtotal')}}</div>
                      <div class="spacer"></div>
                      <div style="font-size: 14px">RM{{ parseFloat(product_fee).toFixed(2) }}</div>
                    </div>
                    <div
                      role="separator"
                      aria-orientation="horizontal"
                      class="my-2 theme--light"
                    />
                    <!-- <div class="d-flex mb-1">
                      <div style="font-size: 14px">{{$t('delivery-fee')}}</div>
                      <div class="spacer"></div>
                      <div style="font-size: 14px">
                        RM{{ parseFloat(delivery_fee).toFixed(2) }}
                      </div>
                    </div> -->

                    <div class="d-flex mb-1">
                      <div style="font-size: 14px">{{$t('coupon-discount')}}</div>
                      <div class="spacer"></div>
                      <div style="font-size: 14px">
                        - RM{{ parseFloat(discount_fee).toFixed(2) }}
                      </div>
                    </div>

                    <div class="d-flex mb-1">
                      <div style="font-size: 14px">
                        {{ tax_name ? tax_name : "Tax" }}
                      </div>
                      <div class="spacer"></div>
                      <div style="font-size: 14px">
                        RM{{ parseFloat(tax_fee).toFixed(2) }}
                      </div>
                    </div>
                    <hr
                      role="separator"
                      aria-orientation="horizontal"
                      class="my-2 v-divider theme--light"
                    />
                    <div class="d-flex text-h6 mb-1">
                      <div
                        style="
                          font-size: 1.5rem !important;
                          font-weight: 800;
                          letter-spacing: 0.0125em !important;
                        "
                      >
                        
                        {{$t('total')}}
                      </div>
                      <div class="spacer"></div>
                      <div
                        style="
                          font-size: 1.5rem !important;
                          font-weight: 800;
                          letter-spacing: 0.0125em !important;
                        "
                      >
                        RM {{ total_fee }}
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
          <v-card-actions 
          style="display: block !important; height: 58px"
          class="product-add-to-cart"
        >
          <v-row>
            <v-col cols="6">
                <v-btn
             
                :color="p_color"
                :dark="p_dark"
                style="font-size: 1.2rem !important"
                tile
                width="100%"
                @click="table_submit(),vibrate()"
                :disabled="cart_items.length > 0 || order_loading ==true? false : true"
                :loading="order_loading"
                ><v-icon small>mdi-cart-outline</v-icon>
                  {{$t('confirm')}}

              </v-btn>
            </v-col>

            <v-col cols="6">
              <v-btn
                :color="s_color"
                :dark="s_dark"
                style="font-size: 1.2rem !important"
                width="100%"
                tile
                @click="step == 2 ? (step = 1) : (dialog_cart = false),vibrate()"
              >
                {{$t('back')}}
              </v-btn>
            </v-col>
          </v-row>

        </v-card-actions>
      </v-card>
      
      
      
      </v-dialog>


    <!-- cart dialog -->
    <v-dialog
      v-model="dialog_cart"
      v-if="dialog_cart"
      max-width="500px"
      width="auto"
      :fullscreen="$vuetify.breakpoint.xsOnly"
      scrollable
      persistent
      transition="dialog-bottom-transition"
    >
      <v-card class="no-overflowy">
        <v-toolbar dark color="white" style="flex: none">
          <v-btn icon @click="(dialog_cart = false), (step = 1)">
            <v-icon style="color: #2c5a88 !important">mdi-close</v-icon>
          </v-btn>
          <div class="cart-summary-header">
            <h3 class="cart-summary-header-title">{{$t('check-order')}}</h3>
          </div>
          <v-spacer></v-spacer>

          <v-btn color="#f44336"  v-if="step==1" style="font-size: 9px;" tile small @click="clear_cart_item()">{{$t('clear-cart')}}</v-btn>
        </v-toolbar>

        <v-card-text v-if="step == 1">
          <div class="cart-summary-items--wrapper">


            <div class="cart-summary-group-item">
              <div class="cart-summary-items">
                <ul
                  class="box-flex cart-summary-item-list cart-summary-item-list--expanded cart-summary-item-list--nonborder scrollul"
                >
                  <li v-for="(item, index) in cart_items" :key="index">
                    <div class="product-row">
                      <div class="product-card">
                        <div class="product-card-attributes">
                          <div class="product-name-prices">
                            <div class="product-card-name">
                              {{ item.product_name }}
                            </div>
                            <div class="product-card-prices">
                              <div
                                class="product-card-price"
                                style="font-weight: 400"
                              >
                            

                                RM&nbsp;{{ parseFloat(item.product_price).toFixed(2) }}
                              </div>
                            </div>
                          </div>
                          <div class="product-card-description">
                            <div class="product-card-variations">
                              <span class="product-toppings">

                                <span
                                  v-for="(
                                    vr, idx
                                  ) in item.variant"
                                  :key="idx"
                                  >
                                    <div
                                      v-if="vr.selected==true"
                                    >
                                      <b>{{ vr.name }}</b> &nbsp;
                                    </div>
                                </span>




                                <span
                                  v-for="(
                                    product_variant, index2
                                  ) in item.product_variation"
                                  :key="index2"
                                  ><template
                                    v-for="(
                                      product_var, index3
                                    ) in product_variant.variation"
                                  >
                                    <div
                                      :key="index3"
                                      v-if="product_var.quantity > 0"
                                    >
                                      <b>{{ product_var.name }}</b> &nbsp;
                                      <span style="font-size: 1.1rem">
                                        +RM{{ product_var.price }}
                                      </span>
                                    </div>
                                  </template>
                                </span>
                              </span>
                              <div
                                v-if="
                                  item.remark.length > 0 &&
                                  item.product_variation.length > 0
                                "
                              >
                                <br />
                              </div>
                              <div
                                class="product-card-variations"
                                v-if="item.remark.length > 0"
                              >
                                <span class="product-toppings">
                                  <b>NOTE:{{ item.remark }}</b>
                                </span>
                              </div>
                            </div>

                            <div
                              class="instant-cart-manager-container"
                              id="cart_button"
                            >
                              <div class="vnis" style="align-self: center">
                                <button
                                  class="vnis__button"
                                  @click="minus_cart_quantity(index)"
                                >
                                  -
                                </button>
                                <input
                                  type="number"
                                  min="0"
                                  debounce="500"
                                  class="vnis__input"
                                  :value="item.quantity"
                                  max="9999"
                                  disabled
                                />
                                <button
                                  class="vnis__button"
                                  @click="
                                    add_cart_quantity(index, item.product_id)
                                  "
                                >
                                 +
                                </button>
                              </div>
                              <div
                                class="ml-2"
                                style="color: red; right: 0"
                                v-if="cart_checking_stock(item.product_id)"
                              >
                                ONLY
                                {{ cart_checking_stock(item.product_id) }} ITEMS
                                LEFT
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <v-divider class="mr-3 ml-3 mt-0 mb-0"></v-divider>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <v-row>
              <v-col cols="12">
                <v-card class="mx-auto">
                  <v-card-text>
                    <div
                      class="text-h5 mb-6"
                      style="
                        font-size: 1.5rem !important;
                        font-weight: 800;
                        letter-spacing: 0.0125em !important;
                      "
                    >
                      
                      {{$t('order-summary')}}
                    </div>
                    <div class="d-flex">
                      <div style="font-size: 14px">{{$t('subtotal')}}</div>
                      <div class="spacer"></div>
                      <div style="font-size: 14px">RM{{ product_fee }}</div>
                    </div>
                    <div
                      role="separator"
                      aria-orientation="horizontal"
                      class="my-2 theme--light"
                    />
                    <div class="d-flex mb-1">
                      <div style="font-size: 14px">{{$t('delivery-fee')}}</div>
                      <div class="spacer"></div>
                      <div style="font-size: 14px">
                        RM{{ parseFloat(delivery_fee).toFixed(2) }}
                      </div>
                    </div>

                    <div class="d-flex mb-1">
                      <div style="font-size: 14px">{{$t('coupon-discount')}}</div>
                      <div class="spacer"></div>
                      <div style="font-size: 14px">
                        - RM{{ parseFloat(discount_fee).toFixed(2) }}
                      </div>
                    </div>

                    <div class="d-flex mb-1">
                      <div style="font-size: 14px">
                        {{ tax_name ? tax_name : "Tax" }}
                      </div>
                      <div class="spacer"></div>
                      <div style="font-size: 14px">
                        RM{{ parseFloat(tax_fee).toFixed(2) }}
                      </div>
                    </div>
                    <hr
                      role="separator"
                      aria-orientation="horizontal"
                      class="my-2 v-divider theme--light"
                    />
                    <div class="d-flex text-h6 mb-1">
                      <div
                        style="
                          font-size: 1.5rem !important;
                          font-weight: 800;
                          letter-spacing: 0.0125em !important;
                        "
                      >
                        
                        {{$t('total')}}
                      </div>
                      <div class="spacer"></div>
                      <div
                        style="
                          font-size: 1.5rem !important;
                          font-weight: 800;
                          letter-spacing: 0.0125em !important;
                        "
                      >
                        RM {{ total_fee }}
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
        <v-card-text v-if="step == 2">

          <v-expansion-panels v-model="panel">

            <!-- <v-expansion-panel
              :style="tab1_red ? 'border: solid 1px red;' : ''"
              class="mb-4 pa-5">
              <v-expansion-panel-header
                @click="tab1_comfirm = false"
                hide-actions
              >
                <v-row dense>
                  <v-col cols="12">
                    <h3 class="checkout__step__title">
                      <span
                        :class="
                          !p_dark
                            ? 'white--text tag mr-2'
                            : 'white--text tag mr-2'
                        "
                        :style="
                          tab1_comfirm ? 'background-color:' + p_color : ''
                        "
                        >1</span
                      >
                      <span
                        class="checkout-title-content js-delivery-text ma-1"
                      >
                        
                        {{$t('personal-detail')}}
                      </span>
                    </h3>
                  </v-col>
                  
                  <v-col cols="12" v-if="tab1_comfirm">
                    <div id="checkout-contact-information">
                      <div class="checkout__contact-information__full-name">
                        {{ name }}
                      </div>
                      <div class="checkout__contact-information__full-name">
                        {{ phone }}
                      </div>
                      <div
                        class="checkout__contact-information__full-name"
                        v-if="email.length > 0"
                      >
                        {{ email }}
                      </div>
                    </div>
                  </v-col>

                  <v-col cols="12" v-if="tab1_comfirm">
                    <v-btn
                      class="ma-2"
                      outlined
                      color="error"
                      small
                      style="font-size: 15px"
                      @click="tab1_comfirm = false"
                    >
                       {{$t('EDIT')}}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row dense>
                  <div
                    v-if="tab1_red"
                    class="error-message full form__error-message"
                  >
                     {{$t('comfirm-personal-details')}}
                  </div>
                </v-row>
                <v-form ref="tab1_form" v-model="tab1_form">
                  <v-text-field
                    type="number"
                    v-model="phone"
                    outlined
                    v-on:keyup="get_customer_details"
                    :rules="[(v) => !!v || $t('contact-required')]"
                    placeholder="01xxxxxxxx"
                    name="phone"
                    :label="$t('phone')"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="name"
                    :label="$t('name')"
                    outlined
                    :counter="30"
                    :rules="nameRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-if="email_option"
                    v-model="email"
                    outlined
                    :label="$t('email')"
                    :rules="email.length > 0 ? emailRules : []"
                    placeholder="(optional)"
                    name="email"
                  ></v-text-field>
                  <v-row justify="center">
                    <v-btn
                      class="ma-2"
                      width="90%"
                      tile
                      :color="p_color"
                      :dark="p_dark"
                      @click="tab1_comfirm_btn(),vibrate()"
                      >{{$t('confirm')}}</v-btn
                    >
                  </v-row>
                </v-form>
              </v-expansion-panel-content>
            </v-expansion-panel> -->

            <v-expansion-panel
              class="mb-4 pa-5"
              :style="tab2_red ? 'border: solid 1px red;' : ''"
            >
              <v-expansion-panel-header
                @click="tab2_comfirm = false"
                hide-actions
              >
              
                <v-row dense>
                  <v-col cols="12">
                    <h3 class="checkout__step__title">
                      <span
                        :class="
                          !p_dark
                            ? 'white--text tag mr-2'
                            : 'white--text tag mr-2'
                        "
                        :style="
                          tab2_comfirm ? 'background-color:' + p_color : ''
                        "
                        >1</span
                      >

                      <span class="checkout-title-content js-delivery-text">
                        
                        {{$t('delivery-detail')}}
                      </span>
                    </h3>
                  </v-col>
                  <v-col cols="12" v-if="tab2_comfirm">
                    <div id="checkout-contact-information" class="mb-2">
                      <div class="checkout__contact-information__full-name">
                        <span style="font-size:16px;!important"><b>{{ name }}</b></span>
                      </div>
                      <div class="checkout__contact-information__full-name">
                             <span style="font-size:14px;font-weight:400;color:#181818;">{{ phone }}</span>

                      </div>
                      <div
                        class="checkout__contact-information__full-name"
                        v-if="email.length > 0"
                      >
                             <span style="font-size:14px;font-weight:400;color:#181818;">{{ email }}</span>
                      </div>
                    </div>
                    <div id="checkout-contact-information">
                      <div class="checkout__contact-information__full-name mb-1">
                      

                         <span style="font-size:14px;!important;font-weight:500;text-decoration:underline;margin-bottom:5px;">
                          <b>  {{ delivery_collect ? $t('DELIVERY') : (self_collect_display_text==''?$t('SELF-COLLECT'):self_collect_display_text) }}</b></span>
                         
                      </div>
                      <div
                        class="checkout__contact-information__full-name"
                        v-if="address.length > 0 && delivery_collect"
                      >
                         <span style="font-size:14px;font-weight:400;color:#181818;">{{ address }}</span>
                      </div>
                      <div
                        class="checkout__contact-information__full-name mb-2"
                        v-if="postcode.length > 0 && delivery_collect"
                      >
                         <span style="font-size:14px;font-weight:400;color:#181818;">{{ postcode }}</span>

                      </div>
                      <div
                        class="checkout__contact-information__full-name"
                        v-if="start_date.length > 0"
                      >
                      <span style="font-size:14px;!important"><b> {{ $t('delivery-date')}}:</b></span> 
                       <span style="font-size:14px;font-weight:400;color:#181818;"> {{ start_date }}</span>
                       
                      </div>
                      <div
                        class="checkout__contact-information__full-name"
                        v-if="delivery_time != null && delivery_time.length > 0"
                      >

                         <span style="font-size:14px;!important"><b> {{ $t('delivery-time')}}:</b></span> 
                       <span style="font-size:14px;font-weight:400;color:#181818;"> {{ delivery_time }}</span>
                      </div>
                      <br />
                      <!-- <div
                        class="checkout__contact-information__full-name"
                        v-if="delivery_fee"
                      >
                        {{$t('delivery-fee')}} RM{{ delivery_fee }}
                      </div> -->
                    </div>
                  </v-col>
                  <v-col cols="12" v-if="tab2_comfirm">
                    <v-btn
                      class="ma-2"
                      outlined
                      color="error"
                      small
                      style="font-size: 15px"
                      @click="tab2_comfirm = false"
                    >
                       {{$t('EDIT')}}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row dense>
                  <div
                    v-if="tab2_red"
                    class="error-message full form__error-message"
                  >
                     {{$t('comfirm-delivery-details')}}
                  </div>
                </v-row>
                
                <v-form ref="tab2_form" v-model="tab2_form" class="mt-3">
                  <v-text-field
                    type="number"
                    v-model="phone"
                    outlined
                    v-on:keyup="get_customer_details"
                    :rules="phoneRules"
                    validate-on-blur
                    placeholder="01xxxxxxxx"
                    name="phone"
                    :label="$t('phone')"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="name"
                    :label="$t('name')"
                    outlined
                    :counter="30"
                    :rules="nameRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-if="email_option"
                    v-model="email"
                    outlined
                    :label="$t('email')"
                    :rules="email.length > 0 ? emailRules : []"
                    placeholder="(optional)"
                    name="email"
                  ></v-text-field>

             
               
                  
                  <v-row dense>
                    <v-col cols="12">
                      <v-checkbox
                        v-if="self_collect"
                        v-model="delivery_collect"
                        :label="$t('DELIVERY')"
                        @click="delivery_collect_clicked()"
                        :disabled="delivery_option?false:true"
                        hide-details
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="12">
                      <v-checkbox
                        v-if="self_collect"
                        v-model="request_self_collect"
                        @click="request_self_collect_clicked()"
                        :label="self_collect_display_text==''?$t('SELF-COLLECT'):self_collect_display_text"
                        hide-details
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        class="mt-2"
                        v-if="request_self_collect"
                        v-model="merchant_address"
                        solo
                        readonly
                        hide-details
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                      class="full-address-hint-color"
                        outlined
                        style="padding-top: 0px"
                        v-if="delivery_collect"
                        v-model="address"
                        :rules="addressRules"
                        placeholder="Address"
                        name="address"
                        persistent-hint
                        :hint="shipping_setting_status=='3'?$t('half-address'):$t('full-address')"
                        :label="shipping_setting_status=='3'?$t('half-address'):$t('full-address')"
                        required
                      ></v-textarea>
                    </v-col>
                    <v-col :cols="shipping_setting_status=='3' && !request_self_collect && country=='MY'?6:12">
                      <v-text-field
                        outlined
                        type="number"
                        style="padding-top: 0px"
                        v-if="!request_self_collect"
                        v-on:keyup="get_city_state_from_postcode"
                        v-model="postcode"
                        :rules="[(v) => !!v || $t('postcode-required')]"
                        placeholder="Postcode"
                        name="postcode"
                        :label="$t('postcode')"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                      v-if="shipping_setting_status=='3' && !request_self_collect && country=='MY'"
                      v-model="city"
                      outlined
                      :label="$t('city')"
                      :rules="cityRules"
                      name="city"></v-text-field>
                   
                     
                    </v-col>
                    <v-col cols="12">
                      <div class="state-select">
                            <v-select v-model="state" outlined :label="$t('state')" :rules="stateRules" 
                          v-if="shipping_setting_status=='3' && !request_self_collect && country=='MY'" :items="state_list" item-text="text" item-value="value">
                        </v-select>
                        </div>
                    </v-col>
                    <v-col cols="12">
                  <div class="state-select">
                        <v-select v-model="country" outlined :label="$t('country')" :rules="countryRules" 
                      v-if="shipping_setting_status=='3' && !request_self_collect" :items="country_list" item-text="text" item-value="value">
                    </v-select>
                     </div>

                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col :cols="delivery_time_option && delivery_date_option?6:12" v-if="delivery_date_option">
                      <v-menu
                        ref="menu1"
                        v-model="menu1"
                        transition="scale-transition"
                        offset-y
                        v-if="delivery_date_option"
                        max-width="290px"
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="start_date"
                            :label="request_self_collect? $t('self-collect-date'): $t('delivery-date')"
                            :rules="[(v) => !!v || $t('delivery-date-required')]"
                            solo
                            dense
                            prepend-inner-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          @update:picker-date="pickerUpdate($event)"
                          :allowed-dates="allowedDates"
                          :min="date_min"
                          v-model="start_date"
                          no-title
                          scrollable
                        ></v-date-picker>
                      </v-menu>
                    </v-col>

                    <v-col :cols="delivery_time_option && delivery_date_option?6:12" v-if="delivery_time_option">
                      <v-menu
                        ref="menu2"
                        v-model="menu2"
                        :close-on-content-click="false"
                        v-if="delivery_time_option"
                        :nudge-right="40"
                        :return-value.sync="delivery_time"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="delivery_time"
                            :label="request_self_collect? $t('self-collect-time'):$t('delivery-time')"
                            solo
                            dense
                            :rules="[
                              (v) => !!v || $t('delivery-time-required'),
                            ]"
                            prepend-inner-icon="mdi-av-timer"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-time-picker
                          v-if="menu2"
                          v-model="delivery_time"
                          format="24hr"
                          full-width
                          :min="min_time"
                          :max="working_time.end"
                          @click:minute="$refs.menu2.save(delivery_time)"
                        ></v-time-picker>
                      </v-menu>
                    </v-col>
                  </v-row>
                  
                  <v-row>
                    <v-col cols="12">
                     
                        <v-textarea
                          counter="1000"
                          v-model="note"
                          :rules="[(v) => (v.length > note_default_length)  || $t('note-required')]"
                          auto-grow
                          outlined
                          :label="$t('note')"
                          aria-placeholder="Can I have free gift?"
                        ></v-textarea>
                    </v-col>
                  </v-row>
                  <v-row dense>
                    <v-col cols="12">
                        <v-alert
                              v-if="order_reminder.length>0"
                              hide-details
                              type="warning"
                              prominent
                              text
                              icon="mdi-bell-ring-outline"
                            >

                              <v-row align="center" dense>
                                <v-col class="grow">                                 

                                     <v-textarea
                                     class="mb-2"
                                      style="padding-top:0px!important;margin-top:0px;color:#fb8c00!important"
                                      rows="1"
                                      id="reminder_text_area"
                                      background-color="transparent"
                                      readonly
                                      flat 
                                      solo                          
                                     auto-grow
                                     v-model="order_reminder"
                                  hide-details
                                ></v-textarea>

                                </v-col>
                              
                              </v-row>
                            </v-alert>

                    </v-col>
                  </v-row>
                  <v-row dense>
                    <div
                      v-if="tab2_error.length > 0"
                      class="error-message full form__error-message"
                    >
                      {{ tab2_error }}
                    </div>
                  </v-row>
                  <v-row justify="center">
                    <v-btn
                      class="ma-2"
                      tile
                      large
                      style="font-size:14px"
                      width="90%"
                      :color="p_color"
                      :dark="p_dark"
                      :loading="tab2_comfirm_loading"
                      :disable="tab2_comfirm_loading"
                      @click="tab2_comfirm_btn(),vibrate()"
                      >{{$t('comfirm')}}</v-btn
                    >
                  </v-row>
                </v-form>

              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel 
              class="pa-5">
             <!-- :style="tab3_red ? 'border: solid 1px red;' : ''" -->
              <v-expansion-panel-header
                hide-actions>

                <v-row dense>
                  <v-col cols="12">
                    <h3 class="checkout__step__title">
                      <span
                        :class="
                          !p_dark
                            ? 'white--text tag mr-2'
                            : 'white--text tag mr-2'
                        "
                        :style="
                       'background-color:' + p_color 
                        "
                        >2</span
                      >
                      <span class="checkout-title-content js-delivery-text">
                        {{$t('payment-detail')}}
                      </span>
                    </h3>
                  </v-col>
                  <v-col cols="12" v-if="tab3_comfirm">
                    <div id="checkout-contact-information">
                      <div class="checkout__contact-information__full-name">
                        {{
                          payment_method == "0"? $t('payment-bank-transfer')
                            : payment_method == "1" ? $t('payment-cod')
                            : payment_method == "2" ? $t('payment-fpay')
                            :$t('payment-manual-tng')
                        }}
                      </div>
                      <div
                        class="checkout__contact-information__full-name"
                        v-if="current_use_coupon_code.length > 0"
                      >
                        {{$t('coupon')}} : {{ current_use_coupon_code }}
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" v-if="tab3_comfirm">
                    <v-btn
                      class="ma-2"
                      outlined
                      color="error"
                      @click="tab3_comfirm = false"
                      style="font-size: 15px"
                      small
                      
                    >
                      {{$t('EDIT')}} 
                    </v-btn>
                  </v-col>
                </v-row>

              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row dense>
                  <div
                    v-if="tab3_red"
                    class="error-message full form__error-message"
                  >
                    {{$t('comfirm-payment-details')}} 
                  </div>
                </v-row>
                <v-form ref="tab3_form" v-model="tab3_form">
                  <v-row
                    class="mb-2"
                    align="center"
                    dense
                    v-if="allow_discount == '0'"
                  >
                    <v-col cols="8" v-if="current_use_coupon_code == ''">
                      <v-btn
                        tile
                        
                        color="red"
                        dark
                        @click="coupon_dialog = true"
                      >
                         {{$t('enter-coupon')}} 

                      </v-btn>
                    </v-col>
                    <div
                      class="checkout__payment__voucher-selected checkout__step__item-content"
                      style="font-size: 1.4rem"
                      v-if="current_use_coupon_code.length > 0"
                    >
                      {{$t('coupon')}}: <b>{{ current_use_coupon_code }}</b
                      ><v-btn
                        class="ma-2"
                        outlined
                        color="error"
                        small
                        @click="
                          (current_use_coupon_code = ''), (discount_fee = '0')
                        "
                      >
                        {{$t('remove-coupon')}}
                      </v-btn>
                    </div>
                    <!-- <v-col cols="6">
                      <span  style="font-size: 1.6rem">
                      {{
                        current_use_coupon_code == ""
                          ? ""
                          : "Coupon: " + current_use_coupon_code
                      }}
                      </span>
                    </v-col> -->
                  </v-row>
                  <v-list-item-group v-model="payment_method" mandatory>
                    <v-list-item v-if="bank_transfer" value="0">
                      <template v-slot:default="{ active, toggle }">
                        <v-list-item-action>
                          <v-checkbox
                            :value="active"
                            color="primary"
                            @click="toggle"
                          ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title style="font-size: 1.4rem"
                            >{{$t('manual-bank-transfer')}}</v-list-item-title
                          >
                          <v-list-item-subtitle style="font-size: 1.1rem"
                            >{{$t('send-receipt-whatsapp')}}</v-list-item-subtitle
                          >
                       
                        </v-list-item-content>
                      </template>
                    </v-list-item>

                    <v-list-item v-if="cash_on_delivery" value="1">
                      <template v-slot:default="{ active, toggle }">
                        <v-list-item-action>
                          <v-checkbox
                            :value="active"
                            color="primary"
                            @click="toggle"
                          ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title style="font-size: 1.4rem"
                            >{{$t('payment-cod')}} </v-list-item-title
                          >
                          <v-list-item-subtitle style="font-size: 1.1rem"
                            >{{$t('payment-cod-description')}}</v-list-item-subtitle
                          >
                          
                        </v-list-item-content>
                      </template>
                    </v-list-item>

                    <v-list-item v-if="fpay_transfer" value="2">
                      <template v-slot:default="{ active, toggle }">
                        <v-list-item-action>
                          <v-checkbox
                            :value="active"
                            color="primary"
                            @click="toggle"
                          ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title style="font-size: 1.4rem"
                            >{{$t('payment-fpay')}}</v-list-item-title
                          >
                          <!-- <v-list-item-subtitle
                          >Online banking</v-list-item-subtitle
                        >
                        <v-list-item-subtitle
                          >线上转账</v-list-item-subtitle
                        > -->

                          <v-img
                            :src="domain + 'fpay-logo.png'"
                            contain
                            position="start start"
                            height="40px"
                          ></v-img>
                        </v-list-item-content>
                      </template>
                    </v-list-item>

                       <v-list-item v-if="ipay_transfer" value="7">
                      <template v-slot:default="{ active, toggle }">
                        <v-list-item-action>
                          <v-checkbox
                            :value="active"
                            color="primary"
                            @click="toggle"
                          ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title style="font-size: 1.4rem"
                            >{{$t('payment-ipay')}}</v-list-item-title
                          >
                          <!-- <v-list-item-subtitle
                          >Online banking</v-list-item-subtitle
                        >
                        <v-list-item-subtitle
                          >线上转账</v-list-item-subtitle
                        > -->

                          <v-img
                            :src="domain + 'ipay-logo.png'"
                            contain
                            position="start start"
                            height="40px"
                          ></v-img>
                        </v-list-item-content>
                      </template>
                    </v-list-item>

                    <v-list-item v-if="tng_manual_payment" value="3">
                      <template v-slot:default="{ active, toggle }">
                        <v-list-item-action>
                          <v-checkbox
                            :value="active"
                            color="primary"
                            @click="toggle"
                          ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title style="font-size: 1.4rem"
                            >{{$t('payment-manual-tng')}}</v-list-item-title
                          >
                         
                          <img style="width:40px; flex: 0 0 0%;" src="@/assets/images/tng-logo.png" />
                         
                        </v-list-item-content>
                      </template>
                    </v-list-item>

                    <v-list-item v-if="boost_manual_payment" value="4">
                      <template v-slot:default="{ active, toggle }">
                        <v-list-item-action>
                          <v-checkbox
                            :value="active"
                            color="primary"
                            @click="toggle"
                          ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title style="font-size: 1.4rem"
                            >{{$t('payment-manual-boost')}}</v-list-item-title
                          >
                         
                          <img style="width:40px; flex: 0 0 0%;" src="@/assets/images/boost-logo.jpg" />
                         
                        </v-list-item-content>
                      </template>
                    </v-list-item>

                    <v-list-item v-if="duit_now_manual_payment" value="5">
                      <template v-slot:default="{ active, toggle }">
                        <v-list-item-action>
                          <v-checkbox
                            :value="active"
                            color="primary"
                            @click="toggle"
                          ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title style="font-size: 1.4rem"
                            >{{$t('payment-manual-duit-now')}}</v-list-item-title
                          >
                         
                          <img style="width:40px; flex: 0 0 0%;" src="@/assets/images/duit-now-logo.jpg" />
                         
                        </v-list-item-content>
                      </template>
                    </v-list-item>
                    <v-list-item v-if="sarawak_pay_manual_payment" value="6">
                      <template v-slot:default="{ active, toggle }">
                        <v-list-item-action>
                          <v-checkbox
                            :value="active"
                            color="primary"
                            @click="toggle"
                          ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title style="font-size: 1.4rem"
                            >{{$t('payment-manual-sarawak-pay')}}</v-list-item-title
                          >
                         
                          <img style="width:40px; flex: 0 0 0%;" src="@/assets/images/sarawak-pay-logo.jpg" />
                         
                        </v-list-item-content>
                      </template>
                    </v-list-item>
                  </v-list-item-group>
                  <v-row>
                    <v-spacer></v-spacer>
                     <v-btn
                    text
                    color="primary"
                    style="font-size:1.1rem"
                    @click="dialog_tnc=true"
                  >
                    terms of service
                  </v-btn>
                  </v-row>
                     
               

                  <!-- <v-row justify="center">
                    <v-btn
                      class="ma-2 mt-4"
                      tile
                      width="90%"
                      :color="p_color"
                      :dark="p_dark"
                      @click="tab3_comfirm_btn(),vibrate()"
                      >{{$t('comfirm')}}</v-btn
                    >
                  </v-row> -->
                </v-form>
              </v-expansion-panel-content>
            </v-expansion-panel>

          </v-expansion-panels>

          <v-row class="mt-3">
              <v-col cols="12">
                <v-card class="mx-auto">
                  <v-card-text>
                    <div
                      class="text-h5 mb-6"
                      style="
                        font-size: 1.5rem !important;
                        font-weight: 800;
                        letter-spacing: 0.0125em !important;
                      "
                    >
                      
                      {{$t('order-summary')}}
                    </div>
                    <div class="d-flex">
                      <div style="font-size: 14px">{{$t('subtotal')}}</div>
                      <div class="spacer"></div>
                      <div style="font-size: 14px">RM{{ product_fee }}</div>
                    </div>
                    <div
                      role="separator"
                      aria-orientation="horizontal"
                      class="my-2 theme--light"
                    />
                    <div class="d-flex mb-1">
                      <div style="font-size: 14px">{{$t('delivery-fee')}}</div>
                      <div class="spacer"></div>
                      <div style="font-size: 14px">
                        RM{{ parseFloat(delivery_fee).toFixed(2) }}
                      </div>
                    </div>

                    <div class="d-flex mb-1">
                      <div style="font-size: 14px">{{$t('coupon-discount')}}</div>
                      <div class="spacer"></div>
                      <div style="font-size: 14px">
                        - RM{{ parseFloat(discount_fee).toFixed(2) }}
                      </div>
                    </div>

                    <div class="d-flex mb-1">
                      <div style="font-size: 14px">
                        {{ tax_name ? tax_name : "Tax" }}
                      </div>
                      <div class="spacer"></div>
                      <div style="font-size: 14px">
                        RM{{ parseFloat(tax_fee).toFixed(2) }}
                      </div>
                    </div>
                    <hr
                      role="separator"
                      aria-orientation="horizontal"
                      class="my-2 v-divider theme--light"
                    />
                    <div class="d-flex text-h6 mb-1">
                      <div
                        style="
                          font-size: 1.5rem !important;
                          font-weight: 800;
                          letter-spacing: 0.0125em !important;
                        "
                      >
                        
                        {{$t('total')}}
                      </div>
                      <div class="spacer"></div>
                      <div
                        style="
                          font-size: 1.5rem !important;
                          font-weight: 800;
                          letter-spacing: 0.0125em !important;
                        "
                      >
                        RM {{ total_fee }}
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
                  <v-row>
            <v-col cols="6">
             
              
              <v-btn
                v-if="step == 2"
                :color="p_color"
                :dark="p_dark"
                style="font-size: 1.2rem !important"
                tile
                width="100%"
                @click="submit(),vibrate()"
                :disabled="cart_items.length > 0 || order_loading ==true? false : true"
                :loading="order_loading"
                ><v-icon small>mdi-cart-outline</v-icon>
                  {{$t('confirm')}}

              </v-btn>
            </v-col>

            <v-col cols="6">
              <v-btn
                :color="s_color"
                :dark="s_dark"
                style="font-size: 1.2rem !important"
                width="100%"
                tile
                @click="step == 2 ? (step = 1) : (dialog_cart = false),vibrate()"
              >
                {{$t('back')}}
              </v-btn>
            </v-col>
          </v-row>



              
            </v-row>
        </v-card-text>
        <v-card-actions v-if="step==1"
          style="display: block !important; height: 58px"
          class="product-add-to-cart"
        >
          <v-row>
            <v-col cols="6">
              <v-btn
                v-if="step == 1 && cart_items.length > 0"
                :color="p_color"
                :dark="p_dark"
                style="font-size: 1.2rem !important"
                tile
                width="100%"
                @click="full_cart_checking_stock(),vibrate()"
                ><v-icon small>mdi-cart-outline</v-icon>
                
                {{$t('continue')}}
              </v-btn>
              
              <!-- <v-btn
                v-if="step == 2"
                :color="p_color"
                :dark="p_dark"
                style="font-size: 1.2rem !important"
                tile
                width="100%"
                @click="submit(),vibrate()"
                :disabled="cart_items.length > 0 || order_loading ==true? false : true"
                :loading="order_loading"
                ><v-icon small>mdi-cart-outline</v-icon>
                  {{$t('confirm')}}

              </v-btn> -->
            </v-col>

            <v-col cols="6">
              <v-btn
                :color="s_color"
                :dark="s_dark"
                style="font-size: 1.2rem !important"
                width="100%"
                tile
                @click="step == 2 ? (step = 1) : (dialog_cart = false),vibrate()"
              >
                {{$t('back')}}
              </v-btn>
            </v-col>
          </v-row>

        </v-card-actions>

      </v-card>
    </v-dialog>
    <v-dialog
      v-model="redirect_dialog"
      v-if="redirect_dialog"
      hide-overlay
      persistent
      width="400"
    >
      <v-card color="#009688" dark>
        <v-card-title class="justify-center" style="font-size: 1.65rem"
          >{{$t('order-completed')}}</v-card-title
        >
        <v-card-text>
          <v-row>
            <v-img
              :src="domain + '/correct.png'"
              height="150px"
              contain
            ></v-img>
          </v-row>

          <div class="text-center" style="font-size: 1.1rem">
            {{$t('redirect-text')}}
          </div>
          <div class="text-center" style="font-size: 1.1rem">
            {{$t('dont-close-browser')}}
          </div>

          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog
      v-if="dialog_promo_dialog"
      v-model="dialog_promo_dialog"
      max-width="400px"
    >
      <v-card width="400px" class="fixedd">
        <div
          @click="dialog_promo_dialog = false"
          class="Button__Block-sc-1c0eo6i-0 bhCgZe ModalControl__Control-sc-1dl29es-0 cLmiHt jsx-3111435847 eapp-popup-control-close-component transition-exited"
        >
          <svg viewBox="0 0 10 10" class="eapp-popup-control-close-icon">
            <path
              fill-rule="nonzero"
              d="M6.414 5l3.293 3.293a1 1 0 0 1-1.414 1.414L5 6.414 1.707 9.707A1 1 0 1 1 .293 8.293L3.586 5 .293 1.707A1 1 0 0 1 1.707.293L5 3.586 8.293.293a1 1 0 0 1 1.414 1.414L6.414 5z"
            ></path>
          </svg>
        </div>
        <v-img
          :src="promo_dialog[0].promo_image"
          max-width="400px"
          height="400px"
        >
          <v-overlay
            absolute
            :opacity="promo_dialog[0].overlay_opacity / 100"
            :color="promo_dialog[0].overlay_color"
          >
            <v-card max-width="400px" height="400px" flat color="transparent">
              <div class="containe containe_padding">
                <div class="container-item">
                  <div class="top-spacing"></div>
                </div>
                <div class="container-item">
                  <div class="promo-title" :style="string_color">
                    {{ promo_dialog[0].promo_title }}
                  </div>
                </div>
                <div class="container-item">
                  <div class="main-title" :style="string_color">
                    {{ promo_dialog[0].promo_main_title }}
                  </div>
                </div>

                <div class="container-item">
                  <div
                    class="button-component-padding"
                    @click="dialog_promo_dialog = false"
                    v-if="promo_dialog[0].button_title"
                  >
                    <div class="button-component" :style="string_color">
                      {{ promo_dialog[0].button_title }}
                    </div>
                  </div>
                </div>

                <div class="container-item">
                  <div class="small-title-spacing"></div>
                </div>
                <div class="container-item">
                  <div class="small-title" :style="string_color">
                    {{ promo_dialog[0].small_title }}
                  </div>
                </div>
                <div class="container-item">
                  <div class="small-subtitle-height">
                    <div class="small-subtitle">
                      <div :style="string_color" style="text-align: center">
                        {{ promo_dialog[0].small_subtitle }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </v-card>
          </v-overlay>
        </v-img>
      </v-card>
    </v-dialog>

    <v-dialog v-if="coupon_dialog" v-model="coupon_dialog" max-width="600px">
      <v-card>
        <v-card-title>{{$t('coupon')}}</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="coupon_code"
            solo
            :label="$t('enter-coupon-code')"
            dense
          ></v-text-field>
          <div
            v-if="coupon_error.length > 0"
            class="error-message full form__error-message"
          >
            {{ coupon_error }}
          </div>
        </v-card-text>
        <v-card-actions class="mt-7">
          <v-spacer></v-spacer>
          <v-btn color="success" small @click="check_coupon_fee(),vibrate()" dark
            >{{$t('apply-coupon')}}</v-btn
          >
          <v-btn color="blue" small @click="coupon_dialog = false" dark
            >{{$t('close')}}</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-if="dialog_tnc" v-model="dialog_tnc" max-width="600px">
      <v-card>
        <v-card-title>Terms of Use</v-card-title>
        <v-card-text>
          <tnc-dialog :data_array="tnc_array"></tnc-dialog>
        
        </v-card-text>
        <v-card-actions class="mt-7">
          <v-spacer></v-spacer>
          <v-btn color="blue" small @click="dialog_tnc = false" dark
            >{{$t('close')}}</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="submit_snackbar"
      :top="true"
      color="green lighten-3"
      elevation="24"
      dark
    >
       <span style="font-size:13px">{{ submit_snackbar_text }}</span>
      <v-btn color="red" text @click="submit_snackbar = false">{{$t('close')}}</v-btn>
    </v-snackbar>

    <v-snackbar
      v-model="error_snackbar"
      :top="true"
      dark
      color="pink lighten-3"
      elevation="24"
    >
      <span style="font-size:13px">{{ error_snackbar_text }} </span>
      <v-btn color="red" text @click="error_snackbar = false">{{$t('close')}}</v-btn>
    </v-snackbar>

      <v-speed-dial

        v-if="(messenger_link!==''||facebook_page_link!==''||instagram_link!==''||phone_number!==''||whatsapp_number!=='')"
        v-model="fab"
        :fixed="true"
        :bottom="true"
        :right="true"
        class="mb-12"
        direction="top"
        :open-on-hover="false"
        style="z-index:20"
        transition="slide-y-reverse-transition"
      >
        <template v-slot:activator>
          <v-btn
            v-model="fab"
            :color="p_color"
            dark
            fab
          >
            <v-icon v-if="fab">
              mdi-close
            </v-icon>
            <v-icon large v-else>
              mdi-chat
            </v-icon>
          </v-btn>
        </template>
        <v-btn
          fab
          dark
          small
          color="green"
          v-if="whatsapp_number!==''"
          @click="contact_store('1')"

        >
          <v-icon>mdi-whatsapp</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="#3a559f"
           v-if="facebook_page_link!==''"
          @click="contact_store('3')"
        >
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="#0098ff"
             v-if="messenger_link!==''"
          @click="contact_store('2')"
        >
          <v-icon>mdi-facebook-messenger</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="#000000"
           v-if="instagram_link!==''"
          @click="contact_store('4')"
          
        >
          <v-icon >mdi-instagram</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="primary"
           v-if="phone_number!==''"
          @click="contact_store('5')"
        >
          <v-icon>mdi-phone-in-talk</v-icon>
        </v-btn>
      </v-speed-dial>

    <form method="post" ref="ePayment" 
      action="https://payment.ipay88.com.my/ePayment/entry.asp">
      <input type="hidden" name="MerchantCode" v-model="ipay_merchant_code">
      <input type="hidden" name="PaymentId" value="">
      <input type="hidden" name="RefNo" v-model="ipay_invoice_id">
      <input type="hidden" name="Amount" v-model="ipay_amount">
      <input type="hidden" name="Currency" value="MYR">
      <input type="hidden" name="ProdDesc" v-model="ipay_invoice_id">
      <input type="hidden" name="UserName" v-model="ipay_username">
      <input type="hidden" name="UserEmail" v-model="ipay_email">
      <input type="hidden" name="UserContact" v-model="ipay_contact">
      <input type="hidden" name="Remark" value="">
      <input type="hidden" name="Lang" value="UTF-8">
      <input type="hidden" name="SignatureType" value="SHA256">
      <input type="hidden" name="Signature" 
      v-model="ipay_signature">
      <input type="hidden" name="ResponseURL" 
      v-model="ipay_response_url">
      <input type="hidden" name="BackendURL" 
      v-model="ipay_backend_url">
      <input style="display:none!important;" type="submit" value="Proceed with Payment" ref="submit">
      
    </form>

  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
import axios from "axios";
import NumberInputSpinner from "vue-number-input-spinner";
import * as moment from "moment/moment";
import _ from "lodash";
import lang from "@/components/language_selector";
import Vue from "vue";
import { BASEURL } from "@/api/baseurl";
import popular_category from "@/components/popular_category";
import tnc_dialog from "@/components/tnc_dialog";
// import {gmapApi} from 'vue2-google-maps'
import * as VueGoogleMaps from 'vue2-google-maps'   
import Tnc_dialog from '../components/tnc_dialog.vue';
export default {
  components: {
    NumberInputSpinner,
    lang,
    popular_category,
    tnc_dialog
  },
  layout: 'default',
  data() {
    return {
      domain: BASEURL,
      tab: null,
      form_status: false,
      main_form: true,
      name: "",
      nameRules: [
        (v) => !!v || this.$t("name-required"),
        (v) => (v && v.length <= 30) || this.$t("name-length-30"),
      ],
      email: "", 
      emailRules: [(v) => /.+@.+\..+/.test(v) || this.$t("email-valid")],
      address: "",
      addressRules: [(v) => !!v || "Address is required"],
      noteRules: [
        (v) => v.length <= 1000 || "Note must be less than 1000 characters",
      ],
      numberRules: [(v) => /^\d+$/.test(v) || "num only"],
      postcode: "",
      city:"",
      cityRules: [
        (v) => !!v || this.$t("city-required")
      ],
      phone: "",
      phoneRules: [
        (v) => !!v || this.$t("contact-required"),
        (v) => v.length > 7||"Invalid Number",
      ],
      state:"",
      stateRules: [
        (v) => !!v || this.$t("state-required")
      ],
      
      state_list: [{
            text: 'Johor',
            value: 'Johor'
          },
          {
              text: 'Kedah',
              value: 'Kedah'
          },
          {
              text: 'Kelantan',
              value: 'Kelantan'
          },
          {
              text: 'Melaka',
              value: 'Melaka'
          },
          {
              text: 'Negeri Sembilan',
              value: 'Negeri Sembilan'
          },
          {
              text: 'Pahang',
              value: 'Pahang'
          },
          {
              text: 'Perak',
              value: 'Perak'
          },
          {
              text: 'Perlis',
              value: 'Perlis'
          },
          {
              text: 'Pulau Pinang',
              value: 'Pulau Pinang'
          },
          {
              text: 'Selangor',
              value: 'Selangor'
          },
          {
              text: 'Terengganu',
              value: 'Terengganu'
          },
          {
              text: 'Kuala Lumpur',
              value: 'Kuala Lumpur'
          },
          {
              text: 'Putra Jaya',
              value: 'Putra Jaya'
          },
          {
              text: 'Sarawak',
              value: 'Sarawak'
          },
          {
              text: 'Sabah',
              value: 'Sabah'
          },
          {
              text: 'Labuan',
              value: 'Labuan'
          },
         
        ],
      country:'MY',
      countryRules: [
        (v) => !!v || this.$t("country-required")
      ],
      country_list: [{
            text: 'Malaysia',
            value: 'MY'
          },
          {
              text: 'Singapore',
              value: 'SG'
          }
        ],
      delivery_fee: 0,

      checkbox: false,
      submit_snackbar: false,
      submit_snackbar_text: "",
      error_snackbar: false,
      error_snackbar_text: "",

      redirect_dialog: false,
      redirect_text_en: "Redirect to whatsapp...Later remember to press send",
      redirect_text_zh: "转着去Whatsapp...等等记得按发送",
      user_device_type: "",
      payment_method: "",
      bank_transfer: false,
      cash_on_delivery: false,
      fpay_transfer: false,
      ipay_transfer:false,

      image_dialog: false,
      image_link: "",
      show_contact: false,
      dialog_cart: false,
      cart: false,
      categories: [],
      order_loading: false,

      search_content: "",
      searching: false,
      search_loading:false,
      // searching_item_list: [],
      selected_category_id: "",
      searched_items: [],
      request_self_collect: false,

      // today_date: new Date().toISOString().substr(0, 10),
      today_date: moment().format("YYYY-MM-DD"),

      hour:new Date(),
      minute:new Date(),
      menu1: false,
      start_date: "",
      menu2: false,
      delivery_time: null,
      delivery_collect: true,
      items_gallery: [],

      discount_fee: "0",

      coupon_code: "",
      current_use_coupon_code: "",
      coupon_error: "",
      coupon_dialog: "",
      availableDates: [],

      //map
      latitude: "",
      longitude: "",

      //tax
      unsavedChanges: true,

      //pos menu
      alert_item_added: false,
      alert_at_least_one_item: false,
      scrollInvoked: 0,

      step: 1,
      panel: 0,

      error_checkout: true,
      on_checkout: false,

      tab1_form: false,
      tab2_form: false,
      tab3_form: false,

      tab1_comfirm: false,
      tab2_comfirm: false,
      tab2_comfirm_loading: false,
      tab3_comfirm: false,

      tab1_red: false,
      tab2_red: false,
      tab3_red: false,

      tab2_error: "",
      check_stock: [],

      store_closed:false,

      order_reminder:'',
      ipay_merchant_code:'',
      ipay_invoice_id:'',
      ipay_amount:'',
      ipay_username:'',
      ipay_email:'',
      ipay_contact:'',
      ipay_signature:'',
      ipay_response_url:'',
      ipay_backend_url:'',
      ipay_overlay:false,
      note_default_length:-1,

      dialog_tnc:false,
      dialog_table_cart:false,
      dine_in_mode:false,

      fab:false,
      windowTop:0,
      slider_form:['20220724145636725101.png'],

      tier_id:-1,
      global_rate:-1,
      global_type:-1,
      global_status:-1,


    };
  },

  async asyncData({ params, $axios }) {
    // let formData = new FormData();
    const formData = new URLSearchParams();

    formData.append("url", `${params.m}`);
    formData.append("read", "date");
    let formResponse = await $axios.$post("form/index.php", formData);
    if (formResponse.status !== "1") {
      window.location.href = "https://web.emenu.com.my"; 
      return;
    }

    let categoryData = new URLSearchParams();
    categoryData.append("form_id", formResponse.form_function[0].public_url);
    categoryData.append("get_category", "get_category");
    let categoryResponse = await $axios.$post("form/index.php", categoryData);


    let productData = new URLSearchParams();
    productData.append("id", formResponse.form_function[0].public_url);
    productData.append("read", "get_category");
    let productResponse = await $axios.$post("product/index.php", productData);
    console.log(productResponse);

    if (formResponse.status == "1") {
      // promo dialog
      if (formResponse.form_function[0].promo_dialog) {
        var promo_d = JSON.parse(formResponse.form_function[0].promo_dialog);
        if (promo_d[0].promo_active == true) {
          var dialog_promo = true;
        } else {
          var dialog_promo = false;
        }
      }
      console.log(formResponse.form_function[0]);
        if (formResponse.form_function[0].color) {
          var color = JSON.parse(formResponse.form_function[0].color);
          var p_color = color.primary_color;
          var s_color = color.second_color;
        } else {
          var p_color = "#000000";
          var s_color = "#666f7b";
        }

      // category
      var categories = categoryResponse.category;

      var categories_length = categories.length;

      for (var i = 0; i < categories.length; i++) {
        if (categories[i].category_id == 0 && categories_length == 1) {
          categories[i].name = "All";
        }
      }
      // product
      console.log(productResponse.product_function);

      var product = productResponse.product_function;
      // for (var i = 0; i < product.length; i++) {
      //   product[i].description = product[i].description.replace(/\n/g, "<br/>");
      //   product[i].display_price='';
      //   product[i].in_stock=false;
      //   if(parseFloat(product[i].stock)>0|| product[i].stock==''){
      //     product[i].in_stock=true;
      //   }
      //   if(product[i].type=='1' && product[i].variant!==''){
      //     product[i].in_stock=false;
      //     var variant=JSON.parse(product[i].variant);
      //     console.log('variant');
      //     console.log(variant);
      //     var smallest=parseFloat(variant[0].price);

      //     for(var g=0; g<variant.length; g++){
      //       if(parseFloat(variant[g].stock)>0|| variant[g].stock==''){
      //         product[i].in_stock=true;
      //       }

      //       if(parseFloat(variant[g].price)<smallest){
      //          smallest=variant[g].price;
      //       }

      //     }
      //     product[i].display_price= parseFloat(smallest).toFixed(2);
      //   }

      // }
      if(formResponse.form_function[0].working_time){
      var working_time=JSON.parse(formResponse.form_function[0].working_time);
      }
      return {
        merchant_url: `${params.m}`,
        merchant_id: formResponse.form_function[0].merchant_id,
        catalog_mode: formResponse.form_function[0].catalog_mode,
        company_name: formResponse.form_function[0].company_name,
        company_address: formResponse.form_function[0].address,
        company_email: formResponse.form_function[0].company_email,
        registration_no: formResponse.form_function[0].registration_no,
        company_url: formResponse.form_function[0].url,
        company_domain: formResponse.form_function[0].domain,
        company_phone: formResponse.form_function[0].company_phone,
        news_ticker: formResponse.form_function[0].news_ticker,

        categories: categories,
        items: product,
        banner_status: formResponse.form_function[0].banner_status,
        default_language: formResponse.form_function[0].default_language,
        whatsapp_number: formResponse.form_function[0].whatsapp_number,
        banner_video_link: formResponse.form_function[0].banner_video_link,
        bank_details: formResponse.form_function[0].bank_details,
        theme_color: formResponse.form_function[0].form_color,
        form_image: formResponse.form_function[0].form_banner,
        form_title: formResponse.form_function[0].name,
        merchant_address:
          "Shop Address : \n" +
          formResponse.form_function[0].address,
        delivery_option:formResponse.form_function[0].delivery_option == "0" ? true : false,
        self_collect:
          formResponse.form_function[0].self_collect == "0" ? true : false,
          self_collect_display_text:formResponse.form_function[0].self_collect_display_text,
        delivery_date_option:formResponse.form_function[0].delivery_date_option == "0"? true: false,
        delivery_time_option:formResponse.form_function[0].delivery_time_option == "0"? true: false,
        email_option:formResponse.form_function[0].email_option == "0" ? true : false,
        form_description: formResponse.form_function[0].description,
        bank_transfer:formResponse.form_function[0].bank_transfer == "0" ? true : false,
        cash_on_delivery:formResponse.form_function[0].cash_on_delivery == "0" ? true : false,
        fpay_transfer:formResponse.form_function[0].fpay_transfer == "0" ? true : false,
        ipay_transfer:formResponse.form_function[0].ipay_transfer == "0" ? true : false,

        tng_manual_payment:formResponse.form_function[0].tng_manual_payment == "0" ? true : false,
        boost_manual_payment:formResponse.form_function[0].boost_manual_payment == "0" ? true : false,
        duit_now_manual_payment:formResponse.form_function[0].duit_now_manual_payment == "0" ? true : false,
        sarawak_pay_manual_payment:formResponse.form_function[0].sarawak_pay_manual_payment == "0" ? true : false,

        allow_discount: formResponse.form_function[0].allow_discount,
        order_min_day: formResponse.form_function[0].order_min_day,
        // order_min_time: '50',
        // order_min_type: '1',
        order_min_purchase: formResponse.form_function[0].order_min_purchase,
        working_day: formResponse.form_function[0].working_day,
        working_time: working_time,
        note: formResponse.form_function[0].note_default_value,
        shipping_setting_status:
          formResponse.form_function[0].shipping_setting_status,
        tax_percent: formResponse.form_function[0].tax_percent,
        tax_name: formResponse.form_function[0].tax_name,
        json_promo_dialog: formResponse.form_function[0].promo_dialog,
        dialog_promo_dialog: dialog_promo,
        promo_dialog: promo_d,
        url: formResponse.form_function[0].public_url,
        grid:
          formResponse.form_function[0].product_view_phone == "1"
            ? true
            : false,
        p_color: p_color,
        s_color: s_color,
        order_reminder: formResponse.form_function[0].order_reminder,
        allow_send_whatsapp: formResponse.form_function[0].allow_send_whatsapp,
        enable_feature: formResponse.form_function[0].enable_feature,
        feature_label: formResponse.form_function[0].feature_label,
        feature_product: formResponse.form_function[0].feature_product,
        note_required: formResponse.form_function[0].note_required,

        messenger_link: formResponse.form_function[0].messenger_link,
        facebook_page_link: formResponse.form_function[0].facebook_page_link,
        instagram_link: formResponse.form_function[0].instagram_link,
        phone_number: formResponse.form_function[0].phone_number,


      };
    } else {
      window.location.href = "https://web.emenu.com.my"; 
    }
  },

  head () {
    return {
      title: this.form_title,
    }
  },
  created() {
    this.name = this.$store.state.checkout_step_save.name;
    console.log(this.default_language);
    this.$store.dispatch("fetchlocale",this.default_language);
    //check promo dialog
    if(this.dialog_promo_dialog==true){
      if(process.browser){
          if(localStorage.getItem('promo_display_date')){
             if(localStorage.merchant==this.merchant_url){
               var check_date=moment(localStorage.promo_display_date, 'YYYY-MM-DD HH:mm', true).isValid();
                if(check_date){
                  var diffent_minutes=moment().diff(localStorage.promo_display_date, 'minutes');
                  console.log('diff');
                  console.log(diffent_minutes);
                  if(diffent_minutes<10){
                      this.dialog_promo_dialog=false;
                  }
                  localStorage.promo_display_date=moment().format('YYYY-MM-DD HH:mm'); 
                }else{
                  localStorage.promo_display_date=moment().format('YYYY-MM-DD HH:mm'); 
                }
                 
             }else{
               localStorage.promo_display_date=moment().format('YYYY-MM-DD HH:mm'); 
             }
        }else{
              localStorage.promo_display_date=moment().format('YYYY-MM-DD HH:mm');
        }

        
      }
    }

    //visit calculate
      if(process.browser){

        if(localStorage.getItem('visit_date')){

          if(localStorage.merchant==this.merchant_url){
               var check_date=moment(localStorage.visit_date, 'YYYY-MM-DD', true).isValid();
                if(check_date){
                  var current_date=moment().format("YYYY-MM-DD");

                  if(localStorage.visit_date==current_date){
                    //ok
                  }else{
                    localStorage.visit_date=moment().format('YYYY-MM-DD'); 
                    var array=[];
                    localStorage.visit_product=JSON.stringify(array); 
                    console.log('1');
                     //insert visit query
                    this.update_visitor(this.merchant_id,moment().format('YYYY-MM-DD'));
                  }
                }else{
                  localStorage.visit_date=moment().format('YYYY-MM-DD'); 
                    var array=[];
                   
                    localStorage.visit_product=JSON.stringify(array); 
                    console.log('2');

                  //insert visit query
                  this.update_visitor(this.merchant_id,moment().format('YYYY-MM-DD'));
                }
                 
             }else{
                    console.log('3');

               localStorage.visit_date=moment().format('YYYY-MM-DD HH:mm'); 
               var array=[];
                    localStorage.visit_product=JSON.stringify(array); 
                  //insert visit query
                  this.update_visitor(this.merchant_id,moment().format('YYYY-MM-DD'));
             }

        }else{

          console.log('4');

          localStorage.visit_date=moment().format('YYYY-MM-DD');
          var array=[];
          localStorage.visit_product=JSON.stringify(array); 
                  //insert visit query
                   this.update_visitor(this.merchant_id,moment().format('YYYY-MM-DD'));

        }
      }

      if(this.$route.query.ref && this.$route.query.ref!=='' ){

        this.check_ref_tier(this.$route.query.ref);

      }else if(localStorage.getItem('ref')){
        this.check_ref_tier(localStorage.ref);
      }else{
        this.product_setup();
      }

      // this.global_rate="10";
      // this.global_type=0;
      // this.global_status=0;
      // this.tier_id=1;

      // for (var i = 0; i < this.items.length; i++) {
      //   this.items[i].description = this.items[i].description.replace(/\n/g, "<br/>");
      //   this.items[i].display_price='';
      //   this.items[i].in_stock=false;
      //   if(parseFloat(this.items[i].stock)>0|| this.items[i].stock==''){
      //     this.items[i].in_stock=true;
      //   }
      //   if(this.items[i].type=='1' && this.items[i].variant!==''){
      //     this.items[i].in_stock=false;
      //     var variant=JSON.parse(this.items[i].variant);
      //     console.log('variant');
      //     console.log(variant);
      //     var smallest=parseFloat(this.variant_actual_price(variant[0].price));

      //     for(var g=0; g<variant.length; g++){
      //       if(parseFloat(variant[g].stock)>0|| variant[g].stock==''){
      //         this.items[i].in_stock=true;
      //       }

      //       if(parseFloat(this.variant_actual_price(variant[g].price))<smallest){
      //          smallest=this.variant_actual_price(variant[g].price);
      //       }

      //     }
      //     this.items[i].display_price= parseFloat(smallest).toFixed(2);
      //   }

      // }

      //check delivery available
    if(this.delivery_option==false){
          this.delivery_collect=false;
          this.request_self_collect=true;
    }
     this.is_working_time();
 
  },
  mounted() {
      console.log('ge');
      console.log(this.feature_product);
      window.onbeforeunload = () => (this.unsavedChanges ? true : null);
    
      this.$store.dispatch("fetchCart", this.merchant_url);
      if(this.note_required==0){
        
        this.note_default_length=this.note.length;

      }
    
      window.scroll(0, this.$store.state.main_position_y); 
      window.addEventListener("scroll", this.onScroll)

  },

  computed: {
    product_feature(){
      // return this.feature_product;
      var f_product=this.feature_product==''?[]:JSON.parse(this.feature_product);
      var array=[];
      for(var i=0; i<f_product.length;i++){

        for(var g=0; g<this.items.length;g++){

          if(f_product[i].product_id==this.items[g].product_id){

              array.push(this.items[g]);
              break;
          }
        }

      }
      return array;
    },

    scrollpos(){
      return window.scrollY;
    },

    language(){
      return this.$store.state.locale;
    },

    p_dark: function () {
      return this.text_color_auto(this.p_color);
    },

    s_dark: function () {
      return this.text_color_auto(this.s_color);
    },

    date_min: function () {
      var min_date = new Date(
        new Date(this.today_date).setDate(
          new Date(this.today_date).getDate() + parseFloat(this.order_min_day)
        )
      );
      // return this.today_date.setDate(this.today_date.getDate() + 35);
      return min_date.toISOString().substr(0, 10);
    },

    cart_items: function () {
      return this.$store.state.cart;
    },

    product_fee: function () {
      var total_fee = 0;
      for (var i = 0; i < this.cart_items.length; i++) {
        var single_item_variation_fee = 0;
        if (this.cart_items[i].quantity > 0) {
          if (this.cart_items[i].product_variation.length > 0) {
            for (
              var g = 0;
              g < this.cart_items[i].product_variation.length;
              g++
            ) {
              for (
                var j = 0;
                j < this.cart_items[i].product_variation[g].variation.length;
                j++
              ) {
                if (
                  this.cart_items[i].product_variation[g].variation[j]
                    .quantity > 0
                ) {
                  single_item_variation_fee =
                    single_item_variation_fee +
                    parseFloat(
                      this.cart_items[i].product_variation[g].variation[j].price
                    );
                }
              }
            }
          }
          total_fee =
            total_fee +
            parseFloat(this.cart_items[i].quantity) *
              (parseFloat(this.cart_items[i].product_price) +
                single_item_variation_fee);
        }
      }
      return parseFloat(total_fee) > 0
        ? parseFloat(total_fee).toFixed(2)
        : "0.00";
    },

    product_quantity: function () {
      var qty = 0;
      for (var i = 0; i < this.items.length; i++) {
        // console.log(this.items[i].purchase_quantity);
        qty = qty + parseFloat(this.items[i].quantity);
      }
      return qty;
    },

    total_fee: function () {
      var fee = 0;
      fee =
        parseFloat(this.product_fee) +
        parseFloat(this.delivery_fee) -
        parseFloat(this.discount_fee) +
        parseFloat(this.tax_fee);
      return parseFloat(fee).toFixed(2) > 0 ? parseFloat(fee).toFixed(2) : 0;
    },

    tabs_item: function () {
      return this.items.filter(
        (x) => x.category_id == this.selected_category_id
      );
    },


    min_time: function () {
      var dt = new Date();

      if (this.delivery_date_option == true && this.start_date == this.today_date) {

          // var timeString = dt.getHours() + ":" + dt.getMinutes();
          var timeString = dt.getHours()<10?"0"+dt.getHours():dt.getHours() + ":" + dt.getMinutes();

          if(timeString< this.working_time.start){
            return this.working_time.start;
          }else{
            return timeString ;
          }

      } else {

        return this.working_time.start;

      }


    },

    string_color() {
      return {
        color: this.promo_dialog[0].text_color,
      };
    },

    tax_fee: function () {
      var tax = 0;
      tax = (this.product_fee * this.tax_percent) / 100;
      return parseFloat(tax).toFixed(2) > 0 ? parseFloat(tax).toFixed(2) : 0;
    },

    tnc_array(){

        var array=[];
        var link=''
        if(this.company_domain!==''){
          link=this.company_domain;
        }else{
          link='www.emenu.com.my/'+this.company_url;
        }
        // array.push({company_name:this.company_name},{company_address:this.company_address},{company_phone:this.company_phone},{company_email:this.company_email},{site_url:link});
        array.push({
                                company_name: this.company_name,
                                company_address: this.company_address,
                                company_phone: this.company_phone,
                                company_email: this.company_email,
                                registration_no: this.registration_no,
                                site_url: link,
                            });
        return array;
    },

    route_param(){
      return  (this.$route.query.ref?this.$route.query.ref:'');
    },

    customer_details_list() {
          var array = [];
          var list = {};
          list.toStop = 1;
          list.toContact = {
            name: 'none',
            phone: '0123456789'
          };
          list.remarks = this.note;

          array.push(list);
          return array;
    },

    sum_weight(){
      var total_weight = 0;
      for (var i = 0; i < this.cart_items.length; i++) {
        if (this.cart_items[i].quantity > 0) {

          if(this.cart_items[i].hasOwnProperty("weight")==false || this.cart_items[i].weight==""){
            var product_weight=0;
          }else{
            var product_weight=this.cart_items[i].weight;
          }
  
          total_weight =
            total_weight +
            parseFloat(this.cart_items[i].quantity) *
              parseFloat(product_weight) ;
        }
      }
      return total_weight;

    }

    // dine_in_mode(){
    //   return  (this.$route.query.table?true:false);
    // },

  },
  watch: {

    language(){
      this.$i18n.locale = this.language;
    },
    search_content(e) {
      history.replaceState(null, null, ' ');
      this.search_loading=true;
      var self = this;
      setTimeout(function() {
             self.search_loading = false;
              if (e !== "" && e !== null) {
              self.searching = true;

            self.searched_items = self.items.filter(
              (m) =>
                m.name.toLowerCase().indexOf(self.search_content.toLowerCase()) > -1
            );
          } else {
            self.searching = false;
          }
        }, 1000);


    },

    request_self_collect() {
      this.check_delivery_fee();
    },

    alert_item_added() {
      setTimeout(() => (this.alert_item_added = false), 1500);
    },

    alert_at_least_one_item() {
      setTimeout(() => (this.alert_at_least_one_item = false), 2200);
    },
    cart_items: {
      handler: function () {
        if (this.cart_items.length > 0) {
          this.check_delivery_fee();
          console.log("recalculate delivery fee");
        } else {
          this.delivery_fee = 0;
          this.discount_fee = 0;
        }
      },
      deep: true,
    },
  },
  methods: {
    onScroll(e) {
    this.windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
    },
    
    submit() {
      if(!this.is_working_time()==false){
            console.log('gg1');
        return;
      }

      // if (this.tab1_comfirm == false) {
      //   this.panel = 0;
      //   this.tab1_red = true;
      //   this.vibrate();
      //   return;
      // }

      if (this.tab2_comfirm == false) {
        this.panel = 0;
        this.tab2_red = true;
        this.vibrate();
        return;
      }

      // if (this.tab3_comfirm == false) {
      //   this.panel = 2;
      //   this.tab3_red = true;
      //   this.vibrate();
      //   return;
      // }

      this.order_loading = true;
      var qty = 0;
      for (var i = 0; i < this.cart_items.length; i++) {
        // console.log(this.items[i].purchase_quantity);
        qty = qty + parseFloat(this.cart_items[i].quantity);
      }

      if (qty > 0) {
        const params = new URLSearchParams();
        params.append("create", "create");
        params.append("id", this.url);
        params.append("name", this.name);
        params.append("phone", this.phone);
        params.append("email", this.email);
        params.append("delivery_fee", this.delivery_fee);
        params.append(
          "address",
          this.request_self_collect == true ? "" : this.address
        );
        params.append(
          "postcode",
          this.request_self_collect == true ? "" : this.postcode
        );
        params.append(
          "request_self_collect",
          this.request_self_collect == true ? "0" : "1"
        );

        params.append(
          "delivery_date",
          this.delivery_date_option == true ? this.start_date : ""
        );

        params.append(
          "delivery_time",
          this.delivery_time_option == true ? this.delivery_time : ""
        );

        // console.log(this.request_self_collect == true ? '0' : '1');
        params.append("note", this.note);
        params.append("user_device_type", this.user_device_type);
        params.append("payment_method", this.payment_method);
        // params.append("items", this.items);
        params.append("items", JSON.stringify(this.cart_items));
        params.append("coupon_code", this.current_use_coupon_code);
        params.append("longitude", this.longitude);
        params.append("latitude", this.latitude);
        params.append("city", this.city);
        params.append("state", this.state);
        params.append("country", this.country);
        console.log(this.current_use_coupon_code);
        // params.append("ref",  (this.$route.query.ref?this.$route.query.ref:''));
        params.append("ref",  (localStorage.ref?localStorage.ref:''));

       
        // console.log(JSON.stringify(this.items));

        axios({
          method: "post",
          // url: baseUrl + "/vege_web_v2/product/product.php",
          url: this.domain + "/order/index.php",
          data: params,
        })
          .then((response) => {
            this.unsavedChanges = false;
              console.log(response);

            if (response.data.status == "1") {
              this.redirect_dialog = true;
              
              // this.redirect_text_en =
              //   "Redirect to whatsapp...Later remember to press send";
              // this.redirect_text_zh = "转着去Whatsapp...等等记得按发送";
              this.success_vibrate();
              this.trigger_notification(""+response.data.notifi_merchant_id,response.data.notifi_invoice_id);
              if(this.allow_send_whatsapp=='0'){
                this.send_whatsapp_notification_customer(response.data.notifi_order_id);
                this.send_whatsapp_notification_merchant(response.data.notifi_order_id);
              }
              this.name = "";
              this.phone = "";
              this.email = "";
              this.address = "";
              this.postcode = "";
              this.note = "";

              this.tab1_comfirm = false;
              this.tab2_comfirm = false;
              this.tab3_comfirm = false;
              this.start_date = "";
              this.delivery_time = "";
              this.current_use_coupon_code = "";

              this.$store.commit("clearcart");

              // this.$router.push("/" + this.merchant_url+(this.$route.query.ref?'?ref='+this.$route.query.ref:''));
              this.$router.push("/" + this.merchant_url);

              this.dialog_cart = false;

              var v = this;
              setTimeout(function () {
                v.redirect_dialog = false;
                // v.reset_form();

                // window.top.location.href = response.data.order_url;
                window.location.href = response.data.order_url;
              }, 4500);

              // this.$refs.form.reset();
            } else if (response.data.status == "3") {

              this.error_snackbar = true;
              this.error_snackbar_text = this.$t('area-not-in-coverage');
              this.vibrate();

            } else if (response.data.status == "4") {
              console.log(response.data.fpay_payment_url);
              this.trigger_notification(""+response.data.notifi_merchant_id,response.data.notifi_invoice_id);
              if(this.allow_send_whatsapp=='0'){
                this.send_whatsapp_notification_customer(response.data.notifi_order_id);
                this.send_whatsapp_notification_merchant(response.data.notifi_order_id);
              }

              this.success_vibrate();
              this.step=1;

              this.name = "";
              this.phone = "";
              this.email = "";
              this.address = "";
              this.postcode = "";
              this.note = "";

              this.tab1_comfirm = false;
              this.tab2_comfirm = false;
              this.tab3_comfirm = false;
              this.start_date = "";
              this.delivery_time = "";
              this.current_use_coupon_code = "";

              this.$store.commit("clearcart");
              window.location.href = response.data.fpay_payment_url;


              
            } else if (response.data.status == "5") {
              this.error_snackbar = true;
              this.error_snackbar_text = this.$t('fpay-connect-failed');
              this.vibrate();
            } else if (response.data.status == "6") {
              this.error_snackbar = true;
              this.error_snackbar_text =
                this.$t('fpay-min-purchase')+ parseFloat(response.data.min).toFixed(2);
                this.vibrate();
            } else if (response.data.status == "7") {
              this.vibrate();
              this.error_snackbar = true;
              this.error_snackbar_text = this.$t('fpay-connect-failed');
            } else if (response.data.status == "8") {
              this.vibrate();
              this.error_snackbar = true;
              this.error_snackbar_text = response.data.message;
            } else if (response.data.status == "9") {
              this.vibrate();
              this.error_snackbar = true;
              this.error_snackbar_text = this.$t('fpay-connect-failed');
              this.$store.commit("clearcart");
            } else if (response.data.status == "10") {
              this.vibrate();
              this.error_snackbar = true;
              this.error_snackbar_text = this.$t('product-price-invalid');
              this.$store.commit("clearcart");
            } else if (response.data.status == "11") {
              this.vibrate();
              this.error_snackbar = true;
              this.error_snackbar_text =  this.$t('product-stock-invalid');
              this.check_stock = response.data.stock;
              this.stock_change();
            } else if (response.data.status == "12") {
              // this.redirect_dialog = true;
              // this.redirect_text_en =
              //   "Redirect to whatsapp...Later remember to press send";
              // this.redirect_text_zh = "转着去Whatsapp...等等记得按发送";
            
              this.trigger_notification(""+response.data.notifi_merchant_id,response.data.notifi_invoice_id);
             
              this.success_vibrate();
              this.step=1;

              this.name = "";
              this.phone = "";
              this.email = "";
              this.address = "";
              this.postcode = "";
              this.note = "";

              this.tab1_comfirm = false;
              this.tab2_comfirm = false;
              this.tab3_comfirm = false;
              this.start_date = "";
              this.delivery_time = "";
              this.current_use_coupon_code = "";

              this.$store.commit("clearcart");

              // this.$router.push("/" + this.merchant_url);

              this.dialog_cart = false;

                // window.top.location.href = response.data.order_url;
                // window.location.href = response.data.order_url;
                // console.log( this.merchant_url+"/order-payment/"+ response.data.order_url_link);
              // this.$router.push("/" + this.merchant_url+"/order-payment/"+ response.data.order_url_link+"?oid="+response.data.notifi_order_id+"&allow_w="+this.allow_send_whatsapp+(this.$route.query.ref?'&ref='+this.$route.query.ref:''));
              this.$router.push("/" + this.merchant_url+"/order-payment/"+ response.data.order_url_link+"?oid="+response.data.notifi_order_id+"&allow_w="+this.allow_send_whatsapp);

              this.send_payment_whatsapp_notification_customer(response.data.notifi_order_id)
              //  if(this.allow_send_whatsapp=='0'){
              //   this.send_whatsapp_notification_customer(response.data.notifi_order_id);
              //   this.send_whatsapp_notification_merchant(response.data.notifi_order_id);
              // }
          


              // this.$refs.form.reset();
            }else if (response.data.status == "13") {
              this.ipay_overlay=true;
              // ipay payment 

              // console.log(response.data.fpay_payment_url);
              this.trigger_notification(""+response.data.notifi_merchant_id,response.data.notifi_invoice_id);
              if(this.allow_send_whatsapp=='0'){
                this.send_whatsapp_notification_customer(response.data.notifi_order_id);
                this.send_whatsapp_notification_merchant(response.data.notifi_order_id);
              }

              this.success_vibrate();
              this.step=1;

              this.name = "";
              this.phone = "";
              this.email = "";
              this.address = "";
              this.postcode = "";
              this.note = "";

              this.tab1_comfirm = false;
              this.tab2_comfirm = false;
              this.tab3_comfirm = false;
              this.start_date = "";
              this.delivery_time = "";
              this.current_use_coupon_code = "";

              this.$store.commit("clearcart");
              
         
              this.ipay_merchant_code=response.data.MerchantCode;
              this.ipay_invoice_id=response.data.notifi_invoice_id;
              this.ipay_amount=response.data.Amount;
              this.ipay_username=response.data.UserName;
              this.ipay_email=response.data.UserEmail;
              this.ipay_contact=response.data.UserContact;
              this.ipay_signature=response.data.signature;
              this.ipay_response_url=response.data.ResponseURL;
              this.ipay_backend_url=response.data.BackendURL;


              if(this.company_domain!==''){

                 window.location.href = "https://emenu.com.my/ipay-redirect?ipay_redirect=true&ipay_merchant_code="+ this.ipay_merchant_code
                 +"&ipay_invoice_id="+ this.ipay_invoice_id
                 +"&ipay_amount="+ this.ipay_amount
                 +"&ipay_username="+ this.ipay_username
                 +"&ipay_email="+ this.ipay_email
                 +"&ipay_contact="+ this.ipay_contact
                 +"&ipay_signature="+ this.ipay_signature
                 +"&ipay_response_url="+ this.ipay_response_url
                 +"&ipay_backend_url="+ this.ipay_backend_url;  

              }else{
                this.$nextTick(() => {
                    this.$refs.submit.click();
              })
              this.dialog_cart=false;
              }


              
              
            }
            else {
              this.vibrate();
              this.error_snackbar = true;
              this.error_snackbar_text = this.$t('order-failed'); 
              // this.form_status = false;
              // window.location.href = "https://channelsoft.com.my";
            }

            this.order_loading = false;
          })
          .catch((error) => {
            console.log(error);
            this.order_loading = false;
          });
      } else {
        this.error_snackbar = true;
        this.error_snackbar_text = "Please add at least one items";
        this.order_loading = false;
        this.dialog_cart = false;
      }
    },

    table_submit() {
      if(!this.is_working_time()==false){
            console.log('gg1');
        return;
      }

      this.order_loading = true;
      var qty = 0;

      for (var i = 0; i < this.cart_items.length; i++) {
        // console.log(this.items[i].purchase_quantity);
        qty = qty + parseFloat(this.cart_items[i].quantity);
      }

      if (qty > 0) {
        const params = new URLSearchParams();
        params.append("create", "create");
        params.append("id", this.url);
        params.append("name", this.table_name);
        params.append("phone", this.table_name);
        params.append("email", '');
        params.append("delivery_fee", '0');
        params.append("address","");
        params.append("postcode","");
        params.append("request_self_collect","2");
        params.append("delivery_date","");
        params.append("delivery_time","");
        params.append("note", this.note);
        params.append("user_device_type", this.user_device_type);
        params.append("payment_method", '1');
        params.append("items", JSON.stringify(this.cart_items));
        params.append("coupon_code", this.current_use_coupon_code);
        params.append("longitude", this.longitude);
        params.append("latitude", this.latitude);
        
        // params.append("ref",  (this.$route.query.ref?this.$route.query.ref:''));

    
        axios({
          method: "post",
  
          url: this.domain + "/order/index.php",
          data: params,
        })
          .then((response) => {
            this.unsavedChanges = false;
              console.log(response);

            if (response.data.status == "1") {
              this.redirect_dialog = true;
              
              // this.redirect_text_en =
              //   "Redirect to whatsapp...Later remember to press send";
              // this.redirect_text_zh = "转着去Whatsapp...等等记得按发送";
              this.success_vibrate();
              this.trigger_notification(""+response.data.notifi_merchant_id,response.data.notifi_invoice_id);
              if(this.allow_send_whatsapp=='0'){
                this.send_whatsapp_notification_customer(response.data.notifi_order_id);
                this.send_whatsapp_notification_merchant(response.data.notifi_order_id);
              }
              this.name = "";
              this.phone = "";
              this.email = "";
              this.address = "";
              this.postcode = "";
              this.note = "";

              this.tab1_comfirm = false;
              this.tab2_comfirm = false;
              this.tab3_comfirm = false;
              this.start_date = "";
              this.delivery_time = "";
              this.current_use_coupon_code = "";

              this.$store.commit("clearcart");

              // this.$router.push("/" + this.merchant_url+(this.$route.query.ref?'?ref='+this.$route.query.ref:''));
              this.$router.push("/" + this.merchant_url);

              this.dialog_cart = false;

              var v = this;
              setTimeout(function () {
                v.redirect_dialog = false;
                // v.reset_form();

                // window.top.location.href = response.data.order_url;
                window.location.href = response.data.order_url;
              }, 4500);

              // this.$refs.form.reset();
            } else if (response.data.status == "3") {

              this.error_snackbar = true;
              this.error_snackbar_text = this.$t('area-not-in-coverage');
              this.vibrate();

            } else if (response.data.status == "4") {
              console.log(response.data.fpay_payment_url);
              this.trigger_notification(""+response.data.notifi_merchant_id,response.data.notifi_invoice_id);
              if(this.allow_send_whatsapp=='0'){
                this.send_whatsapp_notification_customer(response.data.notifi_order_id);
                this.send_whatsapp_notification_merchant(response.data.notifi_order_id);
              }

              this.success_vibrate();
              this.step=1;

              this.name = "";
              this.phone = "";
              this.email = "";
              this.address = "";
              this.postcode = "";
              this.note = "";

              this.tab1_comfirm = false;
              this.tab2_comfirm = false;
              this.tab3_comfirm = false;
              this.start_date = "";
              this.delivery_time = "";
              this.current_use_coupon_code = "";

              this.$store.commit("clearcart");
              window.location.href = response.data.fpay_payment_url;


              
            } else if (response.data.status == "5") {
              this.error_snackbar = true;
              this.error_snackbar_text = this.$t('fpay-connect-failed');
              this.vibrate();
            } else if (response.data.status == "6") {
              this.error_snackbar = true;
              this.error_snackbar_text =
                this.$t('fpay-min-purchase')+ parseFloat(response.data.min).toFixed(2);
                this.vibrate();
            } else if (response.data.status == "7") {
              this.vibrate();
              this.error_snackbar = true;
              this.error_snackbar_text = this.$t('fpay-connect-failed');
            } else if (response.data.status == "8") {
              this.vibrate();
              this.error_snackbar = true;
              this.error_snackbar_text = response.data.message;
            } else if (response.data.status == "9") {
              this.vibrate();
              this.error_snackbar = true;
              this.error_snackbar_text = this.$t('fpay-connect-failed');
              this.$store.commit("clearcart");
            } else if (response.data.status == "10") {
              this.vibrate();
              this.error_snackbar = true;
              this.error_snackbar_text = this.$t('product-price-invalid');
              this.$store.commit("clearcart");
            } else if (response.data.status == "11") {
              this.vibrate();
              this.error_snackbar = true;
              this.error_snackbar_text =  this.$t('product-stock-invalid');
              this.check_stock = response.data.stock;
              this.stock_change();
            } else if (response.data.status == "12") {
              // this.redirect_dialog = true;
              // this.redirect_text_en =
              //   "Redirect to whatsapp...Later remember to press send";
              // this.redirect_text_zh = "转着去Whatsapp...等等记得按发送";
            
              this.trigger_notification(""+response.data.notifi_merchant_id,response.data.notifi_invoice_id);
             
              this.success_vibrate();
              this.step=1;

              this.name = "";
              this.phone = "";
              this.email = "";
              this.address = "";
              this.postcode = "";
              this.note = "";

              this.tab1_comfirm = false;
              this.tab2_comfirm = false;
              this.tab3_comfirm = false;
              this.start_date = "";
              this.delivery_time = "";
              this.current_use_coupon_code = "";

              this.$store.commit("clearcart");

              // this.$router.push("/" + this.merchant_url);

              this.dialog_cart = false;

                // window.top.location.href = response.data.order_url;
                // window.location.href = response.data.order_url;
                // console.log( this.merchant_url+"/order-payment/"+ response.data.order_url_link);
              // this.$router.push("/" + this.merchant_url+"/order-payment/"+ response.data.order_url_link+"?oid="+response.data.notifi_order_id+"&allow_w="+this.allow_send_whatsapp+(this.$route.query.ref?'&ref='+this.$route.query.ref:''));
              this.$router.push("/" + this.merchant_url+"/order-payment/"+ response.data.order_url_link+"?oid="+response.data.notifi_order_id+"&allow_w="+this.allow_send_whatsapp);

              //  if(this.allow_send_whatsapp=='0'){
              //   this.send_whatsapp_notification_customer(response.data.notifi_order_id);
              //   this.send_whatsapp_notification_merchant(response.data.notifi_order_id);
              // }
          


              // this.$refs.form.reset();
            }else if (response.data.status == "13") {
              this.ipay_overlay=true;
              // ipay payment 

              // console.log(response.data.fpay_payment_url);
              // this.trigger_notification(""+response.data.notifi_merchant_id,response.data.notifi_invoice_id);
              // if(this.allow_send_whatsapp=='0'){
              //   this.send_whatsapp_notification_customer(response.data.notifi_order_id);
              //   this.send_whatsapp_notification_merchant(response.data.notifi_order_id);
              // }

              this.success_vibrate();
              this.step=1;

              this.name = "";
              this.phone = "";
              this.email = "";
              this.address = "";
              this.postcode = "";
              this.note = "";

              this.tab1_comfirm = false;
              this.tab2_comfirm = false;
              this.tab3_comfirm = false;
              this.start_date = "";
              this.delivery_time = "";
              this.current_use_coupon_code = "";

              this.$store.commit("clearcart");
              
              
         
              this.ipay_merchant_code=response.data.MerchantCode;
              this.ipay_invoice_id=response.data.notifi_invoice_id;
              this.ipay_amount=response.data.Amount;
              this.ipay_username=response.data.UserName;
              this.ipay_email=response.data.UserEmail;
              this.ipay_contact=response.data.UserContact;
              this.ipay_signature=response.data.signature;
              this.ipay_response_url=response.data.ResponseURL;
              this.ipay_backend_url=response.data.BackendURL;


              this.$nextTick(() => {

                    this.$refs.submit.click();

              })
              this.dialog_cart=false;
              
            }
            else {
              this.vibrate();
              this.error_snackbar = true;
              this.error_snackbar_text = this.$t('order-failed'); 
              // this.form_status = false;
              // window.location.href = "https://channelsoft.com.my";
            }

            this.order_loading = false;
          })
          .catch((error) => {
            console.log(error);
            this.order_loading = false;
          });
      } else {
        this.error_snackbar = true;
        this.error_snackbar_text = "Please add at least one items";
        this.order_loading = false;
        this.dialog_cart = false;
      }
    },

    get_product(url) {
      const params = new URLSearchParams();
      params.append("read", url);
      params.append("id", url);

      axios({
        method: "post",
        url: this.domain + "/product/index.php",
        data: params,
      })
        .then((response) => {
          if (response.data.status == "1") {
            this.form_status = true;
            this.items = response.data.product_function;
            console.log(JSON.stringify(this.items));

            for (var i = 0; i < this.items.length; i++) {
              this.items[i].description = this.items[i].description.replace(
                /\n/g,
                "<br/>"
              );
              console.log(this.items[i].description);
              this.$set(this.items[i], "quantity", "0");
              this.$set(this.items[i], "remark", "");
              this.$set(this.items[i], "rows", "1");
              this.$set(this.items[i], "self_index", [i]);
            }
          } else {
            // this.form_status = false;
            // window.location.href = "https://channelsoft.com.my";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_category(url) {
      const params = new URLSearchParams();
      params.append("get_category", "get_category");
      params.append("form_id", url);

      axios({
        method: "post",
        // url: baseUrl + "/vege_web_v2/product/product.php",
        url: this.domain + "/form/index.php",
        data: params,
      })
        .then((response) => {
          console.log(response);
          if (response.data.status == "1") {
            this.categories = response.data.category;

            var categories_length = this.categories.length;

            for (var i = 0; i < this.categories.length; i++) {
              if (
                this.categories[i].category_id == 0 &&
                categories_length == 1
              ) {
                this.categories[i].name = "All";
              }
            }
            this.selected_category_id = this.categories[0].category_id;

            this.get_product(url);
          } else {
            // this.form_status = false;
            // window.location.href = "https://channelsoft.com.my";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    check_user_device_type() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        this.user_device_type = "1";
      } else {
        this.user_device_type = "2";
      }
    },

    check_delivery_fee(from) {
      if(from=='panel'){
        this.tab2_comfirm_loading=true;
      }
      if (this.request_self_collect == true) {
        this.delivery_fee = 0;
        if (from == "panel") {
          this.tab2_comfirm = true;
          this.tab2_red = false;
          this.panel = 1;
          // if (this.tab3_comfirm == false) {
          //   this.panel = 1;
          // } else {
          //   this.panel = null;
          // }
        }
        this.recheck_coupon_fee();
        this.tab2_comfirm_loading=false;
        return;
      }

      if (this.shipping_setting_status == "2" && this.address.length == 0) {
         this.tab2_comfirm_loading=false;
        this.recheck_coupon_fee();
        return;
      }

      if (this.postcode.length == 0 && this.shipping_setting_status != "2") {
         this.tab2_comfirm_loading=false;
        this.recheck_coupon_fee();
        return;
      }

      // if (
      //   this.longitude == "" &&
      //   this.latitude == "" &&
      //   this.shipping_setting_status == "2"
      // ) {
      //   this.recheck_coupon_fee();
      //   return;
      // }

      const params = new URLSearchParams();
      params.append("get_delivery_fee", "get_delivery_fee");
      params.append("postcode", this.postcode);
      params.append("latitude", this.latitude);
      params.append("longitude", this.longitude);
      params.append("address", this.address);
      params.append("total_amount", this.product_fee);
      params.append("url", this.url);

      params.append("merchant_id", this.merchant_id);
      params.append("customer_details_list", JSON.stringify(this.customer_details_list));
      params.append("state", this.state);
      params.append("country", this.country);
      params.append("sum_weight", this.sum_weight);


      axios({
        method: "post",
        url: this.domain + "/order/index.php",
        data: params,
      })
        .then((response) => {
          console.log(response);
          this.tab2_comfirm_loading=false;
          if (response.data.status == "1") {
            this.delivery_fee = response.data.delivery_fee;
            if (from == "panel") {
              this.tab2_comfirm = true;
              this.tab2_red = false;
              this.panel = 1;
              // if (this.tab3_comfirm == false) {
              //   this.panel = 2;
              // } else {
              //   this.panel = null;
              // }
            }
            this.tab2_error = "";
          } else if (response.data.status == "2") {
            this.delivery_fee = "0";
            this.tab2_error = this.$t('area-not-in-coverage');
          }
          else if (response.data.status == "3") {
            console.log('doublecheck');
            this.recheck_delivery_fee(from);

          } else if (response.data.status == "4") {
            
            this.delivery_fee = "0";
            this.tab2_error = this.$t('address-invalid');
          }
          else if (response.data.status == "5") {
            
            this.delivery_fee = "0";
            this.tab2_error = response.data.data;
          }
          else if (response.data.status == "6") {
            
            this.delivery_fee = "0";
            this.tab2_error = response.data.data;
          }else if(response.data.status == "7"){

              var lalamove_extra_charge=response.data.lalamove_extra_charge!==''?response.data.lalamove_extra_charge:0;

             this.delivery_fee = parseFloat( response.data.data.totalFee)+ parseFloat(lalamove_extra_charge);
            if (from == "panel") {
              this.tab2_comfirm = true;
              this.tab2_red = false;
              this.panel = 1;
        
            }
            this.tab2_error = "";
          }
          else if(response.data.status == "7.5"){
  
             this.delivery_fee =0;
            if (from == "panel") {
              this.tab2_comfirm = true;
              this.tab2_red = false;
              this.panel = 1;
        
            }
            this.tab2_error = "";
          }
           else if(response.data.status == "8"){

             this.delivery_fee = "0";
            this.tab2_error = response.data.message;
          }
          else if(response.data.status == "9"){

             this.delivery_fee = response.data.price;
            if (from == "panel") {
              this.tab2_comfirm = true;
              this.tab2_red = false;
              this.panel = 1;
        
            }
            this.tab2_error = "";
          }
          else{
            this.delivery_fee = "0";
            this.tab2_error = this.$t('address-error');
            this.recheck_delivery_fee(from);
          }
          this.recheck_coupon_fee();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    recheck_delivery_fee(from) {

      if (this.request_self_collect == true) {
        this.delivery_fee = 0;
        if (from == "panel") {
          this.tab2_comfirm = true;
          this.tab2_red = false;
          this.panel = 1;
          // if (this.tab3_comfirm == false) {
          //   this.panel = 1;
          // } else {
          //   this.panel = null;
          // }
        }
        this.recheck_coupon_fee();
         this.tab2_comfirm_loading=false;
        return;
      }

      if (this.shipping_setting_status == "2" && this.address.length == 0) {
        this.recheck_coupon_fee();
         this.tab2_comfirm_loading=false;
        return;
      }

      if (this.postcode.length == 0 && this.shipping_setting_status != "2") {
        this.recheck_coupon_fee();
         this.tab2_comfirm_loading=false;
        return;
      }

      // if (
      //   this.longitude == "" &&
      //   this.latitude == "" &&
      //   this.shipping_setting_status == "2"
      // ) {
      //   this.recheck_coupon_fee();
      //   return;
      // }

      const params = new URLSearchParams();
      params.append("get_delivery_fee", "get_delivery_fee");
      params.append("postcode", this.postcode);
      params.append("latitude", this.latitude);
      params.append("longitude", this.longitude);
      params.append("address", this.address);
      params.append("total_amount", this.product_fee);
      params.append("url", this.url);

      params.append("merchant_id", this.merchant_id);
      params.append("customer_details_list", JSON.stringify(this.customer_details_list));

        params.append("state", this.state);
        params.append("country", this.country);
      params.append("sum_weight", this.sum_weight);

      axios({
        method: "post",
        url: this.domain + "/order/index.php",
        data: params,
      })
        .then((response) => {
          console.log(response);
          this.tab2_comfirm_loading=false;
          if (response.data.status == "1") {
            this.delivery_fee = response.data.delivery_fee;
            if (from == "panel") {
              this.tab2_comfirm = true;
              this.tab2_red = false;
              this.panel = 1;
              // if (this.tab3_comfirm == false) {
              //   this.panel = 2;
              // } else {
              //   this.panel = null;
              // }
            }
            this.tab2_error = "";
          } else if (response.data.status == "2") {
            this.delivery_fee = "0";
            this.tab2_error = this.$t('area-not-in-coverage');
          }
           else if (response.data.status == "3") {
          
            console.log('dcheck3result');
            this.delivery_fee = "0";
            this.tab2_error = this.$t('address-error');
            
          }else if (response.data.status == "4") {
            
            this.delivery_fee = "0";
            this.tab2_error = this.$t('address-invalid');
          } else if (response.data.status == "5") {
            
            this.delivery_fee = "0";
            this.tab2_error = response.data.data;
          }
          else if (response.data.status == "6") {
            
            this.delivery_fee = "0";
            this.tab2_error = response.data.data;
          }else if(response.data.status == "7"){

            var lalamove_extra_charge=response.data.lalamove_extra_charge!==''?response.data.lalamove_extra_charge:0;

             this.delivery_fee = parseFloat(response.data.data.totalFee) + parseFloat(lalamove_extra_charge);
            if (from == "panel") {
              this.tab2_comfirm = true;
              this.tab2_red = false;
              this.panel = 1;
        
            }
            this.tab2_error = "";
          }
          else if(response.data.status == "7.5"){
  
             this.delivery_fee =0;
            if (from == "panel") {
              this.tab2_comfirm = true;
              this.tab2_red = false;
              this.panel = 1;
        
            }
            this.tab2_error = "";
          }
          else if(response.data.status == "8"){

             this.delivery_fee = "0";
            this.tab2_error = response.data.message;
          }
          else if(response.data.status == "9"){

             this.delivery_fee = response.data.price;
            if (from == "panel") {
              this.tab2_comfirm = true;
              this.tab2_red = false;
              this.panel = 1;
        
            }
            this.tab2_error = "";
          }
          else{
            console.log('else_error');

            this.delivery_fee = "0";
            this.tab2_error = 'Try again';
          }
          this.recheck_coupon_fee();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    check_coupon_fee() {
      if (this.coupon_code == "") {
        this.coupon_error = "Enter coupon";
        return;
      }
      this.current_use_coupon_code = "";
      this.discount_fee = "0";

      const params = new URLSearchParams();
      params.append("check_coupon", "check_coupon");
      params.append("coupon_code", this.coupon_code);
      params.append("public_url", this.url);
      params.append("phone", this.phone);
      params.append("total_amount", this.product_fee);
      params.append("total_quantity", this.product_quantity);
      params.append("items", JSON.stringify(this.cart_items));

      axios({
        method: "post",
        url: this.domain + "/order/index.php",
        data: params,
      })
        .then((response) => {
          console.log(response)
          if (response.data.status == "1") {
            this.current_use_coupon_code = this.coupon_code;
            this.coupon_code = "";
            this.coupon_dialog = false;
            this.discount_fee = response.data.discount_value;
            this.submit_snackbar = true;
            this.submit_snackbar_text = this.$t('coupon-added');
          } else if (response.data.status == "2") {
            this.discount_fee = "0";
            this.coupon_error = response.data.message;
          } else if (response.data.status == "3") {
            this.discount_fee = this.delivery_fee;
            this.current_use_coupon_code = this.coupon_code;
            this.coupon_code = "";
            this.submit_snackbar = true;
            this.coupon_dialog = false;
            this.submit_snackbar_text =this.$t('coupon-free-shipping');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    recheck_coupon_fee() {
      console.log("recheck co");
      if (this.current_use_coupon_code == "") {
        return;
      }
      this.discount_fee = "0";
      const params = new URLSearchParams();
      params.append("check_coupon", "check_coupon");
      params.append("coupon_code", this.current_use_coupon_code);
      params.append("public_url", this.url);
      params.append("phone", this.phone);
      params.append("total_amount", this.product_fee);
      params.append("total_quantity", this.product_quantity);
      params.append("items", JSON.stringify(this.cart_items));

      axios({
        method: "post",
        url: this.domain + "/order/index.php",
        data: params,
      })
        .then((response) => {
          console.log(response);

          if (response.data.status == "1") {
            this.discount_fee = response.data.discount_value;
          } else if (response.data.status == "2") {
            this.discount_fee = "0";
            this.current_use_coupon_code = "";
            this.error_snackbar = true;
            this.error_snackbar_text = response.data.message;
          } else if (response.data.status == "3") {
            this.discount_fee = this.delivery_fee;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_customer_details: _.debounce(function () {
      const params = new URLSearchParams();
      params.append("get_customer_details", "get_customer_details");
      params.append("url", this.url);
      params.append("phone", this.phone);

      axios({
        method: "post",
        url: this.domain + "/order/index.php",
        data: params,
      })
        .then((response) => {
          console.log(response);
          if (response.data.status == "1") {
            if (this.name.length == 0) {
              this.name = response.data.details[0].name;
            }

            if (this.email.length == 0) {
              this.email = response.data.details[0].email;
            }

            if (this.address.length == 0) {
              this.address = response.data.details[0].address;
            }

            if (this.postcode.length == 0) {
              this.postcode = response.data.details[0].postcode;
              this.get_city_state_from_postcode();
            }

            if (this.state.length  == 0) {
              this.state= response.data.details[0].state;
            }

             if (this.city.length  == 0) {
              this.city = response.data.details[0].city;
            }

            // this.check_delivery_fee();
          } else {
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, 800),

    get_city_state_from_postcode: _.debounce(function () {

      if (this.city.length !== 0 && this.state.length !== 0 && this.shipping_setting_status!=='3' && this.request_self_collect) {
           return;
      }

      if(this.country=='SG'){
        return;
      }

      const params = new URLSearchParams();
      params.append("get_city_state_from_postcode", "get_city_state_from_postcode");
      params.append("postcode", this.postcode);

      axios({
        method: "post",
        url: this.domain + "/order/index.php",
        data: params,
      })
        .then((response) => {
          console.log(response);
          if (response.data.status == "1") {

            if (this.state.length  == 0) {
              this.state= response.data.details[0].state;
            }

             if (this.city.length  == 0) {
              this.city = response.data.details[0].city;
            }

            // this.check_delivery_fee();
          } else {
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, 800),
    clear_search_content() {
      this.search_content = "";
    },


    delivery_collect_clicked() {
      if (this.delivery_collect == true) {
        console.log("1");
        this.delivery_collect = true;
        this.request_self_collect = false;
      } else {
        console.log("2");

        this.delivery_collect = false;
        this.request_self_collect = true;
      }
    },

    request_self_collect_clicked() {
      if(this.delivery_option==true){

      if (this.request_self_collect == true) {
        console.log("1");
        this.request_self_collect = true;
        this.delivery_collect = false;
      } else {
        console.log("2");

        this.request_self_collect = false;
        this.delivery_collect = true;
      }
      }else{
            this.$nextTick(() => {
              this.request_self_collect = true;

          })
      }

    },

    allowedDates(a) {
      return this.availableDates.includes(a);
    },

    pickerUpdate: function (val) {
      let totalDay = moment(val, "YYYY-MM").daysInMonth();
      console.log(totalDay);

      let availableDates = [];

      let monthNow = moment().format("M");
      let yearNow = moment().format("YYYY");
      let monthSelected = moment(val).format("M");
      let day;

      if (monthNow == monthSelected && val.split("-")[0] == yearNow)
        day = moment().format("D");
      else day = 1;

      for (let i = day; i <= totalDay; i++) {
        let date = moment()
          .year(val.split("-")[0])
          .month(val.split("-")[1] - 1)
          .date(i)
          .format("YYYY-MM-DD");

        var workday = JSON.parse(this.working_day);

        if(date==moment().format('YYYY-MM-DD')){

          if((this.delivery_date_option==true && this.delivery_time_option==false)|| (this.delivery_date_option==true && this.delivery_time_option==true)){
             var d = new Date(); 
            //  var d = new Date("JULY 11, 2021 01:55:00");
            var getHours= d.getHours(); 
            var getMinutes= d.getMinutes(); 
            getHours = ("0" + getHours).slice(-2);
            getMinutes = ("0" + getMinutes).slice(-2);

            if( ((getHours+":"+getMinutes) >= this.working_time.start && (getHours+":"+getMinutes)<=this.working_time.end) ||
              ((getHours+":"+getMinutes) <= this.working_time.start && (getHours+":"+getMinutes)<=this.working_time.end) ){

              // availableDates.push(date);
              if (workday[moment(date).day()] == "0") {
                  availableDates.push(date);
              }

              continue;
            }else{
              continue;
            }
          }
        }

      if (workday[moment(date).day()] == "0") {
          availableDates.push(date);
        }


        // if (moment(date).day() == 0 && workday[0] == "0") {
        //   availableDates.push(date);
        // }
        // if (moment(date).day() == 1 && workday[1] == "0") {
        //   availableDates.push(date);
        // }
        // if (moment(date).day() == 2 && workday[2] == "0") {
        //   availableDates.push(date);
        // }
        // if (moment(date).day() == 3 && workday[3] == "0") {
        //   availableDates.push(date);
        // }
        // if (moment(date).day() == 4 && workday[4] == "0") {
        //   availableDates.push(date);
        // }
        // if (moment(date).day() == 5 && workday[5] == "0") {
        //   availableDates.push(date);
        // }
        // if (moment(date).day() == 6 && workday[6] == "0") {
        //   availableDates.push(date);
        // }
      }
      this.availableDates = availableDates;
      this.allowedDates();
    },

    theFormat(number) {
      return number.toFixed(2);
    },

    product_onclick(product_id,slug) {
      this.vibrate();
      // window.navigator.vibrate(25); 
      // const canVibrate = window.navigator.vibrate
      // if (canVibrate) {window.navigator.vibrate(25)}

      console.log('poos');
      console.log(this.scrollpos);
      this.$store.commit('changeposition_y', this.scrollpos);
      
      // this.$router.push('/'+this.merchant_url + "/" + (slug!==''?slug+'-':'') + product_id+(this.$route.query.ref?'?ref='+this.$route.query.ref:''));
      this.$router.push('/'+this.merchant_url + "/" + (slug!==''?slug+'-':'') + product_id);
    },

    minus_cart_quantity(index) {
      this.$store.commit("minuscartqty", index);
    },

    add_cart_quantity(index, product_id) {
      for (var j = 0; j < this.items.length; j++) {
        if (product_id == this.items[j].product_id) {
          this.$store.commit("addcartqty", {
            index: index,
            stock: this.items[j].stock,
          });
          console.log(this.items[j].stock);
          return;
        }
      }
      this.$store.commit("addcartqty", { index: index, stock: "" });
    },

    // tab1_comfirm_btn() {
    //   this.$refs.tab1_form.validate();

    //   if (this.tab1_form) {
    //     // this.$store.commit("update_checkout_step_save",  'name', this.name);
    //     this.tab1_comfirm = true;
    //     this.tab1_red = false;
    //     if (this.tab2_comfirm == false) {
    //       this.panel = 1;
    //     } else if (this.tab3_comfirm == false) {
    //       this.panel = 2;
    //     } else {
    //       this.panel = null;
    //     }
    //   }
    // },

    tab2_comfirm_btn() {
      this.$refs.tab2_form.validate();
      // console.log(this.tab2_form);
      if (this.tab2_form) {
        // if (
        //   this.shipping_setting_status == "2" &&
        //   this.request_self_collect == false
        // ) {
        //   Vue.$geocoder.setDefaultMode("address"); // this is default
        //   var addressObj = {
        //     address_line_1: this.address,
        //   };

        //   Vue.$geocoder.send(addressObj, (response) => {
        //     console.log(response);

        //     if (response.status == "OK") {
        //       console.log(response.results[0].geometry.location.lat);
        //       this.latitude = response.results[0].geometry.location.lat;
        //       this.longitude = response.results[0].geometry.location.lng;
        //       this.check_delivery_fee("panel");
        //     } else {
        //       this.tab2_error =
        //         "Your Address Not Found. Please Enter Valid Address";
        //     }
        //   });
        // } else {
          this.check_delivery_fee("panel");
        //}
      }
    },

    // tab3_comfirm_btn() {
    //   this.$refs.tab3_form.validate();

    //   if (this.tab3_form) {
    //     this.tab3_red = false;
    //     this.tab3_comfirm = true;
    //     this.panel = null;
    //   }
    // },

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

    stock_change() {
      this.step = 1;
      for (var i = 0; i < this.check_stock.length; i++) {
        if (this.check_stock[i].quantity > this.check_stock[i].stock) {
          for (var j = 0; j < this.items.length; j++) {
            if (this.check_stock[i].product_id == this.items[j].product_id) {
              this.items[j].stock = this.check_stock[i].stock;
              break;
            }
          }
        }
      }
    },

    cart_checking_stock(product_id) {
      var cart_total_quantity = 0;
      for (var i = 0; i < this.cart_items.length; i++) {

        if(this.cart_items[i].type =='0'){
          if (this.cart_items[i].product_id == product_id) {
            cart_total_quantity =
              cart_total_quantity + parseFloat(this.cart_items[i].quantity);
          }

        }else{
          
          if (this.cart_items[i].product_id == product_id) {
            cart_total_quantity =
              cart_total_quantity + parseFloat(this.cart_items[i].quantity);
          }
          
        }
        

      }

      for (var j = 0; j < this.items.length; j++) {
        if (product_id == this.items[j].product_id) {
          if (this.items[j].stock == "") {
            return "";
          } else {

            if(this.items[j].type=='0'){
                if (cart_total_quantity > parseFloat(this.items[j].stock)) {
                return this.items[j].stock;
            }else{
              return '';
            }
            }
            
          }
        }
      }
    },

    full_cart_checking_stock() {
      for (var i = 0; i < this.cart_items.length; i++) {
        var stock = this.cart_checking_stock(this.cart_items[i].product_id);
        if (stock) {
          this.error_snackbar = true;
          this.error_snackbar_text = this.$t('item-out-of-stock');
          return;
        }
      }
      
      if(this.is_working_time()==true){
        this.error_snackbar = true;
        this.error_snackbar_text = this.$t('store-closed-now');
        return;
      }
      if(parseFloat(this.product_fee)<parseFloat(this.order_min_purchase)){
        this.error_snackbar = true;
        this.error_snackbar_text = this.$t('min-purchase') +' :RM'+this.order_min_purchase;
        return;
      }
      this.step = 2;
    },

    scrollposition(){
      console.log(window.scrollY);
    },

    open_cart(){
      this.vibrate();
        // if(this.dine_in_mode){
        //     this.dialog_table_cart = true;
        // }else{
            this.dialog_cart = true;
        // }
      
    },

    vibrate(){
      // window.navigator.vibrate(25); 
      const canVibrate = window.navigator.vibrate
      if (canVibrate) {window.navigator.vibrate(25)}
    },

    success_vibrate(){
      // window.navigator.vibrate([25,25]); 
      const canVibrate = window.navigator.vibrate
      if (canVibrate) {window.navigator.vibrate([25,25])}
    },

    is_working_time(){
      //1) date_open time_closed
      if((this.delivery_date_option==true && this.delivery_time_option==false) || (this.delivery_date_option==true && this.delivery_time_option==true)){
         var d = new Date(); 
   
          // if((d.getHours()+":"+d.getMinutes())>=this.working_time.start && (d.getHours()+":"+d.getMinutes())<=this.working_time.end){
            
          // }
        console.log('closed1');
        this.store_closed=false;
        return false;
      }

      if(!this.working_time){
        this.store_closed=false;
        console.log('closed2');
        return false;
      }

      let date = moment().format("YYYY-MM-DD");
        var workday = JSON.parse(this.working_day);

        var todayday=moment(date).day();
        if (workday[todayday] == "1") {
          console.log('closed5');
          this.store_closed=true; 
          return true;
        }

        //calc new date

        var d = new Date(); 
        
        var getHours= d.getHours(); 
        var getMinutes= d.getMinutes(); 
        getHours = ("0" + getHours).slice(-2);
        getMinutes = ("0" + getMinutes).slice(-2);
          if((getHours+":"+getMinutes)>=this.working_time.start && (getHours+":"+getMinutes)<=this.working_time.end){
            this.store_closed=false;
            console.log('closed3');
            return false;
        }
        
        console.log('closed4');
        this.store_closed=true; 
        return true;

    },

    clear_cart_item(){
      this.$store.commit("clearcart");
    },

    contact_store(type){

      
      if(type=='1'){
        //whatsapp
          window.location.href = "https://api.whatsapp.com/send?phone=" + this.whatsapp_number;

      }else if(type=='2'){
        //messenger_link
        window.location.href = this.messenger_link;
      }
      else if(type=='3'){
        //facebook_page_link
        window.location.href = this.facebook_page_link;
      }else if(type=='4'){
        //instagram_link
        window.location.href = this.instagram_link;
      }else if(type=='5'){
        //phone_number
        window.location.href = 'tel://' + this.phone_number;
      }
       
    },

    trigger_notification(merchant_id,invoice_id) {
 
      console.log('notification');
      const params = new URLSearchParams();
      params.append("merchant_id", merchant_id);
      params.append("invoice_id", invoice_id);
  
      axios({
        method: "post",
        url: "https://mobile.emenu.com.my/mobile_api/notification/index.php",
        data: params,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    check_boss(){
      axios.get("https://bossboleh.com/wp-json/ssm/v1/getSSMName/channel%20soft")
        .then((response) => {
          // console.log(response.status);
          console.log(response);
        });

    },

    send_whatsapp_notification_customer(order_id){

      
      console.log('notification');
      const params = new URLSearchParams();
      params.append("message_customer", '1');
      params.append("id", order_id);
  

      axios({
        method: "post",
        url: this.domain + "/whatsapp/index.php",
        data: params,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      
    },
    send_payment_whatsapp_notification_customer(order_id){
      const params = new URLSearchParams();
      params.append("request_upload_receipt  ", '1');
      params.append("id", order_id);
  

      axios({
        method: "post",
        url: this.domain + "/whatsapp/index.php",
        data: params,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    send_whatsapp_notification_merchant(order_id){
      
      console.log('notification');
      const params = new URLSearchParams();
      params.append("message_merchant", '1');
      params.append("id", order_id);
  

      axios({
        method: "post",
        url: this.domain + "/whatsapp/index.php",
        data: params,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      
    },

    testipay(){
        // this.$refs.epayment.submit();
        this.$refs.submit.click();
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
    check_ref_tier(ref){
        //api check tier
   
              console.log('check tier');

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
                this.tier_id=-1;
                this.global_rate=-1;
                this.global_status=-1;
                this.global_type=-1;
                this.product_setup();

               }
            })
            .catch((error) => {
              console.log(error);
            });



    },
    product_setup(){
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].description = this.items[i].description.replace(/\n/g, "<br/>");
        this.items[i].display_price='';
        this.items[i].in_stock=false;
        if(parseFloat(this.items[i].stock)>0|| this.items[i].stock==''){
          this.items[i].in_stock=true;
        }
        if(this.items[i].type=='1' && this.items[i].variant!==''){
          this.items[i].in_stock=false;
          var variant=JSON.parse(this.items[i].variant);
          console.log('variant');
          console.log(variant);
          var smallest=parseFloat(this.variant_actual_price(variant[0].price));

          for(var g=0; g<variant.length; g++){
            if(parseFloat(variant[g].stock)>0|| variant[g].stock==''){
              this.items[i].in_stock=true;
            }

            if(parseFloat(this.variant_actual_price(variant[g].price))<smallest){
               smallest=this.variant_actual_price(variant[g].price);
            }

          }
          this.items[i].display_price= parseFloat(smallest).toFixed(2);
        }

      }
    },
    variant_actual_price(price){
      if(this.check_json(price)){

           var price=JSON.parse(price);
           if(!price[0].hasOwnProperty('tier')){
              if(this.global_status==0){
                            if(this.global_type==0){
                              return parseFloat(price[0].normal)-(parseFloat(price[0].normal)*parseFloat(this.global_rate)/100);
                                
                            }else {
                                  var p=parseFloat(price[0].normal)-parseFloat(this.global_rate);
                                  if(p<0){
                                    return 0;
                                  }else{
                                    return p;
                                  }
                            }
                          }else{
                            
                            return parseFloat(price[0].normal);
                            
                          }
           }

          for(var i=0; i<price[0].tier.length; i++){

              if(price[0].tier[i].tier_id==this.tier_id){

                if(parseFloat(price[0].price_type)==0){
                    if(price[0].tier[i].rate==''){
                      //  return parseFloat(price[0].normal) 
                      
                        if(this.global_status==0){
                            if(this.global_type==0){
                              return parseFloat(price[0].normal)-(parseFloat(price[0].normal)*parseFloat(this.global_rate)/100);
                                
                            }else {
                                  var p=parseFloat(price[0].normal)-parseFloat(this.global_rate);
                                  if(p<0){
                                    return 0;
                                  }else{
                                    return p;
                                  }
                                
                            }
                          }else{
                            
                            return parseFloat(price[0].normal);
                            
                          }



                  }
                  return parseFloat(price[0].normal)-
                  (parseFloat(price[0].normal)*parseFloat(price[0].tier[i].rate)/100);
                  

                }else{
                  if(price[0].tier[i].rate==''){

                    if(this.global_status==0){
                            if(this.global_type==0){
                              return parseFloat(price[0].normal)-(parseFloat(price[0].normal)*parseFloat(this.global_rate)/100);
                                
                            }else {
                                  var p=parseFloat(price[0].normal)-parseFloat(this.global_rate);
                                  if(p<0){
                                    return 0;
                                  }else{
                                    return p;
                                  }
                                  break;
                            }
                          }else{
                            
                            return parseFloat(price[0].normal);
                            
                          }

                      //  return parseFloat(price[0].normal)  
                  }
                  var p= parseFloat(price[0].normal)-(parseFloat(price[0].tier[i].rate));

                    if(p<0){
                      return 0;
                    }else{
                      return p;
                    }
              
              
                }
              // console.log('pricekeke:'+ this.product_price);

              //  this.product_price=parseFloat(price[0].normal);

              }
              if(i==price[0].tier.length-1){
             

                        if(this.global_status==0){
            
                            if(this.global_type==0){


                            return parseFloat(price[0].normal)-
                              (parseFloat(price[0].normal)*parseFloat(this.global_rate)/100);
                    
                            }else {
                                var p=parseFloat(price[0].normal)-(parseFloat(this.global_rate));
                                  
                                  if(p<0){
                                    return 0;
                                  }else{
                                    return p
                                  }

                            }
                            
                          }else{      
                              // variant , no tier found, no global
                              
                              return parseFloat(price[0].normal);

                          }


              }


          }

            
          }else{

  if(this.global_status==0){
            
            if(this.global_type==0){

               return parseFloat(price)-(parseFloat(price)*parseFloat(this.global_rate)/100);
    
             }else {

                  var p= parseFloat(price)-parseFloat(this.global_rate);
                  
                  if(p<0){
                    return 0;
                  }else{
                    return p;
                  }

            }
            
          }else{

            return price;

          }






          }

    },
    product_actual_price(price){
      if(this.check_json(price)){
        
            //not variant product and price json
            price=JSON.parse(price);


          for(var i=0; i<price[0].tier.length; i++){

              if(price[0].tier[i].tier_id==this.tier_id){

                if(price[0].price_type==0){
                  

                  if(price[0].tier[i].rate==''){

                    if(this.global_status==0){
                            if(this.global_type==0){
                              return parseFloat(price[0].normal)-(parseFloat(price[0].normal)*parseFloat(this.global_rate)/100);
                                
                            }else{
                                  var p=parseFloat(price[0].normal)-parseFloat(this.global_rate);
                                  if(p<0){
                                    return 0;
                                  }else{
                                    return p;
                                  }
                               
                            }
                          }else{
                            
                            return parseFloat(price[0].normal);
                            
                          }

                      //  return parseFloat(price[0].normal)  
                  }
                  return parseFloat(price[0].normal)-(parseFloat(price[0].normal)*parseFloat(price[0].tier[i].rate)/100);
                  

                }else {

                    if(price[0].tier[i].rate==''){
                      if(this.global_status==0){
                            if(this.global_type==0){
                              return parseFloat(price[0].normal)-(parseFloat(price[0].normal)*parseFloat(this.global_rate)/100);
                                
                            }else {
                                  var p=parseFloat(price[0].normal)-parseFloat(this.global_rate);
                                  if(p<0){
                                    return 0;
                                  }else{
                                    return p;
                                  }
                                
                            }
                          }else{
                            
                            return parseFloat(price[0].normal);
                            
                          }

                      //  return parseFloat(price[0].normal)  
                  }
                 var p= parseFloat(price[0].normal)-(parseFloat(price[0].tier[i].rate));

                  if(p<0){
                    return 0;
                  }else{
                    return p
                  }

                }

              } 
                // not variant, no tier found check global
              if(i ==price[0].tier.length-1){

                        if(this.global_status==0){
            
                            if(this.global_type==0){

                              return parseFloat(price)-(parseFloat(price)*parseFloat(this.global_rate)/100);
                    
                            }else {

                                 var p=parseFloat(price)-parseFloat(this.global_rate);
                                  
                                  if(p<0){
                                    return 0;
                                  }else {
                                    return p
                                  }

                            }
                            
                          }else{

                            return parseFloat(price[0].normal);


                          }

              }

              
          }

        }else{
          // not variant and price not json

          if(this.global_status==0){
            
            if(this.global_type==0){

               return parseFloat(price)-(parseFloat(price)*parseFloat(this.global_rate)/100);
    
             }else {

                  var p= parseFloat(price)-parseFloat(this.global_rate);
                  
                  if(p<0){
                    return 0;
                  }else{
                    return p;
                  }

            }
            
          }else{

            return price;

          }
          
        }
    }
      

  },
};
</script>
<style >
.centered-input input {
  text-align: center;
  max-width: 27px;
}
.scroller {
  height: 100%;
}
.v-text-field--filled.v-input--dense.v-text-field--outlined.v-text-field--filled
  > .v-input__control
  > .v-input__slot,
.v-text-field--filled.v-input--dense.v-text-field--outlined
  > .v-input__control
  > .v-input__slot,
.v-text-field--filled.v-input--dense.v-text-field--single-line
  > .v-input__control
  > .v-input__slot,
.v-text-field--full-width.v-input--dense.v-text-field--outlined.v-text-field--filled
  > .v-input__control
  > .v-input__slot,
.v-text-field--full-width.v-input--dense.v-text-field--outlined
  > .v-input__control
  > .v-input__slot,
.v-text-field--full-width.v-input--dense.v-text-field--single-line
  > .v-input__control
  > .v-input__slot,
.v-text-field--outlined.v-input--dense.v-text-field--outlined.v-text-field--filled
  > .v-input__control
  > .v-input__slot,
.v-text-field--outlined.v-input--dense.v-text-field--outlined
  > .v-input__control
  > .v-input__slot,
.v-text-field--outlined.v-input--dense.v-text-field--single-line
  > .v-input__control
  > .v-input__slot {
  min-height: 20px !important;
}

.v-application .subtitle-1 {
  line-height: 1.3rem !important;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none !important;
  margin: 0 !important;
  /* <-- Apparently some margin are still there even though it's hidden */
}

input[type="number"] {
  -moz-appearance: textfield !important;
  /* Firefox */
}

.product.v-text-field input {
  font-size: 0.65em !important;
}

.product.v-text-field.v-text-field--enclosed .v-text-field__details,
.product.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot {
  padding: 0 2px !important;
}

.v-application--is-ltr
  .v-textarea.v-text-field--enclosed
  .v-text-field__slot
  textarea {
  resize: none !important;
}

.sticky {
  position: sticky !important;
  top: 0;
  z-index: 3;
}

.wrapper {
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80vh;
}

.wrapper_cart {
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 45vh;
}
.scroller {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.Rtablerow {
  display: flex;
}
.v-tab {
  padding: 0 5px !important;
}
.active_class_color {
  background-color: aqua !important;
}
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.v-tab {
  font-size: 0.675rem !important;
  min-width: 10px !important;
  padding: 0 10px !important;
}
.v-slide-group:not(.v-slide-group--has-affixes) > .v-slide-group__prev,
.v-slide-group:not(.v-slide-group--has-affixes) > .v-slide-group__next {
  display: none !important;
}
.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)
  > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes)
  .v-slide-group__prev {
  display: none !important;
  visibility: hidden;
}
.v-slide-group__prev {
  display: none !important;
}

.promo-title {
  text-align: center;
  line-height:1;
  font-weight: 700;
  font-size: 20px;
  color: rgb(255, 255, 255);
}

.containe_padding {
  padding: 30px;
}
.container-item {
  margin-top: 8px;
}
.main-title {
  text-align: center;
  font-weight: 800;
  font-size: 40px;
  color: rgb(255, 255, 255);
  margin-top: 15px;
}

.eapp-popup-block-variation-button-component {
  padding-top: 12px;
}

.button-component {
  height: 48px;
  border-color: rgb(236, 236, 236);
  background-color: transparent;
  font-size: 16px;
  color: rgb(236, 236, 236);
  border: 2px solid;
  display: inline-flex;
  cursor: pointer;
}

.button-component {
  overflow: hidden;
  box-sizing: border-box;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  width: 100%;
  padding: 0 12px;
  outline: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 700;
  line-height: 1;
  transition-property: border-color, background-color, color;
  transition-duration: 0.2s;
  transition-timing-function: ease;
}

.button-component-padding {
  padding-top: 12px;
}
.small-title {
  text-align: center;
  font-weight: 500;
  font-size: 11px;
  color: rgb(221, 221, 221);
}

.small-title-spacing {
  height: 8px;
}

.small-subtitle-height {
  line-height: 1.4;
}
.small-subtitle {
  text-align: center;
  font-size: 11px;
  color: rgb(211, 211, 211);
}
.top-spacing {
  height: 13px;
}
.fixedd {
  position: sticky;
  top: 10px;
  left: 10px;
}
.eapp-popup-control-close-component.jsx-3111435847 {
  top: 12px;
  right: 12px;
}
.cLmiHt {
  position: absolute;
  z-index: 9998;
  pointer-events: all;
}
.bhCgZe {
  display: inline-flex;
  cursor: pointer;
}
.eapp-popup-control-close-component {
  padding: 4px;
}
.eapp-popup-control-close-component.jsx-3111435847 path {
  fill: rgba(167, 167, 167, 0.7);
}
.eapp-popup-control-close-icon {
  display: block;
  width: 10px;
  height: 10px;
}

.scollul {
  padding-left: 0px !important;
}
.v-application ul, .v-application ol {
    padding-left: 0px;
}
html {
  font-size: 10px !important;
}
.v-label {
  font-size: 13px !important;
}

.modal-footer {
  padding: 0px !important;
}
.button {
  color: #fff;
  background-color: #2c5a88;
}
.nav-tabs li a::after,
.dish-menu-category-list li a::after,
.nav-tabs .tab::after,
.dish-menu-category-list .tab::after {
  background-color: #002f6c;
}
.v-btn.v-size--default,
.v-btn.v-size--large {
  font-size: 1.4rem;
}

.product-topping-list.required-list .product-topping-list-tag {
  background: #4caf50;
  color: #ffffff;
}
.product-topping-list .product-topping-list-tag {
  background-color: rgb(178 189 255);
  color: #ffffff;
}

.product-row .product-card-name {
  color: #3d3d3d;
}

.v-toolbar {
  box-shadow: none !important;
}

.v-alert {
  padding: 8px !important;
}
.v-alert__icon.v-icon {
  align-self: center !important;
}

.dish-card picture {
  background: none !important;
  background-position-x: center;
  background-position-y: center;
  background-size: 100%;
  background-repeat: no-repeat;
}

.dish-card {
  border-radius: 10px;
  box-shadow: 0 0.5rem 0.9rem rgb(0 0 0 / 25%);

  margin-top: 10px !important;
  border: none;
}
.dish-card:hover {
  box-shadow: 0 0px 24px -3px rgb(0 0 0 / 45%) !important;
  transform: scale(1.05);
}

@media (max-width: 767px) {
  .dish-name {
    font-size: 1.6rem;
    height:3.9rem;
    white-space: normal;
  }
  .dish-card {
    padding: 16px 16px 8px 16px;
    border-radius: 10px;
    border: none;
    width: 100%;
    transition: 0.3s;
    
  }
  .with-image .dish-info {
    max-width: calc(100% - 80px - 16px);
  }
  .dish-card picture {
    height: 70px;
    width: 70px;
  }
  .dish-card-grid-overwrite {
    padding: 16px 16px 8px 16px;
    border-radius: 10px;
    border: none !important;
    width: 48.7069% !important;
    transition: 0.3s;
  
  }

  .dish-info-container-grid-overwrite {
    flex-direction: column-reverse !important;
  }
  .dish-info-grid-overwrite {
    width: 100% !important;
  }

  .dish-card-grid-overwrite picture {
    height: 98px !important;
    width: 98px !important;
    margin:auto;
    margin-bottom: 0px !important;
  }

  .dish-name-grid-overwrite {
    margin: 5px 0px 0px 0px !important;
  }

  .dish-info-grid-overwrite {
    max-width: 100% !important;
  }
}

.dish-category-section__inner-wrapper,
.menu__dish-placeholder {
  padding-bottom: 16px !important;
  border-radius: 20px !important;
}
.product-add-to-cart {
  box-shadow: 0 2px 28px 0 rgb(0 0 0 / 12%) !important;

  background: #fff !important;
}
.no-overflowy {
  overflow-y: hidden !important;
}
.dish-description {
  font-size: 1.2rem;
}
/* .test {
    height: calc(100% - 300px);
  } */
.cart-summary-items .cart-summary-item-list--expanded {
  overflow: hidden;
}
.cart-summary-items--wrapper {
  overflow-y: unset !important;
}
.vnis__button {
  -webkit-appearance: none;
  transition: background 0.5s ease !important;
  border: 0 !important;
  color: #000000 !important;
  cursor: pointer !important;
  float: left !important;
  font-size: 21px !important;
  margin: 0 !important;
  font-weight: 500 !important;
  width: 30px !important;
  height: 30px !important;
}
.vnis__input {
  -webkit-appearance: none;
  border: 1px solid #ececf5;
  float: left;
  font-weight: 500!important;
  font-size: 15px!important;
  margin: 0;
  outline: none;
  text-align: center;
  height: 28px !important;
  width: calc(100% - 67px) !important;
}
.v-expansion-panel-header {
  font-size: 1.4rem;
  font-weight: 500;
  padding: 16px 10px;
}
.v-expansion-panel-content__wrap {
  padding: 0px !important;
}
/* below for promo */
.promo-title {
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  color: rgb(255, 255, 255);
}

.containe_padding {
  padding: 30px;
}
.container-item {
  margin-top: 8px;
}
.main-title {
  text-align: center;
  font-weight: 800;
  font-size: 40px;
  color: rgb(255, 255, 255);
  margin-top: 15px;
}

.eapp-popup-block-variation-button-component {
  padding-top: 12px;
}

.button-component {
  height: 48px;
  border-color: rgb(236, 236, 236);
  background-color: transparent;
  font-size: 16px;
  color: rgb(236, 236, 236);
  border: 2px solid;
  display: inline-flex;
  cursor: pointer;
}

.button-component {
  overflow: hidden;
  box-sizing: border-box;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  width: 100%;
  padding: 0 12px;
  outline: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 700;
  line-height: 1;
  transition-property: border-color, background-color, color;
  transition-duration: 0.2s;
  transition-timing-function: ease;
}

.button-component-padding {
  padding-top: 12px;
}
.small-title {
  text-align: center;
  font-weight: 500;
  font-size: 11px;
  color: rgb(221, 221, 221);
}

.small-title-spacing {
  height: 8px;
}

.small-subtitle-height {
  line-height: 1.4;
}
.small-subtitle {
  text-align: center;
  font-size: 11px;
  color: rgb(211, 211, 211);
}
.top-spacing {
  height: 13px;
}
.fixedd {
  position: sticky;
  top: 0px!important;
  left: 0px!important;
}
.eapp-popup-control-close-component.jsx-3111435847 {
  top: 12px;
  right: 12px;
}
.cLmiHt {
  position: absolute;
  z-index: 9998;
  pointer-events: all;
}
.bhCgZe {
  display: inline-flex;
  cursor: pointer;
}
.eapp-popup-control-close-component {
  padding: 4px;
}
.eapp-popup-control-close-component.jsx-3111435847 path {
  fill: rgba(167, 167, 167, 0.7);
}
.eapp-popup-control-close-icon {
  display: block;
  width: 10px;
  height: 10px;
}
.tag {
  color: #fff;
  background-color: #999999;
  height: 32px;
  width: 32px;
  text-align: center;
  line-height: 32px;
  font-size: 16px;
  display: inline-block;
}
.v-snack__content {
  font-size: 1.3rem;
}
.dish-category-section {
  border-radius: 10px;
}
.menu__items-wrapper {
  margin-top: 0px;
}
.checkout__contact-information__full-name {
  font-size: 15px;
  font-weight: 500;
}
.ignore-css
{
    all:unset;
}
.scrollul {
  overflow: hidden;
}
.cart-summary-items .cart-summary-item-list--expanded {
    max-height: 100%!important;
}
@media (min-width: 960px){

.dish-menu-category-list .nav-holder {
    overflow: auto;
}}
.full-address-hint-color .v-messages__message{
    color: #0080ff;
}
#reminder_text_area{
  color:#fb8c00;
}
.v-alert--prominent .v-alert__icon {
    margin: 14px;
}
.strikethrough-diagonal {
	 position: relative;
	 color: #55555599;
   font-weight:300;
   font-size:13px;

}
 .strikethrough-diagonal:before {
	 position: absolute;
	 content: '';
	 left: 0;
	 top: 45%;
	 right: 0;
	 border-top: 1px  solid;
	 border-color: inherit;
	 -webkit-transform: skewY(-10deg);
	 -moz-transform: skewY(-10deg);
	 transform: skewY(-10deg);
}
 
/* .mdi-instagram {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
} */
.v-list-item__title {
    font-size: 1.5rem!important;
}

.v-carousel__controls {
    align-items: center;
    background: transparent !important;
    }
.search-field .v-label {
  color: #8f9296!important;
  opacity: 1;
  font-weight: 500;
}
.banner-slider .v-carousel__controls .v-icon{
  font-size:8px!important;
} 
.banner-slider  .v-carousel__controls{
  height:30px;
}

.category-items{
    cursor: pointer;
    padding-left: 10px !important;
    padding-right: 10px !important;
    margin:3px;
    /* min-width: 100px !important; */
    text-align: center !important;
    width: auto !important;
    font-weight: 400!important;
    font-size: 14px!important;;
    border: 1px solid #d3d1d1 !important;
    border-radius: 5px;


    
}


.category-items-selected.category-items{

    border: 1px solid #888888 !important;
    border-radius: 5px;
    font-weight: 600!important;

}

.dish-menu-category-list input {
    opacity: 1!important;
    z-index: 10;
}
</style>