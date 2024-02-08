import { createApp } from 'vue'
import 'material-symbols';
import './style.css'
import App from './App.vue'

//XYZ ANIMATIONS
import VueAnimXyz from "@animxyz/vue3";
import "@animxyz/core";
const app = createApp(App);
app.use(VueAnimXyz);

app.mount("#app");
