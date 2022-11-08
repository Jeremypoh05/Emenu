<template v-if="table">
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
                            

                                RM&nbsp;{{ item.product_price }}
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

      </v-card>

</template>
<script>
export default {
  name: "dinin_cart",
  props: {
    data_array: {
      type: Array,
    },
  },

  data: function () {
    return {

    };
  },
  created() {},
  computed: {
  
  },
  methods: {
    
  },
};
</script>
 <style>

 </style>   