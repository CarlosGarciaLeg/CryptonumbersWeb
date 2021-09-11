<template>
  <div>
    <v-img :src="require('@/assets/portada-main.png')" alt="">
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
                  class=" pa-0 ml-14 mt-12 fill-height d-flex flex-column justify-center align-center "
              >
                <span class="tituloPortada ma-2" v-html="titulo"></span>
                <v-row class="  mt-2 justify-center" style="width:100%; ">
                  <v-col
                    cols="12"
                    md="9"
                    class="pa-0 ma-0 fill-height d-flex flex-column justify-center align-center "
                  >
                    <span
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
                      <v-col cols="11" md="9" class="pa-0 ma-0 ">
                        <v-text-field
                          placeholder="Introduzca número"
                          single-line
                          dense
                          elevation-4
                          light
                          v-model.number="Crytonumero"
                          class=" rounded-0  search-field"
                          height="50px"
                          background-color="#ffffff"
                        >
                       
                          <template v-slot:append>
                            <v-btn
                              color="#0e41ff"
                              class="rounded-0 btn--search white--text "
                              height="50"
                              width="200"
                              @click="deleteTypedItem(index)"
                            >
                              Buscar
                            </v-btn>
                          </template>
                        </v-text-field>
                      </v-col>

                      <!-- <v-col
                            cols="1"
                            md="2"
                           class="fill-height pa-1 ma-0 d-flex flex-column justify-center align-center  ml-4"
                        >
                        <v-btn
                          depressed
                         x-large
                         color="#0e41ff"
                         class="rounded-0 btn--search white--text"
                        height="50"
                        width="200"
                      >
                        Buscar
                      </v-btn>
                   </v-col> -->
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </section>
    </v-img>
       
    <!-- section dos  -->
    <v-img :src="require('@/assets/background-2.png')" alt="">
 
                     <v-row
                      class=" justify-center align-center  pa-0 ma-0 "
                      style="width:100%; "
                    >
                      <v-col cols="12" md="12" class="pa-2  mt-14 ma-2 ">
                            <v-row
                              wrap
                              class=" justify-center align-center  pa-0 ma-0 "
                              style="width:100%; "
                          > 
                              <v-col cols="10" md="4" class="pa-0  ma-0 ">
                                  <v-row class="justify-center" style="width:100%; ">
                                      <v-col
                                          cols="12"
                                          md="11"
                                          style=""
                                          class=" text-left mt-5"
                                      >
                                        <span class="tituloPortada ma-0" v-html="titulo"></span>
                                         <span
                                            class="sectionTwo__sub--titulo "
                                          >
                                          Cryptonumbers y su token NMBC
                                          </span>
                                            <v-expansion-panels style="background:#1b1d22; border-bottom:1px solid #fff;" class="rounded-0 mt-10">
                                                <v-expansion-panel
                                                  style="border-top:1px solid #fff; background:#1b1d22;color:white"
                                                  v-for="(item,i) in infoCrypto"
                                                  :key="i"
                                                  dark
                                                >
                                              <v-expansion-panel-header dark class="texto--panelsExpande">
                                                 <template v-slot:actions>
                                                <v-icon color="primary">
                                                  $expand
                                                </v-icon>
                                              </template>
                                                {{item}}
                                              </v-expansion-panel-header>
                                              <v-expansion-panel-content style="font-weight:300;">
                                               {{Inforelleno[i]}}
                                              </v-expansion-panel-content>
                                            </v-expansion-panel>
                                          </v-expansion-panels>
                                      </v-col>
                                  </v-row>
                              </v-col>
                                <v-col cols="7" md="3" class="pa-2  mt-15 ma-2 ">
                                      <v-img :src="require('@/assets/img-cryptonumber-1.png')" alt="">
                                      </v-img>
                                </v-col>

                            </v-row>

                      </v-col>
         </v-row>
     </v-img>
    <v-img :src="require('@/assets/background-3.png')" alt=""> </v-img>
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {},
  data() {
    return {
        Crytonumero:'',
      infoCrypto:[
        '¿Qué es Cryptonumbers?',
        '¿Qué es NMBC?'
      ],
      Inforelleno:[
        'NumberCoin (NMBC) Es un doble token ERC20 del protocolo Cryptonumbers, tiene la particularidad que mantiene estable el precio de cada nuevo Número NFT creado en la plataforma, (excepto en los números premium) teniendo paridad 1:1 con el Satoshi, de este modo evitamos las temidas burbujas de lanzamiento, lo denominamos “StableNFT”.',
        'NumberCoin (NMBC) Es un doble token ERC20 del protocolo Cryptonumbers, tiene la particularidad que mantiene estable el precio de cada nuevo Número NFT creado en la plataforma, (excepto en los números premium) teniendo paridad 1:1 con el Satoshi, de este modo evitamos las temidas burbujas de lanzamiento, lo denominamos “StableNFT”.'
      ],
      titulo: "El Primer Metaverso de los Números",
      subtitulo: " Crea Tu Número Preferido En Un NFT<br> y sácale rendimiento",
      description:
        " Cryptonumbers y su token NMBC, crea el  único contrato que certifica tu propiedad del <br>número NFT que elijas dentro de la red Ethereum. La fecha del cumpleaños de tu hijo, el <br>número de tu jugador favorito, tu número de la suerte pueden ser parte de tu catálogo de<br> números exclusivos",
    };
  },
};
</script>
<style lang="scss" scoped>

.texto--panelsExpande{
    font-family: Ubuntu;
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: 0.21px;
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
.custom-placeholer-color input::placeholder {
  color: red!important;
  opacity: 1;
}

.sectionTwo__sub--titulo{
  font-family: Ubuntu;
  font-size: 36px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.28;
  letter-spacing: 0.45px;
  color: #fff;
}
.custom-label-color .v-label {
  color: red;
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
.tituloPortada {
  font-family: Ubuntu;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.23px;
  text-align: center;
  color: $corporative-1;
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
</style>
