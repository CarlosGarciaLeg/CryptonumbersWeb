<template>
    <div>
              <!-- fin section cuatro -->
    <section id="cabecera" class="width:100%; height:100%;"
    :class=" { 'desktop-section4-container' : $vuetify.breakpoint.smAndUp,
                       'mobile--container':$vuetify.breakpoint.xsOnly}"
    >
      <v-row wrap class="fill-height justify-center align-center  pa-0 ma-0 ">
        <v-spacer></v-spacer>
        <v-col
          cols="12"
          md="12"
        
          class="align-center text-center justify-center"
          :class="{'mt-15':$vuetify.breakpoint.smAndUp,'desktop-section4-container' : $vuetify.breakpoint.smAndUp,
                       'mobile--container':$vuetify.breakpoint.xsOnly}"
        >
          <v-spacer class=""></v-spacer>
          <v-row class=" ma-0 mt-15 justify-center" style="width:100%; ">
            <v-col
              cols="12"
              md="9"
              class="pa-0 ma-0 fill-height d-flex flex-column justify-center align-center "
            >
              <span
                class="  ma-2"
                data-aos="fade-up"
                data-aos-duration="4000"
                 :class="{'Cryptonumbers-y-su-t mt-7':$vuetify.breakpoint.xsOnly, 'tituloPortada__sectionThree':$vuetify.breakpoint.smAndUp}"
              >
                ¿Cómo obtener mi número?
              </span>
              <v-row class="mt-2 justify-center   " style="width:100%; ">
                <v-col
                  cols="12"
                  md="11"
                  class="pa-0 ma-0 fill-height d-flex flex-column justify-center align-center "
                >
                  <span
                    class="  ma-4"
                    style=" margin: 26px 110px 101px 119px;"
                    data-aos="fade"
                    data-aos-duration="4000"
                       :class="{'salo-como-colateral': $vuetify.breakpoint.xsOnly, 'sectionThree__sub--description':$vuetify.breakpoint.smAndUp}"
                  >
                    Adquirir un número NFT de Cryptonumber es muy sencillo,
                    hemos pensado como sería la forma más rápida de hacerlo sin
                    que te suponga una agonía.
                  </span>
                </v-col>
              </v-row>
              <v-row class="mt-2 justify-center   " style="width:100%; ">
                <v-col
                  cols="12"
                  md="3"
                  v-for="(item, i) in obtenerNum"
                  :key="i"
                  :id="`img--ObtenerNum__pasos-${i}`"
                  class="pa-1 ma-1 fill-height d-flex flex-column img--ObtenerNum__pasos justify-center align-center "
                >
                  <v-card
                    class=" elevation-0 pa-0 ma-0"
                    max-width="344"
                    color="transparent"
                    :light="false"
                      :class="{'texto__card': $vuetify.breakpoint.sxOnly}"
                  >
                    <v-card-text
                      class="text-left align-center   justify-center "
                          :light="false"
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
                              v-if="$vuetify.breakpoint.smAndUp"
                              :class="{'imgcard': $vuetify.breakpoint.smAndUp}"
                              class="pa-0 "
                              :src="require(`@/assets/img-paso-${i + 1}.png`)"
                              alt=""
                              data-aos="zoom-in"
                              :data-aos-duration="1000 * (i + 1)"
                            ></v-img>
                            <v-img
                              v-if="$vuetify.breakpoint.xsOnly"
                              :class="{'imgcard': $vuetify.breakpoint.smAndUp}"
                              class="pa-0 "
                              :src="require(`@/assets/pasos/img-paso-${i + 1}.png`)"
                              alt=""
                              data-aos="zoom-in"
                              :data-aos-duration="1000 * (i + 1)"
                            ></v-img>
                          </v-col>
                        </v-row>
                      </div>
                      <div
                        v-for="(elem, j) in item.info"
                        :key="j"
                     
                        class=" "
                      >
                        <p class=" "
                         :class="{'texto--mobile-nft mt-5 texto__card': $vuetify.breakpoint.xsOnly, 'text--card__titulo mt-5 text-left':$vuetify.breakpoint.smAndUp}"
                        >
                          {{ elem.titulo }}
                        </p>

                        <div class=" "
                          :class="{'salo-como-colateral ma-0 pa-0 text-center texto__card': $vuetify.breakpoint.xsOnly, 'text--card__subtitulo text-left':$vuetify.breakpoint.smAndUp}"
                        >
                          {{ elem.description }}
                        </div>
                      </div>
                    </v-card-text>
                    <v-card-actions> </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
              <v-row class=" justify-center  ma-0 " style="width:100%; ">
                <v-col
                  cols="12"
                  md="3"
                  class=" fill-height d-flex flex-column justify-center align-center "
                >
                  <v-btn
                    elevation="4"
                    color="#243ffa"
                    height="45"
                  :block="$vuetify.breakpoint.xsOnly"
                    style="font-family: Roboto-Medium; color:white; font-size:15px; text-transform: unset !important;"
                    @click="obtenerNumero()"
                  >Obtener Número
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
    </div>
</template>

<script>
    export default {
     data(){
         return{
                obtenerNum: [
        {
          info: [
            { titulo: "Adquirir NMBC" },
            {
              description:
                "Lo primero que necesitarás es tener tokens NMBC en una cartera compatible con Ethereum (Metamask), por el momento los puedes adquirir en nuestro grupo de Telegram, solicítalos y nuestro equipo te los hará llegar.",
            },
          ],
        },
        {
          info: [
            { titulo: "Buscar Número" },
            {
              description:
                "Entra en la dAPP y realiza una búsqueda del número que deseas obtener, también tenemos una sección de números premiums. No olvides conectar primero tu wallet, por el momento solo es compatible con Metamask.",
            },
          ],
        },
        {
          info: [
            { titulo: "Obtener Número" },
            {
              description:
                "Y por último, si tu número está disponible en los resultados de búsqueda, podrás adquilirlos haciendo uso de nuestro token nativo NMBC, al obtener el NFT lo padrás ver en tu cartera y en la sección “Mis Números”.",
            },
          ],
        },
      ],
         }
     },
     methods:{
       obtenerNumero(){
         return  this.$router.push({ name: 'Search' })

       }
     }   
    }
</script>

<style lang="scss" scoped>

@media (min-width: 480px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  #img--ObtenerNum__pasos-0::after,
  #img--ObtenerNum__pasos-1::after {
    content: url("../assets/stroke-1-copy-2.png"); /* with class ModalCarrot ??*/
    position: relative; /*or absolute*/
    z-index: 100000; /*a number that's more than the modal box*/
    left: 138px;
    top: -300px;
  }
}
@media (max-width: 580px) {
  /* smartphones, Android phones, landscape iPho*/
  #img--ObtenerNum__pasos-0::after,
  #img--ObtenerNum__pasos-1::after {
    display: none;
  }
}

.texto__card{
  color:#333333 !important;
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

.text--card__subtitulo-nft{
  font-family: Ubuntu;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: 0.24px;
  text-align: center;
  color: white;
}
.imgcard{
  width:122px; height:122px;
}

.desktop-section4-container{
background:#17191e !important; 
}

.mobile--container{
  background: #f9faff !important;
}
</style>