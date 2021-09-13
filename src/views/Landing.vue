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
            <v-col cols="7" md="3" class="pa-2  mt-15 ma-2 ">
              <v-img :src="require('@/assets/img-cryptonumber-1.png')" alt="">
              </v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-img>
    <v-img :src="require('@/assets/background-3.png')" alt="">
      <v-spacer></v-spacer>
      <v-row class="  mt-15 justify-center" style="width:100%; ">
        <v-col
          cols="9"
          md="9"
          class="pa-0 ma-0  mt-15 fill-height d-flex flex-column justify-center align-center "
        >
          <span class="tituloPortada__sectionThree  ma-2">
            ¿Qué puedo hacer con un Número NFT?
          </span>
          <v-row class="  mt-2 justify-center   " style="width:100%; ">
            <v-col
              cols="11"
              md="11"
              class="pa-0 ma-0 fill-height d-flex flex-column justify-center align-center "
            >
              <span
                class="sectionThree__sub--description  ma-4"
                style=" margin: 26px 110px 101px 119px;"
              >
                Con los <strong> NFT de Cryptonumbers</strong> ocurre los mismo
                que con los “Blockchain Domains” en los markets de NFTs, el<br />
                valor de la imágen es simbólica, mientras que con el contrato de
                registro en la blockchain obtienes una prueba<br />
                verificable de que ese activo digital es auténtico. Es un token
                ERC-721, por su naturaleza puede ser operado<br />
                en los mercados de la red.
              </span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="  mt-15 justify-center" style="width:100%; ">
        <v-col
          cols="10"
          md="10"
          class="pa-1 ma-1   fill-height d-flex flex-column justify-center align-center "
        >
          <!-- cards information products -->
          <v-row class="mt-2 justify-center   " style="width:100%; ">
            <v-col
              cols="8"
              md="3"
              v-for="(item, i) in 6"
              :key="i"
              class="pa-1 ma-1 fill-height d-flex flex-column justify-center align-center "
            >
              <v-card
                class=" elevation-0 pa-0 ma-0"
                max-width="344"
                color="transparent"
              >
                <v-card-text class="text-center align-center   justify-center ">
                  <div style="width:100%;" class="text-center align-center ">
                    <v-row
                      class=" pa-0 ma-0 mt-2 justify-center"
                      style="width:100%; "
                    >
                      <v-col
                        cols="12"
                        md="12"
                        class="  fill-height d-flex flex-column justify-center align-center"
                      >
                        <v-img
                          width="128px"
                          height="128px"
                          class=""
                          :src="require('@/assets/icon-defi.png')"
                          alt=""
                        ></v-img>
                      </v-col>
                    </v-row>
                  </div>
                  <p class="text--card__titulo mt-5">
                    Catedral Defi
                  </p>

                  <div class="text--card__subtitulo">
                    Úsalo como colateral en cualquier plataforma que aceptén
                    tokens NFT como aval para finanzas descentralizadas.
                  </div>
                </v-card-text>
                <v-card-actions> </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-img>
    <section id="cabecera" class="background:#17191e; width:100%; height:100%;">
      <v-row wrap class="fill-height justify-center align-center  pa-0 ma-0 ">
        <v-col
          cols="12"
          md="12"
          style="background:#1b1d22;"
          class="align-center text-center  justify-center"
        >
          <v-spacer></v-spacer>
          <v-row class="  mt-15 justify-center" style="width:100%; ">
            <v-col
              cols="12"
              md="9"
              class="pa-0 ma-0  mt-15 fill-height d-flex flex-column justify-center align-center "
            >
              <span class="tituloPortada__sectionThree  ma-2">
                ¿Cómo obtener mi número?
              </span>
              <v-row class="  mt-2 justify-center   " style="width:100%; ">
                <v-col
                  cols="11"
                  md="11"
                  class="pa-0 ma-0 fill-height d-flex flex-column justify-center align-center "
                >
                  <span
                    class="sectionThree__sub--description  ma-4"
                    style=" margin: 26px 110px 101px 119px;"
                  >
                    Adquirir un número NFT de Cryptonumber es muy sencillo,
                    hemos pensado como sería la forma más rápida de hacerlo sin
                    que te suponga una agonía.
                  </span>
                </v-col>
              </v-row>
              <v-row class="mt-2 justify-center   " style="width:100%; ">
                <v-col
                  cols="8"
                  md="3"
                  v-for="(item, i) in 3"
                  :key="i"
                  :id="`img--ObtenerNum__pasos-${i}`"
                  class="pa-1 ma-1 fill-height d-flex flex-column img--ObtenerNum__pasos justify-center align-center "
                >
                  <v-card
                    class=" elevation-0 pa-0 ma-0"
                    max-width="344"
                    color="transparent"
                  >
                    <v-card-text
                      class="text-left align-center   justify-center "
                    >
                      <div style="width:100%;" class="text-left align-center ">
                        <v-row
                          class=" pa-0 ma-0 mt-2 justify-center"
                          style="width:100%; "
                        >
                          <v-col
                            cols="12"
                            md="12"
                            class="pa-0  fill-height d-flex flex-column justify-center align-center"
                          >
                            <v-img
                              width="122px"
                              height="122px"
                              class="pa-0 "
                              :src="require(`@/assets/img-paso-${i + 1}.png`)"
                              alt=""
                            ></v-img>
                          </v-col>
                        </v-row>
                      </div>
                      <p class="text--card__titulo mt-5 text-left">
                        Catedral Defi
                      </p>

                      <div class="text--card__subtitulo text-left">
                        Lo primero que necesitarás es tener tokens NMBC en una
                        cartera compatible con Ethereum (Metamask), por el
                        momento los puedes adquirir en nuestro grupo de
                        Telegram, solicítalos y nuestro equipo te los hará
                        llegar.
                      </div>
                    </v-card-text>
                    <v-card-actions> </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
              <v-row class=" justify-center   " style="width:100%; ">
                <v-col
                  cols="5"
                  md="3"
                  class=" fill-height d-flex flex-column justify-center align-center "
                >
                  <v-btn
                    elevation="4"
                    color="#243ffa"
                    max-width="180px"
                    style="font-family: Roboto-Medium; color:white; font-size:15px; text-transform: unset !important;"
                  >
                    Obtener Número
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </section>

    <!-- section 4 -->
    <v-img :src="require('@/assets/background-4.png')" alt="">
      <v-row
        class=" justify-center align-center  pa-0 ma-0 "
        style="width:100%; "
      >
        <v-col cols="12" md="12" class="pa-2  mt-14 ma-2 ">
          <v-row
            wrap
            class="justify-center align-center text-center pa-0 ma-0 "
            style="width:100%; "
          >
            <v-col cols="10" md="5" class="pa-2  mt-15 ma-2 ">
              <v-img
                
                :src="require('@/assets/img-cryptonumber-02.png')"
                alt=""
              >
              </v-img>
            </v-col>
            <v-col cols="9" md="4" class="pa-0  ma-0 ">
              <v-row class="justify-center" style="width:100%; ">
                <v-col cols="10" md="11" style="" class="pa-0 ma-2 text-left ">
                  <span class="sectionfour__sub--titulo  ">
                    Números NFT
                  </span>
                </v-col>
                <v-col cols="12" md="11" style="" class=" pa-0 ma-0 text-left ">
                  <span class="pa-0 ma-0 text--card__subtitulo">
                    Lorem ipsum 100.000.000 NMBC, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi.
                  </span>
                </v-col>
                <v-col cols="12" md="11" style="" class="pa-0 ma-3 text-left ">
                  <span class="">
                    Números NFT
                  </span>
                </v-col>
                <v-col cols="12" md="11" style="" class="ma-0 text-left pa-0 ">
                  <span class="pa-0 ma-0 text--card__subtitulo">
                    Genera tu NFT con el número que decidas y opera con el,
                    regala, vende, alquilar, juega, usalo como colateral…
                  </span>
                </v-col>
                <v-col cols="12" md="11" style="" class="pa-0 ma-3 text-left ">
                  <span class="">
                    Números NFT
                  </span>
                </v-col>
                <v-col cols="12" md="11" style="" class="ma-0 text-left pa-0 ">
                  <span class="pa-0 ma-0 text--card__subtitulo">
                    Hemos creado algunos números mágicos para darles
                    funcionalidades de acceso prioritario a funcionalidades del
                    proyecto, además de tener todas quellas de los números
                    standard.
                  </span>
                </v-col>
              </v-row>
            </v-col>

            <!-- separador -->
             <v-row
            wrap
            class="justify-center align-center text-center pa-0 ma-0 "
            style="width:100%; "
          >
            <v-col cols="12" md="5" class="pa-2   ma-2 ">
              <v-spacer></v-spacer>
            </v-col>
             </v-row>

            <v-col cols="10" md="5" class="pa-0  ma-0 ">
              <v-row class="" style="width:100%; ">
                <v-col cols="12" md="11" style="" class="pa-0 ma-2 text-left ">
                  <span class="sectionfour__sub--titulo  ml-2">
                    Distribución de tokens
                  </span>
                </v-col>
                <v-col cols="12" md="10" style="" class="ml-5 pa-0 ma-0 text-left ">
                  <span class="pa-0 ma-0 text--card__subtitulo">
                    Lorem ipsum 100.000.000 NMBC, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi.
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
                  <v-list  :hover="offRipple" :ripple="offRipple" color="transparent" class="text-left  align-left ">
                    <v-list-item-group class="text-left align-left">
                      <v-list-item
                        v-for="(item, i) in infoTokens"
                        :key="i"
                        class="text-left align-left" 
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
                                <span class="texto__info--tokes ml-2 ma-1">{{
                                       item.textoTokens[index]}}
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
            <v-col
              cols="12"
              md="4"
              class="mt-15 ma-2 align-center d-flex  justify-center text-center"
            >
              <v-img
                contain
                class=""
                style=" width: 465px;height: 671px;"
                :src="require('@/assets/img-cryptonumber-03.png')"
                alt=""
              >
              </v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
          

              <v-img class="pa-0 ma-0" :src="require('@/assets/background-4-copy.png')" alt="">
             <v-row class=" justify-center align-center" style="width:100%; ">
                <v-col cols="12" md="9" style="" class=" d-flex align-center justify-center pa-0 ma-2   ">

  
