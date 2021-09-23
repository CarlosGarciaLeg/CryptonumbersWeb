<template>
    <div>
        <v-row
                      class="mt-8 justify-center pa-0 ma-0 "
                      style="width:100%; "
                    >
                      <v-col cols="12" md="12" lg="12" class=""
                      :class="{'pa-0 ma-0 justify-center d-flex text-center': $vuetify.breakpoint.xsOnly}"
                      >
                        <v-text-field
                          placeholder="Introduzca número"
                          single-line
                          dense
                          elevation-4
                          light
                          v-model.number="Crytonumero"
                          :class="{'mx-5': $vuetify.breakpoint.smAndUp}"
                          class="  elevation-0 rounded-0  search-field"
                          height="50px"
                          background-color="#ffffff"
                        >
                          <template v-slot:append v-if="$vuetify.breakpoint.smAndUp">
                            <v-btn
                              color="#0e41ff"
                              class="rounded-0 btn--search white--text "
                              height="50"
                              :class="{ 'btn--desktop': $vuetify.breakpoint.smAndUp }"
                              @click="deleteTypedItem()"
                            >
                              Buscar
                            </v-btn>
                          </template>
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" class="pa-0 ma-0">
                        <v-btn
                              color="#0e41ff"
                              class="rounded-0 btn--search white--text "
                              height="50"
                              width="100%"
                              :class="{ 'btn--desktop': $vuetify.breakpoint.smAndUp }"
                              @click="deleteTypedItem()"
                              v-if="$vuetify.breakpoint.xsOnly"
                            >
                              Buscar
                            </v-btn>
                      </v-col>
                    </v-row>
                  
    </div>
</template>

<script>
    export default {
        data(){
            return{
                 Crytonumero: "",
            }
        },
        methods:{
          deleteTypedItem(){
            
          }
        }
        
    }
</script>

<style lang="scss" scoped>

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
.btn--desktop{
    width:150px;
}

</style>