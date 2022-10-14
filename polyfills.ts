import {shouldPolyfill as shouldPolyfillGetCanonicalLocales} from '@formatjs/intl-getcanonicallocales/should-polyfill'
import {shouldPolyfill as shouldPolyfillPluralRules} from '@formatjs/intl-pluralrules/should-polyfill'
import {shouldPolyfill as shouldPolyfillNumberFormat} from '@formatjs/intl-numberformat/should-polyfill'
import {shouldPolyfill as shouldPolyfillDateTimeFormat} from '@formatjs/intl-datetimeformat/should-polyfill'
import {shouldPolyfill as shouldPolyfillRelativeTimeFormat} from '@formatjs/intl-relativetimeformat/should-polyfill'

/**
 * Dynamically polyfill Intl API & its locale data
 * @param locale locale to polyfill
 */
export async function polyfill(locale: string = '') {
  const dataPolyfills = []
  // Polyfill Intl.getCanonicalLocales if necessary
  if (shouldPolyfillGetCanonicalLocales()) {
    await import(
      /* webpackChunkName: "intl-getcanonicallocales" */ '@formatjs/intl-getcanonicallocales/polyfill'
    )
  }

  // Polyfill Intl.PluralRules if necessary
  if (shouldPolyfillPluralRules()) {
    await import(
      /* webpackChunkName: "intl-pluralrules" */ '@formatjs/intl-pluralrules/polyfill'
    )
  }

  if ((Intl.PluralRules as any).polyfilled) {
    const lang = locale.split('-')[0]
    switch (lang) {
      default:
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-pluralrules" */ '@formatjs/intl-pluralrules/locale-data/de'
          )
        )
        break
      case 'en':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-pluralrules" */ '@formatjs/intl-pluralrules/locale-data/en'
          )
        )
        break
      case 'fr':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-pluralrules" */ '@formatjs/intl-pluralrules/locale-data/fr'
          )
        )
        break
      case 'es':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-pluralrules" */ '@formatjs/intl-pluralrules/locale-data/es'
          )
        )
        break
      case 'hr':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-pluralrules" */ '@formatjs/intl-pluralrules/locale-data/hr'
          )
        )
        break
      case 'it':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-pluralrules" */ '@formatjs/intl-pluralrules/locale-data/it'
          )
        )
        break
      case 'nl':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-pluralrules" */ '@formatjs/intl-pluralrules/locale-data/nl'
          )
        )
        break
      case 'pl':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-pluralrules" */ '@formatjs/intl-pluralrules/locale-data/pl'
          )
        )
        break
      case 'pt':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-pluralrules" */ '@formatjs/intl-pluralrules/locale-data/pt'
          )
        )
        break
      case 'ro':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-pluralrules" */ '@formatjs/intl-pluralrules/locale-data/ro'
          )
        )
        break
      case 'se':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-pluralrules" */ '@formatjs/intl-pluralrules/locale-data/sv'
          )
        )
        break
      case 'dk':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-pluralrules" */ '@formatjs/intl-pluralrules/locale-data/da'
          )
        )
        break
      case 'gr':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-pluralrules" */ '@formatjs/intl-pluralrules/locale-data/el'
          )
        )
        break
    }
  }

  // Polyfill Intl.NumberFormat if necessary
  if (shouldPolyfillNumberFormat()) {
    await import(
      /* webpackChunkName: "intl-numberformat" */ '@formatjs/intl-numberformat/polyfill'
    )
  }

  if (shouldPolyfillNumberFormat() && (Intl.NumberFormat as any).polyfilled) {
    switch (locale) {
      default:
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-numberformat" */ '@formatjs/intl-numberformat/locale-data/de'
          )
        )
        break
      case 'en':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-numberformat" */ '@formatjs/intl-numberformat/locale-data/en'
          )
        )
        break
      case 'fr':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-numberformat" */ '@formatjs/intl-numberformat/locale-data/fr'
          )
        )
        break
      case 'es':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-numberformat" */ '@formatjs/intl-numberformat/locale-data/es'
          )
        )
        break
      case 'hr':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-numberformat" */ '@formatjs/intl-numberformat/locale-data/hr'
          )
        )
        break
      case 'it':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-numberformat" */ '@formatjs/intl-numberformat/locale-data/it'
          )
        )
        break
      case 'nl':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-numberformat" */ '@formatjs/intl-numberformat/locale-data/nl'
          )
        )
        break
      case 'pl':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-numberformat" */ '@formatjs/intl-numberformat/locale-data/pl'
          )
        )
        break
      case 'pt':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-numberformat" */ '@formatjs/intl-numberformat/locale-data/pt'
          )
        )
        break
      case 'ro':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-numberformat" */ '@formatjs/intl-numberformat/locale-data/ro'
          )
        )
        break
      case 'se':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-numberformat" */ '@formatjs/intl-numberformat/locale-data/sv'
          )
        )
        break
      case 'dk':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-numberformat" */ '@formatjs/intl-numberformat/locale-data/da'
          )
        )
        break
      case 'gr':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-numberformat" */ '@formatjs/intl-numberformat/locale-data/el'
          )
        )
        break
    }
  }

  // Polyfill Intl.DateTimeFormat if necessary
  if (shouldPolyfillDateTimeFormat()) {
    await import(
      /* webpackChunkName: "intl-datetimeformat" */ '@formatjs/intl-datetimeformat/polyfill'
    )
  }

  if ((Intl.DateTimeFormat as any).polyfilled) {
    dataPolyfills.push(import('@formatjs/intl-datetimeformat/add-all-tz'))
    switch (locale) {
      default:
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-datetimeformat" */ '@formatjs/intl-datetimeformat/locale-data/de'
          )
        )
        break
      case 'en':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-datetimeformat" */ '@formatjs/intl-datetimeformat/locale-data/en'
          )
        )
        break
      case 'fr':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-datetimeformat" */ '@formatjs/intl-datetimeformat/locale-data/fr'
          )
        )
        break
      case 'es':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-datetimeformat" */ '@formatjs/intl-datetimeformat/locale-data/es'
          )
        )
        break
      case 'hr':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-datetimeformat" */ '@formatjs/intl-datetimeformat/locale-data/hr'
          )
        )
        break
      case 'it':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-datetimeformat" */ '@formatjs/intl-datetimeformat/locale-data/it'
          )
        )
        break
      case 'nl':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-datetimeformat" */ '@formatjs/intl-datetimeformat/locale-data/nl'
          )
        )
        break
      case 'pl':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-datetimeformat" */ '@formatjs/intl-datetimeformat/locale-data/pl'
          )
        )
        break
      case 'pt':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-datetimeformat" */ '@formatjs/intl-datetimeformat/locale-data/pt'
          )
        )
        break
      case 'ro':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-datetimeformat" */ '@formatjs/intl-datetimeformat/locale-data/ro'
          )
        )
        break
      case 'se':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-datetimeformat" */ '@formatjs/intl-datetimeformat/locale-data/sv'
          )
        )
        break
      case 'dk':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-datetimeformat" */ '@formatjs/intl-datetimeformat/locale-data/da'
          )
        )
        break
      case 'gr':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-datetimeformat" */ '@formatjs/intl-datetimeformat/locale-data/el'
          )
        )
        break
    }
  }

  // Polyfill Intl.RelativeTimeFormat if necessary
  if (shouldPolyfillRelativeTimeFormat()) {
    await import(
      /* webpackChunkName: "intl-relativetimeformat" */ '@formatjs/intl-relativetimeformat/polyfill'
    )
  }

  if ((Intl as any).RelativeTimeFormat.polyfilled) {
    switch (locale) {
      default:
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-relativetimeformat" */ '@formatjs/intl-relativetimeformat/locale-data/de'
          )
        )
        break
      case 'en':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-relativetimeformat" */ '@formatjs/intl-relativetimeformat/locale-data/en'
          )
        )
        break
      case 'fr':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-relativetimeformat" */ '@formatjs/intl-relativetimeformat/locale-data/fr'
          )
        )
        break
      case 'es':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-relativetimeformat" */ '@formatjs/intl-relativetimeformat/locale-data/es'
          )
        )
        break
      case 'hr':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-relativetimeformat" */ '@formatjs/intl-relativetimeformat/locale-data/hr'
          )
        )
        break
      case 'it':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-relativetimeformat" */ '@formatjs/intl-relativetimeformat/locale-data/it'
          )
        )
        break
      case 'nl':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-relativetimeformat" */ '@formatjs/intl-relativetimeformat/locale-data/nl'
          )
        )
        break
      case 'pl':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-relativetimeformat" */ '@formatjs/intl-relativetimeformat/locale-data/pl'
          )
        )
        break
      case 'pt':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-relativetimeformat" */ '@formatjs/intl-relativetimeformat/locale-data/pt'
          )
        )
        break
      case 'ro':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-relativetimeformat" */ '@formatjs/intl-relativetimeformat/locale-data/ro'
          )
        )
        break
      case 'se':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-relativetimeformat" */ '@formatjs/intl-relativetimeformat/locale-data/sv'
          )
        )
        break
      case 'dk':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-relativetimeformat" */ '@formatjs/intl-relativetimeformat/locale-data/da'
          )
        )
        break
      case 'gr':
        dataPolyfills.push(
          import(
            /* webpackChunkName: "intl-relativetimeformat" */ '@formatjs/intl-relativetimeformat/locale-data/el'
          )
        )
        break
    }
  }

  await Promise.all(dataPolyfills)
}
