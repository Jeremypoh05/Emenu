export const state = () => ({
    cart: [],
    merchant: [],
    checkout_step_save:{phone:'',name:'',email:'',address:'',postcode:'',delivery_collect:true,request_self_collect:false,
    start_date:'',delivery_time:'',payment_method:0,current_use_coupon_code:'',discount_fee:'',tab1_comfirm:false,tab2_comfirm:false,tab3_comfirm:false},
    locale: "en",
    main_position_y:0,
})

export const getters = { // = computed properties
    
    product_used_stock: (state) => (id,type,selected_variant_id) => {


        var stock=0;
        if(type=='0'){
            for(let i =0; i<state.cart.length; i++){
                if(state.cart[i].product_id==id){
                    stock=stock+state.cart[i].quantity
                }
            }
    
            return stock
        }else{
            for(let i =0; i<state.cart.length; i++){
                if(state.cart[i].product_id==id){
                    for(let g =0; g<state.cart[i].variant.length; g++){
                        if(selected_variant_id==state.cart[i].variant[g].id){
                            if(state.cart[i].variant[g].selected==true){
                            stock=stock+state.cart[i].quantity
                                
                            }

                        }
                    }
                    
                }
            }
    
            return stock
        }
        
      },
     

  }




export const actions = {
    fetchCart (context,merchant_url) {
        if(process.browser){
        if(localStorage.getItem('cart') && localStorage.getItem('merchant') ) {

            if(localStorage.getItem('merchant')==merchant_url){
                context.commit('setCart',JSON.parse(localStorage.cart));

            }else{
                context.commit('clearcart');
                context.commit('setMerchant',merchant_url);

            }



        }else{
            localStorage.merchant=merchant_url;
            localStorage.cart=[];
        }
    }
    },
    fetchlocale (context,fetchlocale) {
        if(process.browser){
        if(localStorage.getItem('locale')) {
            context.commit('changelocale',localStorage.locale);

        }else{
            context.commit('changelocale',fetchlocale);
        }
    }
    }
}

export const mutations = {
    changeposition_y(state, main_position_y) {
        state.main_position_y = main_position_y
    },
    changelocale (state, locale) {
        if(locale==''){
            state.locale = 'en'
            // localStorage.locale=state.locale;
        }else{
            state.locale = locale
            localStorage.locale=state.locale;
        }
        
    },
    setMerchant (state, merchant) {
        state.merchant = merchant
        localStorage.merchant=state.merchant;

    },
    setCart (state, cart) {
        state.cart = cart
    },
    updateCart(state,cart_index_and_qty){
     
        state.cart[cart_index_and_qty.index].quantity=state.cart[cart_index_and_qty.index].quantity+cart_index_and_qty.quantity
        localStorage.cart=JSON.stringify(state.cart);
        
    },
    pushCart(state,cart_item){
        state.cart.push(
            cart_item
          )
    localStorage.cart=JSON.stringify(state.cart);

    },

    addcartqty(state,cart_data){
        var stock_used=0;
        //check stock used
        for(let i=0; i<state.cart.length; i++){
            if(state.cart[i].product_id==state.cart[cart_data.index].product_id){
                stock_used=stock_used+state.cart[i].quantity
            }
        }
        if(cart_data.stock!==''){

            if(stock_used<cart_data.stock){
                state.cart[cart_data.index].quantity=state.cart[cart_data.index].quantity+1;
                localStorage.cart=JSON.stringify(state.cart);
            }
            
        }else{
            state.cart[cart_data.index].quantity=state.cart[cart_data.index].quantity+1;
            localStorage.cart=JSON.stringify(state.cart);
        }
        
        
    },
    minuscartqty(state,cart_index){
        
        state.cart[cart_index].quantity=state.cart[cart_index].quantity-1;

        if(state.cart[cart_index].quantity<1){
            state.cart.splice(cart_index, 1);
        }
        localStorage.cart=JSON.stringify(state.cart);

        
    },
    clearcart(state){
        state.cart=[];
        localStorage.cart=JSON.stringify(state.cart);

    },
    update_checkout_step_save(state, { object_name, object_data })
    {   
        

        if(object_name=='phone'){state.phone=object_data;
        }
        if(object_name=='name'){state.name=object_data;
        }
        if(object_name=='email'){state.email=object_data;
        }
        if(object_name=='address'){state.address=object_data;
        }
        if(object_name=='postcode'){state.postcode=object_data;
        }
        if(object_name=='delivery_collect'){state.delivery_collect=object_data;
        }
        if(object_name=='request_self_collect'){state.request_self_collect=object_data;
        }
        if(object_name=='start_date'){state.start_date=object_data;
        }
        if(object_name=='delivery_time'){state.delivery_time=object_data;
        }
        if(object_name=='payment_method'){state.payment_method=object_data;
        }
        if(object_name=='current_use_coupon_code'){state.current_use_coupon_code=object_data;
        }
        if(object_name=='discount_fee'){state.discount_fee=object_data;
        }
        if(object_name=='tab1_comfirm'){state.tab1_comfirm=object_data;
        }
        if(object_name=='tab2_comfirm'){state.tab2_comfirm=object_data;
        }
        if(object_name=='tab3_comfirm'){state.tab3_comfirm=object_data;
        }
        
        

    }      
}





