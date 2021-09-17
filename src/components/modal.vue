<template>
  <div class="text-center">
    <v-dialog
      v-model="modal"
      width="418px"
      height="239px"
      persistent
    
      class=" pa-1 ma-1 elevation-0"
      
      style=""
      overlay-color="black"
    >
    <!--   :fullscreen="$vuetify.breakpoint.xsOnly" -->
      <v-card class="elevation-0" color="#2d2d2d" dark style="border-radius:12px;">
        <v-card-text class="card__modal--subHeader ">
          <v-row class="pa-1 ma-1 " style="width:100%;  ">
            <v-col cols="12" md="12" style="position:relative;" class="justify-space-between ">
              <span class="texto_modal">Conectar Wallet </span>
              <span>
              <v-icon
                v-if="mostrarCerrar"
                size="20"
                class="boton-cerrar"
                @click="$emit('click', false)"
                color="#bfbfbf"
                >$close</v-icon
              ></span>
            </v-col>

            <v-col cols="12" md="12" style="" class=" pa-1">
                
                  <div class="" >
                <v-card class="" color="#1b1d22" dark style="border-radius:9px;">
        <v-card-text class="card__modal--subHeader ">
            <span class="texto__interno">Install Metamask</span>
            <v-btn fab x-small color="#1b1d22" class="boton-cerrar mr-2">
                <v-img
                    contain
                    width="30"
                    height="30"
                    :src="require('@/assets/MetaMask_Fox.svg')"
                    alt="logo-blanco"
                    
                  >
                  </v-img>
            </v-btn>
        </v-card-text>
                </v-card>
                  </div>
              
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  components: {},
  model: {
    prop: "modal",
    event: "click",
  },
  props: {
    modal: Boolean,
    width: {
      type: String,
      default: "240px",
    },
    fullscreen: {
      type: Boolean,
      default: true,
    },
    mostrarCerrar: {
      type: Boolean,
      default: true,
    },
    backgroundB: {
      type: String,
      default: "#CAD500",
    },
  },
  data() {
    return {};
  },
  methods: {
    InfiniteScroller(e) {
      console.log(e);
    },
  },
  watch: {
    fullscreen: function(value) {
      if (value) {
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.boton-cerrar {
  position: absolute;
  right: 2px;
  top: 10px;
}

.texto_modal{
    font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.38px;
  color: #bfbfbf;
}

.texto__interno{
    font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.28px;
  color: #bfbfbf;
}
</style>
