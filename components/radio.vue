<template>
  
  <div :style="show_border_error&&show_error?'border:solid 1px #ff8f8f; padding:5px':''">

    <template v-for="(vari, index) in vari_array" >
      <v-checkbox :key="index" v-model="vari.quantity" @change="click(index)" style="height:30px">
        <template v-slot:label>
          <span class="radio-text price-font ml-1 mr-2" style="color:#818c94;font-size: 14px !important; font-weight:600;">
            {{ vari.name }}
          </span>
          <v-spacer></v-spacer>

          <span
            class="price-font ml-1 mr-2"
            style="color:#7979a0;font-size: 13px !important; font-weight:600;">

            +RM&nbsp;{{ parseFloat(vari.price).toFixed(2) }}

          </span>
        </template>
      </v-checkbox>
    </template>
  </div>
</template>
<script>
export default {
  name: "checkbox-group",
   props: {
 
  	array: {
      type: Array,
  	},
    multiple: {
      type: Boolean,
  	},
    optional: {
      type: Boolean,
  	},
    min: {
      type: Number,
  	},
    max: {
      type: Number,
  	},
    show_error: {
      type: Boolean,
  	},
   },
  data: function () {
    return {
     vari_array:this.array,
     multi:this.multiple,
     option:this.optional,
    };
  },
  created(){
    for(var i=0;i<this.vari_array.length;i++){
        this.$set(this.vari_array[i], "quantity", 0);
      }
      if(this.option==false){
        this.vari_array[0].quantity=1;
      this.$emit("calc", "calc");

      }
    

      
  },
  mounted(){
    console.log('erer');
    console.log(this.vari_array);
    console.log(this.min);

  // if(this.min>0){
  //       for(var g=0; g<this.min;g++){
  //         this.vari_array[g].quantity=1;
  //       }
  //     } 
  },
  computed: {
    show_border_error(){

      var total=0;
          for(var i=0;i<this.vari_array.length;i++){
            if(this.vari_array[i].quantity==1){
              total=total+1;
            }
            if(i==this.vari_array.length-1){
              if(total<this.min){
                return true;
              }
            }

          }
          this.show_error=false;
              this.$emit("update_error", false);

          return false;
    }
  },
  methods: {
    test(index) {

      for(var g=0; g<this.min;g++){
        this.vari_array[g].quantity=1;
      }

        if(this.multi==false){
           console.log('1');
            for(var i=0;i<this.vari_array.length;i++){
              if(i!==index){
                this.vari_array[i].quantity=0;
              }
              
           }
          if(this.vari_array[index].quantity=0){
             
          }
            if(this.option==false){
                  this.$nextTick(() => {
                      this.vari_array[index].quantity=1;
                  })
              }else{

              }


        }else{

           console.log('2');
          if(this.vari_array[index].quantity==true){
              this.vari_array[index].quantity=1;
          }else{
            this.vari_array[index].quantity=0;
          }

        }


    },
    checking_min_max(index){
      
      //check current selected total
      var total=0;
      for(var i=0;i<this.vari_array.length;i++){
        if(this.vari_array[i].quantity==1){
          total=total+1;
        }

      }

      //check min
        // if(this.min!==-1){
        //   if(total<this.min){
        //       this.$nextTick(() => {
        //             this.vari_array[index].quantity=1;
        //         })
        //   }
        // }

         if(this.min==1){
          if(total<this.min){
              this.$nextTick(() => {
                    this.vari_array[index].quantity=1;
                })
          }
        }
        //check max
        if(this.max==1){
          for(var i=0;i<this.vari_array.length;i++){
            if(i!==index){
              console.log('geges')
              console.log(this.vari_array[i].quantity)
               
                  this.vari_array[i].quantity=0;
                  
            }

          }
           this.$nextTick(() => {
                      // this.vari_array[index].quantity=1;
             
                this.$emit("calc", "calc");

          })
                  
                  return
          }
        
      if(this.max!==-1){

          if(total>this.max){
              this.$nextTick(() => {
                      this.vari_array[index].quantity=0;
      this.$emit("calc", "calc");

                })
          }
      return

      }


    },
    click(index){

      //first type required to pick and only can select one (Example use: SELECT BIG / SMALL OF FOOD )
      if(this.option==false && this.multi== false){

            for(var i=0;i<this.vari_array.length;i++){
                  if(i!==index){
                    this.vari_array[i].quantity=0;
                  }
            }
            this.$nextTick(() => {
              
                this.vari_array[index].quantity=1;
                 this.$emit("calc", "calc");
                
            })
          this.checking_min_max(index);
          console.log('1-c')
      //second type optional to pick and only can select one (Example use: Nasi lemak - optional to add on chicken/ egg- one only)
      }else if(this.option==true && this.multi== false){

            for(var i=0;i<this.vari_array.length;i++){
                  if(i!==index){
                    this.vari_array[i].quantity=0;
                  }
                  
            }
            this.$nextTick(() => {
                              // this.vari_array[index].quantity=1;
                              this.$emit("calc", "calc");
                
            })
            
          this.checking_min_max(index);
          console.log('2-c')


      //third type required to pick and only can select more then one (Example use: Nasi lemak - at least add one drink or more)
      }else if(this.option==false && this.multi== true){

          console.log('3-c')


        if(this.vari_array[index].quantity==true){


               this.$nextTick(() => {
               this.vari_array[index].quantity=1;

                this.$emit("calc", "calc");
                
            })
              this.checking_min_max(index);

          }else{
              var selected_add_on=0;
            for(var i=0;i<this.vari_array.length;i++){
            
                  if(i!==index){
                    if(this.vari_array[i].quantity==1){
                      selected_add_on=selected_add_on+1
                    }
                  }
          }

          // if(selected_add_on==0){
          //     this.$nextTick(() => {
          //       this.vari_array[index].quantity=1;
          //       this.checking_min_max(index);
          //       return;
          //   })
          // }


            this.$nextTick(() => {
                                this.vari_array[index].quantity=0;
                              this.$emit("calc", "calc");
                
            })
      
          this.checking_min_max(index);
        }
      this.$emit("calc", "calc");



      //forth type optional to pick and only can select more  (Example use: Nasi lemak - can add many add on if you want)
      }else if(this.option==true && this.multi== true){
          console.log('4-c')

       if(this.vari_array[index].quantity==true){

           this.$nextTick(() => {
                  this.vari_array[index].quantity=1;
                  this.$emit("calc", "calc");
                
            })
        
              
              this.checking_min_max(index);

          }else{

            this.$nextTick(() => {
                   this.vari_array[index].quantity=0;
                  this.$emit("calc", "calc");
                
            })
           
            this.checking_min_max(index);

        }

       }
      

    }
  },
};
</script>
<style>
.v-input--selection-controls {
    margin-top: 0px!important;
    padding-top: 0px!important;
}
.price-font {
    font-family: "Montserrat", sans-serif;
}
</style>