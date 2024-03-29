import * as React from 'react';
import {FormattedMessage, useIntl, defineMessages} from 'react-intl';
import Link from 'next/link';

import Layout from '../components/Layout';

export default function Home() {
    const intl = useIntl();

    function h1() {
        const messages = defineMessages({
            greeting: {
                defaultMessage:
                    'Das <span>smarte</span> Bestellsystem für Restaurants & Lieferdienste',
            },
        });
        return intl.formatMessage(messages.greeting, {
            span: str => <span className="text-delivery">{str}</span>,
        });
    }

    function getUrl() {
        return process.env.NEXT_PUBLIC_LOCALE == 'en'
            ? 'https://www.delivery.plus/'
            : `https://${process.env.NEXT_PUBLIC_LOCALE}.delivery.plus`;
    }

    return (
        <Layout
            title={intl.formatMessage({
                defaultMessage:
                    'Delivery+ | Bestellsystem für Restaurants & Lieferdienste',
            })}
            description={intl.formatMessage({
                defaultMessage:
                    'Smartes Bestellsystem für Ihr Lieferdienst oder Restaurant selber erstellen ✓ Online-Zahlung ✓ Homepage ✓ Günstig ✓ mit Online-Shop.',
            })}
            noindex={false}
            nofollow={false}
            openGraph={{
                url: getUrl(),
                type: 'website',
                locale: process.env.NEXT_PUBLIC_LOCALE,
                site_name: intl.formatMessage({
                    defaultMessage:
                        'Delivery+ | Bestellsystem für Restaurants & Lieferdienste',
                }),
                images: {
                    url: getUrl() + 'og-delivery.jpg',
                    width: '640',
                    height: '610',
                    alt: intl.formatMessage({
                        defaultMessage: 'Lieferung App',
                    }),
                    type: 'image/jpeg',
                },
            }}
        >
            <section className="max-w-7xl mx-auto px-4 w-full flex md:flex-row flex-col items-center md:py-32 py-16">
                <div className="us:w-screen">
                    <h1 className="font-mono lg:text-6xl text-4xl us:text-3xl font-extrabold text-center md:text-left py-6 mobile:break-words">
                        {h1()}
                    </h1>
                    <p className="text-center md:text-left md:text-xl text-lg">
                        <FormattedMessage defaultMessage="14 Tage unverbindlich testen, erstelle deinen eigenen Shop." />
                    </p>
                    <div className="flex mt-8">
                        {/* <a */}
                        {/*   href='https://dashboard.delivery.plus/register' */}
                        {/*   className='mobile:ml-auto py-2 px-4 uppercase rounded-lg bg-delivery border-2 border-transparent text-white mr-4 hover:bg-delivery' */}
                        {/* > */}
                        {/*   <FormattedMessage defaultMessage='REGISTRIEREN' /> */}
                        {/* </a> */}
                        <a
                            href={
                                'https://preview.delivery.plus?lang=' +
                                process.env.NEXT_PUBLIC_LOCALE
                            }
                            target="_blank"
                            className="mobile:mr-auto mobile:mx-auto py-2 px-4 uppercase rounded-lg bg-transparent border-2 border-delivery text-delivery hover:bg-delivery hover:text-white"
                        >
                            <FormattedMessage defaultMessage="DEMOSHOP" />
                        </a>
                    </div>
                </div>
                <div className="w-full">
                    <picture>
                        <source srcSet="order-system.webp" type="image/webp" />
                        <source srcSet="/order-system.png" type="image/jpeg" />
                        <img
                            src="/order-system.png"
                            className="pt-6 md:pt-1 mx-auto"
                            height="273px"
                            width="500px"
                            alt={intl.formatMessage({
                                defaultMessage:
                                    'Restaurant Shop System auf allen Endgeräten',
                            })}
                        />
                    </picture>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 w-full text-center md:text-lg text-base">
                <h2 className="font-extrabold md:text-5xl text-4xl text-center py-12 border-t font-mono">
                    <FormattedMessage defaultMessage="Funktionen" />
                </h2>
                <div className="flex md:flex-row flex-col md:space-x-24 md:py-6 justify-center">
                    <div className="flex-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 m-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p className="p-2 font-extrabold font-mono uppercase">
                            <FormattedMessage defaultMessage="ÖFFNUNGSZEITEN" />
                        </p>
                        <p className="mobile:pb-8 mobile:w-4/5 m-auto">
                            <FormattedMessage defaultMessage="Legen Sie selbst fest, wann Sie geöffnet haben, flexibel mit Pausezeiten einstellbar." />
                        </p>
                    </div>
                    <div className="flex-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 m-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        <p className="p-2 font-extrabold font-mono uppercase">
                            <FormattedMessage defaultMessage="HOMEPAGE" />
                        </p>
                        <p className="mobile:pb-8 mobile:w-4/5 m-auto">
                            <FormattedMessage defaultMessage="Auf Wunsch bekommen Sie gratis eine Homepage zum Shop dazu. Legen Sie Bilder und Design selbst fest." />
                        </p>
                    </div>
                    <div className="flex-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 m-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                        </svg>
                        <p className="p-2 font-extrabold font-mono uppercase">
                            <FormattedMessage defaultMessage="KEIN APP DOWNLOAD" />
                        </p>
                        <p className="mobile:pb-8 mobile:w-4/5 m-auto">
                            <FormattedMessage defaultMessage="Dein Shop ist auf jedem Endgerät über den Browser verfügbar." />
                        </p>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col md:space-x-24 md:py-12 md:text-lg text-base">
                    <div className="flex-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 m-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                        </svg>
                        <p className="p-2 font-extrabold font-mono uppercase">
                            <FormattedMessage defaultMessage="PROVISIONSFREI" />
                        </p>
                        <p className="mobile:pb-8 mobile:w-4/5 m-auto">
                            <FormattedMessage defaultMessage="Empfange Zahlungen provisionsfrei auf dein eigenes Konto." />
                        </p>
                    </div>
                    <div className="flex-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 m-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p className="p-2 font-extrabold font-mono uppercase">
                            <FormattedMessage defaultMessage="FLEXIBILITÄT" />
                        </p>
                        <p className="mobile:pb-8 mobile:w-4/5 m-auto">
                            <FormattedMessage defaultMessage="Über unsere zugängliche Web-Oberfläche kannst Du Dein Angebot in Echtzeit selbst aktualisieren." />
                        </p>
                    </div>
                    <div className="flex-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 m-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            />
                        </svg>
                        <p className="p-2 font-extrabold font-mono uppercase">
                            <FormattedMessage defaultMessage="ZAHLUNGSMETHODEN" />
                        </p>
                        <p className="mobile:pb-8 mobile:w-4/5 m-auto">
                            <FormattedMessage defaultMessage="Wähle aus verschiedenen Zahlungsmethoden wie PayPal." />
                        </p>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 w-full text-center border-t">
                <h3 className="font-extrabold md:text-5xl text-4xl text-center py-12 font-mono">
                    <FormattedMessage defaultMessage="So einfach geht's" />
                </h3>
                <div className="flex flex-wrap-reverse items-center px-4">
                    <div className="text-center w-full md:w-1/2 md:px-6">
                        <div className="text-center xl:w-3/4 md:w-2/3 md:ml-auto md:mx-0 mx-auto">
                            <h3 className="text-xl font-extrabold mb-4 font-mono">
                                <FormattedMessage defaultMessage="Kostenlos registrieren" />
                            </h3>
                            <p className="sm:text-lg text-base leading-normal">
                                <FormattedMessage defaultMessage="Einfach mit deinen Restaurant Daten registrieren und das Bestellsystem 14 Tage unverbindlich testen." />
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pr-6 lg:pl-12 mb-6 md:mb-0">
                        <div className="xl:w-3/4 md:w-full w-2/3 md:mr-auto md:mx-0 mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10/12 h-full"
                                viewBox="0 0 883.70798 724.22538"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <path
                                    d="M815.4375,655.50781H541.437a16.519,16.519,0,0,1-16.5-16.5V442.00732a16.51868,16.51868,0,0,1,16.5-16.5H815.4375a16.519,16.519,0,0,1,16.5,16.5V639.00781A16.51929,16.51929,0,0,1,815.4375,655.50781Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#e6e6e6"
                                />
                                <path
                                    d="M546.50182,642.35455h263.8706a8,8,0,0,0,8-8V446.66021a8,8,0,0,0-8-8H546.50182a8,8,0,0,0-8,8V634.35455A8,8,0,0,0,546.50182,642.35455Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#fff"
                                />
                                <path
                                    d="M448.396,391.03223h-274a16.51867,16.51867,0,0,1-16.5-16.5v-197a16.51866,16.51866,0,0,1,16.5-16.5h274a16.51867,16.51867,0,0,1,16.5,16.5v197A16.51868,16.51868,0,0,1,448.396,391.03223Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#e6e6e6"
                                />
                                <path
                                    d="M179.46072,377.87933H443.33133a8,8,0,0,0,8-8V182.185a8,8,0,0,0-8-8H179.46072a8,8,0,0,0-8,8V369.87933A8,8,0,0,0,179.46072,377.87933Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#fff"
                                />
                                <path
                                    d="M778.91936,496.98053H610.36852a6.01968,6.01968,0,1,0,0,12.03936H778.91936a6.01968,6.01968,0,0,0,0-12.03936Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#e6e6e6"
                                />
                                <path
                                    d="M610.36852,534.02466a6.01968,6.01968,0,1,0,0,12.03936H778.91936a6.01968,6.01968,0,0,0,0-12.03936Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#e6e6e6"
                                />
                                <path
                                    d="M610.36852,571.06885a6.01968,6.01968,0,1,0,0,12.03936H778.91936a6.01968,6.01968,0,0,0,0-12.03936Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#e6e6e6"
                                />
                                <circle
                                    cx="420.52193"
                                    cy="415.57596"
                                    r="7.40884"
                                    fill="#4338CA"
                                />
                                <circle
                                    cx="420.52193"
                                    cy="452.62009"
                                    r="7.40884"
                                    fill="#e6e6e6"
                                />
                                <circle
                                    cx="420.52193"
                                    cy="489.66422"
                                    r="7.40884"
                                    fill="#e6e6e6"
                                />
                                <path
                                    d="M711.77684,503.00018h0a6.01961,6.01961,0,0,1-6.01965,6.01965H610.58538a6.167,6.167,0,0,1-6.18439-5.21972,6.03031,6.03031,0,0,1,5.96753-6.81964h95.38867a6.01966,6.01966,0,0,1,6.01965,6.01965Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#4338CA"
                                />
                                <circle
                                    cx="520.54113"
                                    cy="288.23669"
                                    r="24.07867"
                                    fill="#e6e6e6"
                                />
                                <circle
                                    cx="678.43713"
                                    cy="376.12401"
                                    r="12.03934"
                                    transform="translate(40.60032 897.66513) rotate(-80.78253)"
                                    fill="#fff"
                                />
                                <path
                                    d="M198.9668,270.31231a5.96564,5.96564,0,1,0,0,11.93128H423.82524a5.96564,5.96564,0,1,0,0-11.93128Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#e6e6e6"
                                />
                                <path
                                    d="M198.9668,307.02389a5.96564,5.96564,0,1,0,0,11.93128H423.82524a5.96564,5.96564,0,0,0,0-11.93128Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#e6e6e6"
                                />
                                <path
                                    d="M299.46477,345.57107a5.96564,5.96564,0,0,0,0,11.93128h23.86249a5.96564,5.96564,0,0,0,0-11.93128Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M279.42037,194.562a1.83739,1.83739,0,0,0-1.83557,1.83557v46.59619a1.83739,1.83739,0,0,0,1.83557,1.83557h63.95129a1.83739,1.83739,0,0,0,1.83557-1.83557V196.39755a1.83739,1.83739,0,0,0-1.83557-1.83557Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#4338CA"
                                />
                                <circle
                                    cx="153.50003"
                                    cy="126.65496"
                                    r="10.09569"
                                    fill="#fff"
                                />
                                <path
                                    d="M327.91625,240.24038a10.01783,10.01783,0,0,1-1.10135,4.589H295.97716a10.09444,10.09444,0,0,1,8.99432-14.68463h12.84906A10.09,10.09,0,0,1,327.91625,240.229Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#fff"
                                />
                                <circle
                                    cx="153.50003"
                                    cy="126.65496"
                                    r="10.09569"
                                    fill="#fff"
                                />
                                <path
                                    d="M327.91625,240.24038a10.01783,10.01783,0,0,1-1.10135,4.589H295.97716a10.09444,10.09444,0,0,1,8.99432-14.68463h12.84906A10.09,10.09,0,0,1,327.91625,240.229Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#fff"
                                />
                                <circle
                                    cx="153.50003"
                                    cy="23.86253"
                                    r="23.86253"
                                    fill="#e6e6e6"
                                />
                                <circle
                                    cx="153.50003"
                                    cy="23.86253"
                                    r="11.93126"
                                    fill="#4338CA"
                                />
                                <polygon
                                    points="748.119 711.24 736.687 711.239 731.25 667.143 748.123 667.145 748.119 711.24"
                                    fill="#ffb8b8"
                                />
                                <path
                                    d="M728.52095,707.97276h22.04782a0,0,0,0,1,0,0v13.88195a0,0,0,0,1,0,0H714.639a0,0,0,0,1,0,0v0A13.88193,13.88193,0,0,1,728.52095,707.97276Z"
                                    fill="#2f2e41"
                                />
                                <polygon
                                    points="809.741 711.24 798.308 711.239 792.872 667.143 809.745 667.145 809.741 711.24"
                                    fill="#ffb8b8"
                                />
                                <path
                                    d="M790.14219,707.97276H812.19a0,0,0,0,1,0,0v13.88195a0,0,0,0,1,0,0H776.26026a0,0,0,0,1,0,0v0A13.88193,13.88193,0,0,1,790.14219,707.97276Z"
                                    fill="#2f2e41"
                                />
                                <circle
                                    cx="776.25964"
                                    cy="373.20424"
                                    r="24.56103"
                                    fill="#ffb8b8"
                                />
                                <path
                                    d="M850.17313,621.26961a9.377,9.377,0,0,1,12.09227-7.77928l13.72625-16.45445,12.03377,5.9026-19.71048,22.96461a9.42779,9.42779,0,0,1-18.14181-4.63348Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#ffb8b8"
                                />
                                <path
                                    d="M968.30684,637.91125a9.37694,9.37694,0,0,1,6.03109-13.05243l2.75577-21.25,13.322-1.47493-4.31317,29.95453a9.42778,9.42778,0,0,1-17.79574,5.82288Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#ffb8b8"
                                />
                                <path
                                    d="M954.68163,507.48222l0,0a12.08366,12.08366,0,0,1,20.75013,2.93029l20.13136,50.24026a31.21152,31.21152,0,0,1,1.90082,16.1937l-6.5574,44.15842a4,4,0,0,1-5.13083,3.23622l-8.63923-2.653a4,4,0,0,1-2.79855-4.28974l0,0a145.305,145.305,0,0,0-11.66387-76.2314l-9.49042-21.22808A12.08366,12.08366,0,0,1,954.68163,507.48222Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M940.13582,485.65159a26.205,26.205,0,1,0-4.91018-51.82531c-5.40118-3.27952-11.6809-5.48627-17.97478-4.925s-12.51835,4.29789-14.87192,10.16208.17487,13.59411,6.02708,15.97731c3.75184,1.52786,7.98866.78691,11.99255.1708s8.37171-1.01818,11.85635,1.04773,5.05106,7.60548,1.93025,10.18835a10.73849,10.73849,0,0,0-3.0842,11.82028C932.66943,482.32412,936.95033,485.58277,940.13582,485.65159Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M970.60872,620.29851l4.35677,165.33965a4,4,0,0,1-4.20243,4.10017l-14.35213-.73225a4,4,0,0,1-3.74658-3.36683L935.59326,678.25019a2,2,0,0,0-3.92705-.12223l-23.10757,103.3966a4,4,0,0,1-5.24374,2.89644l-14.24375-.87a4,4,0,0,1-2.64985-4.05305l12.434-160.76415Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M977.60063,541.76779c2.403-25.05536-16.01923-47.71792-41.12634-49.5007-10.81772-.76813-27.61219-1.04272-33.14841,13.13649-16.6774,42.71374,12.51774,41.67582,2.45885,78.68291s-18.94295,39.128-5.14122,41.8003,75.86672,18.447,73.31817-7.60005C972.39515,602.27619,975.20367,566.76061,977.60063,541.76779Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M906.27914,501.059l0,0a12.08365,12.08365,0,0,1,16.29393,13.17809l-7.8391,48.991a47.876,47.876,0,0,1-10.26518,22.80676L879.00934,617.059a4,4,0,0,1-6.06459.13914l-6.04745-6.71587a4,4,0,0,1-.196-5.11814l1.7811-2.31141a134.70322,134.70322,0,0,0,27.04466-66.179l3.11643-25.98472A12.08364,12.08364,0,0,1,906.27914,501.059Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M1040.604,812.11269h-258a1,1,0,0,1,0-2h258a1,1,0,0,1,0,2Z"
                                    transform="translate(-157.896 -87.88731)"
                                    fill="#ccc"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="text-center hidden md:flex justify-center">
                    <svg
                        width="494"
                        height="194"
                        viewBox="0 0 494 194"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M489.646 193.354C489.842 193.549 490.158 193.549 490.354 193.354L493.536 190.172C493.731 189.976 493.731 189.66 493.536 189.464C493.34 189.269 493.024 189.269 492.828 189.464L490 192.293L487.172 189.464C486.976 189.269 486.66 189.269 486.464 189.464C486.269 189.66 486.269 189.976 486.464 190.172L489.646 193.354ZM0.5 0V2.13362H1.5V0H0.5ZM0.5 6.40085V10.6681H1.5V6.40085H0.5ZM0.5 14.9353V19.2025H1.5V14.9353H0.5ZM0.5 23.4698V27.737H1.5V23.4698H0.5ZM0.5 32.0042V36.2715H1.5V32.0042H0.5ZM0.5 40.5387V44.8059H1.5V40.5387H0.5ZM0.5 49.0732V53.3404H1.5V49.0732H0.5ZM0.5 57.6076V59.7412H1.5V57.6076H0.5ZM0.5 59.7412C0.5 60.4076 0.516099 61.0703 0.547933 61.7289L1.54677 61.6806C1.51571 61.0381 1.5 60.3915 1.5 59.7412H0.5ZM0.933197 65.6854C1.12761 67.0071 1.38587 68.3081 1.70476 69.5851L2.67497 69.3428C2.36401 68.0976 2.11216 66.8289 1.92255 65.5399L0.933197 65.6854ZM2.8574 73.3895C3.30605 74.6432 3.81476 75.8683 4.38003 77.0614L5.28373 76.6333C4.73248 75.4698 4.23642 74.2751 3.79892 73.0526L2.8574 73.3895ZM6.25676 80.5654C6.94066 81.704 7.67893 82.8062 8.46796 83.8684L9.27071 83.2721C8.50108 82.236 7.78102 81.161 7.11401 80.0505L6.25676 80.5654ZM10.9912 86.9395C11.8817 87.9215 12.8198 88.8595 13.8017 89.7501L14.4735 89.0093C13.5157 88.1406 12.6006 87.2256 11.7319 86.2677L10.9912 86.9395ZM16.8728 92.2733C17.935 93.0623 19.0372 93.8006 20.1758 94.4845L20.6907 93.6272C19.5802 92.9602 18.5052 92.2402 17.4692 91.4705L16.8728 92.2733ZM23.6798 96.3612C24.8729 96.9265 26.098 97.4352 27.3517 97.8839L27.6887 96.9423C26.4662 96.5048 25.2715 96.0088 24.108 95.4575L23.6798 96.3612ZM31.1562 99.0365C32.4332 99.3554 33.7341 99.6136 35.0558 99.8081L35.2013 98.8187C33.9124 98.6291 32.6437 98.3772 31.3985 98.0663L31.1562 99.0365ZM39.0123 100.193C39.6709 100.225 40.3336 100.241 41 100.241V99.2413C40.3497 99.2413 39.7031 99.2255 39.0606 99.1945L39.0123 100.193ZM41 100.241H43.0049V99.2413H41V100.241ZM47.0147 100.241H51.0245V99.2413H47.0147V100.241ZM55.0343 100.241H59.0441V99.2413H55.0343V100.241ZM63.0539 100.241H67.0637V99.2413H63.0539V100.241ZM71.0735 100.241H75.0833V99.2413H71.0735V100.241ZM79.0931 100.241H83.1029V99.2413H79.0931V100.241ZM87.1127 100.241H91.1225V99.2413H87.1127V100.241ZM95.1324 100.241H99.1422V99.2413H95.1324V100.241ZM103.152 100.241H107.162V99.2413H103.152V100.241ZM111.172 100.241H115.181V99.2413H111.172V100.241ZM119.191 100.241H123.201V99.2413H119.191V100.241ZM127.211 100.241H131.221V99.2413H127.211V100.241ZM135.23 100.241H139.24V99.2413H135.23V100.241ZM143.25 100.241H147.26V99.2413H143.25V100.241ZM151.27 100.241H155.279V99.2413H151.27V100.241ZM159.289 100.241H163.299V99.2413H159.289V100.241ZM167.309 100.241H171.319V99.2413H167.309V100.241ZM175.328 100.241H179.338V99.2413H175.328V100.241ZM183.348 100.241H187.358V99.2413H183.348V100.241ZM191.368 100.241H195.377V99.2413H191.368V100.241ZM199.387 100.241H203.397V99.2413H199.387V100.241ZM207.407 100.241H211.417V99.2413H207.407V100.241ZM215.426 100.241H219.436V99.2413H215.426V100.241ZM223.446 100.241H227.456V99.2413H223.446V100.241ZM231.466 100.241H235.475V99.2413H231.466V100.241ZM239.485 100.241H243.495V99.2413H239.485V100.241ZM247.505 100.241H251.515V99.2413H247.505V100.241ZM255.524 100.241H259.534V99.2413H255.524V100.241ZM263.544 100.241H267.554V99.2413H263.544V100.241ZM271.564 100.241H275.573V99.2413H271.564V100.241ZM279.583 100.241H283.593V99.2413H279.583V100.241ZM287.603 100.241H291.613V99.2413H287.603V100.241ZM295.622 100.241H299.632V99.2413H295.622V100.241ZM303.642 100.241H307.652V99.2413H303.642V100.241ZM311.662 100.241H315.671V99.2413H311.662V100.241ZM319.681 100.241H323.691V99.2413H319.681V100.241ZM327.701 100.241H331.71V99.2413H327.701V100.241ZM335.72 100.241H339.73V99.2413H335.72V100.241ZM343.74 100.241H347.75V99.2413H343.74V100.241ZM351.759 100.241H355.769V99.2413H351.759V100.241ZM359.779 100.241H363.789V99.2413H359.779V100.241ZM367.799 100.241H371.808V99.2413H367.799V100.241ZM375.818 100.241H379.828V99.2413H375.818V100.241ZM383.838 100.241H387.848V99.2413H383.838V100.241ZM391.857 100.241H395.867V99.2413H391.857V100.241ZM399.877 100.241H403.887V99.2413H399.877V100.241ZM407.897 100.241H411.906V99.2413H407.897V100.241ZM415.916 100.241H419.926V99.2413H415.916V100.241ZM423.936 100.241H427.946V99.2413H423.936V100.241ZM431.955 100.241H435.965V99.2413H431.955V100.241ZM439.975 100.241H443.985V99.2413H439.975V100.241ZM447.995 100.241H450V99.2413H447.995V100.241ZM450 100.241C450.65 100.241 451.297 100.257 451.939 100.288L451.988 99.2892C451.329 99.2574 450.666 99.2413 450 99.2413V100.241ZM455.799 100.664C457.088 100.853 458.356 101.105 459.602 101.416L459.844 100.446C458.567 100.127 457.266 99.8689 455.944 99.6745L455.799 100.664ZM463.311 102.54C464.534 102.978 465.729 103.474 466.892 104.025L467.32 103.121C466.127 102.556 464.902 102.047 463.648 101.599L463.311 102.54ZM470.309 105.855C471.42 106.522 472.495 107.242 473.531 108.012L474.127 107.209C473.065 106.42 471.963 105.682 470.824 104.998L470.309 105.855ZM476.526 110.473C477.484 111.342 478.399 112.257 479.268 113.215L480.009 112.543C479.118 111.561 478.18 110.623 477.198 109.732L476.526 110.473ZM481.729 116.21C482.499 117.246 483.219 118.321 483.886 119.432L484.743 118.917C484.059 117.778 483.321 116.676 482.532 115.614L481.729 116.21ZM485.716 122.849C486.268 124.013 486.764 125.207 487.201 126.43L488.143 126.093C487.694 124.839 487.185 123.614 486.62 122.421L485.716 122.849ZM488.325 130.14C488.636 131.385 488.888 132.654 489.077 133.943L490.067 133.797C489.872 132.475 489.614 131.174 489.295 129.897L488.325 130.14ZM489.453 137.802C489.484 138.444 489.5 139.091 489.5 139.741H490.5C490.5 139.075 490.484 138.412 490.452 137.754L489.453 137.802ZM489.5 139.741V141.643H490.5V139.741H489.5ZM489.5 145.448V149.252H490.5V145.448H489.5ZM489.5 153.056V156.86H490.5V153.056H489.5ZM489.5 160.664V164.469H490.5V160.664H489.5ZM489.5 168.273V172.077H490.5V168.273H489.5ZM489.5 175.881V179.685H490.5V175.881H489.5ZM489.5 183.49V187.294H490.5V183.49H489.5ZM489.5 191.098V193H490.5V191.098H489.5Z"
                            fill="#BFBFBF"
                        ></path>
                    </svg>
                </div>
                <div className="flex justify-center mx-auto md:hidden py-10">
                    <svg
                        width="16"
                        height="104"
                        viewBox="0 0 16 104"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.64645 103.354C7.84171 103.549 8.15829 103.549 8.35355 103.354L11.5355 100.172C11.7308 99.9763 11.7308 99.6597 11.5355 99.4645C11.3403 99.2692 11.0237 99.2692 10.8284 99.4645L8 102.293L5.17157 99.4645C4.97631 99.2692 4.65973 99.2692 4.46447 99.4645C4.2692 99.6597 4.2692 99.9763 4.46447 100.172L7.64645 103.354ZM8.5 103L8.5 100.425L7.5 100.425L7.5 103H8.5ZM8.5 95.275L8.5 90.125H7.5L7.5 95.275H8.5ZM8.5 84.975L8.5 79.825L7.5 79.825L7.5 84.975L8.5 84.975ZM8.5 74.675L8.5 69.525L7.5 69.525L7.5 74.675H8.5ZM8.5 64.375L8.5 59.225L7.5 59.225L7.5 64.375L8.5 64.375ZM8.5 54.075L8.5 48.925L7.5 48.925L7.5 54.075L8.5 54.075ZM8.5 43.775L8.5 38.625L7.5 38.625L7.5 43.775L8.5 43.775ZM8.5 33.475L8.5 28.325H7.5L7.5 33.475L8.5 33.475ZM8.5 23.175L8.5 18.025H7.5L7.5 23.175H8.5ZM8.5 12.875L8.5 7.72498L7.5 7.72498L7.5 12.875H8.5ZM8.5 2.57498L8.5 0L7.5 0L7.5 2.57498L8.5 2.57498ZM7.29289 103.707C7.68342 104.098 8.31658 104.098 8.70711 103.707L15.0711 97.3431C15.4616 96.9526 15.4616 96.3195 15.0711 95.9289C14.6805 95.5384 14.0474 95.5384 13.6569 95.9289L8 101.586L2.34315 95.9289C1.95262 95.5384 1.31946 95.5384 0.928932 95.9289C0.538408 96.3195 0.538408 96.9526 0.928932 97.3431L7.29289 103.707ZM9 103L9 100.425L7 100.425L7 103L9 103ZM9 95.275L9 90.125L7 90.125L7 95.275L9 95.275ZM9 84.975L9 79.825L7 79.825L7 84.975L9 84.975ZM9 74.675L9 69.525L7 69.525L7 74.675L9 74.675ZM9 64.375L9 59.225H7L7 64.375L9 64.375ZM9 54.075L9 48.925H7L7 54.075H9ZM9 43.775L9 38.625H7L7 43.775H9ZM9 33.475L9 28.325H7L7 33.475H9ZM9 23.175L9 18.025H7L7 23.175H9ZM9 12.875L9 7.72498L7 7.72498L7 12.875L9 12.875ZM9 2.57498L9 0L7 0L7 2.57498L9 2.57498Z"
                            fill="#BFBFBF"
                        ></path>
                    </svg>
                </div>
                <div className="flex flex-wrap md:flex items-center py-10 px-4">
                    <div className="w-full md:w-1/2 md:pr-6 lg:pl-12 mb-6 md:mb-0">
                        <div className="xl:w-3/4 md:w-full w-2/3 md:ml-auto md:mx-0 mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10/12 h-full"
                                viewBox="0 0 922.43055 543.51482"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <path
                                    d="M429.40405,719.95523c-.05566-.24511-5.43994-24.79785,5.55615-45.19043,10.9961-20.39166,34.46827-29.38476,34.70411-29.47363l1.07275-.40234.25342,1.11816c.05566.24512,5.43994,24.79785-5.55615,45.19043-10.99561,20.39166-34.46827,29.38477-34.70411,29.47363l-1.07324.40235Zm39.86182-72.33782c-4.70166,2.02246-23.25781,10.874-32.54492,28.09667-9.28809,17.22461-6.48584,37.59375-5.59229,42.63086,4.69971-2.01757,23.24854-10.85546,32.54492-28.09668C472.96118,673.02457,470.15991,652.65738,469.26587,647.61741Z"
                                    transform="translate(-138.78472 -178.24259)"
                                    fill="#f1f1f1"
                                />
                                <path
                                    d="M457.03116,684.04435c-19.76056,11.88861-27.371,35.50268-27.371,35.50268s24.42779,4.33881,44.18835-7.5498,27.371-35.50269,27.371-35.50269S476.79172,672.15574,457.03116,684.04435Z"
                                    transform="translate(-138.78472 -178.24259)"
                                    fill="#f1f1f1"
                                />
                                <path
                                    d="M403.38208,533.755h55.82731V505.49264H403.38208Z"
                                    transform="translate(-138.78472 -178.24259)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M415.04913,508.29308a7.93668,7.93668,0,0,0-8.31091-8.89017L398.88446,483.055l-11.09864,2.34969,11.41528,22.93065a7.97965,7.97965,0,0,0,15.848-.04225Z"
                                    transform="translate(-138.78472 -178.24259)"
                                    fill="#ffb7b7"
                                />
                                <polygon
                                    points="105.767 519.858 115.004 524.585 137.634 491.205 124 484.228 105.767 519.858"
                                    fill="#ffb7b7"
                                />
                                <path
                                    d="M243.73878,693.879l18.19172,9.3096.00074.00038a13.02378,13.02378,0,0,1,5.65977,17.526l-.19281.37672-29.785-15.24261Z"
                                    transform="translate(-138.78472 -178.24259)"
                                    fill="#2f2e41"
                                />
                                <polygon
                                    points="212.454 532.791 222.83 532.79 227.767 492.766 212.452 492.766 212.454 532.791"
                                    fill="#ffb7b7"
                                />
                                <path
                                    d="M348.59142,707.64523l20.43546-.00083h.00082a13.02377,13.02377,0,0,1,13.02307,13.02286v.4232l-33.45873.00124Z"
                                    transform="translate(-138.78472 -178.24259)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M302.70032,384.56392s-6.94873-5.32368-6.94873,7.68016l-1.09716,42.97236,12.25169,40.59517,7.13159-13.166-2.92578-28.52633Z"
                                    transform="translate(-138.78472 -178.24259)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M377.03136,502.10087s8.05774,39.24119-2.14873,71.4453L369.24221,697.3668l-20.68154-1.61155-7.252-91.85825-6.98338-45.66053L319.8214,599.86813l-47.80927,88.098-22.02449-17.18985s24.40667-66.59522,42.43744-80.57741l9.043-102.99572Z"
                                    transform="translate(-138.78472 -178.24259)"
                                    fill="#2f2e41"
                                />
                                <circle
                                    cx="213.7317"
                                    cy="130.27454"
                                    r="23.5814"
                                    fill="#ffb8b8"
                                />
                                <path
                                    d="M350.84761,313.51884c2.82683.3678,4.95918-2.52447,5.94818-5.19806s1.74257-5.7862,4.2003-7.23041c3.35778-1.9731,7.65389.4,11.49368-.251,4.33631-.73516,7.15572-5.3308,7.37669-9.72343s-1.5271-8.61741-3.24227-12.66737l-.5988,5.03318a9.98113,9.98113,0,0,0-4.36168-8.72436l.77179,7.38543a7.83853,7.83853,0,0,0-9.01785-6.48609l.12154,4.40051c-5.00844-.59556-10.06064-1.19195-15.08391-.73823s-10.08162,2.043-13.88883,5.35126c-5.695,4.94857-7.77493,13.097-7.07665,20.6092s3.79932,14.56944,7.0313,21.38674c.81317,1.71525,1.9379,3.65079,3.82353,3.86929a3.85158,3.85158,0,0,0,3.7712-2.84219,10.30188,10.30188,0,0,0-.04573-5.06077c-.4765-2.5321-1.07717-5.12024-.62916-7.65754s2.27332-5.04462,4.831-5.35557,5.1749,2.61264,3.94519,4.8768Z"
                                    transform="translate(-138.78472 -178.24259)"
                                    fill="#2f2e41"
                                />
                                <polygon
                                    points="239.706 334.352 160.991 329.274 166.915 304.729 238.859 320.81 239.706 334.352"
                                    fill="#cbcbcb"
                                />
                                <path
                                    d="M329.94662,340.67725l4.93725-6.85464s5.51849,1.8754,20.29759,9.23183l1.04414,6.42222,25.65358,157.78706-46.62958-2.01147-12.69811-.27017-4.15546-9.315-5.12418,9.11755-12.40014-.26383-12.61742-7.31445,12.43455-38.03511,4.02295-34.74361-6.21728-32.73214s-7.82347-30.05728,22.30906-46.26386Z"
                                    transform="translate(-138.78472 -178.24259)"
                                    fill="#2f2e41"
                                />
                                <polygon
                                    points="255.787 321.656 257.48 327.581 269.329 319.864 264.858 314.745 255.787 321.656"
                                    fill="#cbcbcb"
                                />
                                <path
                                    d="M338.76693,359.748s18.36836-23.45,29.47029,2.68606l3.50019,27.38928s13.44915,34.04483,13.85365,47.81926c0,0,9.11826,17.97712,9.0345,27.41942l13.48858,30.53718-13.8346,8.58887L355.991,445.481Z"
                                    transform="translate(-138.78472 -178.24259)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M520.78472,721.75741h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z"
                                    transform="translate(-138.78472 -178.24259)"
                                    fill="#cbcbcb"
                                />
                                <path
                                    d="M597.358,414.94225h460.06211V182.03786H597.358Z"
                                    transform="translate(-138.78472 -178.24259)"
                                    fill="#fff"
                                />
                                <path
                                    d="M1061.21528,418.73745H593.5628V178.24259h467.65248ZM601.153,411.14723h452.472V185.83281H601.153Z"
                                    transform="translate(-138.78472 -178.24259)"
                                    fill="#e5e5e5"
                                />
                                <rect
                                    x="739.86245"
                                    y="46.21081"
                                    width="86.67858"
                                    height="148.0759"
                                    fill="#e5e5e5"
                                />
                                <rect
                                    x="550.66766"
                                    y="46.20822"
                                    width="174.83378"
                                    height="40.75957"
                                    fill="#4338CA"
                                />
                                <rect
                                    x="550.66766"
                                    y="98.31856"
                                    width="174.83378"
                                    height="43.85523"
                                    fill="#e5e5e5"
                                />
                                <rect
                                    x="550.66766"
                                    y="153.52456"
                                    width="174.83378"
                                    height="40.75957"
                                    fill="#e5e5e5"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:px-6">
                        <div className="text-center xl:w-3/4 md:w-2/3 md:mr-auto md:mx-0 mx-auto">
                            <h3 className="text-xl font-extrabold mb-4 font-mono">
                                <FormattedMessage defaultMessage="Speisekarte" />
                            </h3>
                            <p className="sm:text-lg text-base leading-normal">
                                <FormattedMessage defaultMessage="Lege selbst kinderleicht deine eigene Speisekarte an, individuell anpassbar mit Zutaten, Beilagen und verschiedenen Größen." />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center md:flex flex justify-center">
                    <svg
                        width="494"
                        height="194"
                        viewBox="0 0 494 194"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.35355 193.354C4.15829 193.549 3.84171 193.549 3.64645 193.354L0.464466 190.172C0.269204 189.976 0.269204 189.66 0.464466 189.464C0.659728 189.269 0.976311 189.269 1.17157 189.464L4 192.293L6.82843 189.464C7.02369 189.269 7.34027 189.269 7.53553 189.464C7.7308 189.66 7.7308 189.976 7.53553 190.172L4.35355 193.354ZM493.5 0V2.13362H492.5V0H493.5ZM493.5 6.40085V10.6681H492.5V6.40085H493.5ZM493.5 14.9353V19.2025H492.5V14.9353H493.5ZM493.5 23.4698V27.737H492.5V23.4698H493.5ZM493.5 32.0042V36.2715H492.5V32.0042H493.5ZM493.5 40.5387V44.8059H492.5V40.5387H493.5ZM493.5 49.0732V53.3404H492.5V49.0732H493.5ZM493.5 57.6076V59.7412H492.5V57.6076H493.5ZM493.5 59.7412C493.5 60.4076 493.484 61.0703 493.452 61.7289L492.453 61.6806C492.484 61.0381 492.5 60.3915 492.5 59.7412H493.5ZM493.067 65.6854C492.872 67.0071 492.614 68.3081 492.295 69.5851L491.325 69.3428C491.636 68.0976 491.888 66.8289 492.077 65.5399L493.067 65.6854ZM491.143 73.3895C490.694 74.6432 490.185 75.8683 489.62 77.0614L488.716 76.6333C489.268 75.4698 489.764 74.2751 490.201 73.0526L491.143 73.3895ZM487.743 80.5654C487.059 81.704 486.321 82.8062 485.532 83.8684L484.729 83.2721C485.499 82.236 486.219 81.161 486.886 80.0505L487.743 80.5654ZM483.009 86.9395C482.118 87.9215 481.18 88.8595 480.198 89.7501L479.526 89.0093C480.484 88.1406 481.399 87.2256 482.268 86.2677L483.009 86.9395ZM477.127 92.2733C476.065 93.0623 474.963 93.8006 473.824 94.4845L473.309 93.6272C474.42 92.9602 475.495 92.2402 476.531 91.4705L477.127 92.2733ZM470.32 96.3612C469.127 96.9265 467.902 97.4352 466.648 97.8839L466.311 96.9423C467.534 96.5048 468.729 96.0088 469.892 95.4575L470.32 96.3612ZM462.844 99.0365C461.567 99.3554 460.266 99.6136 458.944 99.8081L458.799 98.8187C460.088 98.6291 461.356 98.3772 462.602 98.0663L462.844 99.0365ZM454.988 100.193C454.329 100.225 453.666 100.241 453 100.241V99.2413C453.65 99.2413 454.297 99.2255 454.939 99.1945L454.988 100.193ZM453 100.241H450.995V99.2413H453V100.241ZM446.985 100.241H442.975V99.2413H446.985V100.241ZM438.966 100.241H434.956V99.2413H438.966V100.241ZM430.946 100.241H426.936V99.2413H430.946V100.241ZM422.926 100.241H418.917V99.2413H422.926V100.241ZM414.907 100.241H410.897V99.2413H414.907V100.241ZM406.887 100.241H402.877V99.2413H406.887V100.241ZM398.868 100.241H394.858V99.2413H398.868V100.241ZM390.848 100.241H386.838V99.2413H390.848V100.241ZM382.828 100.241H378.819V99.2413H382.828V100.241ZM374.809 100.241H370.799V99.2413H374.809V100.241ZM366.789 100.241H362.779V99.2413H366.789V100.241ZM358.77 100.241H354.76V99.2413H358.77V100.241ZM350.75 100.241H346.74V99.2413H350.75V100.241ZM342.73 100.241H338.721V99.2413H342.73V100.241ZM334.711 100.241H330.701V99.2413H334.711V100.241ZM326.691 100.241H322.681V99.2413H326.691V100.241ZM318.672 100.241H314.662V99.2413H318.672V100.241ZM310.652 100.241H306.642V99.2413H310.652V100.241ZM302.632 100.241H298.623V99.2413H302.632V100.241ZM294.613 100.241H290.603V99.2413H294.613V100.241ZM286.593 100.241H282.583V99.2413H286.593V100.241ZM278.574 100.241H274.564V99.2413H278.574V100.241ZM270.554 100.241H266.544V99.2413H270.554V100.241ZM262.534 100.241H258.525V99.2413H262.534V100.241ZM254.515 100.241H250.505V99.2413H254.515V100.241ZM246.495 100.241H242.485V99.2413H246.495V100.241ZM238.476 100.241H234.466V99.2413H238.476V100.241ZM230.456 100.241H226.446V99.2413H230.456V100.241ZM222.436 100.241H218.427V99.2413H222.436V100.241ZM214.417 100.241H210.407V99.2413H214.417V100.241ZM206.397 100.241H202.387V99.2413H206.397V100.241ZM198.378 100.241H194.368V99.2413H198.378V100.241ZM190.358 100.241H186.348V99.2413H190.358V100.241ZM182.338 100.241H178.329V99.2413H182.338V100.241ZM174.319 100.241H170.309V99.2413H174.319V100.241ZM166.299 100.241H162.29V99.2413H166.299V100.241ZM158.28 100.241H154.27V99.2413H158.28V100.241ZM150.26 100.241H146.25V99.2413H150.26V100.241ZM142.241 100.241H138.231V99.2413H142.241V100.241ZM134.221 100.241H130.211V99.2413H134.221V100.241ZM126.201 100.241H122.192V99.2413H126.201V100.241ZM118.182 100.241H114.172V99.2413H118.182V100.241ZM110.162 100.241H106.152V99.2413H110.162V100.241ZM102.143 100.241H98.1328V99.2413H102.143V100.241ZM94.123 100.241H90.1132V99.2413H94.123V100.241ZM86.1034 100.241H82.0936V99.2413H86.1034V100.241ZM78.0838 100.241H74.074V99.2413H78.0838V100.241ZM70.0642 100.241H66.0544V99.2413H70.0642V100.241ZM62.0446 100.241H58.0348V99.2413H62.0446V100.241ZM54.025 100.241H50.0152V99.2413H54.025V100.241ZM46.0054 100.241H44V99.2413H46.0054V100.241ZM44 100.241C43.3497 100.241 42.7031 100.257 42.0606 100.288L42.0123 99.2892C42.6709 99.2574 43.3336 99.2413 44 99.2413V100.241ZM38.2013 100.664C36.9124 100.853 35.6437 101.105 34.3984 101.416L34.1562 100.446C35.4332 100.127 36.7341 99.8689 38.0558 99.6745L38.2013 100.664ZM30.6887 102.54C29.4661 102.978 28.2715 103.474 27.108 104.025L26.6798 103.121C27.8729 102.556 29.098 102.047 30.3517 101.599L30.6887 102.54ZM23.6907 105.855C22.5802 106.522 21.5052 107.242 20.4691 108.012L19.8728 107.209C20.935 106.42 22.0372 105.682 23.1758 104.998L23.6907 105.855ZM17.4735 110.473C16.5156 111.342 15.6006 112.257 14.7319 113.215L13.9912 112.543C14.8817 111.561 15.8198 110.623 16.8017 109.732L17.4735 110.473ZM12.2707 116.21C11.5011 117.246 10.781 118.321 10.114 119.432L9.25676 118.917C9.94066 117.778 10.6789 116.676 11.468 115.614L12.2707 116.21ZM8.28373 122.849C7.73247 124.013 7.23642 125.207 6.79892 126.43L5.85739 126.093C6.30605 124.839 6.81475 123.614 7.38003 122.421L8.28373 122.849ZM5.67496 130.14C5.36401 131.385 5.11215 132.654 4.92255 133.943L3.9332 133.797C4.12761 132.475 4.38587 131.174 4.70476 129.897L5.67496 130.14ZM4.54677 137.802C4.51571 138.444 4.5 139.091 4.5 139.741H3.5C3.5 139.075 3.5161 138.412 3.54793 137.754L4.54677 137.802ZM4.5 139.741V141.643H3.5V139.741H4.5ZM4.5 145.448V149.252H3.5V145.448H4.5ZM4.5 153.056V156.86H3.5V153.056H4.5ZM4.5 160.664V164.469H3.5V160.664H4.5ZM4.5 168.273V172.077H3.5V168.273H4.5ZM4.5 175.881V179.685H3.5V175.881H4.5ZM4.5 183.49V187.294H3.5V183.49H4.5ZM4.5 191.098V193H3.5V191.098H4.5Z"
                            fill="#BFBFBF"
                        ></path>
                    </svg>
                </div>
                <div className="flex justify-center my-5 md:hidden">
                    <svg
                        width="16"
                        height="104"
                        viewBox="0 0 16 104"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.64645 103.354C7.84171 103.549 8.15829 103.549 8.35355 103.354L11.5355 100.172C11.7308 99.9763 11.7308 99.6597 11.5355 99.4645C11.3403 99.2692 11.0237 99.2692 10.8284 99.4645L8 102.293L5.17157 99.4645C4.97631 99.2692 4.65973 99.2692 4.46447 99.4645C4.2692 99.6597 4.2692 99.9763 4.46447 100.172L7.64645 103.354ZM8.5 103L8.5 100.425L7.5 100.425L7.5 103H8.5ZM8.5 95.275L8.5 90.125H7.5L7.5 95.275H8.5ZM8.5 84.975L8.5 79.825L7.5 79.825L7.5 84.975L8.5 84.975ZM8.5 74.675L8.5 69.525L7.5 69.525L7.5 74.675H8.5ZM8.5 64.375L8.5 59.225L7.5 59.225L7.5 64.375L8.5 64.375ZM8.5 54.075L8.5 48.925L7.5 48.925L7.5 54.075L8.5 54.075ZM8.5 43.775L8.5 38.625L7.5 38.625L7.5 43.775L8.5 43.775ZM8.5 33.475L8.5 28.325H7.5L7.5 33.475L8.5 33.475ZM8.5 23.175L8.5 18.025H7.5L7.5 23.175H8.5ZM8.5 12.875L8.5 7.72498L7.5 7.72498L7.5 12.875H8.5ZM8.5 2.57498L8.5 0L7.5 0L7.5 2.57498L8.5 2.57498ZM7.29289 103.707C7.68342 104.098 8.31658 104.098 8.70711 103.707L15.0711 97.3431C15.4616 96.9526 15.4616 96.3195 15.0711 95.9289C14.6805 95.5384 14.0474 95.5384 13.6569 95.9289L8 101.586L2.34315 95.9289C1.95262 95.5384 1.31946 95.5384 0.928932 95.9289C0.538408 96.3195 0.538408 96.9526 0.928932 97.3431L7.29289 103.707ZM9 103L9 100.425L7 100.425L7 103L9 103ZM9 95.275L9 90.125L7 90.125L7 95.275L9 95.275ZM9 84.975L9 79.825L7 79.825L7 84.975L9 84.975ZM9 74.675L9 69.525L7 69.525L7 74.675L9 74.675ZM9 64.375L9 59.225H7L7 64.375L9 64.375ZM9 54.075L9 48.925H7L7 54.075H9ZM9 43.775L9 38.625H7L7 43.775H9ZM9 33.475L9 28.325H7L7 33.475H9ZM9 23.175L9 18.025H7L7 23.175H9ZM9 12.875L9 7.72498L7 7.72498L7 12.875L9 12.875ZM9 2.57498L9 0L7 0L7 2.57498L9 2.57498Z"
                            fill="#BFBFBF"
                        ></path>
                    </svg>
                </div>
                <div className="flex flex-wrap-reverse items-center py-10 px-4">
                    <div className="text-centre w-full md:w-1/2 md:px-6">
                        <div className="text-center xl:w-3/4 md:w-2/3 md:ml-auto md:mx-0 mx-auto">
                            <h3 className="text-xl font-extrabold mb-4 font-mono">
                                <FormattedMessage defaultMessage="Öffnungszeiten" />
                            </h3>
                            <p className="sm:text-lg text-base leading-normal">
                                <FormattedMessage defaultMessage="Hinterlege deine Öffnungszeiten, Pausen und schalte Vorbestellungen für Kunden frei. Alles eigenständig in deinem Adminbereich." />
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pr-6 lg:pl-12 mb-6 md:mb-0">
                        <div className="xl:w-3/4 md:w-full w-2/3 md:mr-auto md:mx-0 mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10/12 h-full"
                                viewBox="0 0 675.67004 631.94692"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <path
                                    d="M886.75657,617.4844l30.31095,4.737a98.98541,98.98541,0,0,0,20.60431-42.93875c-22.16391,18.14266-55.86923,8.5016-82.74464,18.40656A59.5399,59.5399,0,0,0,819.307,635.03277L804.49369,650.9701A99.77016,99.77016,0,0,0,887.905,646.378a96.3717,96.3717,0,0,0,19.64-14.09929C896.93923,625.60042,886.75657,617.4844,886.75657,617.4844Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#f2f2f2"
                                />
                                <path
                                    d="M875.99631,569.00709l29.24218-9.2783a98.98538,98.98538,0,0,0-.70813-47.62114c-11.74636,26.12313-46.21379,32.5259-65.851,53.37718a59.53993,59.53993,0,0,0-15.227,49.31l-6.15081,20.871a99.77014,99.77014,0,0,0,72.60872-41.31,96.37253,96.37253,0,0,0,11.29063-21.37854C888.72981,571.73,875.99631,569.00709,875.99631,569.00709Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#f2f2f2"
                                />
                                <path
                                    d="M937.835,660.62474a1.18647,1.18647,0,0,1-1.19006,1.19H263.355a1.19,1.19,0,0,1,0-2.38h673.29A1.18651,1.18651,0,0,1,937.835,660.62474Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#ccc"
                                />
                                <circle
                                    cx="278.99773"
                                    cy="260.8659"
                                    r="215"
                                    fill="#e6e6e6"
                                />
                                <path
                                    d="M726.16271,394.89244a184.74377,184.74377,0,0,1-74.67,148.51c-1.55,1.16-3.13,2.29-4.72,3.39a185.03127,185.03127,0,0,1-211.22,0c-1.59-1.1-3.17-2.23-4.72-3.39a185.01966,185.01966,0,0,1,0-297.02c1.55-1.16,3.13-2.29,4.72-3.39a185.0315,185.0315,0,0,1,211.22,0c1.59,1.1,3.17,2.23,4.72,3.39A184.74369,184.74369,0,0,1,726.16271,394.89244Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#fff"
                                />
                                <circle
                                    cx="278.99773"
                                    cy="260.8659"
                                    r="169"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M541.60362,226.36486c-2.562,0-5.10815.067-7.64221.1798a168.99467,168.99467,0,0,1-7.15649,337.168c4.87781.42328,9.81116.65223,14.7987.65223a169,169,0,0,0,0-338Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    opacity="0.2"
                                />
                                <path
                                    d="M541.66271,213.89244a5.50968,5.50968,0,0,0-5.5,5.5v24a5.5,5.5,0,0,0,11,0v-24A5.50968,5.50968,0,0,0,541.66271,213.89244Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#fff"
                                />
                                <path
                                    d="M651.49272,246.38243c-1.55-1.16-3.13-2.29-4.72-3.39a5.49662,5.49662,0,0,0-4.9,2.39l-13.51,19.83a5.49872,5.49872,0,0,0,9.09,6.19l13.51-19.83A5.4644,5.4644,0,0,0,651.49272,246.38243Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#fff"
                                />
                                <path
                                    d="M712.87273,336.80242a5.4929,5.4929,0,0,0-7.16-3.02l-22.24,9.03a5.49945,5.49945,0,0,0,4.14,10.19l22.24-9.03A5.51241,5.51241,0,0,0,712.87273,336.80242Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#fff"
                                />
                                <path
                                    d="M453.96269,265.21245l-13.51-19.83a5.49661,5.49661,0,0,0-4.9-2.39c-1.59,1.1-3.17,2.23-4.72,3.39a5.46442,5.46442,0,0,0,.53,5.19l13.51,19.83a5.49872,5.49872,0,0,0,9.09-6.19Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#fff"
                                />
                                <path
                                    d="M398.85271,342.81243l-22.24-9.03a5.49942,5.49942,0,0,0-4.14,10.18994l22.24,9.03a5.49945,5.49945,0,0,0,4.14-10.19Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#fff"
                                />
                                <path
                                    d="M541.66271,540.89244a5.50968,5.50968,0,0,0-5.5,5.5v24a5.5,5.5,0,0,0,11,0v-24A5.50968,5.50968,0,0,0,541.66271,540.89244Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#fff"
                                />
                                <path
                                    d="M650.96269,538.21245l-13.51-19.83a5.49872,5.49872,0,1,0-9.09,6.19l13.51,19.83a5.49657,5.49657,0,0,0,4.9,2.39c1.59-1.1,3.17-2.23,4.72-3.39A5.46436,5.46436,0,0,0,650.96269,538.21245Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#fff"
                                />
                                <path
                                    d="M709.85271,445.81243l-22.24-9.03a5.49942,5.49942,0,0,0-4.14,10.18994l22.24,9.03a5.49945,5.49945,0,0,0,4.14-10.19Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#fff"
                                />
                                <path
                                    d="M452.51268,516.93242a5.5,5.5,0,0,0-7.63995,1.45l-13.51,19.83a5.46439,5.46439,0,0,0-.53,5.19c1.55,1.16,3.13,2.29,4.72,3.39a5.49656,5.49656,0,0,0,4.9-2.39l13.51-19.83A5.49838,5.49838,0,0,0,452.51268,516.93242Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#fff"
                                />
                                <path
                                    d="M401.87273,439.80242a5.4929,5.4929,0,0,0-7.16-3.02l-22.24,9.03a5.49945,5.49945,0,0,0,4.14,10.19l22.24-9.03A5.51241,5.51241,0,0,0,401.87273,439.80242Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#fff"
                                />
                                <path
                                    d="M548.79894,392.16338a11.5131,11.5131,0,0,1-9.40873,13.26558l-97.59815,16.60128a11.5,11.5,0,0,1-3.85686-22.67432l97.59815-16.60127A11.5131,11.5131,0,0,1,548.79894,392.16338Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M651.51837,500.29429a7.5082,7.5082,0,0,1-10.60652.04177l-105.063-104.23895a7.5,7.5,0,0,1,10.56475-10.64828l105.063,104.23895A7.50819,7.50819,0,0,1,651.51837,500.29429Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#3f3d56"
                                />
                                <circle
                                    cx="278.99773"
                                    cy="260.8659"
                                    r="13"
                                    fill="#ccc"
                                />
                                <path
                                    d="M451.61885,169.47127c-19.95483,31.3725-50.40146,52.19272-87.94977,65.87042a7.05892,7.05892,0,0,1-9.88158-1.41838l0,0c-20.3959-27.23248-15.79051-66.15312,11.1278-86.96189a62.06846,62.06846,0,0,1,87.55785,11.87509l.56413.75322A7.05892,7.05892,0,0,1,451.61885,169.47127Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#e6e6e6"
                                />
                                <path
                                    d="M629.85228,158.83648a62.06846,62.06846,0,0,1,87.55785-11.87509c26.91832,20.80877,31.52371,59.72941,11.1278,86.96189l0,0a7.05889,7.05889,0,0,1-9.88155,1.41838c-34.8573-13.34536-63.4422-36.43945-87.94983-65.87042a7.059,7.059,0,0,1-1.41838-9.88157Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#e6e6e6"
                                />
                                <path
                                    d="M621.10592,581.16067a5.50968,5.50968,0,0,0-2.11376,7.48546l31.74188,56.7226a5.5,5.5,0,0,0,9.59921-5.3717l-31.74188-56.7226A5.50968,5.50968,0,0,0,621.10592,581.16067Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#e6e6e6"
                                />
                                <path
                                    d="M453.734,583.27443,421.99216,639.997a5.5,5.5,0,0,0,9.59921,5.3717l31.74188-56.7226a5.5,5.5,0,1,0-9.59921-5.3717Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#e6e6e6"
                                />
                                <circle
                                    cx="394.99773"
                                    cy="508.8659"
                                    r="17"
                                    fill="#e6e6e6"
                                />
                                <circle
                                    cx="406.99773"
                                    cy="73.8659"
                                    r="17"
                                    fill="#e6e6e6"
                                />
                                <circle
                                    cx="277.99773"
                                    cy="33.8659"
                                    r="17"
                                    fill="#e6e6e6"
                                />
                                <circle
                                    cx="154.99773"
                                    cy="71.8659"
                                    r="17"
                                    fill="#e6e6e6"
                                />
                                <circle
                                    cx="165.99773"
                                    cy="508.8659"
                                    r="17"
                                    fill="#e6e6e6"
                                />
                                <path
                                    d="M643.82785,490.73326a8.51615,8.51615,0,0,0,12.95041,1.67682l26.67551,14.29343-1.43061-15.66135L656.911,479.86993a8.56232,8.56232,0,0,0-13.08312,10.86333Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#ffb7b7"
                                />
                                <path
                                    d="M663.26422,496.199l10.45348-14.42967,50.35989,23.80654,62.667-11.75832a21.47122,21.47122,0,0,1,25.43021,21.06258h0a21.49411,21.49411,0,0,1-21.43119,21.51043l-71.81625.13324Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#3f3d56"
                                />
                                <polygon
                                    points="384.999 611.399 374.422 606.341 388.951 562.133 404.56 569.599 384.999 611.399"
                                    fill="#ffb7b7"
                                />
                                <path
                                    d="M718.07,738.29872c-.7691.48175-1.5382.95554-2.31507,1.42951-1.546.94777-3.10749,1.88-4.669,2.79663-.78465.45843-1.57707.91685-2.36172,1.3675v.02314l-.04661.00777-.01551.00778-1.19641.29531-1.71686-4.537-.79243-2.08974-1.1187-2.95994-2.051-5.41478-10.79851-28.51121,16.78822-4.1408.62926,2.5715h.00778l.31072,1.274,5.86543,23.788,1.19637,4.86323.03883.14756.72249,2.9055.62153,2.51706.69139,2.81238Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#ffb7b7"
                                />
                                <path
                                    d="M818.21837,638.17372c-1.06431,1.70913-2.152,3.41049-3.24732,5.09629q-3.05317,4.70782-6.26938,9.27587c0,.00777-.00777.00777-.01555.01555a21.93387,21.93387,0,0,1-4.11742,3.0065c-.06216.04661-.13205.07767-.19422.1165a15.17964,15.17964,0,0,1-3.46487,1.39063c-.435.10873-.87787.2175-1.31292.32628-1.56925.37288-3.123.69142-4.669.97109-2.75012.48943-5.46917.839-8.17268,1.05653-.21754.02333-.435.03884-.65259.05439-11.117.81571-21.93889-.49721-33.23461-2.64912-5.578-1.05658-11.27244-2.32289-17.16893-3.6358-1.92663-.43505-3.861-.86232-5.81877-1.28959-.14761-.03106-.303-.06994-.45838-.101-2.79673-.61371-5.64006-1.2197-8.55334-1.81791-3.66686-.75354-7.45023-1.4838-11.38121-2.17523l.27967,5.53911a41.68909,41.68909,0,0,0,2.62583,12.4533c1.67807,4.90985,3.0065,8.79421.202,16.88144l-1.35176,3.91543a13.37221,13.37221,0,0,1-1.37508,11.83181l-.27188.41172,11.27243,28.519.73027,1.849h-5.77221l-7.10059.00778H696.69209l-17.36314-34.835-.83126-1.66252v-.08544l1.79457-66.94316c.02333-.59043.06994-1.18864.14761-1.77907a20.35271,20.35271,0,0,1,7.74545-13.704,19.60027,19.60027,0,0,1,14.59743-3.99314l5.9431.7691,12.14253,1.5693,8.55334,1.11092.17094.02328,25.22505,3.26288,1.81013-7.3803.33405-.12428,10.61989-3.89214,36.73054-13.46323.09322-.03105,2.41607-.88565.28744.46611c.08549.13987.17093.27971.2486.41954a71.99912,71.99912,0,0,1,5.80327,13.471,211.47728,211.47728,0,0,1,6.09844,23.28292q.10489.51275.18644.93226l.02333.08544c.02328.13206.03883.2175.04661.24083C820.36255,629.60479,819.77212,633.9087,818.21837,638.17372Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M819.76865,613.50321c-.11655-.49721-.26415-1.00215-.41949-1.49159a106.28979,106.28979,0,0,0-4.30386-10.89178c-1.83341-4.03975-4.032-8.36694-6.65-13.05146q-1.89946-3.40275-4.08637-7.0773-1.09539-1.84121-2.27623-3.75231a1.972,1.972,0,0,0-.101-.17089l-.22527-.37289-36.34216,4.86324-13.53311,1.81013-.80794,6.74325-.19421,1.6703c-.00778,0-.00778,0,0,.00777l-.54383,4.55247v.00778l-.72248,6.013-.06216-.00778-20.08216-2.60251-20.69591-2.68022-11.11706-1.43719a19.58836,19.58836,0,0,0-14.59743,3.99314,20.3629,20.3629,0,0,0-7.7454,13.704c-.06994.54382-.11655,1.10315-.13988,1.65475l-10.48779,24.85216a160.34347,160.34347,0,0,0-11.8551,46.64346l-7.69106,24.58806,1.09537.101,16.29879,1.51492,4.30386.404,9.47786-13.83611c1.07987-1.57707,2.10534-3.20071,3.06088-4.86323a73.86106,73.86106,0,0,0,4.18736-8.42133l20.5017-48.78763q2.37727.408,4.70785.77687,10.77918,1.748,20.69591,2.85112c21.49607,2.40055,40.11,2.587,56.68069.55159q6.98021-.85065,13.49429-2.2374,2.38894-.50113,4.71562-1.07986c.36511-.08545.72249-.17089,1.07987-.26416a19.82527,19.82527,0,0,0,13.86717-12.95824A20.22821,20.22821,0,0,0,819.76865,613.50321Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M650.54238,738.20692l-11.44332-5.48473-1.79458-.86231-2.86666,7.03847-20.01227,4.4049a4.74845,4.74845,0,0,0-.77687,9.035l19.55389,7.97851,6.20721-5.58572-1.52269,7.49684,7.36474,3.0065,8.07168-25.69121Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#2f2e41"
                                />
                                <polygon
                                    points="458.703 593.34 459.434 595.189 458.703 595.189 458.703 593.34"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M716.883,729.6106,704.89244,733.765l-1.88192.65,2.91542,7.01841-11.12085,17.21106a4.74844,4.74844,0,0,0,5.80521,6.9667l19.50836-8.08917.48047-8.3366,4.193,6.39847,7.34864-3.04564-12.34131-23.93495Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M816.77843,624.75865a4.40445,4.40445,0,0,1-2.043-.50683l-63.27441-33.0625-.731-2.99317-1.37793-9.47168.019-.08886,6.01758-27.74317c-.11035-.23828-.34082-.6289-.60107-1.07031-2.68653-4.55176-10.86231-18.40527,4.74121-37.48047l27.3955-31.93945,23.5127-1.01172.26758.33789A61.242,61.242,0,0,1,821.11485,536.617l-2.44824,44.2168,2.626,8.92969a24.6393,24.6393,0,0,1-.72168,15.94433l.602,14.459a4.41745,4.41745,0,0,1-4.39453,4.59179Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M761.89233,661.22445a8.5162,8.5162,0,0,0,2.12627-12.88426L779.23125,622.178l-15.70163.885-12.039,24.70838a8.56232,8.56232,0,0,0,10.40167,13.45308Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#ffb7b7"
                                />
                                <path
                                    d="M768.03088,641.99l-14.05733-10.94906,25.54384-49.50134L769.946,518.50143a21.47121,21.47121,0,0,1,21.9344-24.68218h0a21.49411,21.49411,0,0,1,20.752,22.16643l-2.36488,71.77743Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#3f3d56"
                                />
                                <path
                                    id="f4e08e8b-ef08-4d70-8ad3-b81af8a71ff9-1421"
                                    data-name="a1ca5f83-7fa1-45b1-9d3b-bf096f25c0e5"
                                    d="M771.84232,467.13077V443.864a31.177,31.177,0,1,1,62.35408-.04005v.04005c5.49493,11.45055,2.05727,16.8945,0,23.2668a4.19307,4.19307,0,0,1-4.18608,4.18608H776.03048A4.1931,4.1931,0,0,1,771.84232,467.13077Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#2f2e41"
                                />
                                <circle
                                    cx="530.63215"
                                    cy="312.44125"
                                    r="23.33714"
                                    fill="#ffb7b7"
                                />
                                <path
                                    d="M817.22046,452.58578c-.21152-.03343-.423-.078-.63455-.11143-3.64026-.64562-7.28046-1.2801-10.90958-1.937l-.334-8.2266-4.39718,7.3694c-10.03015,3.32853-19.41462,1.44724-28.24248-2.70506a79.73731,79.73731,0,0,1-8.46054-4.66434,30.92749,30.92749,0,0,1,15.19553-21.886c.334-.18929.65677-.35617.99079-.52331a.0109.0109,0,0,0,.01107-.01115c.56776-.26716,1.14666-.52318,1.72556-.75691a25.70666,25.70666,0,0,1,26.98453,5.23209C816.27418,431.16737,819.48027,442.39976,817.22046,452.58578Z"
                                    transform="translate(-262.16498 -134.02654)"
                                    fill="#2f2e41"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="text-center hidden md:flex justify-center">
                    <svg
                        width="494"
                        height="194"
                        viewBox="0 0 494 194"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M489.646 193.354C489.842 193.549 490.158 193.549 490.354 193.354L493.536 190.172C493.731 189.976 493.731 189.66 493.536 189.464C493.34 189.269 493.024 189.269 492.828 189.464L490 192.293L487.172 189.464C486.976 189.269 486.66 189.269 486.464 189.464C486.269 189.66 486.269 189.976 486.464 190.172L489.646 193.354ZM0.5 0V2.13362H1.5V0H0.5ZM0.5 6.40085V10.6681H1.5V6.40085H0.5ZM0.5 14.9353V19.2025H1.5V14.9353H0.5ZM0.5 23.4698V27.737H1.5V23.4698H0.5ZM0.5 32.0042V36.2715H1.5V32.0042H0.5ZM0.5 40.5387V44.8059H1.5V40.5387H0.5ZM0.5 49.0732V53.3404H1.5V49.0732H0.5ZM0.5 57.6076V59.7412H1.5V57.6076H0.5ZM0.5 59.7412C0.5 60.4076 0.516099 61.0703 0.547933 61.7289L1.54677 61.6806C1.51571 61.0381 1.5 60.3915 1.5 59.7412H0.5ZM0.933197 65.6854C1.12761 67.0071 1.38587 68.3081 1.70476 69.5851L2.67497 69.3428C2.36401 68.0976 2.11216 66.8289 1.92255 65.5399L0.933197 65.6854ZM2.8574 73.3895C3.30605 74.6432 3.81476 75.8683 4.38003 77.0614L5.28373 76.6333C4.73248 75.4698 4.23642 74.2751 3.79892 73.0526L2.8574 73.3895ZM6.25676 80.5654C6.94066 81.704 7.67893 82.8062 8.46796 83.8684L9.27071 83.2721C8.50108 82.236 7.78102 81.161 7.11401 80.0505L6.25676 80.5654ZM10.9912 86.9395C11.8817 87.9215 12.8198 88.8595 13.8017 89.7501L14.4735 89.0093C13.5157 88.1406 12.6006 87.2256 11.7319 86.2677L10.9912 86.9395ZM16.8728 92.2733C17.935 93.0623 19.0372 93.8006 20.1758 94.4845L20.6907 93.6272C19.5802 92.9602 18.5052 92.2402 17.4692 91.4705L16.8728 92.2733ZM23.6798 96.3612C24.8729 96.9265 26.098 97.4352 27.3517 97.8839L27.6887 96.9423C26.4662 96.5048 25.2715 96.0088 24.108 95.4575L23.6798 96.3612ZM31.1562 99.0365C32.4332 99.3554 33.7341 99.6136 35.0558 99.8081L35.2013 98.8187C33.9124 98.6291 32.6437 98.3772 31.3985 98.0663L31.1562 99.0365ZM39.0123 100.193C39.6709 100.225 40.3336 100.241 41 100.241V99.2413C40.3497 99.2413 39.7031 99.2255 39.0606 99.1945L39.0123 100.193ZM41 100.241H43.0049V99.2413H41V100.241ZM47.0147 100.241H51.0245V99.2413H47.0147V100.241ZM55.0343 100.241H59.0441V99.2413H55.0343V100.241ZM63.0539 100.241H67.0637V99.2413H63.0539V100.241ZM71.0735 100.241H75.0833V99.2413H71.0735V100.241ZM79.0931 100.241H83.1029V99.2413H79.0931V100.241ZM87.1127 100.241H91.1225V99.2413H87.1127V100.241ZM95.1324 100.241H99.1422V99.2413H95.1324V100.241ZM103.152 100.241H107.162V99.2413H103.152V100.241ZM111.172 100.241H115.181V99.2413H111.172V100.241ZM119.191 100.241H123.201V99.2413H119.191V100.241ZM127.211 100.241H131.221V99.2413H127.211V100.241ZM135.23 100.241H139.24V99.2413H135.23V100.241ZM143.25 100.241H147.26V99.2413H143.25V100.241ZM151.27 100.241H155.279V99.2413H151.27V100.241ZM159.289 100.241H163.299V99.2413H159.289V100.241ZM167.309 100.241H171.319V99.2413H167.309V100.241ZM175.328 100.241H179.338V99.2413H175.328V100.241ZM183.348 100.241H187.358V99.2413H183.348V100.241ZM191.368 100.241H195.377V99.2413H191.368V100.241ZM199.387 100.241H203.397V99.2413H199.387V100.241ZM207.407 100.241H211.417V99.2413H207.407V100.241ZM215.426 100.241H219.436V99.2413H215.426V100.241ZM223.446 100.241H227.456V99.2413H223.446V100.241ZM231.466 100.241H235.475V99.2413H231.466V100.241ZM239.485 100.241H243.495V99.2413H239.485V100.241ZM247.505 100.241H251.515V99.2413H247.505V100.241ZM255.524 100.241H259.534V99.2413H255.524V100.241ZM263.544 100.241H267.554V99.2413H263.544V100.241ZM271.564 100.241H275.573V99.2413H271.564V100.241ZM279.583 100.241H283.593V99.2413H279.583V100.241ZM287.603 100.241H291.613V99.2413H287.603V100.241ZM295.622 100.241H299.632V99.2413H295.622V100.241ZM303.642 100.241H307.652V99.2413H303.642V100.241ZM311.662 100.241H315.671V99.2413H311.662V100.241ZM319.681 100.241H323.691V99.2413H319.681V100.241ZM327.701 100.241H331.71V99.2413H327.701V100.241ZM335.72 100.241H339.73V99.2413H335.72V100.241ZM343.74 100.241H347.75V99.2413H343.74V100.241ZM351.759 100.241H355.769V99.2413H351.759V100.241ZM359.779 100.241H363.789V99.2413H359.779V100.241ZM367.799 100.241H371.808V99.2413H367.799V100.241ZM375.818 100.241H379.828V99.2413H375.818V100.241ZM383.838 100.241H387.848V99.2413H383.838V100.241ZM391.857 100.241H395.867V99.2413H391.857V100.241ZM399.877 100.241H403.887V99.2413H399.877V100.241ZM407.897 100.241H411.906V99.2413H407.897V100.241ZM415.916 100.241H419.926V99.2413H415.916V100.241ZM423.936 100.241H427.946V99.2413H423.936V100.241ZM431.955 100.241H435.965V99.2413H431.955V100.241ZM439.975 100.241H443.985V99.2413H439.975V100.241ZM447.995 100.241H450V99.2413H447.995V100.241ZM450 100.241C450.65 100.241 451.297 100.257 451.939 100.288L451.988 99.2892C451.329 99.2574 450.666 99.2413 450 99.2413V100.241ZM455.799 100.664C457.088 100.853 458.356 101.105 459.602 101.416L459.844 100.446C458.567 100.127 457.266 99.8689 455.944 99.6745L455.799 100.664ZM463.311 102.54C464.534 102.978 465.729 103.474 466.892 104.025L467.32 103.121C466.127 102.556 464.902 102.047 463.648 101.599L463.311 102.54ZM470.309 105.855C471.42 106.522 472.495 107.242 473.531 108.012L474.127 107.209C473.065 106.42 471.963 105.682 470.824 104.998L470.309 105.855ZM476.526 110.473C477.484 111.342 478.399 112.257 479.268 113.215L480.009 112.543C479.118 111.561 478.18 110.623 477.198 109.732L476.526 110.473ZM481.729 116.21C482.499 117.246 483.219 118.321 483.886 119.432L484.743 118.917C484.059 117.778 483.321 116.676 482.532 115.614L481.729 116.21ZM485.716 122.849C486.268 124.013 486.764 125.207 487.201 126.43L488.143 126.093C487.694 124.839 487.185 123.614 486.62 122.421L485.716 122.849ZM488.325 130.14C488.636 131.385 488.888 132.654 489.077 133.943L490.067 133.797C489.872 132.475 489.614 131.174 489.295 129.897L488.325 130.14ZM489.453 137.802C489.484 138.444 489.5 139.091 489.5 139.741H490.5C490.5 139.075 490.484 138.412 490.452 137.754L489.453 137.802ZM489.5 139.741V141.643H490.5V139.741H489.5ZM489.5 145.448V149.252H490.5V145.448H489.5ZM489.5 153.056V156.86H490.5V153.056H489.5ZM489.5 160.664V164.469H490.5V160.664H489.5ZM489.5 168.273V172.077H490.5V168.273H489.5ZM489.5 175.881V179.685H490.5V175.881H489.5ZM489.5 183.49V187.294H490.5V183.49H489.5ZM489.5 191.098V193H490.5V191.098H489.5Z"
                            fill="#BFBFBF"
                        ></path>
                    </svg>
                </div>
                <div className="flex justify-center my-5 md:hidden">
                    <svg
                        width="16"
                        height="104"
                        viewBox="0 0 16 104"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.64645 103.354C7.84171 103.549 8.15829 103.549 8.35355 103.354L11.5355 100.172C11.7308 99.9763 11.7308 99.6597 11.5355 99.4645C11.3403 99.2692 11.0237 99.2692 10.8284 99.4645L8 102.293L5.17157 99.4645C4.97631 99.2692 4.65973 99.2692 4.46447 99.4645C4.2692 99.6597 4.2692 99.9763 4.46447 100.172L7.64645 103.354ZM8.5 103L8.5 100.425L7.5 100.425L7.5 103H8.5ZM8.5 95.275L8.5 90.125H7.5L7.5 95.275H8.5ZM8.5 84.975L8.5 79.825L7.5 79.825L7.5 84.975L8.5 84.975ZM8.5 74.675L8.5 69.525L7.5 69.525L7.5 74.675H8.5ZM8.5 64.375L8.5 59.225L7.5 59.225L7.5 64.375L8.5 64.375ZM8.5 54.075L8.5 48.925L7.5 48.925L7.5 54.075L8.5 54.075ZM8.5 43.775L8.5 38.625L7.5 38.625L7.5 43.775L8.5 43.775ZM8.5 33.475L8.5 28.325H7.5L7.5 33.475L8.5 33.475ZM8.5 23.175L8.5 18.025H7.5L7.5 23.175H8.5ZM8.5 12.875L8.5 7.72498L7.5 7.72498L7.5 12.875H8.5ZM8.5 2.57498L8.5 0L7.5 0L7.5 2.57498L8.5 2.57498ZM7.29289 103.707C7.68342 104.098 8.31658 104.098 8.70711 103.707L15.0711 97.3431C15.4616 96.9526 15.4616 96.3195 15.0711 95.9289C14.6805 95.5384 14.0474 95.5384 13.6569 95.9289L8 101.586L2.34315 95.9289C1.95262 95.5384 1.31946 95.5384 0.928932 95.9289C0.538408 96.3195 0.538408 96.9526 0.928932 97.3431L7.29289 103.707ZM9 103L9 100.425L7 100.425L7 103L9 103ZM9 95.275L9 90.125L7 90.125L7 95.275L9 95.275ZM9 84.975L9 79.825L7 79.825L7 84.975L9 84.975ZM9 74.675L9 69.525L7 69.525L7 74.675L9 74.675ZM9 64.375L9 59.225H7L7 64.375L9 64.375ZM9 54.075L9 48.925H7L7 54.075H9ZM9 43.775L9 38.625H7L7 43.775H9ZM9 33.475L9 28.325H7L7 33.475H9ZM9 23.175L9 18.025H7L7 23.175H9ZM9 12.875L9 7.72498L7 7.72498L7 12.875L9 12.875ZM9 2.57498L9 0L7 0L7 2.57498L9 2.57498Z"
                            fill="#BFBFBF"
                        ></path>
                    </svg>
                </div>
                <div className="md:flex items-center py-10 px-4">
                    <div className="w-full md:w-1/2 md:pr-6 lg:pl-12 mb-6 md:mb-0">
                        <div className="xl:w-3/4 md:w-full w-2/3 md:ml-auto md:mx-0 mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10/12 h-full"
                                viewBox="0 0 739 468"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <path
                                    d="M853.24364,705.75529l2-.03906a463.83054,463.83054,0,0,0-7.09961-66.28711c-8.64843-46.88086-23.02929-77.66993-42.74316-91.51172l-1.14844,1.63672C850.30419,581.8881,853.22021,704.51994,853.24364,705.75529Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M828.24364,705.27677l2-.03906c-.043-2.21484-1.293-54.41406-21.84277-68.8418l-1.14844,1.63672C826.97314,651.87834,828.23388,704.74455,828.24364,705.27677Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#2f2e41"
                                />
                                <circle
                                    cx="551.49821"
                                    cy="301.31307"
                                    r="10.00001"
                                    fill="#4338CA"
                                />
                                <circle
                                    cx="556.45036"
                                    cy="387.31309"
                                    r="10"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M832.90487,555.73032c-1.87935,12.004,3.0189,22.74061,3.0189,22.74061s7.9453-8.72583,9.82465-20.72986-3.01891-22.7406-3.01891-22.7406S834.78423,543.7263,832.90487,555.73032Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M800.2177,584.88413c11.493,3.9422,22.91878.98963,22.91878.98963s-7.20793-9.34412-18.70088-13.28632-22.91879-.98962-22.91879-.98962S788.72475,580.94193,800.2177,584.88413Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M799.84846,661.04527a31.13456,31.13456,0,0,0,16.06421.69366,28.37373,28.37373,0,0,0-29.172-10.00629A31.13421,31.13421,0,0,0,799.84846,661.04527Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M566.4728,393.61993,502.0001,360.0942s-21.65069-23.84322-35.24783-34.61282-17.7827-2.85791-17.7827-2.85791l-5.71575,9.52636,13.81324,19.21174,37.3119,31.59606,66.66975,26.1135a10.572,10.572,0,1,0,5.42409-15.4512Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#9f616a"
                                />
                                <path
                                    d="M398.77329,364.6245l-3.81708-23.35225-10.778-2.69445s-8.5538-2.63477-10.55317,14.59512-.44926,49.39894-.44926,49.39894l-21.88282,69.29535a10.59585,10.59585,0,1,0,14.7613,7.09018l28.6776-65.60761Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#9f616a"
                                />
                                <polygon
                                    points="246.545 453.915 260.648 453.914 267.358 399.515 246.542 399.516 246.545 453.915"
                                    fill="#9f616a"
                                />
                                <path
                                    d="M484.32357,687.733l27.7751-.00113h.00112a17.70143,17.70143,0,0,1,17.70047,17.70019v.57519l-45.47584.00169Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#2f2e41"
                                />
                                <polygon
                                    points="92.716 453.915 106.82 453.914 113.529 399.515 92.714 399.516 92.716 453.915"
                                    fill="#9f616a"
                                />
                                <path
                                    d="M330.49508,687.733l27.7751-.00113h.00112a17.70142,17.70142,0,0,1,17.70046,17.70019v.57519l-45.47584.00169Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M403.71931,317.97643l-23.39272,19.96935,19.19785,60.7527,4.33173,13.56614s-26.45012,24.38714-42.81585,92.5121-43.13826,158.64663-43.13826,158.64663l56.51213,16.17685L420.3905,525.49444l54.07908,120.90065,6.2437,35.75935,48.12555-14.19022-11.35218-89.68217-56.76087-155.241,5.89612-41.15164s8.85413-20.54034-6.5275-42.28684l-4.82467-20.43392-17.28336-4.25706Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M442.58173,307.12036H379.33625a4.91252,4.91252,0,0,1-4.907-4.907v-27.261a36.52972,36.52972,0,0,1,73.05944,0v27.261A4.91252,4.91252,0,0,1,442.58173,307.12036Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#2f2e41"
                                />
                                <circle
                                    cx="418.46547"
                                    cy="279.70344"
                                    r="26.78231"
                                    transform="translate(-269.05901 274.30256) rotate(-61.3368)"
                                    fill="#9f616a"
                                />
                                <path
                                    d="M456.13076,277.6785H417.4577l-.39667-5.5523-1.98281,5.5523H409.1234l-.78589-11.00449-3.92994,11.00449h-11.5223v-.54522a28.92911,28.92911,0,0,1,28.89638-28.89665h5.45246a28.92933,28.92933,0,0,1,28.89665,28.89665Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M417.14119,312.20917a5.01187,5.01187,0,0,1-.86841-.07667l-28.31815-4.99643V260.3345h31.17283l-.77177.89983c-10.73774,12.523-2.6481,32.82925,3.12969,43.81883a4.83436,4.83436,0,0,1-.38416,5.13274A4.88728,4.88728,0,0,1,417.14119,312.20917Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M651.33014,557.56836,403.14905,645.3151a24.56673,24.56673,0,0,1-31.3153-14.95575l-42.634-120.58516a24.56674,24.56674,0,0,1,14.95574-31.3153l248.18109-87.74674a24.56674,24.56674,0,0,1,31.31531,14.95575l42.634,120.58516A24.56674,24.56674,0,0,1,651.33014,557.56836Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#fff"
                                />
                                <path
                                    d="M666.28589,526.25306l.22556.638A23.43487,23.43487,0,0,1,652.224,556.7949L402.802,644.98037a23.43325,23.43325,0,0,1-29.90121-14.28054l-.22556-.638Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#f2f2f2"
                                />
                                <path
                                    d="M387.66123,506.4563c-16.45068,10.82463-37.53445,2.67823-44.90812-9.18765l1.1756-.668C357.93373,487.87106,378.73225,492.73472,387.66123,506.4563Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M593.81186,537.16748c-4.02657,1.42363-7.652,1.35832-10.77693-.19413-7.06267-3.50917-10.37681-13.91434-13.03981-22.27525-.77484-2.43225-1.50665-4.7299-2.25186-6.60766l-.01067-.02855a14.97351,14.97351,0,0,1,9.07371-19.01164l33.38227-11.80262c4.02143-1.42181,7.643-1.35706,10.76531.19286,7.06092,3.50478,10.37781,13.90628,13.04317,22.264.77716,2.4372,1.51123,4.73944,2.25914,6.6201a14.98288,14.98288,0,0,1-9.07011,19.04308ZM569.13122,507.5562c.76229,1.92294,1.5,4.2389,2.28081,6.69062,2.57783,8.09332,5.78611,18.16585,12.28461,21.39462,2.78927,1.38574,5.93592,1.42625,9.61931.124l33.37233-11.7991a13.48617,13.48617,0,0,0,8.17505-17.12113c-.75629-1.9-1.498-4.22613-2.2833-6.689-2.58-8.09024-5.79087-18.15914-12.28746-21.3836-2.78646-1.38327-5.92989-1.42337-9.60814-.12289l-33.38034,11.80193A13.48267,13.48267,0,0,0,569.13122,507.5562Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M380.74224,510.354a33.179,33.179,0,0,1-18.23869,1.00256c-8.84066-1.94125-16.86391-7.21969-20.93832-13.7745l-.40839-.657,1.83484-1.04308c14.21571-8.85452,35.53266-4.05419,44.73394,10.08245l.40344.61988-.61776.40674A31.21918,31.21918,0,0,1,380.74224,510.354Zm-37.4934-12.90734c3.98747,5.92469,11.40744,10.66391,19.57373,12.45732a30.99955,30.99955,0,0,0,23.23925-3.75028c-9.00057-13.01914-28.94151-17.3378-42.29584-9.00152Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M389.46138,596.90244a12.3428,12.3428,0,0,1-12.55072-2.0841,15.43877,15.43877,0,0,1-5.05061-14.27088,12.38646,12.38646,0,0,1,8.69877-9.60283l44.47892-15.72594a12.40825,12.40825,0,0,1,12.7924,2.0129,15.43853,15.43853,0,0,1,5.04415,14.27088c-.87831,4.58992-3.97714,7.9712-8.70064,9.58963L389.6939,596.81833Q389.5775,596.86121,389.46138,596.90244Zm-8.62591-24.48012a10.93106,10.93106,0,0,0-7.51452,8.40389,13.90851,13.90851,0,0,0,4.55026,12.85649,10.94121,10.94121,0,0,0,11.31642,1.73717l44.50084-15.73368a10.95848,10.95848,0,0,0,7.72506-8.46331,13.90705,13.90705,0,0,0-4.54468-12.85654,10.98845,10.98845,0,0,0-11.32542-1.749L381.03984,572.352c-.06831.023-.13685.04645-.20439.07034Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M594.10935,501.6884l-14.02153,4.95745a3.718,3.718,0,1,1-2.47873-7.01077l14.02153-4.95744a3.718,3.718,0,1,1,2.47873,7.01076Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M598.0753,512.90563l-14.02153,4.95744a3.718,3.718,0,1,1-2.47872-7.01076l14.02153-4.95745a3.718,3.718,0,0,1,2.47872,7.01077Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M602.04125,524.12285l-14.02153,4.95745a3.718,3.718,0,0,1-2.47872-7.01077l14.02153-4.95744a3.718,3.718,0,1,1,2.47872,7.01076Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M618.647,493.01288l-14.02153,4.95744a3.718,3.718,0,1,1-2.47872-7.01076l14.02153-4.95744a3.718,3.718,0,1,1,2.47872,7.01076Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M622.613,504.2301l-14.02153,4.95745a3.718,3.718,0,1,1-2.47872-7.01077l14.02153-4.95744a3.718,3.718,0,0,1,2.47872,7.01076Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M626.57893,515.44733l-14.02153,4.95744a3.718,3.718,0,1,1-2.47872-7.01076l14.02153-4.95745a3.718,3.718,0,0,1,2.47872,7.01077Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#4338CA"
                                />
                                <rect
                                    x="330.66409"
                                    y="483.77871"
                                    width="311.42176"
                                    height="1.48721"
                                    transform="matrix(0.94281, -0.33334, 0.33334, 0.94281, -375.06903, -48.58413)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M651.33014,557.56836,403.14905,645.3151a24.56673,24.56673,0,0,1-31.3153-14.95575l-42.634-120.58516a24.56674,24.56674,0,0,1,14.95574-31.3153l248.18109-87.74674a24.56674,24.56674,0,0,1,31.31531,14.95575l42.634,120.58516A24.56674,24.56674,0,0,1,651.33014,557.56836ZM344.65123,479.861a23.078,23.078,0,0,0-14.04934,29.41741l42.634,120.58516a23.078,23.078,0,0,0,29.41741,14.04933L650.8344,556.16621a23.07794,23.07794,0,0,0,14.04933-29.41741l-42.634-120.58516a23.078,23.078,0,0,0-29.41741-14.04934Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M979.37629,706.42268h-737a1,1,0,0,1,0-2h737a1,1,0,0,1,0,2Z"
                                    transform="translate(-241.37629 -238.42268)"
                                    fill="#cbcbcb"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:px-6">
                        <div className="text-center xl:w-3/4 md:w-2/3 md:mr-auto md:mx-0 mx-auto">
                            <h3 className="text-xl font-extrabold mb-4 font-mono">
                                <FormattedMessage defaultMessage="Zahlungsmethoden" />
                            </h3>
                            <p className="sm:text-lg text-base leading-normal">
                                <FormattedMessage defaultMessage="Hinterlege die gewünschten Zahlungsmethoden und empfange Zahlungen direkt auf dein Geschäftskonto." />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center hidden md:flex justify-center">
                    <svg
                        width="494"
                        height="194"
                        viewBox="0 0 494 194"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.35355 193.354C4.15829 193.549 3.84171 193.549 3.64645 193.354L0.464466 190.172C0.269204 189.976 0.269204 189.66 0.464466 189.464C0.659728 189.269 0.976311 189.269 1.17157 189.464L4 192.293L6.82843 189.464C7.02369 189.269 7.34027 189.269 7.53553 189.464C7.7308 189.66 7.7308 189.976 7.53553 190.172L4.35355 193.354ZM493.5 0V2.13362H492.5V0H493.5ZM493.5 6.40085V10.6681H492.5V6.40085H493.5ZM493.5 14.9353V19.2025H492.5V14.9353H493.5ZM493.5 23.4698V27.737H492.5V23.4698H493.5ZM493.5 32.0042V36.2715H492.5V32.0042H493.5ZM493.5 40.5387V44.8059H492.5V40.5387H493.5ZM493.5 49.0732V53.3404H492.5V49.0732H493.5ZM493.5 57.6076V59.7412H492.5V57.6076H493.5ZM493.5 59.7412C493.5 60.4076 493.484 61.0703 493.452 61.7289L492.453 61.6806C492.484 61.0381 492.5 60.3915 492.5 59.7412H493.5ZM493.067 65.6854C492.872 67.0071 492.614 68.3081 492.295 69.5851L491.325 69.3428C491.636 68.0976 491.888 66.8289 492.077 65.5399L493.067 65.6854ZM491.143 73.3895C490.694 74.6432 490.185 75.8683 489.62 77.0614L488.716 76.6333C489.268 75.4698 489.764 74.2751 490.201 73.0526L491.143 73.3895ZM487.743 80.5654C487.059 81.704 486.321 82.8062 485.532 83.8684L484.729 83.2721C485.499 82.236 486.219 81.161 486.886 80.0505L487.743 80.5654ZM483.009 86.9395C482.118 87.9215 481.18 88.8595 480.198 89.7501L479.526 89.0093C480.484 88.1406 481.399 87.2256 482.268 86.2677L483.009 86.9395ZM477.127 92.2733C476.065 93.0623 474.963 93.8006 473.824 94.4845L473.309 93.6272C474.42 92.9602 475.495 92.2402 476.531 91.4705L477.127 92.2733ZM470.32 96.3612C469.127 96.9265 467.902 97.4352 466.648 97.8839L466.311 96.9423C467.534 96.5048 468.729 96.0088 469.892 95.4575L470.32 96.3612ZM462.844 99.0365C461.567 99.3554 460.266 99.6136 458.944 99.8081L458.799 98.8187C460.088 98.6291 461.356 98.3772 462.602 98.0663L462.844 99.0365ZM454.988 100.193C454.329 100.225 453.666 100.241 453 100.241V99.2413C453.65 99.2413 454.297 99.2255 454.939 99.1945L454.988 100.193ZM453 100.241H450.995V99.2413H453V100.241ZM446.985 100.241H442.975V99.2413H446.985V100.241ZM438.966 100.241H434.956V99.2413H438.966V100.241ZM430.946 100.241H426.936V99.2413H430.946V100.241ZM422.926 100.241H418.917V99.2413H422.926V100.241ZM414.907 100.241H410.897V99.2413H414.907V100.241ZM406.887 100.241H402.877V99.2413H406.887V100.241ZM398.868 100.241H394.858V99.2413H398.868V100.241ZM390.848 100.241H386.838V99.2413H390.848V100.241ZM382.828 100.241H378.819V99.2413H382.828V100.241ZM374.809 100.241H370.799V99.2413H374.809V100.241ZM366.789 100.241H362.779V99.2413H366.789V100.241ZM358.77 100.241H354.76V99.2413H358.77V100.241ZM350.75 100.241H346.74V99.2413H350.75V100.241ZM342.73 100.241H338.721V99.2413H342.73V100.241ZM334.711 100.241H330.701V99.2413H334.711V100.241ZM326.691 100.241H322.681V99.2413H326.691V100.241ZM318.672 100.241H314.662V99.2413H318.672V100.241ZM310.652 100.241H306.642V99.2413H310.652V100.241ZM302.632 100.241H298.623V99.2413H302.632V100.241ZM294.613 100.241H290.603V99.2413H294.613V100.241ZM286.593 100.241H282.583V99.2413H286.593V100.241ZM278.574 100.241H274.564V99.2413H278.574V100.241ZM270.554 100.241H266.544V99.2413H270.554V100.241ZM262.534 100.241H258.525V99.2413H262.534V100.241ZM254.515 100.241H250.505V99.2413H254.515V100.241ZM246.495 100.241H242.485V99.2413H246.495V100.241ZM238.476 100.241H234.466V99.2413H238.476V100.241ZM230.456 100.241H226.446V99.2413H230.456V100.241ZM222.436 100.241H218.427V99.2413H222.436V100.241ZM214.417 100.241H210.407V99.2413H214.417V100.241ZM206.397 100.241H202.387V99.2413H206.397V100.241ZM198.378 100.241H194.368V99.2413H198.378V100.241ZM190.358 100.241H186.348V99.2413H190.358V100.241ZM182.338 100.241H178.329V99.2413H182.338V100.241ZM174.319 100.241H170.309V99.2413H174.319V100.241ZM166.299 100.241H162.29V99.2413H166.299V100.241ZM158.28 100.241H154.27V99.2413H158.28V100.241ZM150.26 100.241H146.25V99.2413H150.26V100.241ZM142.241 100.241H138.231V99.2413H142.241V100.241ZM134.221 100.241H130.211V99.2413H134.221V100.241ZM126.201 100.241H122.192V99.2413H126.201V100.241ZM118.182 100.241H114.172V99.2413H118.182V100.241ZM110.162 100.241H106.152V99.2413H110.162V100.241ZM102.143 100.241H98.1328V99.2413H102.143V100.241ZM94.123 100.241H90.1132V99.2413H94.123V100.241ZM86.1034 100.241H82.0936V99.2413H86.1034V100.241ZM78.0838 100.241H74.074V99.2413H78.0838V100.241ZM70.0642 100.241H66.0544V99.2413H70.0642V100.241ZM62.0446 100.241H58.0348V99.2413H62.0446V100.241ZM54.025 100.241H50.0152V99.2413H54.025V100.241ZM46.0054 100.241H44V99.2413H46.0054V100.241ZM44 100.241C43.3497 100.241 42.7031 100.257 42.0606 100.288L42.0123 99.2892C42.6709 99.2574 43.3336 99.2413 44 99.2413V100.241ZM38.2013 100.664C36.9124 100.853 35.6437 101.105 34.3984 101.416L34.1562 100.446C35.4332 100.127 36.7341 99.8689 38.0558 99.6745L38.2013 100.664ZM30.6887 102.54C29.4661 102.978 28.2715 103.474 27.108 104.025L26.6798 103.121C27.8729 102.556 29.098 102.047 30.3517 101.599L30.6887 102.54ZM23.6907 105.855C22.5802 106.522 21.5052 107.242 20.4691 108.012L19.8728 107.209C20.935 106.42 22.0372 105.682 23.1758 104.998L23.6907 105.855ZM17.4735 110.473C16.5156 111.342 15.6006 112.257 14.7319 113.215L13.9912 112.543C14.8817 111.561 15.8198 110.623 16.8017 109.732L17.4735 110.473ZM12.2707 116.21C11.5011 117.246 10.781 118.321 10.114 119.432L9.25676 118.917C9.94066 117.778 10.6789 116.676 11.468 115.614L12.2707 116.21ZM8.28373 122.849C7.73247 124.013 7.23642 125.207 6.79892 126.43L5.85739 126.093C6.30605 124.839 6.81475 123.614 7.38003 122.421L8.28373 122.849ZM5.67496 130.14C5.36401 131.385 5.11215 132.654 4.92255 133.943L3.9332 133.797C4.12761 132.475 4.38587 131.174 4.70476 129.897L5.67496 130.14ZM4.54677 137.802C4.51571 138.444 4.5 139.091 4.5 139.741H3.5C3.5 139.075 3.5161 138.412 3.54793 137.754L4.54677 137.802ZM4.5 139.741V141.643H3.5V139.741H4.5ZM4.5 145.448V149.252H3.5V145.448H4.5ZM4.5 153.056V156.86H3.5V153.056H4.5ZM4.5 160.664V164.469H3.5V160.664H4.5ZM4.5 168.273V172.077H3.5V168.273H4.5ZM4.5 175.881V179.685H3.5V175.881H4.5ZM4.5 183.49V187.294H3.5V183.49H4.5ZM4.5 191.098V193H3.5V191.098H4.5Z"
                            fill="#BFBFBF"
                        ></path>
                    </svg>
                </div>
                <div className="flex justify-center my-5 md:hidden">
                    <svg
                        width="16"
                        height="104"
                        viewBox="0 0 16 104"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.64645 103.354C7.84171 103.549 8.15829 103.549 8.35355 103.354L11.5355 100.172C11.7308 99.9763 11.7308 99.6597 11.5355 99.4645C11.3403 99.2692 11.0237 99.2692 10.8284 99.4645L8 102.293L5.17157 99.4645C4.97631 99.2692 4.65973 99.2692 4.46447 99.4645C4.2692 99.6597 4.2692 99.9763 4.46447 100.172L7.64645 103.354ZM8.5 103L8.5 100.425L7.5 100.425L7.5 103H8.5ZM8.5 95.275L8.5 90.125H7.5L7.5 95.275H8.5ZM8.5 84.975L8.5 79.825L7.5 79.825L7.5 84.975L8.5 84.975ZM8.5 74.675L8.5 69.525L7.5 69.525L7.5 74.675H8.5ZM8.5 64.375L8.5 59.225L7.5 59.225L7.5 64.375L8.5 64.375ZM8.5 54.075L8.5 48.925L7.5 48.925L7.5 54.075L8.5 54.075ZM8.5 43.775L8.5 38.625L7.5 38.625L7.5 43.775L8.5 43.775ZM8.5 33.475L8.5 28.325H7.5L7.5 33.475L8.5 33.475ZM8.5 23.175L8.5 18.025H7.5L7.5 23.175H8.5ZM8.5 12.875L8.5 7.72498L7.5 7.72498L7.5 12.875H8.5ZM8.5 2.57498L8.5 0L7.5 0L7.5 2.57498L8.5 2.57498ZM7.29289 103.707C7.68342 104.098 8.31658 104.098 8.70711 103.707L15.0711 97.3431C15.4616 96.9526 15.4616 96.3195 15.0711 95.9289C14.6805 95.5384 14.0474 95.5384 13.6569 95.9289L8 101.586L2.34315 95.9289C1.95262 95.5384 1.31946 95.5384 0.928932 95.9289C0.538408 96.3195 0.538408 96.9526 0.928932 97.3431L7.29289 103.707ZM9 103L9 100.425L7 100.425L7 103L9 103ZM9 95.275L9 90.125L7 90.125L7 95.275L9 95.275ZM9 84.975L9 79.825L7 79.825L7 84.975L9 84.975ZM9 74.675L9 69.525L7 69.525L7 74.675L9 74.675ZM9 64.375L9 59.225H7L7 64.375L9 64.375ZM9 54.075L9 48.925H7L7 54.075H9ZM9 43.775L9 38.625H7L7 43.775H9ZM9 33.475L9 28.325H7L7 33.475H9ZM9 23.175L9 18.025H7L7 23.175H9ZM9 12.875L9 7.72498L7 7.72498L7 12.875L9 12.875ZM9 2.57498L9 0L7 0L7 2.57498L9 2.57498Z"
                            fill="#BFBFBF"
                        ></path>
                    </svg>
                </div>
                <div className="flex flex-wrap-reverse items-center py-10 px-4">
                    <div className="text-centre w-full md:w-1/2 md:px-6">
                        <div className="text-center xl:w-3/4 md:w-2/3 md:ml-auto md:mx-0 mx-auto">
                            <h3 className="text-xl font-extrabold mb-4 font-mono">
                                <FormattedMessage defaultMessage="Umsatzsteigerung" />
                            </h3>
                            <p className="sm:text-lg text-base leading-normal">
                                <FormattedMessage defaultMessage="Steigere deinen Umsatz mit unserem provisionsfreien Bestellsystem." />
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pr-6 lg:pl-12 mb-6 md:mb-0">
                        <div className="xl:w-3/4 md:w-full w-2/3 md:mr-auto md:mx-0 mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10/12 h-full"
                                viewBox="0 0 763.05693 458"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <path
                                    d="M266.47153,317a48,48,0,1,1,48-48A48.05437,48.05437,0,0,1,266.47153,317Zm0-94a46,46,0,1,0,46,46A46.05223,46.05223,0,0,0,266.47153,223Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#f2f2f2"
                                />
                                <path
                                    d="M592.47153,289a24,24,0,1,1,24-24A24.02734,24.02734,0,0,1,592.47153,289Zm0-46a22,22,0,1,0,22,22A22.0249,22.0249,0,0,0,592.47153,243Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#f2f2f2"
                                />
                                <path
                                    d="M761.47153,406a27,27,0,1,1,27-27A27.03062,27.03062,0,0,1,761.47153,406Zm0-52a25,25,0,1,0,25,25A25.02817,25.02817,0,0,0,761.47153,354Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#f2f2f2"
                                />
                                <path
                                    d="M980.52847,679h-225a1,1,0,0,1,0-2h225a1,1,0,0,1,0,2Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#ccc"
                                />
                                <circle
                                    cx="640.91705"
                                    cy="128.68583"
                                    r="24.56103"
                                    fill="#ffb8b8"
                                />
                                <polygon
                                    points="643.465 420.343 631.857 424.285 611.124 381.386 628.257 375.567 643.465 420.343"
                                    fill="#ffb8b8"
                                />
                                <path
                                    d="M843.0715,642.98141h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H828.18465a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,843.0715,642.98141Z"
                                    transform="translate(-382.63173 86.1046) rotate(-18.76035)"
                                    fill="#2f2e41"
                                />
                                <polygon
                                    points="669.694 444.575 657.45 445.19 649.249 398.255 667.321 397.346 669.694 444.575"
                                    fill="#ffb8b8"
                                />
                                <path
                                    d="M867.3677,662.90195h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H852.48084a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,867.3677,662.90195Z"
                                    transform="translate(-251.0201 -176.39845) rotate(-2.87712)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M815.30049,509.63a10.05579,10.05579,0,0,0-.46773-15.41224l11.674-33.77419-17.99152,4.59774L800.18772,496.409a10.11027,10.11027,0,0,0,15.11277,13.221Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#ffb8b8"
                                />
                                <path
                                    d="M887.02144,651.42383a4.54354,4.54354,0,0,1-.47412-.02539l-16.6206-1.75977a4.47242,4.47242,0,0,1-3.99805-3.97363L853.08394,531.15527l-9.29443,31.335,17.32861,61.583a4.50019,4.50019,0,0,1-3.81787,5.68946l-16.84766,1.93652a4.523,4.523,0,0,1-4.86328-3.31543l-18.40869-69.30274a4.48241,4.48241,0,0,1-.11133-1.748l8.27393-62.19873,61.71387,4.94873,4.4624,146.70312a4.50044,4.50044,0,0,1-4.49805,4.6377Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M865.68843,510.71875c-20.67578,0-44.08447-7.98877-45.502-8.47949l-.41015-.14209L843.101,382.41309l.4292.01757c9.24365.375,34.46924.56739,34.72315.56934l.45263.00342,9.72266,105.61865,1.73779,15.44873-.21289.17236C884.00582,509.05176,875.13228,510.71875,865.68843,510.71875Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M828.3359,500.37549,813.74654,494.499l7.436-89.94384a14.85637,14.85637,0,0,1,6.47412-11.10352l7.67724-5.22461v0a4.86843,4.86843,0,0,1,4.82712-6.23967l2.19876.07074a2.49979,2.49979,0,0,1,3.82715,2.66064l-.48291,9.5293Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M820.97408,484.251l-19.04858-.80225,6.17065-39.69238,5.11328-37.34864a8.92423,8.92423,0,0,1,11.57764-7.8457h0a8.917,8.917,0,0,1,6.17431,9.647l-5.17968,40.46729Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M851.13619,501.751l-.1294-.40088c-.08837-.27442-8.67285-27.81153,5.69141-60.67188l7.20313-35.82568,6.15562-22.49493a2.68922,2.68922,0,0,1,1.63131-1.77293,2.47718,2.47718,0,0,1,2.64861.68046l0,0a17.19838,17.19838,0,0,1,12.85951,1.28589l8.64469,4.55386a9.81489,9.81489,0,0,1,4.98163,10.923l-11.81543,50.42285,5.74365,47.09717Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M863.71637,482.33769a10.05578,10.05578,0,0,0,11.11782-10.6841l26.7561-19.82058-9.35261-4.4342-28.85136,14.862a10.11028,10.11028,0,0,0,.33005,20.07692Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#ffb8b8"
                                />
                                <path
                                    d="M880.49068,473.46533l-9.03662-16.86914,22.28711-14.668-10.876-39.00976A11.79539,11.79539,0,0,1,891.895,388.187h0a11.8273,11.8273,0,0,1,13.5,7.76416l14.6748,43.13526a4.49921,4.49921,0,0,1-1.51172,5.01269Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M861.12673,354.89533c-2.94426.38308-5.1652-2.62934-6.19529-5.414s-1.81495-6.02657-4.37478-7.53078c-3.49727-2.05506-7.97186.41663-11.97116-.2614-4.51644-.7657-7.453-5.55225-7.68312-10.12736s1.59053-8.9754,3.377-13.19361l.62366,5.24227a10.39577,10.39577,0,0,1,4.54288-9.08678l-.80385,7.69223a8.16418,8.16418,0,0,1,9.39248-6.75554l-.1266,4.58332c5.2165-.6203,10.47858-1.24146,15.71053-.76889s10.50043,2.12792,14.4658,5.57356c5.93158,5.15414,8.09792,13.641,7.37063,21.46535s-3.95715,15.17468-7.32339,22.27519c-.847,1.78651-2.01841,3.80245-3.98237,4.03-1.76463.20448-3.3793-1.27064-3.92787-2.96026a10.7299,10.7299,0,0,1,.04764-5.271c.49629-2.63729,1.12192-5.33294.6553-7.97564s-2.36777-5.25419-5.03173-5.57806-5.38987,2.72118-4.10908,5.0794Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M539.78148,624.57717l-9.56074-4.02569-6.55863-47.92811H436.32217l-7.10907,47.7323-8.55359,4.27673a2.0312,2.0312,0,0,0,.90847,3.84791H538.99351A2.03109,2.03109,0,0,0,539.78148,624.57717Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#e6e6e6"
                                />
                                <path
                                    d="M694.99055,579h-429.038a8.50008,8.50008,0,0,1-8.481-8.5V510h446v60.5A8.50016,8.50016,0,0,1,694.99055,579Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#ccc"
                                />
                                <path
                                    d="M703.92,538.59375H257.07993V279.72705a10.25845,10.25845,0,0,1,10.247-10.24658H693.673A10.25855,10.25855,0,0,1,703.92,279.72705Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M677.232,519.80518H283.76792a7.90831,7.90831,0,0,1-7.89966-7.89942V296.16846a7.90873,7.90873,0,0,1,7.89966-7.89991H677.232a7.90873,7.90873,0,0,1,7.89966,7.89991v215.7373A7.90831,7.90831,0,0,1,677.232,519.80518Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#fff"
                                />
                                <path
                                    d="M673.52847,628.98031h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#ccc"
                                />
                                <path
                                    d="M640.26763,493H320.73223a1,1,0,0,1-1-1V338.84668a1,1,0,0,1,2,0V491h318.5354a1,1,0,0,1,0,2Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M389.003,482H359.94a2.97182,2.97182,0,0,1-2.96851-2.96826V438.96826A2.97182,2.97182,0,0,1,359.94,436h29.063a2.97181,2.97181,0,0,1,2.9685,2.96826v40.06348A2.97181,2.97181,0,0,1,389.003,482Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M442.003,482H412.94a2.97182,2.97182,0,0,1-2.96851-2.96826V400.96826A2.97182,2.97182,0,0,1,412.94,398h29.063a2.97181,2.97181,0,0,1,2.9685,2.96826v78.06348A2.97181,2.97181,0,0,1,442.003,482Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M495.003,482H465.94a2.97182,2.97182,0,0,1-2.96851-2.96826V438.96826A2.97182,2.97182,0,0,1,465.94,436h29.063a2.97181,2.97181,0,0,1,2.9685,2.96826v40.06348A2.97181,2.97181,0,0,1,495.003,482Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M548.003,482H518.94a2.90686,2.90686,0,0,1-2.96851-2.83379V385.83379A2.90686,2.90686,0,0,1,518.94,383h29.063a2.90685,2.90685,0,0,1,2.9685,2.83379v93.33242A2.90685,2.90685,0,0,1,548.003,482Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M601.003,482H571.94a2.97182,2.97182,0,0,1-2.96851-2.96826V358.96826A2.97182,2.97182,0,0,1,571.94,356h29.063a2.97181,2.97181,0,0,1,2.9685,2.96826V479.03174A2.97181,2.97181,0,0,1,601.003,482Z"
                                    transform="translate(-218.47153 -221)"
                                    fill="#4338CA"
                                />
                                <circle
                                    cx="156"
                                    cy="197"
                                    r="6"
                                    fill="#3f3d56"
                                />
                                <circle
                                    cx="209"
                                    cy="158"
                                    r="6"
                                    fill="#3f3d56"
                                />
                                <circle
                                    cx="262"
                                    cy="197"
                                    r="6"
                                    fill="#3f3d56"
                                />
                                <circle
                                    cx="315"
                                    cy="139"
                                    r="6"
                                    fill="#3f3d56"
                                />
                                <circle
                                    cx="368"
                                    cy="117"
                                    r="6"
                                    fill="#3f3d56"
                                />
                                <polygon
                                    points="262.126 198.344 209 158.552 156.6 197.8 155.4 196.2 209 156.053 261.874 195.656 314.415 138.158 314.626 138.072 367.626 116.718 368.374 118.573 315.585 139.842 262.126 198.344"
                                    fill="#3f3d56"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="text-center hidden md:flex justify-center">
                    <svg
                        width="494"
                        height="194"
                        viewBox="0 0 494 194"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M489.646 193.354C489.842 193.549 490.158 193.549 490.354 193.354L493.536 190.172C493.731 189.976 493.731 189.66 493.536 189.464C493.34 189.269 493.024 189.269 492.828 189.464L490 192.293L487.172 189.464C486.976 189.269 486.66 189.269 486.464 189.464C486.269 189.66 486.269 189.976 486.464 190.172L489.646 193.354ZM0.5 0V2.13362H1.5V0H0.5ZM0.5 6.40085V10.6681H1.5V6.40085H0.5ZM0.5 14.9353V19.2025H1.5V14.9353H0.5ZM0.5 23.4698V27.737H1.5V23.4698H0.5ZM0.5 32.0042V36.2715H1.5V32.0042H0.5ZM0.5 40.5387V44.8059H1.5V40.5387H0.5ZM0.5 49.0732V53.3404H1.5V49.0732H0.5ZM0.5 57.6076V59.7412H1.5V57.6076H0.5ZM0.5 59.7412C0.5 60.4076 0.516099 61.0703 0.547933 61.7289L1.54677 61.6806C1.51571 61.0381 1.5 60.3915 1.5 59.7412H0.5ZM0.933197 65.6854C1.12761 67.0071 1.38587 68.3081 1.70476 69.5851L2.67497 69.3428C2.36401 68.0976 2.11216 66.8289 1.92255 65.5399L0.933197 65.6854ZM2.8574 73.3895C3.30605 74.6432 3.81476 75.8683 4.38003 77.0614L5.28373 76.6333C4.73248 75.4698 4.23642 74.2751 3.79892 73.0526L2.8574 73.3895ZM6.25676 80.5654C6.94066 81.704 7.67893 82.8062 8.46796 83.8684L9.27071 83.2721C8.50108 82.236 7.78102 81.161 7.11401 80.0505L6.25676 80.5654ZM10.9912 86.9395C11.8817 87.9215 12.8198 88.8595 13.8017 89.7501L14.4735 89.0093C13.5157 88.1406 12.6006 87.2256 11.7319 86.2677L10.9912 86.9395ZM16.8728 92.2733C17.935 93.0623 19.0372 93.8006 20.1758 94.4845L20.6907 93.6272C19.5802 92.9602 18.5052 92.2402 17.4692 91.4705L16.8728 92.2733ZM23.6798 96.3612C24.8729 96.9265 26.098 97.4352 27.3517 97.8839L27.6887 96.9423C26.4662 96.5048 25.2715 96.0088 24.108 95.4575L23.6798 96.3612ZM31.1562 99.0365C32.4332 99.3554 33.7341 99.6136 35.0558 99.8081L35.2013 98.8187C33.9124 98.6291 32.6437 98.3772 31.3985 98.0663L31.1562 99.0365ZM39.0123 100.193C39.6709 100.225 40.3336 100.241 41 100.241V99.2413C40.3497 99.2413 39.7031 99.2255 39.0606 99.1945L39.0123 100.193ZM41 100.241H43.0049V99.2413H41V100.241ZM47.0147 100.241H51.0245V99.2413H47.0147V100.241ZM55.0343 100.241H59.0441V99.2413H55.0343V100.241ZM63.0539 100.241H67.0637V99.2413H63.0539V100.241ZM71.0735 100.241H75.0833V99.2413H71.0735V100.241ZM79.0931 100.241H83.1029V99.2413H79.0931V100.241ZM87.1127 100.241H91.1225V99.2413H87.1127V100.241ZM95.1324 100.241H99.1422V99.2413H95.1324V100.241ZM103.152 100.241H107.162V99.2413H103.152V100.241ZM111.172 100.241H115.181V99.2413H111.172V100.241ZM119.191 100.241H123.201V99.2413H119.191V100.241ZM127.211 100.241H131.221V99.2413H127.211V100.241ZM135.23 100.241H139.24V99.2413H135.23V100.241ZM143.25 100.241H147.26V99.2413H143.25V100.241ZM151.27 100.241H155.279V99.2413H151.27V100.241ZM159.289 100.241H163.299V99.2413H159.289V100.241ZM167.309 100.241H171.319V99.2413H167.309V100.241ZM175.328 100.241H179.338V99.2413H175.328V100.241ZM183.348 100.241H187.358V99.2413H183.348V100.241ZM191.368 100.241H195.377V99.2413H191.368V100.241ZM199.387 100.241H203.397V99.2413H199.387V100.241ZM207.407 100.241H211.417V99.2413H207.407V100.241ZM215.426 100.241H219.436V99.2413H215.426V100.241ZM223.446 100.241H227.456V99.2413H223.446V100.241ZM231.466 100.241H235.475V99.2413H231.466V100.241ZM239.485 100.241H243.495V99.2413H239.485V100.241ZM247.505 100.241H251.515V99.2413H247.505V100.241ZM255.524 100.241H259.534V99.2413H255.524V100.241ZM263.544 100.241H267.554V99.2413H263.544V100.241ZM271.564 100.241H275.573V99.2413H271.564V100.241ZM279.583 100.241H283.593V99.2413H279.583V100.241ZM287.603 100.241H291.613V99.2413H287.603V100.241ZM295.622 100.241H299.632V99.2413H295.622V100.241ZM303.642 100.241H307.652V99.2413H303.642V100.241ZM311.662 100.241H315.671V99.2413H311.662V100.241ZM319.681 100.241H323.691V99.2413H319.681V100.241ZM327.701 100.241H331.71V99.2413H327.701V100.241ZM335.72 100.241H339.73V99.2413H335.72V100.241ZM343.74 100.241H347.75V99.2413H343.74V100.241ZM351.759 100.241H355.769V99.2413H351.759V100.241ZM359.779 100.241H363.789V99.2413H359.779V100.241ZM367.799 100.241H371.808V99.2413H367.799V100.241ZM375.818 100.241H379.828V99.2413H375.818V100.241ZM383.838 100.241H387.848V99.2413H383.838V100.241ZM391.857 100.241H395.867V99.2413H391.857V100.241ZM399.877 100.241H403.887V99.2413H399.877V100.241ZM407.897 100.241H411.906V99.2413H407.897V100.241ZM415.916 100.241H419.926V99.2413H415.916V100.241ZM423.936 100.241H427.946V99.2413H423.936V100.241ZM431.955 100.241H435.965V99.2413H431.955V100.241ZM439.975 100.241H443.985V99.2413H439.975V100.241ZM447.995 100.241H450V99.2413H447.995V100.241ZM450 100.241C450.65 100.241 451.297 100.257 451.939 100.288L451.988 99.2892C451.329 99.2574 450.666 99.2413 450 99.2413V100.241ZM455.799 100.664C457.088 100.853 458.356 101.105 459.602 101.416L459.844 100.446C458.567 100.127 457.266 99.8689 455.944 99.6745L455.799 100.664ZM463.311 102.54C464.534 102.978 465.729 103.474 466.892 104.025L467.32 103.121C466.127 102.556 464.902 102.047 463.648 101.599L463.311 102.54ZM470.309 105.855C471.42 106.522 472.495 107.242 473.531 108.012L474.127 107.209C473.065 106.42 471.963 105.682 470.824 104.998L470.309 105.855ZM476.526 110.473C477.484 111.342 478.399 112.257 479.268 113.215L480.009 112.543C479.118 111.561 478.18 110.623 477.198 109.732L476.526 110.473ZM481.729 116.21C482.499 117.246 483.219 118.321 483.886 119.432L484.743 118.917C484.059 117.778 483.321 116.676 482.532 115.614L481.729 116.21ZM485.716 122.849C486.268 124.013 486.764 125.207 487.201 126.43L488.143 126.093C487.694 124.839 487.185 123.614 486.62 122.421L485.716 122.849ZM488.325 130.14C488.636 131.385 488.888 132.654 489.077 133.943L490.067 133.797C489.872 132.475 489.614 131.174 489.295 129.897L488.325 130.14ZM489.453 137.802C489.484 138.444 489.5 139.091 489.5 139.741H490.5C490.5 139.075 490.484 138.412 490.452 137.754L489.453 137.802ZM489.5 139.741V141.643H490.5V139.741H489.5ZM489.5 145.448V149.252H490.5V145.448H489.5ZM489.5 153.056V156.86H490.5V153.056H489.5ZM489.5 160.664V164.469H490.5V160.664H489.5ZM489.5 168.273V172.077H490.5V168.273H489.5ZM489.5 175.881V179.685H490.5V175.881H489.5ZM489.5 183.49V187.294H490.5V183.49H489.5ZM489.5 191.098V193H490.5V191.098H489.5Z"
                            fill="#BFBFBF"
                        ></path>
                    </svg>
                </div>
                <div className="flex justify-center my-5 md:hidden">
                    <svg
                        width="16"
                        height="104"
                        viewBox="0 0 16 104"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.64645 103.354C7.84171 103.549 8.15829 103.549 8.35355 103.354L11.5355 100.172C11.7308 99.9763 11.7308 99.6597 11.5355 99.4645C11.3403 99.2692 11.0237 99.2692 10.8284 99.4645L8 102.293L5.17157 99.4645C4.97631 99.2692 4.65973 99.2692 4.46447 99.4645C4.2692 99.6597 4.2692 99.9763 4.46447 100.172L7.64645 103.354ZM8.5 103L8.5 100.425L7.5 100.425L7.5 103H8.5ZM8.5 95.275L8.5 90.125H7.5L7.5 95.275H8.5ZM8.5 84.975L8.5 79.825L7.5 79.825L7.5 84.975L8.5 84.975ZM8.5 74.675L8.5 69.525L7.5 69.525L7.5 74.675H8.5ZM8.5 64.375L8.5 59.225L7.5 59.225L7.5 64.375L8.5 64.375ZM8.5 54.075L8.5 48.925L7.5 48.925L7.5 54.075L8.5 54.075ZM8.5 43.775L8.5 38.625L7.5 38.625L7.5 43.775L8.5 43.775ZM8.5 33.475L8.5 28.325H7.5L7.5 33.475L8.5 33.475ZM8.5 23.175L8.5 18.025H7.5L7.5 23.175H8.5ZM8.5 12.875L8.5 7.72498L7.5 7.72498L7.5 12.875H8.5ZM8.5 2.57498L8.5 0L7.5 0L7.5 2.57498L8.5 2.57498ZM7.29289 103.707C7.68342 104.098 8.31658 104.098 8.70711 103.707L15.0711 97.3431C15.4616 96.9526 15.4616 96.3195 15.0711 95.9289C14.6805 95.5384 14.0474 95.5384 13.6569 95.9289L8 101.586L2.34315 95.9289C1.95262 95.5384 1.31946 95.5384 0.928932 95.9289C0.538408 96.3195 0.538408 96.9526 0.928932 97.3431L7.29289 103.707ZM9 103L9 100.425L7 100.425L7 103L9 103ZM9 95.275L9 90.125L7 90.125L7 95.275L9 95.275ZM9 84.975L9 79.825L7 79.825L7 84.975L9 84.975ZM9 74.675L9 69.525L7 69.525L7 74.675L9 74.675ZM9 64.375L9 59.225H7L7 64.375L9 64.375ZM9 54.075L9 48.925H7L7 54.075H9ZM9 43.775L9 38.625H7L7 43.775H9ZM9 33.475L9 28.325H7L7 33.475H9ZM9 23.175L9 18.025H7L7 23.175H9ZM9 12.875L9 7.72498L7 7.72498L7 12.875L9 12.875ZM9 2.57498L9 0L7 0L7 2.57498L9 2.57498Z"
                            fill="#BFBFBF"
                        ></path>
                    </svg>
                </div>
                <div className="md:flex items-center py-10 px-4">
                    <div className="md:w-1/2 md:pr-6 lg:pl-12 mb-6 md:mb-0">
                        <div className="xl:w-3/4 md:w-full w-2/3 md:ml-auto md:mx-0 mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10/12 h-full"
                                viewBox="0 0 786.81995 572.25773"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <circle
                                    cx="458.32136"
                                    cy="74.18162"
                                    r="26.70075"
                                    fill="#f2f2f2"
                                />
                                <path
                                    d="M872.03753,661.02307c39.6877-30.22889,58.64352-81.02546,46.77635-129.48234q-.44231-1.806-.93367-3.6038c-7.86742-28.76343-27.33167-56.10058-55.7-65.29129-23.81971-7.71694-49.81962-1.78274-74.66936-4.85149-48.78136-6.02417-86.60057-45.494-113.21115-86.81933-26.61064-41.32546-47.06182-87.58331-82.42157-121.72413-58.28479-56.27536-153.36192-68.39149-225.62671-31.76044C293.98673,254.12142,247.95487,335.39062,249.918,416.38554c1.96322,80.995,50.04632,158.43176,119.87492,199.517,25.65222,15.093,55.32138,25.78522,84.84826,22.04377,25.62011-3.24641,48.89908-17.01264,74.39861-21.09959,40.09115-6.42568,79.92687,11.70084,114.60268,32.82375,34.67571,21.12288,68.17007,46.15988,107.57436,55.95242C789.47831,715.13139,836.88051,687.80109,872.03753,661.02307Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#f2f2f2"
                                />
                                <path
                                    d="M815.016,219.19108c-.87006-.58-1.75-1.13-2.62006-1.69a380.24008,380.24008,0,0,0-80.31-38.93l-6.54,90.22h-41.46v-103.39c-2.61-.54-5.24-1.05-7.87-1.53v104.92H626.94587A102.26992,102.26992,0,0,1,524.67595,166.5212v-.0001c-2.64.57-5.26,1.18-7.88,1.83v100.44h-40.13l-6.23-86.03a380.8581,380.8581,0,0,0-81.94,43.53c-.44.3-.88.61-1.31.91-2.21,1.55-4.39,3.13-6.56,4.73v344.19h118.27l-2.09-28.95-11.5-158.95h231.59l-11.5,158.95-2.09,28.95h116.96v-353.45Q817.65591,220.90114,815.016,219.19108Zm-298.22,142.78h-33.39l-6.17-85.3h39.56Zm159.42,0h-56.08v-1.69a6.17975,6.17975,0,0,0-6.19-6.18h-24.38a6.17757,6.17757,0,0,0-6.18,6.18v1.69h-58.71v-85.3h151.54Zm7.87,0v-85.3h40.89l-6.17,85.3Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M206.59,598.16193a289.0029,289.0029,0,0,0,28.12,28.95l730.58,1a289.0029,289.0029,0,0,0,28.12-28.95Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M702.01993,505.46245v85.704a4.12233,4.12233,0,0,0,4.11906,4.11907H833.14348a4.12232,4.12232,0,0,0,4.11907-4.11907v-85.704a4.12433,4.12433,0,0,0-4.11907-4.11452H706.139A4.12434,4.12434,0,0,0,702.01993,505.46245Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M704.99939,506.52881V590.1092a2.20523,2.20523,0,0,0,2.20141,2.20141H832.08626a2.20522,2.20522,0,0,0,2.20141-2.20141V506.52881a2.20621,2.20621,0,0,0-2.20141-2.206H707.2008A2.20623,2.20623,0,0,0,704.99939,506.52881Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M699.36376,607.881a2.46985,2.46985,0,0,0,1.94346.92984H837.29917a2.5024,2.5024,0,0,0,2.44606-3.0157l-2.111-10.02722a2.50694,2.50694,0,0,0-1.55811-1.81784,2.42467,2.42467,0,0,0-.888-.1675H703.40985a2.42446,2.42446,0,0,0-.888.1675,2.50671,2.50671,0,0,0-1.55811,1.81784l-2.111,10.02722A2.5005,2.5005,0,0,0,699.36376,607.881Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#2f2e41"
                                />
                                <rect
                                    x="830.03379"
                                    y="595.58843"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1457.66604 1029.81882) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="821.65681"
                                    y="595.58843"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1440.91208 1029.81882) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="813.27982"
                                    y="595.58843"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1424.15811 1029.81882) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="804.90284"
                                    y="595.58843"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1407.40415 1029.81882) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="796.52586"
                                    y="595.58843"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1390.65018 1029.81882) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="788.14888"
                                    y="595.58843"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1373.89622 1029.81882) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="779.7719"
                                    y="595.58843"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1357.14226 1029.81882) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="771.39491"
                                    y="595.58843"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1340.38829 1029.81882) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="763.01793"
                                    y="595.58843"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1323.63433 1029.81882) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="754.64095"
                                    y="595.58843"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1306.88037 1029.81882) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="746.26397"
                                    y="595.58843"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1290.1264 1029.81882) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="737.88699"
                                    y="595.58843"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1273.37244 1029.81882) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="729.51001"
                                    y="595.58843"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1256.61847 1029.81882) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="721.13302"
                                    y="595.58843"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1239.86451 1029.81882) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="712.75604"
                                    y="595.58843"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1223.11055 1029.81882) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="704.37906"
                                    y="595.58843"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1206.35658 1029.81882) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="830.13277"
                                    y="599.77692"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1457.86401 1038.1958) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="821.75579"
                                    y="599.77692"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1441.11005 1038.1958) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="813.37881"
                                    y="599.77692"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1424.35608 1038.1958) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="805.00183"
                                    y="599.77692"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1407.60212 1038.1958) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="796.62485"
                                    y="599.77692"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1390.84816 1038.1958) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="788.24786"
                                    y="599.77692"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1374.09419 1038.1958) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="779.87088"
                                    y="599.77692"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1357.34023 1038.1958) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="771.4939"
                                    y="599.77692"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1340.58627 1038.1958) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="763.11692"
                                    y="599.77692"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1323.8323 1038.1958) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="754.73994"
                                    y="599.77692"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1307.07834 1038.1958) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="746.36295"
                                    y="599.77692"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1290.32437 1038.1958) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="737.98597"
                                    y="599.77692"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1273.57041 1038.1958) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="729.60899"
                                    y="599.77692"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1256.81645 1038.1958) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="721.23201"
                                    y="599.77692"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1240.06248 1038.1958) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="712.85503"
                                    y="599.77692"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1223.30852 1038.1958) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="704.47805"
                                    y="599.77692"
                                    width="4.18849"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1206.55456 1038.1958) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="760.60382"
                                    y="604.80311"
                                    width="33.50793"
                                    height="2.51309"
                                    rx="0.48819"
                                    transform="translate(1348.12555 1048.24818) rotate(-180)"
                                    fill="#3f3d56"
                                />
                                <rect
                                    x="515.63106"
                                    y="358.73707"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="548.15407"
                                    y="358.73707"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="557.36892"
                                    y="358.73707"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="524.47742"
                                    y="358.4768"
                                    width="20.79613"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="567.84144"
                                    y="358.4768"
                                    width="20.79613"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="524.30386"
                                    y="365.78373"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="556.82687"
                                    y="365.78373"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="566.04172"
                                    y="365.78373"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="533.15023"
                                    y="365.52345"
                                    width="20.79613"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="576.51424"
                                    y="365.52345"
                                    width="20.79613"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="532.97666"
                                    y="372.83038"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="565.49967"
                                    y="372.83038"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="574.71453"
                                    y="372.83038"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="541.82303"
                                    y="372.57011"
                                    width="20.79613"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="585.18704"
                                    y="372.57011"
                                    width="20.79613"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="541.64947"
                                    y="379.87703"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="574.17248"
                                    y="379.87703"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="583.38733"
                                    y="379.87703"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="550.49583"
                                    y="379.61676"
                                    width="20.79613"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="548.15407"
                                    y="407.89751"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="557.36892"
                                    y="407.89751"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="567.84144"
                                    y="408.15779"
                                    width="20.79613"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="515.63106"
                                    y="407.89751"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="524.47742"
                                    y="408.15779"
                                    width="20.79613"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="524.30386"
                                    y="400.85086"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="556.82687"
                                    y="400.85086"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="566.04172"
                                    y="400.85086"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="533.15023"
                                    y="401.11113"
                                    width="20.79613"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="532.97666"
                                    y="393.80421"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="565.49967"
                                    y="393.80421"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="574.71453"
                                    y="393.80421"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="541.82303"
                                    y="394.06448"
                                    width="20.79613"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="541.64947"
                                    y="386.75755"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="574.17248"
                                    y="386.75755"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="583.38733"
                                    y="386.75755"
                                    width="5.96585"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <rect
                                    x="550.49583"
                                    y="387.01783"
                                    width="20.79613"
                                    height="3.12216"
                                    rx="1.56108"
                                    fill="#fff"
                                />
                                <path
                                    d="M711.50727,654.35273l-13.34954-21.10162,41.902-33.40283,17.29534-19.16107a19.16138,19.16138,0,0,1,32.418,6.8279h0a19.16136,19.16136,0,0,1-11.57015,23.991l-27.3488,10.07535Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#ffb6b6"
                                />
                                <path
                                    d="M398.28,501.35193v102.56h71.85v-102.56a3.448,3.448,0,0,0-2.43-3.3,3.1749,3.1749,0,0,0-1.03-.16H401.75A3.46328,3.46328,0,0,0,398.28,501.35193Zm28.04,35.24a7.67033,7.67033,0,0,1,15.34,0v11.9a7.6701,7.6701,0,0,1-15.34,0Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M398.06006,600.632v9.89a1.94622,1.94622,0,0,0,1.93,1.94h68.43a1.93972,1.93972,0,0,0,1.93-1.94v-9.89Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M285.25,346.832V534.09192a9.00714,9.00714,0,0,0,9,9h277.5a9.0071,9.0071,0,0,0,9-9V346.832a9.01147,9.01147,0,0,0-9-8.99H294.25A9.01151,9.01151,0,0,0,285.25,346.832Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M291.76,349.16193v182.62a4.81833,4.81833,0,0,0,4.81,4.81H569.44a4.81829,4.81829,0,0,0,4.81-4.81v-182.62a4.82047,4.82047,0,0,0-4.81-4.82H296.57A4.82051,4.82051,0,0,0,291.76,349.16193Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#fff"
                                />
                                <path
                                    d="M342.4,611.79193a2.9484,2.9484,0,0,0,2.32,1.11h162.34a2.98725,2.98725,0,0,0,2.92-3.6l-2.52-11.97a2.99264,2.99264,0,0,0-1.86-2.17,2.89454,2.89454,0,0,0-1.06-.19995H347.23a2.8943,2.8943,0,0,0-1.06.19995,2.99239,2.99239,0,0,0-1.86,2.17l-2.52,11.97A2.985,2.985,0,0,0,342.4,611.79193Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M560.58451,369.49866H305.26115a1.0156,1.0156,0,0,1,0-2.0307H560.58451a1.0156,1.0156,0,0,1,0,2.0307Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#3f3d56"
                                />
                                <ellipse
                                    cx="116.05131"
                                    cy="192.32963"
                                    rx="5.95043"
                                    ry="6.08304"
                                    fill="#3f3d56"
                                />
                                <ellipse
                                    cx="136.60733"
                                    cy="192.32963"
                                    rx="5.95043"
                                    ry="6.08304"
                                    fill="#3f3d56"
                                />
                                <ellipse
                                    cx="157.16336"
                                    cy="192.32963"
                                    rx="5.95043"
                                    ry="6.08304"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M548.20637,351.622h-14.6a1.1053,1.1053,0,0,0,0,2.21h14.6a1.10511,1.10511,0,0,0,0-2.21Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M548.20637,355.772h-14.6a1.10527,1.10527,0,0,0,0,2.21h14.6a1.10508,1.10508,0,0,0,0-2.21Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M548.20637,359.92194h-14.6a1.1053,1.1053,0,0,0,0,2.21h14.6a1.10511,1.10511,0,0,0,0-2.21Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M900.18575,604.97238a6.41621,6.41621,0,0,0,6.1831,4.331l26.49183-.68178a6.3285,6.3285,0,0,0,5.98085-4.657l3.74888-40.08721a9.79409,9.79409,0,0,0,4.23793.87079,9.66133,9.66133,0,1,0-.4849-19.31658,8.18393,8.18393,0,0,0-1.73618.18056,6.54764,6.54764,0,0,0-4.87405-2.103l-40.75051,1.05229a5.85294,5.85294,0,0,0-1.00519.1248,6.36455,6.36455,0,0,0-4.87318,8.26464Zm43.17345-43.81684,2.66764-9.55274a6.50649,6.50649,0,0,0,.02036-3.37458c.12944-.00034.24363-.06169.37307-.062a6.91049,6.91049,0,0,1,.32357,13.81714A6.50527,6.50527,0,0,1,943.3592,561.15554Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M897.97751,544.68623c.86818,4.96412,10.62909,8.45387,22.36585,7.84729,10.79271-.49726,19.61745-4.287,21.23421-8.7785a6.02511,6.02511,0,0,0-1.84436-.24588l-40.75051,1.05229A5.85294,5.85294,0,0,0,897.97751,544.68623Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M922.49438,582.94415a.49659.49659,0,0,0,.15091-.06642l5.75315-3.76566a.49923.49923,0,0,0,.00032-.83621l-5.97978-3.91667a.49972.49972,0,1,0-.54792.83585l5.34091,3.49818-5.114,3.34794a.49991.49991,0,0,0,.39637.903Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M913.40762,583.36319a.5.5,0,0,0,.12608-.91842l-5.30306-3.04034,5.1256-3.80723a.49963.49963,0,1,0-.596-.80208l-5.73862,4.26265a.49951.49951,0,0,0,.04918.83476l5.96525,3.41968A.4997.4997,0,0,0,913.40762,583.36319Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M921.92215,586.24416a.48233.48233,0,0,0,.137-.05785.49976.49976,0,0,0,.16752-.68714l-8.15548-13.40836a.50026.50026,0,0,0-.85442.52058l8.15548,13.40835A.50035.50035,0,0,0,921.92215,586.24416Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#4338CA"
                                />
                                <rect
                                    x="209.38454"
                                    y="260.82713"
                                    width="50.71916"
                                    height="10.8457"
                                    rx="3.26417"
                                    fill="#4338CA"
                                />
                                <rect
                                    x="183.62601"
                                    y="282.51852"
                                    width="102.23622"
                                    height="10.8457"
                                    rx="3.26417"
                                    fill="#e6e6e6"
                                />
                                <rect
                                    x="183.62601"
                                    y="304.20991"
                                    width="102.23622"
                                    height="10.8457"
                                    rx="3.26417"
                                    fill="#e6e6e6"
                                />
                                <path
                                    d="M497.30123,540.717l.21675.68444.01142.02283,6.52515,19.838,7.50627,22.86094,14.1227,42.96133.13688,6.67346v.02283l1.04949,53.6845-2.90894,7.2781,3.274,11.93237s-1.50582-18.037-9.5824-7.67884c-4.57448,5.8864-9.92468,11.90961-14.31668,17.55642q9.59964,3.88436,19.50716,7.0271c1.426.45633,2.86334.88983,4.30071,1.32333q.46194.13692.924.27377a266.86342,266.86342,0,0,0,67.35086,10.82587c1.18637.03425,2.35.057,3.47932.07986.39932.01142.78714.02284,1.175.02284,1.27765.01142,2.54389.02277,3.82154.02277q3.86721,0,7.70018-.11405a266.85337,266.85337,0,0,0,56.09149-7.58613c-.12547-7.58606-.46768-16.44984-.9582-25.91819-.22817-4.64293-5.3502-9.67369-5.65823-14.53336-.21675-3.65047,4.38057-7.08419,4.141-10.79169-1.55143-22.82675-3.49075-14.06417-4.92813-30.22882q-.22245-2.37852-.41066-4.55165c-.924-10.381-1.56284-16.872-1.56284-16.872l6.13733-38.68338,9.6395-60.73442-.74153-1.22063-.83274-.41066-50.844-25.16532-2.76064-7.07276a10.97881,10.97881,0,0,0-10.14143-6.94731l-33.4929-.13688a10.93117,10.93117,0,0,0-8.90946,4.52888l-9.069,12.55978Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M533.40653,617.52479,525.8204,633.758l-5.179,11.08822-8.90939,46.646-4.46044,4.73414L503.45,679.467l-39.99772,8.88094c-1.31191-7.28951-.3512.24662-1.16117-7.75009.22817-.22817.46768-.45634.70727-.68451.63882-.59322,1.175-1.15218,1.1636-1.68831-.45633-27.58374.9126-74.52633,12.34311-102.96564a60.05328,60.05328,0,0,1,7.02709-13.1074c.22817-.308.44492-.61606.66167-.924,5.27034-7.3808,8.60136-14.64748,13.32415-19.81511v-.01142a.53028.53028,0,0,0,.07986-.07987.157.157,0,0,0,.04561-.03425l32.44341-17.20272,1.39177,39.10546.99247,28.10851Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M650.3914,622.13549l9.476,20.275,3.30742,7.06091,8.90681,46.64162,4.44575,4.72264,3.83039-16.75524,1.7998-.36918,32.4585-6.72243,9.46058,30.04631a17.984,17.984,0,0,0-3.26122-22.50556c-.64606-.58457-1.18444-1.15373-1.16913-1.69211.53847-32.4431-1.446-91.68363-19.36733-116.06588-5.69179-7.73777-9.1068-15.44474-14.07562-20.82885-.0154-.0153-.0154-.0307-.03071-.0307L674.0814,526.1139l-.73836-1.21533-.83066-.41528Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#3f3d56"
                                />
                                <circle
                                    id="a657ec4b-47ce-4d2a-9c58-81a811696ca9"
                                    data-name="Ellipse 5"
                                    cx="386.3965"
                                    cy="267.20052"
                                    r="44.55826"
                                    fill="#ffb6b6"
                                />
                                <path
                                    d="M653.21227,399.94791a3.75933,3.75933,0,0,0-2.69-1.19l.67-1.86a3.52769,3.52769,0,0,0-3.96-4.7l-2.44.47.23-1.63a3.53387,3.53387,0,0,0-4.73-3.82,3.76631,3.76631,0,0,1-3.24-.23,3.84647,3.84647,0,0,1-1.92-2.61005l-.85-4.1-.09-.22c-4.14-6.9-12.1-11.92-21.84-13.76-8.67005-1.65-17.56-.81-26.13-.02-3.4.32-7.24.68-10.44,2.64-2.72,1.68-5.02,5.04-4.55,8.43-8.45-2.59-17.51,2.58-22,9.1-5.32,7.76-6.19,17.48-6.33,25.08-.38,17.98,3.33,32.69,11,43.73.56.8.7,2.47,1.81,3.03l-.23-.37c1.24.62,2.5,1.62,2.03,2.69-1.35,3.08,7.62,9.89,13.94,12.14,11.53,4.11,26.86,3.76,37.64,2.28l.38-2.55c3.89-.53,6.63-1.54,7.4-3.12,1.36005-1.16,2.52-2.2,3.53-3.16l.01-.01c.02-.02.06-.05.08-.07,4.87-4.67,6-7.32995,6.51-11.37994.49-3.97-.38-8-1.27-11.63,18.74,2.9-7.38-19.96,10.08-24.38a5.434,5.434,0,0,1,.61-.15c.51-.12,1.02-.24,1.51-.38a26.44846,26.44846,0,0,0,6.72-2.87c4.88-2.97,6.49-6.91,9.01-11.35A3.42652,3.42652,0,0,0,653.21227,399.94791Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M750.58227,625.3079c-.01,1.75-.03,4.2-.11,7.23q-.015.63-.03,1.29c-.13,5.57-.26,10.24-.47,15.43-.01.36-.02.71-.04,1.07-.28,7.24-.72,15.67-1.48,29.02-1.41,24.66-3.87,3.39-6.34,12.04-.12.43-.25.94-.37,1.54a27.91582,27.91582,0,0,1-1.88,6.33c-1.31.78-2.66,1.53-3.99,2.28-3.79,2.11-7.63995,4.13995-11.51995,6.07-2.18006,1.08-4.37,2.14-6.57,3.16-.35.16-.69.32-1.03.47a270.88715,270.88715,0,0,1-34.75,13.26c-2.32.7-4.63,1.38-6.97,2.01-2.44.68-4.88,1.32-7.35,1.92a266.8933,266.8933,0,0,1-56.09,7.59c-2.55.08-5.12.11-7.7.11-1.28,0-2.54-.01-3.82-.02-.39,0-.78-.01-1.17-.02-1.13-.03-2.3-.05-3.48-.08a266.66307,266.66307,0,0,1-67.35-10.83l-.93-.27c-1.44-.44-2.87-.87-4.3-1.33q-9.90006-3.135-19.51-7.02-7.335-2.955-14.5-6.34a.33861.33861,0,0,1-.12-.06c-1-.46-2.01-.94-3.01-1.43-.13-.07-.27-.14-.41-.21q-5.59506-2.73-11.07-5.72c-3.07-7.05005-7.39-8.4-10.07-14.6a25.87356,25.87356,0,0,1-1.68-5.74c0-.02-.01-.04-.01-.07.28,3.72-1.19-6.6-.01-.04-.01-.12-.02-.25-.03-.4-.03-.36-.06994-.8-.12994-1.35-3.43-33.49-3.21-71.79-4.7-103.35q-.15006-3.06-.31-5.86c-.03-.62-.07-1.23-.11005-1.83.07-.18.15-.37.24-.55a1.002,1.002,0,0,1,.07-.15,1.62294,1.62294,0,0,1,.1-.18c.02-.03.05-.07.07-.1a.91693.91693,0,0,1,.05-.1c.09-.14.19-.29.3-.43.05-.06.09-.11005.14-.16a.80824.80824,0,0,1,.12-.14.637.637,0,0,1,.11-.13c.04-.04.08-.09.13-.13995a.30159.30159,0,0,1,.08-.08,2.03313,2.03313,0,0,1,.26-.25,9.62387,9.62387,0,0,1,1.14-.9c.13995-.09.29-.18.43-.28a19.13528,19.13528,0,0,1,3.17-1.52c.38-.14.76-.27,1.17-.41.15-.04.29-.09.44-.14.22-.07.44-.14.67-.19,1.14-.34,2.37-.63,3.7-.9.16-.03.33-.06.5-.1.24-.05.49-.09.74-.13.34-.06.69-.12,1.04-.18,2.97-.47,6.34-.82,10.06-1.05q.525-.03,1.05-.06c.41-.02.82-.04,1.24-.06.35-.02.71-.03,1.07-.04.35-.02.71-.03,1.08-.04,1.01-.03,2.05-.06,3.11-.08,3.02-.06,6.2-.04,9.54.03,1.55.04,3.13.08,4.75.15.11005,0,.21.01.31.01,1.41.05,2.83.11,4.29.19,1.02.05,2.05.1,3.07995.16.97.06,1.95.12,2.94.19.77.04,1.54.1,2.32.15.66.05,1.32.1,1.98.14l.9.06c.49.04.98.07,1.48.12,1.1.09,2.2.18,3.32.27,1.11.1,2.24.2,3.37.3s2.27.21,3.41.32c.12.01.23.02.34.03,1.04.11005,2.08.21,3.13.32.24.02.49.04.73.07,1.0011.10058,2.02173.21832,3.032.32568.31006.03345.61847.06586.92944.09985.79139.08618,1.57154.16089,2.36847.25446,1.05.12,2.12006.23,3.16.37.81.09,1.62.18,2.43.28,1.27.15,2.56.31,3.85.48.49.06.98.12,1.47.19,3.68.46,7.4.97,11.18,1.5,5.73.81,11.55,1.69,17.41,2.64q8.80509,1.425,17.71,3.01c1.5.27,3,.54,4.51.82q1.02.19491,2.04.38995c1.16.21,2.32.43,3.48.65,1.16.22,2.32.44,3.48.67,1.38.27,2.77.54,4.15.81,9.09,1.8,18.12994,3.72,26.95,5.73,1.45.32995,2.9.67,4.34,1q4.32,1.005,8.56,2.04c.78.18,1.55.37,2.32.56,1.92.48,3.84.96,5.73,1.45l.33.09c1.39.34,2.75.69,4.11,1.05q4.815,1.26,9.47,2.55,3.09.855,6.11,1.73c3.01.87,5.96,1.75,8.83,2.64.71.22,1.42.44,2.12.65,2.1.65,4.17,1.31,6.18,1.97,1.6.52,3.16,1.05,4.7,1.58q2.31.795,4.53,1.59c.95.34,1.89.7,2.83,1.04,1.35.5,2.68,1,3.98,1.5.4.15.79.31,1.18.46.25.11.49.2.73.3.47.19.95.37,1.41.56.47.18.93.37,1.39.57.45.18.91.37,1.35.56.45.18.89.37,1.33.57.37.15.73.31,1.08.47.71.31,1.42.62,2.11.94.34.16.68.31,1.02.47l.78.36c.11.06.22.11.33.16.25.12.51.25.76.37.57995.27,1.15.56,1.71.83.75.38,1.48.76,2.18,1.13.71.37994,1.4.76,2.06,1.12994.11.06.21.12006.32.18006.15.07995.3.17.45.25.51.29,1,.59,1.49.87994.96.59,1.87,1.17,2.72,1.75.19.13.37.26.56.38.63.45,1.23.89,1.79,1.34,0,.01,0,.01.01.01.19.14.37.29.55.43.15.14.31.26.46.4.52.45,1,.87994,1.44,1.32a5.667,5.667,0,0,1,.42.43,1.20839,1.20839,0,0,1,.16.16c.2.2.38.4.55.6a.55257.55257,0,0,1,.07.09c.24.28.46.56.67.84.1.14.21.28.3.42.12.17.24.35.34.52.09.14.17.29.25.43006a7.2566,7.2566,0,0,1,.54,1.12994,5.2413,5.2413,0,0,1,.27.82A5.84442,5.84442,0,0,1,750.58227,625.3079Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M750.58227,625.3079c-.01,1.75-.03,4.2-.11,7.23-.01.42-.03.85-.04,1.29-.1,4.25-.25,9.5-.46,15.43-.01.36-.02.71-.04,1.07-.28,7.24-.72,15.67-1.48,29.02-1.41,24.66-3.87,3.39-6.34,12.04-6.86-4.22-14.38-8.64-22.42-13.18q-2.175-1.23-4.39-2.47c-16.08-8.97-34.04-18.37006-52.79-27.68-.74-.37-1.49-.74-2.23-1.1-42.95-21.23-89.83-41.88-127.81-55.66-7.33-2.66-14.33-5.06-20.91-7.17005-13.86-4.43-25.84-7.53-35.06-8.87-9.6-1.4-16.23-.9-18.91,1.99q-.15006-3.06-.31-5.86-.06006-.93-.12-1.83c.06171-.16462.14191-.32172.21955-.48017.01111-.02313.019-.047.03045-.06982a1.002,1.002,0,0,1,.07-.15,1.62294,1.62294,0,0,1,.1-.18,1.05985,1.05985,0,0,1,.12-.2c.09-.14.19-.29.3-.43a3.48261,3.48261,0,0,1,.26-.30005.637.637,0,0,1,.11-.13c.04-.04.08-.09.13-.13995a.30159.30159,0,0,1,.08-.08,2.03313,2.03313,0,0,1,.26-.25,9.62387,9.62387,0,0,1,1.14-.9c.13995-.09.29-.18.43-.28a19.13528,19.13528,0,0,1,3.17-1.52c.38-.14.76-.27,1.17-.41.15-.04.29-.09.44-.14.22-.07.44-.14.67-.19,1.14-.34,2.37-.63,3.7-.9.4-.08.82-.16,1.24-.23.34-.06.69-.12,1.04-.18,2.97-.47,6.34-.82,10.06-1.05q.525-.03,1.05-.06c.41-.02.82-.04,1.24-.06.35-.02.71-.03,1.07-.04.35-.02.71-.03,1.08-.04,1.01-.03,2.05-.06,3.11-.08,3.02-.05,6.2-.03,9.54.04,1.55.03,3.13.08,4.75.15.1,0,.21.01.31.01,1.41.04,2.84.11,4.29.18,1.02.05,2.05.1,3.07995.16.97.06,1.95.12,2.94.19.77.04,1.54.1,2.32.15.66.05,1.32.1,1.98.14.79.06,1.58.12,2.38.18,1.1.09,2.2.18,3.32.27,1.11.1,2.24.2,3.37.3s2.27.21,3.41.32c.12.01.23.02.34.03,1.04.11005,2.08.21,3.13.32q8.73.885,17.97,2.07,5.52.705,11.18,1.51c5.73.81,11.55,1.69,17.41,2.63q8.80509,1.425,17.71,3.01c1.5.27,3,.54,4.51.82q2.76.50994,5.52,1.04c1.16.22,2.32.44,3.48.67,1.38.27,2.77.54,4.15.81,9.09,1.8,18.12994,3.72,26.95,5.73,1.45.32995,2.9.67,4.34,1q4.32,1.005,8.56,2.04c.78.19,1.55.38,2.32.57q2.895.72,5.73,1.44v.01c.11.02.22.05.33.08,1.38.35,2.75.7,4.11,1.06q4.815,1.26,9.47,2.54c2.06.57995,4.1,1.15,6.11,1.73,3.01.88,5.96,1.76,8.83,2.64.71.22,1.42.44,2.12.65q3.15.99,6.18,1.97c1.6.52,3.16,1.05,4.7,1.58q2.31.795,4.53,1.59c.96.34,1.9.69,2.83,1.03,1.36.5,2.68,1,3.98,1.51.4.15.79.31,1.18.46.73.28,1.44.57,2.14.86.47.18.93.37,1.39.57.45.18.91.37,1.35.56.45.18.89.37,1.33.57.37.15.73.31,1.08.47.71.31,1.42.62,2.11.94.34.16.68.31,1.02.47l.78.36c.11.06.22.11.33.16.85.4,1.67.8,2.47,1.2.75.38,1.48.76,2.18,1.13.83.43994,1.62.87,2.38,1.31.15.07995.3.17.45.25.51.29,1,.59,1.49.87994.96.59,1.87,1.17,2.72,1.75.84.58,1.62,1.15,2.35,1.72,0,.01,0,.01.01.01.35.28.69.56,1.01.83.52.45,1,.87994,1.44,1.32a5.667,5.667,0,0,1,.42.43,1.20839,1.20839,0,0,1,.16.16c.21.23.42.46.62006.69.24.28.46.56.67.84.1.14.21.28.3.42.12.17.24.35.34.52.09.14.17.29.25.43006a7.2566,7.2566,0,0,1,.54,1.12994,6.05312,6.05312,0,0,1,.27.82A5.84442,5.84442,0,0,1,750.58227,625.3079Z"
                                    transform="translate(-206.59003 -163.87113)"
                                    opacity="0.2"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:px-6">
                        <div className="text-center xl:w-3/4 md:w-2/3 md:mr-auto md:mx-0 mx-auto">
                            <h3 className="text-xl font-extrabold mb-4 font-mono">
                                <FormattedMessage defaultMessage="Entwicklung" />
                            </h3>
                            <p className="sm:text-lg text-base leading-normal">
                                <FormattedMessage defaultMessage="Sei ein Teil von uns und profitiere von der ständigen Weiterentwicklung von Delivery+" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 w-full md:my-12 my-8">
                <div className="bg-gray-50 rounded-xl border border-grey-200">
                    <div className="flex items-center justify-between px-4 md:px-12">
                        <div className="w-full py-6 text-center overflow-hidden lg:text-left sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                            <div className="flex flex-col">
                                <h4 className="text-4xl font-extrabold mb-4 font-mono">
                                    <FormattedMessage defaultMessage="Noch Fragen?" />
                                </h4>
                                <p className="text-subtitle text-gray-500 mb-6">
                                    <FormattedMessage defaultMessage="Hast du noch Fragen? Oder bieten wir noch nicht die Lösung an die Du benötigst. Nimm gerne Kontakt mit uns auf." />
                                </p>
                                <div className="text-delivery flex items-center justify-center lg:justify-start py-3 mt-auto hover:translate-x-1 duration-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <Link href="/contact">
                                        <a className="text-center md:text-left text-base lg:text-xl font-bold  tracking-normal px-1  font-mono">
                                            <FormattedMessage defaultMessage="Kontakt" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="280"
                                height="180"
                                viewBox="0 0 883.92913 713.74554"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <title>real_time_collaboration</title>
                                <path
                                    d="M739.66018,492.74054c-18.647,11.18315-51.86947,25.19569-85.81929,10.79516l-21.9459-9.309,43.97806-49.2989a210.03369,210.03369,0,1,1,63.78713,47.8127Zm-84.26208-189.247A174.54122,174.54122,0,0,0,710.9697,431.9115l12.13072,11.39955-27.67378,31.0213c14.41483-2.92473,26.96977-10.72271,33.3359-15.25183l8.73508-6.21551,9.39476,5.16211a176.34274,176.34274,0,0,0,84.70584,21.66658c97.15687,0,176.20012-79.04277,176.20012-176.20012,0-97.15688-79.04325-176.20012-176.20012-176.20012S655.3981,206.3367,655.3981,303.49358Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M638.315,303.49358c0-106.74742,86.53588-193.28324,193.28324-193.28324s193.28323,86.53582,193.28323,193.28324S938.34558,496.77681,831.59822,496.77681A192.40347,192.40347,0,0,1,738.666,473.00029c-13.3609,9.50629-45.955,28.46753-78.1543,14.8092l38.7594-43.44838A192.73528,192.73528,0,0,1,638.315,303.49358Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M991.95463,303.91244c0-100.98931-77.45624-183.87364-176.20012-192.52321,5.63007-.49316,11.32507-.76,17.08312-.76,106.74741,0,193.28323,86.53582,193.28323,193.28323S939.585,497.19568,832.83763,497.19568c-5.74935,0-11.43447-.27032-17.05607-.7624C914.51245,487.771,991.95463,404.89246,991.95463,303.91244Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    opacity="0.1"
                                    style={{isolation: 'isolate'}}
                                />
                                <path
                                    d="M386.198,761.25205A210.59024,210.59024,0,1,1,541.92313,692.32l43.97806,49.29889-21.94589,9.309c-33.94983,14.40053-67.1723.388-85.8193-10.79516A210.856,210.856,0,0,1,386.198,761.25205Zm0-386.56647c-97.15687,0-176.20012,79.04325-176.20012,176.20012,0,97.15735,79.04325,176.20012,176.20012,176.20012a176.3427,176.3427,0,0,0,84.70584-21.66657l9.39476-5.16211,8.73508,6.2155c6.36613,4.52913,18.92107,12.32711,33.3359,15.25183l-27.67378-31.02129,12.13072-11.39955a174.54124,174.54124,0,0,0,55.5716-128.41793C562.39808,453.72883,483.35484,374.68558,386.198,374.68558Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M579.48107,550.8855c0-106.74742-86.53588-193.28324-193.28324-193.28324S192.9146,444.13808,192.9146,550.8855s86.53588,193.28323,193.28323,193.28323a192.40351,192.40351,0,0,0,92.93222-23.77652c13.3609,9.50629,45.955,28.46753,78.15429,14.8092L518.52494,691.753A192.73528,192.73528,0,0,0,579.48107,550.8855Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#4338CA"
                                />
                                <path
                                    d="M227.08084,549.90929c0-100.98932,77.45624-183.87364,176.20012-192.52322-5.63007-.49315-11.32507-.76-17.08312-.76-106.74741,0-193.28323,86.53582-193.28323,193.28324s86.53582,193.28323,193.28323,193.28323c5.74935,0,11.43447-.27032,17.05607-.7624C304.523,733.76785,227.08084,650.88931,227.08084,549.90929Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    opacity="0.1"
                                    style={{isolation: 'isolate'}}
                                />
                                <path
                                    d="M876.97323,242.08764c-12.64621-21.36818-37.66572-22.364-37.66572-22.364s-24.38009-3.1177-40.01977,29.4263c-14.57742,30.33368-34.69612,59.62147-3.23894,66.72236l5.68208-17.68518,3.51888,19.00182a123.082,123.082,0,0,0,13.45936.23c33.68809-1.08765,65.77092.31822,64.7379-11.77049C882.07379,289.57823,889.14142,262.6481,876.97323,242.08764Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M794.25267,429.219a49.88324,49.88324,0,0,1-1.61319,6.94446c-.79135,2.22523-2.01311,4.28315-2.73667,6.53135-2.30639,7.16623.89095,15.15641,5.99761,20.68782a33.75861,33.75861,0,0,0,16.45921,9.77351,67.152,67.152,0,0,0,14.14455,1.4864c13.14639.44579,26.631.84462,39.088-3.38028a67.91368,67.91368,0,0,0,11.35625-5.15906,8.50248,8.50248,0,0,0,2.9467-2.32019,8.10892,8.10892,0,0,0,1.06335-4.75982c-.028-5.5731-1.15779-11.11778-.88954-16.68449.14859-3.08339.72566-6.1644.4416-9.23828a17.04267,17.04267,0,0,0-13.02487-14.6806c-3.53377-.75885-7.199-.34535-10.79675.00058a275.28421,275.28421,0,0,1-28.0989,1.25641c-9.58559-.06119-19.112-1.52442-28.64985-1.67723-2.82063-.0452-2.76365.82437-3.66163,3.55422A66.49636,66.49636,0,0,0,794.25267,429.219Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M821.45577,291.60544c-.46064,2.412-.95854,4.91216-2.408,6.89429-1.66765,2.28051-4.38669,3.58354-6.18072,5.766-2.70037,3.28509-2.85537,7.90774-2.8665,12.16024-.01025,3.91748.06932,8.0959,2.25393,11.3477a19.83136,19.83136,0,0,0,5.68355,5.01092c8.19271,5.52116,17.04578,11.14145,26.92356,11.32353,4.09273.07544,8.48105-.98151,11.174-4.06437a16.77755,16.77755,0,0,0,2.70541-4.82667,64.09486,64.09486,0,0,0,4.537-19.512,22.91089,22.91089,0,0,0-.86371-9.37317c-1.2-3.34568-3.62632-6.09851-5.22991-9.27058A20.63833,20.63833,0,0,1,855.198,284.8486a1.31821,1.31821,0,0,0-.06972-.88507,1.2892,1.2892,0,0,0-1.06244-.4305l-19.586-1.41a42.62457,42.62457,0,0,1-5.438-.62211c-1.05584-.21469-3.84454-1.71422-4.85129-1.31548C822.32686,280.92357,821.83776,289.6053,821.45577,291.60544Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#a0616a"
                                />
                                <path
                                    d="M821.45577,292.21683c-.46064,2.412-.95854,4.91215-2.408,6.89429-1.66765,2.2805-4.38669,3.58353-6.18072,5.766-2.70037,3.2851-2.85537,7.90775-2.8665,12.16024-.01025,3.91748.06932,8.0959,2.25393,11.34771A19.83132,19.83132,0,0,0,817.938,333.396c8.19271,5.52116,17.04578,11.14145,26.92356,11.32353,4.09273.07544,8.48105-.98151,11.174-4.06437a16.77741,16.77741,0,0,0,2.70541-4.82667,64.09487,64.09487,0,0,0,4.537-19.512,22.91087,22.91087,0,0,0-.86371-9.37317c-1.2-3.34569-3.62632-6.09851-5.22991-9.27059A20.63831,20.63831,0,0,1,855.198,285.46a1.31819,1.31819,0,0,0-.06972-.88506,1.28917,1.28917,0,0,0-1.06244-.43051l-19.586-1.41a42.62277,42.62277,0,0,1-5.438-.62211c-1.05584-.21468-3.84454-1.71421-4.85129-1.31547C822.32686,281.535,821.83776,290.21668,821.45577,292.21683Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    opacity="0.1"
                                />
                                <circle
                                    cx="682.15096"
                                    cy="172.36953"
                                    r="28.73502"
                                    fill="#a0616a"
                                />
                                <path
                                    d="M825.486,329.85627a17.62328,17.62328,0,0,0,5.04717,4.033,15.8593,15.8593,0,0,0,6.30536,1.20055c5.17975.1457,10.795-.80341,14.39825-4.5273,4.64482-4.80029,4.49184-12.54271,8.13259-18.1429a4.04135,4.04135,0,0,1,1.17319-1.28307,3.80294,3.80294,0,0,1,1.99542-.45879c4.59816-.043,8.6036,2.93926,12.21851,5.78133a16.09469,16.09469,0,0,1,4.30068,4.381,14.84879,14.84879,0,0,1,1.45027,4.44134c1.79388,8.75694,2.37485,17.71061,2.95143,26.63078.31847,4.927.6371,9.85876.61343,14.796-.078,16.2661-3.85875,32.26018-7.61847,48.086-.48444,2.03915-1.14739,4.31844-3.0018,5.29518a7.402,7.402,0,0,1-2.61932.6393c-10.76856,1.26468-21.5594,2.5309-32.40069,2.69787q-6.34618.09774-12.68683-.30724a6.83426,6.83426,0,0,1-2.13716-.37257,6.02667,6.02667,0,0,1-2.32991-1.9786c-5.86418-7.38964-6.21033-17.60594-6.17284-27.03961q.13746-34.59676,2.47219-69.13824c.12851-1.90069.15657-4.209-1.213-5.70423A71.40962,71.40962,0,0,0,825.486,329.85627Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#fff"
                                />
                                <path
                                    d="M819.39936,296.67731c-.97051,1.7568-8.12566,6.11921-9.507,7.57527-7.718,8.13519-21.80434,7.82993-28.863,16.54336-2.48345,3.06566-3.77373,6.91763-4.72269,10.74716-1.34213,5.41621-2.05878,11.32307.18956,16.43009,2.16339,4.91409,6.71759,8.31142,9.80959,12.701,3.395,4.81966,4.92143,10.67173,6.38427,16.38269,1.08011,4.21678,2.16914,8.538,1.7485,12.87053-.47827,4.926-2.862,9.43647-4.26943,14.18129s-1.65034,10.396,1.60384,14.12483c2.39074,2.73948,6.14067,3.82552,9.725,4.43646a111.72711,111.72711,0,0,0,13.86106,1.20668c4.09734.181,8.6138.21623,11.76364-2.41046,2.48538-2.07259,3.5656-5.43591,3.70541-8.669s-.53286-6.43764-.95422-9.64624c-.43679-3.32621-.60465-6.68139-.74509-10.0332q-.94526-22.55877-.258-45.14656a38.4201,38.4201,0,0,0-.457-9.3683c-.87872-4.02822-3.0558-7.6282-4.87236-11.3294a42.873,42.873,0,0,1-4.7535-22.64814C819.33813,296.56585,822.85284,290.42574,819.39936,296.67731Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#fff"
                                />
                                <path
                                    d="M859.75067,297.28869c1.47825,1.51932,6.50132,2.02018,8.38177,2.99865a29.36836,29.36836,0,0,0,5.50992,1.90771,71.53209,71.53209,0,0,1,19.35628,8.88384,11.74706,11.74706,0,0,1,3.2369,2.79592,12.81589,12.81589,0,0,1,1.79054,5.05636c.92077,4.561,1.84613,9.177,1.63922,13.82538-.21964,4.93423-1.70592,9.713-3.18039,14.42692L890.97553,364.797c-4.11236,13.14726-8.25081,26.42395-9.408,40.15067a94.44483,94.44483,0,0,0,.84766,22.8041,2.70352,2.70352,0,0,1-.27789,2.2087,2.17535,2.17535,0,0,1-1.34915.62078c-2.65906.41578-5.23239-.94-7.64158-2.13974a84.62175,84.62175,0,0,0-23.32742-7.6329,54.23155,54.23155,0,0,0,7.24542-14.936,90.39647,90.39647,0,0,0,2.18909-10.272l2.56289-14.82308a145.65593,145.65593,0,0,0,2.19851-16.39188,20.5206,20.5206,0,0,0-.35673-6.17482,29.956,29.956,0,0,0-2.34076-5.56859c-4.22379-8.78591-6.2056-18.81222-4.54371-28.418.7273-4.20377,2.14066-8.41316,1.55131-12.63847-.56664-4.06246.02225-7.21971-1.02008-11.24011C853.02545,283.83826,856.96957,294.43037,859.75067,297.28869Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#fff"
                                />
                                <path
                                    d="M780.95626,334.68718c-1.92557,3.99584-5.14483,7.39993-6.24051,11.69808a25.55689,25.55689,0,0,0-.54411,6.1141,29.04292,29.04292,0,0,0,.907,9.19357c.61154,1.89541,1.60644,3.6434,2.32317,5.50159a19.9482,19.9482,0,0,1,1.30672,8.15063c-.19337,3.849-1.501,7.58522-1.60317,11.43772-.1607,6.05838,2.64147,11.75375,5.37573,17.1624A12.61667,12.61667,0,0,1,800.82,397.94135a3.76086,3.76086,0,0,0,.82656-2.74145q.30315-10.543.58485-21.08655c.296-10.8709.57793-21.88705-1.92279-32.47055-1.12908-4.77847-2.88591-9.53848-6.10656-13.24478-1.69585-1.95156-7.45282-7.092-10.23661-4.90577-1.25188.98316-.9593,3.65946-1.15766,5.01467A21.2751,21.2751,0,0,1,780.95626,334.68718Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#fff"
                                />
                                <path
                                    d="M900.22818,323.17211a29.40911,29.40911,0,0,1,.98335,8.845q.0555,9.11409-.24157,18.2258a33.97739,33.97739,0,0,1-1.18394,9.22739c-.62184,1.95543-1.58145,3.78913-2.22366,5.738-1.92466,5.84056-.87308,12.1752-.708,18.32249a20.8187,20.8187,0,0,1-.50419,5.92705c-1.0157,3.81083-3.74532,6.89011-5.65047,10.34331-1.80937,3.27959-2.90113,6.95565-5.06211,10.015s-5.90186,5.48354-9.5278,4.54435c-2.74734-.71161-4.69948-3.14339-6.04977-5.63957a27.66137,27.66137,0,0,1-2.86-17.943c1.35561-7.46106,5.73821-14.08,7.31876-21.49667,2.17045-10.18472-1.12826-20.69456-1.0301-31.10753a15.0367,15.0367,0,0,1,.6555-4.822c.829-2.37852,2.60961-4.278,4.25453-6.18555a78.09591,78.09591,0,0,0,5.71806-7.50429c1.1776-1.75624,2.777-6.27327,4.86478-6.64885C893.64279,312.17448,899.07172,319.57089,900.22818,323.17211Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#fff"
                                />
                                <path
                                    d="M756.76953,424.68946a28.36259,28.36259,0,0,0-7.88972-.83872,19.69148,19.69148,0,0,0-18.28168,23.21335,33.07425,33.07425,0,0,0,3.12633,8.543c2.09236,4.24623,4.60188,8.48272,8.47539,11.2038a33.01075,33.01075,0,0,0,7.47978,3.56042l20.40107,7.68544c3.00122,1.13062,6.0029,2.26139,9.03383,3.30976a176.7012,176.7012,0,0,0,47.18486,9.38044,51.09211,51.09211,0,0,0,14.65041-.74236,4.76925,4.76925,0,0,0,3.00039-1.621,5.13851,5.13851,0,0,0,.67038-2.21424l1.25537-8.78841a7.36141,7.36141,0,0,0-.1067-3.7048c-.57508-1.477-2.01659-2.40615-3.391-3.19556-13.41226-7.70334-29.07268-11.95321-40.362-22.52591-2.65768-2.489-4.88173-6.43428-8.11079-8.125-3.6617-1.91725-7.974-3.01149-11.75893-4.77821C773.87231,431.18919,765.73718,426.75085,756.76953,424.68946Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M777.137,436.5375c7.21092,2.25953,37.65544,17.91361,42.87372,23.37917-.69947.252-24.43152-13.04779-25.14362-13.26151A143.38928,143.38928,0,0,1,775.7379,439.914c-1.23663-.572-8.0339-3.26024-7.72607-4.82054C768.35919,433.33273,775.85689,436.13637,777.137,436.5375Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    opacity="0.1"
                                />
                                <path
                                    d="M867.09778,495.30484a1.69388,1.69388,0,0,0,1.14311-.33642,1.76559,1.76559,0,0,0,.3573-1.31543l-.03359-11.97293c-3.44295-1.6404-7.29415-2.1662-11.0743-2.67148L839.85271,476.651c.40523.05416-2.75773,7.59664-2.27275,8.60359.85477,1.77475,7.38718,3.34766,9.23078,4.18562C853.21974,492.3533,859.87952,495.55585,867.09778,495.30484Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#a0616a"
                                />
                                <path
                                    d="M811.76011,481.63863c-3.33013.53041-7.047.99927-9.20364,3.59157-2.73492,3.28738-1.57064,8.188-.266,12.26045a3.97512,3.97512,0,0,0,4.6374,3.317c3.037.19231,6.26906.343,8.92262-1.14671a39.10621,39.10621,0,0,0,3.46608-2.57636,22.22264,22.22264,0,0,1,6.37266-2.9135,64.44127,64.44127,0,0,1,12.792-2.63622,19.89456,19.89456,0,0,0,5.03931-.88831,5.58371,5.58371,0,0,0,3.54887-3.44555c.61466-2.17582-.64993-4.39415-1.86275-6.30233a25.14245,25.14245,0,0,0-5.36411-6.62975c-3.28642-2.55284-4.91212-.59313-8.22257,1.04049A69.76371,69.76371,0,0,1,811.76011,481.63863Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#a0616a"
                                />
                                <path
                                    d="M803.05747,484.63824l-21.14511-6.24976a27.98825,27.98825,0,0,0-7.86885-1.52484,9.44649,9.44649,0,0,0-7.22644,2.92243c-1.63965,1.92439-2.109,4.55451-2.51772,7.04944l-.8744,5.337a26.80527,26.80527,0,0,0-.48958,8.1957,9.0617,9.0617,0,0,0,4.20068,6.752c2.92607,1.59642,6.51235.81668,9.778.14893a106.45432,106.45432,0,0,1,20.03815-2.1488c2.531-.03027,5.18562.00143,7.42207-1.18387a9.26647,9.26647,0,0,0,4.52239-7.38444C809.31277,491.993,807.79319,486.038,803.05747,484.63824Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M875.4096,479.192c2.74115-.48042,5.16036-2.03833,7.787-2.9579,3.6971-1.29435,7.70357-1.29433,11.62067-1.28a7.46024,7.46024,0,0,1,4.16623.83438c1.72541,1.14869,2.16763,3.44747,2.461,5.49942l1.7701,12.38028a19.42771,19.42771,0,0,1,.1446,7.01376c-.51931,2.29424-2.08312,4.506-4.35973,5.09786-2.765.71882-5.47563-1.04746-8.08633-2.20775-6.52523-2.9-14.11042-2.15882-20.91415-4.32634a4.68742,4.68742,0,0,1-3.13-2.23827,5.09274,5.09274,0,0,1-.24351-2.1394c.11651-3.97939-.7228-9.41332.47527-13.21648C868.17819,478.23119,872.34978,479.192,875.4096,479.192Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M920.15727,419.70642a36.71918,36.71918,0,0,1,12.935-.88376c3.458.381,7.02087,1.3432,9.54563,3.73668,3.073,2.91321,4.06034,7.41855,4.14271,11.65213a36.40382,36.40382,0,0,1-7.91243,23.24909,21.09574,21.09574,0,0,1-4.52371,4.35479,29.7763,29.7763,0,0,1-5.88563,2.83629l-45.68734,18.02042c-12.01933,4.74078-24.08108,9.49529-36.61789,12.62065a2.85383,2.85383,0,0,1-3.84015-1.39224,94.65417,94.65417,0,0,1-10.01339-18.31708,1.23429,1.23429,0,0,1,.54552-1.94614l32.315-18.56722a32.67407,32.67407,0,0,0,6.57728-4.53184,16.32909,16.32909,0,0,0,3.37681-4.70121c.66984-1.39909.73232-4.70071,1.58792-5.73485.83771-1.01251,3.70338-1.09331,5.02688-1.49154a45.613,45.613,0,0,0,5.47254-2.06871c7.22863-3.23385,13.66561-7.93247,20.59523-11.719A52.84362,52.84362,0,0,1,920.15727,419.70642Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M901.83754,433.57235c-5.55183,4.16981-12.74047,8.00282-18.24292,12.2825-1.87793,1.46061-33.18344,19.06089-33.62609,21.39842,5.13348.865,37.83421-22.01168,42.51287-24.29441s8.82614-5.50184,12.93593-8.69721c1.04734-.81431,5.486-3.26228,2.47938-4.17207C906.203,429.57707,903.088,432.73874,901.83754,433.57235Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    opacity="0.1"
                                />
                                <path
                                    d="M863.63669,297.69255H814.902a7.4655,7.4655,0,0,0-7.46549,7.46549v2.7338h-.52955v6.11383h.52955v4.27969h-.52955v3.6683h.52955V367.065a7.4655,7.4655,0,0,0,7.46549,7.46549h48.73473a7.4655,7.4655,0,0,0,7.46549-7.46549V305.158A7.4655,7.4655,0,0,0,863.63669,297.69255Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#d0cde1"
                                />
                                <polygon
                                    points="713.347 146.901 688.629 133.953 654.494 139.25 647.432 170.442 665.012 169.765 669.923 158.306 669.923 169.577 678.035 169.265 682.743 151.02 685.686 170.442 714.524 169.853 713.347 146.901"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M787.42312,415.66632a12.84416,12.84416,0,0,0,4.61387,4.5901,9.02314,9.02314,0,0,0,7.93145-.21258,13.96088,13.96088,0,0,0,5.72384-5.73878c2.68637-4.74373,3.24271-10.42009,2.90749-15.86133s-1.497-10.79915-2.01125-16.2264c-.3738-3.94524-.40419-7.914-.4343-11.87681a3.94955,3.94955,0,0,1,.49911-2.40193,4.71586,4.71586,0,0,1,2.64984-1.32324c5.42168-1.61087,9.02044-6.69265,11.60049-11.72582,1.72278-3.36081,3.22088-7.03459,2.88866-10.79659s-3.03631-7.55187-6.79339-7.93564c-3.09745-.3164-5.95746,1.65095-8.19178,3.81937A35.127,35.127,0,0,0,798.522,360.53151c-.49046,3.8251-.35,7.7543-1.39037,11.46773-2.22145,7.92887-9.17194,12.79011-12.63565,19.92467C780.67939,399.78543,782.78589,408.71047,787.42312,415.66632Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#a0616a"
                                />
                                <path
                                    d="M889.7035,385.37474a14.98436,14.98436,0,0,1-8.40311,8.07433,11.60553,11.60553,0,0,1-7.305.44739,8.10041,8.10041,0,0,1-5.35136-4.78654,12.89451,12.89451,0,0,1-.60278-3.59534c-.3476-5.3469-.21328-10.85672,1.7289-15.85053.7491-1.92611,1.75913-3.7528,2.35032-5.73309a28.75224,28.75224,0,0,0,.885-6.99674l.63846-14.589a9.49429,9.49429,0,0,0-.21671-3.16333c-.63683-2.11095-2.60973-3.48278-4.41995-4.74165-4.37179-3.04026-8.692-6.58792-10.81042-11.47341a8.04686,8.04686,0,0,1-.747-4.75248c.59732-2.897,3.5209-4.77244,6.41054-5.40428a14.3393,14.3393,0,0,1,17.1909,11.55511c.28589,1.6464.28195,3.32814.44929,4.99078.35495,3.52685,1.47459,6.92655,2.175,10.40134,1.72532,8.55913.83131,17.4068,2.53745,25.96448C887.63961,372.87694,893.01872,377.54576,889.7035,385.37474Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#a0616a"
                                />
                                <circle
                                    cx="681.88619"
                                    cy="231.27196"
                                    r="6.11383"
                                    fill="#4338CA"
                                />
                                <circle
                                    cx="18.03699"
                                    cy="432.96923"
                                    r="18.03504"
                                    fill="#2f2e41"
                                />
                                <polygon
                                    points="83.411 486.51 74.327 477.68 56.086 483.346 57.838 504.467 95.344 502.725 83.822 487.069 83.411 486.51"
                                    fill="#fbbebe"
                                />
                                <circle
                                    cx="63.54349"
                                    cy="457.17052"
                                    r="29.15772"
                                    fill="#fbbebe"
                                />
                                <path
                                    d="M402.59166,617.0614s35.82078,61.55868,44.34576,70.80024a154.73921,154.73921,0,0,0,12.93514,12.89173s-4.00845,13.29343-10.39133,12.819a30.04191,30.04191,0,0,1-10.52921-2.59486s-2.8489-7.385-7.81819-10.62367-45.5683-43.17979-44.61938-55.94556S402.59166,617.0614,402.59166,617.0614Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M275.02289,704.90827s38.19308,29.64424,90.0987,1.7893l4.47313-3.29187s-7.54884,16.982-8.24924,21.58608c-.81211,5.33843-20.46565,36.61011-23.67284,38.10839s-3.914,2.88039-3.914,2.88039l13.61045,14.98063,5.03226-3.70336s19.62205-27.80067,25.36111-32.88613S410.84518,686.84,410.84518,686.84s10.45431-19.761-15.63638-21.24735-38.09647,5.625-38.09647,5.625l-46.30443,7.35565Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M460.31553,697.8415l19.318,13.36618s24.6456,7.72158,9.46412,12.86024-55.18771,6.99736-56.09536-.09232,1.578-18.24868,3.57383-17.63847S452.42459,710.54429,460.31553,697.8415Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M354.11082,772.66579l3.57552,19.63479s10.167,19.44435-2.04019,13.41119-37.35722-28.95-33.6434-33.75432,11.9107-10.01481,12.74313-8.44923S341.73928,775.55648,354.11082,772.66579Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M317.27546,685.01918s-25.96259,30.31191-41.72492,22.94862-80.24908-92.648-72.88579-108.41033S212.49694,587.15,212.49694,587.15l33.29655,3.07909-9.5803-15.36063s4.47313-3.29187,8.73562,1.32892,21.37544,16.16188,27.33707,32.46165,23.46434,15.48657,23.46434,15.48657Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#fff"
                                />
                                <polygon
                                    points="264.085 529.388 219.08 577.161 178.764 505.981 217.091 459.674 264.085 529.388"
                                    fill="#3f3d56"
                                />
                                <polygon
                                    points="260.688 528.871 220.04 570.852 183.206 506.16 216.986 463.631 260.688 528.871"
                                    fill="#fff"
                                />
                                <polygon
                                    points="216.875 575.336 219.08 577.161 217.666 579.925 154.735 598.655 154.14 596.499 157.003 593.538 216.875 575.336"
                                    fill="#b3b3b3"
                                />
                                <polygon
                                    points="219.639 576.75 154.472 597.125 114.747 522.062 178.764 505.981 219.639 576.75"
                                    fill="#d0cde1"
                                />
                                <polygon
                                    points="214.733 566.569 211.937 568.626 180.907 514.748 184.114 513.25 214.733 566.569"
                                    fill="#3f3d56"
                                />
                                <polygon
                                    points="208.318 569.565 180.751 577.785 149.457 522.377 176.729 516.099 208.318 569.565"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M288.692,621.58223l5.70757-1.61445s31.82975-3.5991,32.29443,6.40245-36.5667,5.36121-36.5667,5.36121l-4.93781-6.70968Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#fbbebe"
                                />
                                <path
                                    d="M316.60994,666.54583l7.94414-3.26038s23.98007-10.75177,17.101-17.75678-28.09491,5.16037-28.09491,5.16037l-4.06164,3.851Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#fbbebe"
                                />
                                <path
                                    d="M309.53,651.069s12.93514,12.89173,9.99178,15.91977-51.20861,42.85727-63.17312,30.1132-70.25731-76.72823-47.57466-82.21539,28.67576,7.34159,28.67576,7.34159l29.94384,51.23031Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#fff"
                                />
                                <polygon
                                    points="112.763 518.781 134.011 525.986 133.664 541.326 111.192 538.901 112.763 518.781"
                                    fill="#fff"
                                />
                                <polygon
                                    points="131.914 565.887 109.021 579.287 82.865 539.06 108.113 572.197 131.914 565.887"
                                    opacity="0.2"
                                />
                                <circle
                                    cx="50.74531"
                                    cy="448.71839"
                                    r="34.71157"
                                    fill="#2f2e41"
                                />
                                <polygon
                                    points="238.3 532.417 213.995 496.862 224.298 484.108 249.553 520.688 238.3 532.417"
                                    fill="#4338CA"
                                />
                                <polygon
                                    points="237.615 546.712 200.613 492.919 202.438 490.714 239.267 544.634 237.615 546.712"
                                    fill="#e6e6e6"
                                />
                                <polygon
                                    points="232.847 551.945 195.845 498.152 197.67 495.947 234.499 549.868 232.847 551.945"
                                    fill="#e6e6e6"
                                />
                                <polygon
                                    points="228.785 555.796 191.783 502.003 193.608 499.798 230.437 553.719 228.785 555.796"
                                    fill="#e6e6e6"
                                />
                                <path
                                    d="M66.11686,425.5444h10.738a20.49972,20.49972,0,0,1,20.49972,20.49972v0a0,0,0,0,1,0,0H66.11686a0,0,0,0,1,0,0V425.5444A0,0,0,0,1,66.11686,425.5444Z"
                                    fill="#2f2e41"
                                />
                                <path
                                    d="M372.06674,505.62594l-1.94664-.1449c-.07549,1.01216-.12953,2.0304-.19376,3.0459l-8.73775-.29254,9.16555,17.17535,10.29378-16.52389-8.76982-.29361C371.94084,507.6035,371.99322,506.612,372.06674,505.62594Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M423.31656,365.62543l1.552,1.185c2.32795-3.04912,4.75934-6.093,7.227-9.04728l-1.49859-1.25168C428.11117,359.48762,425.66167,362.5539,423.31656,365.62543Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M438.27191,347.72772l1.44139,1.31651c2.59011-2.83654,5.27937-5.65354,7.992-8.37378L446.323,339.292C443.58989,342.03176,440.88109,344.87021,438.27191,347.72772Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M454.73586,331.219l1.32031,1.43853c2.83273-2.60108,5.75745-5.17022,8.69266-7.6364l-1.2555-1.49477C460.5362,326.01062,457.58956,328.59931,454.73586,331.219Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M409.99087,384.77863l1.65016,1.04291c2.052-3.24646,4.20691-6.49387,6.40426-9.65262l-1.60249-1.11536C414.22876,378.23614,412.0581,381.50787,409.99087,384.77863Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M472.57875,316.22692l1.18876,1.54816c3.05056-2.34226,6.18882-4.64352,9.32755-6.83992l-1.11917-1.59964C478.81332,311.54861,475.65171,313.867,472.57875,316.22692Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M398.40591,405.04291l1.736.89228c1.75884-3.42043,3.61873-6.84754,5.52771-10.18552l-1.695-.9695C402.05132,398.14341,400.17761,401.59625,398.40591,405.04291Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M379.57444,459.99724l-1.89039-.48665c-.96474,3.746-1.858,7.56585-2.65494,11.35426l1.91042.40229C377.73076,467.50733,378.61733,463.71511,379.57444,459.99724Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M491.66474,302.86739l1.04768,1.6473c3.236-2.05913,6.563-4.07392,9.889-5.98862l-.97427-1.69211C498.27635,298.76344,494.92455,300.793,491.66474,302.86739Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M374.80843,482.64286l-1.92662-.3165c-.6268,3.81129-1.17733,7.695-1.63634,11.5435l1.939.23069C373.63968,490.28164,374.1864,486.4265,374.80843,482.64286Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M388.66081,426.2662l1.80841.735c1.44758-3.563,2.99622-7.14354,4.60252-10.64167l-1.77408-.81507C391.679,419.06927,390.11888,422.67655,388.66081,426.2662Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M380.8409,448.28645l1.86751.57007c1.12585-3.684,2.34941-7.39045,3.63684-11.01632l-1.83987-.653C383.20842,440.83975,381.97533,444.5743,380.8409,448.28645Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M623.73237,263.95373c3.8275-.1325,7.72458-.18541,11.57972-.14919l.01716-1.95235c-3.88183-.03623-7.80942.01668-11.66361.15014Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M511.84465,291.24954l.898,1.73309c3.40947-1.76646,6.8995-3.47811,10.37427-5.08775l-.82079-1.77123C518.79563,287.74521,515.27938,289.46973,511.84465,291.24954Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M669.93019,266.388c3.80842.53909,7.65212,1.17018,11.42433,1.87609l.35844-1.919c-3.79985-.71116-7.67215-1.34748-11.51013-1.89039Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M692.68543,270.64541c3.73883.87323,7.512,1.84368,11.2127,2.88421l.52812-1.87991c-3.72835-1.04815-7.52915-2.02528-11.29659-2.90517Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M714.96879,276.91049c3.64541,1.20259,7.31656,2.5048,10.9105,3.87087l.694-1.82461c-3.62158-1.37656-7.31943-2.68878-10.99249-3.90042Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M646.88609,264.15917c3.84466.20162,7.72935.49142,11.54731.86035l.18876-1.94282c-3.84657-.37226-7.76081-.664-11.63311-.867Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M600.42326,263.82885l.23833,1.93806c3.80461-.46807,7.67882-.85845,11.51394-1.15969l-.15253-1.94664C608.15833,262.96421,604.25553,263.35745,600.42326,263.82885Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M554.87751,273.59635l.5777,1.86465c3.66877-1.13585,7.41285-2.2045,11.12881-3.17639l-.49381-1.88848C562.3466,271.37469,558.57392,272.45144,554.87751,273.59635Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M532.96069,281.46822l.74119,1.8065c3.54961-1.45664,7.17548-2.85084,10.77705-4.14495l-.65969-1.837C540.19,278.59593,536.537,280.00109,532.96069,281.46822Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M577.434,267.69829l.409,1.90946c3.75076-.80411,7.57492-1.53577,11.36714-2.174l-.32412-1.92566C585.06562,266.15156,581.21239,266.88846,577.434,267.69829Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                                <path
                                    d="M755.01,292.85257l-10.91021-16.1235-3.83631,7.89659c-.92852-.41463-1.852-.83825-2.77964-1.23988l-.776,1.7922c.90581.392,1.80144.803,2.702,1.20473l-3.81814,7.85923Z"
                                    transform="translate(-158.03543 -93.12723)"
                                    fill="#3f3d56"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
