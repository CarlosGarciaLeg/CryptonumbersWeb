<template>
  <div>
    <section :class="{ 'portada' : $vuetify.breakpoint.smAndUp,
                       'mobile--container':$vuetify.breakpoint.xsOnly}">
      <!-- header -->
      <header-app></header-app>
      <!-- sextion main portada -->
      <section
        id="cabecera"
        class=""
        style=""
        :style="{ 'background:#2B2B2B;': $vuetify.breakpoint.xsOnly }"
      >
        <v-row class="pa-0 ma-0 ">
          <v-col
            cols="12"
            md="12"
            style="margin:1px !important;"
            class="ma-0 align-center text-center "
          >
            <v-row class="ma-0 pa-0" style="width:100%; ">
              <v-col
                cols="12"
                md="11"
                style=""
                :class="{
                  'ml-14 mt-12': $vuetify.breakpoint.smAndUp,
                  'ma-0 pa-0 mt-15': $vuetify.breakpoint.xsOnly,
                }"
                class=" pa-0 justify-center align-center "
              >
                <span
                  class="tituloPortada ma-2"
                  :class="{
                    'El-Primer-Metaverso-mobile mt-15':
                      $vuetify.breakpoint.xsOnly,
                  }"
                  v-html="titulo"
                ></span>
                <v-row
                  class=" pa-0 ma-0 mt-2 justify-center"
                  style="width:100%; "
                >
                  <v-col
                    cols="12"
                    md="9"
                    class="   d-flex flex-column justify-center align-center "
                  >
                    <span
                      :class="{
                        'tituloPortada__sub--mobile pa-0 ma-0 mt-5 ':
                          $vuetify.breakpoint.xsOnly,
                        'tituloPortada__sub--titulo ma-2':
                          $vuetify.breakpoint.smAndUp,
                      }"
                      class="  "
                      v-html="subtitulo"
                    >
                    </span>
                    <v-row
                      class="  mt-2 justify-center   "
                      style="width:100%; "
                    >
                      <v-col
                        cols="12"
                        md="11"
                        :class="{ 'mt-5': $vuetify.breakpoint.xsOnly }"
                        class="pa-0 ma-0 fill-height d-flex flex-column justify-center align-center "
                      >
                        <span
                          :class="{
                            'ml-0 mr-0 pa-0 tituloPortada__sub--description-mobile':
                              $vuetify.breakpoint.xsOnly,
                            'ma-1 tituloPortada__sub--description ':
                              $vuetify.breakpoint.smAndUp,
                          }"
                          class="  "
                          v-html="description"
                        >
                        </span>
                      </v-col>
                    </v-row>
       
                    <v-row
                      class="mt-8 justify-center pa-0 ma-0 "
                      style="width:100%; "
                    >
                      <v-col
                        cols="12"
                        md="9"
                        lg="9"
                        class=""
                        :class="{
                          'justify-center': $vuetify.breakpoint.xsOnly,
                        }"
                      >
                        <search-bar></search-bar>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Crytonumero: "",
      titulo: " El Primer Metaverso de los Números",
      subtitulo: " Crea Tu Número Preferido En Un NFT<br> y sácale rendimiento",
      description:
        " Cryptonumbers y su token NMBC, crea el  único contrato que certifica tu propiedad del <br>número NFT que elijas dentro de la  Ethereum. La fecha del cumpleaños de tu hijo, el <br>número de tu jugador favorito, tu número de la suerte pueden ser parte de tu catálogo de<br> números exclusivos",
    };
  },
  methods: {
    deleteTypedItem() {},
  },
};
</script>

<style lang="scss" scoped>

.mobile--container{
  background-color: #2B2B2B !important;
}
.El-Primer-Metaverso-mobile {
  width: 293px;
  height: 40px;
  text-transform: uppercase;
  font-family: Ubuntu;
  font-size: 25px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.23px;
  text-align: center;
  color: #243ffa;
}
.fondo-mobile {
  background-image: url("../assets/backgroun-copy.png");
  background-size: contain;
}
.portada {
  background-image: url("../assets/portada-main.png");
  background-size: contain;
}
.tituloPortada__sub--titulo {
  font-family: Ubuntu;
  font-size: 42px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: 0.65px;
  text-align: center;
  color: #fff;
}
.tituloPortada__sub--mobile {
  font-family: Ubuntu;
  font-size: 37px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: 0.65px;
  text-align: center;
  color: #fff;
}

.tituloPortada__sub--description {
  font-family: Ubuntu;
  font-size: 19px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: 0.24px;
  text-align: center;
  color: #fff;
}
.tituloPortada__sub--description-mobile {
  font-family: Ubuntu;
  font-size: 23px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: 0.24px;
  text-align: center;
  color: #fff;
}
input::-webkit-inner-spin-button {
  -webkit-appearance: inner-spin-button;
  display: inline-block;
  cursor: default;
  flex: 0 0 auto;
  align-self: stretch;
  -webkit-user-select: none;
  opacity: 0;
  pointer-events: none;
  -webkit-user-modify: read-only;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}

.custom-label-color .v-label {
  color: #1b1d22;
  opacity: 1;
}
.custom-placeholer-color input::placeholder {
  color: #1b1d22 !important;
  opacity: 1;
}
.btn--search {
  background: $corporative-1;
  font-size: 16px !important;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  text-align: center;
  color: #ffffff;
  text-transform: none;
}
</style>
