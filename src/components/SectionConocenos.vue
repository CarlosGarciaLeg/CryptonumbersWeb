<template>
  <div>
    <!-- section dos  -->
    <div
      class=" pa-0  ma-0"
      :class="{ section__dos: $vuetify.breakpoint.smAndUp }"
    >
      <v-row
        class=" justify-center align-center  pa-0 ma-0 "
        style="width:100%; "
      >
        <v-col
          cols="12"
          md="12"
          class=" ma-0 pa-0"
          :class="{
            'mt-14 pa-2 ': $vuetify.breakpoint.smAndUp,
            'section--mobile;': $vuetify.breakpoint.xsOnly,
          }"
        >
          <v-row
            wrap
            class=" justify-center align-center mt-15  pa-0 ma-0 "
            style="width:100%; "
            :style="{ 'background:red;': $vuetify.breakpoint.xsOnly }"
          >
            <v-col
              cols="12"
              md="4"
              class="pa-0   ma-2 "
              :class="{
                'mt-15': $vuetify.breakpoint.smAndUp,
                'ml-8': $vuetify.breakpoint.xsOnly,
              }"
              :style="{ 'background:red;': $vuetify.breakpoint.xsOnly }"
            >
              <v-row
                class="justify-center"
                style="width:100%; "
                data-aos="fade"
                data-aos-duration="2500"
              >
                <v-col cols="12" md="11" style="" class=" text-left mt-5">
                  <span
                    class=" ma-0"
                    v-html="titulo"
                    :class="{
                      'Un-nuevo-activo-crip-Copy': $vuetify.breakpoint.xsOnly,
                      tituloPortada: $vuetify.breakpoint.smAndUp,
                    }"
                  ></span>
                  <span
                    class=" "
                    :class="{
                      'Cryptonumbers-y-su-t mt-7': $vuetify.breakpoint.xsOnly,
                      'sectionTwo__sub--titulo': $vuetify.breakpoint.smAndUp,
                    }"
                  >
                    Cryptonumbers y su token NMBC
                  </span>

                  <v-expansion-panels
                    class="elevation-0 rounded-0 mt-10"
                    :light="false"
                    :flat="$vuetify.breakpoint.xsOnly"
                    color="#f9faff"
                    :style="{
                      'background-color:#f9faff !important;  color:black;':
                        $vuetify.breakpoint.xsOnly,
                      'background-color:#1b1d22 !important;  color:white':
                        $vuetify.breakpoint.smAndUp,
                    }"
                    v-model="panel"
                    :multiple="$vuetify.breakpoint.xsOnly"
                      style=" border-bottom:1px solid #fff;border-top:1px solid white;"
                  >
                    <v-expansion-panel
                      :light="false"
                      v-for="(item, i) in infoCrypto"
                      :key="i"
                      :style="{
                        'background-color:#f9faff !important; border:none; color:black;':
                          $vuetify.breakpoint.xsOnly,
                        'background-color:#1b1d22 !important; border-top:1px solid white; color:white':
                          $vuetify.breakpoint.smAndUp,
                      }"
                      class="elevation-0 mt-2"
                      :class="{
                        'Qu-es-Cryptonumber': $vuetify.breakpoint.xsOnly,
                        cardDesktop: $vuetify.breakpoint.mdAndUp,
                      }"
                    >
                      <v-expansion-panel-header
                        :style="{
                          'border:none; background-color:#1b1d22 !important;':
                            $vuetify.breakpoint.smAndUp,
                        }"
                        :color="'#f9faff'"
                        class="texto--panelsExpande mt-1 text-uppercase elevation-0"
                        :class="{
                          'Qu-es-Cryptonumber border': $vuetify.breakpoint.xsOnly,
                          cardDesktop: $vuetify.breakpoint.mdAndUp,
                        }"
                      >
                        <template v-slot:actions>
                          <v-icon color="primary">
                            $expand
                          </v-icon>
                        </template>
                        {{ item }}
                      </v-expansion-panel-header>
                      <v-expansion-panel-content
                        color="#f9faff"
                        class="elevation-0  ml-2 ma-1"
                        :style="{
                          'background-color:#f9faff !important; border-top:1px solid #c6c6c6; color:black; text-align:left;':
                            $vuetify.breakpoint.xsOnly,
                          'background-color:#1b1d22 !important; border-top:1px solid #c6c6c6; color:white ':
                            $vuetify.breakpoint.smAndUp,
                        }"
                        :class="{
                          'Es-un-proyecto-block ': $vuetify.breakpoint.xsOnly,
                          cardDesktop: $vuetify.breakpoint.smAndUp,
                        }"
                        style="display:inline-block;"
                        v-html="Inforelleno[i]"
                      >
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="8" md="3" class="pa-2  mt-15 ma-2 ">
              <v-img
                :data-aos="{'zoom-in':$vuetify.breakpoint.smAndUp}"
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
  data() {
    return {
      panel: [0, 1],
      disabled: false,
      readonly: false,
      titulo: " Un nuevo activo criptográfico",
      infoCrypto: ["¿Qué es Cryptonumbers?", "¿Qué es NMBC?"],
      Inforelleno: [
        "Es un proyecto blockchain open source que permite  adquirir en propiedad números mediante <strong>tokens no fungibles</strong> y darles valor en el mercado, funciona como un certificado de propiedad ya que estos pueden ser rastreados en la blockchain y siempre están relacionados a una dirección.",
        "NumberCoin (NMBC) Es un doble token ERC20 del protocolo Cryptonumbers, tiene la particularidad que mantiene estable el precio de cada nuevo Número NFT creado en la plataforma, (excepto en los números premium) teniendo paridad 1:1 con el Satoshi, de este modo evitamos las temidas burbujas de lanzamiento, lo denominamos “StableNFT”.",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.cardDesktop {
  background-color: #1b1d22 !important;
  color:white;
}
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

.section--mobile {
  background: cyan !important;
}

.Es-un-proyecto-block {
  margin: 0px 0px 0px 0px;
  font-family: Ubuntu;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: 0.21px;
  color: var(--black);
  text-align: left;
}

.Es-un-proyecto-block .text-style-1 {
  font-weight: bold;
}

.border{
  border-top:1px solid #979797 !important;
  border-bottom:1px solid #979797 !important;
}
</style>
