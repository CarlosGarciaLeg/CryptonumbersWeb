<template>
    <div>
   <v-row
            class="justify-center align-center pa-0 ma-0 absolute mt-15"
            v-if="$vuetify.breakpoint.mdAndUp || $vuetify.breakpoint.xsOnly"
          >
            <v-col
              cols="5"
              md="4"
              class=" pa-0 ma-0  d-flex justify-space-between"
              style="top:100px; "
            >
              <span
                v-for="(color, index) in 3"
                :key="index"
                class=" texto--slide-top"
                >F1</span
              >
            </v-col>
          </v-row>
          <v-col
            cols="12"
            md="12"
            style=""
            class=" mt-10  d-flex align-center justify-center pa-0 ma-2   "
          >
         <v-row
              class="align-center justify-center pa-0 ma-0"
              style="width:100%; "
            >
              <v-col
                cols="10"
                md="6"
                class="d-flex   pa-0 ma-0 justify-space-between"
              >
                <v-btn
                  color="#1b1d22"
                  x-small
                  fab
                  class="borde#1b1d22-1"
                  style="border:1px solid #d5d5d5;"
                >
                  <v-icon color="#d5d5d5">$prev</v-icon>
                </v-btn>

                <v-divider absolute class="mx-1 mt-4" color="#d5d5d5">
                </v-divider>

                <v-btn
                  x-small
                  color="#1b1d22"
                  fab
                  style="border:1px solid #d5d5d5;"
                >
                  <v-icon color="#d5d5d5">$next</v-icon>
                </v-btn>
              </v-col>

              <v-col cols="12" md="8" sm="10" class="  pa-0 ma-0" style="">
             <v-carousel
                  cycle
                  hide-delimiter-background
                  height="300"
                  class=""
                  :show-arrows="false"
                >
                  <v-carousel-item
                    v-for="(slide, i) in slides"
                    :key="i"
                    class="pa-0 ma-0"
                  >
                    <v-row
                      class=" justify-center"
                      :class="{
                        'ma-4': $vuetify.breakpoint.smAndUp,
                        'mt-2 pa-0 ma-0': $vuetify.breakpoint.xsOnly,
                      }"
                    >
                      <v-col
                        class="text-center align-center"
                        cols="3"
                        v-for="(images, j) in slide.images"
                        :key="j"
                      >
                        <v-divider
                          vertical
                          absolute
                          class=" mt-4"
                          color="#243ffa"
                          style="position:absolute; width:30px; top:-95px;"
                        >
                        </v-divider>
                        <span
                          v-if="
                               $vuetify.breakpoint.mdAndUp ||
                               $vuetify.breakpoint.xsOnly
                               "
                          id="cards--carousel-items"
                        ></span>
                      </v-col>
                    </v-row>
                    <v-row
                      class=" justify-center"
                      :class="{
                        'ma-4': $vuetify.breakpoint.smAndUp,
                        'mt-2 ': $vuetify.breakpoint.xsOnly,
                      }"
                    >
                      <v-col
                        cols="3"
                        v-for="(images, j) in slide.images"
                        :key="j"
                        class="card--carousel__item pa-0 ma-1 elevation-1 d-flex flex-column justify-center align-center"
                        style="height:190px; "
                      >
                        <div
                          class="d-flex flex-column justify-center align-center pa-0 ma-0"
                        >
                          <span
                            class="pa-0 ma-0 text-center caption d-flex justify-center align-center"
                          >
                            <v-col
                              cols="7"
                              sm="12"
                              class="pa-0 ma-0 text-center"
                              style=""
                            >
                              <v-list-item
                                three-line
                                class="ma-0 pa-0  "
                                style="width:100%; text-align:left;"
                              >
                                <v-list-item-content class="pa-2 ma-1 ">
                                  <v-list-item-title
                                    class="texto--slide__interno"
                                    v-html="images.caption"
                                  ></v-list-item-title>
                                  <div style="line-height:12px;">
                                    <v-list-item-subtitle
                                      class="texto--slide--list mt-1 white--text"
                                      v-html="images.text1[0]"
                                      >-</v-list-item-subtitle
                                    >
                                    <v-list-item-subtitle
                                      class="texto--slide--list mt-1 white--text"
                                      v-html="images.text2[0]"
                                      >-</v-list-item-subtitle
                                    >
                                  </div>
                                </v-list-item-content>
                              </v-list-item>
                            </v-col>
                          </span>
                        </div>
                      </v-col>
                    </v-row>
                  </v-carousel-item>
                </v-carousel>
              </v-col>
         </v-row>
          </v-col>
          
    </div>
</template>

<script>
    export default {
     data(){
         return{
                slides: [
        {
          images: [
            {
              caption: "Presentación del proyecto",
              text1: ["· Creación de identidad corporativa"],
              text2: ["· Creación de web corporativa"],
            },
            {
              caption: "WEB3",
              text1: ["· Integracion frontend con dAPP"],
              text2: ["· Pruebas testeo."],
            },
            {
              caption: "Testnet",
              text1: ["· Airdrop NMBC mediante telegram"],
              text2: ["· Pruebas en tesnet con la comunidad"],
            },
          ],
        },
        {
          images: [
            {
              caption: "Presentación del proyecto",
              text1: ["· Creación de identidad corporativa"],
              text2: ["· Creación de web corporativa"],
            },
            {
              caption: "WEB3",
              text1: ["· Integracion frontend con dAPP"],
              text2: ["· Pruebas testeo."],
            },
            {
              caption: "Testnet",
              text1: ["· Airdrop NMBC mediante telegram"],
              text2: ["· Pruebas en tesnet con la comunidad"],
            },
          ],
        },
        {
          images: [
            {
              caption: "Presentación del proyecto",
              text1: ["· Creación de identidad corporativa"],
              text2: ["· Creación de web corporativa"],
            },
            {
              caption: "WEB3",
              text1: ["· Integracion frontend con dAPP"],
              text2: ["· Pruebas testeo."],
            },
            {
              caption: "Testnet",
              text1: ["· Airdrop NMBC mediante telegram"],
              text2: ["· Pruebas en tesnet con la comunidad"],
            },
          ],
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
    margin-left: 65.5px;
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
    margin-left: 18px;
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