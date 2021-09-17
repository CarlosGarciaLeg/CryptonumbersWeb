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
        <span class="tituloPortada" @click="activarModal()">Tokenomic</span>
        </v-col>
        </v-row>

          <modal-app
        v-model="modalOn"
      ></modal-app>
    </div>
</template>

<script>
    export default {
      data(){
        return{
            modalOn:false
        }
      },
      methods:{
        activarModal(){
          if(!this.modalOn){
             return this.modalOn = true
          }else{
             return this.modalOn = false
          }
         
        }
      }
        
    }
</script>

<style lang="scss" scoped>

</style>