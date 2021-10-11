<template>
  <div>
    <v-row class=" justify-center text-center  pa-0 ma-0 " style="width:100%;background:#1b1d22;"
    >
      <v-col
        cols="12"
        md="12"
        class="pa-2 mt-0  ma-2 "
        :class="{ 'mt-0': $vuetify.breakpoint.xsOnly }"
      >
        <!-- <span class="tituloPortada" @click="activarModal()">Tokenomic</span> -->
        <v-row class="pa-0 ma-0 mt-15 justify-center align-center ">
          <v-col cols="12" md="7" lg="7" class="ma-2 ">
            <v-row>
              <v-col cols="12" sm="6" lg="6" class=""
               :class="{ 'text-right': $vuetify.breakpoint.smAndUp,
                         'text-center': $vuetify.breakpoint.sxOnly }"
               
              >
                <v-btn
                  elevation="4"
                  width="216px"
                  active-class="btn--text "
                  :style="showNumNFT ? 'border:1px solid white;' : ''"
                  style="font-family: Ubuntu;  color:white; font-size:15px; text-transform: unset !important;"
                 
                  v-bind:color="showNumNFT ? '#1b1d22' : '#243ffa'"
                  @click="obtenerNumNFT()"
                >
                  Obtener Número NFT
                </v-btn>
              </v-col>
              <v-col
                cols="12" lg="6" sm="6"
                :class="{ 'text-left justify-start align-center d-flex': $vuetify.breakpoint.smAndUp,
                         'text-center justify-center': $vuetify.breakpoint.sxOnly }"
                class=" pa-0 ma-0   "
              >
                <v-btn
                  elevation="4"
                  width="216px"
                  active-class="mr-10 btn_premiun"
                  style="font-family: Roboto; color:white; font-weight: 500; font-size:14px; text-transform: unset !important; "
                 
                  v-bind:color="!showNumNFT ? '#1b1d22' : '#243ffa'"
                  :style="!showNumNFT ? 'border:1px solid white;' : ''"
                  @click="obtenerNumPremium()"
                >
                  Premium
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class=" justify-center pa-0 ma-0 " style="width:100%; ">
          <v-col cols="12" md="6" lg="6" class=" ">
            <search-bar @numero="getNumber($event)"></search-bar>
          </v-col>
        </v-row>
        <v-row class=" justify-center pa-0 ma-0  " style="width:100%; ">
          <v-col cols="12" md="6" lg="6" class=" text-left ">
            <v-row class=" justify-center pa-0 ma-0  " style="width:100%; ">
              <v-col cols="12" md="11" lg="11" class=" text-left pa-0  ">
                <span class="white--text">Resultados:  </span>
                <v-divider class="mt-2" color="#818181"></v-divider>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class=" justify-center pa-0 ma-0  " style="width:100%; ">
          <v-col cols="12" md="6" lg="6" class=" text-left ">
            <v-row class=" justify-center pa-0 ma-0  " style="width:100%; ">
              <v-col cols="11" class="pa-0 ma-0">
                <v-card
                  elevation="1"
                  shaped
                  tile
                  dark
                  rounded
                  color="#fff0e3"
                  style="border:1px solid #ffa04d; color:#1b1d22;"
                  class="El-nmero-que-busca pa-5 rounded"
                >
                  <v-img
                      v-if="pending"
                        contain
                        width="50"
                        height="50"
                        :src="require('@/assets/loading.gif')"
                        alt="logo-blanco"
                      >
    
                  </v-img>
                  <v-row
                    class=" justify-center pa-0 ma-0  "
                    style="width:100%; "
                    v-if="!winEvent"
                  >
                    <v-col
                      cols="2"
                      class="pa-0 ma-0 justify-center d-flex text-center align-center"
                    >
                      <v-img
                        contain
                        width="30"
                        height="30"
                        :src="require('@/assets/MetaMask_Fox.svg')"
                        alt="logo-blanco"
                      >
                      </v-img>
                    </v-col>
                    <v-col cols="10" class="pa-0  ma-0" >
                      Ingresar el numero  que desea generar como NFT.
                    </v-col>
                  </v-row>
                 
                  <v-row
                    class=" justify-center pa-0 ma-0  "
                    style="width:100%; "
                    v-else
                  >
                  
                    <v-col
                      cols="2"
                      class="pa-0 ma-0 justify-center d-flex text-center align-center"
                    >
                      <v-img
                        contain
                        width="30"
                        height="30"
                        :src="require('@/assets/MetaMask_Fox.svg')"
                        alt="logo-blanco"
                      >
                      </v-img>
                    </v-col>
                    <v-col cols="10" class="pa-0  ma-0"  v-if="winEvent">
                      
                      <ul>
                        <li>Id Number: {{ this.winEvent.numberId }}</li>
                        <li>Nro NFT registrado:{{ this.winEvent.naturalNumber }}</li>
                        <li>Hash number:{{ this.winEvent.hashNumber }}</li>
                        <li>Fecha Creacion:{{ this.winEvent.timeCreated }}</li>
                        <li>
                           <a :href=" urles + tx " target="blank"> Ver la transaccion en Etherscan </a>
                          
                          </li>
                      </ul> 
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
            <!-- NFT -->
            <v-row
              class=" justify-center pa-0 ma-0  "
              v-if="showNumNFT"
              style="width:100%; "
            >
              <v-col
                cols="12"
                md="11"
                lg="11"
                class=" text-left pa-0 mt-5 "
                v-for="(item, i) in tarjeta"
                :key="i"
              >
                <v-card
                  class="elevation-5"
                  color="#2d2d2d"
                  dark
                  style="border-radius:2px;"
                >
                  <v-card-text class="card__modal--subHeader ">
                    <v-row class="pa-0 ma-0 " style="width:100%;">
                      <v-col
                        cols="5"
                        md="5"
                        style="position:relative;"
                        class="justify-center text-center "
                      >
                        <v-img
                          :src="item.src"
                          alt="logo-blanco"
                          class="mr-0 elevation-4 "
                        >
                        </v-img>
                      </v-col>

                      <v-col cols="7" md="7" style="" class=" pa-0 ma-0">
                        <v-row>
                          <v-col cols="12" class="">
                            <span
                              v-if="!item.status"
                              class="status--card__disponible Disponible"
                              >Disponible</span
                            >
                            <span
                              v-if="item.status"
                              class="status--card__premiun Premiun"
                              >Premium</span
                            >
                            <v-list-item
                              three-line
                              class="ma-0 pa-0  "
                              style="width:100%; text-align:left;"
                            >
                              <v-list-item-content class="pa-2 ma-1 ">
                                <v-list-item-title class="text--card__search">
                                  Numero
                                </v-list-item-title>

                                <v-list-item-subtitle
                                  class="text--card__search white--text"
                                >
                                  {{ item.numero }}
                                </v-list-item-subtitle>
                                <div style="margin-top:10px;">
                                  <v-list-item-title
                                    class="text--card__search"
                                    style=""
                                  >
                                    Estado
                                  </v-list-item-title>

                                  <v-list-item-subtitle
                                    class="text--card__search  white--text"
                                  >
                                    Este número está disponible
                                  </v-list-item-subtitle>
                                </div>
                              </v-list-item-content>
                            </v-list-item>
                          </v-col>

                          <v-col cols="12" class="">
                            <v-list-item
                              three-line
                              class="ma-0 pa-0  "
                              style="width:100%; text-align:left;"
                            >
                              <v-list-item-content class="pa-2 ma-1 ">
                                <div style="margin-top:5px;">
                                  <v-list-item-title
                                    class="text--card__search"
                                    style=""
                                  >
                                    Preció:
                                  </v-list-item-title>

                                  <v-list-item-subtitle
                                    class="Precio--card__search  "
                                    style="color: #00bd32;"
                                  >
                                    {{ item.precio }}
                                  </v-list-item-subtitle>

                                  <v-btn
                                    color="#0e41ff"
                                    class="rounded-5 mt-1  pa-0 ma-0 btn--search white--text "
                                    @click="clickNumber( item.numero)"
                                    width="180"
                                    style="font-family: Roboto; color:white; font-weight: 500; font-size:14px; text-transform: unset !important; "
                                  >
                                    Obtener
                                  </v-btn>
                                </div>
                              </v-list-item-content>
                            </v-list-item>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          
            <!-- premium -->
            <v-row
              class=" justify-center pa-0 ma-0  "
              v-if="!showNumNFT"
              style="width:100%; "
            >
              <v-col
                cols="12"
                md="12"
                lg="12"
                class=" text-left pa-0 mt-5 "
            
              >
                <v-card
                  class="elevation-0"
                  color="transparent"
                  dark
                  style="border-radius:2px;"
                >
                  <v-card-text class="card__modal--subHeader ">
                    <v-row class="pa-0 ma-0 " style="width:100%;">
                      <v-col
                        cols="6"
                        md="6"
                        style="position:relative;"
                        class="justify-center text-center "
                            v-for="(item, i) in Cardpremiun"
                            :key="i"
                      >

                        <v-card
                  class="elevation-0 pa-4"
                  color="#2b2b2b"
                  dark
                  style="border-radius:2px;"
                >
                  
                        <v-img
                          :src="item.src"
                          alt="logo-blanco"
                          class="mr-0 elevation-4 "
                        >
                        </v-img>
                        <v-list-item
                          three-line
                          class="ma-0 pa-0  "
                          style="width:100%; text-align:left;"
                        >
                          <v-list-item-content class="pa-2 ma-1 ">
                            <div style="margin-top:5px;">
                              <v-list-item-title
                                class="text--card__search"
                                style=""
                              >
                                Preció:
                              </v-list-item-title>

                              <v-list-item-subtitle
                                class="Precio--card__search  "
                                style="color: #00bd32;"
                              >
                                {{ item.precio }}
                              </v-list-item-subtitle>
                            </div>
                          </v-list-item-content>
                        </v-list-item>
                        </v-card>
                        <v-btn
                          color="#0e41ff"
                          class="rounded-5 mt-10  pa-0 ma-0 btn--search white--text "
                          @click="activarModal()"
                          width="180"
                          style="font-family: Roboto; color:white; font-weight: 500; font-size:14px; text-transform: unset !important; "
                        >
                          Obtener
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <modal-app v-model="modalOn"></modal-app>
  </div>