<v-carousel
    cycle
    hide-delimiter-background
    height="300"
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-row class="ma-4 justify-center">
                <v-col :id="`cards--carousel-items`" cols="3" v-for="(images, j) in slide.images" :key="j" class="card--carousel__item pa-2 ma-2 elevation-1 d-flex flex-column justify-center align-center" style="height:200px; ">
                      <div class="d-flex flex-column justify-center align-center">
                            <span class="mx-auto text-center caption">{{ images.caption }}</span>
                      </div>
                  </v-col>
            </v-row>
      </v-carousel-item>
  </v-carousel>
               
                </v-col>
              
             </v-row>
      </v-img>
    </v-img>

    <!-- fin section 4 -->
    
    <!-- section 5 -->
    <section
      id="cabecera"
      style="background:#17191e; width:100%; height:100%;"
    >
    
    <v-row class="   justify-center" style="width:100%; ">
                <v-col
                  cols="12"
                  md="12"
                  class="pa-0 ma-0  mt-15 fill-height d-flex flex-column justify-center align-center "
                >
                  <span class="tituloPortada__sectionThree  ma-2">
                    ¿Cómo obtener mi número?
                  </span>
            </v-col>


              <v-col
                  cols="12"
                  md="8"
                  class="pa-0 ma-0  mt-15 fill-height d-flex flex-column justify-center align-center "
                >

               <v-row> 
             <v-col
                  cols="12"
                  md="4"
                    v-for="(item, i) in 6"
              :key="i"
                  class="pa-0 ma-0  mt-5 fill-height d-flex flex-column justify-center align-center "
                >

                 <v-card
                    class=" elevation-0 pa-0 ma-0"
                    max-width="344"
                    color="transparent"
                  >
                    <v-card-text
                      class="text-left align-center   justify-center "
                    >
                      <div style="width:100%;" class="text-center align-center ">
                        <v-row
                          class=" pa-0 ma-0 mt-2 justify-center"
                          style="width:100%; "
                        >
                          <v-col
                            cols="12"
                            md="12"
                            class="pa-0  fill-height d-flex flex-column justify-center align-center"
                          >
                            <v-img
                              width="230px"
                              height="230px"
                              class="pa-0 "
                              :src="require(`@/assets/user-img.png`)"
                              alt=""
                            ></v-img>
                          </v-col>
                        </v-row>
                      </div>
                      <p class="text--card__titulo mt-2 text-center">
                        Nombre
                      </p>

                      <p class="text--card__subtitulo text-center pa-0 ma-0">
                       cargo
                      </p>
                    </v-card-text>
                    <v-card-actions> </v-card-actions>
                  </v-card>
             </v-col>
               </v-row>
 </v-col>
    </v-row>
        <v-img  :src="require('@/assets/img/background-4-copy.png')" alt="">
      <v-row
        class=" justify-center align-center  pa-0 ma-0 "
        style="width:100%; "
      >
      <v-spacer></v-spacer>
        <v-col cols="12" md="12" class="pa-2  mt-14 ma-2 ">

             <v-row class="justify-center" style="width:100%; ">
                <v-col
                  cols="12"
                  md="12"
                  class="pa-0 ma-0  mt-15 fill-height d-flex flex-column justify-center align-center "
                >
                  <span class="tituloPortada__sectionThree  ma-2">
                    FAQ
                  </span>
                </v-col>
             </v-row>



            <v-row class="   justify-center" style="width:100%; ">
                <v-col
                  cols="12"
                  md="7"
                  class="pa-0 ma-0  mt-15 fill-height d-flex flex-column justify-center align-center "
                >
             <v-expansion-panels
                    style="background:#1b1d22; border-bottom:1px solid #fff;"
                    class="elevation-0 rounded-0 mt-10"
                  >
                    <v-expansion-panel
                      style="border-top:1px solid #fff; background:#1b1d22;color:white"
                      v-for="(item, i) in faq"
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
                        {{ item.pregunta }}
                      </v-expansion-panel-header>
                      <v-expansion-panel-content style="font-weight:300;">
                        {{ item.respuesta }}
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
            </v-row>



        </v-col>
      </v-row>
    </v-img>
    </section>
    <!-- fin section 5 -->


    <!-- section 4 -->


  </div>
