<template>
  <div id="select-container"  :style="'pointer-events:'+pointer+'!important;touch-action:'+pointer+'!important;'" >
      <!---->
    <ul
      style="
        padding-left: 35px !important;
        margin: 16px 0px 16px 0px !important;
      "
    >
        <li :tooltip="selected_country.country" flow="down">
          <img :src="selected_country.flag" />
        </li>

        <template v-for="(coun,index) in country" >
            <li :key="index" :tooltip="coun.country" flow="down"  :style="coun.country==selected_country.country?'display:none':''" @click="select_country(index)">
            <img
            :src="coun.flag"
            />
        </li>
        </template>
     
    </ul>
  </div>
</template>
<script >
export default {
  name: "langg",
  data: function () {
    return {
      country: [
        {
          country: "en",
          flag:
            "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-800.png",

        },
        {
          country: "ms",
          flag: "https://cdn.countryflags.com/thumbs/malaysia/flag-800.png",

        },
        {
          country: "zh",
          flag: "https://cdn.countryflags.com/thumbs/china/flag-800.png",
        },
      ],
    
        pointer:'auto'
    };
  },
  created() {
      
  },
  computed:{
      selected_country(){ 
          var selected=this.$store.state.locale;
            for(var i =0; i<this.country.length; i++){
                if(selected==this.country[i].country){
                    return this.country[i]

                }
            }
            return  this.country[0];
        }
  },
  methods: {
    select_country(index) {
    this.pointer = 'none'
    setTimeout(() => this.pointer = 'auto', 1000);
    this.$store.commit('changelocale', this.country[index].country);
    
    
    },
  },
};
</script>
<style  lang="scss">
body {
  padding: 0;
  margin: 0;
}

#select-container {
  position: absolute;
  width: 45px;
  height: 40px;
  background: #ffffff;

  transform: translateX(-50%);
  border-radius: 10px;
  border: 0.5px solid rgba(202, 219, 226, 0.4);
  box-shadow: 0px 3px 6px rgba(79, 104, 113, 0.2);
  overflow: hidden;
  transition: height 0.2s ease-in-out, border-radius 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;

  &:hover {
    height: 105px; /* Can't use height: auto & transition effect */
    border-radius: 10px;
    box-shadow: 0px 7px 10px rgba(79, 104, 113, 0.3);
  }
  ul {
    list-style-type: none;
    position: relative;
    li {
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
      &:first-child {
        img {
          cursor: default;
        }
      }
      img {
        width: 25px;
        height: 25px;

        display: block;
        left: 50%;
        transform: translate(-103%, -40%);
        margin-bottom: 8px;

        border-radius: 50%;
        border: 2px solid #ffffff;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);

        cursor: pointer;
        transition: all 0.1s ease-in-out;
        &:hover {
          box-shadow: 0px 5px 10px rgba(79, 104, 113, 0.3);
          transform: translate(-103%, -40%) scale(1.08);
        }
      }
    }
  }
}

/* TOOLTIP STYLES FROM THIS PEN https://codepen.io/tutsplus/pen/WROvdG */
[tooltip] {
  position: relative; /* opinion 1 */
  font-weight: bold;
}

/* Applies to all tooltips */
[tooltip]::before,
[tooltip]::after {
  text-transform: none; /* opinion 2 */
  font-size: 12px; /* opinion 3 */
  line-height: 1;
  user-select: none;
  pointer-events: none;
  position: absolute;
  display: none;
  opacity: 0;
}
[tooltip]::before {
  content: "";
  border: 5px solid transparent; /* opinion 4 */
  z-index: 1001; /* absurdity 1 */
}
[tooltip]::after {
  content: attr(tooltip); /* magic! */

  /* most of the rest of this is opinion */
  font-family: Helvetica, sans-serif;
  text-align: center;

  /*
    Let the content set the size of the tooltips
    but this will also keep them from being obnoxious
    */
  width: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 3px 0px;
  border-radius: 0.3ch;
  box-shadow: 0 1em 2em -0.5em rgba(0, 0, 0, 0.35);
  background: #465663;
  color: #fff;
  z-index: 1000; /* absurdity 2 */
}

/* Make the tooltips respond to hover */
[tooltip]:hover::before,
[tooltip]:hover::after {
  display: block;
}

/* don't show empty tooltips */
[tooltip=""]::before,
[tooltip=""]::after {
  display: none !important;
}

/* FLOW: UP */
[tooltip]:not([flow])::before,
[tooltip][flow^="up"]::before {
  bottom: 50%;
  border-bottom-width: 0;
  border-top-color: #465663;
}
[tooltip]:not([flow])::after,
[tooltip][flow^="up"]::after {
  bottom: calc(50% + 5px);
}
[tooltip]:not([flow])::before,
[tooltip]:not([flow])::after,
[tooltip][flow^="up"]::before {
  left: -15.5px;
  bottom: 40px;
  transform: translate(-50%, -0.5em);
}
[tooltip][flow^="up"]::after {
  left: -15.5px;
  bottom: 45px;
  transform: translate(-50%, -0.5em);
}

/* FLOW: DOWN */
[tooltip][flow^="down"]::before {
  top: 70%;
  border-top-width: 0;
  border-bottom-color: #465663;
}
[tooltip][flow^="down"]::after {
  top: calc(70% + 5px);
}
[tooltip][flow^="down"]::before,
[tooltip][flow^="down"]::after {
  left: -15.5px;
  transform: translate(-50%, 0.5em);
}

/* KEYFRAMES */
@keyframes tooltips-vert {
  to {
    opacity: 0.9;
    transform: translate(-50%, 0);
  }
}

/* FX All The Things */
[tooltip]:not([flow]):hover::before,
[tooltip]:not([flow]):hover::after,
[tooltip][flow^="up"]:hover::before,
[tooltip][flow^="up"]:hover::after,
[tooltip][flow^="down"]:hover::before,
[tooltip][flow^="down"]:hover::after {
  animation: tooltips-vert 300ms ease-out forwards;
}
</style>