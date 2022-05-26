import { Noview } from '../components/Noview.js';
import { View } from '../components/view.js';

function app() {
    new Noview('.series-list');
    new View('.series-list--watched');
}

(() => {
    document.addEventListener('DOMContentLoaded', app);
})();
