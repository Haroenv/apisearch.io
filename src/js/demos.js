import integrationsUI from "./demos/integrationDemo";
import homeUI from "./demos/homeDemo";
import mainDemo from "./demos/mainDemo";
import filtersDemo from "./demos/filtersDemo";

/**
 * Demos
 */
const initDemos = () => {
    /**
     * Home
     */
    if (document.querySelector('.as-homeDemo')) {
        window.setTimeout(() => homeUI.init(), 300);
    }
    if (document.querySelector('.as-integrationDemo')) {
        window.setTimeout(() => integrationsUI.init(), 500);
    }

    /**
     * Product
     */
    if (document.querySelector('.as-mainDemo')) {
        window.setTimeout(() => mainDemo.init());
    }
    if (document.querySelector('.as-filtersDemo')) {
        window.setTimeout(() => filtersDemo.init(), 500);
    }
};

export default initDemos;
