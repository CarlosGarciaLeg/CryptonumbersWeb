<template>
  <v-card color="transparent" flat tile class="elevation-0 header-content">
    <v-row class="pa-0 ma-0  d-flex ">
      <v-col
        cols="12"
        md="3"
        lg="3"
        class=" text-right"
        :class="{
          'text-right':  $vuetify.breakpoint.smAndDown,
          'text-center': $vuetify.breakpoint.onlyXs,
        }"
      >
        <v-spacer></v-spacer>
        <img
          class="pa-2 ma-2 ml-15"
          width="200"
          :src="require('@/assets/logo-blanco.png')"
          alt=""
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
        xs="12"
        lg="6"
        class="  mt-3 text-center  ml-5 justify-center"
      >
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

      <v-col cols="12" md="2" lg="2" class=" pa-0 ma-0">
        <v-row class="pa-0 ma-0  ">
          <v-col cols="7" sm="7" lg="7" class="pa-2 ma-2  text-right">
            <v-btn
              elevation="4"
              color="#b0b0b0"
              max-width="160px"
              active-class="btn--text red--text"
              style="font-family: Roboto-Medium; color:white; font-size:15px; text-transform: unset !important;"
            >
              Acceso APP
            </v-btn>
          </v-col>
          <v-col cols="3" sm="3" lg="3" class="pa-2 ma-2 elevation-0">
            <v-menu offset-y dark>
              <template v-slot:activator="{ attrs, on }">
                <v-btn class="white--text " v-bind="attrs" v-on="on" dark>
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
      </v-col>
    </v-row>
    <!-- Section Sub-header version responsive -->
    <v-row style="width:100%;" v-if="ocultar">
      <v-col cols="12" class="red pa-0 ma-0">
        <template v-slot:activator="{ attrs, on }">
          <v-btn class="white--text" v-bind="attrs" v-on="on">
            Radius
          </v-btn>
        </template>
        <v-list
          color="#1b1d22"
          style="width:100%; color:white;"
          class="text-center elevation-1 white-texct"
        >
          <v-list-item v-for="item in rutas" :key="item" link>
            <v-list-item-title
              class="white--text text-uppercase"
              v-text="item"
            ></v-list-item-title>
          </v-list-item>
          <v-row class="text-center justify-center">
            <v-col cols="3" sm="1" lg="1" class="pa-2 ma-2 text-right">
              <v-btn
                elevation="4"
                color="#b0b0b0"
                max-width="160px"
                active-class="btn--text red--text"
                style="font-family: Roboto-Medium; color:white; font-size:15px; text-transform: unset !important;"
              >
                Acceso APP
              </v-btn>
            </v-col>
            <v-col cols="3" sm="1" lg="1" class="pa-0 ma-0 ml-3 elevation-0">
              <v-menu :rounded="rounded" offset-y dark>
                <template v-slot:activator="{ attrs, on }">
                  <v-btn class="white--text ma-5" v-bind="attrs" v-on="on" dark>
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
};
</script>

<style lang="scss" scoped>
.btn {
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
