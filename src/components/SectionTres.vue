<template>
    <div>
           <!-- section 3 -->
    <section class="section__tres #1b1d22">
      <v-spacer></v-spacer>
      <v-row class=" mt-15  justify-center" style="width:100%; ">
        <v-col
          cols="10"
          md="9"
          class="pa-0 ma-0   mt-15 fill-height d-flex flex-column justify-center align-center "
        >
          <span class="tituloPortada__sectionThree  ma-2">
            ¿Qué puedo hacer con un Número NFT?
          </span>
          <v-row class="  mt-2 justify-center   " style="width:100%; ">
            <v-col
              cols="12"
              md="11"
              class="pa-0 ma-0 fill-height d-flex flex-column justify-center align-center "
            >
              <span
                class="sectionThree__sub--description  ma-4"
                style=" margin: 26px 110px 101px 119px;"
              >
                Con los <strong> NFT de Cryptonumbers</strong> ocurre los mismo
                que con los “Blockchain Domains” en los markets de NFTs, el<br />
                valor de la imágen es simbólica, mientras que con el contrato de
                registro en la blockchain obtienes una prueba<br />
                verificable de que ese activo digital es auténtico. Es un token
                ERC-721, por su naturaleza puede ser operado<br />
                en los mercados de la red.
              </span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="  mt-15 justify-center" style="width:100%; ">
        <v-col
          cols="10"
          md="10"
          class="pa-1 ma-1   fill-height d-flex flex-column justify-center align-center "
        >
          <!-- cards information products -->
          <v-row class="mt-10 justify-center   " style="width:100%; ">
            <v-col
              cols="9"
              md="3"
              v-for="(item, i) in cardinfo"
              :key="i"
              class="pa-1 ma-3  mt-8 fill-height d-flex flex-column justify-center align-center "
              data-aos="zoom-in"
              :data-aos-duration="2500"
            >
              <v-card
                class=" elevation-0 pa-0 ma-0"
                max-width="344"
                color="transparent"
                v-for="(elem, j) in item.images"
                :key="j"
              >
                <div style="width:100%;" class=" text-center align-center ">
                  <v-row
                    class=" pa-0 ma-0  justify-center"
                    style="width:100%; "
                  >
                    <v-col
                      cols="12"
                      md="12"
                      class="pa-1 ma-0"
                      :id="`icon--cards-${i}`"
                    >
                      <v-img
                        contain
                        class=""
                        :src="elem.src"
                        alt=""
                        style=" width: 152px;"
                      ></v-img>
                    </v-col>
                  </v-row>
                </div>
                <div>
                  <p class="text--card__titulo pa-0 ma-0">
                    {{ elem.caption }}
                  </p>
                  <p class="text--card__subtitulo pa-0 ma-0">
                    {{ elem.text }}
                  </p>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                     cardinfo: [
        {
          images: [
            { src: require("@/assets/icon-defi.png") },
            { caption: "Colateral DeFi" },
            {
              text:
                "Úsalo como colateral en cualquier plataforma que aceptén tokens NFT como aval para finanzas descentralizadas.",
            },
          ],
        },
        {
          images: [
            { src: require("@/assets/icon-acceso.png") },
            { caption: "Acceso" },
            {
              text:
                "Los Números Premium te darán acceso prioritario en la venta privada de NMBC y en otros proyectos que decidan participar.",
            },
          ],
        },
        {
          images: [
            { src: require("@/assets/icon-regala-prox.png") },
            { caption: "Regala tu número" },
            {
              text:
                "Puedes regalar el número que quieras a una persona importante, solo tienes que enviarlo a su adrres a coste 0.",
            },
          ],
        },
        {
          images: [
            { src: require("@/assets/icon-vende-prox.png") },
            { caption: "Vende tu número" },
            {
              text:
                "Lo pordrás vender directamete en Cryptonumbers, o si lo prefieres enviarlo directamente a Opensea para su venta o subasta.",
            },
          ],
        },
        {
          images: [
            { src: require("@/assets/icon-batallas-prox.png") },
            { caption: "Batallas NFTs" },
            {
              text:
                "Retos divertidos de juegos de habilidad, el ganador se lleva como recompensa el NFT del adversario.",
            },
          ],
        },
        {
          images: [
            { src: require("@/assets/icon-alquiler-prox.png") },
            { caption: "Colateral DeFi" },
            {
              text:
                "Úsalo como colateral en cualquier plataforma que aceptén tokens NFT como aval para finanzas descentralizadas.",
            },
          ],
        },
      ],
            }
        }
    }
</script>

<style lang="scss" scoped>
.section__tres {
  background-image: url("../assets/background-3.png");
  background-size: cover;
}
.image__section4--info {
  background-image: url("../assets/img-cryptonumber-02.png");
  background-size: cover;
  width: 536px;
  height: 433px;
  object-fit: contain;
}
.tituloPortada__sectionThree {
  font-family: Ubuntu;
  font-size: 36px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.28;
  letter-spacing: 0.45px;
  text-align: center;
  color: #fff;
}

.sectionThree__sub--description {
  font-family: Ubuntu;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.59;
  letter-spacing: 0.21px;
  text-align: center;
  color: #fff;
}

.text--card__titulo {
  font-family: Ubuntu;
  font-size: 21px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.26px;
  text-align: center;
  color: #fff;
}

.text--card__subtitulo {
  font-family: Ubuntu;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.59;
  letter-spacing: 0.21px;
  text-align: center;
  color: #fff;
}
</style>