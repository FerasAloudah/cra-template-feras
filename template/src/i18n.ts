import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import { __DEV__ } from './constants';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    debug: __DEV__,
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: true,
    },
  });
