import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initScroll} from './modules/scroll';
import {initAccordion} from './modules/accordion';
import {initPhoneMask} from './modules/phone-mask';
import {initFormValidity} from './modules/form';
import {initModals} from './modules/init-modals';
import {initFormModalValidity} from './modules/form-modal';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initAccordion();
initPhoneMask();
initFormValidity();
initScroll();
initModals();
initFormModalValidity();
