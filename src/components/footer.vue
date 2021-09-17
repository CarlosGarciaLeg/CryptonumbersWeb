<template>
  <div>
    
    <section style="background:#141414;
  bottom: 0;  width:100%;">
      <v-row class="  pa-4 ma-1" style="">
        <v-col
          cols="12"
          md="12"
          class=" justify-center align-center "
        >
          <v-row class="justify-center" style="width:100%; ">
            <v-col
              cols="12"
              md="9"
              class=" ma-0   pa-0   "
            >
              <v-row class="  align-center justify-center" style="width:100%; ">
                <v-col
                  cols="12"
                  md="2"
                   :class="{
                        'ml-8 mt-3 ': $vuetify.breakpoint.xsOnly,
                      }"
                  class="pa-0  ma-0 white--text fill-height d-flex flex-column justify-center align-center "
                >
                  info@cryptonumbers.es
                </v-col>
                <v-col
                  cols="10"
                  md="8"
                  class="pa-3  ma-0  fill-height d-flex flex-column justify-center align-center "
                   :class="{
                        'ml-12 ': $vuetify.breakpoint.xsOnly,
                      }"
                >
                  <v-img
                    
                    :src="require('@/assets/logo-blanco.png')"
                    alt="logo-blanco"
                    class="mr-10"
                  >
                  </v-img>
                </v-col>
                <v-col
                  cols="4"
                  md="1"
                  class="pa-2    d-inline-flex  align-stretch "
                >
                      <v-img
                      contain
                   width="46px"
                   height="46px"
                    :src="require('@/assets/icon-git.png')"
                    alt=""
                  >
                  </v-img>
                   <v-img
                   
                     contain
                   width="46px"
                   height="46px"
                   class="ml-1"
                    :src="require('@/assets/icon-telegram.png')"
                    alt=""
                  >
                  </v-img>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
