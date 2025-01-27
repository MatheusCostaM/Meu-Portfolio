import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PTBR from "./locale/pt/pt-br.json";
import ENUS from "./locale/en/en-us.json";

i18n
    .use(initReactI18next)
    .init({
        lng: "pt",
        fallbacklng: "pt",
        resources: {
            pt: {
                translation: PTBR,
            },
            en: {
                translation: ENUS,
            }

        },
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n;