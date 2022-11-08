<template>
 <div>
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
// import axios from 'axios'
import { BASEURL } from "@/api/baseurl";
import axios from "axios";
export default {
  // components: {
  //   Logo,
  //   VuetifyLogo
  // },
  data() {
    return {
      domain: BASEURL,
      ipay_merchant_code:'',
      ipay_invoice_id:'',
      ipay_amount:'',
      ipay_username:'',
      ipay_email:'',
      ipay_contact:'',
      ipay_signature:'',
      ipay_response_url:'',
      ipay_backend_url:'',
  
    };
  },

 
  mounted(){

   

  }
  ,
  created() {
     if(!this.$route.query.ipay_redirect ){ 
      window.location.href = "https://emenu.com.my/";
      return;
    }
   if(this.$route.query.ipay_redirect ){
        this.ipay_merchant_code=this.$route.query.ipay_merchant_code;
        this.ipay_invoice_id=this.$route.query.ipay_invoice_id;
        this.ipay_amount=this.$route.query.ipay_amount;
        this.ipay_username=decodeURIComponent(this.$route.query.ipay_username);
        this.ipay_email=decodeURIComponent(this.$route.query.ipay_email);
        this.ipay_contact=decodeURIComponent(this.$route.query.ipay_contact);

        this.ipay_signature=decodeURIComponent(this.$route.query.ipay_signature);
        this.ipay_response_url=decodeURIComponent(this.$route.query.ipay_response_url);
        this.ipay_backend_url=decodeURIComponent(this.$route.query.ipay_backend_url);
         this.$nextTick(() => {
          this.$refs.submit.click();
      })
    }
      

    
  },
  methods: {
    send_whatsapp_notification_customer(order_id){
      console.log(order_id);
      console.log('noti_customer');
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

    send_whatsapp_notification_merchant(order_id){

      
      console.log(order_id);
      console.log('noti_mercgabt');
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
      
    }

  },
};
</script>
<style>
</style>