</template>

<script>
export default {
  name: "Home",

  components: {},
  data() {
    return {
      faq:[
          {
            pregunta:'¿Puede otro usuario adquirir el mismo número que yo?',
            respuesta:'Un elemento común de los NMBC con otros tokens no fungibles es que se tratan de elementos individuales irrepetibles. Existen múltiples números para asignar a un contrato, pero cuando uno de ellos es registrado ya no se puede volver a registrar a nombre de otra persona. O sea, solo existe un “10” o un “0407”, y si alguien más quiere adquirir dichos números deberá comprarlos a su propietario o crear uno similar.'
          },
           {
            pregunta:'¿pregunta dos Puede otro usuario adquirir el mismo número que yo?',
            respuesta:'Un elemento común de los NMBC con otros tokens no fungibles es que se tratan de elementos individuales irrepetibles. Existen múltiples números para asignar a un contrato, pero cuando uno de ellos es registrado ya no se puede volver a registrar a nombre de otra persona. O sea, solo existe un “10” o un “0407”, y si alguien más quiere adquirir dichos números deberá comprarlos a su propietario o crear uno similar.'
          },      
      ],
       colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
       slides: [
      {
        images: [
          { caption: "Shopping-Page"},
          { caption: "Cart-Page" },
          { caption: "main-Page" }
        ],
      },
          {
        images: [
          { caption: "Shopping-Page"},
          { caption: "Cart-Page" },
          { caption: "main-Page" }
        ],
      },
       {
        images: [
          { caption: "Shopping-Page"},
          { caption: "Cart-Page" },
          { caption: "main-Page" }
        ],
      }
       ],
      offRipple:false,
      Crytonumero: "",
      infoCrypto: ["¿Qué es Cryptonumbers?", "¿Qué es NMBC?"],
      Inforelleno: [
        "NumberCoin (NMBC) Es un doble token ERC20 del protocolo Cryptonumbers, tiene la particularidad que mantiene estable el precio de cada nuevo Número NFT creado en la plataforma, (excepto en los números premium) teniendo paridad 1:1 con el Satoshi, de este modo evitamos las temidas burbujas de lanzamiento, lo denominamos “StableNFT”.",
        "NumberCoin (NMBC) Es un doble token ERC20 del protocolo Cryptonumbers, tiene la particularidad que mantiene estable el precio de cada nuevo Número NFT creado en la plataforma, (excepto en los números premium) teniendo paridad 1:1 con el Satoshi, de este modo evitamos las temidas burbujas de lanzamiento, lo denominamos “StableNFT”.",
      ],
      titulo: " El Primer Metaverso de los Números",
      subtitulo: " Crea Tu Número Preferido En Un NFT<br> y sácale rendimiento",
      description:
        " Cryptonumbers y su token NMBC, crea el  único contrato que certifica tu propiedad del <br>número NFT que elijas dentro de la red Ethereum. La fecha del cumpleaños de tu hijo, el <br>número de tu jugador favorito, tu número de la suerte pueden ser parte de tu catálogo de<br> números exclusivos",
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
    };
  },
};
</script>
<style lang="scss" scoped>

