<template>
  <div class="dish-category-section" style="margin: 10px">
    <div class="inner-category">
      <h2 class="dish-category-title box-flex fd-row">
        <!-- <svg
              role="presentation"
              class="fl-interaction-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="24"
              height="24"
            >
              <path
                d="M10.346 5.598c-1.012-.89-1.42-1.944-1.222-3.16l.03-.168a.333.333 0 00-.545-.318l-.336.298c-.8.717-1.297 1.24-1.491 1.57l-.07.129c-.363.709-.707 2.156.621 3.602.972.84.667 2.1-.551 2.1-.525 0-.912-1.055-1.162-3.166l-.047-.436a.333.333 0 00-.564-.206C2.96 7.82 2.524 9.92 3.702 12.141a4.942 4.942 0 006.752 1.809c2.364-1.365 3.327-4.14 2.213-5.95l-.231-.304c-.584-.758-.73-.902-2.09-2.098z"
              ></path></svg
            > -->
        🔥{{ category_name }}
      </h2>
      <p class="dish-category-description" style="margin-bottom:0px;">{{$t('most-order')}}</p>
      <div>
        <ul class="popular-product-category-swimlane" style="text-center">
          <li v-for="item in items" :key="item.product_id">
            <button class="popular-dish-tile has-image" @click="product_onclick(item.product_id)">
              <picture class="popular-dish-tile__image">
                <div
                  class="photo"
                  :style="{
                    'background-image':
                      'url(' +
                      domain +
                      '/product/image.php?m=' +
                      merchant_id +
                      '&type=banner&im=' +
                      item.image.replace(/\s+/g, '%20') +
                      ')',
                    witdh: '350px;',
                  }"
                >
                      <v-overlay
                                          :absolute="true"
                                          :value="true"
                                          v-if="item.in_stock==false"
                                          >
                                           <!-- <v-img cover src="@/assets/images/sold-out.png">
                                           </v-img> -->
                                        <img style="width:125px; flex: 0 0 0%;" src="@/assets/images/sold-out.png" />

                                          </v-overlay>
                </div>
              </picture>
              <div class="popular-dish-tile__content">
                <div class="popular-dish-tile__title-container">
                  <h3
                    class="
                      popular-dish-tile__name
                      cl-white
                      f-18
                      fw-bold
                      lh-regular
                    "
                  >
                     {{item.name}}
                  </h3>
                </div>
               <!-- <div style="font-size:7px"><b>{{item}}</b></div>  -->
                <div
                  class="
                    popular-dish-tile__price
                    cl-neutral-primary
                    f-12
                    fw-bold
                  ">
                  {{item.display_price!==''?item.display_price:'RM'+parseFloat(item.price).toFixed(2)}}
                </div>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "popular_category",
  props: {
    category_name: {
      type: String,
    },
    domain: {
      type: String,
    },
    merchant_url: {
      type: String,
    },
    merchant_id: {
      type: Number,
    },
    items: {
      type: Array,
    },
    get_params: {
      type: String,
    },
  },

  data: function () {
    return {

    };
  },
  created() {},
  computed: {
    scrollpos(){
      return window.scrollY;
    },
  },
  methods: {
    product_onclick(product_id) {
      this.vibrate();
      this.$store.commit('changeposition_y', this.scrollpos);
      // this.$router.push('/'+this.merchant_url + "/" + product_id);
      this.$router.push('/'+this.merchant_url + "/" + product_id+(this.get_params!==''?'?ref='+this.get_params:''));

    },
    vibrate(){
      // window.navigator.vibrate(25); 
      const canVibrate = window.navigator.vibrate
      if (canVibrate) {window.navigator.vibrate(25)}
    },
  },
};
</script>
<style  scoped>
.popular-dish-tile {
  width: 176px;
  height: 176px;
  border-radius: 8px;
  position: relative;
  text-align: left;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 8%);
  margin-right: 16px;
  margin-top: 16px;
  margin-bottom: 24px;
  flex-shrink: 0;
}

.popular-dish-tile__image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.04);
  background-size: 80px;
  background-repeat: no-repeat;
  background-position: 50%;
  border-radius: 8px;
  overflow: hidden;
}
.popular-dish-tile__image .photo {
  width: 100%;
  height: 100%;
  background-position: 50%;
  background-size: cover;
  transition: opacity 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.popular-dish-tile__content {
  position: relative;
  z-index: 2;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
}
.popular-dish-tile__title-container {
  padding: 8px;
  position: relative;
}

.popular-dish-tile__name {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 4px;
}

.popular-dish-tile__price {
  position: absolute;
  right: 8px;
  bottom: 8px;
  padding: 4px 8px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 8%);
  font-weight: 700;
  color: #333333;
  font-size: 1.2rem;
}

.has-image .popular-dish-tile__title-container:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.85), transparent);
}

.popular-product-category-swimlane {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
}

.dish-category-section {
  margin-top: 16px;
}

.section-container {
  position: relative;
  width: 100%;
  max-width: 1248px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}
.menu__items-wrapper {
  margin-top: 0px;
}
.dish-category-section__inner-wrapper,
.menu__dish-placeholder {
  padding-bottom: 16px !important;
  border-radius: 20px !important;
}
.dish-category-section {
  border-radius: 10px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 24px;
  padding-bottom: 2px;
}

@media (min-width: 1265px) {
  .dish-category-section {
    padding-left: 80px;
    padding-right: 80px;
  }
}
@media (min-width: 768px) and (max-width: 1265px) {
  .dish-category-section {
    padding-left: 48px;
    padding-right: 48px;
  }
}
@media (min-width: 480px) and (max-width: 768px) {
  .dish-category-section {
    padding-left: 16px;
    padding-right: 16px;
  }
}

@media (min-width: 1265px) {
  .inner-category {
    max-width: 1248px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 80px;
    padding-right: 80px;
  }
}
@media (min-width: 768px) and (max-width: 1265px) {
  .inner-category {
    max-width: 1248px;

    margin-left: auto;
    margin-right: auto;
    padding-left: 48px;
    padding-right: 48px;
  }
}

@media (min-width: 480px) and (max-width: 768px) {
  .inner-category {
    max-width: 1248px;

    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>