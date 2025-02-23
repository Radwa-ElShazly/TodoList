import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

const app = createApp(App)
app.use(router);
app.mount('#app');

