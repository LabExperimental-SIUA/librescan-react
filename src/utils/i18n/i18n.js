import i18n from 'i18next';
import LocizeBackend from 'i18next-locize-backend';
import LocizeEditor from 'locize-editor';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';
import whichBackend from './whichBackend';
import * as locales from './locales';

function parseLocales() {
    let locizeLocales = {};
    Object.keys(locales).forEach(key => {
        console.log(key);
        locizeLocales[key] = {
            translations: locales[key]
        }
    });
    return locizeLocales;
}

let options = {
        fallbackLng: 'en',
        appendNamespaceToCIMode: true,
        saveMissing: true,

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        debug: true,
        keySeparator: '### not used ###', // we use content as keys

        backend: {
            apiKey: "e0a3d161-f501-4279-8381-01d3b4cb45d5",
            projectId: "1342867b-166e-48ec-bda2-11285637dde6",
            referenceLng: 'en'
        },

        //resources: parseLocales(),

        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ',',
            format: function (value, format, lng) {
                if (format === 'uppercase') return value.toUpperCase();
                return value;
            }
        },

        react: {
            wait: true
        }
    };

if (whichBackend() === 'memory') {
    options.resources = parseLocales()
}

i18n
    .use(LocizeBackend)
    .use(LocizeEditor)
    .use(LanguageDetector)
    .use(reactI18nextModule)
    .init(options);

export default i18n;