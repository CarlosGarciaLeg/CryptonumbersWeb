<template>
    <div>

    <!--   Section 4     -->
    <!--   Fin section 4 -->
    <!--   Section 5     -->
    <section id="cabecera" 
    :style="{'background:#17191e; width:100%; height:100%;':$vuetify.breakpoint.smAndUp}"
    >
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
            <span class=""
              :class="{'texto--mobile-team  text-center':$vuetify.breakpoint.xsOnly, 'sectionfour__sub--titulo text-left ml-2':$vuetify.breakpoint.smAndUp}"
            >
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
                        cols="12"
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
                  <div class=" mt-2 text-center"
                   :class="{'texto--mobile-nft': $vuetify.breakpoint.xsOnly, 'text--card__titulo':$vuetify.breakpoint.smAndUp}"
                  >
                  {{item.nombre}}-{{i+1}}
                    <p class=" text-center pa-0 ma-0"
                      :class="{'salo-como-colateral': $vuetify.breakpoint.xsOnly, 'text--card__subtitulo':$vuetify.breakpoint.smAndUp}"
                    >
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
     
      <section 
      :class="{'section--seis':$vuetify.breakpoint.smAndUp}"
      >
        <v-row
          class=" justify-center align-center  pa-0 ma-0 "
          style="width:100%; "
        >
          <v-spacer></v-spacer>
          <v-col cols="12" md="12" class="  "
            :class="{'mt-14 ma-2 pa-2':$vuetify.breakpoint.smAndUp}"
          >
            <v-row class="justify-center pa-0 ma-0" style="width:100%; ">
              <v-col
                cols="12"
                md="12"
                class="pa-0 ma-0  mt-15 fill-height d-flex flex-column justify-center align-center "
              >
                <span class=""
                 :class="{'texto--mobile-team  text-center':$vuetify.breakpoint.xsOnly, 'sectionfour__sub--titulo text-left ml-2':$vuetify.breakpoint.smAndUp}"
                >
                  FAQ
                </span>
              </v-col>
            </v-row>

            <v-row class="  ma-0 pa-0 justify-center" style="width:100%; ">
              <v-col
                cols="12"
                md="7"
                class="pa-0 ma-0  mt-15 fill-height d-flex flex-column justify-center align-center "
              >
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
                  
                    :multiple="$vuetify.breakpoint.xsOnly"
                      style=" border-bottom:1px solid #fff;border-top:1px solid white;"
                >
                  <v-expansion-panel
                   :light="false"
                      v-for="(item, i) in faq"
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
                      {{ item.pregunta }}
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
                        style="display:inline-block; text-align:left;"
                    >
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
      </section>
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
.section--seis {
  background-image: url("../assets/img/background-4-copy.png");
  background-size: cover;
}

.border{
  border-top:1px solid #979797 !important;
  border-bottom:1px solid #979797 !important;
}

.cardDesktop {
  background-color: #1b1d22 !important;
  color:white;
}
</style>