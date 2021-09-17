<template>
  <div>
    <v-row
      class=" justify-center text-center  pa-0 ma-0 "
      style="width:100%; height:620px;"
    >
      <v-col
        cols="12"
        md="12"
        class="pa-2 mt-0  ma-2 "
        :class="{ 'mt-0': $vuetify.breakpoint.xsOnly }"
      >
        <!-- <span class="tituloPortada" @click="activarModal()">Tokenomic</span> -->
        <v-row class="pa-0 ma-0 mt-15 justify-center align-center ">
          <v-col cols="12" md="7" lg="7" class="ma-2">
            <v-row>
              <v-col cols="6" class="text-right">
            <v-btn
              elevation="4"
              color="#243ffa"
              width="216px"
              active-class="btn--text "
              style="font-family: Ubuntu;  color:white; font-size:15px; text-transform: unset !important;"
              v-if="$vuetify.breakpoint.smAndUp"
            >
              Obtener Número NFT
            </v-btn>
              </v-col>
              <v-col cols="6" class="text-left">
            <v-btn
              elevation="4"
              color="#1b1d22"
              width="216px"
              active-class="mr-10 btn_premiun"
              style="font-family: Roboto; color:white; font-weight: 500; font-size:14px; text-transform: unset !important; border:1px solid white;"
              v-if="$vuetify.breakpoint.smAndUp"
            >
              Premium
            </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class=" justify-center pa-0 ma-0 " style="width:100%; ">
          <v-col cols="12" md="6" lg="6" class=" ">
            <search-bar></search-bar>
          </v-col>
        
        </v-row>
              <v-row class=" justify-center pa-0 ma-0  " style="width:100%; ">
            <v-col cols="12" md="6" lg="6" class=" text-left ">

               <v-row class=" justify-center pa-0 ma-0  " style="width:100%; ">
            <v-col cols="12" md="11" lg="11" class=" text-left pa-0  ">
            <span class="white--text">Resultados:</span>
               <v-divider class="mt-2" color="#818181"></v-divider>
            </v-col>
               </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <modal-app  v-model="modalOn"></modal-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalOn: false,
    };
  },
  methods: {
    activarModal() {
      if (!this.modalOn) {
        return (this.modalOn = true);
      } else {
        return (this.modalOn = false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn_premiun {
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  text-align: center;
  color: #fff;
}
</style>
