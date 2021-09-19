<template>
  <v-card color="#141414" flat tile class="elevation-0" height="78">
    <v-row class="pa-0 ma-0  justify-space-between">
      <v-col
        cols="7"
        md="5"
        sm="3"
        lg="3"
        style="height:78px;"
        class=""
        :class="{
          'text-right ': $vuetify.breakpoint.smAndUp,
          'text-left ': $vuetify.breakpoint.xsOnly,
        }"
      >
        <v-spacer></v-spacer>
        <router-link to="/">
        <img
          :class="{
            'ml-15': $vuetify.breakpoint.mdAndUp,
          }"
          class="pa-2 ma-2"
          width="200"
          :src="require('@/assets/logo-azul-blanco.png')"
          alt=""
        />
        </router-link>
      </v-col>

      <v-col
        cols="5"
        md="7"
        lg="6"
        sm="8"
        style="height:78px;"
        class=" justify-center d-flex align-center"
      >
        <v-row class="pa-0 ma-0  ">
          <v-col cols="12" class="  ">
            <v-row v-if="$vuetify.breakpoint.mdAndUp" :class="{'justify-end' : $vuetify.breakpoint.mdAndUp}" class=" align-center">
              <v-col cols="4" sm="5" lg="5" class="pa-0 ma-0 "
                     :class="{ 'text-right mr-5' : $vuetify.breakpoint.mdAndUp,
                               'text-left'  : $vuetify.breakpoint.smAndDown }"
                   >
                <v-btn
                  elevation="4"
                  color="rgba(176,176,176,0.38)"
                  
                  active-class="btn--textt "
                  style="margin: 0 10px 0 0;
                    font-family: Roboto !important;
                    font-size: 14px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: normal;
                    letter-spacing: normal;
                    text-align: right;
                    color: #fff;"
                  v-if="$vuetify.breakpoint.smAndUp"
                >
                  100,45114710
                  <span
                    class="ml-2"
                    style="font-family: Roboto-Medium; color:white; font-size:15px; text-transform: unset !important;"
                  >
                    NMBC</span
                  >
                </v-btn>
              </v-col>
              <v-col cols="4" sm="5" lg="4" class="pa-0 ma-0  "
              :class="{'text-left' : $vuetify.breakpoint.mdAndUp}"
              >
                <v-btn
                  elevation="4"
                  color="rgba(176,176,176,0.38)"
                  max-width="160px"
                  active-class="num__crypto "
                  style="margin: 0 10px 0 0;
                    font-family: Roboto !important;
                    font-size: 14px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: normal;
                    letter-spacing: normal;
                    text-align: right;
                    color: #fff;
                    text-transform: lowercase;
                    "
                  v-if="$vuetify.breakpoint.smAndUp"
                >
                  0X0d17…esadb
                </v-btn>

                <v-btn
                  elevation="4"
                  color="rgba(176,176,176,0.38)"
                  width="25px"
                  regular
                  active-class="btn--text  "
                  style="font-family: Roboto-Medium; color:white; font-size:15px; text-transform: unset !important;"
                  v-if="$vuetify.breakpoint.smAndUp"
                >
                  ....
                </v-btn>
              </v-col>
            </v-row>

            <v-row v-if="$vuetify.breakpoint.smAndDown" :class="{'justify-end': $vuetify.breakpoint.smAndDown}">
            <v-col  cols="3" class=" justify-end  align-end text-right d-flex  elevation-0">
             <v-app-bar-nav-icon
             @click="ShowMenuMobile()"   
             class="pa-2 ma-2" 
             v-if="$vuetify.breakpoint.smAndDown" 
             color="#ffffff"></v-app-bar-nav-icon> 
           </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      
    </v-row>
    <!-- version mdOnly -->
     <!-- Section Sub-header version responsive -->
    <v-row style="width:100%;" v-if="ocultar">
      <v-col cols="12" class="ml-3 pa-0 ma-0">
       
        
    
        <v-row  :class="{'justify-end' : $vuetify.breakpoint.mdAndUp}" class="  align-center" style="height:60px;">
              <v-col cols="6" sm="6" lg="6" class="pa-0 ma-0 "
                     :class="{ 'text-right ' : $vuetify.breakpoint.mdAndUp,
                               'text-right'  : $vuetify.breakpoint.smAndDown }"
                   >
                <v-btn
                  elevation="4"
                  color="rgba(176,176,176,0.38)"
                  
                  active-class="btn--textt "
                  style="margin: 0 10px 0 0;
                    font-family: Roboto !important;
                    font-size: 14px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: normal;
                    letter-spacing: normal;
                    text-align: right;
                    color: #fff;"
                  v-if="$vuetify.breakpoint.smAndUp"
                >
                  100,45114710
                  <span
                    class="ml-2"
                    style="font-family: Roboto-Medium; color:white; font-size:15px; text-transform: unset !important;"
                  >
                    NMBC</span
                  >
                </v-btn>
              </v-col>
              <v-col cols="6" sm="6" lg="6" class="pa-0 ma-0    "
              :class="{'text-left' : $vuetify.breakpoint.mdAndUp}"
              >
                <v-btn
                  elevation="4"
                  color="rgba(176,176,176,0.38)"
                  max-width="160px"
                  active-class="num__crypto "
                  style="margin: 0 10px 0 0;
                    font-family: Roboto !important;
                    font-size: 14px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: normal;
                    letter-spacing: normal;
                    text-align: right;
                    color: #fff;
                    text-transform: lowercase;
                    "
                  v-if="$vuetify.breakpoint.smAndUp"
                >
                  0X0d17…esadb
                </v-btn>

                <v-btn
                  elevation="4"
                  color="rgba(176,176,176,0.38)"
                  width="25px"
                  regular
                  active-class="btn--text  "
                  style="font-family: Roboto-Medium; color:white; font-size:15px; text-transform: unset !important;"
                  v-if="$vuetify.breakpoint.smAndUp"
                >
                  ....
                </v-btn>
              </v-col>
            </v-row>
    
      </v-col>
    </v-row>
    <!-- fin de version mdOnly -->

   
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: "",
      desactivar: false,
      ocultar: false,
      rounded: false,
      rutas: [
        "Inicio",
        "Conócenos",
        "Tokenomic",
        "equipo",
        "roadmap",
        "faq",
        "whiterpapper",
      ],
    };
  },
  methods: {
    ShowMenuMobile() {
      if (!this.ocultar) {
        return (this.ocultar = true);
      } else {
        this.ocultar = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.num__crypto {
  margin: 0 10px 0 0;
  font-family: Roboto !important;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #fff;
  text-transform: lowercase;
}
.btn696 {
}
.btn--text {
  color: white !important;
}

.texto-nav {
  font-family: Roboto-Medium;
  font-size: 13px;
  display: inline-flex;
  cursor: pointer;
  color: #ffffff;
}

.texto-nav:hover {
  color: #243ffa;
}
.img--logo {
  margin-left: -250px;
}
</style>
