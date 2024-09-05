import { createApp } from 'vue';
import errorLog from './plugins/error-log/index.js';

// import './style.css'
import App from './App.vue';

const app = createApp(App);
app.use(errorLog);
app.mount('#app');
