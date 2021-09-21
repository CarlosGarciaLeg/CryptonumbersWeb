<template>
    <div>
          <section class="" :class="{'section__cuatro':$vuetify.breakpoint.smAndUp}">
      <v-row
        class=" justify-center align-center  pa-0 ma-0 "
        style="width:100%; "
      >
        <v-col cols="12" md="12" class="pa-2 mt-14 ma-2 " 
              order-xs1="2">
          <v-row
            wrap
            class="justify-center align-center text-center pa-0 ma-0 "
            style="width:100%; "
          >
            <v-col
              cols="12"
              md="5"
              class="pa-2  mt-15  "
              data-aos="fade-left"
              data-aos-duration="2500"
            >
              <!-- <div class="image__section4--info"></div> -->
              <v-img
                contain
                class=""
                style=" width: 565px; "
                :src="require('@/assets/img-cryptonumber-02.png')"
                alt=""
              >
              </v-img>
            </v-col>
            <v-col
              cols="10"
              md="4"
              class="pa-0  ma-0 "
              data-aos="fade-right"
              data-aos-duration="2500"
              order-xs1
            >
              <v-row
                :class="{ 'ml-10': $vuetify.breakpoint.smAndUp }"
                class="justify-center "
                style="width:100%; "
              >
                <v-col
                  :class="{ 'mt-15 text-start': $vuetify.breakpoint.xsOnly }"
                  cols="12"
                  md="11"
                  style=""
                  class="pa-0 ma-2   "
                >
                  <span class="  "
                    :class="{'Cryptonumbers-y-su-t mt-7 text-left':$vuetify.breakpoint.xsOnly, 'sectionfour__sub--titulo text-left':$vuetify.breakpoint.smAndUp}"
                  >
                    Números NFT
                  </span>
                </v-col>
                <v-col cols="12" md="11" style="" class=" pa-0 ma-0 text-left ">
                  <span class="pa-0 ma-0 "
                  :class="{'salo-como-colateral': $vuetify.breakpoint.xsOnly, 'text--card__subtitulo':$vuetify.breakpoint.smAndUp}"
                  >
                    Lorem ipsum 100.000.000 NMBC, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi.
                  </span>
                </v-col>
                <v-col cols="12" md="11" style="" class="pa-0 ma-3 text-left ">
                  <span class=""
                     :class="{'texto--mobile-nft': $vuetify.breakpoint.xsOnly, 'white--text':$vuetify.breakpoint.smAndUp}"
                  >
                    Números NFT
                  </span>
                </v-col>
                <v-col cols="12" md="11" style="" class="ma-0 text-left pa-0 ">
                  <span class="pa-0 ma-0 "
                   :class="{'salo-como-colateral': $vuetify.breakpoint.xsOnly, 'text--card__subtitulo':$vuetify.breakpoint.smAndUp}"
                  >
                    Genera tu NFT con el número que decidas y opera con el,
                    regala, vende, alquilar, juega, usalo como colateral…
                  </span>
                </v-col>
                <v-col cols="12" md="11" style="" class="pa-0 ma-3 text-left ">
                  <span class=""  :class="{'texto--mobile-nft': $vuetify.breakpoint.xsOnly, 'white--text':$vuetify.breakpoint.smAndUp}">
                    Números NFT
                  </span>
                </v-col>
                <v-col cols="12" md="11" style="" class="ma-0 text-left pa-0 ">
                  <span class="pa-0 ma-0 "
                    :class="{'salo-como-colateral': $vuetify.breakpoint.xsOnly, 'text--card__subtitulo':$vuetify.breakpoint.smAndUp}"
                  >
                    Hemos creado algunos números mágicos para darles
                    funcionalidades de acceso prioritario a funcionalidades del
                    proyecto, además de tener todas quellas de los números
                    standard.
                  </span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="12" class="pa-2  mt-1 ma-2 " >
          <!-- separador -->

          <v-row class="  pa-0 ma-0  justify-center" style="width:100%; ">
            <v-col cols="12" md="9" class="pa-0  ma-0  " style="">
              <v-row class="  pa-0 ma-0 justify-center" style="width:100%; ">
                <v-col cols="10" md="6" class="pa-0  ma-0  " style="">
                  <v-row class=" ">
                    <v-col
                      cols="12"
                      md="11"
                      style="height:80px;"
                      class="  pa-3 ma-2 text-left "
                    >
                      <v-spacer></v-spacer>
                    </v-col>

                    <v-col
                      cols="12"
                      md="11"
                      style=""
                      class="  pa-0 ma-2 text-left "
                    >
                    </v-col>
                  </v-row>

                  <v-row class="">
                    <v-col
                    v-if="$vuetify.breakpoint.sxOnly"
                      cols="12"
                      md="11"
                      style="height:50px;"
                      class="  pa-3 ma-2 text-left "
                    >
                      <v-spacer></v-spacer>
                    </v-col>

                    <v-col
                      cols="12"
                      md="11"
                      style=""
                      class=" pa-0 ma-2 text-left "
                    >
                      <v-row
                        class=""
                        style="width:100%; "
                        data-aos="fade-right"
                        data-aos-duration="2000"
                      >
                        <v-col
                          cols="12"
                          md="11"
                          style=""
                          class="pa-0 ma-2 text-left "
                        >
                          <span
                            class=""
                             :class="{'Cryptonumbers-y-su-t  text-left':$vuetify.breakpoint.xsOnly, 'sectionfour__sub--titulo text-left ml-2':$vuetify.breakpoint.smAndUp}"
                          >
                            Distribución de tokens
                          </span>
                        </v-col>
                        <v-col
                          cols="12"
                          md="10"
                          style=""
                          :class="{
                            'ml-5': $vuetify.breakpoint.smAndUp,
                            'mt-0': $vuetify.breakpoint.xsOnly,
                          }"
                          class=" pa-0 ma-0 text-left "
                        >
                          <span class="pa-0 ma-0 "
                            :class="{'salo-como-colateral': $vuetify.breakpoint.xsOnly, 'text--card__subtitulo':$vuetify.breakpoint.smAndUp}"
                          >
                            Lorem ipsum 100.000.000 NMBC, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi.
                          </span>
                        </v-col>

                        <v-col
                          cols="12"
                          md="12"
                          style=""
                          class="pa-0 ma-0  text-left "
                        >
                          <v-card
                            class="mx-auto text-left align-left elevation-0"
                            color="transparent"
                            tile
                            :ripple="offRipple"
                            :hover="offRipple"
                          >
                            <v-list
                              three-line
                              :hover="offRipple"
                              :ripple="offRipple"
                              color="transparent"
                              class="text-left  align-left "
                            >
                              <v-list-item-group class="text-left align-left">
                                <v-list-item
                                  v-for="(item, i) in infoTokens"
                                  :key="i"
                                  class="text-left align-left pa-0 ma-0"
                                  :ripple="offRipple"
                                  :hover="offRipple"
                                >
                                  <v-list-item-content class="">
                                    <v-badge
                                      v-for="(color, index) in item.color"
                                      :key="index"
                                      inline
                                      left
                                      dot
                                      :color="color"
                                      class="align-left justify-start"
                                    >
                                      <span class="  ma-1"
                                        :class="{'salo-como-colateral': $vuetify.breakpoint.xsOnly, 'ml-2 texto__info--tokes':$vuetify.breakpoint.smAndUp}"
                                        >{{ item.textoTokens[index] }}
                                      </span>
                                    </v-badge>
                                  </v-list-item-content>
                                </v-list-item>
                              </v-list-item-group>
                            </v-list>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>

                  <v-row class=" ">
                    <v-col
                      cols="12"
                      md="11"
                      style="height:100px;"
                      class="  pa-3 ma-2 text-left "
                    >
                      <v-spacer></v-spacer>
                    </v-col>

                    <v-col
                      cols="12"
                      md="11"
                      style=""
                      class="  pa-0 ma-2 text-left "
                    >
                    </v-col>
                  </v-row>

                  <!--   -->
                </v-col>

                <v-col
                  cols="12"
                  md="5"
                  :class="{ 'mt-0': $vuetify.breakpoint.smAndUp }"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  class="  ma-2 align-center d-flex  justify-center text-center"
                >
                  <v-img
                    contain
                    class=""
                    style=" width: 465px; "
                    :src="require('@/assets/img-cryptonumber-03.png')"
                    alt=""
                  >
                  </v-img>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <section class=""
      :class="{'section__cinco':$vuetify.breakpoint.smAndUp}"
      >
        <v-row
          class=" mt-0 justify-center align-center"
          wrap
          style="width:100%; position:relative;  "
        >
          <v-col
            cols="12"
            md="12"
            class="pa-0 ma-0 fill-height d-flex flex-column justify-center align-center "
          >
            <span class=""
               :class="{'Cryptonumbers-y-su-t text-center':$vuetify.breakpoint.xsOnly, 'ma-2 sectionfour__sub--titulo ':$vuetify.breakpoint.smAndUp}"
            >
              Cryptonumbers Roadmap
            </span>
          </v-col>

       
           
               <!-- slide -->
            <slide-desktop v-if="$vuetify.breakpoint.smAndUp"></slide-desktop>
             <!-- slide -->
            <slide-mobile v-if="$vuetify.breakpoint.xsOnly"></slide-mobile>
       
        </v-row>
      </section>
      <!-- fin section 5 -->
    </section>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                  offRipple: false,
   
                    infoTokens: [
                            {
                            textoTokens: [
                                "General ",
                                "Inversores iniciales y advisors ",
                                "Fundadores",
                                "Reserva de compensación",
                            ],
                            color: ["#248ef9", "#bd85ff", "#66b0e1", "#1b23b4"],
                            },
      ],
            }
        }
    }
