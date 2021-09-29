import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

// header
import header from '@/components/header'
Vue.component("header-app", header);

// footer
import footer from '@/components/footer'
Vue.component("footer-app", footer);

// header sub - dashboard
import headerDashboard from '@/components/headerDashboard'
Vue.component("header-dashboard", headerDashboard);

// Section-uno
import sectionInicio from '@/components/SectionInicio'
Vue.component("section-inicio", sectionInicio);

// Section-dos
import sectionConocenos from '@/components/SectionConocenos'
Vue.component("section-conocenos", sectionConocenos);

// Section-tres
import sectionTres from '@/components/SectionTres'
Vue.component("sectionTres", sectionTres);

// Section-cuatro
import sectionCuatro from '@/components/SectionCuatro'
Vue.component("sectionCuatro", sectionCuatro);

// Section-cinco
import sectionTokenomic from '@/components/SectionTokenomic'
Vue.component("section-tokenomic", sectionTokenomic);

// Section-seis
import sectionRoadmap from '@/components/SectionRoadmap'
Vue.component("section-roadmap", sectionRoadmap);

// Section-seis
import sectionTeam from '@/components/SectionTeam'
Vue.component("section-team", sectionTeam);

// Section-seis
import sectionFaq from '@/components/SectionFaq'
Vue.component("section-faq", sectionFaq);

// modal-app
import modalApp from '@/components/modal'
Vue.component("modal-app", modalApp);

// searchBar-app
import searchBar from '@/components/searchBar'
Vue.component("search-bar", searchBar);


// slide Desktop
import slidedesktop from '@/components/slideDesktop'
Vue.component("slide-desktop", slidedesktop);

// slide Mobile
import slidemobile from '@/components/slideMobile'
Vue.component("slide-mobile", slidemobile);

new Vue({
  router,
  store,
    vuetify,
  created(){
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    })
  },
  render: h => h(App)
}).$mount('#app')
