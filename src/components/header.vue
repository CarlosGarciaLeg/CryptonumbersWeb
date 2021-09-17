<template>
  <v-card style="background-color: rgba(0,0,0,0.0);" flat tile class="elevation-0 header-content">
    <v-row class="pa-0 ma-0 transparent d-flex "
   
    >
      <v-col
        cols="7"
        md="5"
        sm="6"
        lg="3"
        class=""
        :class="{
          'text-right ':  $vuetify.breakpoint.smAndUp,
          'text-left ': $vuetify.breakpoint.xsOnly,
        }"
      >
        <v-spacer></v-spacer>
        <router-link to="/">
        <img
          :class="{
          'ml-15':  $vuetify.breakpoint.mdAndUp,
        }"
          class="pa-2 ma-2"
          width="200"
          :src="require('@/assets/logo-blanco.png')"
          
          alt=""
        /></router-link>
      </v-col>

      <v-col
        cols="12"
        md="6"
        xs="12"
        lg="6"
        v-if="$vuetify.breakpoint.lgOnly"
        class="mt-3 text-center  ml-5 justify-center"
      >
      
        <div
          v-for="(elem, item) in rutas"
          :key="item"
          v-ripple
          class=" texto-nav text-uppercase align-center justify-center  pa-1  ma-1"
          style=""
        >
        <router-link class="texto-nav text-uppercase" :to="urlNavigation[item]">
          {{ elem }}
          </router-link>
        </div>
        
      </v-col>

      <v-col cols="5" md="7" lg="2" sm="6" class=" pa-0 ma-0 flex-nowrap">
    
        <v-row class="pa-0 ma-0 justify-center align-center ">
          
          <v-col cols="7" sm="7" lg="7" class="pa-2 ma-2  text-right">
            <v-btn
              elevation="4"
              color="#b0b0b0"
              max-width="160px"
              active-class="btn--text "
              style="font-family: Roboto-Medium; color:white; font-size:15px; text-transform: unset !important;"
                v-if="$vuetify.breakpoint.smAndUp "
            >
              Acceso APP
            </v-btn>
          </v-col>
          <v-col    v-if="$vuetify.breakpoint.smAndUp " cols="3" sm="3" lg="3" class="pa-2 ma-2 elevation-0">
            <v-menu offset-y dark class="pa-0 ma-0">
              <template v-slot:activator="{ attrs, on }">
                <v-btn class="white--text " v-bind="attrs" v-on="on" dark>
                  ES
                  <v-icon right dark>
                    $expand
                  </v-icon>
                </v-btn>
              </template>
              <v-list light class="pa-0 ma-0 rounded-0">
                <v-list-item link class="rounded-0 pa-0 ma-0">
                  <v-list-item-title class="rounded-0 pa-0 ma-0 texto__expande" 
                    >EN</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
                 
          </v-col>
           <v-col   v-if="$vuetify.breakpoint.smAndDown" cols="3" class=" justify-center d-flex elevation-0">
             <v-app-bar-nav-icon
             @click="ShowMenuMobile()"   
             class="pa-2 ma-2" 
             v-if="$vuetify.breakpoint.xsOnly" 
             color="#ffffff"></v-app-bar-nav-icon> 
           </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- version mdOnly -->
    <v-row v-if="$vuetify.breakpoint.mdOnly" class="pa-0 ma-0  justify-center ">
         <v-col
          cols="12"
          md="12"
          xs="12"
          lg="12"
          class="  text-center  pa-0 ma-0 justify-center">
      <v-row>
            <v-col
              cols="12"
              md="6"
              xs="12"
              lg="6"
              class="  mt-3 text-center  justify-center"
            >
            </v-col>
      </v-row>
        <div
          v-for="(elem, item) in rutas"
          :key="item"
          v-ripple
          class=" texto-nav text-uppercase align-center justify-center  pa-1  ma-1"
          style=""
        >
          {{ elem }}
        </div>
        <!-- <v-app-bar-nav-icon color="#ffffff"></v-app-bar-nav-icon> -->
      </v-col>
    </v-row>
    <!-- fin de version mdOnly -->
 
    <!-- Section Sub-header version responsive -->
    <v-row style="width:100%;" v-if="ocultar">
      <v-col cols="12" class="ml-3 pa-0 ma-0">
        <template v-slot:activator="{ attrs, on }">
          <v-btn class="white--text" v-bind="attrs" v-on="on">
            Radius
          </v-btn>
        </template>
        <v-list
          color="#1b1d22"
          style="width:100%; color:white;"
          class="text-center elevation-1 pa-0 ma-0 ml-2 white-texct"
        >
          <v-list-item v-for="item in rutas" :key="item" link>
            <v-list-item-title
              class="white--text text-uppercase"
              v-text="item"
            ></v-list-item-title>
          </v-list-item>
          <v-row class="text-center justify-center mt-2">
            <v-col cols="3" sm="1" lg="1" class="pa-2 ma-2 text-right">
              <v-btn
                elevation="4"
                color="#b0b0b0"
                max-width="160px"
                active-class="btn--text "
                style="font-family: Roboto-Medium; color:white; font-size:15px; text-transform: unset !important;"
              >
                Acceso APP
              </v-btn>
            </v-col>
            <v-col cols="3" sm="1" lg="1" class="pa-0 ma-0 ml-3  elevation-0">
              <v-menu :rounded="rounded" offset-y dark>
                <template v-slot:activator="{ attrs, on }">
                  <v-btn class="white--text ma-4" v-bind="attrs" v-on="on" dark>
                    ES
                    <v-icon right dark>
                      $expand
                    </v-icon>
                  </v-btn>
                </template>

                <v-list light class="pa-0 ma-0 rounded-0">
                  <v-list-item link class="rounded-0">
                    <v-list-item-title class="rounded-0 pa-0 ma-0 texto__expande" 
                      >EN</v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
          </v-row>
        </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: "",
      desactivar: false,
      ocultar: false,
      rounded:false,
      rutas: [
        "Inicio",
        "Conócenos",
        "Tokenomic",
        "equipo",
        "roadmap",
        "faq",
        "whiterpapper",
      ],
      urlNavigation:[
        '/',
        'conocenos',
        'tokenomic',
        'equipo',
        'roadmap',
        'faq',
        'whiterpapper'
      ]
    };
  },
  methods:{
    ShowMenuMobile(){
         if(!this.ocultar){
           return this.ocultar = true
         }else{
           this.ocultar = false
         }
    }
  }
};
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
}
.texto__expande {
  color: #243ffa;
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
