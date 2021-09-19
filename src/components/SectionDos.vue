<template>
    <div>
          <!-- section dos  -->
    <div    class=" pa-0  ma-0" :class="{'section__dos':$vuetify.breakpoint.smAndUp}"
            :style="{'background:red;':$vuetify.breakpoint.xsOnly}" >
      <v-row
        class=" justify-center align-center  pa-0 ma-0 "
        style="width:100%; "
      >
        <v-col
          cols="12"
          md="12"
          class=" ma-0 pa-0"
          :class="{ 'mt-14 pa-2 ': $vuetify.breakpoint.smAndUp }"
        >
          <v-row
            wrap
            class=" justify-center align-center mt-15  pa-0 ma-0 "
            style="width:100%; "
          >
            <v-col
              cols="12"
              md="4"
              class="pa-0   ma-2 "
              :class="{ 'mt-15': $vuetify.breakpoint.smAndUp, 'ml-8' :$vuetify.breakpoint.xsOnly  }"
            >
              <v-row
                class="justify-center"
                style="width:100%; "
                data-aos="fade"
                data-aos-duration="2500"
              >
                <v-col cols="12" md="11" style="" class=" text-left mt-5">
                  <span class="tituloPortada ma-0" v-html="titulo"></span>
                  <span class="sectionTwo__sub--titulo ">
                    Cryptonumbers y su token NMBC
                  </span>
                  <v-expansion-panels
                    style="background:#1b1d22; border-bottom:1px solid #fff;"
                    class="elevation-0 rounded-0 mt-10"
                  >
                    <v-expansion-panel
                      style="border-top:1px solid #fff; background:#1b1d22;color:white"
                      v-for="(item, i) in infoCrypto"
                      :key="i"
                      dark
                      class="elevation-0"
                    >
                      <v-expansion-panel-header
                        dark
                        class="texto--panelsExpande text-uppercase"
                      >
                        <template v-slot:actions>
                          <v-icon color="primary">
                            $expand
                          </v-icon>
                        </template>
                        {{ item }}
                      </v-expansion-panel-header>
                      <v-expansion-panel-content style="font-weight:300;">
                        {{ Inforelleno[i] }}
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="8" md="3" class="pa-2  mt-15 ma-2 ">
              <v-img
                data-aos="zoom-in"
                data-aos-duration="2500"
                :src="require('@/assets/img-cryptonumber-1.png')"
                alt=""
              >
              </v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                 titulo: " Un nuevo activo criptográfico",
                 infoCrypto: ["¿Qué es Cryptonumbers?", "¿Qué es NMBC?"],
                   Inforelleno: [
                    "Es un proyecto blockchain open source que permite  adquirir en propiedad números mediante tokens no fungibles y darles valor en el mercado, funciona como un certificado de propiedad ya que estos pueden ser rastreados en la blockchain y siempre están relacionados a una dirección.",
                     "NumberCoin (NMBC) Es un doble token ERC20 del protocolo Cryptonumbers, tiene la particularidad que mantiene estable el precio de cada nuevo Número NFT creado en la plataforma, (excepto en los números premium) teniendo paridad 1:1 con el Satoshi, de este modo evitamos las temidas burbujas de lanzamiento, lo denominamos “StableNFT”.",
      ],
            }
        }
    }
</script>

<style lang="scss" scoped>

.section__dos {
  background-image: url("../assets/background-2.png");
  background-size: contain;
  width: 100%;
}
.sectionTwo__sub--titulo {
  font-family: Ubuntu;
  font-size: 36px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.28;
  letter-spacing: 0.45px;
  color: #fff;
}
</style>