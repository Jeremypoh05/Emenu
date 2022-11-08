import Vue from 'vue'
import Geocoder from "@pderas/vue2-geocoder";
 
Vue.use(Geocoder, {
    defaultCountryCode: null, // e.g. 'CA'
    defaultLanguage:    null, // e.g. 'en'
    defaultMode:        'address', // or 'lat-lng'
    googleMapsApiKey:   'AIzaSyCEpJK2U7IiLw3ll3QEXW10kn4zEIewklM'
});

