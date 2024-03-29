import {DefaultSeo} from 'next-seo';
import App from 'next/app';
import * as React from 'react';
import {IntlProvider} from 'react-intl';

import {polyfill} from '../polyfills';

import '../styles/globals.css';
import '../styles/styles.css';

function MyApp({
    Component,
    pageProps,
    locale = process.env.NEXT_PUBLIC_LOCALE,
    messages,
}) {
    if (locale == 'gr') {
        locale = 'el';
    }
    if (locale == 'dk') {
        locale = 'da';
    }
    if (locale == 'se') {
        locale = 'sv';
    }
    return (
        <IntlProvider locale={locale} defaultLocale="de" messages={messages}>
            <DefaultSeo />
            <Component {...pageProps} />
        </IntlProvider>
    );
}

/**
 * Get the messages and also do locale negotiation. A multi-lingual user
 * can specify locale prefs like ['ja', 'en-GB', 'en'] which is interpreted as
 * Japanese, then British English, then English
 * @param locales list of requested locales
 * @returns {[string, Promise]} A tuple containing the negotiated locale
 * and the promise of fetching the translated messages
 */
function getMessages(locales: string | string[] = ['de']) {
    if (!Array.isArray(locales)) {
        locales = [locales];
    }
    let langBundle: any;
    let locale: any;
    for (let i = 0; i < locales.length && !locale; i++) {
        locale = locales[i];
        switch (locale) {
            case 'de':
                langBundle = import('../compiled-lang/de.json');
                break;
            case 'en':
                langBundle = import('../compiled-lang/en.json');
                break;
            case 'es':
                langBundle = import('../compiled-lang/es.json');
                break;
            case 'fr':
                langBundle = import('../compiled-lang/fr.json');
                break;
            case 'dk':
                langBundle = import('../compiled-lang/dk.json');
                break;
            case 'gr':
                langBundle = import('../compiled-lang/gr.json');
                break;
            case 'hr':
                langBundle = import('../compiled-lang/hr.json');
                break;
            case 'it':
                langBundle = import('../compiled-lang/it.json');
                break;
            case 'nl':
                langBundle = import('../compiled-lang/nl.json');
                break;
            case 'pl':
                langBundle = import('../compiled-lang/pt.json');
                break;
            case 'pt':
                langBundle = import('../compiled-lang/pt.json');
                break;
            case 'ro':
                langBundle = import('../compiled-lang/ro.json');
                break;
            case 'se':
                langBundle = import('../compiled-lang/se.json');
                break;
            default:
                break;
        }
    }
    if (!langBundle) {
        return ['de', import('../compiled-lang/de.json')];
    }
    return [locale, langBundle];
}

const getInitialProps: typeof App.getInitialProps = async appContext => {
    const locale = appContext.router.locale || process.env.NEXT_PUBLIC_LOCALE;
    const [supportedLocale, messagePromise] = getMessages(locale);

    const [, messages, appProps] = await Promise.all([
        polyfill(supportedLocale),
        messagePromise,
        App.getInitialProps(appContext),
    ]);

    return {
        ...(appProps as any),
        locale: supportedLocale,
        messages: messages.default,
    };
};

MyApp.getInitialProps = getInitialProps;

export default MyApp;
