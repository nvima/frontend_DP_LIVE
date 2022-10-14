import * as React from 'react'
import {FormattedMessage, useIntl} from 'react-intl'

import Layout from '../components/Layout'

export default function Home() {
  const intl = useIntl()

  return (
    <Layout
      title={intl.formatMessage({defaultMessage: 'Impressum'})}
      description={intl.formatMessage({defaultMessage: 'Impressum'})}
      noindex={true}
      nofollow={true}
      openGraph={null}
    >
      <section className='max-w-7xl mx-auto px-4 p-4 pb-20'>
        <h1 className='font-extrabold md:text-5xl text-4xl font-mono py-12'>
          <FormattedMessage defaultMessage='Impressum' />
        </h1>
        <h2 className='py-4 font-semibold text-lg'>
          <FormattedMessage defaultMessage='Angaben gemäss § 5 TMG' />
        </h2>
        <p>Delivery+</p>
        <p>Bgm.-Butscher-Str. 5</p>
        <p>67065 Ludwigshafen</p>
        <p>
          <FormattedMessage defaultMessage='Deutschland' />
        </p>
        <h2 className='py-4 font-semibold text-lg'>
          <FormattedMessage defaultMessage='Kontakt' />
        </h2>
        <p>E-Mail: info@delivery.plus</p>

        <h2 className='py-4 font-semibold text-lg'>
          <FormattedMessage defaultMessage='Umsatzsteuer-ID' />
        </h2>
        <p>
          <FormattedMessage defaultMessage='Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:' />
        </p>
        <p>
          <FormattedMessage defaultMessage='- in Beantragung -' />
        </p>

        <h2 className='py-4 font-semibold text-lg'>
          <FormattedMessage defaultMessage='EU-Streitschlichtung' />
        </h2>
        <p>
          <FormattedMessage defaultMessage='Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:' />{' '}
          <a
            className='underline'
            href='https://ec.europa.eu/consumers/odr/'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          .{' '}
          <FormattedMessage defaultMessage='Unsere E-Mail-Adresse finden Sie oben im Impressum.' />
        </p>
      </section>
    </Layout>
  )
}