</script>

<style lang="scss" scoped>
@media (min-width: 480px) {
  #cards--carousel-items {
    content: "";
    width: 20px;
    height: 20px;
    background: #243ffa;
    border-radius: 50%;
    display: block;
    position: absolute;
    top: 0px;
    margin-left: 93px;
    margin-top: 0px;
    z-index: 1000;
  }
}
@media (max-width: 480px) {
  #cards--carousel-items {
    content: "";
    width: 20px;
    height: 20px;
    background: #243ffa;
    border-radius: 50%;
    display: block;
    position: absolute;
    top: 0px;
    margin-left: 28px;
    margin-top: -0px;
    z-index: 1000;
  }
}
.section__cinco {
  background-image: url("../assets/background-4-copy.png");
  background-size: cover;
}
.image__section4--info {
  background-image: url("../assets/img-cryptonumber-02.png");
  background-size: cover;
  width: 536px;
  height: 433px;
  object-fit: contain;
}
.section__cuatro {
  background-image: url("../assets/background-4.png");
  background-size: contain;
}
.texto--slide__interno {
  font-family: Ubuntu;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: 0.21px;
  color: #fff;
}

.texto__info--tokes {
  font-family: Ubuntu;
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: 0.21px;
  color: #fff;
}

.card--carousel__item {
  border-radius: 11px;
  border: solid 1px #d5d5d5;
  background-color: #1d1f24;
  transform: rotate(360deg);
}





</style>