#cards--carousel-items::after{
   content: "____";
  width: 1px;
  height: 57px;
  position: absolute;

background:  var(--corporativ-1);
transform: rotate(90deg);
top: 100px;
left: 23%;
}
.card--carousel__item{
   border-radius: 11px;
  border: solid 1px #d5d5d5;
  background-color: #1d1f24;
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
.sectionfour__sub--titulo{
  font-family: Ubuntu;
  font-size: 30px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.28;
  letter-spacing: 0.45px;
  color: #fff;
}
#img--ObtenerNum__pasos-0::after,
#img--ObtenerNum__pasos-1::after {
  content: url("../assets/stroke-1-copy-2.png"); /* with class ModalCarrot ??*/
  position: relative; /*or absolute*/
  z-index: 100000; /*a number that's more than the modal box*/
  left: 138px;
  top: -300px;
}
.text--card__subtitulo {
  font-family: Ubuntu;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.59;
  letter-spacing: 0.21px;
  text-align: center;
  color: #fff;
}
.text--card__titulo {
  font-family: Ubuntu;
  font-size: 21px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.26px;
  text-align: center;
  color: #fff;
}
.sectionThree__sub--description {
  font-family: Ubuntu;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.59;
  letter-spacing: 0.21px;
  text-align: center;
  color: #fff;
}
.tituloPortada__sectionThree {
  font-family: Ubuntu;
  font-size: 36px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.28;
  letter-spacing: 0.45px;
  text-align: center;
  color: #fff;
}
.texto--panelsExpande {
  font-family: Ubuntu;
  font-size: 15px;
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
  color: red !important;
  opacity: 1;
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
