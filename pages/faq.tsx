import * as React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { FaqDropdown } from '../components/FaqDropdown'

import { SvgFaq } from '../components/SvgFaq'
import Layout from '../components/Layout'

export default function Home() {
  const intl = useIntl()

  function getUrl() {
    return process.env.NEXT_PUBLIC_LOCALE == 'en'
      ? 'https://www.delivery.plus/'
      : `https://${process.env.NEXT_PUBLIC_LOCALE}.delivery.plus`
  }

  return (
    <Layout
      title={intl.formatMessage({ defaultMessage: 'Delivery+ | FAQ' })}
      description={intl.formatMessage({ defaultMessage: 'Häufig gestellte Fragen zu Delivery Plus. FAQ zur Zahlung, Shop und Homepage.' })}
      noindex={false}
      nofollow={false}
      openGraph={{
        url: getUrl() + 'faq',
        type: 'website',
        locale: process.env.NEXT_PUBLIC_LOCALE,
        site_name: intl.formatMessage({
          defaultMessage:
            'Delivery+ | FAQ',
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
      <section className='max-w-7xl mx-auto px-4'>
        <div className='py-12 md:py-24 max-w-xl sm:mx-auto lg:max-w-2xl'>
          <div className='max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12'>
            <SvgFaq />
            <h1 className='max-w-lg mb-6 font-mono text-3xl font-extrabold leading-none tracking-tight sm:text-4xl md:mx-auto'>
              <FormattedMessage defaultMessage='Häufig gestellte Fragen' />
            </h1>
            <p className='text-base text-gray-700 md:text-lg'>
              <FormattedMessage defaultMessage='Hast Du noch Fragen? info@delivery.plus' />
            </p>
          </div>
          <div className='space-y-4'>
            <FaqDropdown
              title={intl.formatMessage({
                defaultMessage:
                  'Wie werde ich bei einer Bestellung benachrichtigt?',
              })}
              description={intl.formatMessage({
                defaultMessage:
                  'Du wirst per Email benachrichtigt oder kannst im Admin Bereich deines Shops nachsehen.',
              })}
            />
            <FaqDropdown
              title={intl.formatMessage({
                defaultMessage: 'Was kostet Delivery.plus?',
              })}
              description={intl.formatMessage({
                defaultMessage: 'Im Monat 29 Euro.',
              })}
            />
            <FaqDropdown
              title={intl.formatMessage({
                defaultMessage: 'Kann ich eigene Bilder verwenden?',
              })}
              description={intl.formatMessage({
                defaultMessage: 'Natürlich, du kannst jedes Bild austauschen.',
              })}
            />
            <FaqDropdown
              title={intl.formatMessage({
                defaultMessage: 'Welche Zahlungsmethoden stehen zur Verfügung?',
              })}
              description={intl.formatMessage({
                defaultMessage:
                  'Momentan kannst du zwischen Barzahlung und PayPal auswählen.',
              })}
            />
            <FaqDropdown
              title={intl.formatMessage({
                defaultMessage: 'Wird es Funktion X noch geben?',
              })}
              description={intl.formatMessage({
                defaultMessage:
                  'Falls du Funktionen vermisst, kannst du uns gerne eine Email schreiben und wir geben unser bestes dich zufrieden zu stellen.',
              })}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
