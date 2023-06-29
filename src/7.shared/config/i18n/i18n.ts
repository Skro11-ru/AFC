import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		lng: 'ru',
		fallbackLng: 'ru',
		debug: __IS_DEV__,

		interpolation: {
			escapeValue: false,
		},
	});
// eslint-disable-next-line unicorn/prefer-export-from
export default i18n;