</template>

<script>


export default {
  data() {
    return {
      urles: 'https://ropsten.etherscan.io/tx/',
      amount: null,
      pending: false,
      winEvent: null,
      modalOn: false,
      showNumNFT: false,
      tarjeta: [
        /*{
          status: false,
          numero: this.numero,
          precio: "0,0000015 NMBC",
          src: require("@/assets/img-nft-basic.png"),
        },
        {
          status: true,
          numero: this.numero,
          precio: "2000,00 NMBC",
          src: require("@/assets/group-8.png"),
        },*/
      ],
      Cardpremiun: [
        {
          status: false,
          numero: "115",
          precio: "0,0000015 NMBC",
          src: require("@/assets/img-nft-basic.png"),
        },
        {
          status: true,
          numero: "115",
          precio: "2000,00 NMBC",
          src: require("@/assets/group-8.png"),
        },
         {
          status: false,
          numero: "115",
          precio: "0,0000015 NMBC",
          src: require("@/assets/img-nft-basic.png"),
        },
        {
          status: true,
          numero: "115",
          precio: "2000,00 NMBC",
          src: require("@/assets/group-8.png"),
        },
      ],
    };
  },
  methods: {
    getNumber (event) {
      this.tarjeta = [],
      this.numero = event,
      this.showNumNFT = true,
      this.tarjeta.push({
          status: false,
          numero: event,
          precio: "0,0000015 NMBC",
          src: require("@/assets/img-nft-basic.png"),
      }
      )
      console.log(this.tarjeta)
    },
    clickNumber (event) {
      console.log(event, this.amount)
      this.winEvent = null
      this.pending = true
      this.$store.state.contractInstance().createRandomNumber(event, {
        gas: 300000,
        value: this.$store.state.web3.web3Instance().toWei(this.amount, 'ether'),
        from: this.$store.state.web3.coinbase
      }, (err, result) => {
        if (err) {
          console.log(err)
          this.pending = false
        } else {
          
          let nuevoNumero = this.$store.state.contractInstance().NewNumber()
           nuevoNumero.watch((err, event)  => {
            if (err) {
              console.log('could not get event Won()')
            } else {
              console.log('event new number ' ,event)
              //console.log('natural number', result.args.naturalNumber)
              this.winEvent = event.args
              this.tx = event.transactionHash
              this.pending = false
            }
          })
        }
      })
    },
    obtenerNumNFT() {
      if (!this.showNumNFT) {
        return (this.showNumNFT = true);
      } else {
        return (this.showNumNFT = false);
      }
    },
    obtenerNumPremium() {
      if (this.showNumNFT) {
        return (this.showNumNFT = false);
      } else {
        return (this.showNumNFT = true);
      }
    },
    activarModal() {
      if (!this.modalOn) {
        return (this.modalOn = true);
      } else {
        return (this.modalOn = false);
      }
    },
  },
  mounted () {
    console.log('dispatching getContractInstance')
    this.$store.dispatch('getContractInstance')
  }
};
</script>

<style lang="scss" scoped>
.El-nmero-que-busca {
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.32;
  letter-spacing: 0.32px;
  color: #333333;
}
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

.text--card__search {
  font-family: Roboto;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: 0.25px;
  color: #fff;
}
.Precio--card__search {
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.32px;
  color: #00bd32;
}

.status--card__disponible {
  position: absolute;
  right: 10px;
  width: 108px;
  height: 30px;
  margin: 0 0 48px 45px;
  padding: 5px 13px 5px 12px;
  background-color: #00bd32;
  text-align: center;
}

.status--card__premiun {
  position: absolute;
  right: 10px;
  width: 108px;
  height: 30px;
  margin: 0 0 48px 45px;
  padding: 5px 13px 5px 12px;
  background-color: #1a2468;
  text-align: center;
}

.Disponible .Premiun {
  font-family: Roboto;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.28px;
  color: #fff;
}
#loader {
  width:150px;
}
</style>
