<template>
 <div id="app">
   
    <v-app style="overflow-x: hidden;"
    :class="{'mobile--container':$vuetify.breakpoint.xsOnly,'desktop--container':$vuetify.breakpoint.smAndUp }"
    >
        <v-container fluid ma-0 pa-0>
          <header-app v-if="$route.name != 'Search' && $route.name != 'Landing'"></header-app>
                <header-dashboard v-if="$route.name == 'Search'"></header-dashboard>
                    <!-- Componente de header -->
                        <!-- <transition name="scroll"> -->
                            <router-view />
                        <!-- </transition> -->
                    <footer-app ></footer-app>
        </v-container>
    </v-app>
    
  </div>
</template>

<script>
import headerDashboard from './components/headerDashboard.vue';


export default {
  components: { headerDashboard },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">

input{ 
margin-left: 10px !important;
}
@import "./sass/variables";
@import "./sass/mobile.scss";
@font-face {
  font-family: Roboto-Medium;
  src: url("./assets/fonts/Roboto-Medium.ttf");
}

.mobile--container{
  background-color: #f9faff !important;
}
.desktop--container{
  background-color: #1b1d22 !important;
}
 .v-carousel__controls{
       padding: 0px;
   }
   .v-carousel__controls__item{
      color: #243ffa !important;
      width: 5px;
   }
 .v-carousel__controls__item:hover{
      color: #eeeeee !important;
   }
body, html, .containerr{
  background: rgba(238, 223, 223, 0);
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  
}



::-webkit-scrollbar {
    background-color: #1b1d22;
    width: 11px;
}
* {
    scrollbar-width: thin;
    scrollbar-color:  #1b1d22;
}
*::-webkit-scrollbar-track {
    background-color:  #1b1d22;
}
*::-webkit-scrollbar-thumb {
    background:  linear-gradient(40deg,#141414 16%,#243FFA 100%);
    border-radius: 20px;
    padding: 10px;
}

.v-alert--prominent .v-alert__icon:after {
    background: red !important;
    border-radius: 50%;
    bottom: 0;
    content: "";
    left: 0;
    opacity: .16; 
    position: absolute;
    right: 0;
    top: 0;
}
</style>
