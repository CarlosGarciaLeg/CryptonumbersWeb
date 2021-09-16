<template>
  <div>
    <sectionUno></sectionUno>

    <sectionDos></sectionDos>

    <section-tres></section-tres>

    <section-cuatro></section-cuatro>

    <section-cinco></section-cinco>

    <section-seis></section-seis>

    <!-- section 4 -->
  </div>
</template>

<script>
import SectionCinco from "../components/SectionCinco.vue";
import SectionCuatro from "../components/SectionCuatro.vue";
export default {
  name: "Home",

  components: { SectionCuatro, SectionCinco },
  data() {
    return {
      
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "#1b1d22 lighten-1",
        "deep-purple accent-4",
      ],

      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "#1b1d22 lighten-1",
        "deep-purple accent-4",
      ],
      offRipple: false,
      infoCrypto: ["¿Qué es Cryptonumbers?", "¿Qué es NMBC?"],
    };
  },
};
</script>
<style lang="scss" scoped>
 





</style>
