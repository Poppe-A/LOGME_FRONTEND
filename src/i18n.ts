import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';

// eslint-disable-next-line @typescript-eslint/no-floating-promises -- C'est la vie!
i18n
    // load translation using http -> see /public/locales
    .use(Backend)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: 'en',
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        // if you don't want to use Suspense
        // react: {
        //     wait: true,
        //     useSuspense: false,
        // },
    });

export default i18n;
