import { createI18n } from "vue-i18n";
import es from './language/es/messages.js'
import en from './language/en/messages.js'

const messages = {
    en:en,
    es:es
}

const i18n = createI18n({
    legacy:false,
    locale:'en',
    messages
})

export default i18n;