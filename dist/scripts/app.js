import { Film } from '../components/Noview.js';
import { View } from '../components/view.js';
function app() {
    new Film('.series-list');
    new View('.series-list--watched');
}
(() => {
    document.addEventListener('DOMContentLoaded', app);
})();
