<template>
  <div>
    <section class="portada">
      <!-- header -->
      <header-app></header-app>
      <!-- sextion main portada -->
      <section id="cabecera" class="">
        <v-row wrap class="fill-height justify-center align-center  pa-0 ma-0 ">
          <v-col
            cols="12"
            md="12"
            class="  align-center text-center   justify-center"
          >
            <v-row class="justify-center" style="width:100%; ">
              <v-col
                cols="12"
                md="11"
                style=""
                :class="{
                  'ml-14': $vuetify.breakpoint.smAndUp,
                }"
                class=" pa-0  mt-12 fill-height d-flex flex-column justify-center align-center "
              >
                <span class="tituloPortada ma-2" v-html="titulo"></span>
                <v-row class="  mt-2 justify-center" style="width:100%; ">
                  <v-col
                    cols="12"
                    md="9"
                    class="pa-0 ma-0 fill-height d-flex flex-column justify-center align-center "
                  >
                    <span
                      :class="{ 'text-xs-h3': $vuetify.breakpoint.xsOnly }"
                      class="tituloPortada__sub--titulo  ma-2"
                      v-html="subtitulo"
                    >
                    </span>
                    <v-row
                      class="  mt-2 justify-center   "
                      style="width:100%; "
                    >
                      <v-col
                        cols="11"
                        md="11"
                        class="pa-0 ma-0 fill-height d-flex flex-column justify-center align-center "
                      >
                        <span
                          class="tituloPortada__sub--description  ma-4"
                          v-html="description"
                        >
                        </span>
                      </v-col>
                    </v-row>
                    <v-row
                      class="mt-8 justify-center pa-0 ma-0 "
                      style="width:100%; "
                    >
                      <v-col cols="12" md="9" class="">
                        <v-text-field
                          placeholder="Introduzca número"
                          single-line
                          dense
                          elevation-4
                          light
                          v-model.number="Crytonumero"
                          class=" mx-5 elevation-0 rounded-0  search-field"
                          height="50px"
                          background-color="#ffffff"
                        >
                          <template v-slot:append>
                            <v-btn
                              color="#0e41ff"
                              class="rounded-0 btn--search white--text "
                              height="50"
                              width="150"
                              @click="deleteTypedItem()"
                            >
                              Buscar
                            </v-btn>
                          </template>
                        </v-text-field>
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
