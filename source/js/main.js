import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

// import {scrollMenu} from './modules/scroll';
import {initAccordion} from './modules/accordion';
import {initPhoneMask} from './modules/phone-mask';
import {formValidity} from './modules/form';
// import {initModals} from './modules/init-modals';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initAccordion();
initPhoneMask();
formValidity();
// scrollMenu();
