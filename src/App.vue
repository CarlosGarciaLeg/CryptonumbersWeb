<template>
 <div id="app">
    <v-app>
        <v-container fluid ma-0 pa-0>
                    <!-- Componente de header -->
                        <!-- <transition name="scroll"> -->
                            <router-view />
                        <!-- </transition> -->
            <footer-app ></footer-app> 
        </v-container>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
@import "./sass/variables";
@font-face {
  font-family: Roboto-Medium;
  src: url("./assets/fonts/Roboto-Medium.ttf");
}
</style>
