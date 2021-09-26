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
                        md="10"
                        class="pa-0 fill-height d-flex flex-column justify-center align-center"
                      >
                        <v-img
                          contain
                          class="pa-0 "
                          :src="require(`@/assets/` + item.img)"
                          alt=""
                        ></v-img>
                      </v-col>
                    </v-row>
                  </div>
                  <div class=" mt-2 text-center"
                   :class="{'texto--mobile-nft': $vuetify.breakpoint.xsOnly, 'text--card__titulo':$vuetify.breakpoint.smAndUp}"
                  >
                  {{item.nombre}}
                    <p class=" text-center pa-0 ma-0"
                      :class="{'salo-como-colateral': $vuetify.breakpoint.xsOnly, 'text--card__subtitulo':$vuetify.breakpoint.smAndUp}"
                    >
                      <v-list-item
                        v-for="(cargo, i) in item.cargos"
                        :key="i"
                      >
                          <v-list-item-content >
                            <v-list-item-title class=" text-center pa-0 ma-0" :class="{'salo-como-colateral': $vuetify.breakpoint.xsOnly, 'text--card__subtitulo':$vuetify.breakpoint.smAndUp}" v-text="cargo"></v-list-item-title>
                          </v-list-item-content>
                      </v-list-item>
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

     
    </section>
    <!-- fin section 5 -->
    </div>
</template>

<script>
    export default {
     data(){
         return{
    
            equipo:[
              {
                nombre:'Carlos García Legaz',
                cargos:['CEO','Arquitecto Blockchain','20 años en emprendimientos tech'],
                img: 'Carlos.png'
              },
                {
                nombre:'Juan Manuel Dìaz',
                cargos:['Blockchain Entrepeneur','En blockchain desde la edad de bronce'],
                img: 'Juanma.png'
              },
                {
                nombre:'Florentino Riesgo',
                cargos:['20 años liderando compañias','Apasionado de Blockchain'],
                img: 'Florentino.png'
              },
                {
                nombre:'Carlos Javier Velázquez',
                cargos:['Back-end Developer','15 años en el desarrollo de sistemas'],
                img: 'Javier.png'
              },
                {
                nombre:'Alex Veló',
                cargos:['Front-end Developer','Diseñador UX'],
                img: 'Alex.png'
              },
                {
                nombre:'Nicolas E. Gimenez',
                cargos:['Solidity Developer','Front-end Developer','Defilab Co-funder'],
                img: 'Nico.png'
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


</style>