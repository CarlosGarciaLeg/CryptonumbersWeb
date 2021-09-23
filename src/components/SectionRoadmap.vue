<template>
    <div>
    <section class=""
      :class="{'section__cinco':$vuetify.breakpoint.smAndUp}"
      >
        <v-row
          class=" mt-0 justify-center align-center"
          wrap
          style="width:100%; position:relative;  "
        >
          <v-col
            cols="12"
            md="12"
            class="pa-0 ma-0 fill-height d-flex flex-column justify-center align-center "
          >
            <span class=""
               :class="{'Cryptonumbers-y-su-t text-center':$vuetify.breakpoint.xsOnly, 'ma-2 sectionfour__sub--titulo ':$vuetify.breakpoint.smAndUp}"
            >
              Cryptonumbers Roadmap
            </span>
          </v-col>

       
           
               <!-- slide -->
            <slide-desktop v-if="$vuetify.breakpoint.smAndUp"></slide-desktop>
             <!-- slide -->
            <slide-mobile v-if="$vuetify.breakpoint.xsOnly"></slide-mobile>
       
        </v-row>
      </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.card--carousel__item {
  border-radius: 11px;
  border: solid 1px #d5d5d5;
  background-color: #1d1f24;
  transform: rotate(360deg);
}
</style>