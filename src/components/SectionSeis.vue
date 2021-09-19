<template>
    <div>

    <!--   Section 4     -->
    <!--   Fin section 4 -->
    <!--   Section 5     -->
    <section id="cabecera" style="background:#17191e; width:100%; height:100%;">
      <v-row class="justify-center" style="width:100%; ">
        <v-col
          cols="12"
          md="12"
          class="pa-0 ma-0  mt-15 fill-height d-flex flex-column justify-center align-center "
        >
          <v-row
            class="justify-center align-center text-center"
            style="width:100%; "
          >
            <v-col
              cols="12"
              md="12"
              class="pa-0 ma-0  mt-15 text-center #1b1d22 fill-height d-flex flex-column justify-center align-center "
            >
            </v-col>
            <span class="sectionfour__sub--titulo">
              El Equipo
            </span>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          md="8"
          class="pa-0 ma-0  mt-5 fill-height d-flex flex-column justify-center align-center "
        >
          <v-row>
            <v-col
              cols="12"
              md="4"
              sm="4"
              v-for="(item, i) in equipo"
              :key="i"
              class="pa-0 ma-0  mt-5    justify-center align-center "
              data-aos="zoom-in"
              :data-aos-duration="2500"
            >
              <v-card class=" elevation-0 pa-0 ma-0" color="transparent">
                <v-card-text class="text-left align-center   justify-center ">
                  <div style="width:100%;" class="text-center align-center ">
                    <v-row
                      class=" pa-0 ma-0 mt-2 justify-center"
                      style="width:100%; "
                    >
                      <v-col
                        cols="9"
                        md="7"
                        class="pa-0 fill-height d-flex flex-column justify-center align-center"
                      >
                        <v-img
                          contain
                          class="pa-0 "
                          :src="require(`@/assets/user-img.png`)"
                          alt=""
                        ></v-img>
                      </v-col>
                    </v-row>
                  </div>
                  <div class="text--card__titulo mt-2 text-center">
                  {{item.nombre}}-{{i+1}}
                    <p class="text--card__subtitulo text-center pa-0 ma-0">
                    {{item.cargo}}
                    </p>
                  </div>
                </v-card-text>
                <v-spacer></v-spacer>
                <v-card-actions> </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-img :src="require('@/assets/img/background-4-copy.png')" alt="">
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
                <span class="sectionfour__sub--titulo">
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

            <v-row
              class="justify-center"
              v-if="$vuetify.breakpoint.xsOnly"
              style="width:100%; "
            >
              <v-col
                cols="12"
                md="12"
                class="pa-0 ma-0  mt-15 fill-height d-flex flex-column justify-center align-center "
              >
                <span class="sectionfour__sub--titulo"> </span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-img>
    </section>
    <!-- fin section 5 -->
    </div>
</template>

<script>
    export default {
     data(){
         return{
             faq: [
                  {
                    pregunta: "¿Puede otro usuario adquirir el mismo número que yo?",
                    respuesta:
                      "Un elemento común de los NMBC con otros tokens no fungibles es que se tratan de elementos individuales irrepetibles. Existen múltiples números para asignar a un contrato, pero cuando uno de ellos es registrado ya no se puede volver a registrar a nombre de otra persona. O sea, solo existe un “10” o un “0407”, y si alguien más quiere adquirir dichos números deberá comprarlos a su propietario o crear uno similar.",
                  },
                  {
                    pregunta: "¿Puede otro usuario adquirir el mismo número que yo?",
                    respuesta:
                      "Un elemento común de los NMBC con otros tokens no fungibles es que se tratan de elementos individuales irrepetibles. Existen múltiples números para asignar a un contrato, pero cuando uno de ellos es registrado ya no se puede volver a registrar a nombre de otra persona. O sea, solo existe un “10” o un “0407”, y si alguien más quiere adquirir dichos números deberá comprarlos a su propietario o crear uno similar.",
                  },
              ],
            equipo:[
              {
                nombre:'Nombre',
                cargo:'Cargo'
              },
                {
                nombre:'Nombre',
                cargo:'Cargo'
              },
                {
                nombre:'Nombre',
                cargo:'Cargo'
              },
                {
                nombre:'Nombre',
                cargo:'Cargo'
              },
                {
                nombre:'Nombre',
                cargo:'Cargo'
              },
                {
                nombre:'Nombre',
                cargo:'Cargo'
              },
              
            ]  
         }
     }   
    }
</script>

<style lang="scss" scoped>

</style>