<template>
  <v-card color="#141414" flat tile class="elevation-0" height="78">
    <v-row class="pa-0 ma-0  justify-space-between">
      <v-col
        cols="7"
        md="5"
        sm="6"
        lg="3"
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
        sm="6"
        style="height:78px;"
        class=" justify-center d-flex align-center"
      >
        <v-row class="pa-0 ma-0  ">
          <v-col cols="12" class="  justify-end align-end d-flex">
            <v-row class="justify-end mr-5 align-center">
              <v-col cols="4" sm="4" lg="4" class="pa-0 ma-0   text-right">
                <v-btn
                  elevation="4"
                  color="rgba(176,176,176,0.38)"
                  width="201px"
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
              <v-col cols="3" sm="3" lg="4" class="pa-0 ma-0   ml-0 text-left">
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
                  active-class="btn--text mr-4 "
                  style="font-family: Roboto-Medium; color:white; font-size:15px; text-transform: unset !important;"
                  v-if="$vuetify.breakpoint.smAndUp"
                >
                  ....
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- version mdOnly -->
    
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
                    <v-list-item-title class="rounded-0 pa-0 ma-0"
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
