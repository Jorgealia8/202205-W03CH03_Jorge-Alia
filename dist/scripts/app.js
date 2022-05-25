import { Film } from '../components/Pendientes.js';
function app() {
    new Film('.series-list');
}
(() => {
    document.addEventListener('DOMContentLoaded', app);
})();
